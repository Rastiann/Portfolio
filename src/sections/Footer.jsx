import Naviguation from "../components/Naviguation"

export default function Footer({ links }) {

    return (
        <section className="c-space">
            <div className="flex items-center justify-between border-t border-border/80 py-5">
                <Naviguation links={links} />

            </div>
        </section>

    )
}