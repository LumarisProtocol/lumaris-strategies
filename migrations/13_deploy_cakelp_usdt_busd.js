const LP = artifacts.require('./CakeLP_USDT_BUSD.sol')

module.exports = async function (deployer) {
    await deployer.deploy(
        LP,
        process.env.NAME,
        process.env.ALIAS,
        process.env.TOKEN_MAIN,
        "0xc15fa3E22c912A276550F3E5FE3b0Deb87B55aCd", //tokenLP
        process.env.CONTROLLER,
        process.env.MASTERCHEF,
        process.env.CAKE_POOL,
        11
    )
}