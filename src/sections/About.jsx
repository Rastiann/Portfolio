import { motion } from "framer-motion"

const About = () => {
    return (
        <section id="about" className="c-space py-20">

            <div className="flex flex-col md:flex-row gap-10">
                <div className="w-full md:max-w-2xl  md:border-r-2 border-b-2 md:border-b-0 border-accent/70 pr-8 pb-8">
                    <h1 className="font-extrabold text-8xl text-foreground tracking-tight mb-2">
                        Bastian<br />Cochard
                    </h1>
                    <p className="text-muted-foreground text-sm tracking-widest mb-8">
                        19 ans · BUT Informatique · IUT de Nantes
                    </p>
                    <hr className="border-border/10 mb-8" />
                    <div className="text-muted-foreground text-[15px] leading-relaxed space-y-4 mb-10">
                        <p>
                            Particulièrement attiré par le <strong className="text-foreground">développement web</strong>,
                            je m’oriente vers la conception et le développement d’applications web,
                            aussi bien sur la partie <em className="text-accent">front-end</em> que
                            <em className="text-accent"> back-end</em>.
                        </p>
                        <p>
                            Je suis actuellement à la recherche d’un <strong className="text-foreground">stage de 8 à 12 semaines</strong>
                            à partir d’avril 2026, ainsi que d’une <strong className="text-foreground">alternance</strong> pour ma 3ᵉ année de BUT Informatique.
                        </p>
                        <p>
                            Sérieux, curieux et motivé, je souhaite m’impliquer sur des projets concrets
                            afin de développer mes compétences et gagner en expérience professionnelle.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <motion.a
                            href="#stack"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-6 py-3 bg-accent hover:bg-accent-hover text-foreground text-sm font-semibold rounded tracking-wide transition-colors"
                        >
                            En savoir plus ↓
                        </motion.a>
                        <motion.a
                            href="public/assets/footer/cv.pdf"
                            target="_blank"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-6 py-3 border border-accent text-accent hover:text-accent-hover hover:border-accent-hover text-sm font-semibold rounded tracking-wide transition-colors"
                        >
                            CV
                        </motion.a>
                    </div>
                </div>

                {/* placeholder droite */}
                <div className="flex-1 flex items-center justify-center text-muted border border-dashed border-border/50 rounded-xl min-h-64">
                    <img src="public/assets/about_image.png" className="rounded-2xl"/>
                </div>
            </div>

        </section>
    )
}

export default About