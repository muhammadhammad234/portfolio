"use client"

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

interface RevealProps {
    children: ReactNode
    className?: string
    delay?: number
    direction?: Direction
    /** Render as a different wrapper if needed; defaults to div */
    once?: boolean
}

const offsets: Record<Direction, { x?: number; y?: number }> = {
    up: { y: 32 },
    down: { y: -32 },
    left: { x: 48 },
    right: { x: -48 },
    none: {},
}

/** Scroll-triggered reveal wrapper for consistent entrance animations. */
const Reveal = ({ children, className = '', delay = 0, direction = 'up', once = true }: RevealProps) => {
    const offset = offsets[direction]
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, ...offset }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once, margin: '-60px' }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    )
}

export default Reveal
