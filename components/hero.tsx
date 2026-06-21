"use client"

import { useRef } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Download, Mail, Sparkles, MapPin } from 'lucide-react'
import TiltCard from './tilt-card'

const Scene3D = dynamic(() => import('./scene-3d'), { ssr: false })

const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '15+', label: 'Apps Shipped' },
    { value: '4.8★', label: 'Avg. Store Rating' },
]

const Hero = () => {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    const yVisual = useTransform(scrollYProgress, [0, 1], [0, 90])
    const yText = useTransform(scrollYProgress, [0, 1], [0, 40])
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

    const scrollToSection = (href: string) => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section
            id="home"
            ref={ref}
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
        >
            <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-8 items-center">
                    {/* ---------- Left: intro ---------- */}
                    <motion.div style={{ y: yText }} className="text-center lg:text-left">
                        <motion.span
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="eyebrow"
                        >
                            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                            Available for new projects
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.05 }}
                            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-5"
                        >
                            <span className="block text-gray-900 dark:text-white">Muhammad</span>
                            <span className="block gradient-text animate-gradient-pan">Hammad</span>
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="text-lg sm:text-2xl text-gray-700 dark:text-gray-300 mb-4 font-medium"
                        >
                            Senior Flutter Developer
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.25 }}
                            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            I craft fast, beautiful cross-platform mobile apps for iOS and Android &mdash;
                            blending clean architecture with delightful, accessible UX. Currently building at
                            <span className="text-gray-900 dark:text-gray-200 font-semibold"> Value Growth Advisory</span>.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.35 }}
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-stretch sm:items-center mb-10"
                        >
                            <motion.button
                                whileHover={{ scale: 1.04, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => scrollToSection('#contact')}
                                aria-label="Jump to the contact section"
                                className="btn-primary w-full sm:w-auto"
                            >
                                <Mail className="w-5 h-5" aria-hidden="true" />
                                Get In Touch
                            </motion.button>

                            <motion.a
                                whileHover={{ scale: 1.04, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                href="/documents/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Download my CV (PDF)"
                                className="btn-secondary w-full sm:w-auto"
                            >
                                <Download className="w-5 h-5" aria-hidden="true" />
                                Download CV
                            </motion.a>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.45 }}
                            className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0"
                        >
                            {stats.map((s) => (
                                <div key={s.label} className="text-center lg:text-left">
                                    <div className="text-2xl sm:text-3xl font-extrabold gradient-text">{s.value}</div>
                                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">{s.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* ---------- Right: photo + 3D ---------- */}
                    <motion.div
                        style={{ y: yVisual, opacity }}
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative flex items-center justify-center order-first lg:order-last"
                    >
                        <div className="relative w-[300px] sm:w-[360px] h-[360px] sm:h-[420px] tilt-grid">
                            {/* Profile photo in a 3D glass frame */}
                            <TiltCard max={12} className="glass-strong tilt-surface rounded-[2rem] p-3 shadow-premium absolute inset-0">
                                <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden" style={{ transform: 'translateZ(40px)' }}>
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-transparent to-accent-400/20" />
                                    <Image
                                        src="/images/profile_pic.png"
                                        alt="Portrait of Muhammad Hammad, Senior Flutter Developer"
                                        fill
                                        priority
                                        sizes="(max-width: 640px) 300px, 360px"
                                        className="object-cover"
                                    />
                                </div>

                                {/* Floating tech badges */}
                                <motion.span
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    style={{ transform: 'translateZ(70px)' }}
                                    className="absolute -left-4 top-10 glass px-3 py-1.5 rounded-xl text-sm font-semibold text-primary-700 dark:text-accent-200 shadow-glow"
                                >
                                    Flutter
                                </motion.span>
                                <motion.span
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 5, repeat: Infinity }}
                                    style={{ transform: 'translateZ(70px)' }}
                                    className="absolute -right-3 top-24 glass px-3 py-1.5 rounded-xl text-sm font-semibold text-primary-700 dark:text-accent-200 shadow-glow"
                                >
                                    iOS · Android
                                </motion.span>
                                <motion.span
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 4.5, repeat: Infinity }}
                                    style={{ transform: 'translateZ(70px)' }}
                                    className="absolute left-6 -bottom-3 glass px-3 py-1.5 rounded-xl text-sm font-semibold text-primary-700 dark:text-accent-200 shadow-glow inline-flex items-center gap-1"
                                >
                                    <MapPin className="w-3.5 h-3.5" aria-hidden="true" /> Pakistan
                                </motion.span>
                            </TiltCard>

                            {/* Animated 3D cube tucked at the corner */}
                            <div className="absolute -bottom-16 -right-10 w-40 h-40 pointer-events-none hidden sm:block opacity-90">
                                <Scene3D />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.button
                onClick={() => scrollToSection('#about')}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ opacity: { delay: 1 }, y: { duration: 2, repeat: Infinity } }}
                aria-label="Scroll down to the About section"
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 p-2.5 rounded-full glass hover:bg-white/20 transition-colors"
            >
                <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-300" aria-hidden="true" />
            </motion.button>
        </section>
    )
}

export default Hero
