// De la Magie Noir bien-sur à ne surtout pas toucher

export default function ReviewCard({ img, name, role, level, tags = [] }) {
    return (
        <figure
            className="relative w-44 rounded-xl shrink p-4 flex flex-col justify-between overflow-hidden bg-surface-strong hover:bg-surface transition-all duration-200 hover:scale-[1.04] hover:shadow-2xl"
            style={{ aspectRatio: "2/3" }}
        >
            {/* GLOW */}
            <div className="absolute inset-0 opacity-20 blur-2xl">
                <img src={img} className="w-full h-full object-contain scale-150" />
            </div>

            {/* LEVEL */}
            <div className="relative z-10 text-right text-[10px] text-muted">
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
                <figcaption className="text-foreground text-sm font-semibold">
                    {name}
                </figcaption>

                <p className="text-foreground text-[10px] font-medium mb-2 uppercase tracking-wider">
                    {role}
                </p>

                <div className="flex flex-wrap gap-1 mb-2">
                    {tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="text-[9px] text-foreground/60 bg-surface-soft px-1.5 py-0.5 rounded"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="text-foreground text-[11px] italic">
                    Mastery: {level}%
                </div>
            </div>
        </figure>
    )
}