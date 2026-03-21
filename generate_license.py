#!/usr/bin/env python3
"""License generation tool for Aleph Null LLC.

Usage:
  # First time: generate key pair
  python scripts/generate_license.py keygen

  # Issue a license
  python scripts/generate_license.py issue \
    --licensee "Acme Corp" \
    --tier pro \
    --seats 10 \
    --expires 2027-03-19 \
    --output acme-license.json

KEEP THE PRIVATE KEY SECRET. The public key goes in src/aleph/licensing/validator.py.
"""

import argparse
import base64
import json
import os
import sys
from datetime import datetime


def keygen(args):
    """Generate Ed25519 key pair for license signing."""
    try:
        from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey
        from cryptography.hazmat.primitives import serialization
    except ImportError:
        print("Install cryptography: pip install cryptography")
        sys.exit(1)

    private_key = Ed25519PrivateKey.generate()
    public_key = private_key.public_key()

    # Save private key (KEEP SECRET)
    private_bytes = private_key.private_bytes(
        encoding=serialization.Encoding.PEM,
        format=serialization.PrivateFormat.PKCS8,
        encryption_algorithm=serialization.NoEncryption(),
    )
    private_path = args.output or "aleph_license_private.pem"
    with open(private_path, "wb") as f:
        f.write(private_bytes)
    os.chmod(private_path, 0o600)

    # Extract public key as base64 (for embedding in validator.py)
    public_bytes = public_key.public_bytes(
        encoding=serialization.Encoding.Raw,
        format=serialization.PublicFormat.Raw,
    )
    public_b64 = base64.b64encode(public_bytes).decode("ascii")

    print(f"Private key saved to: {private_path}")
    print(f"  (KEEP THIS SECRET — do NOT commit to git)")
    print()
    print(f"Public key (base64) — put this in src/aleph/licensing/validator.py:")
    print(f'  _PUBLIC_KEY_B64 = "{public_b64}"')
    print()
    print(f"Public key (hex): {public_bytes.hex()}")


def issue(args):
    """Sign and issue a license file."""
    try:
        from cryptography.hazmat.primitives.asymmetric.ed25519 import Ed25519PrivateKey
        from cryptography.hazmat.primitives import serialization
    except ImportError:
        print("Install cryptography: pip install cryptography")
        sys.exit(1)

    # Load private key
    key_path = args.key or "aleph_license_private.pem"
    if not os.path.isfile(key_path):
        print(f"Private key not found: {key_path}")
        print("Run: python scripts/generate_license.py keygen")
        sys.exit(1)

    with open(key_path, "rb") as f:
        private_key = serialization.load_pem_private_key(f.read(), password=None)

    # Build license payload
    payload = {
        "licensee": args.licensee,
        "tier": args.tier,
        "seats": args.seats,
        "expires": args.expires,
        "issued": datetime.utcnow().strftime("%Y-%m-%d"),
        "issuer": "Aleph Null LLC",
        "domain": "alephnull.ai",
    }

    # Sign
    canonical = json.dumps(payload, sort_keys=True, separators=(",", ":"))
    signature = private_key.sign(canonical.encode("utf-8"))
    payload["signature"] = signature.hex()

    # Write license file
    output = args.output or f"{args.licensee.lower().replace(' ', '-')}-license.json"
    with open(output, "w", encoding="utf-8") as f:
        json.dump(payload, f, indent=2)

    print(f"License issued: {output}")
    print(f"  Licensee: {args.licensee}")
    print(f"  Tier: {args.tier}")
    print(f"  Seats: {args.seats}")
    print(f"  Expires: {args.expires}")
    print()
    print(f"Deliver this file to the customer.")
    print(f"They place it at ~/.aleph/license.json or .aleph-license.json in their project.")


def main():
    parser = argparse.ArgumentParser(description="Aleph license management (Aleph Null LLC)")
    sub = parser.add_subparsers(dest="command")

    kg = sub.add_parser("keygen", help="Generate Ed25519 key pair")
    kg.add_argument("-o", "--output", help="Private key output path", default=None)

    iss = sub.add_parser("issue", help="Issue a signed license")
    iss.add_argument("--licensee", required=True, help="Company/person name")
    iss.add_argument("--tier", choices=["pro", "enterprise"], default="pro")
    iss.add_argument("--seats", type=int, default=5)
    iss.add_argument("--expires", required=True, help="Expiration date (YYYY-MM-DD)")
    iss.add_argument("--key", help="Private key path", default=None)
    iss.add_argument("-o", "--output", help="License file output path", default=None)

    args = parser.parse_args()
    if args.command == "keygen":
        keygen(args)
    elif args.command == "issue":
        issue(args)
    else:
        parser.print_help()


if __name__ == "__main__":
    main()
