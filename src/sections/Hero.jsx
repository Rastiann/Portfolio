import HeroImage from "../components/HeroImage";
import HeroText from "../components/HeroText";
import ParallaxeBackground from "../components/ParallaxeBackground";

export default function Hero() {

    return <section className="flex items-start justify-start md:items-start md:justify-around min-h-screen sm:px-10 px-5 lg:px-15">
        <HeroText/>
        <HeroImage/>
        <ParallaxeBackground/>
    </section>

}