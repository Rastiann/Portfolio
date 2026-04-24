import CvIcon from "../../public/assets/footer/CvIcon"
import GithubIcon from "../../public/assets/footer/GithubIcon"
import MailIcon from "../../public/assets/footer/MailIcon"
import Naviguation from "../components/Naviguation"

export default function Footer({ links }) {

    return (
        <div className="c-space">
            <div className="flex flex-col items-center justify-between border-t border-border/80 py-5 md:flex-row gap-5">
                <ul className="z-20 flex gap-4 flex-row md:gap-6 items-center">
                    {links.map(link => (
                        <li className="py-1" key={link.name}>
                            <a className="transition-colors text-muted-foreground hover:text-violet-300 font-medium" href={link.href}>{link.name}</a>
                        </li>
                    ))}
                </ul>

                <div className="flex gap-2 flex-col md:flex-row items-center">
                    <ul className="flex gap-2 items-center">
                        {/* CV */}
                        <a
                            href="assets/footer/cv.pdf"
                            className="p-1 border-2 border-border/90 rounded-sm hover:bg-overlay-soft"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <CvIcon size="30px" />
                        </a>

                        {/* Github */}
                        <a
                            href="https://github.com/Rastiann"
                            className="p-1 border-2 border-border/90 hover:bg-overlay-soft rounded-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GithubIcon size="30px" />
                        </a>

                        {/* Mail */}
                        <a
                            href="mailto:bastian.cochard@gmail.com"
                            className="p-1 border-2 border-border/90 hover:bg-overlay-soft rounded-sm"
                        >
                            <MailIcon size="30px" />
                        </a>
                    </ul>
                    <div className="flex flex-col text-center md:text-start">
                        <p className="text-muted-foreground transition-colors hover:text-violet-300">Bastian COCHARD</p>
                        <p>© 2026 Rastiann.</p>
                    </div>
                </div>




            </div>
        </div>

    )
}
