"use client"

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, Check, Smartphone, Tag, Download } from 'lucide-react'
import TiltCard from './tilt-card'

const PlayStoreIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
    </svg>
)

const AppStoreIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
    </svg>
)

interface AppProject {
    name: string
    subtitle?: string
    tagline: string
    icon: string
    screenshots: string[]
    description: string
    features: string[]
    tech: string[]
    category: string
    downloads: string
    url: string
    appStoreUrl?: string
    rating?: string
}

const CDN = 'https://play-lh.googleusercontent.com/'
/** Append a Google CDN size param for performant delivery. */
const img = (base: string, size: string) => `${base}=${size}`

const apps: AppProject[] = [
    {
        name: 'Khayr',
        subtitle: 'AI Health Companion',
        tagline: 'AI-powered symptom checker & wellness companion',
        icon: CDN + '4Enl-lB6v-9zOO9mQBySfUpO4w1FEp9LX9bDGDEcqNDa-UHU1YotWipB9g1nnBciC71Y_m8sHLnlYnLMK8ju',
        screenshots: [
            CDN + 'pX5Hn7zvDtU4tPWcTVOnjxO7Gd09Yr6xXWTq8VSfsKZn8GBIZoZAS9LmUFJf9JFbwhv6xwc9Sc-wjjWvlACWhg',
            CDN + 'TaaNypXQ3N84KDqadDSd81k_pqGKHUkf8LS7MjRXlCwGTXVjFRd-IcPsQ0VvSDVqC-ehVBBtDtP1g-xmP3n4JQ',
            CDN + 'pXDREEY0ewhYSuBWnahsAdWattj1p_GXKXYFGGG6n49y6zdeBUJhszNZtF-bJLWc9nw4Yqaj11dQiocs96aqDA',
            CDN + 'wwyGCXdk6hy5qZJJAYGkQnbg-x_pdJV6ku7qdDmSZFk164_M51APCYZ9BvlLwyhMHFb_2Dy1tZLAsozu0pe1',
            CDN + '54AnmOm1Gwe3rLcvTwQqYzqCy0-5ooBwW5MbvmnrrgzCURKWgvTmSN6PQJP6N0fTZ6_430InitOdCl-6pOAb-Q',
            CDN + 'JfM2w92XxivY5V9I8YXUql3RYrWuC_0OTxlOu6GLvSAqknQaTRFxzev4kB1USUkRuB6knexa1BujbO8jUWUD4w',
            CDN + 'U-aqB4gpDollZ2HOsdMQXQjVKpaNM64_RBQNFv2dV0UtG-2n40jjIuOcEip9j0vymC1NAoDjhzR2uYXdx0_BRYA',
            CDN + '2iNF6IJkVcF5O6atA_YKwzs5ngqi4zAIMubr898tl6rnpDCdm4KSlNQvqHa0og6tnt8WeFFfTRw0D_g8ZyeGahI',
        ],
        description:
            'Khayr is an AI-powered personal health companion that helps users make informed wellness decisions. An intelligent symptom checker analyses described symptoms and surfaces possible conditions with educational guidance, while a personalized health assessment scores lifestyle habits and offers tailored recommendations — all backed by trusted health resources and a privacy-first design. (Informational use only, not a substitute for professional medical advice.)',
        features: [
            'AI symptom checker with condition insights & guidance',
            'Personalized health-score assessment from lifestyle & habits',
            'Curated, verified educational health resources',
            'Tailored insights that improve with use',
            'Private & secure — no personal data shared',
        ],
        tech: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Gemini AI', 'In-App Purchases'],
        category: 'Health & Fitness',
        downloads: '50+ · 5.0★',
        rating: '5.0',
        url: 'https://play.google.com/store/apps/details?id=com.keybotix.khayr',
        appStoreUrl: 'https://apps.apple.com/us/app/khayr-ai-health-companion/id6749851886',
    },
    {
        name: 'Mingle',
        subtitle: 'Social App',
        tagline: 'Nightlife discovery & social check-in',
        icon: CDN + 'kFC7l-vWX4aa2cCjR-tMb2NdwCsLXycRN0u4NB9wxk_V2AXGnWYMtlMYQdXfxccm7oXUrnSjCpMF-CgEC5GXog',
        screenshots: [
            CDN + 'wciMuHQGcdJjcIDtaDXyY8bMjHqaJE3IcjG5ANWq0dFtulj4OhQRwuO9w6ZENsy7FwHUWdHybRjjFSZ5kJVn9A',
            CDN + 'wNzbqSrfdgfis_YK-2gbKZLZXIw7y6yiKWqYU1r2Ml4EOVgVwEVDEevkYSTuI1Sb4UjAhYz14zsYZK4F-uL_OA',
            CDN + 'qfYD7Sn0gEWc9IIYK6dCchdb0mm5LhO9Yh6TWpAEm1Yp2TeTTnybcG-ixUa4mIu5qK9vZK28Lify6K7RxnvT',
            CDN + '7q9JCfCi1mKJNf1GvMXLOQZqkdSmB1XbpEACa7nC-NkXPkrkbx2VW1Qbyrc52VespCkyFZ2wkNQRAC0F_isvVy0',
            CDN + 'kj9iw3aRm5ZTezVSfs_a3-tsg4BYiBtX1cmAE4Vo_V8qXeA8ZnpTHfjAgmn9mn_bPangVtVWaegwMlLc81Lxng',
        ],
        description:
            'Mingle reimagines nightlife and social discovery by helping people find the best nearby venues, plan nights out, and connect with like-minded people. Automatic check-in/out surfaces real-time and historical venue activity, an in-app wallet streamlines payments, and community features let users build connections around shared interests and lifestyles.',
        features: [
            'Discover nightlife venues that match your vibe',
            'Automatic check-in / check-out at nearby venues',
            'Real-time venue activity and historical insights',
            'Connect with like-minded people & build communities',
            'In-app wallet with secure payments',
        ],
        tech: ['Flutter', 'Firebase', 'Radar', 'Geofencing', 'Google Maps', 'Stripe', 'Apple Pay'],
        category: 'Lifestyle · Social',
        downloads: '10+',
        url: 'https://play.google.com/store/apps/details?id=com.app.mingle',
        appStoreUrl: 'https://apps.apple.com/app/mingle-social-app/id6737700806',
    },
    {
        name: 'Waiz',
        tagline: 'Doctor & clinic appointment booking',
        icon: CDN + 'P30AbMSU_HOGuUwYS92BG_pnWCTr4g817IA2JRy8oAdkY5lObTQ6IlKMNWaIwjb4pcc',
        screenshots: [
            CDN + 'B0LnRBwzNiEtKIfjA1fTUVm_ex10eyd9QPnepArq2A19Z4b2YNPOziw2ADiuWtA6WQ',
            CDN + '4yXJ7V8o92NqqtDqmFn887DwcedIaDjFPikArtmXXIiF1Se7jYPkrjzNGSY2PWrgUnR6',
            CDN + 'acmvOhXerKdU6GaMJAaeClH1gDCbDlvZOAgcc1chFJOi2eZQ1pz75P6q2KKD8cBhmq0',
            CDN + 'JhlUeht6BatxEpCJtm9tFtfJt5UOvzayfEoRPCX5hiQK7x2YQOsRWu7N0ZH_w4Vfzg',
            CDN + 'cGm4HGZgU6n5KHfiPjnWBPnUakrs8Hrm97oCsjKU-AxqExGojUyxP7sWmfr2IquNfMs',
            CDN + 'Gn95NYAJGbDlWetSz7QHw3vmpwRquB67CTbidABkGxoK1ik-Xg6WrBoSmM6PhN83HA',
            CDN + 'UxkPjl6POJhs5Bg8We-q7slMMDfa3ULI34bkoUTpdOtEHXwGTuqYTjmTjKTiL1aQnX0',
        ],
        description:
            'Waiz is a healthcare booking platform that simplifies scheduling medical appointments. Patients can search for doctors and clinics by specialty, location, and availability, then book directly in-app. Rich profiles surface qualifications, patient reviews, and open time slots, while built-in reminders and appointment history keep every visit organised in one place.',
        features: [
            'Search doctors & clinics by specialty, location and availability',
            'Detailed provider profiles with qualifications & patient reviews',
            'Real-time slot booking and appointment management',
            'Automated reminders and full visit history',
            'Encrypted-in-transit data for patient privacy',
        ],
        tech: ['Flutter', 'Dart', 'REST APIs', 'Scheduling', 'Push Notifications', 'Reviews'],
        category: 'Business · Healthcare',
        downloads: '500+',
        url: 'https://play.google.com/store/apps/details?id=com.waizapp',
    },
    {
        name: 'Compass Travels',
        tagline: 'All-in-one travel booking companion',
        icon: CDN + 'Z9Y-JXkECPKCsf-y9tgq-nNtcbmk1wZw9xIu69qpoyJLKXZtcwWb1UR8j5MuID7t0iD2gKCvcwTuMwyq7LG48Q',
        screenshots: [
            CDN + 'EO9bIuVOXouLHzFTVkuYiusxOXy6amKlMHywsUHU-Pw0th0_2AfgdD0tsDhDssuyskECqR6Q6RnVppyj_BWe2Q',
            CDN + 'SOU0UjI53QwW5azZve-HjNJ8_Ow7Rh8si0tCHPAViWsqXDRq1hViCPnkJdEuVL2zV5hip7PfEEGATwvLcgdU',
            CDN + 'Dd80yC7AqkYBLteoFviMgEjQAex3DbNOxyGs1jR3XjPfFPrHI4iRl73uicruY372PlYJ7adsrdDJ-YAmNR24',
        ],
        description:
            'Compass is a complete travel companion that makes trip planning and booking effortless. From flights and hotels to rental cars and travel supplies, it brings the entire journey into one intuitive app — letting travellers explore destinations, compare prices, and manage every booking with secure, fast payments.',
        features: [
            'Book flights, hotels and transportation in a few taps',
            'Shop travel gear, luggage and essentials in-app',
            'Real-time notifications for flight status & confirmations',
            'Personalized destination recommendations',
            'Secure, fast payment options',
        ],
        tech: ['Flutter', 'Dart', 'REST APIs', 'Payments', 'Maps', 'Push Notifications'],
        category: 'Travel & Local',
        downloads: '10+',
        url: 'https://play.google.com/store/apps/details?id=com.compasskuwait.store',
    },
    {
        name: 'Ezhalha',
        tagline: 'Store management & business monitoring',
        icon: CDN + 'bTZ2t5PVZ9AKRXPkbV98rUgo5KqXo_Xrcdxo9dTIdBScx8dVf1EtL1S9gvPHi3X8KX5l6lM0SlUC0WzEav_92w',
        screenshots: [
            CDN + 'DkQKT8797pZT13ccDdx61wehIgqC3gPYrqUo_E5NouBrB2GM-btR7RY5eVqKCM1ZpsyEDazVvBCbwPxOJDii8Q',
            CDN + 'VgbTGyDpDlZ5bImBjj3CVqPtw9FA6_LrOaeoaZw63sVjXYPoLB1jzjI--7r_MZk3YUtUI8vm_PgZz7LYjZNhjQ',
            CDN + 'uRq_e3SxcJ5mBIMNhGbEU7FxANMw4pgf8YUaLYJOmEg-IDY7hZo147g8uHQkHxivxd5y77z8husvezic7DynOw',
            CDN + 'Vx8aF9MnPLJSbz6uRpBWF5t7PobNqad0VeCAx-d3jkSOTzgbi3kmDBs1b5Z71hYWe47lmkNA9moeJBifPgBp-A',
            CDN + '5EqnVP3_8oDLixphm0OxV-i2Y1AUGsNzfA4BgG-L8a8FRfFahmCGDH_uWsWTutXPEEXHDLidcyYCE-12oEwy',
        ],
        description:
            'Ezhalha is a powerful yet easy-to-use platform for managing stores and monitoring business activity in one place. Owners and users can explore store profiles, manage wallet balances, track full transaction history, and monitor customer reviews — turning day-to-day operations into a smooth, organised experience.',
        features: [
            'Browse and manage detailed store profiles',
            'View and monitor wallet balances',
            'Track complete transaction history',
            'Read and manage customer reviews',
            'Organised, efficient business management tools',
        ],
        tech: ['Flutter', 'Dart', 'REST APIs', 'Wallet', 'State Management', 'Dashboards'],
        category: 'Shopping · Business',
        downloads: '1+',
        url: 'https://play.google.com/store/apps/details?id=com.vga.azhelha',
    },
    {
        name: 'MHN',
        subtitle: 'مهن',
        tagline: 'Discover artists & designers near you',
        icon: CDN + 'NfSkmGB7H2RVZY0wTeXMcBtxH2Hw_3LRjKQV1u6cy1A2T3gnifUHWyuF7k3i1-OJcFtVk0DNzwjdETXGcHBLLw',
        screenshots: [
            CDN + '4LlLl7ByGnmvyisDJvEJHIvHO1AepDpdlrOPCtfS1bSJydDZd7qdQCAl_1EDo9u9e3iuPPL_ivzqhaH5PNP9',
            CDN + '3dC76qsA-A9T02woHYyLiPmm6tcoVkpm325AE3fCges7JqYOA361PTIDP2lDv8HHO4K5fHds1p6f_ozV9XrKykI',
            CDN + 'DkvXCn3ITgtfAh7ZRHct6HNl2jGSSVUkSQDFaGrXNd7oo_Zg5U2ljaQMrolGHdnuNepXr-zCIXxcXTH0zbJ9EQ',
            CDN + 'Xmzrcq03Xjtx5REq2DV-epISbv9id_84HMDM0JSUaYn_mpGZCgPmQ5CAR4GHMLkXpA2SS_n5d6v4D14ORVsauA',
        ],
        description:
            'MHN is a smart marketplace that connects users with talented artists and designers in their area. Whether for personal projects, business needs, or creative collaborations, MHN makes it easy to discover the right creative professionals by category, explore their profiles and locations, and reach out directly via call or WhatsApp.',
        features: [
            'Browse creative professionals by category',
            'Explore rich profiles with portfolios & locations',
            'Connect directly via call or WhatsApp',
            'Location-aware discovery of nearby talent',
            'Clean, intuitive browsing experience',
        ],
        tech: ['Flutter', 'Dart', 'Firebase', 'Geolocation', 'REST APIs', 'Deep Linking'],
        category: 'Shopping · Marketplace',
        downloads: '1+',
        url: 'https://play.google.com/store/apps/details?id=com.vga.mehn',
    },
    {
        name: 'Alaaf National',
        tagline: 'Animal feed & livestock e-commerce',
        icon: CDN + '2jnr3h61MPpMLrTT4thgoRGRuyd7aF89WRpubbwA3hkIVI8-AGZBXkdXYFnO-4Q1Zt1moQU-vQa7L1RP-jVq',
        screenshots: [
            CDN + 'cyHikl8sv-K4gbxUXQjJ9AKOtx3aG-zb_BP0TLK4Tf0r0KD3hG_f7HTPPsbLFFeQX4zban32G8Mko8tjIGHJ',
            CDN + '2pXNPJ06oGm4wRnBixCeQ5ochYIIhZ5iqHaJY8ChvGNDS2DEeGjpAUfenLRw8JWJMjB5afC0Vjx1I6U6pzOaHDM',
            CDN + 'UgJNpSt3HFKCrpdxEEEPs7mHW9jRqBqzhc438zWaEn-Bd9joVBmPRE4dB87--fEcelfGX_ih6qPqzcbH0dgNTA',
            CDN + '4LVFJXHa_hm0IIn6QA2lH1GSti9xwFCanSvDOmvBDgiWqHbg5MvTPSoL4QYTOIXDdJHsl3WOCySo1z3TqVBaHw',
        ],
        description:
            'Alaaf National (National Feed) is a focused e-commerce app for buying quality animal feed online. Built for farmers and livestock owners, it helps users find the right nutrition for cows, goats, horses and more — with detailed product information and a fast, secure ordering flow that saves time and supports healthier animals.',
        features: [
            'Wide catalogue of animal feed products',
            'Detailed nutrition, size and usage information',
            'Fast search with a simple, clear interface',
            'Secure and smooth ordering & checkout',
            'Reliable service built for livestock owners',
        ],
        tech: ['Flutter', 'Dart', 'REST APIs', 'E-commerce', 'Cart & Checkout', 'Payments'],
        category: 'Shopping · E-commerce',
        downloads: 'New',
        url: 'https://play.google.com/store/apps/details?id=com.vga.national_feed_vga',
    },
]

/* ------------------------- Detail modal w/ carousel ------------------------- */
const AppModal = ({ app, onClose }: { app: AppProject; onClose: () => void }) => {
    const [index, setIndex] = useState(0)
    const count = app.screenshots.length

    const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count])
    const next = useCallback(() => setIndex((i) => (i + 1) % count), [count])

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowLeft') prev()
            if (e.key === 'ArrowRight') next()
        }
        document.addEventListener('keydown', onKey)
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', onKey)
            document.body.style.overflow = ''
        }
    }, [onClose, prev, next])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6 bg-dark-950/80 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={`${app.name} details`}
        >
            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-strong relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-premium"
            >
                <button
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute top-4 right-4 z-10 p-2 rounded-full glass hover:bg-white/20 transition-colors"
                >
                    <X className="w-5 h-5" aria-hidden="true" />
                </button>

                <div className="p-6 sm:p-8">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6 pr-10">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={img(app.icon, 'w128')} alt={`${app.name} app icon`} width={64} height={64} className="w-16 h-16 rounded-2xl shadow-glow" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{app.name}</h3>
                            <p className="text-primary-600 dark:text-accent-300 text-sm">{app.tagline}</p>
                        </div>
                    </div>

                    {/* Carousel */}
                    <div className="relative rounded-2xl overflow-hidden bg-dark-900/40 mb-5">
                        <div className="relative h-[340px] sm:h-[420px] flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={index}
                                    src={img(app.screenshots[index], 'w600')}
                                    alt={`${app.name} screenshot ${index + 1} of ${count}`}
                                    initial={{ opacity: 0, x: 40 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -40 }}
                                    transition={{ duration: 0.3 }}
                                    className="max-h-full max-w-full object-contain"
                                    loading="lazy"
                                    decoding="async"
                                    referrerPolicy="no-referrer"
                                />
                            </AnimatePresence>

                            {count > 1 && (
                                <>
                                    <button onClick={prev} aria-label="Previous screenshot" className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full glass hover:bg-white/30 transition-colors">
                                        <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                                    </button>
                                    <button onClick={next} aria-label="Next screenshot" className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full glass hover:bg-white/30 transition-colors">
                                        <ChevronRight className="w-5 h-5" aria-hidden="true" />
                                    </button>
                                </>
                            )}
                        </div>
                        {count > 1 && (
                            <div className="flex justify-center gap-2 py-3">
                                {app.screenshots.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setIndex(i)}
                                        aria-label={`Go to screenshot ${i + 1}`}
                                        className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'w-6 bg-gradient-to-r from-primary-500 to-accent-400' : 'w-2 bg-gray-400/50 hover:bg-gray-400'}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                        {[
                            { icon: Tag, label: 'Category', value: app.category },
                            { icon: Smartphone, label: 'Platform', value: 'Android' },
                            { icon: Download, label: 'Installs', value: app.downloads },
                        ].map((s) => (
                            <div key={s.label} className="glass rounded-xl p-3 text-center">
                                <s.icon className="w-4 h-4 mx-auto mb-1 text-primary-600 dark:text-accent-300" aria-hidden="true" />
                                <div className="text-xs text-gray-500 dark:text-gray-400">{s.label}</div>
                                <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">{s.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* Description + features */}
                    <h4 className="font-bold text-lg mb-2">Overview</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{app.description}</p>

                    <h4 className="font-bold text-lg mb-3">Key Features</h4>
                    <ul className="space-y-2 mb-6">
                        {app.features.map((f) => (
                            <li key={f} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                                <Check className="w-5 h-5 mt-0.5 text-emerald-500 flex-shrink-0" aria-hidden="true" />
                                <span>{f}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {app.tech.map((t) => (
                            <span key={t} className="chip text-xs">{t}</span>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <a href={app.url} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
                            <PlayStoreIcon className="w-5 h-5" />
                            View on Google Play
                        </a>
                        {app.appStoreUrl && (
                            <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full sm:w-auto">
                                <AppStoreIcon className="w-5 h-5" />
                                App Store
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

/* ------------------------------ Card ------------------------------ */
const AppCard = ({ app, onOpen }: { app: AppProject; onOpen: () => void }) => (
    <TiltCard max={10} className="card tilt-surface overflow-hidden group h-full flex flex-col">
        <div style={{ transform: 'translateZ(25px)' }} className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center gap-3 p-5 pb-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img(app.icon, 'w96')} alt={`${app.name} app icon`} width={52} height={52} className="rounded-2xl shadow-glow flex-shrink-0" style={{ width: 52, height: 52 }} loading="lazy" decoding="async" referrerPolicy="no-referrer" />
                <div className="min-w-0">
                    <h4 className="font-bold text-gray-900 dark:text-white truncate">{app.name}</h4>
                    <p className="text-xs text-primary-600 dark:text-accent-300 truncate">{app.tagline}</p>
                </div>
            </div>

            {/* Screenshot strip */}
            <button onClick={onOpen} aria-label={`Open ${app.name} details`} className="relative mx-5 mb-4 h-44 rounded-xl overflow-hidden bg-dark-900/30 flex items-center justify-center gap-2 px-2">
                {app.screenshots.slice(0, 3).map((s, i) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        key={i}
                        src={img(s, 'w240')}
                        alt={`${app.name} preview ${i + 1}`}
                        className={`h-40 rounded-lg object-cover shadow-md transition-transform duration-500 group-hover:scale-105 ${i === 1 ? 'hidden sm:block' : ''} ${i === 2 ? 'hidden lg:block' : ''}`}
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                    />
                ))}
                <span className="absolute inset-0 bg-dark-950/0 group-hover:bg-dark-950/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="glass px-3 py-1.5 rounded-full text-sm font-semibold">View case study</span>
                </span>
            </button>

            <div className="px-5 pb-5 mt-auto">
                <span className="chip text-xs mb-3 inline-block">{app.category}</span>
                <div className="flex gap-2">
                    <button onClick={onOpen} className="btn-secondary flex-1 text-sm py-2.5">Details</button>
                    <a href={app.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${app.name} on Google Play`} className="btn-primary flex-1 text-sm py-2.5">
                        <PlayStoreIcon className="w-4 h-4" /> Play Store
                    </a>
                </div>
            </div>
        </div>
    </TiltCard>
)

/* ------------------------------ Showcase ------------------------------ */
const AppShowcase = () => {
    const [active, setActive] = useState<AppProject | null>(null)

    return (
        <div className="mb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-10"
            >
                <span className="eyebrow">Published on Google Play</span>
                <h3 className="text-2xl sm:text-3xl font-bold">
                    Flutter apps shipped at <span className="gradient-text">Value &amp; Growth</span>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto">
                    Real, live products I&apos;ve built and released to the Google Play Store. Tap any card for a full case study.
                </p>
            </motion.div>

            <div className="tilt-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {apps.map((app, i) => (
                    <motion.div
                        key={app.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.08 }}
                        viewport={{ once: true }}
                    >
                        <AppCard app={app} onOpen={() => setActive(app)} />
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {active && <AppModal app={active} onClose={() => setActive(null)} />}
            </AnimatePresence>
        </div>
    )
}

export default AppShowcase
