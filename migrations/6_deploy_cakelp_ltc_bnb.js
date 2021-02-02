const LP = artifacts.require('./CakeLP_LTC_BNB.sol')

module.exports = async function (deployer) {
    if (parseInt(process.env.DEPLOY_CAKE) == 1) {
        await deployer.deploy(
            LP,
            process.env.NAME,
            process.env.ALIAS,
            process.env.TOKEN_MAIN,
            "0xBc765Fd113c5bDB2ebc25F711191B56bB8690aec", //tokenLP
            process.env.CONTROLLER,
            process.env.MASTERCHEF,
            process.env.CAKE_POOL,
            54
        )
    }
}