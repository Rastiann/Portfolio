import Header from "./sections/Header.jsx"
import Hero from "./sections/Hero.jsx"
import Footer from "./sections/Footer.jsx"
import Stack from "./sections/Stack.jsx"

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

function App() {

    return <div className="container mx-auto max-w-7xl">
        <Header links={links} />
        <Hero />
        <Stack />
        <section className="min-h-screen"></section>
        {/* About avec des points en arrière plan et dcp un trait quand descend sur mon éducation et qui je suis + ou au lieu du trait
            un tat de films que je peux faire défilé avec framer-motion */}
        {/* Projects sous formes de card letterbox avec les favoris et quand je cloque dessus avec framer-motion ça prends tout
            l'écran */}
        {/* le double carousel avec les langages sur un et outils sur l'autre */}
        <Footer links={links} />
    </div>

}

export default App
