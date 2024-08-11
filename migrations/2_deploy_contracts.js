/* eslint-disable no-undef */

const DefiMarketplace = artifacts.require('DefiMarketplace')

module.exports = async (deployer) => {
  const accounts = await web3.eth.getAccounts()

  await deployer.deploy(DefiMarketplace, 'Defi Marketplace NFTs', 'DMNFT', 10, accounts[1])
}
