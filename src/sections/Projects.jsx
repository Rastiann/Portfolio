import ProjectDescription from "../components/ProjectDesciption"
import ProjectsGrid from "../components/ProjectsGrid"

const projects = [
    {
        id: 1,
        className: "md:col-span-1",
        thumbnail: "src/assets/projects/api.png",
        content: <ProjectDescription content={{
            title: "FishFull",
            subtitle: "Une API REST de protection de la vie marine",
            description: (
                <>
                    Projet réalisé en groupe (Bastian COCHARD, Nolan GRILLET,
                    Alex POIRIER, Damien MONNIN). <br /><br />
                    C'est une API REST composée de <strong>3 micro-services</strong> :
                    Espèce, Proxy, Signalement.
                </>
            ),
            technologie: ["javascript", "kotlin", "node.js"],
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
        id: 3,
        className: "md:col-span-2",
        thumbnail: "url_img",
        content: <ProjectDescription />
    },
    {
        id: 4,
        className: "md:col-span-2",
        thumbnail: "url_img",
        content: <ProjectDescription />
    },
    {
        id: 5,
        className: "md:col-span-1",
        thumbnail: "url_img",
        content: <ProjectDescription />
    },
    {
        id: 6,
        className: "md:col-span-1",
        thumbnail: "url_img",
        content: <ProjectDescription />
    },
    {
        id: 7,
        className: "md:col-span-1",
        thumbnail: "url_img",
        content: <ProjectDescription />
    },
]


export default function Projects() {

    return <section id="projects" className="w-full c-space h-auto flex flex-col gap-10 text-center md:text-start">
        <h1 className="font-extrabold text-8xl">Projects</h1>
        <ProjectsGrid projects={projects} />
    </section>

}
