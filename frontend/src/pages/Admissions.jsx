import React, { useRef  } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FileText, Users, FolderOpen, CreditCard, Phone, Mail, MapPin, Clock, CheckCircle, Sparkles, ArrowRight, Calendar, School, GraduationCap, BookOpen, Trophy  } from 'lucide-react';

const Admissions = () => {
    const steps = [
        {
            icon: FileText,
            title: "Submit Enquiry",
            desc: "Fill out the online enquiry form or visit our admissions office to express your interest.",
            color: "from-blue-400 to-blue-600"
        },
        {
            icon: Users,
            title: "Campus Visit / Interview",
            desc: "Schedule a campus tour and interaction with the principal to understand our educational philosophy.",
            color: "from-green-400 to-green-600"
        },
        {
            icon: FolderOpen,
            title: "Application / Documentation",
            desc: "Submit the admission application form along with required documents (birth certificate, transfer certificate, photographs, etc.).",
            color: "from-purple-400 to-purple-600"
        },
        {
            icon: CreditCard,
            title: "Enrollment / Fee Payment",
            desc: "Complete the admission process by paying the fees and receiving the enrollment confirmation.",
            color: "from-orange-400 to-orange-600"
        }
    ];

    const contactInfo = [
        { icon: Phone, text: "+91 80 2346 1685", label: "Phone" },
        { icon: Mail, text: "scadambividyakendra@gmail.com", label: "Email" },
        { icon: MapPin, text: "Malleswaram, Bangalore", label: "Address" },
        { icon: Clock, text: "Mon - Sat: 9:00 AM - 4:00 PM", label: "Office Hours" }
    ];

    const eligibility = [
        { grade: "Pre-Nursery", age: "2.5+ years", date: "as of June 1st", required: true },
        { grade: "LKG/UKG", age: "3.5+ years / 4.5+ years", date: "as of June 1st", required: true },
        { grade: "Grade 1", age: "5.5+ years", date: "as of June 1st", required: true },
        { grade: "Transfer Students", age: "Valid TC Required", date: "From Previous School", required: true }
    ];

    const documents = [
        { name: "Birth Certificate", detail: "Original + Photocopy", required: true },
        { name: "Aadhar Card Copy (Child & Parents)", detail: "", required: true },
        { name: "Recent Passport Size Photographs (4 copies)", detail: "", required: true },
        { name: "Address Proof (Ration Card/Electricity Bill)", detail: "", required: true },
        { name: "Medical Certificate", detail: "", required: true },
        { name: "Previous School Records", detail: "If applicable", required: false }
    ];

    const whyChooseUs = [
        {
            icon: BookOpen,
            title: "Quality Education",
            desc: "Comprehensive curriculum aligned with ICSE/State Board standards"
        },
        {
            icon: Trophy,
            title: "Holistic Development",
            desc: "Focus on academics, sports, arts, and character building"
        },
        {
            icon: Users,
            title: "Experienced Faculty",
            desc: "Dedicated teachers committed to student success"
        },
        {
            icon: School,
            title: "Modern Infrastructure",
            desc: "Well-equipped classrooms, labs, and sports facilities"
        }
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
                            Admissions Open 2026-2027
                        </motion.div>

                        <motion.h1
                            className="text-5xl md:text-6xl font-bold mb-6"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            Join Our  {' '}
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
                                Family
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
                            Begin your child's journey to excellence with quality education and holistic development
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
                {/* Quick Contact Info */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
                >
                    {contactInfo.map((info, idx) => (
                        <motion.div
                            key={idx}
                            variants={scaleVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-white rounded-xl shadow-lg p-5 text-center relative overflow-hidden group cursor-pointer"
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/0 group-hover:from-secondary/10 group-hover:to-secondary/5"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                            />

                            <motion.div
                                className="bg-gradient-to-br from-primary/10 to-primary/5 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                <info.icon className="text-primary" size={24} />
                            </motion.div>
                            <p className="text-xs text-gray-500 font-semibold mb-1">{info.label}</p>
                            <p className="text-sm text-gray-800 font-medium">{info.text}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Why Choose Us Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif mb-2">
                            Why Choose Us
                        </h2>
                        <div className="w-24 h-1 bg-secondary mx-auto mb-3"></div>
                        <p className="text-gray-600 text-lg">
                            Excellence in education for over four decades
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whyChooseUs.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                />

                                <motion.div
                                    className="bg-gradient-to-br from-secondary to-yellow-400 w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <item.icon className="text-primary" size={28} />
                                </motion.div>

                                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Admission Process Section - Enhanced Full Width */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="bg-gradient-to-br from-secondary to-yellow-400 p-3 rounded-xl"
                            >
                                <Calendar className="text-primary" size={32} />
                            </motion.div>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif">
                                Admission Process
                            </h2>
                        </div>
                        <div className="w-24 h-1 bg-secondary mx-auto mb-3"></div>
                        <p className="text-gray-600 text-lg">
                            Simple and transparent admission steps
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15, duration: 0.6 }}
                                whileHover={{ y: -10, scale: 1.03 }}
                                className="relative"
                            >
                                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group h-full relative overflow-hidden">
                                    {/* Decorative Background */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10"
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                    />

                                    {/* Step Number Badge */}
                                    <motion.div
                                        className="absolute top-4 right-4 bg-secondary text-primary rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shadow-lg"
                                        initial={{ scale: 0, rotate: -180 }}
                                        whileInView={{ scale: 1, rotate: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.15 + 0.3, type: "spring" }}
                                    >
                                        {idx + 1}
                                    </motion.div>

                                    {/* Icon */}
                                    <motion.div
                                        className={`bg-gradient-to-br ${step.color} p-5 rounded-2xl text-white inline-flex mb-5 relative z-10`}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <step.icon size={32} />
                                    </motion.div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                            {step.desc}
                                        </p>

                                        {/* Arrow Indicator */}
                                        <motion.div
                                            className="flex items-center justify-end text-secondary opacity-0 group-hover:opacity-100 transition-opacity"
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            <span className="text-sm font-semibold mr-2">Next</span>
                                            <ArrowRight size={18} />
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Connector Arrow - Desktop Only */}
                                {idx < steps.length - 1 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.15 + 0.5 }}
                                        className="hidden lg:block absolute top-1/2 -right-3 z-20"
                                    >
                                        <ArrowRight className="text-secondary" size={24} />
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Eligibility Criteria Section */}
                <div className='my-20'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif mb-2">
                                Eligibility Criteria
                            </h2>
                            <div className="w-24 h-1 bg-secondary mx-auto mb-3"></div>
                            <p className="text-gray-600 text-lg">
                                Please ensure your child meets the age requirements for admission
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {eligibility.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="bg-gradient-to-br from-[#0F2A4A] to-[#1a3a5f] rounded-2xl p-6 relative overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300"
                                >
                                    {/* Decorative Elements */}
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-bl-full"></div>
                                    <motion.div
                                        className="absolute -bottom-8 -right-8 w-24 h-24 bg-secondary/5 rounded-full"
                                        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                    />

                                    <div className="relative z-10">
                                        <div className="flex items-start justify-between mb-4">
                                            <motion.div
                                                className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center shrink-0"
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.6 }}
                                            >
                                                <CheckCircle className="text-primary" size={24} />
                                            </motion.div>
                                            {item.required && (
                                                <span className="text-secondary text-xs font-bold uppercase tracking-wide">
                                                    Required
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="text-white font-bold text-xl mb-3">
                                            {item.grade}
                                        </h3>
                                        <p className="text-white/90 text-base mb-2 font-medium">
                                            {item.age}
                                        </p>
                                        <p className="text-white/70 text-sm">
                                            {item.date}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Required Documents Section */}
                <div className='my-20'>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif mb-3">
                            Required Documents
                        </h2>
                        <div className="w-24 h-1 bg-secondary mx-auto mb-4"></div>
                        <p className="text-gray-600 text-lg">
                            Please prepare the following documents for admission
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {documents.map((doc, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="bg-gradient-to-br from-[#0F2A4A] to-[#1a3a5f] rounded-2xl p-6 relative overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-300"
                            >
                                {/* Decorative Elements */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/10 rounded-full"></div>
                                <motion.div
                                    className="absolute -bottom-6 -left-6 w-20 h-20 bg-secondary/5 rounded-full"
                                    animate={{ scale: [1, 1.3, 1] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: idx * 0.2 }}
                                />
                                
                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-4">
                                        <motion.div 
                                            className="bg-secondary rounded-full w-14 h-14 flex items-center justify-center"
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <CheckCircle className="text-primary" size={26} />
                                        </motion.div>
                                        <span className={`text-xs font-bold uppercase px-3 py-1 rounded-full ${
                                            doc.required ? 'bg-secondary text-primary' : 'bg-white/10 text-white/70'
                                        }`}>
                                            {doc.required ? 'REQUIRED' : 'IF APPLICABLE'}
                                        </span>
                                    </div>
                                    <h3 className="text-white font-bold text-lg mb-2">{doc.name}</h3>
                                    {doc.detail && <p className="text-white/70 text-sm">{doc.detail}</p>}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Enhanced CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-br from-[#0F2A4A] via-[#1a3a5f] to-[#0F2A4A] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl"
                >
                    {/* Animated Background Pattern */}
                    {[...Array(20)].map((_, i) => (
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

                    {/* Gradient Orbs */}
                    <motion.div
                        className="absolute top-0 left-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            x: [0, 50, 0],
                            y: [0, 30, 0]
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/15 rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.3, 1],
                            x: [0, -50, 0],
                            y: [0, -30, 0]
                        }}
                        transition={{ duration: 10, repeat: Infinity }}
                    />

                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="inline-flex items-center bg-secondary text-primary px-6 py-2 rounded-full font-semibold mb-6 shadow-lg relative z-10"
                    >
                        <Sparkles className="mr-2" size={20} />
                        Get Started Today
                    </motion.div>

                    <motion.h3
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4 font-serif relative z-10"
                    >
                        Ready to Enroll Your Child?
                    </motion.h3>
                    
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 relative z-10"
                    >
                        Visit our campus for a guided tour or speak with our admissions counselor to learn more about our programs and begin your child's journey to excellence
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-4 justify-center relative z-10"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <motion.a
                            href="tel:+918023461685"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-secondary text-primary px-8 py-4 rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all inline-flex items-center gap-2"
                        >
                            <Phone size={20} />
                            Call Us Now
                        </motion.a>
                        <motion.a
                            href="mailto:scadambividyakendra@gmail.com"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all inline-flex items-center gap-2"
                        >
                            <Mail size={20} />
                            Email Us
                        </motion.a>
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all inline-flex items-center gap-2"
                        >
                            <MapPin size={20} />
                            Visit Campus
                        </motion.a>
                    </motion.div>

                    {/* Additional Info */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="mt-8 pt-6 border-t border-white/20 relative z-10"
                    >
                        <p className="text-white/80 text-sm">
                            Office Hours: Monday - Saturday, 9:00 AM - 4:00 PM
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Admissions;