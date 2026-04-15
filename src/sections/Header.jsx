import useToggle from "../hooks/useToggle"
import Naviguation from "../components/Naviguation"
import { motion, AnimatePresence } from 'framer-motion'


export default function Header() {
    const [isOpen, toggle] = useToggle(false) // utiliser le open pour faire une animation

    // Les Liens vers les différentes sections
    const links = [
        {
            name: "Acceuil",
            href: "sdf"
        },
        {
            name: "About me",
            href: "sdf"
        },
        {
            name: "Projets",
            href: "sdf"
        },
        {
            name: "Me contacter",
            href: "sdf"
        }
    ]

    return (
        <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary-foreground/40">
            <div className="mx-auto px-5 max-w-7xl">
                <div className="flex items-center justify-between py-2 sm:py-0">
                    <a href="#" className="text-xl font-bold transition-colors text-neutral-400 hover:text-white">
                        Bastian
                    </a>
                    <button onClick={toggle} className="flex cursor-pointer sm:hidden">
                        <img src="src\assets\menu.svg" alt="burger-menu" className="w-6 h-6" />
                    </button>
                    <nav className="hidden sm:flex items-center gap-2">
                        <Naviguation links={links} />
                        <button onClick={toggle} className="flex cursor-pointer">
                            <img src="src\assets\sun.svg" alt="burger-menu" className="w-6 h-6" />
                        </button>
                    </nav>
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (<motion.div
                    initial={{ height: 0, opacity: 0, x: -10, borderRadius: 20 }}
                    animate={{ height: "auto", opacity: 1, x: 0, borderRadius: 0 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="sm:hidden block overflow-hidden text-center"
                    transition={{ duration: 0.7 }}
                >
                    <nav className="pb-5">
                        <Naviguation links={links} />
                    </nav>
                </motion.div>)}
            </AnimatePresence>
        </div>
    )
}
