const LP = artifacts.require('./JetFuelLP_VAPOR_BNB.sol')

module.exports = async function (deployer) {
    if (parseInt(process.env.DEPLOY_JETFUEL) == 1) {
        await deployer.deploy(
            LP,
            process.env.NAME,
            process.env.ALIAS,
            process.env.TOKEN_MAIN,
            "0x01ffd4b8de49442ab3ef755cc6bb57deeb6b871a", //tokenLP
            process.env.CONTROLLER,
            process.env.MASTERCHEF,
            process.env.JETFUEL_POOL,
            10
        )
    }
}