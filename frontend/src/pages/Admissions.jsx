import React, { useState, useRef  } from 'react';
import { motion, useScroll,useTransform } from 'framer-motion';
import { FileText, Users, FolderOpen, CreditCard, Phone, Mail, MapPin, Clock, CheckCircle, Sparkles, ArrowRight, Calendar, Award,  School,GraduationCap  } from 'lucide-react';
import { sendContact } from '../utils/sendContact';

const Admissions = () => {
    const [formData, setFormData] = useState({
        parentName: '',
        phone: '',
        email: '',
        childName: '',
        grade: '',
        message: ''
    });

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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await sendContact({
                section: 'admissions',
                name: formData.parentName,
                email: formData.email,
                phone: formData.phone,
                message: formData.message,
                extra: { childName: formData.childName, grade: formData.grade }
            });
            alert('Admission enquiry sent. We will contact you soon.');
            setFormData({ parentName: '', phone: '', email: '', childName: '', grade: '', message: '' });
        } catch (err) {
            console.error(err);
            alert('Failed to send enquiry. Please try again later.');
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16">
                    {/* Left Column - Process Section */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <motion.div
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="bg-gradient-to-br from-secondary to-yellow-400 p-3 rounded-xl"
                                >
                                    <Calendar className="text-primary" size={28} />
                                </motion.div>
                                <h2 className="text-3xl font-bold text-primary font-serif">Admission Process</h2>
                            </div>

                            <div className="space-y-5">
                                {steps.map((step, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.15, duration: 0.6 }}
                                        whileHover={{ x: 10, scale: 1.02 }}
                                        className="relative"
                                    >
                                        {/* Connection Line */}
                                        {idx < steps.length - 1 && (
                                            <motion.div
                                                initial={{ height: 0 }}
                                                whileInView={{ height: "100%" }}
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.15 + 0.3, duration: 0.4 }}
                                                className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-secondary to-primary/20 z-0"
                                            />
                                        )}

                                        <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group relative z-10">
                                            <motion.div
                                                className={`bg-gradient-to-br ${step.color} p-4 rounded-xl text-white shrink-0 relative`}
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <step.icon size={24} />
                                                <motion.div
                                                    className="absolute -top-2 -right-2 bg-secondary text-primary rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold"
                                                    initial={{ scale: 0 }}
                                                    whileInView={{ scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: idx * 0.15 + 0.5, type: "spring" }}
                                                >
                                                    {idx + 1}
                                                </motion.div>
                                            </motion.div>

                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                                                    {step.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                                            </div>

                                            <motion.div
                                                className="opacity-0 group-hover:opacity-100 transition-opacity"
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            >
                                                <ArrowRight className="text-secondary" size={20} />
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Enhanced Inquiry Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:sticky lg:top-24"
                    >
                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            className="bg-white p-8 rounded-2xl shadow-2xl border-t-4 border-secondary relative overflow-hidden"
                        >
                            {/* Decorative Elements */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute -top-16 -right-16 w-32 h-32 border-4 border-secondary/10 rounded-full"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                className="absolute -bottom-16 -left-16 w-32 h-32 border-4 border-primary/10 rounded-full"
                            />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-2">
                                    <motion.div
                                        animate={{
                                            y: [0, -10, 0],
                                            rotate: [0, 10, -10, 0]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <Sparkles className="text-secondary" size={28} />
                                    </motion.div>
                                    <h2 className="text-3xl font-bold text-primary font-serif">Admission Enquiry</h2>
                                </div>
                                <p className="text-gray-600 mb-6 text-sm">Fill out the form below and our admissions team will contact you shortly.</p>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 }}
                                        >
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Parent's Name *</label>
                                            <motion.input
                                                whileFocus={{ scale: 1.02 }}
                                                type="text"
                                                name="parentName"
                                                value={formData.parentName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all text-sm"
                                                placeholder="Enter your name"
                                                required
                                            />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.15 }}
                                        >
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                                            <motion.input
                                                whileFocus={{ scale: 1.02 }}
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all text-sm"
                                                placeholder="+91 9876543210"
                                                required
                                            />
                                        </motion.div>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                                        <motion.input
                                            whileFocus={{ scale: 1.02 }}
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all text-sm"
                                            placeholder="your.email@example.com"
                                            required
                                        />
                                    </motion.div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.25 }}
                                        >
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Child's Name *</label>
                                            <motion.input
                                                whileFocus={{ scale: 1.02 }}
                                                type="text"
                                                name="childName"
                                                value={formData.childName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all text-sm"
                                                placeholder="Enter child's name"
                                                required
                                            />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Grade Applying For *</label>
                                            <motion.select
                                                whileFocus={{ scale: 1.02 }}
                                                name="grade"
                                                value={formData.grade}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all text-sm"
                                                required
                                            >
                                                <option value="">Select Grade</option>
                                                <option value="preschool">Pre-School (Playhome, Pre KG, LKG, UKG)</option>
                                                <option value="primary">Primary (Grade 1-5)</option>
                                                <option value="secondary">Secondary (Grade 6-10)</option>
                                                <option value="pu">PU College (Grade 11-12)</option>
                                            </motion.select>
                                        </motion.div>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.35 }}
                                    >
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Message / Queries</label>
                                        <motion.textarea
                                            whileFocus={{ scale: 1.02 }}
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all resize-none text-sm"
                                            rows="4"
                                            placeholder="Any specific questions or requirements?"
                                        />
                                    </motion.div>

                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full bg-gradient-to-r from-secondary to-yellow-400 hover:from-yellow-400 hover:to-secondary text-primary font-bold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center gap-2"
                                    >
                                        Submit Enquiry
                                        <motion.div
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            <ArrowRight size={20} />
                                        </motion.div>
                                    </motion.button>
                                </form>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* NEW DESIGN - Eligibility Criteria Section */}
                <div className='my-12'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="text-center m-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif mb-2">
                                Eligibility Criteria
                            </h2>
                            <div className="w-24 h-1 bg-secondary mx-auto mb-3"></div>
                            <p className="text-gray-600">
                                Please ensure your child meets the age requirements for admission
                            </p>
                        </div>

                        <div className="l p-6 sm:p-8  ">
                            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                                {eligibility.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        whileHover={{ scale: 1.03, y: -5 }}
                                        className="bg-primary rounded-xl p-5 relative overflow-hidden group cursor-pointer"
                                    >
                                        {/* Decorative corner */}
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/10 rounded-bl-full"></div>

                                        <div className="relative z-10">
                                            <div className="flex items-start justify-between mb-3">
                                                <motion.div
                                                    className="bg-secondary rounded-full w-10 h-10 flex items-center justify-center shrink-0"
                                                    whileHover={{ rotate: 360 }}
                                                    transition={{ duration: 0.6 }}
                                                >
                                                    <CheckCircle className="text-primary" size={20} />
                                                </motion.div>
                                                {item.required && (
                                                    <span className="text-secondary text-xs font-bold uppercase tracking-wide">
                                                        Required
                                                    </span>
                                                )}
                                            </div>

                                            <h3 className="text-white font-bold text-lg mb-2">
                                                {item.grade}
                                            </h3>
                                            <p className="text-white/90 text-sm mb-1">
                                                {item.age}
                                            </p>
                                            <p className="text-white/70 text-xs">
                                                {item.date}
                                            </p>
                                        </div>

                                        {/* Hover effect */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/0 group-hover:from-secondary/20 group-hover:to-secondary/10"
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Required Documents Section */}
                <div className='my-24'>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif mb-3">Required Documents</h2>
                        <div className="w-24 h-1 bg-secondary mx-auto mb-4"></div>
                        <p className="text-gray-600 text-lg">Please prepare the following documents for admission</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {documents.map((doc, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-[#1a3a5f] rounded-2xl p-6 relative overflow-hidden group"
                            >
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/10 rounded-full"></div>
                                
                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center">
                                            <CheckCircle className="text-primary" size={24} />
                                        </div>
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

                {/* Additional CTA Section */}
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

                    <motion.h3
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4 font-serif relative z-10"
                    >
                        Need Help with Admissions?
                    </motion.h3>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-white/90 max-w-2xl mx-auto mb-8 relative z-10"
                    >
                        Visit our campus for a guided tour or speak with our admissions counselor to learn more about our programs
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
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-secondary text-primary px-8 py-4 rounded-lg font-bold shadow-2xl hover:shadow-3xl transition-all inline-flex items-center gap-2"
                        >
                            <Phone size={20} />
                            Call Us Now
                        </motion.a>
                        <motion.a
                            href="mailto:scadambividyakendra@gmail.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all inline-flex items-center gap-2"
                        >
                            <Mail size={20} />
                            Email Us
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Admissions;