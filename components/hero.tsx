import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";

function RepeatFirstElement(
	props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
		children: React.ReactNode[];
	}
) {
	return (
		<div {...props}>
			{props.children}
			{props.children[0]}
		</div>
	);
}

export function Hero(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
	const { t } = useLanguage();
	
	return (
		<section {...props} className="hero">
			<div className="navigation">
				<a className="hover-animation" href="#projects">
					{t('nav.projects')}
				</a>
				<a className="hover-animation" href="#about">
					{t('nav.about')}
				</a>	
				<a className="hover-animation" href="#skills">
					{t('nav.skills')}
				</a>				
			</div>
			<div className="grid">
				<div className="title">
					<h1>Andres Aya</h1>
					<div className="subtitle">
						<RepeatFirstElement className="wrapper">
							<h2
								style={{
									backgroundImage: "linear-gradient(90deg, #007CF0, #00DFD8)",
								}}
							>
								{t('hero.developer')}
							</h2>
							<h2
								style={{
									backgroundImage: "linear-gradient(90deg, #7928CA, #FF0080)",
								}}
							>
								{t('hero.engineer')}
							</h2>
							<h2
								style={{
									backgroundImage: "linear-gradient(90deg, #FF4D4D, #F9CB28)",
								}}
							>
								{t('hero.founder')}
							</h2>
						</RepeatFirstElement>
					</div>
				</div>
				<div className="avatar">
					<Image priority width={250} height={250} src="/avatar.png" alt="Andres Aya" />
				</div>
			</div>
			<div></div>
		</section>
	);
}
