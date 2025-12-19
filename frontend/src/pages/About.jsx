import React from 'react';
import { motion } from 'framer-motion';
import { Book, Target, Heart, Award, Users, Sparkles, Building2, TrendingUp, GraduationCap, CheckCircle, Crown, Star, ArrowRight, Zap } from 'lucide-react';
import image1 from '../assets/images/pie1.jpg';
import Pure4 from '../assets/images/Pure4.png';
import Pure6 from '../assets/images/Pure6.jpg';
import Pict2 from '../assets/images/Pict2.jpg';
import Pict3 from '../assets/images/Picre3.jpg';
import Pie8 from '../assets/images/Pie8.jpg';
import Pice11 from '../assets/images/Pice11.jpg';
import ure7 from '../assets/images/ure7.jpg';
import ture10 from '../assets/images/ture10.jpg';
import Pre9 from '../assets/images/Pre9.jpg';
import Pice5 from '../assets/images/Pice5.jpg';

const About = () => {
    const managementLeadership = [
        {
            name: "Dr. K. Sheshamurthy",
            role: "President",
            qualification: "M.Com, MBA, MCA, Ph.D",
            image: image1
        },
        {
            name: "Dr. (Smt) Sree Srivatsa",
            role: "Vice President & Chairperson of Governing Council",
            qualification: "M.Phil, Ph.D",
            image: Pict2
        },
        {
            name: "Sri A R Ananthan",
            role: "Vice President",
            qualification: "",
            image: Pict3
        }
    ];

    const executiveTeam = [
        {
            name: "Sri C K Keshavan",
            role: "Secretary",
            qualification: "B.E (Mech)",
            image: Pure4
        },
        {
            name: "Sri C V Sundar Raj",
            role: "Treasurer",
            qualification: "",
            image: Pice5
        },
        {
            name: "Sri K R Krishna Prasad",
            role: "Joint Secretary",
            qualification: "",
            image: Pure6
        }
    ];

    const boardMembers = [
        {
            name: "Dr. Ramprasad K R",
            role: "Member",
            image: ure7
        },
        {
            name: "Sri K G Ranganath",
            role: "Member",
            image: Pie8
        },
        {
            name: "Dr. Srinidhi S",
            role: "Member",
            image: Pre9
        },
        {
            name: "Sri Sairam",
            role: "Member",
            image: ture10
        }
    ];

    const wings = [
        { name: "Shishu Chaitanya", desc: "Play Home and Pre-Primary School" },
        { name: "S. Cadambi Education Centre", desc: "Pre-Primary School (ICSE)" },
        { name: "S. Cadambi Vidya Kendra", desc: "English Secondary School - ICSE Primary Wing" },
        { name: "S. Cadambi Vidya Kendra", desc: "English Secondary School - ICSE High School Wing" },
        { name: "S. Cadambi Vidya Kendra", desc: "State High School" },
        { name: "S. Cadambi Independent PU College", desc: "Pre-University College" }
    ];

    const milestones = [
        { year: "1984", event: "Establishment of S. Cadambi Group of Institutions under The Kalkunte Education Trust" },
        { year: "Early 1990s", event: "Secured ICSE permanent affiliation to ICSE Board, New Delhi" },
        { year: "Late 1990s", event: "State High School affiliated to Karnataka Secondary Education Board" },
        { year: "2007", event: "S. Cadambi Independent Pre-University College established with 10 students" },
        { year: "Present", event: "Serving 2,000+ students with 98-100% board exam results annually" }
    ];

    const achievements = [
        { icon: GraduationCap, title: "2000+", desc: "Students Enrolled" },
        { icon: Award, title: "100%", desc: "ICSE Results" },
        { icon: CheckCircle, title: "98%", desc: "State Board Results" },
        { icon: TrendingUp, title: "40+", desc: "Years of Excellence" }
    ];

    const values = [
        {
            icon: Book,
            title: "Academic Excellence",
            desc: "Cutting-edge curriculum with ICSE and State Board streams achieving consistent 98-100% results"
        },
        {
            icon: Target,
            title: "Holistic Development",
            desc: "Balanced focus on academics, sports, NCC, Scouts, and extracurricular activities"
        },
        {
            icon: Heart,
            title: "Cultural Heritage",
            desc: "Instilling respect and belief in our rich cultural heritage, values, and ethos"
        },
        {
            icon: Award,
            title: "Value Education",
            desc: "Nurturing cardinal virtues of faith, fidelity, and fortitude"
        }
    ];

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
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
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const floatingAnimation = {
        y: [0, -20, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    const pulseAnimation = {
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

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
            <div className="relative h-[600px] bg-cover bg-center" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&h=900&fit=crop')"
            }}>
                {/* Animated Overlay */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/95"
                />
                
                {/* Floating Particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-secondary/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.5, 0.2],
                            scale: [1, 1.5, 1]
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2
                        }}
                    />
                ))}

                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-white max-w-3xl"
                        >
                            <motion.div 
                                variants={scaleVariants}
                                whileHover={{ scale: 1.05 }}
                                className="inline-block bg-secondary px-6 py-3 rounded-full mb-6 shadow-lg"
                            >
                                <span className="text-primary font-bold tracking-wide">Established 1984 • 40+ Years of Excellence</span>
                            </motion.div>
                            
                            <motion.h1 
                                variants={itemVariants}
                                className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-tight"
                            >
                                <motion.span
                                    animate={{
                                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                                    }}
                                    transition={{ duration: 5, repeat: Infinity }}
                                    style={{
                                        backgroundImage: 'linear-gradient(90deg, #ffffff, #FDB913, #ffffff)',
                                        backgroundSize: '200% auto',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text'
                                    }}
                                >
                                    S. Cadambi Group of Institutions
                                </motion.span>
                            </motion.h1>
                            
                            <motion.p 
                                variants={itemVariants}
                                className="text-2xl md:text-3xl text-white/90 font-light mb-8"
                            >
                                Enlightenment through Education
                            </motion.p>
                            
                            <motion.div 
                                variants={itemVariants}
                                className="flex flex-wrap gap-4"
                            >
                                {[
                                    { label: "From", value: "50 Students" },
                                    { label: "To", value: "2000+ Students" }
                                ].map((stat, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-lg border border-white/20 cursor-pointer"
                                    >
                                        <p className="text-sm text-white/80">{stat.label}</p>
                                        <motion.p 
                                            animate={pulseAnimation}
                                            className="text-2xl font-bold"
                                        >
                                            {stat.value}
                                        </motion.p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Enhanced Quick Stats */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 mb-20">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {achievements.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={scaleVariants}
                            whileHover={{ 
                                scale: 1.08, 
                                y: -10,
                                boxShadow: "0 20px 40px rgba(15, 42, 74, 0.2)"
                            }}
                            className="bg-white rounded-2xl shadow-2xl p-8 text-center relative overflow-hidden group cursor-pointer"
                        >
                            {/* Animated Background */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/0 group-hover:from-secondary/10 group-hover:to-secondary/5"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                            
                            <motion.div 
                                animate={{ 
                                    rotate: [0, 360],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{ 
                                    duration: 3, 
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                className="bg-gradient-to-br from-secondary to-yellow-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10"
                            >
                                <item.icon className="text-primary" size={32} />
                            </motion.div>
                            
                            <motion.h3 
                                className="text-4xl font-bold text-primary mb-2 relative z-10"
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                {item.title}
                            </motion.h3>
                            <p className="text-gray-600 font-medium relative z-10">{item.desc}</p>
                            
                            {/* Corner Decoration */}
                            <motion.div
                                className="absolute top-0 right-0 w-20 h-20 bg-secondary/10 rounded-bl-full"
                                initial={{ scale: 0 }}
                                whileHover={{ scale: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative">
                {/* Enhanced Vision & Mission */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-24"
                >
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <motion.span 
                            variants={itemVariants}
                            className="text-secondary font-bold tracking-widest uppercase text-sm inline-block relative"
                        >
                            <motion.span
                                className="absolute -left-12 top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-secondary"
                                initial={{ width: 0 }}
                                whileInView={{ width: 32 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            />
                            <motion.span
                                className="absolute -right-12 top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-secondary"
                                initial={{ width: 0 }}
                                whileInView={{ width: 32 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            />
                            Our Foundation
                        </motion.span>
                        <motion.h2 
                            variants={itemVariants}
                            className="text-4xl md:text-5xl font-bold text-primary font-serif mt-3"
                        >
                            Vision & Mission
                        </motion.h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Our Vision",
                                icon: Target,
                                gradient: "from-primary to-primary/80",
                                content: (
                                    <>
                                        <p className="text-2xl font-bold text-secondary italic">
                                            "Enlightenment through Education"
                                        </p>
                                        <p className="text-gray-700 text-lg leading-relaxed">
                                            The mission being academic growth to develop human potential through cutting edge technology and to instill respect and belief in our cultural, heritage and ethos.
                                        </p>
                                        <p className="text-gray-700 text-lg leading-relaxed">
                                            Furthermore, to provide a broad, stimulating curriculum to develop confidence in individuals to make them successful learners, responsible citizens and effective contributors is our primary objective.
                                        </p>
                                    </>
                                )
                            },
                            {
                                title: "Our Mission",
                                icon: Sparkles,
                                gradient: "from-secondary to-yellow-400",
                                content: (
                                    <>
                                        <p className="text-gray-700 text-lg leading-relaxed">
                                            It is also our aim to maintain a healthy learning environment to approach challenges and incorporate new knowledge with a <strong className="text-primary">"can-do" attitude</strong>.
                                        </p>
                                        <p className="text-gray-700 text-lg leading-relaxed">
                                            Finally, it is our endeavour to foster positive behaviour, focusing strongly on culture of celebrating success, where all are responsible for their actions.
                                        </p>
                                        <p className="text-gray-700 text-lg leading-relaxed">
                                            We aim to provide our young citizens with quality education, so that they imbibe the <strong className="text-primary">cardinal virtues of faith, fidelity, and fortitude</strong>.
                                        </p>
                                    </>
                                )
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2, duration: 0.8 }}
                                className="relative group"
                            >
                                {/* Animated Border */}
                                <motion.div 
                                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl`}
                                    animate={{
                                        scale: [1, 1.02, 1],
                                    }}
                                    transition={{ 
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                                
                                <motion.div 
                                    className="relative bg-white rounded-3xl p-8 m-1"
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="flex items-center mb-6">
                                        <motion.div 
                                            className={`bg-gradient-to-br ${item.gradient} p-4 rounded-2xl`}
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <item.icon className="text-white" size={40} />
                                        </motion.div>
                                        <h3 className="text-3xl font-bold text-primary ml-4 font-serif">{item.title}</h3>
                                    </div>
                                    <div className="space-y-4">
                                        {item.content}
                                    </div>
                                    
                                    {/* Decorative Element */}
                                    <motion.div
                                        className="absolute bottom-0 right-0 w-32 h-32 opacity-5"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    >
                                        <item.icon size={128} />
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Enhanced Our Wings */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-24"
                >
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <motion.span 
                            variants={itemVariants}
                            className="text-secondary font-bold tracking-widest uppercase text-sm"
                        >
                            Academic Structure
                        </motion.span>
                        <motion.h2 
                            variants={itemVariants}
                            className="text-4xl md:text-5xl font-bold text-primary font-serif mt-3"
                        >
                            Our Educational Wings
                        </motion.h2>
                        <motion.p 
                            variants={itemVariants}
                            className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto"
                        >
                            The S. Cadambi Vidya Kendra is flourishing and functioning effectively through various wings
                        </motion.p>
                    </motion.div>

                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {wings.map((wing, idx) => (
                            <motion.div
                                key={idx}
                                variants={scaleVariants}
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: "0 20px 40px rgba(15, 42, 74, 0.15)"
                                }}
                                className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-secondary relative overflow-hidden group cursor-pointer"
                            >
                                {/* Animated Background */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-secondary/0 to-secondary/0"
                                    whileHover={{ 
                                        background: "linear-gradient(to right, rgba(253, 185, 19, 0.05), rgba(253, 185, 19, 0.1))"
                                    }}
                                />
                                
                                <div className="flex items-start relative z-10">
                                    <motion.div 
                                        className="bg-secondary/10 p-3 rounded-lg shrink-0"
                                        whileHover={{ 
                                            backgroundColor: "rgba(253, 185, 19, 0.3)",
                                            rotate: 360
                                        }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <Building2 className="text-secondary" size={24} />
                                    </motion.div>
                                    <div className="ml-4 flex-1">
                                        <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                                            {wing.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{wing.desc}</p>
                                    </div>
                                </div>
                                
                                {/* Hover Arrow */}
                                <motion.div
                                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100"
                                    initial={{ x: -10 }}
                                    whileHover={{ x: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ArrowRight className="text-secondary" size={20} />
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>

                {/* Enhanced About The School */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-24"
                >
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-3xl shadow-2xl overflow-hidden"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <motion.div 
                                className="h-96 lg:h-auto bg-cover bg-center relative overflow-hidden"
                                style={{
                                    backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop')"
                                }}
                            >
                                <motion.div 
                                    className="w-full h-full bg-gradient-to-r from-primary/80 to-transparent flex items-center p-12"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1 }}
                                >
                                    <div className="text-white">
                                        <motion.div
                                            animate={floatingAnimation}
                                        >
                                            <Crown className="w-16 h-16 text-secondary mb-4" />
                                        </motion.div>
                                        <motion.h3 
                                            initial={{ x: -50, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 }}
                                            className="text-3xl font-bold mb-2"
                                        >
                                            Since 1984
                                        </motion.h3>
                                        <motion.p 
                                            initial={{ x: -50, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 }}
                                            className="text-xl"
                                        >
                                            40+ Years of Educational Excellence
                                        </motion.p>
                                    </div>
                                </motion.div>
                            </motion.div>
                            <motion.div 
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="p-8 lg:p-12"
                            >
                                <span className="text-secondary font-bold tracking-widest uppercase text-sm">Our Story</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif mt-2 mb-6">About The School</h2>
                                <motion.div 
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="space-y-4 text-gray-700 leading-relaxed"
                                >
                                    {[
                                        <p className="text-lg">
                                            <strong className="text-primary">S. Cadambi Group of Institutions</strong>, functioning under <strong className="text-primary">The Kalkunte Education Trust (K.E.T)</strong>, was established in the year <strong>1984</strong>, with the humble beginning to build academic institutions par excellence.
                                        </p>,
                                        <p className="text-lg">
                                            This was created to nurture the character of the young ones to grow into socially responsible citizens of our country.
                                        </p>,
                                        <p className="text-lg">
                                            Starting with an academic strength of less than <strong>50 students</strong>, it has now reached a strength of around <strong className="text-secondary">2,000 students</strong>.
                                        </p>
                                    ].map((content, idx) => (
                                        <motion.div
                                            key={idx}
                                            variants={itemVariants}
                                        >
                                            {content}
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.section>

                {/* Enhanced Core Values */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-24"
                >
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <motion.span 
                            variants={itemVariants}
                            className="text-secondary font-bold tracking-widest uppercase text-sm"
                        >
                            What Drives Us
                        </motion.span>
                        <motion.h2 
                            variants={itemVariants}
                            className="text-4xl md:text-5xl font-bold text-primary font-serif mt-3"
                        >
                            Our Core Values
                        </motion.h2>
                    </motion.div>

                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {values.map((value, idx) => (
                            <motion.div
                                key={idx}
                                variants={scaleVariants}
                                whileHover={{ 
                                    y: -15,
                                    boxShadow: "0 25px 50px rgba(15, 42, 74, 0.2)"
                                }}
                                className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-secondary relative overflow-hidden group cursor-pointer"
                            >
                                {/* Animated Background Pattern */}
                                <motion.div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                                    initial={{ scale: 0, rotate: 0 }}
                                    whileHover={{ scale: 1, rotate: 180 }}
                                    transition={{ duration: 0.6 }}
                                    style={{
                                        background: "radial-gradient(circle at center, rgba(253, 185, 19, 0.1) 0%, transparent 70%)"
                                    }}
                                />
                                
                                <motion.div 
                                    className="bg-secondary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4 relative z-10"
                                    animate={{
                                        rotate: [0, 360],
                                    }}
                                    transition={{
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    whileHover={{ 
                                        scale: 1.2,
                                        backgroundColor: "rgba(253, 185, 19, 0.3)"
                                    }}
                                >
                                    <value.icon className="text-secondary" size={32} />
                                </motion.div>
                                
                                <h3 className="text-xl font-bold text-primary mb-3 relative z-10 group-hover:text-secondary transition-colors">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm relative z-10">{value.desc}</p>
                                
                                {/* Corner Accent */}
                                <motion.div
                                    className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary/5 rounded-full"
                                    initial={{ scale: 0 }}
                                    whileHover={{ scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>

                {/* Enhanced Legacy Section */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-24"
                >
                    <motion.div 
                        whileHover={{ scale: 1.01 }}
                        className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
                    >
                        {/* Animated Background Elements */}
                        {[...Array(10)].map((_, i) => (
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
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex items-center mb-6 relative z-10"
                        >
                            <motion.div
                                animate={floatingAnimation}
                            >
                                <Award className="mr-4 text-secondary" size={48} />
                            </motion.div>
                            <h2 className="text-3xl md:text-4xl font-bold font-serif">A Brief History & Our Legacy</h2>
                        </motion.div>
                        
                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-6 text-white/95 text-lg leading-relaxed relative z-10"
                        >
                            {[
                                "Our institution is a dream cherished where some educationists steered the ship of our trust as founders and carried forward the tradition to establish an educational and cultural centre of our own trust in this metropolitan city of Bengaluru where we could expand our service in the cause of education.",
                                <span>The dream of our service-minded elders became true vision wherein our respectful salutation goes to <strong className="text-secondary">Sri Cadambi Srinivasachar</strong>, who was a guiding force behind all these achievements.</span>
                            ].map((text, idx) => (
                                <motion.p key={idx} variants={itemVariants}>
                                    {text}
                                </motion.p>
                            ))}
                            
                            <motion.div 
                                variants={scaleVariants}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 my-6"
                            >
                                <h3 className="text-2xl font-bold mb-4 text-secondary">Sri Cadambi Srinivasachar</h3>
                                <motion.div 
                                    variants={containerVariants}
                                    className="space-y-3"
                                >
                                    {[
                                        "The journey goes like this from the budding stage to the present blossoming stage. The dream of our service minded elders became true vision wherein our respectful salutation goes to Sri. Cadambi Srinivasachar, who was a guiding force behind all these achievements. Sri C Srinivasachar was born at Chichurukanahalli. He was born to orthodox parents, Sri Venkatachar and Smt Lakshamma. He graduated in B.A Hons from Mysore University with distinction and joined as a teacher. Further continued his education, passed LLB and LCE securing 2nd Rank from Madras University.",
                                        <span>Sri Cadambi Srinivasachar joined as an engineer in Bombay province and retired as a superintendent engineer in 1917. Later on, worked as chief engineer for Mysore province. For his great service to Mysore he was awarded <strong className="text-secondary">"Rajasabha Bhushana"</strong> by Sri. Krishna Raja Wodeyar the then king of Mysore.</span>,
                                        "Though Cadambi Srinivasachar was an engineer, was also well-versed in Sanskrit and deeply studied Upanishads and great epics. He has widely travelled all over the world. Being a philanthropist, he generously donated money to many charitable institutions, organizations and temples."
                                    ].map((text, idx) => (
                                        <motion.p key={idx} variants={itemVariants}>
                                            {text}
                                        </motion.p>
                                    ))}
                                </motion.div>
                            </motion.div>
                            
                            {[
                                <span>With a vision to promote educational facility, he along with his friends Diwan Bahadur Sri K R Seshachar, Dr. K Srinivasachar, Sri K Narayan Iyengar (Executive Engineer), Sri K Narayana Iyengar (Head Master), Dr. K Krishna Iyengar, Amaldar Sri K Vendanth Iyengar started <strong className="text-secondary">The Kalkunte Education Trust</strong>.</span>,
                                "The mission was carried forward by Late Dr.K Krishnamurthy, was able to secure a site in the city. At the same time Prof C Rangachar, also wanted to establish an educational institution. Late Sri. K Narayan Iyengar, Late Sri. K N Srinivasamurthy, Late Sri K S Srinivasamurthy, Late Sri. K S Murthy, Late Sri. K N Sheshadri, Sri. A R Ramachar and many more elders who have put their utmost efforts to set forth the school. Well, this tradition is continued to this day with an enthusiastic constellation of present enterprising trust members and their progressive ideas in the improvement of the institution. Now, the institution stands high with an allround development. To emphasize on the above points, the institution has come a long way from a humble beginning under the guidance of educationists and visionaries belonging to Kalkunte village.",
                                <p className="text-xl font-bold text-secondary">This tradition continues to this day with an enthusiastic constellation of present enterprising trust members and their progressive ideas in the improvement of the institution.</p>,
                                "The institution has established itself in the beginning in the State Stream comprising 8th to 10th standards and the ICSE stream which runs from 1st to 10th standard. The ICSE stream has a successful permanent affiliation to ICSE board, New Delhi and the state board to the Karnataka Secondary Education Board. Well, there was no turning back in the results of ICSE stream Board Exams and every year ICSE high school has secured 100% results with many distinctions in the 10th Board exams. The state high school does not lag behind in securing 98% results in the SSLC board exams. The initial start has emerged to a well dimensional school which caters education in both ICSE and state syllabi streams at an economical fee structure.",
                                "Though the results were excellent at the board exams, students were finding it difficult to pursue their Pre-University education. The management proposed to start Pre-university College with a vision to provide the highest quality educational programme that highlights value learning, self-worth, quality, performance among students and staff and transition of students to productive and responsible participation in society at large. Their main mission is to provide young citizens with quality education, so that they imbibe the cardinal virtues of faith, fidelity and fortitude. Thus S.Cadambi Independent Pre-University college was established in the year 2007 with a meager strength of 10 students, which has now reached 400. The college functions in a separate wing with well furnished labs, classrooms and qualified faculty, apart from academic excellence encouragement is given to extra-curricular activities, sports, NCC, Scouts. In addition, an integrated programme for students aspiring to take up national level competitive examinations is also conducted",
                                "The dedicated teaching and non-teaching staff under the guidance of able management are extending their fullest co-operation in the implementation of autonomy in its true spirit."
                            ].map((text, idx) => (
                                <motion.p key={idx} variants={itemVariants}>
                                    {text}
                                </motion.p>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.section>

                {/* Enhanced Timeline */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-24"
                >
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <motion.span 
                            variants={itemVariants}
                            className="text-secondary font-bold tracking-widest uppercase text-sm"
                        >
                            Our Journey
                        </motion.span>
                        <motion.h2 
                            variants={itemVariants}
                            className="text-4xl md:text-5xl font-bold text-primary font-serif mt-3"
                        >
                            Milestones
                        </motion.h2>
                    </motion.div>

                    <div className="relative">
                        {/* Animated Timeline Line */}
                        <motion.div 
                            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-secondary via-primary to-secondary hidden md:block"
                            initial={{ height: 0 }}
                            whileInView={{ height: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />

                        {milestones.map((milestone, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: idx * 0.2, duration: 0.8 }}
                                className={`flex items-center mb-12 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                                    <motion.div 
                                        whileHover={{ 
                                            scale: 1.05,
                                            boxShadow: "0 20px 40px rgba(15, 42, 74, 0.2)"
                                        }}
                                        className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden group cursor-pointer"
                                    >
                                        {/* Animated Background */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-secondary/0 to-secondary/0"
                                            whileHover={{ 
                                                background: "linear-gradient(to right, rgba(253, 185, 19, 0.05), rgba(253, 185, 19, 0.1))"
                                            }}
                                        />
                                        
                                        <motion.span 
                                            whileHover={{ scale: 1.1 }}
                                            className="inline-block bg-secondary text-primary font-bold px-4 py-2 rounded-full text-sm mb-3 relative z-10"
                                        >
                                            {milestone.year}
                                        </motion.span>
                                        <p className="text-gray-700 leading-relaxed relative z-10">{milestone.event}</p>
                                        
                                        {/* Hover Icon */}
                                        <motion.div
                                            className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100"
                                            initial={{ rotate: 0 }}
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <Zap className="text-secondary" size={24} />
                                        </motion.div>
                                    </motion.div>
                                </div>
                                
                                {/* Timeline Dot */}
                                <motion.div 
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.2 + 0.4, type: "spring" }}
                                    className="hidden md:flex w-8 h-8 bg-secondary rounded-full border-4 border-white shadow-lg z-10 shrink-0 relative"
                                >
                                    <motion.div
                                        className="absolute inset-0 rounded-full bg-secondary"
                                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                </motion.div>
                                
                                <div className="flex-1"></div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Enhanced Management Team */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-24"
                >
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <motion.span 
                            variants={itemVariants}
                            className="text-secondary font-bold tracking-widest uppercase text-sm"
                        >
                            The Kalkunte Education Trust
                        </motion.span>
                        <motion.h2 
                            variants={itemVariants}
                            className="text-4xl md:text-5xl font-bold text-primary font-serif mt-3"
                        >
                            Management - K.E.T
                        </motion.h2>
                    </motion.div>

                    {/* Leadership */}
                    <div className="mb-16">
                        <motion.h3 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold text-primary mb-8 text-center font-serif"
                        >
                            Leadership
                        </motion.h3>
                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        >
                            {managementLeadership.map((member, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={scaleVariants}
                                    whileHover={{ y: -10 }}
                                    className="group relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer"
                                >
                                    <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${member.image})` }}>
                                        <motion.div 
                                            className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"
                                            initial={{ opacity: 0.6 }}
                                            whileHover={{ opacity: 0.9 }}
                                            transition={{ duration: 0.3 }}
                                        />

                                        <motion.div 
                                            className="absolute bottom-0 left-0 right-0 p-6 text-white"
                                            initial={{ y: 20 }}
                                            whileHover={{ y: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <motion.div
                                                initial={{ y: 30, opacity: 0 }}
                                                whileHover={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.3, delay: 0.1 }}
                                            >
                                                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                                                <p className="text-secondary font-semibold text-lg mb-2">{member.role}</p>
                                                {member.qualification && <p className="text-white/90 text-sm">{member.qualification}</p>}
                                            </motion.div>
                                        </motion.div>

                                        <motion.div 
                                            className="absolute top-4 right-4 bg-secondary p-3 rounded-full"
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileHover={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3 }}
                                            animate={{ rotate: 360 }}
                                            whileInView={{ rotate: 0 }}
                                        >
                                            <Crown className="text-primary" size={24} />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Executive Team */}
                    <div className="mb-16">
                        <motion.h3 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold text-primary mb-8 text-center font-serif"
                        >
                            Executive Team
                        </motion.h3>
                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        >
                            {executiveTeam.map((member, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={scaleVariants}
                                    whileHover={{ y: -10 }}
                                    className="group relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer"
                                >
                                    <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${member.image})` }}>
                                        <motion.div 
                                            className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"
                                            initial={{ opacity: 0.6 }}
                                            whileHover={{ opacity: 0.9 }}
                                            transition={{ duration: 0.3 }}
                                        />

                                        <motion.div 
                                            className="absolute bottom-0 left-0 right-0 p-6 text-white"
                                            initial={{ y: 20 }}
                                            whileHover={{ y: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <motion.div
                                                initial={{ y: 30, opacity: 0 }}
                                                whileHover={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.3, delay: 0.1 }}
                                            >
                                                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                                                <p className="text-secondary font-semibold text-lg mb-2">{member.role}</p>
                                                {member.qualification && <p className="text-white/80 text-sm">{member.qualification}</p>}
                                            </motion.div>
                                        </motion.div>

                                        <motion.div 
                                            className="absolute top-4 right-4 bg-primary p-3 rounded-full"
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileHover={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Star className="text-secondary" size={24} />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Board Members */}
                    <div>
                        <motion.h3 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold text-primary mb-8 text-center font-serif"
                        >
                            Board Members
                        </motion.h3>
                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                        >
                            {boardMembers.map((member, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={scaleVariants}
                                    whileHover={{ y: -10 }}
                                    className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
                                >
                                    <div className="relative h-80 bg-cover bg-center" style={{ backgroundImage: `url(${member.image})` }}>
                                        <motion.div 
                                            className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"
                                            initial={{ opacity: 0.6 }}
                                            whileHover={{ opacity: 0.9 }}
                                            transition={{ duration: 0.3 }}
                                        />

                                        <motion.div 
                                            className="absolute bottom-0 left-0 right-0 p-5 text-white"
                                            initial={{ y: 15 }}
                                            whileHover={{ y: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <motion.div
                                                initial={{ y: 20, opacity: 0 }}
                                                whileHover={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.3, delay: 0.075 }}
                                            >
                                                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                                <p className="text-secondary font-semibold">{member.role}</p>
                                            </motion.div>
                                        </motion.div>

                                        <motion.div 
                                            className="absolute top-3 right-3 bg-secondary p-2 rounded-full"
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileHover={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Users className="text-primary" size={20} />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.section>

                {/* Enhanced Administrator */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl shadow-2xl overflow-hidden"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <motion.div 
                                className="relative h-72 md:h-80 lg:h-[420px] overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.6 }}
                            >
                                <img
                                    src={Pice11}
                                    alt="Administrator"
                                    className="absolute inset-0 w-full h-full object-cover lg:object-contain"
                                />
                                <motion.div 
                                    className="absolute inset-0 bg-primary/25"
                                    whileHover={{ opacity: 0.1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>

                            <motion.div 
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="p-8 lg:p-10 text-white flex items-center"
                            >
                                <div>
                                    <div className="flex items-center mb-6">
                                        <motion.div
                                            animate={floatingAnimation}
                                            className="bg-secondary p-4 rounded-2xl mr-4"
                                        >
                                            <Award className="text-primary" size={48} />
                                        </motion.div>
                                        <div>
                                            <span className="text-secondary font-bold tracking-widest uppercase text-sm">
                                                Leadership
                                            </span>
                                            <h2 className="text-4xl font-bold font-serif">Administrator</h2>
                                        </div>
                                    </div>
                                    <motion.h3 
                                        initial={{ x: -20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                        className="text-3xl font-bold mb-3"
                                    >
                                        Dr. S.S Rajan
                                    </motion.h3>
                                    <motion.p 
                                        initial={{ x: -20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 }}
                                        className="text-xl text-white/90 mb-4"
                                    >
                                        Administrator
                                    </motion.p>
                                    <motion.p 
                                        initial={{ x: -20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 }}
                                        className="text-lg text-white/80"
                                    >
                                        MA (Economics), Ph.D
                                    </motion.p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.section>

                {/* Enhanced Closing Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-3xl p-10 border-2 border-secondary/20 relative overflow-hidden"
                    >
                        {/* Decorative Quotes */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute top-4 left-4 text-secondary/20 text-6xl font-serif"
                        >
                            "
                        </motion.div>
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute bottom-4 right-4 text-secondary/20 text-6xl font-serif"
                        >
                            "
                        </motion.div>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl text-gray-700 leading-relaxed italic font-medium relative z-10"
                        >
                            "The dedicated teaching and non-teaching staff under the guidance of able management are extending their fullest co-operation in the implementation of autonomy in its true spirit, nurturing the next generation of leaders, thinkers, and responsible citizens."
                        </motion.p>
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: 64 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="mt-6 mx-auto h-1 bg-secondary rounded-full"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;