import React,  { useState, useRef  }  from 'react';
import { motion,  useScroll,useTransform  } from 'framer-motion';
import { Baby, BookOpen, School, GraduationCap, Trophy, Sparkles, ArrowRight, CheckCircle, Target, Award, Users, TrendingUp, Star  } from 'lucide-react';
import { Link } from 'react-router-dom';

const Academics = () => {
    const wings = [
        {
            title: "S. Cadambi Shishu Chaitanya",
            subtitle: "Play Home & Pre-Primary Wing",
            desc: "A nurturing Montessori-based environment where young minds begin their educational journey through play, exploration, and sensory learning. Our specially designed curriculum focuses on motor skills, creativity, and social development.",
            grades: ["Playhome", "Pre KG", "LKG", "UKG"],
            icon: Baby,
            color: "from-[#0F2A4A] to-[#0F2A4A]",
            board: "Play-Based Learning",
            link: "/play-school",
            highlights: ["Montessori Method", "Play-Based Learning", "Sensory Development", "Creative Activities"]
        },
        {
            title: "S.Cadambi Education Center",
            subtitle: "Pre-Primary School (ICSE)",
            desc: "ICSE-affiliated pre-primary education focusing on holistic development, language skills, and foundational concepts through interactive learning. Building strong foundations with age-appropriate activities and personalized attention.",
            grades: ["Pre KG", "LKG", "UKG"],
            icon: Sparkles,
            color: "from-[#FDB913] to-[#FDB913]",
            board: "ICSE Board",
            link: "/pre-primary",
            highlights: ["ICSE Curriculum", "Language Development", "Early Learning", "Individual Attention"]
        },
        {
            title: "S Cadambi Vidya Kendra",
            subtitle: "English Secondary School - ICSE Primary Wing",
            desc: "Building strong academic foundations with comprehensive ICSE curriculum, emphasizing core subjects, critical thinking, and character development. Our experienced faculty ensures each child reaches their full potential.",
            grades: ["1st Standard", "2nd Standard", "3rd Standard", "4th Standard", "5th Standard"],
            icon: BookOpen,
            color: "from-[#0F2A4A] to-[#0F2A4A]",
            board: "ICSE Board",
            link: "/icse-primary",
            highlights: ["Core Subjects", "Critical Thinking", "Character Building", "Extracurricular Activities"]
        },
        {
            title: "S. Cadambi Vidya Kendra",
            subtitle: "English High School [ICSE]",
            desc: "Advanced ICSE curriculum preparing students for board examinations with focus on analytical skills, scientific temperament, and comprehensive learning. Achieving consistent 100% results with numerous distinctions.",
            grades: ["6th Standard", "7th Standard", "8th Standard", "9th Standard", "10th Standard"],
            icon: School,
            color: "from-[#FDB913] to-[#FDB913]",
            board: "ICSE Board",
            link: "/icse-high",
            highlights: ["100% Board Results", "Scientific Learning", "Lab Facilities", "Project-Based Learning"]
        },
        {
            title: "S.Cadambi Vidya Kendra",
            subtitle: "High School [State]",
            desc: "State board education providing quality learning aligned with regional curriculum, preparing students for state board examinations and future opportunities. Consistent 98% results in SSLC board exams with economical fee structure.",
            grades: ["8th Standard", "9th Standard", "10th Standard"],
            icon: Trophy,
            color: "from-[#0F2A4A] to-[#0F2A4A]",
            board: "State Board (Karnataka)",
            link: "/high-school",
            highlights: ["98% SSLC Results", "Affordable Fees", "Regional Curriculum", "Career Guidance"]
        },
        {
            title: "S Cadambi Independent PU College",
            subtitle: "Pre-University College",
            desc: "Specialized streams for competitive exam preparation (JEE/NEET/CET) and career excellence, with expert faculty and comprehensive study programs. Established in 2007, now serving 400+ students with integrated coaching programs.",
            grades: ["11th Standard (PUC-I)", "12th Standard (PUC-II)"],
            icon: GraduationCap,
            color: "from-[#FDB913] to-[#FDB913]",
            board: "State Board (Karnataka)",
            link: "/pu-college",
            highlights: ["JEE/NEET Coaching", "Expert Faculty", "Modern Labs", "Career Counseling"]
        }
    ];

    const achievements = [
        { icon: Award, title: "100%", desc: "ICSE Results", color: "from-secondary to-yellow-400" },
        { icon: TrendingUp, title: "98%", desc: "State Board Results", color: "from-primary to-blue-600" },
        { icon: Users, title: "2000+", desc: "Students", color: "from-green-400 to-green-600" },
        { icon: Star, title: "40+", desc: "Years Experience", color: "from-purple-400 to-purple-600" }
    ];

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const scaleVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

          const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);


    return (
        <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Animated Background Elements */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                    opacity: [0.03, 0.06, 0.03]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    rotate: [360, 180, 0],
                    opacity: [0.03, 0.06, 0.03]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-primary rounded-full blur-3xl"
            />


              {/* Enhanced Hero Section */}
                        <section
                            ref={heroRef}
                            className="relative bg-gradient-to-br from-[#0F2A4A] via-[#1a3a5f] to-[#0F2A4A] text-white pt-40 overflow-hidden pb-32"
                        >
                            {/* Animated Background Elements */}
                            <motion.div
                                className="absolute inset-0 opacity-20"
                                animate={{
                                    backgroundPosition: ['0% 0%', '100% 100%'],
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                                style={{
                                    backgroundImage: 'radial-gradient(circle at 20% 50%, white 2px, transparent 2px)',
                                    backgroundSize: '50px 50px'
                                }}
                            />
            
                            <motion.div
                                className="absolute top-10 right-10 w-64 h-64 bg-[#FDB913]/20 rounded-full blur-3xl"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.6, 0.3]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            />
            
                            <motion.div
                                className="absolute bottom-10 left-0 w-96 h-96 bg-[#FDB913]/10 rounded-full blur-3xl"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.2, 0.5, 0.2]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    delay: 1
                                }}
                            />
            
                            <motion.div
                                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                                style={{ y, opacity }}
                            >
                                <div className="text-center">
                                    <motion.div
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 15,
                                            delay: 0.2
                                        }}
                                        className="inline-flex items-center bg-[#FDB913] text-[#0F2A4A] px-6 py-2 rounded-full font-semibold mb-6 shadow-lg"
                                    >
                                        <motion.div
                                            animate={{ rotate: [0, 360] }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                        >
                                            <Sparkles className="mr-2" size={20} />
                                        </motion.div>
                                       Our Educational Wings
                                    </motion.div>
            
                                    <motion.h1
                                        className="text-5xl md:text-6xl font-bold mb-6"
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4, duration: 0.8 }}
                                    >
                                    Academic Excellence Across  {' '}
                                        <motion.span
                                            className="text-[#FDB913]"
                                            animate={{
                                                textShadow: [
                                                    "0 0 20px rgba(253, 185, 19, 0.5)",
                                                    "0 0 40px rgba(253, 185, 19, 0.8)",
                                                    "0 0 20px rgba(253, 185, 19, 0.5)"
                                                ]
                                            }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                           All Levels
                                        </motion.span>
                                    </motion.h1>
            
                                    <motion.div
                                        className="flex items-center justify-center gap-3 mb-6"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.6, type: "spring" }}
                                    >
                                        <motion.div
                                            className="h-1 w-20 bg-[#FDB913] rounded"
                                            animate={{ width: ["80px", "100px", "80px"] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                        <div className="h-1 w-12 bg-white rounded" />
                                        <motion.div
                                            className="h-1 w-20 bg-[#FDB913] rounded"
                                            animate={{ width: ["80px", "100px", "80px"] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                        />
                                    </motion.div>
            
                                    <motion.p
                                        className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.8, duration: 0.8 }}
                                    >
                                      From early childhood to pre-university, our diverse wings cater to every stage of learning with specialized curricula and expert guidance.
                                    </motion.p>
                                </div>
                            </motion.div>
            
                            {/* Floating Elements */}
                            <motion.div
                                className="absolute top-20 left-40"
                                animate={{
                                    y: [0, -20, 0],
                                    rotate: [0, 10, 0]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            >
                                <School className="w-16 h-16 text-[#FDB913]/30" />
                            </motion.div>
            
                            <motion.div
                                className="absolute bottom-20 right-20"
                                animate={{
                                    y: [0, 20, 0],
                                    rotate: [0, -10, 0]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    delay: 1
                                }}
                            >
                                <GraduationCap className="w-20 h-20 text-[#FDB913]/30" />
                            </motion.div>
                        </section>
            

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
                {/* Enhanced Header */}
                {/* <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center mb-16"
                >
                    <motion.span 
                        variants={itemVariants}
                        className="text-secondary font-bold tracking-widest uppercase text-sm inline-block relative"
                    >
                        <motion.span
                            className="absolute -left-12 top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-secondary"
                            initial={{ width: 0 }}
                            animate={{ width: 32 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        />
                        <motion.span
                            className="absolute -right-12 top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-secondary"
                            initial={{ width: 0 }}
                            animate={{ width: 32 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        />
                        Our Educational Wings
                    </motion.span>
                    <motion.h1 
                        variants={itemVariants}
                        className="text-4xl md:text-6xl font-bold font-serif text-primary mt-3 mb-4"
                    >
                        Academic Excellence{' '}
                        <motion.span
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                            }}
                            transition={{ duration: 5, repeat: Infinity }}
                            style={{
                                backgroundImage: 'linear-gradient(90deg, #0F2A4A, #FDB913, #0F2A4A)',
                                backgroundSize: '200% auto',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}
                        >
                            Across All Levels
                        </motion.span>
                    </motion.h1>
                    <motion.p 
                        variants={itemVariants}
                        className="text-gray-600 max-w-3xl mx-auto text-lg"
                    >
                        From early childhood to pre-university, our diverse wings cater to every stage of learning with specialized curricula and expert guidance.
                    </motion.p>
                </motion.div> */}

                {/* Stats Section */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                >
                    {achievements.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={scaleVariants}
                            whileHover={{ 
                                scale: 1.08, 
                                y: -5,
                                boxShadow: "0 20px 40px rgba(15, 42, 74, 0.15)"
                            }}
                            className="bg-white rounded-xl shadow-lg p-6 text-center relative overflow-hidden group cursor-pointer"
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10"
                                style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 0.1 }}
                            />
                            
                            <motion.div 
                                className={`bg-gradient-to-br ${item.color} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3`}
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            >
                                <item.icon className="text-white" size={24} />
                            </motion.div>
                            <h3 className="text-3xl font-bold text-primary mb-1">{item.title}</h3>
                            <p className="text-gray-600 text-sm font-medium">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Wings Cards */}
                <div className="grid grid-cols-1 gap-8 mb-16">
                    {wings.map((wing, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group relative"
                        >
                            {/* Hover Glow Effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/5 to-secondary/0 opacity-0 group-hover:opacity-100"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 1 }}
                            />
                            
                            <div className="flex flex-col md:flex-row">
                                {/* Animated Icon Section */}
                                <motion.div 
                                    className={`bg-gradient-to-br ${wing.color} p-8 md:p-12 flex items-center justify-center md:w-48 relative overflow-hidden`}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <motion.div 
                                        className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"
                                    />
                                    
                                    {/* Floating Animation for Icon */}
                                    <motion.div
                                        animate={{ 
                                            y: [0, -10, 0],
                                            rotate: [0, 5, -5, 0]
                                        }}
                                        transition={{ 
                                            duration: 3, 
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className="relative z-10"
                                    >
                                        <wing.icon size={64} className="text-white" />
                                    </motion.div>
                                    
                                    {/* Decorative Circles */}
                                    <motion.div
                                        animate={{ 
                                            scale: [1, 1.2, 1],
                                            opacity: [0.3, 0.6, 0.3]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="absolute inset-0 border-4 border-white/20 rounded-full"
                                    />
                                </motion.div>

                                {/* Content Section */}
                                <div className="flex-1 p-6 md:p-8 relative">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                        <div className="flex-1">
                                            <motion.h2 
                                                className="text-2xl md:text-3xl font-bold text-primary mb-1 font-serif group-hover:text-secondary transition-colors"
                                                initial={{ x: -20, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                {wing.title}
                                            </motion.h2>
                                            <motion.p 
                                                className="text-lg text-gray-700 font-semibold mb-2"
                                                initial={{ x: -20, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.3 }}
                                            >
                                                {wing.subtitle}
                                            </motion.p>
                                        </div>
                                        <motion.span 
                                            whileHover={{ scale: 1.1 }}
                                            className="inline-block bg-gradient-to-r from-secondary/20 to-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-bold border border-secondary/30 whitespace-nowrap mt-2 md:mt-0"
                                        >
                                            {wing.board}
                                        </motion.span>
                                    </div>

                                    <motion.p 
                                        className="text-gray-600 mb-6 leading-relaxed"
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        {wing.desc}
                                    </motion.p>

                                    {/* Highlights */}
                                    <motion.div 
                                        className="mb-6"
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <h4 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide flex items-center">
                                            <Target className="mr-2 text-secondary" size={16} />
                                            Key Highlights:
                                        </h4>
                                        <div className="grid grid-cols-2 gap-2">
                                            {wing.highlights.map((highlight, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.6 + i * 0.1 }}
                                                    className="flex items-center text-sm text-gray-600"
                                                >
                                                    <CheckCircle className="mr-2 text-green-500 flex-shrink-0" size={16} />
                                                    <span>{highlight}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* Grades */}
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.7 }}
                                        className="mb-6"
                                    >
                                        <h4 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">
                                            Classes Offered:
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {wing.grades.map((grade, i) => (
                                                <motion.span
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.8 + i * 0.05 }}
                                                    whileHover={{ 
                                                        scale: 1.1,
                                                        boxShadow: "0 4px 12px rgba(15, 42, 74, 0.2)"
                                                    }}
                                                    className="bg-gradient-to-r from-blue-50 to-blue-100 text-primary px-4 py-2 rounded-lg text-sm font-semibold border border-blue-200 cursor-pointer"
                                                >
                                                    {grade}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* Learn More Button */}
                                    <Link to={wing.link}>
                                        <motion.button
                                            whileHover={{ scale: 1.05, x: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary/90 text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all group/btn"
                                        >
                                            Learn More About This Wing
                                            <motion.div
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            >
                                                <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={20} />
                                            </motion.div>
                                        </motion.button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Enhanced PU College Section */}
             

                {/* Enhanced Academic Excellence Section */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <motion.div 
                        whileHover={{ scale: 1.01 }}
                        className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 border-2 border-secondary/20 relative overflow-hidden"
                    >
                        {/* Decorative Elements */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-20 -right-20 w-40 h-40 border-4 border-secondary/10 rounded-full"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="absolute -bottom-20 -left-20 w-40 h-40 border-4 border-primary/10 rounded-full"
                        />
                        
                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-center mb-10 relative z-10"
                        >
                            <motion.h2 
                                variants={itemVariants}
                                className="text-3xl md:text-4xl font-bold text-primary font-serif mb-4"
                            >
                                Academic Excellence & Results
                            </motion.h2>
                            <motion.p 
                                variants={itemVariants}
                                className="text-gray-600 text-lg"
                            >
                                Consistently achieving outstanding results across all boards
                            </motion.p>
                        </motion.div>
                        
                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="prose prose-lg max-w-none text-gray-700 relative z-10"
                        >
                            {[
                                <p className="text-lg leading-relaxed mb-4">
                                    The institution has established itself with both <strong className="text-primary">ICSE stream</strong> (permanent affiliation to ICSE Board, New Delhi) and the <strong className="text-primary">State Board stream</strong> (affiliated to Karnataka Secondary Education Board).
                                </p>,
                                <p className="text-lg leading-relaxed mb-4">
                                    The ICSE High School has secured <strong className="text-secondary">100% results</strong> with many distinctions in the 10th Board exams every year. The State High School achieves <strong className="text-secondary">98% results</strong> in the SSLC board exams.
                                </p>,
                                <p className="text-lg leading-relaxed">
                                    The initial start has emerged to a well-dimensional school which caters education in both ICSE and State syllabi streams at an <strong className="text-primary">economical fee structure</strong>.
                                </p>
                            ].map((content, idx) => (
                                <motion.div key={idx} variants={itemVariants}>
                                    {content}
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.section>

                {/* Enhanced CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden"
                >
                    {/* Animated Background Pattern */}
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-20 h-20 border border-white/10 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.1, 0.3, 0.1],
                            }}
                            transition={{
                                duration: 4 + Math.random() * 3,
                                repeat: Infinity,
                                delay: Math.random() * 2
                            }}
                        />
                    ))}
                    
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute top-8 right-8 text-secondary/30"
                    >
                        <Sparkles size={48} />
                    </motion.div>
                    
                    <motion.h3 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4 font-serif relative z-10"
                    >
                        A Complete Educational Ecosystem
                    </motion.h3>
                    <motion.p 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-white/90 max-w-3xl mx-auto mb-8 relative z-10"
                    >
                        Our multiple wings ensure that every child receives the right education at the right stage,
                        with options for both ICSE and State Board curricula to suit diverse learning needs and aspirations.
                    </motion.p>
                    
                    <Link to="/admissions">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-secondary text-primary px-8 py-4 rounded-lg font-bold shadow-2xl hover:shadow-3xl transition-all relative z-10 inline-flex items-center gap-2"
                        >
                            Apply for Admission
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <ArrowRight size={20} />
                            </motion.div>
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Academics;