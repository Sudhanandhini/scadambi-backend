import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Heart, Users, BookOpen, Sparkles, Award, Lightbulb, CheckCircle, GraduationCap, Shield, Calendar, Clock, MapPin, Blocks, Book, ChevronRight, Baby, Sun, Music } from 'lucide-react';

import img1 from "../../assets/play-school/Picture02.jpg"
import img2 from "../../assets/play-school/Picture26.jpg"


const PlaySchoolHome = () => {
    const upcomingEvents = [
        {
            id: 1,
            title: "Fancy Dress",
            date: "Coming Soon",
            icon: "🎭",
            description: "Children will dress up as their favorite characters. A fun-filled event to boost creativity and confidence.",
            category: "Event",
            color: "from-[#0F2A4A] to-[#1a4070]"
        },
        {
            id: 2,
            title: "Sports",
            date: "Coming Soon",
            icon: "⚽",
            description: "Annual sports day with various athletic activities, races, and games for all age groups.",
            category: "Sports",
            color: "from-[#0F2A4A] to-[#1a4070]"
        },
        {
            id: 3,
            title: "Vegetable Salad Day",
            date: "Coming Soon",
            icon: "🥗",
            description: "Hands-on learning about vegetables and healthy eating habits through fun activities.",
            category: "Activity",
            color: "from-[#0F2A4A] to-[#1a4070]"
        },
        {
            id: 4,
            title: "Christmas Celebration",
            date: "Coming Soon",
            icon: "🎄",
            description: "Festive celebration with decorations, songs, dance, and special activities.",
            category: "Festival",
            color: "from-[#0F2A4A] to-[#1a4070]"
        },
        {
            id: 5,
            title: "Sankranthi",
            date: "Coming Soon",
            icon: "🪁",
            description: "Traditional festival celebration with cultural activities and kite flying.",
            category: "Festival",
            color: "from-[#0F2A4A] to-[#1a4070]"
        },
        {
            id: 6,
            title: "Grand Parents Day",
            date: "Coming Soon",
            icon: "👵👴",
            description: "Special day to honor and celebrate grandparents with performances and activities.",
            category: "Event",
            color: "from-[#0F2A4A] to-[#1a4070]"
        }
    ];

    const features = [
        {
            number: "01",
            icon: <Star className="w-12 h-12" />,
            title: "Play-Based Learning",
            description: "Learning through fun and engaging play activities"
        },
        {
            number: "02",
            icon: <BookOpen className="w-12 h-12" />,
            title: "Montessori Activities",
            description: "Hands-on learning with Montessori materials"
        },
        {
            number: "03",
            icon: <Users className="w-12 h-12" />,
            title: "Experienced Faculty",
            description: "Dedicated and trained early childhood educators"
        },
        {
            number: "04",
            icon: <Shield className="w-12 h-12" />,
            title: "Safe Environment",
            description: "Secure campus with CCTV surveillance"
        }
    ];

    const programs = [
        {
            title: "Play Home",
            age: "2.5 - 3 years",
            timing: "9:30 AM - 12:30 PM",
            icon: <Heart className="w-16 h-16" />,
            description: "Gentle introduction to school environment with care "
        },
        {
            title: "Pre-KG",
            age: "3 - 4 years",
            timing: "9:30 AM - 1:00 PM",
            icon: <Blocks className="w-16 h-16" />,
            description: "Building foundational skills through structured play"
        },
        {
            title: "LKG",
            age: "4 - 5 years",
            timing: "9:30 AM - 1:30 PM",
            icon: <Book className="w-16 h-16" />,
            description: "Developing early literacy and numeracy skills"
        },
        {
            title: "UKG",
            age: "5 - 6 years",
            timing: "9:30 AM - 1:30 PM",
            icon: <GraduationCap className="w-16 h-16" />,
            description: "Preparing for primary school with advanced concepts"
        }
    ];

    const aboutFeatures = [
        {
            icon: <Lightbulb className="w-10 h-10" />,
            title: "Holistic Development",
            description: "Fostering cognitive, social, emotional, and physical growth through comprehensive curriculum"
        },
        {
            icon: <CheckCircle className="w-10 h-10" />,
            title: "Personalized Attention",
            description: "Small class sizes ensuring individual care and attention for every child's unique learning needs"
        }
    ];

    return (
        <div className="min-h-screen pt-32">
            {/* Hero Section */}
            

              <section className="relative bg-gradient-to-br from-[#0F2A4A] via-blue-900 to-[#0F2A4A] text-white py-20 overflow-hidden h-[1200px] md:h-[1000px] xl:h-[700px] ">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                    {/* Floating Shapes */}
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 10, 0]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-20 left-10 w-32 h-32 bg-[#FDB913]/20 rounded-full blur-2xl"
                    ></motion.div>
                    <motion.div
                        animate={{
                            y: [0, 30, 0],
                            rotate: [0, -10, 0]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl"
                    ></motion.div>
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
                    ></motion.div>
                </div>

                {/* Decorative Pattern Overlay */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FDB913' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '30px 30px'
                    }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Logo Badge */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                                className="flex items-center space-x-3 mb-6"
                            >
                                <motion.div
                                    className="bg-gradient-to-br from-[#FDB913] to-yellow-500 w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <span className="text-4xl">🌟</span>
                                </motion.div>
                                <div>
                                    <h1 className="text-4xl md:text-5xl font-bold">Shishu Chaitanya</h1>
                                    <p className="text-xl text-[#FDB913] font-semibold">Inspiring Little Learners Everyday</p>
                                </div>
                            </motion.div>

                            {/* Main Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-xl md:text-2xl mb-8 leading-relaxed text-white/90"
                            >
                                A nurturing environment where young minds bloom through 
                                <span className="font-bold text-[#FDB913]"> play-based learning</span>, 
                                Montessori activities, and personalized care for children aged 
                                <span className="font-bold text-[#FDB913]"> 2.5 to 6 years</span>.
                            </motion.p>

                            {/* Quick Highlights */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="grid grid-cols-3 gap-3 mb-8"
                            >
                                {[
                                    { icon: <Baby size={20} />, label: "2.5-6 Years" },
                                    { icon: <Clock size={20} />, label: "9:30 AM - 1:30 PM" },
                                    { icon: <Users size={20} />, label: "Small Classes" }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.7 + idx * 0.1, type: "spring" }}
                                        whileHover={{ y: -5 }}
                                        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 text-center hover:bg-white/20 transition-all"
                                    >
                                        <div className="flex justify-center mb-1 text-[#FDB913]">
                                            {item.icon}
                                        </div>
                                        <p className="text-xs font-semibold">{item.label}</p>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="flex flex-wrap gap-4 mb-6"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        to="/play-school/admissions"
                                        className="group bg-[#FDB913] hover:bg-yellow-500 text-[#0F2A4A] font-bold px-8 py-4 rounded-xl transition-all flex items-center shadow-2xl relative overflow-hidden"
                                    >
                                        <span className="relative z-10">Enroll Your Child</span>
                                        <ArrowRight className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
                                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-[#FDB913] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </Link>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        to="/play-school/about"
                                        className="group bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all border-2 border-white/30 hover:border-white/50 flex items-center"
                                    >
                                        <span>Learn More</span>
                                        <BookOpen className="ml-2 group-hover:rotate-12 transition-transform" size={20} />
                                    </Link>
                                </motion.div>
                            </motion.div>

                            {/* Additional Info */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                                className="flex flex-wrap gap-4 text-sm text-white/70"
                            >
                                <div className="flex items-center gap-2">
                                    <MapPin size={16} className="text-[#FDB913]" />
                                    <span >Bengaluru, Karnataka</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Shield size={16} className="text-[#FDB913]" />
                                    <span >Safe & Secure</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Award size={16} className="text-[#FDB913]" />
                                    <span>Certified Teachers</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right Side - Interactive Activity Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            {/* Main Container */}
                            <div className="relative">
                                {/* Activity Cards Grid */}
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { 
                                            icon: "🎨", 
                                            label: "Creative Arts",
                                            color: "from-pink-500 to-rose-500",
                                            delay: 0
                                        },
                                        { 
                                            icon: "🎵", 
                                            label: "Music & Dance",
                                            color: "from-purple-500 to-indigo-500",
                                            delay: 0.1
                                        },
                                        { 
                                            icon: "📚", 
                                            label: "Story Time",
                                            color: "from-blue-500 to-cyan-500",
                                            delay: 0.2
                                        },
                                        { 
                                            icon: "🏃", 
                                            label: "Physical Activities",
                                            color: "from-green-500 to-emerald-500",
                                            delay: 0.3
                                        }
                                    ].map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.8 + item.delay, type: "spring", stiffness: 200 }}
                                            whileHover={{ scale: 1.05, y: -5 }}
                                            className="group relative"
                                        >
                                            <div className="bg-white/10 backdrop-blur-lg border-2 border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all cursor-pointer shadow-xl hover:shadow-2xl relative overflow-hidden">
                                                {/* Background Gradient on Hover */}
                                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                                                
                                                {/* Icon with Animation */}
                                                <motion.div
                                                    animate={{
                                                        rotate: [0, 10, -10, 0]
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: "easeInOut",
                                                        delay: idx * 0.5
                                                    }}
                                                    className="text-6xl mb-3 relative z-10"
                                                >
                                                    {item.icon}
                                                </motion.div>
                                                
                                                {/* Label */}
                                                <p className="font-bold text-white relative z-10 group-hover:text-[#FDB913] transition-colors">
                                                    {item.label}
                                                </p>

                                                {/* Decorative Corner */}
                                                <div className="absolute top-2 right-2 w-2 h-2 bg-[#FDB913] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Floating Badge - Top Right */}
                                <motion.div
                                    initial={{ scale: 0, rotate: -45 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                                    className="absolute -top-6 -right-6 z-20"
                                >
                                    <motion.div
                                        animate={{
                                            y: [0, -10, 0]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className="bg-gradient-to-br from-[#FDB913] to-yellow-500 rounded-full p-4 shadow-2xl"
                                    >
                                        <div className="text-center">
                                            <Star className="text-[#0F2A4A] mx-auto mb-1" size={28} fill="#0F2A4A" />
                                            <div className="text-[#0F2A4A] font-bold text-xs whitespace-nowrap">Top Rated</div>
                                        </div>
                                    </motion.div>
                                </motion.div>

                                {/* Floating Stats - Bottom Left */}
                                <motion.div
                                    initial={{ scale: 0, x: -20 }}
                                    animate={{ scale: 1, x: 0 }}
                                    transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                                    className="absolute -bottom-6 -left-6 z-20"
                                >
                                    <div className="bg-white rounded-2xl p-4 shadow-2xl">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-green-500 rounded-full p-2">
                                                <Users className="text-white" size={24} />
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold text-[#0F2A4A]">500+</div>
                                                <div className="text-xs text-gray-600">Happy Students</div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Decorative Elements */}
                                <motion.div
                                    animate={{
                                        rotate: 360
                                    }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    className="absolute -top-10 -left-10 w-20 h-20 border-4 border-dashed border-[#FDB913]/30 rounded-full"
                                ></motion.div>
                                
                                <motion.div
                                    animate={{
                                        rotate: -360
                                    }}
                                    transition={{
                                        duration: 25,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    className="absolute -bottom-10 -right-10 w-24 h-24 border-4 border-dashed border-pink-500/30 rounded-full"
                                ></motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Wave Decoration */}
                <div className="absolute bottom-0 left-0 right-0 transform translate-y-1">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                        <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
                    </svg>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative">
                                <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#0F2A4A] rounded-full opacity-20 z-0"></div>
                                <div className="absolute -top-4 -right-4 w-24 h-24 border-8 border-[#0F2A4A] rounded-3xl z-0"></div>

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="relative z-10 mb-8"
                                >
                                    <img
                                        src= {img1}
                                        alt="Student Learning"
                                        className="rounded-3xl shadow-2xl w-full h-64 object-cover border-8 border-[#FDB913]"
                                    />
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="relative z-10 ml-12"
                                >
                                    <img
                                        src={img2}
                                        alt="Group Learning"
                                        className="rounded-3xl shadow-2xl w-full h-64 object-cover border-8 border-[#FDB913]"
                                    />
                                </motion.div>

                                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#0F2A4A] rounded-full opacity-20 z-0"></div>
                                <div className="absolute -bottom-4 left-0 w-24 h-24 border-8 border-[#0F2A4A] rounded-3xl z-0"></div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="text-[#FDB913] font-semibold text-lg mb-3">
                                About Our Education
                            </p>
                            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Building Foundation for Future Success
                            </h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                At Shishu Chaitanya, we believe in nurturing young minds through a perfect blend of play-based learning and structured curriculum. Our experienced educators create a warm, engaging environment where every child feels valued and inspired to learn.
                            </p>

                            <div className="space-y-6 mb-8">
                                {aboutFeatures.map((feature, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + idx * 0.1 }}
                                        className="flex items-start space-x-4"
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            className="bg-[#0F2A4A]/10 text-[#0F2A4A] p-3 rounded-xl flex-shrink-0"
                                        >
                                            {feature.icon}
                                        </motion.div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                            <p className="text-gray-600">{feature.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/play-school/about"
                                    className="inline-block bg-[#FDB913] hover:bg-yellow-500 text-[#0F2A4A] font-bold px-8 py-4 rounded-xl transition-all shadow-lg"
                                >
                                    Discover More
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Programs Section */}
            <section className="py-20 bg-gradient-to-br from-[#0F2A4A] to-[#0F2A4A] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-20 w-96 h-96 bg-[#FDB913] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[#FDB913] font-semibold text-lg mb-3 uppercase tracking-wider"
                        >
                            Our Programs
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl font-bold mb-4"
                        >
                            Age-Appropriate Learning Experiences
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-white/80 text-lg"
                        >
                            Tailored curriculum for every stage of early childhood development
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        {programs.map((program, idx) => (
                            <React.Fragment key={idx}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.15, duration: 0.6 }}
                                    className="relative z-10"
                                >
                                    <motion.div
                                        whileHover={{ y: -10 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-[#FDB913]/50 transition-all group"
                                    >
                                        <motion.div
                                            initial={{ rotate: 45, scale: 0 }}
                                            whileInView={{ rotate: 45, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ 
                                                delay: idx * 0.15 + 0.3,
                                                type: "spring",
                                                stiffness: 200
                                            }}
                                            whileHover={{ scale: 1.1, rotate: 50 }}
                                            className="inline-flex items-center justify-center mb-6 mx-auto"
                                        >
                                            <div className="bg-gradient-to-br from-[#FDB913] to-yellow-600 text-[#0F2A4A] p-6 rounded-2xl shadow-2xl group-hover:shadow-[#FDB913]/50 transition-all">
                                                <div className="transform -rotate-45">
                                                    {program.icon}
                                                </div>
                                            </div>
                                        </motion.div>

                                        <div className="text-center">
                                            <motion.h3
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.15 + 0.4 }}
                                                className="text-2xl font-bold mb-3 text-white"
                                            >
                                                {program.title}
                                            </motion.h3>
                                            
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.15 + 0.5 }}
                                                className="mb-4"
                                            >
                                                <p className="text-[#FDB913] font-semibold text-lg mb-1">
                                                    Age: {program.age}
                                                </p>
                                                <p className="text-white/70 text-sm">
                                                    {program.timing}
                                                </p>
                                            </motion.div>

                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.15 + 0.6 }}
                                                className="text-white/80 leading-relaxed text-sm"
                                            >
                                                {program.description}
                                            </motion.p>
                                        </div>
                                    </motion.div>
                                </motion.div>

                                {idx < programs.length - 1 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.15 + 0.5 }}
                                        className="hidden lg:flex items-center justify-center absolute z-0"
                                        style={{
                                            left: `${(idx + 0.5) * 25}%`,
                                            top: '50%',
                                            transform: 'translateY(-50%)'
                                        }}
                                    >
                                        <motion.div
                                            animate={{ x: [0, 10, 0] }}
                                            transition={{ 
                                                repeat: Infinity,
                                                duration: 2,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            <ArrowRight className="text-[#FDB913]/50 w-8 h-8" />
                                        </motion.div>
                                    </motion.div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[#0F2A4A] font-semibold text-lg mb-3"
                        >
                            Features
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl font-bold text-gray-900 mb-4"
                        >
                            Why Choose Shishu Chaitanya?
                        </motion.h2>
                        <p>Creating a foundation for lifelong learning</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="relative group"
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 + 0.2 }}
                                    className="absolute -top-4 left-6 z-10"
                                >
                                    <div className="bg-[#0F2A4A] text-white font-bold px-4 py-2 rounded-lg shadow-lg">
                                        {feature.number}
                                    </div>
                                </motion.div>

                                <div className="bg-white border-2 border-transparent group-hover:border-[#FDB913] rounded-3xl p-8 pt-12 text-center transition-all shadow-lg hover:shadow-2xl">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 bg-blue-50 text-[#0F2A4A] group-hover:bg-[#FDB913] group-hover:text-[#0F2A4A] transition-all"
                                    >
                                        {feature.icon}
                                    </motion.div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {feature.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming Events Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[#0F2A4A] font-semibold text-lg mb-3 uppercase tracking-wider flex items-center justify-center gap-2"
                        >
                            <Calendar className="w-5 h-5" />
                            Upcoming Events
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl font-bold text-gray-900 mb-4"
                        >
                            Don't Miss Our Special Events
                        </motion.h2>
                        <div className="w-32 h-1 bg-[#FDB913] mx-auto mb-4"></div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-600 text-lg"
                        >
                            Mark your calendars for these exciting events
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {upcomingEvents.map((event, idx) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15, duration: 0.6 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group"
                            >
                                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-[#FDB913]">
                                    <div className={`bg-gradient-to-br ${event.color} h-48 flex items-center justify-center relative overflow-hidden`}>
                                        <motion.div
                                            animate={{
                                                y: [0, -10, 0],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: idx * 0.2
                                            }}
                                            className="text-8xl"
                                        >
                                            {event.icon}
                                        </motion.div>
                                        <div className="absolute top-4 right-4 bg-[#FDB913] text-[#0F2A4A] px-4 py-2 rounded-full text-sm font-bold">
                                            {event.category}
                                        </div>
                                        
                                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
                                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full"></div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold text-[#0F2A4A] mb-3 group-hover:text-[#FDB913] transition-colors">
                                            {event.title}
                                        </h3>

                                        <div className="flex items-center text-gray-600 mb-4">
                                            <Calendar className="w-5 h-5 mr-2 text-[#FDB913]" />
                                            <span className="font-semibold">{event.date}</span>
                                        </div>

                                        <p className="text-gray-600 leading-relaxed mb-6">
                                            {event.description}
                                        </p>

                                        <Link
                                            to="/play-school/activities"
                                            className="flex items-center text-[#FDB913] font-semibold hover:gap-3 transition-all"
                                        >
                                            Learn More
                                            <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-[#0F2A4A] mb-6">
                            Ready to Start Your Child's Learning Journey?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Join the Shishu Chaitanya family and give your child the gift of quality early education.
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                to="/play-school/admissions"
                                className="inline-flex items-center bg-[#FDB913] hover:bg-yellow-500 text-[#0F2A4A] font-bold px-8 py-4 rounded-xl transition-all shadow-lg"
                            >
                                Apply for Admission
                                <ArrowRight className="ml-2" size={20} />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default PlaySchoolHome;