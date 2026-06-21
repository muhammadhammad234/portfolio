"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
]

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [active, setActive] = useState('#home')
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Scroll-spy: highlight the nav item for the section currently in view.
    useEffect(() => {
        const sections = navItems
            .map((i) => document.querySelector(i.href))
            .filter(Boolean) as Element[]

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(`#${entry.target.id}`)
                })
            },
            { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
        )

        sections.forEach((s) => observer.observe(s))
        return () => observer.disconnect()
    }, [mounted])

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href)
        if (element) element.scrollIntoView({ behavior: 'smooth' })
        setActive(href)
        setIsOpen(false)
    }

    if (!mounted) return null

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/70 dark:bg-dark-950/70 backdrop-blur-xl border-b border-gray-200/60 dark:border-white/10 shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="container-custom">
                <nav
                    aria-label="Primary"
                    className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8"
                >
                    {/* Logo */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        onClick={() => scrollToSection('#home')}
                        aria-label="Back to top"
                        className="text-xl sm:text-2xl font-bold gradient-text"
                    >
                        Muhammad Hammad
                    </motion.button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        {navItems.map((item) => {
                            const isActive = active === item.href
                            return (
                                <motion.button
                                    key={item.name}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => scrollToSection(item.href)}
                                    aria-current={isActive ? 'page' : undefined}
                                    className={`relative font-medium transition-colors duration-200 ${isActive
                                        ? 'text-primary-600 dark:text-primary-400'
                                        : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                                        }`}
                                >
                                    {item.name}
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-underline"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-primary-500 to-accent-400"
                                        />
                                    )}
                                </motion.button>
                            )
                        })}
                    </div>

                    {/* Theme Toggle & Mobile Menu Button */}
                    <div className="flex items-center space-x-3 sm:space-x-4">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-200"
                        >
                            {theme === 'dark' ? (
                                <Sun className="w-5 h-5 text-yellow-500" aria-hidden="true" />
                            ) : (
                                <Moon className="w-5 h-5 text-gray-700" aria-hidden="true" />
                            )}
                        </motion.button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                            className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-200"
                        >
                            {isOpen ? (
                                <X className="w-5 h-5" aria-hidden="true" />
                            ) : (
                                <Menu className="w-5 h-5" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </nav>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            id="mobile-menu"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="md:hidden overflow-hidden bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700"
                        >
                            <div className="px-4 py-4 space-y-1">
                                {navItems.map((item) => {
                                    const isActive = active === item.href
                                    return (
                                        <button
                                            key={item.name}
                                            onClick={() => scrollToSection(item.href)}
                                            aria-current={isActive ? 'page' : undefined}
                                            className={`block w-full text-left py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${isActive
                                                ? 'bg-primary-50 dark:bg-primary-900/40 text-primary-600 dark:text-primary-300'
                                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-800'
                                                }`}
                                        >
                                            {item.name}
                                        </button>
                                    )
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    )
}

export default Header
