const LP = artifacts.require('./CakeLP_TWT_BNB.sol')

module.exports = async function (deployer) {
    if (parseInt(process.env.DEPLOY_CAKE) == 1) {
        await deployer.deploy(
            LP,
            process.env.NAME,
            process.env.ALIAS,
            process.env.TOKEN_MAIN,
            "0x610e7a287c27dfFcaC0F0a94f547Cc1B770cF483", //tokenLP
            process.env.CONTROLLER,
            process.env.MASTERCHEF,
            process.env.CAKE_POOL,
            12
        )
    }
}