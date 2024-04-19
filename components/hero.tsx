import Avatar from "../public/avatar.png";
import Image from "next/image";

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
	return (
		<section {...props} className="hero">
			<div className="navigation">
				<a className="hover-animation" href="#projects">
					Proyectos
				</a>
				<a className="hover-animation" href="#about">
					Acerca de mí
				</a>	
				<a className="hover-animation" href="#skills">
					Habilidades
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
								Desarrollador
							</h2>
							<h2
								style={{
									backgroundImage: "linear-gradient(90deg, #7928CA, #FF0080)",
								}}
							>
								Ingeniero
							</h2>
							<h2
								style={{
									backgroundImage: "linear-gradient(90deg, #FF4D4D, #F9CB28)",
								}}
							>
								Fundador
							</h2>
						</RepeatFirstElement>
					</div>
				</div>
				<div className="avatar">
					<Image priority width={250} src={Avatar} alt="Andres Aya" />
				</div>
			</div>
			<div></div>
		</section>
	);
}
