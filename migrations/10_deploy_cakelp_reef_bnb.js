const LP = artifacts.require('./CakeLP_REEF_BNB.sol')

module.exports = async function (deployer) {
    await deployer.deploy(
        LP,
        process.env.NAME,
        process.env.ALIAS,
        process.env.TOKEN_MAIN,
        "0x58B58cab6C5cF158f63A2390b817710826d116D0", //tokenLP
        process.env.CONTROLLER,
        process.env.MASTERCHEF,
        process.env.CAKE_POOL,
        45
    )
}