"use client"

import { motion } from 'framer-motion'
import { User, MapPin, Calendar, Mail, Phone } from 'lucide-react'

const About = () => {
    const personalInfo = [
        { icon: User, label: 'Name', value: 'Muhammad Hammad' },
        // { icon: Calendar, label: 'Age', value: '25 years' },
        { icon: Mail, label: 'Email', value: 'hammadansari234@gmail.com' },
        { icon: Phone, label: 'Phone', value: '+92 310 6883027' },
        { icon: MapPin, label: 'Location', value: 'Lahore, Pakistan' },
    ]

    return (
        <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Get to know me better and understand my journey in the world of technology
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Image and Personal Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Profile Image */}
                        <div className="relative">
                            <div className="w-80 h-80 mx-auto relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-purple-500 rounded-full blur-xl opacity-20"></div>
                                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-dark-700 shadow-2xl">
                                    {/* Replace 'profile.jpg' with your actual image filename */}
                                    <img
                                        src="/images/profile_pic.png"
                                        alt="Muhammad Hammad - Flutter Mobile Developer"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            // Fallback to placeholder if image fails to load
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            target.nextElementSibling?.classList.remove('hidden');
                                        }}
                                    />
                                    {/* Fallback placeholder */}
                                    <div className="w-full h-full bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900 dark:to-purple-900 flex items-center justify-center">
                                        <User className="w-32 h-32 text-primary-600 dark:text-primary-400" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Personal Information */}
                        <div className="card p-6">
                            <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                            <div className="space-y-3">
                                {personalInfo.map((info, index) => (
                                    <motion.div
                                        key={info.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-center gap-3"
                                    >
                                        <info.icon className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                                        <span className="text-gray-600 dark:text-gray-400 font-medium">
                                            {info.label}:
                                        </span>
                                        <span className="text-gray-900 dark:text-gray-100">
                                            {info.value}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - About Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-4">
                                A passionate Flutter Mobile Developer
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                I'm a dedicated Flutter developer with a passion for creating innovative
                                mobile applications. With several years of experience in mobile development,
                                I specialize in building cross-platform apps that deliver exceptional user
                                experiences on both iOS and Android platforms.
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                My expertise lies in Flutter framework, where I create beautiful, performant,
                                and scalable mobile applications. I believe in writing clean, maintainable
                                code and following Flutter best practices to ensure optimal app performance
                                and user satisfaction.
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                I have successfully published multiple apps on both Google Play Store and
                                Apple App Store, working with technologies like Firebase, REST APIs, payment
                                integrations, and more. When I'm not coding, you can find me exploring new
                                Flutter packages, contributing to the Flutter community, or sharing knowledge
                                with fellow developers.
                            </p>
                        </div>

                        {/* Key Points */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                'Flutter Development',
                                'Cross-Platform Apps',
                                'App Store Publishing',
                                'Firebase Integration',
                                'UI/UX Design',
                                'API Integration'
                            ].map((point, index) => (
                                <motion.div
                                    key={point}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-2"
                                >
                                    <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
                                    <span className="text-gray-700 dark:text-gray-300">{point}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Download CV Button */}
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary"
                        >
                            Download Resume
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
