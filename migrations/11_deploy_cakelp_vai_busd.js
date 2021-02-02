const LP = artifacts.require('./CakeLP_VAI_BUSD.sol')

module.exports = async function (deployer) {
    if (parseInt(process.env.DEPLOY_CAKE) == 1) {
        await deployer.deploy(
            LP,
            process.env.NAME,
            process.env.ALIAS,
            process.env.TOKEN_MAIN,
            "0xfF17ff314925Dff772b71AbdFF2782bC913B3575", //tokenLP
            process.env.CONTROLLER,
            process.env.MASTERCHEF,
            process.env.CAKE_POOL,
            41
        )
    }
}