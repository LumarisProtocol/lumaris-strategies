const LP = artifacts.require('./CakeLP_TEN_BNB.sol')

module.exports = async function (deployer) {
    await deployer.deploy(
        LP,
        process.env.NAME,
        process.env.ALIAS,
        process.env.TOKEN_MAIN,
        "0x01ecc44Ddd2D104F44D2AA1A2bD9DFbC91aE8275", //tokenLP
        process.env.CONTROLLER,
        process.env.MASTERCHEF,
        process.env.CAKE_POOL,
        50
    )
}