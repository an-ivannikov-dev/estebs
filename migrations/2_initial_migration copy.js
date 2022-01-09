const Migrations = artifacts.require("UniswapV2Factory");

module.exports = async function (deployer, net, a) {
  const factory = await Migrations.deployed();
  const hash = await factory.INIT_CODE_PAIR_HASH();
  console.log(hash);
};
