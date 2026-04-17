import Marquee from "../components/Marquee"
import StackCard from "../components/StackCard"

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

export default function Stack() {
    return (
        <section className="flex flex-col gap-10 c-space text-center md:text-start mb-20">
            <h1 className="font-extrabold text-8xl">Stack</h1>

            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">

                <p className="font-medium text-neutral-300 text-5xl">Languages</p>
                <Marquee pauseOnHover className="[--duration:20s]">
                    {languages.map((item) => (
                        <StackCard key={item.name} {...item} />
                    ))}
                </Marquee>

                <p className="font-medium text-neutral-300 text-5xl">Tools</p>
                <Marquee pauseOnHover className="[--duration:20s]">
                    {tools.map((item) => (
                        <StackCard key={item.name} {...item} />
                    ))}
                </Marquee>

                {/* gradients */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>

            </div>
        </section>
    )
}