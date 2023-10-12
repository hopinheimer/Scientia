// SPDX-License-Identifier: AGPL-3.0
pragma solidity ^0.8.0;
pragma abicoder v2;

/**
 * @title Governance V2 contract
 * @dev Main point of interaction with Scientia protocol's governance
 * - Create a Proposal
 * - Cancel a Proposal
 * - Queue a Proposal
 * - Execute a Proposal
 * - Submit Vote to a Proposal
 * Proposal States : Pending => Active => Succeeded(/Failed) => Queued => Executed(/Expired)
 *                   The transition to "Canceled" can appear in multiple states
 * @author Scientia x Aave
 **/


interface IScientiaGovernance {
    enum ProposalState {
        Pending,
        Canceled,
        Active,
        Failed,
        Succeeded,
        Queued,
        Expired,
        Executed
    }

    struct Vote {
        bool support;
        uint248 votingPower;
    }

    struct Proposal {
        uint256 id;
        address creator;
        uint256 startBlock;
        uint256 endBlock;
        uint256 executionTime;
        uint256 forVotes;
        uint256 againstVotes;
        bool executed;
        bool canceled;
        bytes32 ipfsHash;
        mapping(address => Vote) votes;
    }

    struct ProposalWithoutVotes {
        uint256 id;
        address creator;
        uint256 startBlock;
        uint256 endBlock;
        uint256 executionTime;
        uint256 forVotes;
        uint256 againstVotes;
        bool executed;
        bool canceled;
        address strategy;
        bytes32 ipfsHash;
    }

    /**
    * @dev create proposal where proposing power > threshold
    * @param ipfsHash IPFS hash on the proposal
    */
    function create(bytes32 ipfsHash) external returns (uint256);

    /**
    * @dev cancelling proposal optional function
    * @param proposalId proposalId generated at the creation of every proposal
    */
    function cancel(uint256 proposalId) external;

    /**
    * @dev Execute the proposal (If Queued)
    * @param proposalId proposalId generated at the creation of every proposal
    */
    function excute(uint256 proposalId) external payable;

    /**
    * @dev Queue proposal for Execution if the parameters for Quorum is met
    * @param proposalId proposalId generated at the creation of every proposal
    */
    function queue(uint256 proposalId) external;

    /**
    * @dev Vote function for the msg.sender for/against to Proposal
    * @param proposalId proposalId generated at the creation of every proposal
    * @param support boolean, true = vote for, false = vote against
    */
    function submitVote(uint256 proposalId,bool support) external;

    function getProposalsCount() external view returns (uint256);

    function getProposalById(uint256 proposalId) external view returns (ProposalWithoutVotes memory);

    function getVoteOnProposal(uint256 proposalId, address voter) external view returns (Vote memory);

    function getProposalState(uint256 proposalId) external view returns (ProposalState);

}
