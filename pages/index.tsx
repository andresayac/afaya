import Head from "next/head";
import { About } from "../components/about";
import { Hero } from "../components/hero";
import { Projects } from "../components/projects";
import { Contact } from "../components/contact";
import { Skills } from "../components/skills";

import { GitHub, LinkedIn, TwitterX } from "../components/images";


export const config = {
	unstable_runtimeJS: false,
};

export default function Home() {
	return (
		<>
			<Head>
				<title>Andres Aya</title>
				<meta name="description" content="Andres Aya - Desarrollador, Ingeniero, Fundador" />
			</Head>
			<div className="main">
				<div className="links">
					<a href="https://github.com/andresayac/" target="_blank" rel="noreferrer" aria-label="GitHub">
						<GitHub />
					</a>
					<a className="linkedin" href="https://www.linkedin.com/in/andres-aya/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
						<LinkedIn />
					</a>
					<a className="twitterX" href="https://twitter.com/andresayaa" target="_blank" rel="noreferrer" aria-label="Twitter">
						<TwitterX />
					</a>
				</div>

				<div className="content">
					<Hero />
					<Projects />
					<About />
					<Skills />
					<Contact />
				</div>
				<div className="mail"></div>
			</div>
		</>
	);
}
