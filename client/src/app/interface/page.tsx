'use client'

import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button, Spacer } from "@nextui-org/react";
import { Address, createWalletClient, parseEther, custom, http, getContract, WalletClient } from 'viem'
import { contract } from '../../constants/IScientiaGovernance'
import { foundry } from 'viem/chains'
import "viem/window";
import { useState } from "react";
import { subtitle, title } from "@/components/primitives";


export default function InterfacePage() {

    const [account, setAccount] = useState<Address>()
    const [client, setClient] = useState<WalletClient>();


    const connectWallet = async () => {
        let transport;
        if (window.ethereum) {
            transport = custom(window.ethereum);
            let walletClient = createWalletClient({
                chain: foundry,
                transport: custom(window.ethereum!),
            })

            const [address] = await walletClient.requestAddresses()

            setClient(walletClient)
            setAccount(address)

        } else {
            const errorMessage = "MetaMask or another web3 wallet is not installed. Please install one to proceed.";
        }

    }

    const create = async () => {


        const hash = await client!.writeContract({
            account: account!,
            chain: foundry,
            address: '0x90193C961A926261B756D1E5bb255e67ff9498A1',
            abi: contract.abi,
            functionName: 'create',
            args: ["0x6261667962656966616572766a6e62327266626f336435646d6a636f716a7934"]
        })

        console.log(hash)
    }

    const maskWallet = (address: Address) => {
        return address.substring(0, 7) + "......." + address.substring(address.length - 4)
    }


    return (
        <div className="container mx-auto">

            <h1 className={title()}>Interface</h1>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 ">

                {!account ? <>
                    <Card className="max-w-[400px]">
                        <CardBody className="flex flex-col items-center justify-center">
                            <p>Please connect your wallet to look at papers and vote.</p>
                            <Spacer y={4} />
                            <Button onClick={connectWallet}>Connect wallet</Button>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <Link
                                isExternal
                                showAnchorIcon
                                href="https://github.com/ManasNagaraj/Scientia"
                            >
                                Visit source code on GitHub.
                            </Link>
                        </CardFooter>
                    </Card>
                </> : <>
                    <section className="flex flex-row justify-center gap-2 py-8 md:py-10">
                        <Card className="max-w-[400px] min-w-[800px]"
                            radius="sm"
                        >
                            <CardBody className="flex flex-col">
                                <h1>Proposals Overview</h1>
                            </CardBody>
                        </Card>
                        <Card className="max-w-[400px] max-w-[400px] min-w-[400px]"
                            radius="sm"
                        >
                            <CardBody className="flex flex-col">
                                <h1 className="text-lg dark:text-gray-400 font-medium">Your info</h1>
                                {/* <Button onClick={create}>

                                </Button> */}

                                <h1 className="text-md font-medium">{maskWallet(account)}</h1>

                                <Divider/>
                                <section className="flex flex-row w-100 gap-4 justify-between">
                                    <section className="padding-4"><h1>your voting power</h1></section> 
                                    <section className="padding-4"><h1>your proposing power</h1></section> 
                                </section>
                            </CardBody>
                        </Card>
                    </section>
                </>
                }
            </section>
        </div >

    )
}