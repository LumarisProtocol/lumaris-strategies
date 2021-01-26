// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

interface IController {

    function mint(address _user, uint256 _amount) external;

    function registerMember(address _user, address _ref) external;

}