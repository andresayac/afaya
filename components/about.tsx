import Image from "next/image";
import { Timeline, TimelineItem } from "./timeline";
import { Link } from "./Link";

export function About() {
	return (
		<div id="about">
			<h2
				style={{
					background: "var(--background)",
					flex: 1,
					zIndex: 1,
					position: "relative",
					textAlign: "center",
					paddingBottom: "3rem",
					paddingTop: "10rem",
					fontSize: "4rem",
				}}
			>
				Un poco sobre mi
			</h2>
			<Timeline>
				<TimelineItem date="Junio 2013" title="Aprendiendo programación">
					<div>
						Disfruté jugando videojuegos, como muchos niños de mi edad. Sin embargo, tuve que compartir la computadora familiar con mis 3 hermanos.<br /><br />
						Como resultado, les pedí a mis padres mi propia computadora. Después de negociar y con mucho esfuerzo, acordaron comprármela si la usaba correctamente.<br /><br />
						Aprendí el lenguaje de programación <Link href="https://www.php.net/">PHP</Link>, ya que era el único con el que me podían ayudar. Lo utilicé para programar el sitio web de mi colegio.
					</div>
				</TimelineItem>
				<TimelineItem date="Agosto 2014" title="Una computadora personal">
					<div>
						Como prometieron, recibí mi primera computadora personal, que por supuesto usé para programar y jugar a Minecraft.<br /><br />
						Dentro del juego, me gustaba usar bloques de comando y redstone, que son similares a puertas lógicas y construcciones de programación simples.<br /><br />
						Sin embargo, jugar solo no era tan divertido como jugar con amigos; así que aprendí a alojar servidores para ellos.
					</div>
				</TimelineItem>
				<TimelineItem date="Julio 2015" title="Linux">
					<div>
						Descubrí las aplicaciones VPN que permitían acceso a Internet de manera gratuita, así que me pregunté cómo funcionaban. Descubrí que era necesario tener un servidor para ello, así que primero lo monté en una máquina virtual, hice mis respectivas pruebas, y luego de funcionar, realicé la compra del primer VPS.<br /><br />
						Con este, hice muchos experimentos y hasta instalé mi primer servidor. Después de eso, me agradó Linux para programar y aprendí a administrarlo.
					</div>
				</TimelineItem>
				<TimelineItem date="Febrero 2016" title="Desarrollo Web">
					<div>
						Quería crear un sitio web que ofreciera una descripción de ayuda a aquellos usuarios con VPN, así como a quienes la construyeron.<br /><br />
						Sin embargo, un sitio web estático solo para verlo no era suficiente; también quería administrar esos servidores. Para esto, aprendí PHP en MVC y SQL para hacer el sitio interactivo y almacenar los servidores en una base de datos.<br /><br />
						Este proyecto marcó el comienzo de mi viaje como desarrollador y el inicio de muchos
						<a className="hover-animation" href="#projects">proyectos posteriores</a>.
					</div>

				</TimelineItem>
				<TimelineItem date="Septiembre 2017" title="Universidad">
					<div>
						Después de dos años de aprendizaje y salir del colegio, y comprender que realmente iba a seleccionar la carrera correcta, me inscribí en la universidad en la carrera de ingeniero de sistemas.<br /><br />
						Allí aprendí mucho sobre matemáticas, lógica, física, gestión de proyectos, así como programación en C++, Java, Python. También profundicé en PHP, bases de datos, redes, patrones de diseño, documentación, testing y muchas más cosas.
					</div>
				</TimelineItem>
				<TimelineItem date="Febrero 2018" title="Mi primer trabajo">
					<div>
						Mi primer trabajo no fue desarrollador, fue docente en un colegio en el área de tecnología, y allí aprendí muchas cosas. El trabajo de docente es increíble, y se aprenden muchas lecciones valiosas.<br /><br /> Allí hicimos proyectos de robótica con los estudiantes y enseñé las bases de algoritmia para que tuvieran presente que pueden lograr mucho. A ellos les gustaba mucho Scratch, y con esta herramienta, hacían cosas increíbles.
					</div>
				</TimelineItem>
				<TimelineItem date="Febrero 2019" title="Desarrollador Fullstack">
					<div>
						Después de haber sido docente, me arriesgué en el mundo laboral donde conocí muchas más tecnologías como Asterisk,<br />
						frameworks como Laravel, ExtJS, React, Vue, y más lenguajes como Python,<br />
						sin contar otros entornos en Node.js como Typescript.
					</div>
				</TimelineItem>
				<TimelineItem date="Noviembre 2022" title="Whatsper">
					<div>
						Después de explorar varios proyectos en TypeScript, encontré uno donde surgieron ideas. La comenté a dos conocidos, y allí surge <Link href="https://whatsper.co/">Whatsper</Link><br /><br />
						Con la intención de ayudar a empresas a estar en contacto con sus clientes enviando mensajes a WhatsApp.
					</div>
				</TimelineItem>
				<TimelineItem date="Mayo 2023" title="NotiAuto">
					<div>
						Explorando más mis conocimientos de web scraping, y viendo la necesidad de varias personas que olvidaban y no tenían presentes sus infracciones de tránsito y obligaciones de seguro, surge <Link href="https://notiauto.co/">NotiAuto</Link>.<br /><br />
						NotiAuto es una solución que notificaba a sus usuarios cuando caducaban sus obligaciones y cuando son multados via email o whatsapp.
					</div>
				</TimelineItem>

				<TimelineItem date="Julio 2023" title="Chatbot">
					<div>
						Después del surgimiento de ChatGPT, mi interés en el desarrollo de chatbots creció significativamente. Me embarqué en la creación de varios chatbots, incluyendo uno que integra ChatGPT para facilitar conversaciones realistas.<br /><br />
						Además, he desarrollado chatbots orientados a juegos, ofreciendo experiencias interactivas como jugar al tres en línea (Tricki), el ahorcado, y Akinator.
					</div>
				</TimelineItem>

				<TimelineItem date="Diciembre 2023 - Abril 2024" title="IA">
					<div>
						Investigación en IA, aprendiendo sobre redes neuronales, aprendizaje profundo, aprendizaje por refuerzo, procesamiento de lenguaje natural, visión por computadora y más.<br /><br />
						Desarrollé un chatbot con acceso en WhatsApp integrado con Copilot para reconocimiento, generador de texto e imágenes, reconocimiento de voz e imágenes, y más. <Link href="https://github.com/andresayac/bot-wa-bing-ai/">ChatBot</Link>
					</div>
				</TimelineItem>
			</Timeline>
			
		</div>
	);
}
