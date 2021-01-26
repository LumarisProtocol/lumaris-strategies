// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

interface IMembers {
    function addMember(address _member, address _sponsor) external;

    function isMember(address _member) external view returns (bool);

    function membersList(uint256 _id) external view returns (address);

    function setVenus(address _venus) external;

    function getParentTree(address _member, uint256 _deep)
        external
        view
        returns (address[] memory);
}
