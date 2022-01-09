
# For original INIT_CODE_HASH

## Compiler
https://ethereum-waffle.readthedocs.io/en/latest/getting-started.html#

## Deployer
https://ethereum-mars.readthedocs.io/en/latest/cli.html

```bash
# Compile
npx waffle waffle.json

# Check equal
npx truffle exec ./get-init-code-hash.js

# Concat files (for verifying on etherscan)
npx waffle flatten waffle.json

# Make ./build/artifacts.ts
npx mars

# Deploy and verify (Invalid compiler version...)
npx ts-node ./mars-deploy.ts --private-key 0x? --infura-key ? --network ropsten --etherscan-key ? --verify

# Contract constructor ABI Encoding for manual verification
# https://abi.hashex.org/
```
