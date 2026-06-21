"use client"

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import TiltCard from './tilt-card'

const Testimonials = () => {
    const testimonials = [
        {
            name: 'John Smith',
            role: 'Product Manager, Tech Startup',
            company: 'Simplitaught',
            content: 'Hammad delivered our Flutter app ahead of schedule with exceptional quality. His expertise in mobile development and attention to detail made the entire process smooth. Highly recommend for any Flutter project.',
            rating: 5
        },
        {
            name: 'Sarah Ahmed',
            role: 'Founder',
            company: 'Rex Technologies',
            content: 'Working with Hammad was a great experience. He built our e-commerce mobile app from scratch with clean architecture and seamless Firebase integration. The app performs beautifully on both iOS and Android.',
            rating: 5
        },
        {
            name: 'Ali Hassan',
            role: 'CTO',
            company: 'GhairMulki Software House',
            content: 'Hammad is a skilled Flutter developer who consistently delivers. His code is maintainable, and he communicates clearly throughout the project. Would definitely work with him again.',
            rating: 5
        }
    ]

    const initials = (name: string) => name.split(' ').map((n) => n[0]).join('').slice(0, 2)

    return (
        <section id="testimonials" className="section-padding relative">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="eyebrow">Testimonials</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        Kind words from <span className="gradient-text">collaborators</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        What clients and colleagues say about working with me
                    </p>
                </motion.div>

                <div className="tilt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <TiltCard max={8} className="card tilt-surface p-6 h-full">
                                <div style={{ transform: 'translateZ(30px)' }}>
                                    <Quote className="w-9 h-9 text-primary-400/60 dark:text-accent-300/50 mb-4" aria-hidden="true" />
                                    <div className="flex gap-1 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <span key={i} className="text-amber-400 text-lg" aria-hidden>★</span>
                                        ))}
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                        &ldquo;{testimonial.content}&rdquo;
                                    </p>
                                    <div className="flex items-center gap-3 pt-4 border-t border-gray-200/70 dark:border-white/10">
                                        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary-500 to-accent-400 flex items-center justify-center text-white font-bold text-sm shadow-glow">
                                            {initials(testimonial.name)}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900 dark:text-gray-100">{testimonial.name}</p>
                                            <p className="text-sm text-primary-600 dark:text-accent-300">{testimonial.role}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-500">{testimonial.company}</p>
                                        </div>
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
