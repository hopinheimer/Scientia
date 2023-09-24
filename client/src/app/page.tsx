import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return(

<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			 <div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Decentralised Peer Review&nbsp;</h1>
				{/* <h1 className={title({ color: "cyan" })}>beautiful&nbsp;</h1> */}
				<br />
				{/* <h1 className={title()}>
					websites regardless of your design experience.
				</h1> */}
				<h2 className={subtitle({ class: "mt-4" })}>
					Open source knowledge
				</h2>
			</div>
{/*
			<div className="flex gap-3">
				<Link
					isExternal
					as={NextLink}
					href={siteConfig.links.docs}
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Documentation
				</Link>
				<Link
					isExternal
					as={NextLink}
					className={buttonStyles({ variant: "bordered", radius: "full" })}
					href={siteConfig.links.github}
				>
					<GithubIcon size={20} />
					GitHub
				</Link>
			</div>

			 */}

       
		</section>
  
)
}