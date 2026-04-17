import { motion } from "framer-motion"

export default function HeroImage() {
    return (
        <motion.button
            className="z-10 w-80 h-80 rounded-full overflow-hidden mt-10 md:mt-40 border-4 border-border hover:cursor-pointer"
            style={{ boxShadow: "6px 6px 0px var(--muted)" }}
            whileTap={{
                boxShadow: "0px 0px 0px var(--muted)",
                translateX: "6px",
                translateY: "6px",
            }}
            transition={{ duration: 0.05 }}
        >
            <img src="src/assets/gecko.png" alt="Bastian" className="w-full h-full object-cover" />
        </motion.button>
    )
}