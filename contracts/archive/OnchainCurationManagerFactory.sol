//SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "./OnchainCurationManagerV1.sol";

contract OnchainCurationManagerFactory {

    event CreatedCurationManager(
        address indexed creator,
        address indexed curationContractAddress
    );

    function createNewCurationManager(
        string memory _curationEntity,
        string memory _curationSeasonTitle,
        address _initialCurationPassAddress, 
        uint256 _initialCurationLimit, 
        bool _initialPauseState
    )   external returns (address) 
    {
        OnchainCurationManagerV1 newCurationManager = new OnchainCurationManagerV1(
            _curationEntity,
            _curationSeasonTitle,
            _initialCurationPassAddress,
            _initialCurationLimit,
            _initialPauseState
        );

        emit CreatedCurationManager(
            msg.sender,
            address(newCurationManager)
        );

        address newCurationManagerAddress = address(newCurationManager);

        return newCurationManagerAddress;
    }
}