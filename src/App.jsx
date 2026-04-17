import Header from "./sections/Header.jsx"
import Hero from "./sections/Hero.jsx"
import Footer from "./sections/Footer.jsx"
import Stack from "./sections/Stack.jsx"
import Projects from "./sections/Projects.jsx"

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
        {/* About me */}
        <Projects />
        <Stack />
        <section className="min-h-screen"></section>
        <Footer links={links} />
    </div>

}

export default App
