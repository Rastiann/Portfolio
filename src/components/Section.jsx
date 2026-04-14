export function Section({children, className}) {
    return (
        <section className={`max-w-3xl px-4 m-auto ${className}`}>
            {children}
        </section>
    )
}