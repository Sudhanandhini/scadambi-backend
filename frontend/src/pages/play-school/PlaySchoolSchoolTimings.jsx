import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, AlertCircle, Coffee, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

const PlaySchoolSchoolTimings = () => {
    const timings = [
        {
            program: "Play Home",
            age: "2.5 - 3 years",
            weekday: {
                days: "Monday to Friday",
                time: "09:30 AM to 12:30 PM"
            },
            saturday: null,
            note: "Every Saturday will be a holiday",
            icon: "🎨"
        },
        {
            program: "Pre-KG",
            age: "3 - 4 years",
            weekday: {
                days: "Monday to Friday",
                time: "09:30 AM to 01:00 PM"
            },
            saturday: null,
            note: "Every 2nd and 4th SATURDAY will be a holiday",
            icon: "📚"
        },
        {
            program: "LKG and UKG",
            age: "4 - 6 years",
            weekday: {
                days: "Monday to Friday",
                time: "09:30 AM to 01:30 PM"
            },
            saturday: {
                time: "09:30 AM to 12:00 PM"
            },
            note: "Every 2nd and 4th saturday will be a holiday",
            icon: "🎓"
        }
    ];

    const guidelines = [
        {
            title: "Arrival Time",
            description: "Children should arrive 10 minutes before school starts to settle in comfortably",
            icon: <Clock className="w-6 h-6" />
        },
        {
            title: "Punctuality",
            description: "Please ensure punctuality for smooth operations and to not disturb ongoing classes",
            icon: <CheckCircle className="w-6 h-6" />
        },
        {
            title: "Pick-up Time",
            description: "Parents must pick up children on time. Late pickups may incur additional charges",
            icon: <Calendar className="w-6 h-6" />
        },
        {
            title: "Attendance",
            description: "Inform the school in advance in case of absence via phone call or written notice",
            icon: <AlertCircle className="w-6 h-6" />
        },
        {
            title: "Saturday Schedule",
            description: "Special timings apply for LKG and UKG on Saturdays (1st and 3rd Saturday only)",
            icon: <Calendar className="w-6 h-6" />
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
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
                                rotate: [0, 360],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="inline-block mb-8"
                        >
                            <div className="bg-[#FDB913] rounded-full p-6 shadow-2xl">
                                <Clock className="w-16 h-16 text-[#0F2A4A]" />
                            </div>
                        </motion.div>
                        
                        <h1 className="text-6xl font-bold mb-6">School Timings</h1>
                        
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "200px" }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="h-1 bg-[#FDB913] mx-auto mb-8"
                        ></motion.div>
                        
                        <p className="text-2xl text-[#FDB913] font-semibold mb-4">Class-wise Schedule</p>
                        <p className="text-xl max-w-4xl mx-auto text-white/90 leading-relaxed">
                            Our school timings are designed to provide optimal learning hours for different age groups
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Timings Cards */}
            <section className="py-20 -mt-10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {timings.map((timing, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ x: 10 }}
                                className="relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-[#0F2A4A] to-[#1a4070] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
                                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border-4 border-white group">
                                    <div className="md:flex">
                                        {/* Left Side - Program Info */}
                                        <div className="bg-gradient-to-br from-[#0F2A4A] to-[#1a4070] p-8 md:w-1/3 text-white relative overflow-hidden">
                                            <motion.div
                                                animate={{
                                                    y: [0, -10, 0],
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                                className="absolute top-4 right-4 text-6xl opacity-20"
                                            >
                                                {timing.icon}
                                            </motion.div>
                                            
                                            <div className="relative z-10">
                                                <div className="text-6xl mb-4">{timing.icon}</div>
                                                <h3 className="text-3xl font-bold mb-3">{timing.program}</h3>
                                                <div className="inline-block bg-[#FDB913] text-[#0F2A4A] px-4 py-2 rounded-full text-sm font-bold">
                                                    Age: {timing.age}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Side - Timing Details */}
                                        <div className="p-8 md:w-2/3">
                                            <div className="space-y-6">
                                                {/* Weekday Timing */}
                                                <motion.div
                                                    whileHover={{ scale: 1.02 }}
                                                    className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-100 hover:border-[#FDB913] transition-all"
                                                >
                                                    <div className="flex items-start">
                                                        <div className="bg-[#FDB913] rounded-xl p-3 mr-4">
                                                            <Calendar className="w-6 h-6 text-[#0F2A4A]" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <p className="text-sm font-semibold text-gray-500 mb-2">
                                                                {timing.weekday.days}
                                                            </p>
                                                            <p className="text-3xl font-bold text-[#0F2A4A]">
                                                                {timing.weekday.time}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </motion.div>

                                                {/* Saturday Timing (if exists) */}
                                                {timing.saturday && (
                                                    <motion.div
                                                        whileHover={{ scale: 1.02 }}
                                                        className="bg-gradient-to-br from-[#FDB913]/10 to-yellow-50 rounded-2xl p-6 border-2 border-[#FDB913]/30 hover:border-[#FDB913] transition-all"
                                                    >
                                                        <div className="flex items-start">
                                                            <div className="bg-[#0F2A4A] rounded-xl p-3 mr-4">
                                                                <Calendar className="w-6 h-6 text-[#FDB913]" />
                                                            </div>
                                                            <div className="flex-1">
                                                                <p className="text-sm font-semibold text-[#0F2A4A] mb-2">
                                                                    Saturday (1st & 3rd)
                                                                </p>
                                                                <p className="text-3xl font-bold text-[#0F2A4A]">
                                                                    {timing.saturday.time}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}

                                                {/* Note */}
                                                <div className="bg-[#FDB913]/10 border-l-4 border-[#FDB913] p-4 rounded-r-xl">
                                                    <div className="flex items-start">
                                                        <AlertCircle className="w-5 h-5 text-[#FDB913] mr-3 flex-shrink-0 mt-0.5" />
                                                        <p className="text-sm text-gray-700">
                                                            <strong className="text-[#0F2A4A]">Note:</strong> {timing.note}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Office Working Hours */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FDB913] to-yellow-600 rounded-3xl opacity-90 blur-sm"></div>
                        <div className="relative bg-gradient-to-br from-[#FDB913] to-yellow-500 rounded-3xl p-12 shadow-2xl border-4 border-white text-center">
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <Coffee className="w-20 h-20 text-[#0F2A4A] mx-auto mb-6" />
                            </motion.div>
                            
                            <h2 className="text-4xl font-bold text-[#0F2A4A] mb-6">Office Working Hours</h2>
                            <div className="bg-[#0F2A4A] rounded-2xl p-8 inline-block shadow-xl">
                                <p className="text-4xl font-bold text-[#FDB913] mb-2">09:00 AM - 02:30 PM</p>
                                <p className="text-xl text-white">Monday to Friday</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Important Guidelines */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.div
                            animate={{
                                rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="inline-block mb-6"
                        >
                            <AlertCircle className="w-16 h-16 text-[#FDB913]" />
                        </motion.div>
                        <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">Important Guidelines</h2>
                        <div className="w-32 h-1 bg-[#FDB913] mx-auto"></div>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {guidelines.map((guideline, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-[#FDB913] group"
                            >
                                <div className="flex items-start">
                                    <div className="bg-gradient-to-br from-[#0F2A4A] to-[#1a4070] text-[#FDB913] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mr-4 shadow-lg group-hover:scale-110 transition-transform">
                                        {guideline.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-[#0F2A4A] mb-2 group-hover:text-[#FDB913] transition-colors">
                                            {guideline.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {guideline.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F2A4A] via-[#1a4070] to-[#0F2A4A]"></div>
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-20 w-96 h-96 bg-[#FDB913] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FDB913] rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl font-bold mb-6 text-white">Have Questions?</h2>
                        <div className="w-32 h-1 bg-[#FDB913] mx-auto mb-8"></div>
                        <p className="text-2xl mb-12 text-white/90 leading-relaxed max-w-3xl mx-auto">
                            Contact us for more information about our schedule and timings
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                            <motion.a
                                href="tel:08023528888"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#FDB913] hover:bg-yellow-500 text-[#0F2A4A] font-bold px-8 py-5 rounded-2xl transition-all shadow-2xl flex items-center justify-center"
                            >
                                <Phone className="w-6 h-6 mr-3" />
                                080 23528888
                            </motion.a>
                            
                            <motion.a
                                href="/play-school/contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-5 rounded-2xl transition-all border-2 border-white/30 flex items-center justify-center backdrop-blur-sm"
                            >
                                <Mail className="w-6 h-6 mr-3" />
                                Contact Us
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default PlaySchoolSchoolTimings;