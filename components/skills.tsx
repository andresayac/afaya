import { Timeline, TimelineItem } from "./timeline";

export function Skills() {
    return (
        <div id="skills">
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
                Habilidades
            </h2>

            <Timeline>
                <TimelineItem date="Frontend" >
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Vue.js</li>
                        <li>ExtJS</li>                        
                        <li>TailwindCSS</li>
                        <li>Bootstrap</li>
                    </ul>
                </TimelineItem>
                <TimelineItem date="Backend">
                    <ul>
                        <li>Python</li>
                        <li>PHP</li>
                        <li>Node.js</li>
                        <li>Laravel</li>
                        <li>Flask</li>
                        <li>Express</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>SQLite</li>
                        <li>REST API</li>
                        <li>WebSockets</li>
                    </ul>
                </TimelineItem>
                <TimelineItem date="DevOps">
                    <ul>
                        <li>Linux</li>
                        <li>Docker</li>
                        <li>Kubernetes</li>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>GitLab</li>
                        <li>Heroku</li>
                        <li>Netlify</li>
                    </ul>
                </TimelineItem>
                <TimelineItem date="IA">
                    <ul>
                        <li>ChatGPT</li>
                        <li>OpenAI</li>
                        <li>TensorFlow</li>
                        <li>PyTorch</li>
                        <li>DialogFlow</li>
                        <li>Llama3</li>
                    </ul>
                </TimelineItem>
            </Timeline>

        </div>
    );
}