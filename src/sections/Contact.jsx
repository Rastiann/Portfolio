import { motion } from "framer-motion"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { toast, Toaster } from "react-hot-toast"
import { twMerge } from "tailwind-merge"
import { DotPattern } from "../components/DotPattern"

export default function Contact() {

    const [formData, setFormData] = useState({ name: "", mail: "", message: "" })
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        setIsLoading(true)
        toast.promise(
            emailjs.send("service_gqk3bep", "template_rantq48", {
                from_name: formData.name,
                to_name: "Bastian",
                from_email: formData.mail,
                to_email: "bastian.cochard@gmail.com",
                message: formData.message
            }, "kWI6ZUIHnwZXW8vIz"),
            // kWI6ZUIHnwZXW8vIz
            {
                loading: 'Sending...',
                success: () => {
                    setIsLoading(false)
                    setFormData({ name: "", mail: "", message: "" })
                    return <b>E-mail send! </b>
                },
                error: () => {
                    setIsLoading(false)
                    return <b> Could not send the email.</b>
                },
            },
            {
                style: {
                    width: "300px",
                    height: "50px",
                }
            }
        )
    }


    return <section id="contact" className="c-space relative flex items-center justify-center">

        {/* Le background avec les points */}
        <div className="absolute inset-0 -z-1"
            style={{
                maskImage: "radial-gradient(ellipse at center, var(--mask) 40%, transparent 80%)",
                WebkitMaskImage: "radial-gradient(ellipse at center, var(--mask) 40%, transparent 80%)"
            }}>
            <DotPattern />
        </div>

        <div className="flex flex-col items-center justify-center max-w-md p-5 border border-border/10 rounded-2xl bg-card py-10">
            {/* le gap prends pas jsp pourquoi ici ? */}
            <div className="flex flex-col items-start w-full g-5 mb-10">
                <h2 className="font-bold text-3xl md:text-4xl text-foreground">Let's Talk</h2>
                <p className="font-normal text-muted-foreground">Vous pouvez m’envoyer un message pour discuter d’un projet, d’un stage ou d’une collaboration.</p>
            </div>
            <form className="w-full" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="name" className="field-label">Full Name</label>
                    <input disabled={isLoading} onChange={handleChange} value={formData.name} type="text" id="name" name="name" className="field-input field-input-focus disabled:opacity-50 disabled:cursor-not-allowed" placeholder="John Doe" autoComplete="name" required />
                </div>

                <div className="mb-5">
                    <label htmlFor="mail" className="field-label">E-mail</label>
                    <input disabled={isLoading} onChange={handleChange} value={formData.mail} type="text" id="mail" name="mail" className="field-input field-input-focus disabled:opacity-50 disabled:cursor-not-allowed" placeholder="bastian.cochard@gmail.com" autoComplete="mail" required />
                </div>

                <div className="mb-5">
                    <label htmlFor="message" className="field-label">Message</label>
                    <textarea disabled={isLoading} onChange={handleChange} value={formData.message} rows="4" id="message" name="message" className="field-input field-input-focus disabled:opacity-50 disabled:cursor-not-allowed" placeholder="Hey je trouve que tu es vraiment stylé" autoComplete="message" required />
                </div>

                <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="overflow-hidden w-full bg-radial rounded-sm p-2 relative disabled:opacity-70 disabled:cursor-not-allowed"
                    whileTap={!isLoading ? { scale: 0.97 } : {}}
                >
                    {isLoading ? "Sending..." : "Send"}
                </motion.button>
            </form>

            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
        </div>
    </section >

}