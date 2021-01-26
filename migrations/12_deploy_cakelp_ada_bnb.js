const LP = artifacts.require('./CakeLP_ADA_BNB.sol')

module.exports = async function (deployer) {
    await deployer.deploy(
        LP,
        process.env.NAME,
        process.env.ALIAS,
        process.env.TOKEN_MAIN,
        "0xBA51D1AB95756ca4eaB8737eCD450cd8F05384cF", //tokenLP
        process.env.CONTROLLER,
        process.env.MASTERCHEF,
        process.env.CAKE_POOL,
        3
    )
}