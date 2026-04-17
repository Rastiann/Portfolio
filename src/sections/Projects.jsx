import ProjectDescription from "../components/ProjectDesciption"
import ProjectsGrid from "../components/ProjectsGrid"

const projects = [
    {
        id: 1,
        className: "md:col-span-2",
        thumbnail: "src/assets/projects/dicefull.png",
        content: <ProjectDescription />
    },
    {
        id: 2,
        className: "md:col-span-1",
        thumbnail: "url_img",
        content: <ProjectDescription />
    },
    {
        id: 3,
        className: "md:col-span-1",
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

    return <section className="w-full c-space h-auto flex flex-col gap-10 ">
        <h1 className="font-extrabold text-8xl">Projects</h1>
        <ProjectsGrid projects={projects} />
    </section>

}