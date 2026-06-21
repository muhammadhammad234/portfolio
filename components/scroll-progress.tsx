"use client"

import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })
    const [showTop, setShowTop] = useState(false)

    useEffect(() => {
        const onScroll = () => setShowTop(window.scrollY > 500)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    return (
        <>
            {/* Reading progress bar */}
            <motion.div className="scroll-progress w-full" style={{ scaleX }} aria-hidden="true" />

            {/* Back-to-top button */}
            <AnimatePresence>
                {showTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={scrollToTop}
                        aria-label="Back to top"
                        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300"
                    >
                        <ArrowUp className="w-5 h-5" aria-hidden="true" />
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    )
}

export default ScrollProgress
