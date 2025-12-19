import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, BookOpen, ArrowRight, GraduationCap, Award, Target, TrendingUp, Users, Sparkles } from 'lucide-react';
import IcsePrimaryHeader from './IcsePrimaryHeader';
import IcsePrimaryFooter from './IcsePrimaryFooter';

const IcsePrimaryAcademic = () => {
    const academicLinks = [
        {
            to: "/icse-primary/curriculum",
            icon: BookOpen,
            title: "Curriculum Details",
            description: "ICSE curriculum framework with 5-step teaching methodology and subject-wise breakdown",
            color: "blue",
            highlights: ["Subject Structure", "Teaching Methods", "Assessment"]
        },
        {
            to: "/icse-primary/calendar",
            icon: Calendar,
            title: "Academic Calendar",
            description: "Complete schedule of events, tests, examinations and holidays for 2025-26",
            color: "green",
            highlights: ["Important Dates", "Exam Schedule", "Events"]
        },
        {
            to: "/icse-primary/timings",
            icon: Clock,
            title: "School Timings",
            description: "Daily schedule, operational hours, and important timings for students",
            color: "purple",
            highlights: ["Daily Schedule", "Break Times", "Office Hours"]
        }
    ];

    const features = [
        {
            icon: Target,
            title: "5-Step Methodology",
            description: "Structured teaching approach for comprehensive learning"
        },
        {
            icon: Award,
            title: "Continuous Assessment",
            description: "Regular evaluation to track student progress"
        },
        {
            icon: TrendingUp,
            title: "Progressive Learning",
            description: "Grade-wise curriculum advancement"
        },
        {
            icon: Users,
            title: "Interactive Classes",
            description: "Engaging and participative learning environment"
        }
    ];

    const getColorClasses = (color) => {
        const colors = {
            blue: "from-blue-500 to-blue-700 bg-blue-100 text-blue-600 border-blue-200",
            green: "from-green-500 to-green-700 bg-green-100 text-green-600 border-green-200",
            purple: "from-purple-500 to-purple-700 bg-purple-100 text-purple-600 border-purple-200"
        };
        return colors[color] || colors.blue;
    };

    return (
        <div className="min-h-screen bg-background">
            <IcsePrimaryHeader />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white relative overflow-hidden mt-20">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
                    <div className="absolute bottom-20 right-10 w-40 h-40 border-4 border-white rounded-full"></div>
                    <div className="absolute top-1/2 left-1/3 w-24 h-24 border-4 border-white rounded-full"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        className="text-center"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="inline-block mb-6"
                        >
                            <GraduationCap className="w-20 h-20 text-white/90" />
                        </motion.div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Academic Information</h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            Comprehensive ICSE curriculum, schedules, and academic resources for holistic learning
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Navigation Cards */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                            Quick Access
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                            Academic Resources
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Access detailed information about our curriculum, schedules, and academic framework
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {academicLinks.map((link, idx) => {
                            const IconComponent = link.icon;
                            const colorClasses = getColorClasses(link.color);
                            
                            return (
                                <Link key={idx} to={link.to}>
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }} 
                                        whileInView={{ opacity: 1, y: 0 }} 
                                        viewport={{ once: true }} 
                                        transition={{ delay: idx * 0.1 }}
                                        whileHover={{ y: -10 }}
                                        className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all h-full group border-2 border-gray-100"
                                    >
                                        {/* Icon */}
                                        <div className={`${colorClasses.split(' ')[1]} ${colorClasses.split(' ')[2]} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg border-2 ${colorClasses.split(' ')[3]}`}>
                                            <IconComponent size={40} />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                                            {link.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {link.description}
                                        </p>

                                        {/* Highlights */}
                                        <div className="space-y-2 mb-6">
                                            {link.highlights.map((highlight, hIdx) => (
                                                <div key={hIdx} className="flex items-center gap-2 text-sm text-gray-700">
                                                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colorClasses.split(' ')[0]}`}></div>
                                                    <span>{highlight}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <div className="flex items-center text-secondary font-semibold group-hover:translate-x-2 transition-transform">
                                            <span className="mr-2">Learn More</span>
                                            <ArrowRight size={20} />
                                        </div>
                                    </motion.div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                            Our Approach
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                            Academic Excellence
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Our commitment to quality education through proven teaching methods
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, idx) => {
                            const IconComponent = feature.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-100 hover:border-primary/30 transition-all shadow-lg hover:shadow-xl"
                                >
                                    <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                                        <IconComponent className="text-primary" size={28} />
                                    </div>
                                    <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Additional Info Section */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-gradient-to-br from-primary to-blue-900 text-white rounded-3xl p-10 md:p-12 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/20 rounded-full -mr-20 -mt-20"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full -ml-16 -mb-16"></div>
                                
                                <div className="relative z-10">
                                    <Sparkles className="text-secondary mb-6" size={48} />
                                    <h3 className="text-3xl font-bold mb-6">ICSE Curriculum Framework</h3>
                                    <p className="text-lg text-white/90 mb-6 leading-relaxed">
                                        Our ICSE Primary Wing follows the CISCE curriculum guidelines, ensuring comprehensive 
                                        development across all subjects. From foundational skills in Grade 1 to advanced concepts 
                                        in Grade 5, we provide a structured learning path.
                                    </p>
                                    <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                                        <p className="font-semibold mb-2">Affiliated to:</p>
                                        <p className="text-secondary font-bold text-xl">CISCE Board, New Delhi</p>
                                        <p className="text-white/80 text-sm mt-1">School Code: KA042</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-3xl font-bold text-primary mb-6">
                                Why Our Academic System Works
                            </h3>
                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Structured Learning",
                                        desc: "Grade-wise progression with clear learning objectives and outcomes"
                                    },
                                    {
                                        title: "Regular Assessment",
                                        desc: "Continuous evaluation through tests, assignments, and projects"
                                    },
                                    {
                                        title: "Holistic Development",
                                        desc: "Balance between academics, sports, arts, and value education"
                                    },
                                    {
                                        title: "Expert Guidance",
                                        desc: "44+ experienced teachers providing personalized attention"
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100">
                                        <div className="bg-secondary/20 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                                            <span className="font-bold text-secondary">{idx + 1}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                                            <p className="text-gray-600 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-primary to-blue-900 text-white rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-10 right-10 w-32 h-32 border-4 border-white rounded-full"></div>
                            <div className="absolute bottom-10 left-10 w-24 h-24 border-4 border-white rounded-full"></div>
                        </div>
                        <div className="relative z-10">
                            <BookOpen className="mx-auto mb-6 text-secondary" size={64} />
                            <h3 className="text-3xl md:text-4xl font-bold mb-4">Need More Information?</h3>
                            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                                Have questions about our curriculum or academic programs? We're here to help!
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <Link 
                                    to="/icse-primary/contact"
                                    className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-4 rounded-xl transition-all inline-flex items-center gap-2 shadow-lg"
                                >
                                    Contact Us
                                    <ArrowRight size={20} />
                                </Link>
                                <Link 
                                    to="/icse-primary/admissions"
                                    className="bg-white/10 backdrop-blur hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all border-2 border-white/30"
                                >
                                    Admissions
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            
        </div>
    );
};

export default IcsePrimaryAcademic;