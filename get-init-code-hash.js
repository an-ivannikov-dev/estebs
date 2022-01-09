// file ./get-init-code-hash.js
const UniswapV2Pair = artifacts.require('UniswapV2Pair.sol');
const { bytecode } = require('@uniswap/v2-core/build/UniswapV2Pair.json');



module.exports = async (callback) => {
  console.log(
    'UniswapV2Pair bytecode hash (Look for INIT_CODE_HASH):\n%s',
    (web3.utils.keccak256(UniswapV2Pair.bytecode)).substring(2)
  );
  console.log(
    'Original UniswapV2Pair bytecode hash:\n%s',
    (web3.utils.keccak256(`0x${bytecode}`)).substring(2)
  );
  console.log('is it equal?', UniswapV2Pair.bytecode === `0x${bytecode}`)
  callback();
}
