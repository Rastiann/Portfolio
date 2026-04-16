import { twMerge } from "tailwind-merge"
import Marquee from "../components/Marquee"

const languages = [
    {
        name: "Html",
        role: "Frontend UI Library",
        level: 85,
        tags: ["UI", "Hooks", "SPA"],
        img: "src/assets/logos/html.png",
    },
    {
        name: "Css",
        role: "Fullstack Framework",
        level: 80,
        tags: ["SSR", "SEO", "App Router"],
        img: "/logos/nextjs.png",
    },
    {
        name: "Kotlin",
        role: "Core Language",
        level: 90,
        tags: ["ES6+", "Async", "DOM"],
        img: "/logos/javascript.png",
    },
    {
        name: "JavaScript",
        role: "Typed JavaScript",
        level: 75,
        tags: ["Typing", "Scalable", "DX"],
        img: "/logos/typescript.png",
    },
    {
        name: "Node.js",
        role: "Backend Runtime",
        level: 70,
        tags: ["API", "Server", "REST"],
        img: "/logos/node.png",
    },
    {
        name: "Golang",
        role: "Utility-first Styling",
        level: 88,
        tags: ["UI", "Responsive", "Design"],
        img: "/logos/tailwind.png",
    },
    {
        name: "Php",
        role: "Utility-first Styling",
        level: 88,
        tags: ["UI", "Responsive", "Design"],
        img: "/logos/tailwind.png",
    },
    {
        name: "MongoDB",
        role: "Utility-first Styling",
        level: 88,
        tags: ["UI", "Responsive", "Design"],
        img: "/logos/tailwind.png",
    },
    {
        name: "Sql",
        role: "Utility-first Styling",
        level: 88,
        tags: ["UI", "Responsive", "Design"],
        img: "/logos/tailwind.png",
    }
]

const tools = [
    {
        name: "Linux",
        role: "Frontend UI Library",
        level: 85,
        tags: ["UI", "Hooks", "SPA"],
        img: "src/assets/logos/html.png",
    },
    {
        name: "Gitlab",
        role: "Fullstack Framework",
        level: 80,
        tags: ["SSR", "SEO", "App Router"],
        img: "/logos/nextjs.png",
    },
    {
        name: "Github",
        role: "Core Language",
        level: 90,
        tags: ["ES6+", "Async", "DOM"],
        img: "/logos/javascript.png",
    },
    {
        name: "VScode",
        role: "Typed JavaScript",
        level: 75,
        tags: ["Typing", "Scalable", "DX"],
        img: "/logos/typescript.png",
    },
    {
        name: "Android Studio",
        role: "Backend Runtime",
        level: 70,
        tags: ["API", "Server", "REST"],
        img: "/logos/node.png",
    },
    {
        name: "Tailwind CSS",
        role: "Utility-first Styling",
        level: 88,
        tags: ["UI", "Responsive", "Design"],
        img: "/logos/tailwind.png",
    },
    {
        name: "Intellij",
        role: "Utility-first Styling",
        level: 88,
        tags: ["UI", "Responsive", "Design"],
        img: "/logos/tailwind.png",
    },
    {
        name: "Sql Dev",
        role: "Utility-first Styling",
        level: 88,
        tags: ["UI", "Responsive", "Design"],
        img: "/logos/tailwind.png",
    },
    {
        name: "React",
        role: "Utility-first Styling",
        level: 88,
        tags: ["UI", "Responsive", "Design"],
        img: "/logos/tailwind.png",
    },
    {
        name: "CodeIgniter",
        role: "Utility-first Styling",
        level: 88,
        tags: ["UI", "Responsive", "Design"],
        img: "/logos/tailwind.png",
    }
]

const ReviewCard = ({
    img,
    name,
    role,
    level,
    tags = [],
}) => {

    return (
        <figure
            className={twMerge(
                "relative w-44 cursor-pointer overflow-hidden rounded-lg border flex-shrink-0",
                "border-gray-800 bg-gray-950 hover:border-gray-600",
                "dark:border-gray-700 dark:bg-gray-900 dark:hover:border-gray-500",
                "transition-all duration-200 hover:scale-[1.03] hover:shadow-xl"
            )}
            style={{ aspectRatio: "2/3" }}
        >
            {/* image */}
            <img
                src={img}
                alt={name}
                className="absolute inset-0 w-full h-full object-cover opacity-60"
            />

            {/* gradient overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0.1) 100%)",
                }}
            />

            {/* badge level (remplace étoiles film) */}
            <div className="absolute top-2 right-2 bg-white/10 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-wider">
                {level}%
            </div>

            {/* content bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
                <figcaption className="text-white text-sm font-semibold leading-tight mb-0.5">
                    {name}
                </figcaption>

                <p className="text-green-400 text-[10px] font-medium mb-1.5 uppercase tracking-wider">
                    {role}
                </p>

                {/* tags */}
                <div className="flex flex-wrap gap-1 mb-1.5">
                    {tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="text-[9px] text-white/50 border border-white/10 px-1 py-[1px] rounded-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="text-gray-300 text-[11px] leading-relaxed italic">
                    Mastery: {level}%
                </div>
            </div>
        </figure>
    )
}

export default function Stack() {
    return (
        <section className="flex flex-col gap-10 c-space text-center md:text-start">
            <h1 className="font-extrabold text-8xl">Stack</h1>
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {languages.map((review) => (
                        <ReviewCard key={review.name} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {tools.map((review) => (
                        <ReviewCard key={review.name} {...review} />
                    ))}
                </Marquee>
                <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
                <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
            </div>
        </section>

    )
}
