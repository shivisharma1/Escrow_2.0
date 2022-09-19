//ESCROW --
// var Escrow = artifacts.require("Escrow");
// module.exports = function(deployer) {
// deployer.deploy(Escrow);
//     // Additional contracts can be deployed here
// };

//FACTORY ESCROW --
// const EscrowFactoryContract = artifacts.require("EscrowFactory");
// module.exports = function(deployer) {
//  deployer.deploy(EscrowFactoryContract);
// };

//PROXY --
// // 2_deploy_contracts.js
// const { deployProxy } = require('@openzeppelin/truffle-upgrades');
// const Escrow = artifacts.require("Escrow");
// const EscrowFactory = artifacts.require("EscrowFactory");
// /** Deploy contract using openzeppelin deployProxy, which will create a proxy address for you */
// module.exports = async (deployer) => {
//   const factory = await deployProxy(EscrowFactory, { deployer });
//   const escrow = await deployProxy(Escrow,
//     [100,  '0x0000000000000000000000000000000000000000'],
//   { deployer   });
// };

//Deploy Escrow and EscrowFactory Smart Contract
const Escrow = artifacts.require("Escrow");
const EscrowFactoryContract = artifacts.require("EscrowFactory");

const { deployProxy } = require("@openzeppelin/truffle-upgrades");

module.exports = async function (deployer) {
  deployer.deploy(Escrow);
  deployer.deploy(EscrowFactoryContract);
  await deployProxy(
    Escrow,
    [
      "0xd0873e9976a5Bffb59944E34a9430CeeBB1a4A90",
      1000000000000000,
      2,
    ],
    { deployer, initializer: "initialiser" }
  );
};
