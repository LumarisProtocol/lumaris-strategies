const LP = artifacts.require('./JetFuelLP_FUEL_BNB_STREET.sol')

module.exports = async function (deployer) {
    if (parseInt(process.env.DEPLOY_JETFUEL) == 1) {
        await deployer.deploy(
            LP,
            process.env.NAME,
            process.env.ALIAS,
            process.env.TOKEN_MAIN,
            "0xd26092c6ce6FB359302A9453dc0c7f312794Ef7E", //tokenLP
            process.env.CONTROLLER,
            process.env.MASTERCHEF,
            process.env.JETFUEL_POOL,
            7
        )
    }
}