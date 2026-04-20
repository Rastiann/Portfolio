import useToggle from "../hooks/useToggle"
import Naviguation from "../components/Naviguation"
import { motion, AnimatePresence } from 'framer-motion'


export default function Header({ links }) {
    const [isOpen, toggle] = useToggle(false) // utiliser le open pour faire une animation



    return (
        <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-surface/40 shadow-md ">
            <div className="mx-auto px-5 max-w-7xl">
                <div className="flex items-center justify-between py-2 sm:py-0">
                    <a href="#" className="transition-colors text-muted-foreground hover:text-violet-300 text-xl font-bold">
                        Bastian
                    </a>
                    <button onClick={toggle} className="flex cursor-pointer sm:hidden">
                        <img src="src\assets\header\menu.svg" alt="burger-menu" className="w-6 h-6" />
                    </button>
                    <nav className="hidden sm:flex items-center gap-2">
                        <ul className="z-20 flex flex-row gap-6 items-center">
                            <Naviguation links={links} />
                        </ul>
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
                        <ul className="z-20 flex gap-4 flex-col items-center">
                            <Naviguation links={links} />
                        </ul>
                    </nav>
                </motion.div>)}
            </AnimatePresence>
        </div>
    )
}
