import FlipWords from "./FilpWords"

const words = ["Sécurisé", "Moderne", "Scalable"]

export default function HeroText() {

    return (
        <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl max-w-4xs">
            {/* Deskot View */}
            <div className="flex-col hidden md:flex">
                <h1 className="font-medium text-4xl">Salut je suis Bastian <span className=" font-bold text-1xl">🡒</span></h1>
                <p className="text-5xl font-medium text-muted-foreground">Un étudiant <br /> motivé par la création</p>
                <FlipWords words={words} />
                <p className="font-medium text-4xl text-muted-foreground">de solution technologiques</p>
            </div>

            {/* Mobile View */}
            <div className="flex flex-col items-center md:hidden c-space gap-2">
                <p className="text-foreground font-medium text-3xl">Salut je suis Bastian</p>
                <p className="text-muted font-medium text-4xl">motivé par la création</p>
                <FlipWords words={words} />
                <p className="font-semibold text-4xl md:text-5xl">de solution technologiques</p>
            </div>
        </div>
    )

}