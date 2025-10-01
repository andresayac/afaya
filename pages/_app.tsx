import "../styles/globals.scss";
import "../components/footer.scss";
import "../components/about.scss";
import "../components/skills.scss";
import "../components/hero.scss";
import "../components/contact.scss";
import "../components/projects.scss";
import "../components/timeline.scss";
import type { AppProps } from "next/app";
import { LanguageProvider } from "../contexts/LanguageContext";
import { ThemeProvider } from "../contexts/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider>
			<LanguageProvider>
				<Component {...pageProps} />
			</LanguageProvider>
		</ThemeProvider>
	);
}
