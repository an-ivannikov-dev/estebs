import { contract, deploy } from 'ethereum-mars';
import { UniswapV2Factory } from './build/artifacts';



deploy({}, async (deployer) => {
  const feeToSetter = '0x0000000000000000000000000000000000000000';
  const factory = contract('UniswapV2Factory', UniswapV2Factory, [feeToSetter]);
});
