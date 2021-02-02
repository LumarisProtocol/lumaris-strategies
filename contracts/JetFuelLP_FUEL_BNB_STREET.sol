// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;

import "./JetFuelLP.sol";

contract JetFuelLP_FUEL_BNB_STREET is JetFuelLP {
    using SafeBEP20 for IBEP20;
    
    constructor(string memory _name, string memory _alias, IBEP20 _tokenMain, IBEP20 _token, IController _controller, IMasterChef _masterchef, ICakePool _cakePool, uint256 _pid) 
    JetFuelLP(_name, _alias, _tokenMain, _token, _controller, _masterchef, _cakePool, _pid)
    public {}

}