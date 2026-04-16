import Marquee from "../components/Marquee"

const languages = [
    {
        name: "HTML",
        role: "Markup Language",
        level: 85,
        tags: ["Structure", "Semantic", "SEO"],
        img: "src/assets/logos/html.png",
    },
    {
        name: "CSS",
        role: "Styling Language",
        level: 80,
        tags: ["Layout", "Responsive", "Animations"],
        img: "src/assets/logos/css.png",
    },
    {
        name: "Kotlin",
        role: "Programming Language",
        level: 90,
        tags: ["JVM", "Android", "Coroutines"],
        img: "src/assets/logos/kotlin.png",
    },
    {
        name: "JavaScript",
        role: "Programming Language",
        level: 75,
        tags: ["ES6+", "Async", "DOM"],
        img: "src/assets/logos/javascript.png",
    },
    {
        name: "Node.js",
        role: "Backend Runtime",
        level: 70,
        tags: ["API", "REST", "Event-driven"],
        img: "src/assets/logos/node.png",
    },
    {
        name: "Golang",
        role: "Programming Language",
        level: 70,
        tags: ["Concurrency", "Backend", "Performance"],
        img: "src/assets/logos/golang.png",
    },
    {
        name: "PHP",
        role: "Backend Language",
        level: 75,
        tags: ["Web", "Server-side", "MVC"],
        img: "src/assets/logos/php.png",
    },
    {
        name: "MongoDB",
        role: "NoSQL Database",
        level: 70,
        tags: ["NoSQL", "JSON", "Scalable"],
        img: "src/assets/logos/mongodb.png",
    },
    {
        name: "SQL",
        role: "Database Language",
        level: 75,
        tags: ["Queries", "Relational", "Joins"],
        img: "src/assets/logos/sql.png",
    }
]

const tools = [
    {
        name: "Linux",
        role: "Operating System",
        level: 85,
        tags: ["CLI", "Server", "DevOps"],
        img: "src/assets/logos/linux.png",
    },
    {
        name: "GitLab",
        role: "DevOps Platform",
        level: 80,
        tags: ["CI/CD", "Repo", "Pipelines"],
        img: "src/assets/logos/gitlab.png",
    },
    {
        name: "GitHub",
        role: "Version Control Platform",
        level: 90,
        tags: ["Git", "Collaboration", "Open Source"],
        img: "src/assets/logos/github.png",
    },
    {
        name: "VS Code",
        role: "Code Editor",
        level: 85,
        tags: ["Extensions", "Debugging", "Lightweight"],
        img: "src/assets/logos/vscode.png",
    },
    {
        name: "Android Studio",
        role: "IDE",
        level: 70,
        tags: ["Android", "Emulator", "Gradle"],
        img: "src/assets/logos/androidstudio.png",
    },
    {
        name: "Tailwind CSS",
        role: "CSS Framework",
        level: 88,
        tags: ["Utility-first", "Responsive", "Design"],
        img: "src/assets/logos/tailwind.png",
    },
    {
        name: "IntelliJ IDEA",
        role: "IDE",
        level: 85,
        tags: ["Java", "Kotlin", "Productivity"],
        img: "src/assets/logos/intellij.png",
    },
    {
        name: "SQL Developer",
        role: "Database Tool",
        level: 75,
        tags: ["Oracle", "Queries", "DB Admin"],
        img: "src/assets/logos/sqldev.png",
    },
    {
        name: "React",
        role: "Frontend Library",
        level: 85,
        tags: ["Components", "Hooks", "SPA"],
        img: "src/assets/logos/react.png",
    },
    {
        name: "CodeIgniter",
        role: "PHP Framework",
        level: 70,
        tags: ["MVC", "Backend", "Lightweight"],
        img: "src/assets/logos/codeigniter.png",
    }
]

const ReviewCard = ({ img, name, role, level, tags = [] }) => {
    return (
        <figure
            className="relative w-44 rounded-xl flex-shrink-0 p-4 flex flex-col justify-between overflow-hidden bg-gray-950 hover:bg-gray-900 transition-all duration-200 hover:scale-[1.04] hover:shadow-2xl"
            style={{ aspectRatio: "2/3" }}
        >
            {/* GLOW */}
            <div className="absolute inset-0 opacity-20 blur-2xl">
                <img src={img} className="w-full h-full object-contain scale-150" />
            </div>

            {/* LEVEL */}
            <div className="relative z-10 text-right text-[10px] text-white/50">
                {level}%
            </div>

            {/* LOGO */}
            <div className="relative z-10 flex items-center justify-center flex-1">
                <img
                    src={img}
                    alt={name}
                    className="h-20 object-contain drop-shadow-lg"
                />
            </div>

            {/* CONTENT */}
            <div className="relative z-10">
                <figcaption className="text-white text-sm font-semibold">
                    {name}
                </figcaption>

                <p className="text-green-400 text-[10px] font-medium mb-2 uppercase tracking-wider">
                    {role}
                </p>

                <div className="flex flex-wrap gap-1 mb-2">
                    {tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="text-[9px] text-white/60 bg-white/5 px-1.5 py-0.5 rounded"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="text-gray-400 text-[11px] italic">
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

                <p className="font-medium text-neutral-300 text-5xl">Languages</p>
                <Marquee pauseOnHover className="[--duration:20s]">
                    {languages.map((item) => (
                        <ReviewCard key={item.name} {...item} />
                    ))}
                </Marquee>

                <p className="font-medium text-neutral-300 text-5xl">Tools</p>
                <Marquee pauseOnHover className="[--duration:20s]">
                    {tools.map((item) => (
                        <ReviewCard key={item.name} {...item} />
                    ))}
                </Marquee>

                {/* gradients */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>

            </div>
        </section>
    )
}