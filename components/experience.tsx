"use client"

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building, GraduationCap, Award, BookOpen } from 'lucide-react'

const Experience = () => {
    const workExperience = [
        {
            title: 'Senior Flutter Developer',
            company: 'Simplitaught',
            location: 'Lahore, Pakistan',
            period: 'Jan 2024 - Present',
            description: 'Leading development of enterprise mobile applications using Flutter framework. Building cross-platform apps for iOS and Android with Firebase backend integration, payment processing, and cloud services. Mentoring junior Flutter developers and implementing best practices for mobile app architecture.',
            technologies: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Stripe', 'Google Cloud', 'Docker'],
            type: 'work'
        },
        {
            title: 'Flutter Developer',
            company: 'Rex Technologies',
            location: 'Lahore, Pakistan',
            period: 'Sep 2023 - Dec 2023',
            description: 'Developed and maintained multiple Flutter mobile applications for clients, focusing on e-commerce platforms and EdTech applications. Successfully published apps on both Google Play Store and Apple App Store. Collaborated with cross-functional teams to deliver high-quality mobile solutions.',
            technologies: ['Flutter', 'Firebase', 'REST APIs', 'Xcode', 'Android Studio', 'Play Store', 'App Store'],
            type: 'work'
        },
        {
            title: 'Flutter Developer',
            company: 'GhairMulki Software House',
            location: 'Multan, Pakistan',
            period: 'Jul 2022 - Aug 2023',
            description: 'Built beautiful and responsive mobile applications using Flutter. Implemented custom UI components, integrated REST APIs, and worked closely with designers to create seamless user experiences. Published multiple apps on Google Play Store.',
            technologies: ['Flutter', 'Firebase', 'REST APIs', 'Material Design', 'Play Store'],
            type: 'work'
        }
    ]

    const education = [
        {
            title: 'B.Sc. Computer Engineering',
            institution: 'Bahauddin Zakariya University',
            location: 'Multan, Pakistan',
            period: '2019 - 2023',
            description: 'Specialized in Software Engineering and Artificial Intelligence. Gained strong foundation in software development principles, algorithms, and data structures which I apply in mobile application development with Flutter.',
            gpa: '3.6/4.0',
            type: 'education'
        },
        // {
        //     title: '',
        //     institution: 'University of California',
        //     location: 'Berkeley, CA',
        //     period: '2013 - 2017',
        //     description: 'Graduated with honors. Focused on web technologies and software development principles.',
        //     gpa: '3.8/4.0',
        //     type: 'education'
        // }
    ]

    return (
        <section id="experience" className="section-padding">
            <div className="container-custom">
                {/* Experience Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        My professional journey in the tech industry
                    </p>
                </motion.div>

                {/* Experience Timeline */}
                <div className="max-w-4xl mx-auto mb-20">
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-dark-700"></div>

                        {workExperience.map((item, index) => (
                            <motion.div
                                key={`work-${index}`}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative mb-12"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-6 top-6 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-dark-900 z-10"></div>

                                {/* Content Card */}
                                <div className="ml-16">
                                    <div className="card p-6">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                                                    {item.title}
                                                </h3>
                                                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                                                    <div className="flex items-center gap-1">
                                                        <Building className="w-4 h-4" />
                                                        <span className="text-sm font-medium">
                                                            {item.company}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <MapPin className="w-4 h-4" />
                                                        <span className="text-sm">{item.location}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1 text-primary-600 dark:text-primary-400 mt-2 sm:mt-0">
                                                <Calendar className="w-4 h-4" />
                                                <span className="text-sm font-medium">{item.period}</span>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                            {item.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {item.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Education Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="gradient-text">Education</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        My academic background and achievements
                    </p>
                </motion.div>

                {/* Education Cards */}
                <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
                    {education.map((item, index) => (
                        <motion.div
                            key={`education-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="card p-6 relative overflow-hidden group"
                        >
                            {/* Background Icon */}
                            <div className="absolute top-4 right-4 text-6xl text-primary-100 dark:text-primary-900/20 group-hover:scale-110 transition-transform duration-300">
                                <GraduationCap />
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                                        <BookOpen className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                                            {item.title}
                                        </h3>
                                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                                            {item.institution}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
                                    <div className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4" />
                                        <span className="text-sm">{item.location}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        <span className="text-sm">{item.period}</span>
                                    </div>
                                </div>

                                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                    {item.description}
                                </p>

                                {item.gpa && (
                                    <div className="flex items-center gap-2">
                                        <Award className="w-4 h-4 text-yellow-500" />
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                            GPA: {item.gpa}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold mb-4">Certifications</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Professional certifications and achievements
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {[
                            {
                                name: 'Flutter Development Certification',
                                issuer: 'Google',
                                year: '2024',
                                badge: '📱'
                            },
                            {
                                name: 'Firebase for Flutter',
                                issuer: 'Google Firebase',
                                year: '2023',
                                badge: '🔥'
                            },
                            {
                                name: 'Dart Programming Language',
                                issuer: 'Google',
                                year: '2023',
                                badge: '🎯'
                            },
                            {
                                name: 'Mobile App Development',
                                issuer: 'Udemy',
                                year: '2022',
                                badge: '📲'
                            },
                            {
                                name: 'Google Play Console',
                                issuer: 'Google Play',
                                year: '2022',
                                badge: '🏪'
                            },
                            {
                                name: 'Apple Developer Program',
                                issuer: 'Apple',
                                year: '2022',
                                badge: '🍎'
                            }
                        ].map((cert, index) => (
                            <motion.div
                                key={cert.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="card p-4 text-center hover:shadow-lg transition-shadow duration-200"
                            >
                                <div className="text-3xl mb-3">{cert.badge}</div>
                                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                                    {cert.name}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                    {cert.issuer}
                                </p>
                                <span className="text-xs text-primary-600 dark:text-primary-400 font-medium">
                                    {cert.year}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Experience
