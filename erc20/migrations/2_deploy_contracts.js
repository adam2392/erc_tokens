const Token = artifacts.require('./Token.sol');

module.exports = (deployer) => {
  deployer.deploy(Token);
};