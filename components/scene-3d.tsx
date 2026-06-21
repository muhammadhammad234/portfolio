"use client"

import { useEffect, useRef, useState } from 'react'
import { Smartphone, Code2, Layers, Zap, Cpu, Boxes } from 'lucide-react'

/**
 * Dependency-free 3D scene built with CSS 3D transforms.
 * - A slowly auto-rotating cube whose faces show the core tech.
 * - Subtle mouse-parallax tilt (pointer devices only).
 * - Fully disabled for users who prefer reduced motion.
 */
const Scene3D = () => {
    const wrapRef = useRef<HTMLDivElement>(null)
    const [tilt, setTilt] = useState({ x: -18, y: -24 })
    const [reduced, setReduced] = useState(false)

    useEffect(() => {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
        const set = () => setReduced(mq.matches)
        set()
        mq.addEventListener('change', set)
        return () => mq.removeEventListener('change', set)
    }, [])

    useEffect(() => {
        if (reduced) return
        const el = wrapRef.current
        if (!el) return
        // Only enable parallax on devices that have a fine pointer (mouse).
        if (!window.matchMedia('(pointer: fine)').matches) return

        const onMove = (e: MouseEvent) => {
            const rect = el.getBoundingClientRect()
            const px = (e.clientX - rect.left) / rect.width - 0.5
            const py = (e.clientY - rect.top) / rect.height - 0.5
            setTilt({ x: -18 - py * 22, y: -24 + px * 30 })
        }
        window.addEventListener('mousemove', onMove)
        return () => window.removeEventListener('mousemove', onMove)
    }, [reduced])

    const faces = [
        { icon: Smartphone, label: 'Flutter', cls: 'cube__face--front' },
        { icon: Code2, label: 'Dart', cls: 'cube__face--back' },
        { icon: Layers, label: 'UI/UX', cls: 'cube__face--right' },
        { icon: Zap, label: 'Firebase', cls: 'cube__face--left' },
        { icon: Cpu, label: 'APIs', cls: 'cube__face--top' },
        { icon: Boxes, label: 'Cross-Platform', cls: 'cube__face--bottom' },
    ]

    return (
        <div
            ref={wrapRef}
            className="scene3d relative flex items-center justify-center h-full min-h-[180px] w-full select-none"
            aria-hidden="true"
        >
            {/* Floating background shapes */}
            <span className="float-shape float-shape--1" />
            <span className="float-shape float-shape--2" />
            <span className="float-shape float-shape--3" />

            <div className="scene3d__stage">
                <div
                    className={`cube ${reduced ? 'cube--still' : 'cube--spin'}`}
                    style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
                >
                    {faces.map(({ icon: Icon, label, cls }) => (
                        <div key={label} className={`cube__face ${cls}`}>
                            <Icon className="w-9 h-9 mb-2" strokeWidth={1.5} />
                            <span className="text-sm font-semibold">{label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Scene3D
