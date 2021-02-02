const LP = artifacts.require('./JetFuelLP_BHC_BNB.sol')

module.exports = async function (deployer) {
    if (parseInt(process.env.DEPLOY_JETFUEL) == 1) {
        await deployer.deploy(
            LP,
            process.env.NAME,
            process.env.ALIAS,
            process.env.TOKEN_MAIN,
            "0xd46e7f33f8788f87d6017074dc4e4d781d3df91e", //tokenLP
            process.env.CONTROLLER,
            process.env.MASTERCHEF,
            process.env.JETFUEL_POOL,
            9
        )
    }
}