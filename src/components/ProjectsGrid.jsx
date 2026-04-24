import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ProjectDescription from "./ProjectDescription";

export default function ProjectsGrid({ projects }) {


    const [selected, setSelected] = useState(null)
    const [lastSelected, setLastSelected] = useState(null)

    // Permet de bloquer le scroll en arrière plan quand un projet est sélectionné
    useEffect(() => {

        if (selected) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }

        return () => {
            document.body.style.overflow = "auto"
        }

    }, [selected])

    const handleClick = (project) => {
        setLastSelected(selected)
        setSelected(project)
    }

    const handleCrossClick = () => {
        setLastSelected(selected)
        setSelected(null)
    }

    return (
        <div className="w-full h-auto grid grid-cols-1 gap-4 max-w-7xl mx-auto md:grid-cols-3 relative">
            {projects.map(project => (

                // Empeche les erreurs si className est pas définis mais ça sert à rien jcrois ?
                <div key={project.id} className={twMerge(project.className, "")}>
                    <motion.div
                        onClick={() => handleClick(project)}
                        className={twMerge(
                            project.className,
                            selected?.id == project.id
                                ? "fixed w-screen top-0 left-0 z-50 h-screen"
                                : lastSelected?.id == project.id
                                    ? "relative overflow-hidden z-2 rounded-xl h-full w-full hover:cursor-pointer"
                                    : "relative overflow-hidden  rounded-xl h-full w-full hover:cursor-pointer shadow-2xl"
                        )
                        }
                        layoutId={`project-${project.id}`}
                    >
                        {/* Affiche le détail du projet ou juste la minia en fonction de qui est sélectionné */}
                        {selected?.id == project.id ?
                            <SelectedProject project={selected} handleCrossClick={handleCrossClick} />
                            : <ProjectCard project={project}
                            />}
                    </motion.div>
                </div>

            ))}
        </div>
    )

}

const SelectedProject = ({ project, handleCrossClick }) => {
    return (
        <div
            className="relative w-full h-full overflow-y-scroll text-white"
            style={{ background: "oklch(0.285 0.036 275.174)" }}>
            {/* CROIX */}
            <button
                className="fixed right-4 top-7 w-10 h-10 rounded-full z-100
                           bg-white border border-zinc-600
                           flex items-center justify-center transition hover:cursor-pointer"
                onClick={(e) => { e.stopPropagation(); handleCrossClick(); }}
            >
                <img src="public/assets/projects/cross.svg" alt="Cross" className="w-4 h-4" />
            </button>
            {/* CONTENT */}
            <div className="flex justify-center px-4 py-16">
                <ProjectDescription project={project} />
            </div>
        </div>
    );
};
const ProjectCard = ({ project }) => {
    return (
        <div className="relative h-55 w-full min-w-0 overflow-hidden rounded-xl flex items-end justify-center md:justify-start p-3 transition-all duration-300 hover:pb-6 group">

            <img
                src={project.thumbnail}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />

            <div className="relative text-white min-w-0">
                <h1 className="text-lg font-semibold">{project.title}</h1>
                <p className="text-sm opacity-80">{project.date}</p>

                <div className="flex flex-wrap gap-2 mt-2 min-w-0">
                    {project.technologies.map(techno => (
                        <div key={techno} className="bg-white/90 text-black text-xs px-2 py-1 rounded">
                            {techno}
                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}