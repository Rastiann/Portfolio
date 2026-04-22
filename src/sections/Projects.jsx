import ProjectModal from "../components/ProjectDescription"
import ProjectsGrid from "../components/ProjectsGrid"

export const projects = [
    {
        id: 1,
        title: "DiceFull",
        date: "2025",
        className: "md:col-span-2",
        thumbnail: "src/assets/projects/dicefull.png",
        technologies: ["PHP", "CodeIgniter 4", "Docker", "JS", "HTML", "CSS"],

        subtitle: "Une API REST de protection de la vie marine",

        description: "Projet réalisé en groupe. API REST composée de 3 micro-services.",

        github: "https://github.com/ton-user/dicefull",

        keyPoints: [
            {
                title: "Proxy API",
                description: "Centralisation des microservices via un proxy Express.",
                codeSnippet: `app.use('/api', createProxyMiddleware({
  target: 'http://microservice',
  changeOrigin: true
}))`
            }
        ]
    },
    {
        id: 2,
        title: "FishFull",
        date: "2025",
        className: "md:col-span-1",
        thumbnail: "src/assets/projects/api.png",
        technologies: ["Node.js", "Express", "Microservices", "Docker", "API REST", "Testing"],
        subtitle: "API REST de protection du monde aquatique",

        description: `
FishFull est une API REST composée de micro-services dédiée à la protection du monde marin.

Le projet vise à collecter, analyser et exploiter des données liées aux espèces marines ainsi qu'aux incidents environnementaux afin de favoriser la protection de la faune et de la flore aquatique.
    `,

        github: "https://github.com/Rastiann/FishFull",

        keyPoints: [
            {
                title: "Architecture Micro-services",
                description: "Le projet repose sur 2 micro-services (Espèce & Signalement) orchestrés par un proxy central.",
                codeSnippet: `Proxy (centralisation)
→ Route les requêtes vers les services

Service Espèce:
- Liste des espèces
- Filtrage géographique
- Statistiques

Service Signalement:
- Pollution
- Espèces protégées
- Alertes terrain`
            },
            {
                title: "Rôle du Proxy",
                description: "Le proxy centralise les requêtes et simplifie l'accès aux micro-services côté client.",
                codeSnippet: `app.use('/api', createProxyMiddleware({
  target: 'http://microservices',
  changeOrigin: true
}))`
            },
            {
                title: "API Externe & Données",
                description: "Le service Espèce s'appuie sur une API externe pour enrichir la base de données avec des données réelles du terrain.",
                codeSnippet: `fetch('external-api/species')
  .then(res => res.json())
  .then(data => saveToDatabase(data))`
            },
            {
                title: "Tests & Qualité logicielle",
                description: "Chaque micro-service est testé indépendamment (DAO, controllers, routes) avec des tests fonctionnels et de mutation.",
                codeSnippet: `Tests réalisés:
- DAO layer
- Controllers
- Routes

Méthodologie:
- tests unitaires
- tests fonctionnels
- tests de mutation`
            },
            {
                title: "Documentation & BPM",
                description: "Un diagramme BPM retrace le flux global entre les 3 services et les interactions utilisateur.",
                codeSnippet: `Flow:
Client → Proxy → Micro-service
             ↓
     API externe (Espèce)`
            }
        ]
    },
    {
        id: 3,
        className: "md:col-span-1",
        thumbnail: "src/assets/projects/moviefull.png",
        technologies: ["Kotlin", "Android", "Android Studio"],
        title: "MovieFull",
        date: "2026",
        content: <ProjectModal content={{
            subtitle: "Une API REST de protection de la vie marine",
            description: (
                <>
                    Projet réalisé en groupe (Bastian COCHARD, Nolan GRILLET,
                    Alex POIRIER, Damien MONNIN). <br /><br />
                    C'est une API REST composée de <strong>3 micro-services</strong> :
                    Espèce, Proxy, Signalement.
                </>
            ),
            keyPoints: [
                {
                    title: "Proxy",
                    description: (
                        <>
                            On a mis en place un proxy pour centraliser les services.
                            <br /><br />
                            Utilisation de{" "}
                            <a
                                href="https://www.npmjs.com/package/http-proxy-middleware"
                                target="_blank"
                                className="underline"
                            >
                                http-proxy-middleware
                            </a>{" "}
                            avec Express pour gérer le routage et simplifier l'accès côté client.
                        </>
                    ),
                    code: true
                },
                {
                    title: "Proxy",
                    description: (
                        <>
                            On a mis en place un proxy pour centraliser les services.
                            <br /><br />
                            Utilisation de{" "}
                            <a
                                href="https://www.npmjs.com/package/http-proxy-middleware"
                                target="_blank"
                                className="underline"
                            >
                                http-proxy-middleware
                            </a>{" "}
                            avec Express pour gérer le routage et simplifier l'accès côté client.
                        </>
                    ),
                    code: true
                }
            ]
        }
        } />
    },
    {
        id: 4,
        className: "md:col-span-2",
        thumbnail: "src/assets/projects/lol.png",
        technologies: ["html", "css"],
        title: "League of Legends Skin",
        date: "2024",
        content: <ProjectModal content={{
            subtitle: "Une API REST de protection de la vie marine",
            description: (
                <>
                    Projet réalisé en groupe (Bastian COCHARD, Nolan GRILLET,
                    Alex POIRIER, Damien MONNIN). <br /><br />
                    C'est une API REST composée de <strong>3 micro-services</strong> :
                    Espèce, Proxy, Signalement.
                </>
            ),
            keyPoints: [
                {
                    title: "Proxy",
                    description: (
                        <>
                            On a mis en place un proxy pour centraliser les services.
                            <br /><br />
                            Utilisation de{" "}
                            <a
                                href="https://www.npmjs.com/package/http-proxy-middleware"
                                target="_blank"
                                className="underline"
                            >
                                http-proxy-middleware
                            </a>{" "}
                            avec Express pour gérer le routage et simplifier l'accès côté client.
                        </>
                    ),
                    code: true
                },
                {
                    title: "Proxy",
                    description: (
                        <>
                            On a mis en place un proxy pour centraliser les services.
                            <br /><br />
                            Utilisation de{" "}
                            <a
                                href="https://www.npmjs.com/package/http-proxy-middleware"
                                target="_blank"
                                className="underline"
                            >
                                http-proxy-middleware
                            </a>{" "}
                            avec Express pour gérer le routage et simplifier l'accès côté client.
                        </>
                    ),
                    code: true
                }
            ]
        }
        } />
    },
    {
        id: 5,
        className: "md:col-span-2",
        thumbnail: "src/assets/projects/graphe.png",
        technologies: ["python"],
        title: "Graphe Analyse",
        date: "2024",
        content: <ProjectModal content={{
            subtitle: "Une API REST de protection de la vie marine",
            description: (
                <>
                    Projet réalisé en groupe (Bastian COCHARD, Nolan GRILLET,
                    Alex POIRIER, Damien MONNIN). <br /><br />
                    C'est une API REST composée de <strong>3 micro-services</strong> :
                    Espèce, Proxy, Signalement.
                </>
            ),
            keyPoints: [
                {
                    title: "Proxy",
                    description: (
                        <>
                            On a mis en place un proxy pour centraliser les services.
                            <br /><br />
                            Utilisation de{" "}
                            <a
                                href="https://www.npmjs.com/package/http-proxy-middleware"
                                target="_blank"
                                className="underline"
                            >
                                http-proxy-middleware
                            </a>{" "}
                            avec Express pour gérer le routage et simplifier l'accès côté client.
                        </>
                    ),
                    code: true
                },
                {
                    title: "Proxy",
                    description: (
                        <>
                            On a mis en place un proxy pour centraliser les services.
                            <br /><br />
                            Utilisation de{" "}
                            <a
                                href="https://www.npmjs.com/package/http-proxy-middleware"
                                target="_blank"
                                className="underline"
                            >
                                http-proxy-middleware
                            </a>{" "}
                            avec Express pour gérer le routage et simplifier l'accès côté client.
                        </>
                    ),
                    code: true
                }
            ]
        }
        } />
    },
    {
        id: 6,
        className: "md:col-span-1",
        thumbnail: "src/assets/projects/qui-est-ce.png",
        technologies: ["Kotlin"],
        title: "Qui est-ce ?",
        date: "2025",
        content: <ProjectModal content={{
            subtitle: "Une API REST de protection de la vie marine",
            description: (
                <>
                    Projet réalisé en groupe (Bastian COCHARD, Nolan GRILLET,
                    Alex POIRIER, Damien MONNIN). <br /><br />
                    C'est une API REST composée de <strong>3 micro-services</strong> :
                    Espèce, Proxy, Signalement.
                </>
            ),
            keyPoints: [
                {
                    title: "Proxy",
                    description: (
                        <>
                            On a mis en place un proxy pour centraliser les services.
                            <br /><br />
                            Utilisation de{" "}
                            <a
                                href="https://www.npmjs.com/package/http-proxy-middleware"
                                target="_blank"
                                className="underline"
                            >
                                http-proxy-middleware
                            </a>{" "}
                            avec Express pour gérer le routage et simplifier l'accès côté client.
                        </>
                    ),
                    code: true
                },
                {
                    title: "Proxy",
                    description: (
                        <>
                            On a mis en place un proxy pour centraliser les services.
                            <br /><br />
                            Utilisation de{" "}
                            <a
                                href="https://www.npmjs.com/package/http-proxy-middleware"
                                target="_blank"
                                className="underline"
                            >
                                http-proxy-middleware
                            </a>{" "}
                            avec Express pour gérer le routage et simplifier l'accès côté client.
                        </>
                    ),
                    code: true
                }
            ]
        }
        } />
    },
    {
        id: 7,
        className: "md:col-span-1",
        thumbnail: "src/assets/projects/txt2automate.png",
        technologies: ["kotlin"],
        title: "Txt2Automate",
        date: "2025-2026",
        content: <ProjectModal content={{
            subtitle: "Une API REST de protection de la vie marine",
            description: (
                <>
                    Projet réalisé en groupe (Bastian COCHARD, Nolan GRILLET,
                    Alex POIRIER, Damien MONNIN). <br /><br />
                    C'est une API REST composée de <strong>3 micro-services</strong> :
                    Espèce, Proxy, Signalement.
                </>
            ),
            keyPoints: [
                {
                    title: "Proxy",
                    description: (
                        <>
                            On a mis en place un proxy pour centraliser les services.
                            <br /><br />
                            Utilisation de{" "}
                            <a
                                href="https://www.npmjs.com/package/http-proxy-middleware"
                                target="_blank"
                                className="underline"
                            >
                                http-proxy-middleware
                            </a>{" "}
                            avec Express pour gérer le routage et simplifier l'accès côté client.
                        </>
                    ),
                    code: true
                },
                {
                    title: "Proxy",
                    description: (
                        <>
                            On a mis en place un proxy pour centraliser les services.
                            <br /><br />
                            Utilisation de{" "}
                            <a
                                href="https://www.npmjs.com/package/http-proxy-middleware"
                                target="_blank"
                                className="underline"
                            >
                                http-proxy-middleware
                            </a>{" "}
                            avec Express pour gérer le routage et simplifier l'accès côté client.
                        </>
                    ),
                    code: true
                }
            ]
        }
        } />
    },
    {
        id: 8,
        className: "md:col-span-1",
        thumbnail: "src/assets/projects/quadtree.png",
        technologies: ["Golang"],
        title: "Quadtree",
        date: "2024",
        content: <ProjectModal content={{
            subtitle: "Une API REST de protection de la vie marine",
            description: (
                <>
                    Projet réalisé en groupe (Bastian COCHARD, Nolan GRILLET,
                    Alex POIRIER, Damien MONNIN). <br /><br />
                    C'est une API REST composée de <strong>3 micro-services</strong> :
                    Espèce, Proxy, Signalement.
                </>
            ),
            keyPoints: [
                {
                    title: "Proxy",
                    description: (
                        <>
                            On a mis en place un proxy pour centraliser les services.
                            <br /><br />
                            Utilisation de{" "}
                            <a
                                href="https://www.npmjs.com/package/http-proxy-middleware"
                                target="_blank"
                                className="underline"
                            >
                                http-proxy-middleware
                            </a>{" "}
                            avec Express pour gérer le routage et simplifier l'accès côté client.
                        </>
                    ),
                    code: true
                },
                {
                    title: "Proxy",
                    description: (
                        <>
                            On a mis en place un proxy pour centraliser les services.
                            <br /><br />
                            Utilisation de{" "}
                            <a
                                href="https://www.npmjs.com/package/http-proxy-middleware"
                                target="_blank"
                                className="underline"
                            >
                                http-proxy-middleware
                            </a>{" "}
                            avec Express pour gérer le routage et simplifier l'accès côté client.
                        </>
                    ),
                    code: true
                }
            ]
        }
        } />
    }, {
        id: 9,
        className: "md:col-span-1",
        thumbnail: "src/assets/projects/tcp.png",
        technologies: ["Golang"],
        title: "tcp server download files",
        date: "2024",
        content: <ProjectModal content={{
            subtitle: "Une API REST de protection de la vie marine",
            description: (
                <>
                    Projet réalisé en groupe (Bastian COCHARD, Nolan GRILLET,
                    Alex POIRIER, Damien MONNIN). <br /><br />
                    C'est une API REST composée de <strong>3 micro-services</strong> :
                    Espèce, Proxy, Signalement.
                </>
            ),
            keyPoints: [
                {
                    title: "Proxy",
                    description: (
                        <>
                            On a mis en place un proxy pour centraliser les services.
                            <br /><br />
                            Utilisation de{" "}
                            <a
                                href="https://www.npmjs.com/package/http-proxy-middleware"
                                target="_blank"
                                className="underline"
                            >
                                http-proxy-middleware
                            </a>{" "}
                            avec Express pour gérer le routage et simplifier l'accès côté client.
                        </>
                    ),
                    code: true
                },
                {
                    title: "Proxy",
                    description: (
                        <>
                            On a mis en place un proxy pour centraliser les services.
                            <br /><br />
                            Utilisation de{" "}
                            <a
                                href="https://www.npmjs.com/package/http-proxy-middleware"
                                target="_blank"
                                className="underline"
                            >
                                http-proxy-middleware
                            </a>{" "}
                            avec Express pour gérer le routage et simplifier l'accès côté client.
                        </>
                    ),
                    code: true
                }
            ]
        }
        } />
    }
    // {
    //     id: 3,
    //     className: "md:col-span-2",
    //     thumbnail: "url_img",
    //     content: <ProjectDescription />
    // },
    // {
    //     id: 4,
    //     className: "md:col-span-2",
    //     thumbnail: "url_img",
    //     content: <ProjectDescription />
    // },
    // {
    //     id: 5,
    //     className: "md:col-span-1",
    //     thumbnail: "url_img",
    //     content: <ProjectDescription />
    // },
    // {
    //     id: 6,
    //     className: "md:col-span-1",
    //     thumbnail: "url_img",
    //     content: <ProjectDescription />
    // },
    // {
    //     id: 7,
    //     className: "md:col-span-1",
    //     thumbnail: "url_img",
    //     content: <ProjectDescription />
    // },
]


export default function Projects() {

    return <section id="projects" className="w-full c-space h-auto flex flex-col gap-10 text-center md:text-start">
        <h1 className="font-extrabold text-8xl">Projects</h1>
        <ProjectsGrid projects={projects} />
    </section>

}
