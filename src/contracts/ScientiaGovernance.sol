// SPDX-License-Identifier: AGPL-3.0
pragma solidity ^0.8.0;
pragma abicoder v2;

import {IScientiaGovernance} from "../interfaces/IScientiaGovernance.sol";
import  {SafeMath} from "../dependencies/SafeMath.sol";


contract ScientiaGovernanceV1 is IScientiaGovernance {
    using SafeMath for uint256;

    uint256 private _proposalsCount;
    mapping(uint256 => Proposal) private _proposals;

    function create(bytes32 ipfsHash) external override returns (uint256) {
        uint256 _v = _proposalsCount;

        Proposal storage newProposal = _proposals[_v];
        newProposal.id = _v;
        newProposal.ipfsHash = ipfsHash;
        newProposal.creator = msg.sender;

        _proposalsCount++;
        return newProposal.id;
    }

    function cancel(uint256 proposalId) external override {
        Proposal storage proposal = _proposals[proposalId];
        proposal.canceled = true;
    }

    function excute(uint256 proposalId) external payable override {}

    function queue(uint256 proposalId) external override {}

    function submitVote(uint256 proposalId, bool support) external override {
        Proposal storage proposal = _proposals[proposalId];
        Vote storage vote = proposal.votes[msg.sender];
        require(vote.votingPower == 0, "VOTE_ALREADY_SUBMITTED");

        uint256 votingPower = 100;

        if (support) {
            proposal.forVotes = proposal.forVotes.add(votingPower);
        } else {
            proposal.againstVotes = proposal.againstVotes.add(votingPower);
        }

        vote.support = support;
        vote.votingPower = uint248(votingPower);
    }

    function getProposalsCount() external view override returns (uint256) {

        
    }

    function getProposalById(
        uint256 proposalId
    ) external view override returns (ProposalWithoutVotes memory) {}

    function getVoteOnProposal(
        uint256 proposalId,
        address voter
    ) external view override returns (Vote memory) {}

    function getProposalState(
        uint256 proposalId
    ) external view override returns (ProposalState) {}
}
