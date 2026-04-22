import CodePopupButton from "./CodePopupButton";

export default function ProjectDescription({ project }) {
    return (
        <div className="w-full max-w-4xl px-6 py-14 flex flex-col gap-10"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>

            {/* HEADER */}
            <div className="flex flex-col gap-2">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">
                    Projet — {project.date}
                </p>
                <h1 className="text-6xl md:text-8xl font-extrabold leading-none tracking-tight text-foreground"
                    style={{ fontFamily: "'Syne', sans-serif" }}>
                    {project.title}
                </h1>
                <div className="w-8 h-[3px] bg-foreground rounded-full mt-2" />
                <p className="text-sm font-light tracking-[0.12em] uppercase text-muted-foreground mt-1">
                    {project.subtitle}
                </p>
            </div>

            {/* GITHUB */}
            {project.github && (
                <div className="flex items-center gap-3 mt-6">

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                group
                relative
                inline-flex items-center gap-2
                px-5 py-2.5
                text-xs font-bold tracking-[0.18em] uppercase
                border border-cyan-400/30
                rounded-md
                text-cyan-300
                bg-cyan-500/5
                hover:bg-cyan-500/10
                hover:border-cyan-300/70
                hover:text-white
                transition-all duration-200
                cursor-pointer
                hover:scale-[1.03]
                active:scale-[0.98]
                shadow-[0_0_0px_rgba(0,0,0,0)]
                hover:shadow-[0_0_25px_-8px_rgba(34,211,238,0.6)]
            "
                        style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                        <span>Voir le code</span>

                        <span className="text-cyan-300 group-hover:text-white transition">
                            ↗
                        </span>
                    </a>

                    <span className="text-xs text-muted-foreground/60">
                        GitHub repository
                    </span>
                </div>
            )}

            {/* DESCRIPTION */}
            <div className="flex flex-col gap-3">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground"
                    style={{ fontFamily: "'Syne', sans-serif" }}>
                    À propos
                </p>
                <div className="border-l border-foreground/20 pl-6 py-1 bg-white/5 rounded-r-2xl">
                    <p className="text-foreground/80 leading-relaxed text-sm whitespace-pre-line">
                        {project.description}
                    </p>
                </div>
            </div>

            {/* TECHNOLOGIES */}
            <div className="flex flex-col gap-3">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground"
                    style={{ fontFamily: "'Syne', sans-serif" }}>
                    Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 text-xs font-bold tracking-widest uppercase border border-foreground/20 rounded text-muted-foreground hover:border-foreground/40 hover:text-foreground transition-colors"
                            style={{ fontFamily: "'Syne', sans-serif" }}>
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* KEY POINTS */}
            <div className="flex flex-col gap-3">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground"
                    style={{ fontFamily: "'Syne', sans-serif" }}>
                    Points clés
                </p>
                <div className="grid md:grid-cols-2 border border-foreground/10 rounded-2xl overflow-hidden divide-y divide-foreground/10 md:divide-y-0 md:divide-x">
                    {project.keyPoints?.map((point, i) => (
                        <div
                            key={i}
                            className="bg-white/5 hover:bg-white/10 transition-colors p-5 flex flex-col gap-2"
                            style={{ borderRight: i % 2 === 0 && i + 1 < project.keyPoints.length ? undefined : undefined }}>
                            <span className="text-xs font-extrabold tracking-[0.1em] text-foreground/30"
                                style={{ fontFamily: "'Syne', sans-serif" }}>
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <h3 className="text-base font-bold text-foreground"
                                style={{ fontFamily: "'Syne', sans-serif" }}>
                                {point.title}
                            </h3>
                            <p className="text-sm text-foreground/70 leading-relaxed">
                                {point.description}
                            </p>
                            {point.codeSnippet && (
                                <div className="mt-1">
                                    <CodePopupButton code={point.codeSnippet} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
}