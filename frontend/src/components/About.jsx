import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import aboutImage from '../assets/images/about_students.png';

const About = () => {
    const features = [
        "Holistic Development Approach",
        "State-of-the-art Infrastructure",
        "Experienced & Caring Faculty",
        "Focus on Values & Ethics"
    ];

    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={aboutImage}
                                alt="Students studying"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                        </div>
                        {/* Floating Card */}
                        <div className="absolute -bottom-8 -right-8 bg-secondary p-8 rounded-xl shadow-xl hidden md:block">
                            <div className="text-4xl font-bold text-primary mb-1">25+</div>
                            <div className="text-primary font-medium">Years of Excellence</div>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Our Mission</span>
                        <h2 className="text-4xl font-bold font-serif text-primary mb-6">
                            Nurturing Leaders of Tomorrow
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            At S. Cadambi Vidya Kendra, we believe that education goes beyond textbooks. Our mission is to foster a learning environment where curiosity is celebrated, and every student is empowered to discover their true potential.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-center space-x-3">
                                    <CheckCircle className="text-secondary flex-shrink-0" size={20} />
                                    <span className="text-gray-700 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-lg transition-colors">
                            Read Our Story
                        </button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
