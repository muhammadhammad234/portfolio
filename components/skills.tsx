"use client"

import { motion } from 'framer-motion'
import { Code, Database, Palette, Server, Smartphone, Globe, Sparkles } from 'lucide-react'
import TiltCard from './tilt-card'

const Skills = () => {
    const skillCategories = [
        {
            title: 'AI-Assisted Development',
            icon: Sparkles,
            skills: [
                { name: 'AI-Assisted Development', level: 92 },
                { name: 'Cursor IDE', level: 90 },
                { name: 'Claude (Anthropic)', level: 90 },
                { name: 'Prompt Engineering', level: 88 },
                { name: 'GitHub Copilot', level: 85 },
                { name: 'ChatGPT / LLM Workflows', level: 85 },
            ]
        },
        {
            title: 'Flutter Development',
            icon: Smartphone,
            skills: [
                { name: 'Flutter', level: 95 },
                { name: 'Dart', level: 90 },
                { name: 'State Management', level: 90 },
                { name: 'Widget Development', level: 95 },
                { name: 'Custom Animations', level: 85 },
                { name: 'Platform Channels', level: 80 },
            ]
        },
        {
            title: 'Mobile App Features',
            icon: Code,
            skills: [
                { name: 'Firebase Integration', level: 90 },
                { name: 'REST API Integration', level: 95 },
                { name: 'Payment Integration', level: 85 },
                { name: 'Push Notifications', level: 90 },
                { name: 'In-App Purchases', level: 85 },
                { name: 'Geolocation Services', level: 80 },
            ]
        },
        {
            title: 'App Publishing & Tools',
            icon: Globe,
            skills: [
                { name: 'Google Play Store', level: 95 },
                { name: 'Apple App Store', level: 90 },
                { name: 'App Store Optimization', level: 85 },
                { name: 'Xcode', level: 85 },
                { name: 'Android Studio', level: 90 },
                { name: 'CI/CD for Mobile', level: 40 },
            ]
        },
        {
            title: 'Backend & Cloud',
            icon: Server,
            skills: [
                { name: 'Firebase', level: 90 },
                { name: 'Firestore', level: 90 },
                { name: 'Cloud Functions', level: 85 },
                { name: 'Authentication', level: 95 },
                { name: 'FastAPI', level: 80 },
                { name: 'Node JS', level: 80 },
            ]
        },
        {
            title: 'UI/UX & Design',
            icon: Palette,
            skills: [
                { name: 'Material Design', level: 90 },
                { name: 'Cupertino Design', level: 85 },
                { name: 'Custom UI Components', level: 95 },
                { name: 'Responsive Design', level: 90 },
                { name: 'Figma', level: 75 },
                { name: 'User Experience', level: 90 },
            ]
        },
        {
            title: 'Additional Skills',
            icon: Database,
            skills: [
                { name: 'Git & Version Control', level: 95 },
                { name: 'Testing (Unit/Widget)', level: 85 },
                { name: 'Performance Optimization', level: 90 },
                { name: 'Code Architecture', level: 90 },
                { name: 'Agile Methodology', level: 85 },
                { name: 'Team Collaboration', level: 90 },
            ]
        }
    ]

    return (
        <section id="skills" className="section-padding">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="eyebrow">Capabilities</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        My <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A comprehensive overview of my technical skills and expertise
                    </p>
                </motion.div>

                <div className="tilt-grid grid lg:grid-cols-2 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.08 }}
                            viewport={{ once: true }}
                        >
                            <TiltCard className="card skill-card p-6 h-full">
                                <div
                                    className="flex items-center gap-3 mb-6"
                                    style={{ transform: 'translateZ(45px)' }}
                                >
                                    <div className="p-2 rounded-xl bg-gradient-to-br from-primary-500/15 to-purple-500/15 ring-1 ring-primary-500/20">
                                        <category.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                                    </div>
                                    <h3 className="text-xl font-semibold">{category.title}</h3>
                                </div>

                                <div className="space-y-4" style={{ transform: 'translateZ(25px)' }}>
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-gray-700 dark:text-gray-300 font-medium">
                                                    {skill.name}
                                                </span>
                                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2 overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 1, delay: skillIndex * 0.1 }}
                                                    viewport={{ once: true }}
                                                    className="skill-bar h-2 rounded-full bg-gradient-to-r from-primary-500 to-purple-500"
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold mb-4">Technologies &amp; Tools</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            The stack and tools I work with day to day
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {[
                            'Claude', 'Cursor', 'ChatGPT', 'GitHub Copilot', 'AI Tools', 'Prompt Engineering',
                            'Provider', 'Bloc', 'Riverpod', 'GetX', 'MobX', 'Redux',
                            'Stripe', 'Apple Pay', 'Google Pay', 'Razorpay', 'PayPal', 'In-App Purchases',
                            'Firebase Auth', 'Firestore', 'Cloud Messaging', 'Analytics', 'Crashlytics', 'Remote Config',
                            'Google Maps', 'Geolocator', 'Geofencing', 'Radar.io', 'Socket.io', 'WebRTC',
                            'Shared Preferences', 'Hive', 'SQLite', 'Drift', 'Isar', 'ObjectBox',
                            'Dio', 'HTTP', 'Retrofit', 'GraphQL', 'WebSocket', 'REST APIs'
                        ].map((skill, index) => {
                            const highlight = ['Claude', 'Cursor', 'ChatGPT', 'GitHub Copilot', 'AI Tools', 'Prompt Engineering'].includes(skill)
                            return (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.03 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.08, y: -4 }}
                                    className={`rounded-lg px-4 py-3 text-center transition-colors duration-200 ${highlight
                                        ? 'bg-gradient-to-br from-primary-500/15 to-purple-500/15 ring-1 ring-primary-500/30 text-primary-700 dark:text-primary-300'
                                        : 'bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 text-gray-700 dark:text-gray-300'
                                        }`}
                                >
                                    <span className="text-sm font-medium flex items-center justify-center gap-1">
                                        {highlight && <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />}
                                        {skill}
                                    </span>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills
