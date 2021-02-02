const LP = artifacts.require('./JetFuelLP_FUEL_BNB.sol')

module.exports = async function (deployer) {
    if (parseInt(process.env.DEPLOY_JETFUEL) == 1) {
        await deployer.deploy(
            LP,
            process.env.NAME,
            process.env.ALIAS,
            process.env.TOKEN_MAIN,
            "0x3763A3263CEaca5e7Cc1Bc22A43920bAd9f743Cd", //tokenLP
            process.env.CONTROLLER,
            process.env.MASTERCHEF,
            process.env.JETFUEL_POOL,
            6
        )
    }
}