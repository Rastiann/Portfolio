import { twMerge } from "tailwind-merge"

export default function ProjectDescription({
    className,
    content
}) {
    return (
        <div className={twMerge(" mx-auto px-6 py-12 flex flex-col gap-8", className)}>

            {/* HEADER */}
            <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-bold">{content.title}</h1>
                <p className="text-lg text-muted">{content.subtitle}</p>
            </div>

            {/* DESCRIPTION */}
            <div className="text-base leading-relaxed">
                {content.description}
            </div>

            {/* TECHNO */}
            <div className="flex flex-wrap gap-2">
                {content.technologie?.map((tech, i) => (
                    <span
                        key={i}
                        className="px-3 py-1 bg-surface-soft rounded-full text-sm"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* KEY POINTS */}
            <div className="flex flex-col gap-6">
                {content.keyPoints?.map((point, i) => (
                    <div key={i} className="flex flex-col gap-2">
                        <h3 className="text-xl font-semibold">
                            {point.title}
                        </h3>
                        <p className="text-muted">
                            {point.description}
                        </p>

                        {point.code && (
                            <div className="bg-surface-strong text-foreground p-4 rounded-lg text-sm">
                                {/* exemple code */}
                                <code>
                                    {`app.use('/api', createProxyMiddleware({
                                    target: 'http://microservice',
                                    changeOrigin: true
                                    }))`}
                                </code>
                            </div>
                        )}
                    </div>
                ))}
            </div>

        </div>
    )
}