"use client"

import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye, Smartphone, Star } from 'lucide-react'
import Image from 'next/image'
import TiltCard from './tilt-card'
import AppShowcase from './app-showcase'

const PlayStoreIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
    </svg>
)

const AppStoreIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
    </svg>
)

interface Project {
    title: string
    description: string
    image: string
    technologies: string[]
    type: 'mobile' | 'web'
    featured: boolean
    playStoreUrl?: string
    appStoreUrl?: string
    liveUrl?: string
    githubUrl?: string
}

const projects: Project[] = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-stack store with auth, product management, cart and Stripe payments built on Next.js & TypeScript.',
        image: '/api/placeholder/400/250',
        technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS', 'Prisma'],
        liveUrl: '#',
        githubUrl: '#',
        featured: true,
        type: 'web',
    },
    {
        title: 'Task Management App',
        description: 'A collaborative task manager with real-time updates, drag-and-drop boards and team collaboration.',
        image: '/api/placeholder/400/250',
        technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
        liveUrl: '#',
        githubUrl: '#',
        featured: false,
        type: 'web',
    },
    {
        title: 'Weather Dashboard',
        description: 'A beautiful weather dashboard with current conditions, forecasts and interactive charts.',
        image: '/api/placeholder/400/250',
        technologies: ['React', 'Chart.js', 'OpenWeatherMap API', 'CSS3'],
        liveUrl: '#',
        githubUrl: '#',
        featured: false,
        type: 'web',
    },
    {
        title: 'Chat Application',
        description: 'Real-time chat with authentication, message history and file sharing capabilities.',
        image: '/api/placeholder/400/250',
        technologies: ['React', 'Firebase', 'Material-UI', 'WebRTC'],
        liveUrl: '#',
        githubUrl: '#',
        featured: false,
        type: 'web',
    },
]

const ProjectCard = ({ project }: { project: Project }) => {
    const hasImage = project.image && project.image !== '/api/placeholder/400/250'
    return (
        <TiltCard max={9} className="card tilt-surface overflow-hidden group h-full">
            <div className="relative overflow-hidden" style={{ transform: 'translateZ(20px)' }}>
                <div className="w-full h-48 bg-gradient-to-br from-primary-500/15 to-accent-400/15 relative">
                    {hasImage ? (
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-contain p-5 transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            unoptimized
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            <Smartphone className="w-14 h-14 text-primary-500/70 dark:text-accent-300/70" aria-hidden="true" />
                        </div>
                    )}
                    {project.featured && (
                        <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-primary-500 to-accent-400 text-white shadow-glow">
                            <Star className="w-3 h-3" aria-hidden="true" /> Featured
                        </span>
                    )}
                </div>

                {/* Hover overlay actions */}
                <div className="absolute inset-0 bg-dark-950/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.type === 'mobile' ? (
                        <>
                            {project.playStoreUrl && (
                                <motion.a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.9 }} aria-label={`${project.title} on Google Play`} className="p-3 bg-white rounded-full text-gray-900">
                                    <PlayStoreIcon className="w-5 h-5" />
                                </motion.a>
                            )}
                            {project.appStoreUrl && (
                                <motion.a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.9 }} aria-label={`${project.title} on the App Store`} className="p-3 bg-white rounded-full text-gray-900">
                                    <AppStoreIcon className="w-5 h-5" />
                                </motion.a>
                            )}
                        </>
                    ) : (
                        <>
                            <motion.a href={project.liveUrl} whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.9 }} aria-label={`${project.title} live demo`} className="p-3 bg-white rounded-full text-gray-900">
                                <ExternalLink className="w-5 h-5" />
                            </motion.a>
                            <motion.a href={project.githubUrl} whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.9 }} aria-label={`${project.title} source code`} className="p-3 bg-white rounded-full text-gray-900">
                                <Github className="w-5 h-5" />
                            </motion.a>
                        </>
                    )}
                </div>
            </div>

            <div className="p-6" style={{ transform: 'translateZ(15px)' }}>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="chip text-xs">{tech}</span>
                    ))}
                    {project.technologies.length > 4 && (
                        <span className="chip text-xs">+{project.technologies.length - 4}</span>
                    )}
                </div>
                <div className="flex gap-3">
                    {project.type === 'mobile' ? (
                        <>
                            {project.playStoreUrl && (
                                <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary-600 dark:text-accent-300 hover:underline inline-flex items-center gap-1">
                                    <PlayStoreIcon className="w-4 h-4" /> Play Store
                                </a>
                            )}
                            {project.appStoreUrl && (
                                <a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:underline inline-flex items-center gap-1">
                                    <AppStoreIcon className="w-4 h-4" /> App Store
                                </a>
                            )}
                        </>
                    ) : (
                        <>
                            <a href={project.liveUrl} className="text-sm font-medium text-primary-600 dark:text-accent-300 hover:underline inline-flex items-center gap-1">
                                <Eye className="w-4 h-4" /> Live Demo
                            </a>
                            <a href={project.githubUrl} className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:underline inline-flex items-center gap-1">
                                <Github className="w-4 h-4" /> Code
                            </a>
                        </>
                    )}
                </div>
            </div>
        </TiltCard>
    )
}

const Projects = () => {

    return (
        <section id="projects" className="section-padding relative">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="eyebrow">Portfolio</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A selection of products I&apos;ve designed, built, and shipped
                    </p>
                </motion.div>

                {/* Published Play Store apps (case studies) */}
                <AppShowcase />

                {/* More projects */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h3 className="text-2xl sm:text-3xl font-bold">More <span className="gradient-text">Work</span></h3>
                </motion.div>

                {/* Grid */}
                <div className="tilt-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: i * 0.07 }}
                            viewport={{ once: true }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
