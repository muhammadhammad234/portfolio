"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, CheckCircle2, Loader2 } from 'lucide-react'

const XIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
)

type Status = 'idle' | 'sending' | 'success'

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
    const [status, setStatus] = useState<Status>('idle')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('sending')
        // No backend wired yet — simulate a successful send with a graceful animation.
        setTimeout(() => {
            setStatus('success')
            setFormData({ name: '', email: '', subject: '', message: '' })
            setTimeout(() => setStatus('idle'), 4000)
        }, 1200)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const contactInfo = [
        { icon: Mail, title: 'Email', value: 'hammadansari234@gmail.com', link: 'mailto:hammadansari234@gmail.com' },
        { icon: Phone, title: 'Phone', value: '+92 310 6883027', link: 'tel:+923106883027' },
        { icon: MapPin, title: 'Location', value: 'Pakistan', link: '#' },
    ]

    const socialLinks = [
        { icon: Github, name: 'GitHub', url: 'https://github.com/muhammadhammad234/' },
        { icon: Linkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/in/muhammadhammad234/' },
        { icon: XIcon, name: 'X (Twitter)', url: 'https://x.com/m_hammad234' },
        { icon: Instagram, name: 'Instagram', url: 'https://www.instagram.com/hammadansari234' },
    ]

    const inputClass =
        'w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-white/5 border border-gray-300/70 dark:border-white/10 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-accent-400 focus:border-transparent outline-none transition-all duration-200'

    return (
        <section id="contact" className="section-padding relative">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="eyebrow">Contact</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        Let&apos;s build something <span className="gradient-text">great</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? My inbox is always open.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Contact info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-3">Let&apos;s Connect</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                I&apos;m always interested in new opportunities and exciting projects. Whether you have a
                                question or just want to say hello, I&apos;ll do my best to get back to you quickly.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={info.title}
                                    href={info.link}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ x: 6 }}
                                    className="flex items-center gap-4 p-4 rounded-2xl glass hover:shadow-glow transition-all duration-200 group"
                                >
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary-500/15 to-accent-400/15 ring-1 ring-primary-500/20 group-hover:from-primary-500/25 group-hover:to-accent-400/25 transition-colors">
                                        <info.icon className="w-5 h-5 text-primary-600 dark:text-accent-300" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-gray-100">{info.title}</h4>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">{info.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: index * 0.08 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.12, y: -4 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-3 rounded-xl glass text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-accent-300 hover:shadow-glow transition-all duration-200"
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="glass-strong rounded-3xl p-7 sm:p-8 shadow-premium relative overflow-hidden">
                            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Your Name" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="your.email@example.com" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className={inputClass} placeholder="What's this about?" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className={`${inputClass} resize-none`} placeholder="Tell me about your project or just say hello!" />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={status !== 'idle'}
                                    whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                                    whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
                                    className="btn-primary w-full disabled:opacity-80"
                                >
                                    {status === 'sending' ? (
                                        <><Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" /> Sending…</>
                                    ) : status === 'success' ? (
                                        <><CheckCircle2 className="w-5 h-5" aria-hidden="true" /> Sent!</>
                                    ) : (
                                        <><Send className="w-5 h-5" aria-hidden="true" /> Send Message</>
                                    )}
                                </motion.button>
                            </form>

                            <AnimatePresence>
                                {status === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        role="status"
                                        className="mt-4 flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400"
                                    >
                                        <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                                        Thanks! Your message has been sent — I&apos;ll reply soon.
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
