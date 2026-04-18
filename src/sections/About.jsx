import { motion } from "framer-motion"

const About = () => {
    return (
        <section className="c-space py-20">

            <div className="flex flex-col md:flex-row gap-10">
                <div className="w-full md:max-w-2xl  md:border-r-2 border-b-2 md:border-b-0 border-violet-600/70 pr-8 pb-8">
                    <h1 className="font-extrabold text-8xl text-white tracking-tight mb-2">
                        Bastian<br />Cochard
                    </h1>
                    <p className="text-neutral-400 text-sm tracking-widest mb-8">
                        19 ans · BUT Informatique · IUT de Nantes
                    </p>
                    <hr className="border-white/10 mb-8" />
                    <div className="text-neutral-300 text-[15px] leading-relaxed space-y-4 mb-10">
                        <p>
                            Étudiant passionné par le <strong className="text-white">développement Front-End</strong> et
                            la <em className="text-violet-400">communication client/serveur</em>, je recherche
                            un <strong className="text-white">stage de 8 à 12 semaines</strong> à partir d'avril 2026
                            ainsi qu'une <strong className="text-white">alternance pour ma 3ᵉ année</strong> de BUT Informatique.
                        </p>
                        <p>
                            Bac <strong className="text-white">STI2D mention Bien</strong> · curieux, sérieux,
                            prêt à m'investir pleinement sur de <em className="text-violet-400">vrais projets</em>.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold rounded tracking-wide transition-colors"
                        >
                            Voir mes projets
                        </motion.a>
                        <motion.a
                            href="/cv.pdf"
                            target="_blank"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-6 py-3 border border-violet-600 text-violet-400 hover:text-violet-300 hover:border-violet-400 text-sm font-semibold rounded tracking-wide transition-colors"
                        >
                            CV →
                        </motion.a>
                    </div>
                </div>

                {/* placeholder droite */}
                <div className="flex-1 flex items-center justify-center text-neutral-600 border border-dashed border-neutral-700 rounded-xl min-h-64">
                    placeholder
                </div>
            </div>

        </section>
    )
}

export default About