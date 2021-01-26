const LP = artifacts.require('./CakeLP_ETH_BNB.sol')

module.exports = async function (deployer) {
    await deployer.deploy(
        LP,
        process.env.NAME,
        process.env.ALIAS,
        process.env.TOKEN_MAIN,
        "0x70D8929d04b60Af4fb9B58713eBcf18765aDE422", //tokenLP
        process.env.CONTROLLER,
        process.env.MASTERCHEF,
        process.env.CAKE_POOL,
        14
    )
}