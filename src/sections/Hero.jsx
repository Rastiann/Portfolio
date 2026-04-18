import HeroImage from "../components/HeroImage";
import HeroText from "../components/HeroText";
import ParallaxeBackground from "../components/ParallaxeBackground";

export default function Hero() {

    return <section id="hero" className="flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between min-h-screen sm:px-10 px-5 lg:px-15">
        <HeroText />
        <HeroImage />
        <ParallaxeBackground />
    </section>

}