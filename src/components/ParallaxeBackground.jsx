import { motion, useScroll, useSpring, useTransform } from "framer-motion"

export default function ParallaxeBackground() {

    const { scrollYProgress } = useScroll()
    const x = useSpring(scrollYProgress, { damping: 50 })

    const layer1Y = useTransform(x, [0, 0.7], ["0%", "70%"])
    const layer2Y = useTransform(x, [0, 0.7], ["0%", "30%"])
    const layer3Y = useTransform(x, [0, 0.7], ["0%", "-20%"])

    return (
        <section className="absolute inset-0">
            <div className="relative h-screen overflow-hidden">

                {/* Layer 3 */}
                <motion.div className="absolute inset-0 w-full h-screen -z-50"
                    style={{
                        backgroundImage: "url(src/assets/parallaxe/layer3.png)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: layer3Y
                    }}
                />
                {/* Layer 2 */}
                <motion.div className="absolute inset-0 w-full h-screen -z-40"
                    style={{
                        backgroundImage: "url(src/assets/parallaxe/layer2.png)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        x: layer2Y
                    }}
                />
                {/* Layer 1 */}
                <motion.div className="absolute inset-0 w-full h-screen -z-30"
                    style={{
                        backgroundImage: "url(src/assets/parallaxe/layer1.png)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: layer1Y
                    }}
                />

            </div>
        </section >
    )

}