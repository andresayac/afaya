import { ReactNode, useState, useRef } from "react";
import Image from "next/image";
import ChatBotGames from "../public/chatbot_games.png";
import Notiauto from "../public/notiauto.png";
import ChatGPTBotWhatsapp from "../public/chatgpt_bot_wa.png";
import Whatsper from "../public/whatsper.png";
import EdgeTTS from "../public/edge_tts.png";
import { useLanguage } from "../contexts/LanguageContext";

export function Card(props: { href?: string; children: ReactNode }) {
	return (
		<a rel="noreferrer" target="_blank" href={props.href} className="card">
			<div className="glow" />
			{props.children}
		</a>
	);
}

export function Projects() {
	const { t } = useLanguage();
	
	return (
		<section className="projects" id="projects">
			<h2
				style={{
					fontSize: "4rem",
					fontWeight: 700,
					textAlign: "center",
					marginTop: "4rem",
					marginBottom: "4rem",
				}}
			>
				{t('projects.title')}
			</h2>

			<div className="list">
				<Card href="https://whatsper.co">
					<Image style={{ aspectRatio: "2 / 1" }} src={Whatsper} alt="Whatsper " />
				</Card>
				<Card href="https://github.com/andresayac/bot-wa-games">
					<Image style={{ aspectRatio: "2 / 1" }} src={ChatBotGames} alt="ChatbotGames" />
				</Card>
				<Card href=" https://github.com/andresayac/bot-wa-bing-ai">
					<Image style={{ aspectRatio: "2 / 1" }} src={ChatGPTBotWhatsapp} alt="ChatbotGPT" />
				</Card>
				<Card href="https://notiauto.co">
					<Image style={{ aspectRatio: "2 / 1" }} src={Notiauto} alt="NotiAuto" />
				</Card>
				<Card href="https://github.com/andresayac/edge-tts">
					<Image style={{ aspectRatio: "2 / 1" }} src={EdgeTTS} alt="EdgeTTS" />
				</Card>
			</div>
		</section>
	);
}

export function glowCards() {
	const cards = document.querySelectorAll(".projects .card") as any;
	let bounds: any;

	function rotateToMouse(this: any, e: any) {
		const mouseX = e.clientX;
		const mouseY = e.clientY;
		const leftX = mouseX - bounds.x;
		const topY = mouseY - bounds.y;
		const center = {
			x: leftX - bounds.width / 2,
			y: topY - bounds.height / 2,
		};

		this.querySelector(".glow").style.backgroundImage = `
		radial-gradient(
		circle at
		${center.x * 2 + bounds.width / 2}px
		${center.y * 2 + bounds.height / 2}px,
		#ffffff55,
		#0000000f
		)`;
	}

	for (const $card of cards) {
		const rotate = rotateToMouse.bind($card);

		$card.addEventListener("mouseenter", () => {
			bounds = $card.getBoundingClientRect();
			document.addEventListener("mousemove", rotate);
		});

		$card.addEventListener("mouseleave", () => {
			document.removeEventListener("mousemove", rotate);
		});
	}
}
