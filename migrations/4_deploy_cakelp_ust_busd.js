const LP = artifacts.require('./CakeLP_UST_BUSD.sol')

module.exports = async function (deployer) {
    await deployer.deploy(
        LP,
        process.env.NAME,
        process.env.ALIAS,
        process.env.TOKEN_MAIN,
        "0xD1F12370b2ba1C79838337648F820a87eDF5e1e6", //tokenLP
        process.env.CONTROLLER,
        process.env.MASTERCHEF,
        process.env.CAKE_POOL,
        63
    )
}