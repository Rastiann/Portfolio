import { twMerge } from "tailwind-merge";

export default function ProjectDescription({ className }) {
    return (
        <div className={twMerge("max-w-7xl mx-auto px-8 py-12", className)}>
            <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
            <p className="text-lg text-gray-600 mb-10">
                Un portfolio personnel pour présenter mes projets et compétences,
                développé avec React et Tailwind CSS.
            </p>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Mon rôle</h2>
                <p className="text-gray-600">
                    Développeur fullstack, j'ai conçu et développé l'intégralité du projet
                    de la maquette jusqu'au déploiement.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Défis techniques</h2>
                <p className="text-gray-600">
                    Mettre en place des animations fluides avec Framer Motion tout en
                    gardant de bonnes performances.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Technologies utilisées</h2>
                <p className="text-gray-600">React, TypeScript, Tailwind CSS, Framer Motion</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Technologies utilisées</h2>
                <p className="text-gray-600">React, TypeScript, Tailwind CSS, Framer Motion</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Technologies utilisées</h2>
                <p className="text-gray-600">React, TypeScript, Tailwind CSS, Framer Motion</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Technologies utilisées</h2>
                <p className="text-gray-600">React, TypeScript, Tailwind CSS, Framer Motion</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Technologies utilisées</h2>
                <p className="text-gray-600">React, TypeScript, Tailwind CSS, Framer Motion</p>
            </section>
        </div>
    )
}