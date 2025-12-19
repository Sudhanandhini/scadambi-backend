import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Calendar, MapPin, ChevronRight,
    BookOpen, Users, Trophy, Sparkles, ArrowRight,
    GraduationCap, Heart, Star, Target, Award, Shield, Zap, TrendingUp, Clock, Bell
} from 'lucide-react';
import IcsePrimaryHeader from './IcsePrimaryHeader';
import IcsePrimaryFooter from './IcsePrimaryFooter';

// Replace with your actual images
import leftLarge from "../../assets/icse-primary/Untitled-design.png";
import leftSmall from "../../assets/images/about_students.png";

const gradeCards = [
    {
        grade: "Grade 1",
        overview: "Foundation building with interactive learning and core concepts.",
        subjects: "English, Kannada/Hindi, EVS, Computer, Art"
    },
    {
        grade: "Grade 2",
        overview: "Strengthening fundamentals with hands-on activities.",
        subjects: "English, Kannada/Hindi, EVS, Computer, Art"
    },
    {
        grade: "Grade 3",
        overview: "Expanding concepts through inquiry-based learning.",
        subjects: "English, Second Language, Science, Social Studies, Computer"
    },
    {
        grade: "Grade 4",
        overview: "Higher-order thinking and skill-based activities.",
        subjects: "English, Second Language, Science, Social Studies, Computer"
    },
    {
        grade: "Grade 5",
        overview: "Preparation for middle school with advanced foundational skills.",
        subjects: "English, Second Language, Science, Social Studies, Computer"
    },
];

const IcsePrimaryHome = () => {
    const features = [
        {
            icon: BookOpen,
            title: "ICSE Curriculum",
            description: "Comprehensive CISCE curriculum with focus on holistic development",
            color: "blue"
        },
        {
            icon: Users,
            title: "Experienced Faculty",
            description: "44+ qualified teachers dedicated to nurturing young minds",
            color: "green"
        },
        {
            icon: Trophy,
            title: "Bharat Scouts & Guides",
            description: "Active participation in character building programs since 2009",
            color: "purple"
        },
        {
            icon: Sparkles,
            title: "Bal Vikas Program",
            description: "Focus on human values, truth, righteousness, peace and love",
            color: "orange"
        }
    ];

    const stats = [
        { number: "1984", label: "Established", icon: Calendar },
        { number: "21", label: "Classrooms", icon: MapPin },
        { number: "44+", label: "Expert Teachers", icon: Users },
        { number: "5", label: "Grade Levels", icon: GraduationCap }
    ];

    const highlights = [
        { icon: Target, text: "5-Step Teaching Methodology", color: "blue" },
        { icon: Award, text: "Continuous Assessment", color: "green" },
        { icon: Star, text: "Co-curricular Excellence", color: "purple" },
        { icon: Heart, text: "Value-Based Education", color: "pink" }
    ];

    // Upcoming Events Data
    const upcomingEvents = [
        {
            date: "14",
            month: "NOV",
            title: "Children's Day Celebration",
            time: "9:00 AM - 12:00 PM",
            type: "celebration",
            color: "purple"
        },
        {
            date: "08",
            month: "DEC",
            title: "3rd Unit Test",
            time: "During Class Hours",
            type: "exam",
            color: "red"
        },
        {
            date: "27",
            month: "DEC",
            title: "SAMANVAYA 2025-26",
            time: "Full Day Event",
            type: "event",
            color: "blue"
        },
        {
            date: "28",
            month: "JAN",
            title: "4th Unit Test",
            time: "During Class Hours",
            type: "exam",
            color: "red"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <IcsePrimaryHeader />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary to-blue-900 text-white overflow-hidden mt-20">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="inline-block bg-secondary/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-secondary/30"
                            >
                                <span className="text-secondary font-semibold flex items-center gap-2">
                                    <Shield size={18} />
                                    CISCE Affiliated • School Code: KA042
                                </span>
                            </motion.div>
                            
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                                ICSE Primary Wing
                            </h1>
                            
                            <p className="text-2xl md:text-3xl font-semibold text-secondary mb-4">
                                Building Values through Education
                            </p>
                            
                            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-xl">
                                S. Cadambi Vidya Kendra's ICSE Primary Wing provides quality education from Grade 1 to 5,
                                focusing on strong foundations, character building, and comprehensive development.
                            </p>
                            
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/icse-primary/admissions"
                                    className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-2xl flex items-center gap-2"
                                >
                                    Apply for Admission
                                    <ArrowRight size={20} />
                                </Link>
                                <Link
                                    to="/icse-primary/about"
                                    className="bg-[#0F2A4A]/50 backdrop-blur hover:bg-[#0F2A4A]/20 text-white font-semibold px-8 py-4 rounded-xl transition-all border-2 border-white/30"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="relative"
                        >
                            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 shadow-2xl">
                                <div className="grid grid-cols-2 gap-6">
                                    {highlights.map((item, idx) => {
                                        const IconComponent = item.icon;
                                        return (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.5 + idx * 0.1 }}
                                                className="text-center group"
                                            >
                                                <div className="bg-secondary/20 backdrop-blur w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg">
                                                    <IconComponent className="text-secondary" size={32} />
                                                </div>
                                                <p className="text-sm font-semibold leading-tight">{item.text}</p>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Wave Bottom */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB" />
                    </svg>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-6">
                        {stats.map((stat, idx) => {
                            const IconComponent = stat.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-white rounded-2xl p-6 shadow-xl text-center border-2 border-gray-100"
                                >
                                    <IconComponent className="mx-auto mb-3 text-primary" size={40} />
                                    <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                                    <div className="text-gray-600 font-semibold">{stat.label}</div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                            Why Choose Us
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                            Why Choose Our ICSE Primary Wing?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive education that goes beyond academics to build character and values
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, idx) => {
                            const IconComponent = feature.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -10, scale: 1.03 }}
                                    className="bg-gradient-to-br from-primary to-blue-900 text-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
                                    
                                    <div className="relative z-10">
                                        <div className="bg-secondary/20 backdrop-blur w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-secondary/30 transition-all">
                                            <IconComponent size={32} className="text-secondary" />
                                        </div>

                                        <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors">
                                            {feature.title}
                                        </h3>

                                        <p className="text-white/90 leading-relaxed text-sm">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Grades Section */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* LEFT CONTENT */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold inline-block">
                                Academic Excellence
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-primary">
                                Our Grade Structure
                            </h2>
                            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                                Comprehensive curriculum from Grade 1 to Grade 5, designed to build strong foundations
                                and prepare students for future academic success.
                            </p>

                            {/* Image */}
                            <div className="mt-8 rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100">
                                <img
                                    src={leftLarge}
                                    alt="Students in classroom"
                                    className="w-full h-auto"
                                />
                            </div>

                            <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-2xl p-6 border-l-4 border-secondary">
                                <div className="flex items-center gap-3 mb-2">
                                    <Zap className="text-secondary" size={24} />
                                    <p className="font-bold text-primary text-lg">Interactive Learning</p>
                                </div>
                                <p className="text-gray-600">
                                    Our curriculum emphasizes hands-on activities, inquiry-based learning, and skill development
                                    at every grade level.
                                </p>
                            </div>
                        </motion.div>

                        {/* RIGHT COLUMN — 5 GRADE CARDS */}
                        <div className="space-y-6">
                            {gradeCards.map((g, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ y: -6, x: -6 }}
                                    className="relative bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all border-2 border-gray-100"
                                >
                                    {/* Left accent bar */}
                                    <div className="absolute left-0 top-4 bottom-4 w-2 bg-gradient-to-b from-primary to-blue-900 rounded-l-2xl" />

                                    <div className="flex items-start gap-4">
                                        <div className="bg-secondary w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                                            <GraduationCap className="text-primary" size={28} />
                                        </div>
                                        
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-primary mb-2">{g.grade}</h3>
                                            <p className="text-gray-700 mb-3 leading-relaxed">{g.overview}</p>
                                            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                                                <p className="text-xs font-semibold text-gray-500 mb-1">Subjects:</p>
                                                <p className="text-sm text-gray-700">{g.subjects}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center pt-4"
                            >
                                <Link
                                    to="/icse-primary/curriculum"
                                    className="inline-flex items-center text-secondary hover:text-primary font-bold text-lg group"
                                >
                                    View Complete Curriculum
                                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Principal's Message */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                            Message from Leadership
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary">
                            Excellence in Primary Education
                        </h2>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-gradient-to-br from-primary to-blue-900 rounded-3xl p-10 md:p-12 text-white relative overflow-hidden shadow-2xl">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/20 rounded-full -mr-20 -mt-20"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full -ml-16 -mb-16"></div>
                                
                                <div className="relative z-10">
                                    <div className="w-24 h-24 bg-secondary/20 rounded-full flex items-center justify-center text-6xl mb-6">
                                        👩‍💼
                                    </div>
                                    <h3 className="text-3xl font-bold mb-6">Principal's Message</h3>
                                    <div className="text-6xl text-secondary/30 mb-4">"</div>
                                    <p className="text-lg leading-relaxed text-white/90 mb-6">
                                        Every student needs to be given the best quality primary education with a solid foundation
                                        to instill confidence and empower them to be lifelong learners.
                                    </p>
                                    <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                                        <p className="font-bold text-xl text-secondary mb-1">ROHINI GOPAL</p>
                                        <p className="text-white/80">Principal - ICSE Primary Wing</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                At ICSE Primary Wing, we focus on inculcating good social and behavioral habits, values, and culture.
                                From academics to co-curricular activities, we instill perseverance and a never-say-die spirit in every student.
                            </p>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Through our innovative 5-step methodology and continuous evaluation approach, we create an environment
                                that nurtures future leaders with skills and aptitudes across multiple disciplines.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                {[
                                    { icon: Target, text: "Strong Foundation" },
                                    { icon: Heart, text: "Value Education" },
                                    { icon: TrendingUp, text: "Holistic Growth" },
                                    { icon: Award, text: "Excellence" }
                                ].map((item, idx) => {
                                    const IconComponent = item.icon;
                                    return (
                                        <div key={idx} className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                                            <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center">
                                                <IconComponent className="text-primary" size={20} />
                                            </div>
                                            <span className="font-semibold text-gray-700">{item.text}</span>
                                        </div>
                                    );
                                })}
                            </div>

                            <Link
                                to="/icse-primary/about"
                                className="inline-flex items-center bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-4 rounded-xl transition-all shadow-lg group"
                            >
                                Read Full Message
                                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Upcoming Events Section */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-flex items-center gap-2">
                            <Bell size={16} />
                            Stay Updated
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                            Upcoming Events
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Mark your calendars for these important dates and celebrations
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {upcomingEvents.map((event, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -10, scale: 1.03 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border-2 border-gray-100 group"
                            >
                                {/* Date Badge */}
                                <div className="bg-gradient-to-br from-primary to-blue-900 text-white p-6 text-center relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/20 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform"></div>
                                    <div className="relative z-10">
                                        <div className="text-5xl font-bold mb-1">{event.date}</div>
                                        <div className="text-sm font-semibold text-secondary">{event.month}</div>
                                    </div>
                                </div>

                                {/* Event Details */}
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                                        {event.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                                        <Clock size={16} />
                                        <span>{event.time}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <Link
                            to="/icse-primary/calendar"
                            className="inline-flex items-center bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg group"
                        >
                            <Calendar className="mr-2" size={20} />
                            View Full Academic Calendar
                            <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary via-primary to-blue-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-10 w-32 h-32 border-4 border-white rounded-full"></div>
                    <div className="absolute bottom-10 left-10 w-40 h-40 border-4 border-white rounded-full"></div>
                </div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <GraduationCap className="mx-auto mb-6 text-secondary" size={64} />
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Join Our ICSE Primary Wing
                        </h2>
                        <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                            Give your child the foundation they deserve. Enroll now for quality education
                            that builds character and competence.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                to="/icse-primary/admissions"
                                className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-10 py-5 rounded-xl transition-all transform hover:scale-105 shadow-2xl inline-flex items-center gap-2"
                            >
                                Start Admission Process
                                <ArrowRight size={22} />
                            </Link>
                            <Link
                                to="/icse-primary/contact"
                                className="bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold px-10 py-5 rounded-xl transition-all border-2 border-white/30"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

           
        </div>
    );
};

export default IcsePrimaryHome;