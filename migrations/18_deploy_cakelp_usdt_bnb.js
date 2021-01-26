const LP = artifacts.require('./CakeLP_USDT_BNB.sol')

module.exports = async function (deployer) {
    await deployer.deploy(
        LP,
        process.env.NAME,
        process.env.ALIAS,
        process.env.TOKEN_MAIN,
        "0x20bCC3b8a0091dDac2d0BC30F68E6CBb97de59Cd", //tokenLP
        process.env.CONTROLLER,
        process.env.MASTERCHEF,
        process.env.CAKE_POOL,
        17
    )
}