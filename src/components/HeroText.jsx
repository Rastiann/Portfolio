import FlipWords from "./FilpWords"

const words = ["Secure", "Modern", "Scalable"]

export default function HeroText() {

    return (
        <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl max-w-4xs">
            {/* Deskot View */}
            <div className="flex-col hidden md:flex">
                <h1 className="font-medium text-4xl">Hi I'm Rastian <span className=" font-bold text-1xl">🡒</span></h1>
                <p className="text-5xl font-medium text-neutral-300">A developper <br /> dedicated to Crafting</p>
                    <FlipWords words={words} />
                <p className="font-medium text-4xl text-neutral-300">Web Solutions</p>
            </div>

            {/* Mobile View */}
            <div className="flex flex-col items-center md:hidden c-space gap-2">
                <p className="text-neutral-100 font-medium text-3xl">Hi I'm Rastian</p>
                <p className="text-neutral-400 font-medium text-4xl">Building</p>
                    <FlipWords words={words} />
                <p className="font-semibold text-5xl">Web Solutions</p>
            </div>

            {/* Paralaxe */}
        </div>
    )

}