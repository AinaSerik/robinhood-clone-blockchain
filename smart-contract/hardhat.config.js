require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/JKSMxE3QguC218ns7uHcXv0gcmIzF65W',
      accounts: [
        '9e7388f37556f54c3ecbb91d1f55be6b0eb5bd1e44dc5f42d53f4b53eb84b6e4',
      ],
    },
  },
}
