import Header from "./sections/Header.jsx"
import Hero from "./sections/Hero.jsx"
import Footer from "./sections/Footer.jsx"
import Stack from "./sections/Stack.jsx"
import Projects from "./sections/Projects.jsx"
import Contact from "./sections/Contact.jsx"
import About from "./sections/About.jsx"


// Les Liens vers les différentes sections
const links = [
    {
        name: "Acceuil",
        href: "#hero"
    },
    {
        name: "À propos",
        href: "#about"
    },
    {
        name: "Compétences",
        href: "#stack"
    },
    {
        name: "Projets",
        href: "#projects"
    },
    {
        name: "Contact",
        href: "#contact"
    }
]

function App() {

    return <div className="container mx-auto max-w-7xl">
        <Header links={links} />
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Contact />
        {/* <section className="min-h-screen"></section> */}
        <Footer links={links} />
    </div>

}

export default App
