// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

interface ICakePool {

    function enterStaking(uint256 _amount) external;

    function leaveStaking(uint256 _amount) external;

    function pendingCake(uint256 _pid, address _user) external view returns (uint256);

}