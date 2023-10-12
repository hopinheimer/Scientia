export const contract =  {
    "abi": [
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "proposalId",
            "type": "uint256"
          }
        ],
        "name": "cancel",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes32",
            "name": "ipfsHash",
            "type": "bytes32"
          }
        ],
        "name": "create",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "proposalId",
            "type": "uint256"
          }
        ],
        "name": "excute",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "proposalId",
            "type": "uint256"
          }
        ],
        "name": "getProposalById",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "creator",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "startBlock",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "endBlock",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "executionTime",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "forVotes",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "againstVotes",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "executed",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "canceled",
                "type": "bool"
              },
              {
                "internalType": "address",
                "name": "strategy",
                "type": "address"
              },
              {
                "internalType": "bytes32",
                "name": "ipfsHash",
                "type": "bytes32"
              }
            ],
            "internalType": "struct IScientiaGovernance.ProposalWithoutVotes",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "proposalId",
            "type": "uint256"
          }
        ],
        "name": "getProposalState",
        "outputs": [
          {
            "internalType": "enum IScientiaGovernance.ProposalState",
            "name": "",
            "type": "uint8"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getProposalsCount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "proposalId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "voter",
            "type": "address"
          }
        ],
        "name": "getVoteOnProposal",
        "outputs": [
          {
            "components": [
              {
                "internalType": "bool",
                "name": "support",
                "type": "bool"
              },
              {
                "internalType": "uint248",
                "name": "votingPower",
                "type": "uint248"
              }
            ],
            "internalType": "struct IScientiaGovernance.Vote",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "proposalId",
            "type": "uint256"
          }
        ],
        "name": "queue",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "proposalId",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "support",
            "type": "bool"
          }
        ],
        "name": "submitVote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "bytecode": {
      "object": "0x",
      "sourceMap": "",
      "linkReferences": {}
    },
    "deployedBytecode": {
      "object": "0x",
      "sourceMap": "",
      "linkReferences": {}
    },
    "methodIdentifiers": {
      "cancel(uint256)": "40e58ee5",
      "create(bytes32)": "7368a8ce",
      "excute(uint256)": "a96c065b",
      "getProposalById(uint256)": "3656de21",
      "getProposalState(uint256)": "9080936f",
      "getProposalsCount()": "98e527d3",
      "getVoteOnProposal(uint256,address)": "4185ff83",
      "queue(uint256)": "ddf0b009",
      "submitVote(uint256,bool)": "612c56fa"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.21+commit.d9974bed\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"proposalId\",\"type\":\"uint256\"}],\"name\":\"cancel\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"ipfsHash\",\"type\":\"bytes32\"}],\"name\":\"create\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"proposalId\",\"type\":\"uint256\"}],\"name\":\"excute\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"proposalId\",\"type\":\"uint256\"}],\"name\":\"getProposalById\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"creator\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"startBlock\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"endBlock\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"executionTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"forVotes\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"againstVotes\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"executed\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"canceled\",\"type\":\"bool\"},{\"internalType\":\"address\",\"name\":\"strategy\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"ipfsHash\",\"type\":\"bytes32\"}],\"internalType\":\"struct IScientiaGovernance.ProposalWithoutVotes\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"proposalId\",\"type\":\"uint256\"}],\"name\":\"getProposalState\",\"outputs\":[{\"internalType\":\"enum IScientiaGovernance.ProposalState\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getProposalsCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"proposalId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"voter\",\"type\":\"address\"}],\"name\":\"getVoteOnProposal\",\"outputs\":[{\"components\":[{\"internalType\":\"bool\",\"name\":\"support\",\"type\":\"bool\"},{\"internalType\":\"uint248\",\"name\":\"votingPower\",\"type\":\"uint248\"}],\"internalType\":\"struct IScientiaGovernance.Vote\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"proposalId\",\"type\":\"uint256\"}],\"name\":\"queue\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"proposalId\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"support\",\"type\":\"bool\"}],\"name\":\"submitVote\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Scientia x Aave*\",\"details\":\"Main point of interaction with Scientia protocol's governance - Create a Proposal - Cancel a Proposal - Queue a Proposal - Execute a Proposal - Submit Vote to a Proposal Proposal States : Pending => Active => Succeeded(/Failed) => Queued => Executed(/Expired)                   The transition to \\\"Canceled\\\" can appear in multiple states\",\"kind\":\"dev\",\"methods\":{\"cancel(uint256)\":{\"details\":\"cancelling proposal optional function\",\"params\":{\"proposalId\":\"proposalId generated at the creation of every proposal\"}},\"create(bytes32)\":{\"details\":\"create proposal where proposing power > threshold\",\"params\":{\"ipfsHash\":\"IPFS hash on the proposal\"}},\"excute(uint256)\":{\"details\":\"Execute the proposal (If Queued)\",\"params\":{\"proposalId\":\"proposalId generated at the creation of every proposal\"}},\"queue(uint256)\":{\"details\":\"Queue proposal for Execution if the parameters for Quorum is met\",\"params\":{\"proposalId\":\"proposalId generated at the creation of every proposal\"}},\"submitVote(uint256,bool)\":{\"details\":\"Vote function for the msg.sender for/against to Proposal\",\"params\":{\"proposalId\":\"proposalId generated at the creation of every proposal\",\"support\":\"boolean, true = vote for, false = vote against\"}}},\"title\":\"Governance V2 contract\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/interfaces/IScientiaGovernance.sol\":\"IScientiaGovernance\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/=lib/openzeppelin-contracts/\",\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\"]},\"sources\":{\"src/interfaces/IScientiaGovernance.sol\":{\"keccak256\":\"0xcd755caf3f7dbdea34f1e1e121dcc329182f036d0130e47d4463399164fce712\",\"license\":\"AGPL-3.0\",\"urls\":[\"bzz-raw://6e41d8d9660be23890855d808cbf230e98835632cfb4acf426df753f3634cad6\",\"dweb:/ipfs/QmYbdrFZjgbU6txJv6aCt9TQtE4bbceFcJ22PzLEGfVixN\"]}},\"version\":1}",
    "metadata": {
      "compiler": {
        "version": "0.8.21+commit.d9974bed"
      },
      "language": "Solidity",
      "output": {
        "abi": [
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function",
            "name": "cancel"
          },
          {
            "inputs": [
              {
                "internalType": "bytes32",
                "name": "ipfsHash",
                "type": "bytes32"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function",
            "name": "create",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
              }
            ],
            "stateMutability": "payable",
            "type": "function",
            "name": "excute"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "name": "getProposalById",
            "outputs": [
              {
                "internalType": "struct IScientiaGovernance.ProposalWithoutVotes",
                "name": "",
                "type": "tuple",
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "creator",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "startBlock",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "endBlock",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "executionTime",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "forVotes",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "againstVotes",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bool",
                    "name": "executed",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "canceled",
                    "type": "bool"
                  },
                  {
                    "internalType": "address",
                    "name": "strategy",
                    "type": "address"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "ipfsHash",
                    "type": "bytes32"
                  }
                ]
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "name": "getProposalState",
            "outputs": [
              {
                "internalType": "enum IScientiaGovernance.ProposalState",
                "name": "",
                "type": "uint8"
              }
            ]
          },
          {
            "inputs": [],
            "stateMutability": "view",
            "type": "function",
            "name": "getProposalsCount",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "voter",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "name": "getVoteOnProposal",
            "outputs": [
              {
                "internalType": "struct IScientiaGovernance.Vote",
                "name": "",
                "type": "tuple",
                "components": [
                  {
                    "internalType": "bool",
                    "name": "support",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint248",
                    "name": "votingPower",
                    "type": "uint248"
                  }
                ]
              }
            ]
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function",
            "name": "queue"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "proposalId",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "support",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function",
            "name": "submitVote"
          }
        ],
        "devdoc": {
          "kind": "dev",
          "methods": {
            "cancel(uint256)": {
              "details": "cancelling proposal optional function",
              "params": {
                "proposalId": "proposalId generated at the creation of every proposal"
              }
            },
            "create(bytes32)": {
              "details": "create proposal where proposing power > threshold",
              "params": {
                "ipfsHash": "IPFS hash on the proposal"
              }
            },
            "excute(uint256)": {
              "details": "Execute the proposal (If Queued)",
              "params": {
                "proposalId": "proposalId generated at the creation of every proposal"
              }
            },
            "queue(uint256)": {
              "details": "Queue proposal for Execution if the parameters for Quorum is met",
              "params": {
                "proposalId": "proposalId generated at the creation of every proposal"
              }
            },
            "submitVote(uint256,bool)": {
              "details": "Vote function for the msg.sender for/against to Proposal",
              "params": {
                "proposalId": "proposalId generated at the creation of every proposal",
                "support": "boolean, true = vote for, false = vote against"
              }
            }
          },
          "version": 1
        },
        "userdoc": {
          "kind": "user",
          "methods": {},
          "version": 1
        }
      },
      "settings": {
        "remappings": [
          "@openzeppelin/=lib/openzeppelin-contracts/",
          "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
          "ds-test/=lib/forge-std/lib/ds-test/src/",
          "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
          "forge-std/=lib/forge-std/src/",
          "openzeppelin-contracts/=lib/openzeppelin-contracts/"
        ],
        "optimizer": {
          "enabled": true,
          "runs": 200
        },
        "metadata": {
          "bytecodeHash": "ipfs"
        },
        "compilationTarget": {
          "src/interfaces/IScientiaGovernance.sol": "IScientiaGovernance"
        },
        "libraries": {}
      },
      "sources": {
        "src/interfaces/IScientiaGovernance.sol": {
          "keccak256": "0xcd755caf3f7dbdea34f1e1e121dcc329182f036d0130e47d4463399164fce712",
          "urls": [
            "bzz-raw://6e41d8d9660be23890855d808cbf230e98835632cfb4acf426df753f3634cad6",
            "dweb:/ipfs/QmYbdrFZjgbU6txJv6aCt9TQtE4bbceFcJ22PzLEGfVixN"
          ],
          "license": "AGPL-3.0"
        }
      },
      "version": 1
    },
    "ast": {
      "absolutePath": "src/interfaces/IScientiaGovernance.sol",
      "id": 39521,
      "exportedSymbols": {
        "IScientiaGovernance": [
          39520
        ]
      },
      "nodeType": "SourceUnit",
      "src": "37:2876:16",
      "nodes": [
        {
          "id": 39389,
          "nodeType": "PragmaDirective",
          "src": "37:23:16",
          "nodes": [],
          "literals": [
            "solidity",
            "^",
            "0.8",
            ".0"
          ]
        },
        {
          "id": 39390,
          "nodeType": "PragmaDirective",
          "src": "61:19:16",
          "nodes": [],
          "literals": [
            "abicoder",
            "v2"
          ]
        },
        {
          "id": 39520,
          "nodeType": "ContractDefinition",
          "src": "519:2393:16",
          "nodes": [
            {
              "id": 39400,
              "nodeType": "EnumDefinition",
              "src": "555:162:16",
              "nodes": [],
              "canonicalName": "IScientiaGovernance.ProposalState",
              "members": [
                {
                  "id": 39392,
                  "name": "Pending",
                  "nameLocation": "584:7:16",
                  "nodeType": "EnumValue",
                  "src": "584:7:16"
                },
                {
                  "id": 39393,
                  "name": "Canceled",
                  "nameLocation": "601:8:16",
                  "nodeType": "EnumValue",
                  "src": "601:8:16"
                },
                {
                  "id": 39394,
                  "name": "Active",
                  "nameLocation": "619:6:16",
                  "nodeType": "EnumValue",
                  "src": "619:6:16"
                },
                {
                  "id": 39395,
                  "name": "Failed",
                  "nameLocation": "635:6:16",
                  "nodeType": "EnumValue",
                  "src": "635:6:16"
                },
                {
                  "id": 39396,
                  "name": "Succeeded",
                  "nameLocation": "651:9:16",
                  "nodeType": "EnumValue",
                  "src": "651:9:16"
                },
                {
                  "id": 39397,
                  "name": "Queued",
                  "nameLocation": "670:6:16",
                  "nodeType": "EnumValue",
                  "src": "670:6:16"
                },
                {
                  "id": 39398,
                  "name": "Expired",
                  "nameLocation": "686:7:16",
                  "nodeType": "EnumValue",
                  "src": "686:7:16"
                },
                {
                  "id": 39399,
                  "name": "Executed",
                  "nameLocation": "703:8:16",
                  "nodeType": "EnumValue",
                  "src": "703:8:16"
                }
              ],
              "name": "ProposalState",
              "nameLocation": "560:13:16"
            },
            {
              "id": 39405,
              "nodeType": "StructDefinition",
              "src": "723:70:16",
              "nodes": [],
              "canonicalName": "IScientiaGovernance.Vote",
              "members": [
                {
                  "constant": false,
                  "id": 39402,
                  "mutability": "mutable",
                  "name": "support",
                  "nameLocation": "750:7:16",
                  "nodeType": "VariableDeclaration",
                  "scope": 39405,
                  "src": "745:12:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 39401,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "745:4:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39404,
                  "mutability": "mutable",
                  "name": "votingPower",
                  "nameLocation": "775:11:16",
                  "nodeType": "VariableDeclaration",
                  "scope": 39405,
                  "src": "767:19:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint248",
                    "typeString": "uint248"
                  },
                  "typeName": {
                    "id": 39403,
                    "name": "uint248",
                    "nodeType": "ElementaryTypeName",
                    "src": "767:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint248",
                      "typeString": "uint248"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "name": "Vote",
              "nameLocation": "730:4:16",
              "scope": 39520,
              "visibility": "public"
            },
            {
              "id": 39431,
              "nodeType": "StructDefinition",
              "src": "799:321:16",
              "nodes": [],
              "canonicalName": "IScientiaGovernance.Proposal",
              "members": [
                {
                  "constant": false,
                  "id": 39407,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "833:2:16",
                  "nodeType": "VariableDeclaration",
                  "scope": 39431,
                  "src": "825:10:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 39406,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "825:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39409,
                  "mutability": "mutable",
                  "name": "creator",
                  "nameLocation": "853:7:16",
                  "nodeType": "VariableDeclaration",
                  "scope": 39431,
                  "src": "845:15:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 39408,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "845:7:16",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39411,
                  "mutability": "mutable",
                  "name": "startBlock",
                  "nameLocation": "878:10:16",
                  "nodeType": "VariableDeclaration",
                  "scope": 39431,
                  "src": "870:18:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 39410,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "870:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39413,
                  "mutability": "mutable",
                  "name": "endBlock",
                  "nameLocation": "906:8:16",
                  "nodeType": "VariableDeclaration",
                  "scope": 39431,
                  "src": "898:16:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 39412,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "898:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39415,
                  "mutability": "mutable",
                  "name": "executionTime",
                  "nameLocation": "932:13:16",
                  "nodeType": "VariableDeclaration",
                  "scope": 39431,
                  "src": "924:21:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 39414,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "924:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39417,
                  "mutability": "mutable",
                  "name": "forVotes",
                  "nameLocation": "963:8:16",
                  "nodeType": "VariableDeclaration",
                  "scope": 39431,
                  "src": "955:16:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 39416,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "955:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39419,
                  "mutability": "mutable",
                  "name": "againstVotes",
                  "nameLocation": "989:12:16",
                  "nodeType": "VariableDeclaration",
                  "scope": 39431,
                  "src": "981:20:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 39418,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "981:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39421,
                  "mutability": "mutable",
                  "name": "executed",
                  "nameLocation": "1016:8:16",
                  "nodeType": "VariableDeclaration",
                  "scope": 39431,
                  "src": "1011:13:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 39420,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1011:4:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39423,
                  "mutability": "mutable",
                  "name": "canceled",
                  "nameLocation": "1039:8:16",
                  "nodeType": "VariableDeclaration",
                  "scope": 39431,
                  "src": "1034:13:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 39422,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1034:4:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39425,
                  "mutability": "mutable",
                  "name": "ipfsHash",
                  "nameLocation": "1065:8:16",
                  "nodeType": "VariableDeclaration",
                  "scope": 39431,
                  "src": "1057:16:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 39424,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1057:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39430,
                  "mutability": "mutable",
                  "name": "votes",
                  "nameLocation": "1108:5:16",
                  "nodeType": "VariableDeclaration",
                  "scope": 39431,
                  "src": "1083:30:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Vote_$39405_storage_$",
                    "typeString": "mapping(address => struct IScientiaGovernance.Vote)"
                  },
                  "typeName": {
                    "id": 39429,
                    "keyName": "",
                    "keyNameLocation": "-1:-1:-1",
                    "keyType": {
                      "id": 39426,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1091:7:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Mapping",
                    "src": "1083:24:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Vote_$39405_storage_$",
                      "typeString": "mapping(address => struct IScientiaGovernance.Vote)"
                    },
                    "valueName": "",
                    "valueNameLocation": "-1:-1:-1",
                    "valueType": {
                      "id": 39428,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 39427,
                        "name": "Vote",
                        "nameLocations": [
                          "1102:4:16"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 39405,
                        "src": "1102:4:16"
                      },
                      "referencedDeclaration": 39405,
                      "src": "1102:4:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Vote_$39405_storage_ptr",
                        "typeString": "struct IScientiaGovernance.Vote"
                      }
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "name": "Proposal",
              "nameLocation": "806:8:16",
              "scope": 39520,
              "visibility": "public"
            },
            {
              "id": 39454,
              "nodeType": "StructDefinition",
              "src": "1126:319:16",
              "nodes": [],
              "canonicalName": "IScientiaGovernance.ProposalWithoutVotes",
              "members": [
                {
                  "constant": false,
                  "id": 39433,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "1172:2:16",
                  "nodeType": "VariableDeclaration",
                  "scope": 39454,
                  "src": "1164:10:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 39432,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1164:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39435,
                  "mutability": "mutable",
                  "name": "creator",
                  "nameLocation": "1192:7:16",
                  "nodeType": "VariableDeclaration",
                  "scope": 39454,
                  "src": "1184:15:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 39434,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1184:7:16",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39437,
                  "mutability": "mutable",
                  "name": "startBlock",
                  "nameLocation": "1217:10:16",
                  "nodeType": "VariableDeclaration",
                  "scope": 39454,
                  "src": "1209:18:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 39436,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1209:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39439,
                  "mutability": "mutable",
                  "name": "endBlock",
                  "nameLocation": "1245:8:16",
                  "nodeType": "VariableDeclaration",
                  "scope": 39454,
                  "src": "1237:16:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 39438,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1237:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39441,
                  "mutability": "mutable",
                  "name": "executionTime",
                  "nameLocation": "1271:13:16",
                  "nodeType": "VariableDeclaration",
                  "scope": 39454,
                  "src": "1263:21:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 39440,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1263:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39443,
                  "mutability": "mutable",
                  "name": "forVotes",
                  "nameLocation": "1302:8:16",
                  "nodeType": "VariableDeclaration",
                  "scope": 39454,
                  "src": "1294:16:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 39442,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1294:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39445,
                  "mutability": "mutable",
                  "name": "againstVotes",
                  "nameLocation": "1328:12:16",
                  "nodeType": "VariableDeclaration",
                  "scope": 39454,
                  "src": "1320:20:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 39444,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1320:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39447,
                  "mutability": "mutable",
                  "name": "executed",
                  "nameLocation": "1355:8:16",
                  "nodeType": "VariableDeclaration",
                  "scope": 39454,
                  "src": "1350:13:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 39446,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1350:4:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39449,
                  "mutability": "mutable",
                  "name": "canceled",
                  "nameLocation": "1378:8:16",
                  "nodeType": "VariableDeclaration",
                  "scope": 39454,
                  "src": "1373:13:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 39448,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1373:4:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39451,
                  "mutability": "mutable",
                  "name": "strategy",
                  "nameLocation": "1404:8:16",
                  "nodeType": "VariableDeclaration",
                  "scope": 39454,
                  "src": "1396:16:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 39450,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1396:7:16",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39453,
                  "mutability": "mutable",
                  "name": "ipfsHash",
                  "nameLocation": "1430:8:16",
                  "nodeType": "VariableDeclaration",
                  "scope": 39454,
                  "src": "1422:16:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 39452,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1422:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "name": "ProposalWithoutVotes",
              "nameLocation": "1133:20:16",
              "scope": 39520,
              "visibility": "public"
            },
            {
              "id": 39462,
              "nodeType": "FunctionDefinition",
              "src": "1575:61:16",
              "nodes": [],
              "documentation": {
                "id": 39455,
                "nodeType": "StructuredDocumentation",
                "src": "1451:119:16",
                "text": " @dev create proposal where proposing power > threshold\n @param ipfsHash IPFS hash on the proposal"
              },
              "functionSelector": "7368a8ce",
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "create",
              "nameLocation": "1584:6:16",
              "parameters": {
                "id": 39458,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 39457,
                    "mutability": "mutable",
                    "name": "ipfsHash",
                    "nameLocation": "1599:8:16",
                    "nodeType": "VariableDeclaration",
                    "scope": 39462,
                    "src": "1591:16:16",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    },
                    "typeName": {
                      "id": 39456,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "1591:7:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1590:18:16"
              },
              "returnParameters": {
                "id": 39461,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 39460,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 39462,
                    "src": "1627:7:16",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 39459,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1627:7:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1626:9:16"
              },
              "scope": 39520,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "id": 39468,
              "nodeType": "FunctionDefinition",
              "src": "1785:45:16",
              "nodes": [],
              "documentation": {
                "id": 39463,
                "nodeType": "StructuredDocumentation",
                "src": "1642:138:16",
                "text": " @dev cancelling proposal optional function\n @param proposalId proposalId generated at the creation of every proposal"
              },
              "functionSelector": "40e58ee5",
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "cancel",
              "nameLocation": "1794:6:16",
              "parameters": {
                "id": 39466,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 39465,
                    "mutability": "mutable",
                    "name": "proposalId",
                    "nameLocation": "1809:10:16",
                    "nodeType": "VariableDeclaration",
                    "scope": 39468,
                    "src": "1801:18:16",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 39464,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1801:7:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1800:20:16"
              },
              "returnParameters": {
                "id": 39467,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1829:0:16"
              },
              "scope": 39520,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "id": 39474,
              "nodeType": "FunctionDefinition",
              "src": "1974:53:16",
              "nodes": [],
              "documentation": {
                "id": 39469,
                "nodeType": "StructuredDocumentation",
                "src": "1836:133:16",
                "text": " @dev Execute the proposal (If Queued)\n @param proposalId proposalId generated at the creation of every proposal"
              },
              "functionSelector": "a96c065b",
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "excute",
              "nameLocation": "1983:6:16",
              "parameters": {
                "id": 39472,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 39471,
                    "mutability": "mutable",
                    "name": "proposalId",
                    "nameLocation": "1998:10:16",
                    "nodeType": "VariableDeclaration",
                    "scope": 39474,
                    "src": "1990:18:16",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 39470,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1990:7:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1989:20:16"
              },
              "returnParameters": {
                "id": 39473,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2026:0:16"
              },
              "scope": 39520,
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "id": 39480,
              "nodeType": "FunctionDefinition",
              "src": "2203:44:16",
              "nodes": [],
              "documentation": {
                "id": 39475,
                "nodeType": "StructuredDocumentation",
                "src": "2033:165:16",
                "text": " @dev Queue proposal for Execution if the parameters for Quorum is met\n @param proposalId proposalId generated at the creation of every proposal"
              },
              "functionSelector": "ddf0b009",
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "queue",
              "nameLocation": "2212:5:16",
              "parameters": {
                "id": 39478,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 39477,
                    "mutability": "mutable",
                    "name": "proposalId",
                    "nameLocation": "2226:10:16",
                    "nodeType": "VariableDeclaration",
                    "scope": 39480,
                    "src": "2218:18:16",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 39476,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2218:7:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2217:20:16"
              },
              "returnParameters": {
                "id": 39479,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2246:0:16"
              },
              "scope": 39520,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "id": 39488,
              "nodeType": "FunctionDefinition",
              "src": "2483:62:16",
              "nodes": [],
              "documentation": {
                "id": 39481,
                "nodeType": "StructuredDocumentation",
                "src": "2253:225:16",
                "text": " @dev Vote function for the msg.sender for/against to Proposal\n @param proposalId proposalId generated at the creation of every proposal\n @param support boolean, true = vote for, false = vote against"
              },
              "functionSelector": "612c56fa",
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "submitVote",
              "nameLocation": "2492:10:16",
              "parameters": {
                "id": 39486,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 39483,
                    "mutability": "mutable",
                    "name": "proposalId",
                    "nameLocation": "2511:10:16",
                    "nodeType": "VariableDeclaration",
                    "scope": 39488,
                    "src": "2503:18:16",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 39482,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2503:7:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 39485,
                    "mutability": "mutable",
                    "name": "support",
                    "nameLocation": "2527:7:16",
                    "nodeType": "VariableDeclaration",
                    "scope": 39488,
                    "src": "2522:12:16",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 39484,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "2522:4:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2502:33:16"
              },
              "returnParameters": {
                "id": 39487,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2544:0:16"
              },
              "scope": 39520,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "id": 39493,
              "nodeType": "FunctionDefinition",
              "src": "2551:61:16",
              "nodes": [],
              "functionSelector": "98e527d3",
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "getProposalsCount",
              "nameLocation": "2560:17:16",
              "parameters": {
                "id": 39489,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2577:2:16"
              },
              "returnParameters": {
                "id": 39492,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 39491,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 39493,
                    "src": "2603:7:16",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 39490,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2603:7:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2602:9:16"
              },
              "scope": 39520,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "id": 39501,
              "nodeType": "FunctionDefinition",
              "src": "2618:97:16",
              "nodes": [],
              "functionSelector": "3656de21",
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "getProposalById",
              "nameLocation": "2627:15:16",
              "parameters": {
                "id": 39496,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 39495,
                    "mutability": "mutable",
                    "name": "proposalId",
                    "nameLocation": "2651:10:16",
                    "nodeType": "VariableDeclaration",
                    "scope": 39501,
                    "src": "2643:18:16",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 39494,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2643:7:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2642:20:16"
              },
              "returnParameters": {
                "id": 39500,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 39499,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 39501,
                    "src": "2686:27:16",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_ProposalWithoutVotes_$39454_memory_ptr",
                      "typeString": "struct IScientiaGovernance.ProposalWithoutVotes"
                    },
                    "typeName": {
                      "id": 39498,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 39497,
                        "name": "ProposalWithoutVotes",
                        "nameLocations": [
                          "2686:20:16"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 39454,
                        "src": "2686:20:16"
                      },
                      "referencedDeclaration": 39454,
                      "src": "2686:20:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_ProposalWithoutVotes_$39454_storage_ptr",
                        "typeString": "struct IScientiaGovernance.ProposalWithoutVotes"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2685:29:16"
              },
              "scope": 39520,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "id": 39511,
              "nodeType": "FunctionDefinition",
              "src": "2721:98:16",
              "nodes": [],
              "functionSelector": "4185ff83",
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "getVoteOnProposal",
              "nameLocation": "2730:17:16",
              "parameters": {
                "id": 39506,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 39503,
                    "mutability": "mutable",
                    "name": "proposalId",
                    "nameLocation": "2756:10:16",
                    "nodeType": "VariableDeclaration",
                    "scope": 39511,
                    "src": "2748:18:16",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 39502,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2748:7:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 39505,
                    "mutability": "mutable",
                    "name": "voter",
                    "nameLocation": "2776:5:16",
                    "nodeType": "VariableDeclaration",
                    "scope": 39511,
                    "src": "2768:13:16",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 39504,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2768:7:16",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2747:35:16"
              },
              "returnParameters": {
                "id": 39510,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 39509,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 39511,
                    "src": "2806:11:16",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Vote_$39405_memory_ptr",
                      "typeString": "struct IScientiaGovernance.Vote"
                    },
                    "typeName": {
                      "id": 39508,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 39507,
                        "name": "Vote",
                        "nameLocations": [
                          "2806:4:16"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 39405,
                        "src": "2806:4:16"
                      },
                      "referencedDeclaration": 39405,
                      "src": "2806:4:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Vote_$39405_storage_ptr",
                        "typeString": "struct IScientiaGovernance.Vote"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2805:13:16"
              },
              "scope": 39520,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "id": 39519,
              "nodeType": "FunctionDefinition",
              "src": "2825:84:16",
              "nodes": [],
              "functionSelector": "9080936f",
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "getProposalState",
              "nameLocation": "2834:16:16",
              "parameters": {
                "id": 39514,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 39513,
                    "mutability": "mutable",
                    "name": "proposalId",
                    "nameLocation": "2859:10:16",
                    "nodeType": "VariableDeclaration",
                    "scope": 39519,
                    "src": "2851:18:16",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 39512,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2851:7:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2850:20:16"
              },
              "returnParameters": {
                "id": 39518,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 39517,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 39519,
                    "src": "2894:13:16",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_ProposalState_$39400",
                      "typeString": "enum IScientiaGovernance.ProposalState"
                    },
                    "typeName": {
                      "id": 39516,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 39515,
                        "name": "ProposalState",
                        "nameLocations": [
                          "2894:13:16"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 39400,
                        "src": "2894:13:16"
                      },
                      "referencedDeclaration": 39400,
                      "src": "2894:13:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_ProposalState_$39400",
                        "typeString": "enum IScientiaGovernance.ProposalState"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2893:15:16"
              },
              "scope": 39520,
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            }
          ],
          "abstract": false,
          "baseContracts": [],
          "canonicalName": "IScientiaGovernance",
          "contractDependencies": [],
          "contractKind": "interface",
          "documentation": {
            "id": 39391,
            "nodeType": "StructuredDocumentation",
            "src": "82:434:16",
            "text": " @title Governance V2 contract\n @dev Main point of interaction with Scientia protocol's governance\n - Create a Proposal\n - Cancel a Proposal\n - Queue a Proposal\n - Execute a Proposal\n - Submit Vote to a Proposal\n Proposal States : Pending => Active => Succeeded(/Failed) => Queued => Executed(/Expired)\n                   The transition to \"Canceled\" can appear in multiple states\n @author Scientia x Aave*"
          },
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            39520
          ],
          "name": "IScientiaGovernance",
          "nameLocation": "529:19:16",
          "scope": 39521,
          "usedErrors": [],
          "usedEvents": []
        }
      ],
      "license": "AGPL-3.0"
    },
    "id": 16
  }