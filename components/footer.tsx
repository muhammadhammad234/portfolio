"use client"

import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Instagram } from 'lucide-react'

// Custom X (Twitter) Icon Component
const XIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
)

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        {
            icon: Github,
            name: 'GitHub',
            url: 'https://github.com/muhammadhammad234/',
            color: 'hover:text-gray-900 dark:hover:text-gray-100'
        },
        {
            icon: Linkedin,
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/muhammadhammad234',
            color: 'hover:text-blue-600'
        },
        {
            icon: XIcon,
            name: 'X (Twitter)',
            url: 'https://x.com/m_hammad234',
            color: 'hover:text-gray-300'
        },
        {
            icon: Instagram,
            name: 'Instagram',
            url: 'https://www.instagram.com/hammadansari234',
            color: 'hover:text-pink-500'
        }
    ]


    return (
        <footer className="relative text-white border-t border-white/10 bg-dark-950/80 backdrop-blur-xl">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/60 to-transparent" />
            <div className="container-custom">
                <div className="py-12">
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                        {/* Logo and Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-center md:text-left"
                        >
                            <h3 className="text-2xl font-bold gradient-text mb-4">
                                Muhammad Hammad
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                Senior Flutter developer passionate about crafting innovative cross-platform apps
                                and exceptional, accessible user experiences for iOS and Android.
                            </p>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <div className="space-y-2">
                                {[
                                    { name: 'About', href: '#about' },
                                    { name: 'Skills', href: '#skills' },
                                    { name: 'Projects', href: '#projects' },
                                    { name: 'Experience', href: '#experience' },
                                    { name: 'Testimonials', href: '#testimonials' },
                                    { name: 'Contact', href: '#contact' }
                                ].map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="block text-gray-400 hover:text-white transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-center md:text-right"
                        >
                            <h4 className="text-lg font-semibold mb-4">Connect</h4>
                            <div className="flex justify-center md:justify-end gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`p-2 bg-gray-800 dark:bg-dark-700 rounded-lg hover:bg-gray-700 dark:hover:bg-dark-600 transition-all duration-200 ${social.color}`}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="border-t border-gray-800 dark:border-dark-700 py-6"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {currentYear} Muhammad Hammad. All rights reserved.
                        </p>
                        <p className="text-gray-400 text-sm flex items-center gap-1">
                            Made with <Heart className="w-4 h-4 text-red-500" /> using Next.js & Tailwind CSS
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer
