import Header from "./sections/Header.jsx"
import Hero from "./sections/Hero.jsx"

function App() {

    return <div className="container mx-auto max-w-7xl">
        <Header/>
        <Hero />
        <section className="min-h-screen"></section>
        <section className="min-h-screen"></section>
        <section className="min-h-screen"></section>
        <section className="min-h-screen"></section>
        <section className="min-h-screen"></section>
        {/* About avec des points en arrière plan et dcp un trait quand descend sur mon éducation et qui je suis + ou au lieu du trait
            un tat de films que je peux faire défilé avec framer-motion */}
        {/* Projects sous formes de card letterbox avec les favoris et quand je cloque dessus avec framer-motion ça prends tout
            l'écran */}
        {/* les languages que j'utilise et outils sur un double carousel avec un style letterbox et des étoiles sur ma maitrise */}
        
    </div>

}

export default App
