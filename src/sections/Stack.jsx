import Marquee from "../components/Marquee"
import StackCard from "../components/StackCard"

const languages = [
    {
        name: "HTML",
        role: "Markup Language",
        level: 50,
        tags: ["Structure", "Semantic", "SEO"],
        img: "src/assets/logos/html.png",
    },
    {
        name: "CSS",
        role: "Styling Language",
        level: 45,
        tags: ["Layout", "Responsive", "Animations"],
        img: "src/assets/logos/css.png",
    },
    {
        name: "JavaScript",
        role: "Programming Language",
        level: 45,
        tags: ["ES6+", "Async", "DOM"],
        img: "src/assets/logos/javascript.png",
    },
    {
        name: "Kotlin",
        role: "Programming Language",
        level: 40,
        tags: ["JVM", "Android", "Coroutines"],
        img: "src/assets/logos/kotlin.png",
    },
    {
        name: "Node.js",
        role: "Backend Runtime",
        level: 38,
        tags: ["API", "REST", "Event-driven"],
        img: "src/assets/logos/node.png",
    },
    {
        name: "PHP",
        role: "Backend Language",
        level: 35,
        tags: ["Web", "Server-side", "MVC"],
        img: "src/assets/logos/php.png",
    },
    {
        name: "Golang",
        role: "Programming Language",
        level: 30,
        tags: ["Concurrency", "Backend", "Performance"],
        img: "src/assets/logos/golang.png",
    },
    {
        name: "MongoDB",
        role: "NoSQL Database",
        level: 30,
        tags: ["NoSQL", "JSON", "Scalable"],
        img: "src/assets/logos/mongodb.png",
    },
    {
        name: "SQL",
        role: "Database Language",
        level: 32,
        tags: ["Queries", "Relational", "Joins"],
        img: "src/assets/logos/sql.png",
    }
]
const tools = [
    {
        name: "React",
        role: "Frontend Library",
        level: 45,
        tags: ["Components", "Hooks", "SPA"],
        img: "src/assets/logos/react.png",
    },
    {
        name: "VS Code",
        role: "Code Editor",
        level: 50,
        tags: ["Extensions", "Debugging", "Lightweight"],
        img: "src/assets/logos/vscode.png",
    },
    {
        name: "IntelliJ IDEA",
        role: "IDE",
        level: 45,
        tags: ["Java", "Kotlin", "Productivity"],
        img: "src/assets/logos/intellij.png",
    },
    {
        name: "Tailwind CSS",
        role: "CSS Framework",
        level: 45,
        tags: ["Utility-first", "Responsive", "Design"],
        img: "src/assets/logos/tailwind.png",
    },
    {
        name: "Android Studio",
        role: "IDE",
        level: 35,
        tags: ["Android", "Emulator", "Gradle"],
        img: "src/assets/logos/androidstudio.png",
    },
    {
        name: "GitHub",
        role: "Version Control Platform",
        level: 50,
        tags: ["Git", "Collaboration", "Open Source"],
        img: "src/assets/logos/github.png",
    },
    {
        name: "GitLab",
        role: "DevOps Platform",
        level: 40,
        tags: ["CI/CD", "Repo", "Pipelines"],
        img: "src/assets/logos/gitlab.png",
    },
    {
        name: "CodeIgniter",
        role: "PHP Framework",
        level: 35,
        tags: ["MVC", "Backend", "Lightweight"],
        img: "src/assets/logos/codeigniter.png",
    },
    {
        name: "SQL Developer",
        role: "Database Tool",
        level: 35,
        tags: ["Oracle", "Queries", "DB Admin"],
        img: "src/assets/logos/sqldev.png",
    }
]

export default function Stack() {
    return (
        <section id="stack" className="flex flex-col gap-10 c-space text-center md:text-start mb-20">
            <h1 className="font-extrabold text-8xl">Stack</h1>

            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">

                <p className="font-medium text-foreground text-5xl">Languages</p>
                <Marquee pauseOnHover className="[--duration:20s]">
                    {languages.map((item) => (
                        <StackCard key={item.name} {...item} />
                    ))}
                </Marquee>

                <p className="font-medium text-foreground text-5xl">Tools</p>
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