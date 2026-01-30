"use client"

import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye, Smartphone } from 'lucide-react'
import Image from 'next/image'

// Custom Play Store Icon
const PlayStoreIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
    </svg>
)

// Custom App Store Icon
const AppStoreIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
    </svg>
)

const Projects = () => {
    const projects = [
        {
            title: 'Mingle Social App',
            description: 'A modern social media mobile application with auto check-in & check-out, real-time messaging, photo sharing & In-App wallet features.',
            image: '/images/projects/mingle_logo.png',
            technologies: ['Flutter', 'Firebase', 'API Integration', 'Radar', "Geofencing", "Google Map", "Stripe", "Apple Pay", "Google Pay"],
            playStoreUrl: 'https://play.google.com/store/apps/details?id=com.app.mingle',
            appStoreUrl: 'https://apps.apple.com/app/mingle-social-app/id6737700806',
            featured: true,
            type: 'mobile'
        },
        {
            title: 'Khayr AI Health Companion',
            description: 'A comprehensive fitness tracking app that helps users monitor workouts, set goals, and track progress over time.',
            image: '/images/projects/khayr_logo.png',
            technologies: ['Flutter', 'Firebase', 'Firestore', 'Gemini', "In-App Purchases"],
            playStoreUrl: 'https://play.google.com/store/apps/details?id=com.keybotix.khayr',
            appStoreUrl: 'https://apps.apple.com/us/app/khayr-ai-health-companion/id6749851886',
            featured: true,
            type: 'mobile'

        },
        {
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe. Features include user authentication, product management, shopping cart, and payment processing.',
            image: '/api/placeholder/400/250',
            technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS', 'Prisma'],
            liveUrl: '#',
            githubUrl: '#',
            featured: true,
            type: 'web'
        },
        {
            title: 'Task Management App',
            description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
            image: '/api/placeholder/400/250',
            technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
            liveUrl: '#',
            githubUrl: '#',
            featured: true,
            type: 'web'
        },
        {
            title: 'Weather Dashboard',
            description: 'A beautiful weather dashboard that displays current weather conditions and forecasts using OpenWeatherMap API with interactive charts.',
            image: '/api/placeholder/400/250',
            technologies: ['React', 'Chart.js', 'OpenWeatherMap API', 'CSS3'],
            liveUrl: '#',
            githubUrl: '#',
            featured: false,
            type: 'web'
        },
        {
            title: 'Portfolio Website',
            description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and dark mode support.',
            image: '/api/placeholder/400/250',
            technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
            liveUrl: '#',
            githubUrl: '#',
            featured: false,
            type: 'web'
        },
        {
            title: 'Chat Application',
            description: 'Real-time chat application with user authentication, message history, and file sharing capabilities.',
            image: '/api/placeholder/400/250',
            technologies: ['React', 'Firebase', 'Material-UI', 'WebRTC'],
            liveUrl: '#',
            githubUrl: '#',
            featured: false,
            type: 'web'
        },


    ]

    return (
        <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-800">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Here are some of my recent projects that showcase my skills and experience
                    </p>
                </motion.div>

                {/* Featured Projects */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {projects.filter(p => p.featured).map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="card overflow-hidden group"
                        >
                            <div className="relative overflow-hidden">
                                <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900 dark:to-purple-900 relative">
                                    {project.image && project.image !== '/api/placeholder/400/250' ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-contain p-4"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            unoptimized
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center h-full">
                                            {project.type === 'mobile' ? (
                                                <Smartphone className="w-16 h-16 text-primary-600 dark:text-primary-400" />
                                            ) : (
                                                <div className="text-6xl text-primary-600 dark:text-primary-400">📱</div>
                                            )}
                                        </div>
                                    )}
                                </div>
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    {project.type === 'mobile' ? (
                                        <>
                                            {project.playStoreUrl && (
                                                <motion.a
                                                    href={project.playStoreUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                                                >
                                                    <PlayStoreIcon className="w-5 h-5" />
                                                </motion.a>
                                            )}
                                            {project.appStoreUrl && (
                                                <motion.a
                                                    href={project.appStoreUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                                                >
                                                    <AppStoreIcon className="w-5 h-5" />
                                                </motion.a>
                                            )}
                                        </>
                                    ) : (
                                        <>
                                            <motion.a
                                                href={project.liveUrl}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </motion.a>
                                            <motion.a
                                                href={project.githubUrl}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                                            >
                                                <Github className="w-5 h-5" />
                                            </motion.a>
                                        </>
                                    )}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-3">
                                    {project.type === 'mobile' ? (
                                        <>
                                            {project.playStoreUrl && (
                                                <a
                                                    href={project.playStoreUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn-primary text-sm flex items-center gap-2"
                                                >
                                                    <PlayStoreIcon className="w-4 h-4" />
                                                    Play Store
                                                </a>
                                            )}
                                            {project.appStoreUrl && (
                                                <a
                                                    href={project.appStoreUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn-secondary text-sm flex items-center gap-2"
                                                >
                                                    <AppStoreIcon className="w-4 h-4" />
                                                    App Store
                                                </a>
                                            )}
                                        </>
                                    ) : (
                                        <>
                                            <a
                                                href={project.liveUrl}
                                                className="btn-primary text-sm flex items-center gap-2"
                                            >
                                                <Eye className="w-4 h-4" />
                                                Live Demo
                                            </a>
                                            <a
                                                href={project.githubUrl}
                                                className="btn-secondary text-sm flex items-center gap-2"
                                            >
                                                <Github className="w-4 h-4" />
                                                Code
                                            </a>
                                        </>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Other Projects */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold mb-4">Other Projects</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            More projects I've worked on
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.filter(p => !p.featured).map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="card overflow-hidden group"
                            >
                                <div className="relative overflow-hidden">
                                    <div className="w-full h-40 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900 dark:to-purple-900 relative">
                                        {project.image && project.image !== '/api/placeholder/400/250' ? (
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-contain p-3"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                unoptimized
                                            />
                                        ) : (
                                            <div className="flex items-center justify-center h-full">
                                                {project.type === 'mobile' ? (
                                                    <Smartphone className="w-12 h-12 text-primary-600 dark:text-primary-400" />
                                                ) : (
                                                    <div className="text-4xl text-primary-600 dark:text-primary-400">💻</div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        {project.type === 'mobile' ? (
                                            <>
                                                {project.playStoreUrl && (
                                                    <motion.a
                                                        href={project.playStoreUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                                                    >
                                                        <PlayStoreIcon className="w-4 h-4" />
                                                    </motion.a>
                                                )}
                                                {project.appStoreUrl && (
                                                    <motion.a
                                                        href={project.appStoreUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                                                    >
                                                        <AppStoreIcon className="w-4 h-4" />
                                                    </motion.a>
                                                )}
                                            </>
                                        ) : (
                                            <>
                                                <motion.a
                                                    href={project.liveUrl}
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                </motion.a>
                                                <motion.a
                                                    href={project.githubUrl}
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                                                >
                                                    <Github className="w-4 h-4" />
                                                </motion.a>
                                            </>
                                        )}
                                    </div>
                                </div>

                                <div className="p-4">
                                    <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                                        {project.title}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1 mb-3">
                                        {project.technologies.slice(0, 3).map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                                                +{project.technologies.length - 3}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex gap-2">
                                        {project.type === 'mobile' ? (
                                            <>
                                                {project.playStoreUrl && (
                                                    <a
                                                        href={project.playStoreUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-primary-600 dark:text-primary-400 text-sm font-medium hover:underline flex items-center gap-1"
                                                    >
                                                        <PlayStoreIcon className="w-3 h-3" />
                                                        Play Store
                                                    </a>
                                                )}
                                                {project.appStoreUrl && (
                                                    <a
                                                        href={project.appStoreUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-gray-600 dark:text-gray-400 text-sm font-medium hover:underline flex items-center gap-1"
                                                    >
                                                        <AppStoreIcon className="w-3 h-3" />
                                                        App Store
                                                    </a>
                                                )}
                                            </>
                                        ) : (
                                            <>
                                                <a
                                                    href={project.liveUrl}
                                                    className="text-primary-600 dark:text-primary-400 text-sm font-medium hover:underline"
                                                >
                                                    Live Demo
                                                </a>
                                                <a
                                                    href={project.githubUrl}
                                                    className="text-gray-600 dark:text-gray-400 text-sm font-medium hover:underline"
                                                >
                                                    Code
                                                </a>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* View More Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary"
                    >
                        View All Projects
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects
