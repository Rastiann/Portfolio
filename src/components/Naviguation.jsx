
export default function Naviguation({ links }) {
    return <>
        {links.map(link => (
            <li className="py-2" key={link.name}>
                <a className="transition-colors text-muted-foreground hover:text-foreground font-medium" href={link.href}>{link.name}</a>
            </li>
        ))}
    </>

}