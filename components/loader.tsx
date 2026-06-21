"use client"

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Elegant first-paint loader. Shows briefly, then fades out.
 * Skips instantly for users who prefer reduced motion.
 */
const Loader = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        const t = setTimeout(() => setLoading(false), reduce ? 0 : 1100)
        return () => clearTimeout(t)
    }, [])

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-dark-950"
                    aria-hidden="true"
                >
                    <div className="flex flex-col items-center gap-6">
                        <div className="relative w-16 h-16">
                            <motion.span
                                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-400"
                                animate={{ rotate: 360, borderRadius: ['30%', '50%', '30%'] }}
                                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                            />
                            <span className="absolute inset-[6px] rounded-2xl bg-dark-950" />
                            <span className="absolute inset-0 flex items-center justify-center font-display font-bold text-lg text-white">
                                MH
                            </span>
                        </div>
                        <motion.div
                            className="h-0.5 w-32 overflow-hidden rounded-full bg-white/10"
                        >
                            <motion.div
                                className="h-full bg-gradient-to-r from-primary-500 to-accent-400"
                                initial={{ width: '0%' }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 1, ease: 'easeInOut' }}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Loader
