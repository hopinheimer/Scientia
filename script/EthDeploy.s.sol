// SPDX-License-Identifier: AGPL-3.0
pragma solidity ^0.8.0;
pragma abicoder v2;

import {Script} from "forge-std/Script.sol";
import {ScientiaGovernanceV1} from "../src/contracts/ScientiaGovernance.sol";

contract EthDeploy is Script {

    function run() external returns (ScientiaGovernanceV1) {
        vm.startBroadcast();
        ScientiaGovernanceV1 s = new ScientiaGovernanceV1();
        vm.stopBroadcast();  
        return (s);
    }

}