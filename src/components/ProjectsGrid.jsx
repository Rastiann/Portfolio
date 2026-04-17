import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
        <div className="h-auto grid grid-cols-1 gap-4 max-w-7xl mx-auto md:grid-cols-3 relative">
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

    return <div className="flex items-center relative w-full h-full overflow-scroll bg-primary-foreground">
        <button className="fixed right-4 top-7" onClick={(e) => {
            e.stopPropagation()
            handleCrossClick()
        }}>
            <img src="src/assets/projects/cross.svg" alt="Cross" />
        </button>
        {project.content}
    </div>

}

const ProjectCard = ({ project }) => {
    return (
        <div className="relative h-50 w-full overflow-hidden rounded-xl">
            {/* IMAGE DE FOND */}
            <img
                src={project.thumbnail}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
            />
            {/* OVERLAY AU HOVER */}
            <div className="absolute inset-0 bg-black/0 hover:bg-black/40 transition-all duration-300 z-10" />
            {/* CONTENU */}

            {/* Image de fond */}
            <h1>Titre du projet</h1>
            <p>[python, javascript, kotlin]</p>
            <p>petite description, petite description, petite description, petite description, petite description</p>
        </div>
    )
}
