const Migrations = artifacts.require("UniswapV2Factory");

module.exports = async function (deployer, net, a) {
  await deployer.deploy(Migrations, a[0]);
};
