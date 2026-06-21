"use client"

import { useRef, useState, useEffect, ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface TiltCardProps {
    children: ReactNode
    className?: string
    /** Max tilt in degrees */
    max?: number
}

/**
 * A card that tilts in 3D toward the cursor (pointer devices only) and
 * shows a soft glare. Falls back to a flat, static card when the user
 * prefers reduced motion or is on a touch device.
 */
const TiltCard = ({ children, className = '', max = 9 }: TiltCardProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const [enabled, setEnabled] = useState(false)

    const mx = useMotionValue(0.5)
    const my = useMotionValue(0.5)

    const rotateX = useSpring(useTransform(my, [0, 1], [max, -max]), { stiffness: 150, damping: 18 })
    const rotateY = useSpring(useTransform(mx, [0, 1], [-max, max]), { stiffness: 150, damping: 18 })

    // Glare position follows the cursor.
    const glareX = useTransform(mx, [0, 1], ['0%', '100%'])
    const glareY = useTransform(my, [0, 1], ['0%', '100%'])
    const glare = useTransform(
        [glareX, glareY],
        ([x, y]: string[]) => `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.18), transparent 45%)`
    )

    useEffect(() => {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        const fine = window.matchMedia('(pointer: fine)').matches
        setEnabled(!reduce && fine)
    }, [])

    const handleMove = (e: React.MouseEvent) => {
        if (!enabled || !ref.current) return
        const rect = ref.current.getBoundingClientRect()
        mx.set((e.clientX - rect.left) / rect.width)
        my.set((e.clientY - rect.top) / rect.height)
    }

    const reset = () => {
        mx.set(0.5)
        my.set(0.5)
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={reset}
            style={enabled ? { rotateX, rotateY, transformStyle: 'preserve-3d' } : undefined}
            className={`relative ${className}`}
        >
            {children}
            {enabled && (
                <motion.span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-50"
                    style={{ background: glare }}
                />
            )}
        </motion.div>
    )
}

export default TiltCard
