const LP = artifacts.require('./JetFuelLP_UNI_BNB.sol')

module.exports = async function (deployer) {
    if (parseInt(process.env.DEPLOY_JETFUEL) == 1) {
        await deployer.deploy(
            LP,
            process.env.NAME,
            process.env.ALIAS,
            process.env.TOKEN_MAIN,
            "0x4269e7f43a63cea1ad7707be565a94a9189967e9", //tokenLP
            process.env.CONTROLLER,
            process.env.MASTERCHEF,
            process.env.JETFUEL_POOL,
            4
        )
    }
}