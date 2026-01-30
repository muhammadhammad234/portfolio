"use client"

import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail } from 'lucide-react'

const Hero = () => {
    const scrollToSection = (href: string) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-dark-900 dark:to-dark-800"></div>
            <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_30px_30px,rgba(156,146,172,0.05)_2px,transparent_0)] bg-[length:60px_60px]"></div>

            <div className="container-custom section-padding relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Greeting */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-lg text-gray-600 dark:text-gray-400 mb-4"
                    >
                        Hello, I'm
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
                    >
                        <span className="gradient-text">Muhammad Hammad</span>
                    </motion.h1>

                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-2xl sm:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 mb-8"
                    >
                        Flutter Mobile Developer
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        I build cross-platform mobile applications with Flutter that deliver exceptional user experiences.
                        Passionate about creating beautiful, performant apps for iOS and Android.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollToSection('#contact')}
                            className="btn-primary flex items-center gap-2"
                        >
                            <Mail className="w-5 h-5" />
                            Get In Touch
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-secondary flex items-center gap-2"
                        >
                            <Download className="w-5 h-5" />
                            Download CV
                        </motion.button>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    >
                        <motion.button
                            onClick={() => scrollToSection('#about')}
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="p-2 rounded-full bg-white/20 dark:bg-dark-800/20 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-dark-800/30 transition-colors duration-200"
                        >
                            <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero
