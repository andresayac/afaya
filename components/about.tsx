import Image from "next/image";
import { Timeline, TimelineItem } from "./timeline";
import { Link } from "./Link";
import { useLanguage } from "../contexts/LanguageContext";
import { TextWithLinks } from "./TextWithLinks";

export function About() {
	const { t } = useLanguage();
	
	// Enlaces para cada sección del timeline
	const timelineLinks = {
		learning: {
			'PHP': 'https://www.php.net/'
		},
		webdev: {
			'proyectos posteriores': '#projects',
			'subsequent projects': '#projects'
		},
		whatsper: {
			'Whatsper': 'https://whatsper.co/'
		},
		notiauto: {
			'NotiAuto': 'https://notiauto.co/'
		},
		ai: {
			'ChatBot': 'https://github.com/andresayac/bot-wa-bing-ai/'
		},
		tech: {
			'Curso de IA': 'https://storage.googleapis.com/certificados_algorand_public/Images/7_V_8_IA_1076201754.png'
		}
	};
	
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
				{t('about.title')}
			</h2>
			<Timeline>
				<TimelineItem date="Junio 2013" title={t('about.timeline.learning.title')}>
					<div>
						<TextWithLinks 
							text={t('about.timeline.learning.content')} 
							links={timelineLinks.learning}
						/>
					</div>
				</TimelineItem>
				<TimelineItem date="Agosto 2014" title={t('about.timeline.computer.title')}>
					<div>
						<TextWithLinks text={t('about.timeline.computer.content')} />
					</div>
				</TimelineItem>
				<TimelineItem date="Julio 2015" title={t('about.timeline.linux.title')}>
					<div>
						<TextWithLinks text={t('about.timeline.linux.content')} />
					</div>
				</TimelineItem>
				<TimelineItem date="Febrero 2016" title={t('about.timeline.webdev.title')}>
					<div>
						<TextWithLinks 
							text={t('about.timeline.webdev.content')} 
						/>
					</div>
				</TimelineItem>
				<TimelineItem date="Septiembre 2017" title={t('about.timeline.university.title')}>
					<div>
						<TextWithLinks text={t('about.timeline.university.content')} />
					</div>
				</TimelineItem>
				<TimelineItem date="Febrero 2018" title={t('about.timeline.firstJob.title')}>
					<div>
						<TextWithLinks text={t('about.timeline.firstJob.content')} />
					</div>
				</TimelineItem>
				<TimelineItem date="Febrero 2019" title={t('about.timeline.fullstack.title')}>
					<div>
						<TextWithLinks text={t('about.timeline.fullstack.content')} />
					</div>
				</TimelineItem>
				<TimelineItem date="Noviembre 2022" title={t('about.timeline.whatsper.title')}>
					<div>
						<TextWithLinks 
							text={t('about.timeline.whatsper.content')} 
							links={timelineLinks.whatsper}
						/>
					</div>
				</TimelineItem>
				<TimelineItem date="Mayo 2023" title={t('about.timeline.notiauto.title')}>
					<div>
						<TextWithLinks 
							text={t('about.timeline.notiauto.content')} 
							links={timelineLinks.notiauto}
						/>
					</div>
				</TimelineItem>
				<TimelineItem date="Julio 2023" title={t('about.timeline.chatbot.title')}>
					<div>
						<TextWithLinks text={t('about.timeline.chatbot.content')} />
					</div>
				</TimelineItem>
				<TimelineItem date="Diciembre 2023 - Abril 2024" title={t('about.timeline.ai.title')}>
					<div>
						<TextWithLinks 
							text={t('about.timeline.ai.content')} 
							links={timelineLinks.ai}
						/>
					</div>
				</TimelineItem>
				<TimelineItem date="Noviembre 2024 - Diciembre 2024" title={t('about.timeline.tech.title')}>
					<div>
						<TextWithLinks
						 text={t('about.timeline.tech.content')} 
						 links={timelineLinks.tech}
						 />
					</div>
				</TimelineItem>
				<TimelineItem date="Enero 2025 - Presente" title={t('about.timeline.future.title')}>
					<div>
						<TextWithLinks
						 text={t('about.timeline.future.content')} 
						 links={timelineLinks.tech}
						 />
					</div>
				</TimelineItem>
			</Timeline>
			
		</div>
	);
}
