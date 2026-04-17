import { motion } from "framer-motion"
import { useState } from "react"

export default function Contact() {

    const [formData, setFormData] = useState({ name: "", mail: "", message: "" })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Data envoyé", formData)
    }


    return <section className="c-space relative flex items-center justify-center">
        <div className="flex flex-col items-center justify-center max-w-md p-5 border border-white/10 rounded-2xl bg-secondary">
            {/* le gap prends pas jsp pourquoi ici ? */}
            <div className="flex flex-col items-start w-full g-5 mb-10">
                <h2 className="font-bold text-3xl md:text-4xl">Let's Talk</h2>
                <p className="font-normal text-neutral-400">Salut bande de salope vous etes tous des putes
                    Salut bande de salope vous etes tous des putes
                    Salut bande de salope vous etes tous des putes
                    Salut bande de salope vous etes tous des putes
                    Salut bande de salope vous etes tous des putes
                </p>
            </div>
            <form className="w-full" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="name" className="field-label">Full Name</label>
                    <input onChange={handleChange} value={formData.name} type="text" id="name" name="name" className="field-input field-input-focus" placeholder="John Doe" autoComplete="name" required />
                </div>

                <div className="mb-5">
                    <label htmlFor="mail" className="field-label">E-mail</label>
                    <input onChange={handleChange} value={formData.mail} type="text" id="mail" name="mail" className="field-input field-input-focus" placeholder="bastian.cochard@gmail.com" autoComplete="mail" required />
                </div>

                <div className="mb-5">
                    <label htmlFor="message" className="field-label">Message</label>
                    <textarea onChange={handleChange} value={formData.message} rows="4" type="text" id="message" name="message" className="field-input field-input-focus" placeholder="Hey je trouve que tu es vraiment stylé" autoComplete="message" required />
                </div>
                <motion.button type="submit" className="overflow-hidden w-full bg-radial from-violet-400 to-purple-700   rounded-sm p-2 hover:cursor-pointer relative"
                    whileTap="pressed"
                >
                    Send
                    {/* 
                    === CA PU SMR ===
                    
                    <motion.span
                        className="absolute inset-0 rounded-full pointer-events-none"
                        style={{
                            background: "radial-gradient(circle, rgba(255,255,255,0.35) 0%, transparent 70%)"
                        }}
                        variants={{
                            pressed: { opacity: [0, 1, 0], scale: [0.3, 1.5] }
                        }}
                        transition={{duration: 0.4}}
                    /> */}
                </motion.button>
            </form>
        </div>
    </section>

}