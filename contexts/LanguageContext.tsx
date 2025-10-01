import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

interface LanguageProviderProps {
    children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('es');

    useEffect(() => {
        // Cargar idioma guardado del localStorage
        const savedLanguage = localStorage.getItem('language') as Language;
        if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
            setLanguage(savedLanguage);
        }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };

    const t = (key: string): string => {
        return getTranslation(key, language);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Función para obtener las traducciones
const getTranslation = (key: string, language: Language): string => {
    const keys = key.split('.');
    let translation: any = translations[language];

    for (const k of keys) {
        if (translation && typeof translation === 'object') {
            translation = translation[k];
        } else {
            return key; // Retorna la clave si no se encuentra la traducción
        }
    }

    return typeof translation === 'string' ? translation : key;
};

// Traducciones
const translations = {
    es: {
        nav: {
            projects: 'Proyectos',
            about: 'Acerca de mí',
            skills: 'Habilidades',
            contact: 'Contacto'
        },
        theme: {
            light: 'Claro',
            dark: 'Oscuro',
            system: 'Sistema',
            toggleTheme: 'Cambiar tema',
            switchToDark: 'Cambiar a modo oscuro',
            switchToLight: 'Cambiar a modo claro'
        },
        hero: {
            developer: 'Desarrollador',
            engineer: 'Ingeniero',
            founder: 'Fundador'
        },
        about: {
            title: 'Un poco sobre mí',
            timeline: {
                learning: {
                    title: 'Aprendiendo programación',
                    content: 'Disfruté jugando videojuegos, como muchos niños de mi edad. Sin embargo, tuve que compartir la computadora familiar con mis 3 hermanos.\n\nComo resultado, les pedí a mis padres mi propia computadora. Después de negociar y con mucho esfuerzo, acordaron comprármela si la usaba correctamente.\n\nAprendí el lenguaje de programación [PHP], ya que era el único con el que me podían ayudar. Lo utilicé para programar el sitio web de mi colegio.'
                },
                computer: {
                    title: 'Una computadora personal',
                    content: 'Como prometieron, recibí mi primera computadora personal, que por supuesto usé para programar y jugar a Minecraft.\n\nDentro del juego, me gustaba usar bloques de comando y redstone, que son similares a puertas lógicas y construcciones de programación simples.\n\nSin embargo, jugar solo no era tan divertido como jugar con amigos; así que aprendí a alojar servidores para ellos.'
                },
                linux: {
                    title: 'Linux',
                    content: 'Descubrí las aplicaciones VPN que permitían acceso a Internet de manera gratuita, así que me pregunté cómo funcionaban. Descubrí que era necesario tener un servidor para ello, así que primero lo monté en una máquina virtual, hice mis respectivas pruebas, y luego de funcionar, realicé la compra del primer VPS.\n\nCon este, hice muchos experimentos y hasta instalé mi primer servidor. Después de eso, me agradó Linux para programar y aprendí a administrarlo.'
                },
                webdev: {
                    title: 'Desarrollo Web',
                    content: 'Quería crear un sitio web que ofreciera una descripción de ayuda a aquellos usuarios con VPN, así como a quienes la construyeron.\n\nSin embargo, un sitio web estático solo para verlo no era suficiente; también quería administrar esos servidores. Para esto, aprendí PHP en MVC y SQL para hacer el sitio interactivo y almacenar los servidores en una base de datos.\n\nEste proyecto marcó el comienzo de mi viaje como desarrollador y el inicio de muchos [proyectos posteriores].'
                },
                university: {
                    title: 'Universidad',
                    content: 'Después de dos años de aprendizaje y salir del colegio, y comprender que realmente iba a seleccionar la carrera correcta, me inscribí en la universidad en la carrera de ingeniero de sistemas.\n\nAllí aprendí mucho sobre matemáticas, lógica, física, gestión de proyectos, así como programación en C++, Java, Python. También profundicé en PHP, bases de datos, redes, patrones de diseño, documentación, testing y muchas más cosas.'
                },
                firstJob: {
                    title: 'Mi primer trabajo',
                    content: 'Mi primer trabajo no fue desarrollador, fue docente en un colegio en el área de tecnología, y allí aprendí muchas cosas. El trabajo de docente es increíble, y se aprenden muchas lecciones valiosas.\n\nAllí hicimos proyectos de robótica con los estudiantes y enseñé las bases de algoritmia para que tuvieran presente que pueden lograr mucho. A ellos les gustaba mucho Scratch, y con esta herramienta, hacían cosas increíbles.'
                },
                fullstack: {
                    title: 'Desarrollador Fullstack',
                    content: 'Después de haber sido docente, me arriesgué en el mundo laboral donde conocí muchas más tecnologías como Asterisk, frameworks como Laravel, ExtJS, React, Vue, y más lenguajes como Python, sin contar otros entornos en Node.js como Typescript.'
                },
                whatsper: {
                    title: 'Whatsper',
                    content: 'Después de explorar varios proyectos en TypeScript, encontré uno donde surgieron ideas. La comenté a dos conocidos, y allí surge [Whatsper]\n\nCon la intención de ayudar a empresas a estar en contacto con sus clientes enviando mensajes a WhatsApp.'
                },
                notiauto: {
                    title: 'NotiAuto',
                    content: 'Explorando más mis conocimientos de web scraping, y viendo la necesidad de varias personas que olvidaban y no tenían presentes sus infracciones de tránsito y obligaciones de seguro, surge [NotiAuto].\n\nNotiAuto es una solución que notificaba a sus usuarios cuando caducaban sus obligaciones y cuando son multados via email o whatsapp.'
                },
                chatbot: {
                    title: 'Chatbot',
                    content: 'Después del surgimiento de ChatGPT, mi interés en el desarrollo de chatbots creció significativamente. Me embarqué en la creación de varios chatbots, incluyendo uno que integra ChatGPT para facilitar conversaciones realistas.\n\nAdemás, he desarrollado chatbots orientados a juegos, ofreciendo experiencias interactivas como jugar al tres en línea (Tricki), el ahorcado, y Akinator.'
                },
                ai: {
                    title: 'IA',
                    content: 'Investigación en IA, aprendiendo sobre redes neuronales, aprendizaje profundo, aprendizaje por refuerzo, procesamiento de lenguaje natural, visión por computadora y más.\n\nDesarrollé un chatbot con acceso en WhatsApp integrado con Copilot para reconocimiento, generador de texto e imágenes, reconocimiento de voz e imágenes, y más. [ChatBot]'
                },
                tech: {
                    title: 'Curso en IA',
                    content: 'Investigación en IA: aprendí sobre redes neuronales, aprendizaje profundo, aprendizaje por refuerzo, procesamiento de lenguaje natural, visión por computadora y más.\n\nDesarrollé un modelo para resolver captchas, un modelo entrenado con mi propio rostro para generar imágenes, sistemas de reconocimiento de voz y otros proyectos. [Curso de IA]'
                },
                future: {
                    title: 'Metas a futuro',
                    content: 'Estoy entusiasmado con el futuro y con las oportunidades que este ofrece. Mi objetivo es seguir aprendiendo y creciendo como desarrollador, explorando nuevas tecnologías y metodologías.\n\nAspiro a trabajar en proyectos que tengan un impacto positivo en la vida de las personas y a colaborar con profesionales talentosos que compartan mi pasión por la innovación y la excelencia. Además, uno de mis objetivos principales es terminar mi curso de inglés en el Colombo Americano.'
                }
            }
        },
        projects: {
            title: 'Proyectos',
            viewProject: 'Ver proyecto',
            liveDemo: 'Demo en vivo',
            sourceCode: 'Código fuente'
        },
        skills: {
            title: 'Habilidades'
        },
        contact: {
            title: 'Contáctame',
            description: '¿Tienes una pregunta o quieres trabajar juntos?',
            form: {
                name: 'Tu nombre',
                email: 'Tu Email',
                message: 'Mensaje',
                send: 'Enviar'
            }
        },
        meta: {
            description: 'Andres Aya - Desarrollador, Ingeniero, Fundador'
        }
    },
    en: {
        nav: {
            projects: 'Projects',
            about: 'About me',
            skills: 'Skills',
            contact: 'Contact'
        },
        theme: {
            light: 'Light',
            dark: 'Dark',
            system: 'System',
            toggleTheme: 'Toggle theme',
            switchToDark: 'Switch to dark mode',
            switchToLight: 'Switch to light mode'
        },
        hero: {
            developer: 'Developer',
            engineer: 'Engineer',
            founder: 'Founder'
        },
        about: {
            title: 'A little about me',
            timeline: {
                learning: {
                    title: 'Learning programming',
                    content: 'I enjoyed playing video games, like many kids my age. However, I had to share the family computer with my 3 brothers.\n\nAs a result, I asked my parents for my own computer. After negotiating and with much effort, they agreed to buy it for me if I used it correctly.\n\nI learned the [PHP] programming language, as it was the only one they could help me with. I used it to program my school\'s website.'
                },
                computer: {
                    title: 'A personal computer',
                    content: 'As promised, I received my first personal computer, which of course I used to program and play Minecraft.\n\nWithin the game, I liked to use command blocks and redstone, which are similar to logic gates and simple programming constructs.\n\nHowever, playing alone wasn\'t as fun as playing with friends; so I learned to host servers for them.'
                },
                linux: {
                    title: 'Linux',
                    content: 'I discovered VPN applications that allowed free internet access, so I wondered how they worked. I discovered that it was necessary to have a server for it, so I first set it up in a virtual machine, did my respective tests, and after it worked, I made the purchase of the first VPS.\n\nWith this, I did many experiments and even installed my first server. After that, I liked Linux for programming and learned to administer it.'
                },
                webdev: {
                    title: 'Web Development',
                    content: 'I wanted to create a website that offered a helpful description to those VPN users, as well as to those who built it.\n\nHowever, a static website just for viewing wasn\'t enough; I also wanted to manage those servers. For this, I learned PHP in MVC and SQL to make the site interactive and store the servers in a database.\n\nThis project marked the beginning of my journey as a developer and the start of many.'
                },
                university: {
                    title: 'University',
                    content: 'After two years of learning and leaving school, and understanding that I was really going to select the right career, I enrolled in university in systems engineering.\n\nThere I learned a lot about mathematics, logic, physics, project management, as well as programming in C++, Java, Python. I also deepened in PHP, databases, networks, design patterns, documentation, testing and many more things.'
                },
                firstJob: {
                    title: 'My first job',
                    content: 'My first job was not as a developer, it was as a teacher in a school in the technology area, and there I learned many things. The teaching job is incredible, and many valuable lessons are learned.\n\nThere we did robotics projects with students and I taught the basics of algorithms so they would keep in mind that they can achieve a lot. They really liked Scratch, and with this tool, they did incredible things.'
                },
                fullstack: {
                    title: 'Fullstack Developer',
                    content: 'After being a teacher, I took risks in the working world where I learned many more technologies like Asterisk, frameworks like Laravel, ExtJS, React, Vue, and more languages like Python, not counting other environments in Node.js like Typescript.'
                },
                whatsper: {
                    title: 'Whatsper',
                    content: 'After exploring various TypeScript projects, I found one where ideas arose. I discussed it with two acquaintances, and there [Whatsper] was born\n\nWith the intention of helping companies stay in touch with their customers by sending messages to WhatsApp.'
                },
                notiauto: {
                    title: 'NotiAuto',
                    content: 'Exploring more of my web scraping knowledge, and seeing the need of several people who forgot and were not aware of their traffic violations and insurance obligations, [NotiAuto] was born.\n\nNotiAuto is a solution that notified its users when their obligations expired and when they were fined via email or whatsapp.'
                },
                chatbot: {
                    title: 'Chatbot',
                    content: 'After the emergence of ChatGPT, my interest in chatbot development grew significantly. I embarked on creating several chatbots, including one that integrates ChatGPT to facilitate realistic conversations.\n\nAdditionally, I have developed game-oriented chatbots, offering interactive experiences like playing tic-tac-toe (Tricky), hangman, and Akinator.'
                },
                ai: {
                    title: 'AI',
                    content: 'AI research, learning about neural networks, deep learning, reinforcement learning, natural language processing, computer vision and more.\n\nI developed a chatbot with WhatsApp access integrated with Copilot for recognition, text and image generator, voice and image recognition, and more. [ChatBot]'
                },
                tech: {
                    title: 'AI Course',
                    content: 'AI research: I learned about neural networks, deep learning, reinforcement learning, natural language processing, computer vision and more.\n\n I developed a model to solve captchas, a model trained with my own face to generate images, voice recognition systems and other projects. [Curso de IA]'
                },
                future: {
                    title: 'Future goals',
                    content: 'I am excited about the future and the opportunities it offers. My goal is to continue learning and growing as a developer, exploring new technologies and methodologies.\n\nI aspire to work on projects that have a positive impact on people\'s lives and to collaborate with talented professionals who share my passion for innovation and excellence. Additionally, one of my main goals is to finish my English course at the Colombo Americano.'
                }
            }
        },
        projects: {
            title: 'Projects',
            viewProject: 'View project',
            liveDemo: 'Live demo',
            sourceCode: 'Source code'
        },
        skills: {
            title: 'Skills'
        },
        contact: {
            title: 'Contact me',
            description: 'Have a question or want to work together?',
            form: {
                name: 'Your name',
                email: 'Your Email',
                message: 'Message',
                send: 'Send'
            }
        },
        meta: {
            description: 'Andres Aya - Developer, Engineer, Founder'
        }
    }
};