const LP = artifacts.require('./CakeLP_BUSD_BNB.sol')

module.exports = async function (deployer) {
    if (parseInt(process.env.DEPLOY_CAKE) == 1) {
        await deployer.deploy(
            LP,
            process.env.NAME,
            process.env.ALIAS,
            process.env.TOKEN_MAIN,
            "0x1B96B92314C44b159149f7E0303511fB2Fc4774f", //tokenLP
            process.env.CONTROLLER,
            process.env.MASTERCHEF,
            process.env.CAKE_POOL,
            2
        )
    }
}