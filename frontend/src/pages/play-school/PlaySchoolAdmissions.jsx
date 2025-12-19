import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Check, Mail, Phone, MapPin, Calendar, Users, BookOpen, Download, ChevronRight, School, Award, Clock, X } from 'lucide-react';

import img200 from "../../assets/play-school/Picture200.png"

const PlaySchoolAdmissions = () => {
    const [showProspectus, setShowProspectus] = useState(false);

    const admissionSteps = [
        {
            step: 1,
            icon: <Phone className="w-8 h-8" />,
            title: "Inquiry",
            description: "Contact us via phone, email, or visit our campus to learn more about our programs and admission process."
        },
        {
            step: 2,
            icon: <School className="w-8 h-8" />,
            title: "Campus Tour",
            description: "Schedule a visit to see our world-class facilities, meet our dedicated staff, and experience our nurturing environment."
        },
        {
            step: 3,
            icon: <FileText className="w-8 h-8" />,
            title: "Application",
            description: "Fill out the admission application form with all required details about your child."
        },
        {
            step: 4,
            icon: <BookOpen className="w-8 h-8" />,
            title: "Documentation",
            description: "Submit all required documents and complete the necessary formalities for enrollment."
        },
        {
            step: 5,
            icon: <Award className="w-8 h-8" />,
            title: "Enrollment",
            description: "Welcome to the Shishu Chaitanya family! Begin your child's exciting learning journey."
        }
    ];

    const documents = [
        { name: "Birth Certificate", required: true },
        { name: "Aadhar Card Copy (Child & Parents)", required: true },
        { name: "Recent Passport Size Photographs (4 copies)", required: true },
        { name: "Address Proof (Ration Card/Electricity Bill)", required: true },
        { name: "Medical Certificate", required: true },
        { name: "Previous School Records", required: false }
    ];

    const programs = [
        {
            title: "Play Home",
            age: "2.5 - 3 years",
            timing: "Monday to Friday",
            hours: "9:30 AM to 12:30 PM",
            icon: "🎈"
        },
        {
            title: "Pre-KG",
            age: "3 - 4 years",
            timing: "Monday to Friday",
            hours: "9:30 AM to 1:00 PM",
            icon: "🎨"
        },
        {
            title: "LKG",
            age: "4 - 5 years",
            timing: "Monday to Friday",
            hours: "9:30 AM to 1:30 PM",
            icon: "📚"
        },
        {
            title: "UKG",
            age: "5 - 6 years",
            timing: "Monday to Friday",
            hours: "9:30 AM to 1:30 PM",
            icon: "🌟"
        }
    ];

    const features = [
        { icon: <Users className="w-8 h-8" />, title: "Experienced Teachers", description: "Qualified and caring educators" },
        { icon: <BookOpen className="w-8 h-8" />, title: "Holistic Curriculum", description: "Comprehensive learning approach" },
        { icon: <School className="w-8 h-8" />, title: "Safe Environment", description: "CCTV monitored campus" },
        { icon: <Calendar className="w-8 h-8" />, title: "Regular Activities", description: "Engaging events & celebrations" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="min-h-screen pt-32 bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#0F2A4A] via-[#1a4070] to-[#0F2A4A] text-white py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 180, 360]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute top-10 left-10 w-64 h-64 bg-[#FDB913] rounded-full blur-3xl"
                    ></motion.div>
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            rotate: [360, 180, 0]
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute bottom-10 right-10 w-96 h-96 bg-[#FDB913] rounded-full blur-3xl"
                    ></motion.div>
                </div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="inline-block mb-8"
                        >
                            <div className="bg-[#FDB913] rounded-full p-6 shadow-2xl">
                                <School className="w-16 h-16 text-[#0F2A4A]" />
                            </div>
                        </motion.div>
                        
                        <h1 className="text-6xl font-bold mb-6">Admissions</h1>
                        
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "200px" }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="h-1 bg-[#FDB913] mx-auto mb-8"
                        ></motion.div>
                        
                        <p className="text-2xl text-[#FDB913] font-semibold mb-4">Join Our Learning Family</p>
                        <p className="text-xl max-w-4xl mx-auto text-white/90 leading-relaxed">
                            Enroll your child in a nurturing environment where learning is fun, engaging, and meaningful
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Prospectus Section */}
            <section className="py-20 -mt-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FDB913] to-yellow-600 rounded-3xl opacity-90 blur-sm"></div>
                        <div className="relative bg-gradient-to-br from-[#FDB913] to-yellow-500 rounded-3xl p-12 shadow-2xl border-4 border-white">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h2 className="text-4xl font-bold text-[#0F2A4A] mb-6">Prospectus</h2>
                                    <p className="text-lg text-[#0F2A4A] mb-6 leading-relaxed">
                                        Download our detailed prospectus to learn more about our programs, curriculum, 
                                        facilities, and admission process. Get complete information about Shishu Chaitanya 
                                        Pre-Nursery education.
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setShowProspectus(true)}
                                            className="inline-flex items-center bg-[#0F2A4A] hover:bg-[#1a4070] text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg"
                                        >
                                            <FileText className="w-5 h-5 mr-2" />
                                            View Prospectus
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="inline-flex items-center bg-white hover:bg-gray-100 text-[#0F2A4A] font-bold px-8 py-4 rounded-2xl transition-all shadow-lg"
                                        >
                                            <Download className="w-5 h-5 mr-2" />
                                            Download PDF
                                        </motion.button>
                                    </div>
                                </div>
                                <div className="relative">
                                    <motion.div
                                        whileHover={{ scale: 1.02, rotate: 2 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-white rounded-2xl p-4 shadow-2xl cursor-pointer"
                                        onClick={() => setShowProspectus(true)}
                                    >
                                        <img 
                                            src={img200} 
                                            alt="Prospectus Cover" 
                                            className="w-full h-auto rounded-xl"
                                        />
                                        <div className="absolute inset-0 bg-[#0F2A4A]/0 hover:bg-[#0F2A4A]/10 rounded-2xl transition-all flex items-center justify-center">
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                whileHover={{ scale: 1 }}
                                                className="bg-[#FDB913] p-4 rounded-full"
                                            >
                                                <FileText className="w-8 h-8 text-[#0F2A4A]" />
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">Why Choose Shishu Chaitanya?</h2>
                        <div className="w-32 h-1 bg-[#FDB913] mx-auto"></div>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="bg-gradient-to-br from-[#0F2A4A] to-[#1a4070] rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all group"
                            >
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="bg-[#FDB913] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#0F2A4A]"
                                >
                                    {feature.icon}
                                </motion.div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-[#FDB913]">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Available Programs */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">Available Programs</h2>
                        <div className="w-32 h-1 bg-[#FDB913] mx-auto mb-4"></div>
                        <p className="text-xl text-gray-600">Choose the right program for your child's age group</p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {programs.map((program, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border-2 border-transparent hover:border-[#FDB913]"
                            >
                                <div className="bg-gradient-to-br from-[#0F2A4A] to-[#1a4070] h-40 flex items-center justify-center relative overflow-hidden">
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.2, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className="text-8xl"
                                    >
                                        {program.icon}
                                    </motion.div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-[#0F2A4A] mb-4">{program.title}</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <Users className="w-5 h-5 text-[#FDB913] mr-3" />
                                            <span className="text-gray-700 font-semibold">Age: {program.age}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Calendar className="w-5 h-5 text-[#FDB913] mr-3" />
                                            <span className="text-gray-700">{program.timing}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="w-5 h-5 text-[#FDB913] mr-3" />
                                            <span className="text-gray-700">{program.hours}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Admission Process */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">Admission Process</h2>
                        <div className="w-32 h-1 bg-[#FDB913] mx-auto mb-4"></div>
                        <p className="text-xl text-gray-600">Simple steps to join our school</p>
                    </motion.div>

                    <div className="max-w-5xl mx-auto">
                        <div className="relative">
                            {/* Connection Line */}
                            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FDB913] to-[#0F2A4A] hidden lg:block"></div>

                            <div className="space-y-12">
                                {admissionSteps.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.15 }}
                                        className="flex items-start gap-8"
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                            className="relative z-10 bg-gradient-to-br from-[#FDB913] to-yellow-500 text-[#0F2A4A] w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-xl"
                                        >
                                            {item.step}
                                        </motion.div>
                                        <motion.div
                                            whileHover={{ scale: 1.02, x: 10 }}
                                            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 flex-1 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-[#FDB913]"
                                        >
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="bg-[#0F2A4A] text-[#FDB913] p-3 rounded-xl">
                                                    {item.icon}
                                                </div>
                                                <h3 className="text-2xl font-bold text-[#0F2A4A]">{item.title}</h3>
                                            </div>
                                            <p className="text-gray-700 leading-relaxed">{item.description}</p>
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Required Documents */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">Required Documents</h2>
                        <div className="w-32 h-1 bg-[#FDB913] mx-auto mb-4"></div>
                        <p className="text-xl text-gray-600">Please prepare the following documents for admission</p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-[#FDB913]/20"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {documents.map((doc, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        whileHover={{ x: 10, scale: 1.02 }}
                                        className="flex items-start gap-4 p-5 bg-gradient-to-br from-[#0F2A4A] to-[#1a4070] rounded-xl shadow-lg group"
                                    >
                                        <div className="bg-[#FDB913] rounded-full p-2 flex-shrink-0 group-hover:scale-110 transition-transform">
                                            <Check className="w-5 h-5 text-[#0F2A4A]" />
                                        </div>
                                        <div className="flex-1">
                                            <span className="text-white font-semibold">{doc.name}</span>
                                            {doc.required && (
                                                <span className="block text-[#FDB913] text-sm mt-1">Required</span>
                                            )}
                                            {!doc.required && (
                                                <span className="block text-gray-300 text-sm mt-1">If applicable</span>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact for Admissions */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F2A4A] via-[#1a4070] to-[#0F2A4A]"></div>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-96 h-96 bg-[#FDB913] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FDB913] rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
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
                        >
                            <FileText className="w-20 h-20 mx-auto mb-8 text-[#FDB913]" />
                        </motion.div>
                        
                        <h2 className="text-5xl font-bold mb-6 text-white">Ready to Apply?</h2>
                        <div className="w-32 h-1 bg-[#FDB913] mx-auto mb-8"></div>
                        <p className="text-2xl mb-12 text-white/90 leading-relaxed max-w-3xl mx-auto">
                            Contact our admissions office for more information or to schedule a campus visit
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            <motion.div
                                whileHover={{ y: -10, scale: 1.05 }}
                                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 hover:border-[#FDB913] transition-all"
                            >
                                <div className="bg-[#FDB913] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Phone className="w-8 h-8 text-[#0F2A4A]" />
                                </div>
                                <h3 className="font-bold text-xl mb-3 text-white">Call Us</h3>
                                <a href="tel:08023528888" className="text-[#FDB913] hover:text-yellow-300 text-lg font-semibold">
                                    080 23528888
                                </a>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -10, scale: 1.05 }}
                                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 hover:border-[#FDB913] transition-all"
                            >
                                <div className="bg-[#FDB913] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Mail className="w-8 h-8 text-[#0F2A4A]" />
                                </div>
                                <h3 className="font-bold text-xl mb-3 text-white">Email Us</h3>
                                <a 
                                    href="mailto:Shishuchaitanya2013@gmail.com" 
                                    className="text-[#FDB913] hover:text-yellow-300 text-sm font-semibold break-all"
                                >
                                    Shishuchaitanya2013@gmail.com
                                </a>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -10, scale: 1.05 }}
                                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 hover:border-[#FDB913] transition-all"
                            >
                                <div className="bg-[#FDB913] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <MapPin className="w-8 h-8 text-[#0F2A4A]" />
                                </div>
                                <h3 className="font-bold text-xl mb-3 text-white">Visit Us</h3>
                                <p className="text-white/90">
                                    #44, 1st Main, Maruthi Extension<br />
                                    Bangalore - 560021
                                </p>
                            </motion.div>
                        </div>

                        <motion.a
                            href="mailto:Shishuchaitanya2013@gmail.com?subject=Admission Inquiry"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center bg-[#FDB913] hover:bg-yellow-500 text-[#0F2A4A] font-bold px-10 py-5 rounded-2xl transition-all shadow-2xl text-xl"
                        >
                            Send Admission Inquiry
                            <ChevronRight className="ml-2 w-6 h-6" />
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            {/* Prospectus Modal */}
            <AnimatePresence>
                {showProspectus && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                        onClick={() => setShowProspectus(false)}
                    >
                        <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            whileHover={{ scale: 1.1 }}
                            className="absolute top-6 right-6 bg-[#FDB913] text-[#0F2A4A] p-3 rounded-full shadow-lg z-10"
                            onClick={() => setShowProspectus(false)}
                        >
                            <X className="w-8 h-8" />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="max-w-6xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-8">
                                <h3 className="text-3xl font-bold text-[#0F2A4A] mb-6 text-center">School Prospectus</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <img src="/api/placeholder/600/800" alt="Prospectus Page 1" className="w-full rounded-xl shadow-lg" />
                                    <img src="/api/placeholder/600/800" alt="Prospectus Page 2" className="w-full rounded-xl shadow-lg" />
                                </div>
                                <div className="mt-6 text-center">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center bg-[#0F2A4A] hover:bg-[#1a4070] text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg"
                                    >
                                        <Download className="w-5 h-5 mr-2" />
                                        Download Prospectus
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PlaySchoolAdmissions;