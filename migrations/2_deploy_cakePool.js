const CakePool = artifacts.require('./CakePool.sol')

module.exports = async function (deployer) {
    if (parseInt(process.env.DEPLOY_CAKE) == 1) {
        await deployer.deploy(
            CakePool,
            process.env.NAME,
            process.env.ALIAS,
            process.env.TOKEN_MAIN,
            process.env.TOKEN_CAKE,
            process.env.CONTROLLER,
            process.env.MASTERCHEF,
            process.env.CAKE_POOL
        )
    }
}