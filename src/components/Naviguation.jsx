
export default function Naviguation({ links }) {
    return (
        <ul className="z-20 flex gap-4 flex-row md:gap-6 items-center">
            {links.map(link => (
                <li className="py-2" key={link.name}>
                    <a className="transition-colors text-muted-foreground hover:text-foreground font-medium" href={link.href}>{link.name}</a>
                </li>
            ))}
        </ul>
    )
}