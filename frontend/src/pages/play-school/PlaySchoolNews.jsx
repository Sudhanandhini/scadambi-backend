import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Newspaper, Calendar, Bell, FileText, ChevronRight, Clock, AlertCircle, Star, TrendingUp, Download, ExternalLink } from 'lucide-react';

const PlaySchoolNews = () => {
    const [selectedNews, setSelectedNews] = useState(null);

    const upcomingEvents = [
        {
            id: 1,
            title: "Fancy Dress",
            date: "Coming Soon",
            icon: "🎭",
            description: "Children will dress up as their favorite characters. A fun-filled event to boost creativity and confidence.",
            category: "Event"
        },
        {
            id: 2,
            title: "Sports",
            date: "Coming Soon",
            icon: "⚽",
            description: "Annual sports day with various athletic activities, races, and games for all age groups.",
            category: "Sports"
        },
        {
            id: 3,
            title: "Vegetable Salad Day",
            date: "Coming Soon",
            icon: "🥗",
            description: "Hands-on learning about vegetables and healthy eating habits through fun activities.",
            category: "Activity"
        },
        {
            id: 4,
            title: "Christmas Celebration",
            date: "Coming Soon",
            icon: "🎄",
            description: "Festive celebration with decorations, songs, dance, and special activities.",
            category: "Festival"
        },
        {
            id: 5,
            title: "Sankranthi",
            date: "Coming Soon",
            icon: "🪁",
            description: "Traditional festival celebration with cultural activities and kite flying.",
            category: "Festival"
        },
        {
            id: 6,
            title: "Grand Parents Day",
            date: "Coming Soon",
            icon: "👵👴",
            description: "Special day to honor and celebrate grandparents with performances and activities.",
            category: "Event"
        }
    ];

    const circulars = [
        {
            id: 1,
            title: "Final Examination Schedule",
            date: "Important Notice",
            type: "Exam",
            urgent: true
        },
        {
            id: 2,
            title: "School Timings Update",
            date: "December 2024",
            type: "Notice",
            urgent: false
        },
        {
            id: 3,
            title: "Parent-Teacher Meeting",
            date: "Scheduled",
            type: "Meeting",
            urgent: false
        },
        {
            id: 4,
            title: "Holiday Notification",
            date: "December 2024",
            type: "Holiday",
            urgent: false
        }
    ];

    const announcements = [
        {
            id: 1,
            title: "Admissions Open for 2025-2026",
            description: "Enrollments are now open for the academic year 2025-2026. Contact the office for details.",
            date: "December 2024",
            type: "Admission"
        },
        {
            id: 2,
            title: "Winter Break Schedule",
            description: "School will remain closed during winter holidays. Regular classes resume from January.",
            date: "December 2024",
            type: "Holiday"
        },
        {
            id: 3,
            title: "Health and Safety Guidelines",
            description: "Updated health protocols for the safety of all children. Parents are requested to follow the guidelines.",
            date: "December 2024",
            type: "Health"
        }
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
                                <Newspaper className="w-16 h-16 text-[#0F2A4A]" />
                            </div>
                        </motion.div>
                        
                        <h1 className="text-6xl font-bold mb-6">News Announcements and Notices</h1>
                        
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "200px" }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="h-1 bg-[#FDB913] mx-auto mb-8"
                        ></motion.div>
                        
                        <p className="text-2xl text-[#FDB913] font-semibold mb-4">Stay Updated with Latest News</p>
                        <p className="text-xl max-w-4xl mx-auto text-white/90 leading-relaxed">
                            Important announcements, upcoming events, and circulars for parents and students
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Important Notice - Final Exam */}
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
                            <div className="flex items-start gap-6">
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        rotate: [0, 10, -10, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="bg-[#0F2A4A] rounded-full p-6 flex-shrink-0"
                                >
                                    <AlertCircle className="w-12 h-12 text-[#FDB913]" />
                                </motion.div>
                                
                                <div className="flex-1">
                                    <h2 className="text-4xl font-bold text-[#0F2A4A] mb-4">Important Circular</h2>
                                    <div className="bg-[#0F2A4A] rounded-2xl p-6 text-white">
                                        <h3 className="text-3xl font-bold mb-4 text-[#FDB913]">FINAL EXAM</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <p className="text-[#FDB913] font-semibold mb-2">Starts From</p>
                                                <p className="text-2xl font-bold">12-03-2026 (Thursday)</p>
                                            </div>
                                            <div>
                                                <p className="text-[#FDB913] font-semibold mb-2">Ends On</p>
                                                <p className="text-2xl font-bold">25-03-2026 (Wednesday)</p>
                                            </div>
                                        </div>
                                        <p className="mt-6 text-white/90">
                                            Parents are requested to ensure that children are well-prepared and attend all examination days.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Latest Announcements */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">Latest Announcements</h2>
                        <div className="w-32 h-1 bg-[#FDB913] mx-auto"></div>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {announcements.map((announcement, idx) => (
                            <motion.div
                                key={announcement.id}
                                variants={itemVariants}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="bg-gradient-to-br from-[#0F2A4A] to-[#1a4070] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all text-white group"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                        className="bg-[#FDB913] rounded-full p-3"
                                    >
                                        <Bell className="w-6 h-6 text-[#0F2A4A]" />
                                    </motion.div>
                                    <span className="bg-[#FDB913] text-[#0F2A4A] px-3 py-1 rounded-full text-sm font-bold">
                                        {announcement.type}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-[#FDB913]">{announcement.title}</h3>
                                <p className="text-white/90 mb-4 leading-relaxed">{announcement.description}</p>
                                <div className="flex items-center text-[#FDB913] text-sm">
                                    <Clock className="w-4 h-4 mr-2" />
                                    {announcement.date}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">Upcoming Events</h2>
                        <div className="w-32 h-1 bg-[#FDB913] mx-auto mb-4"></div>
                        <p className="text-xl text-gray-600">Mark your calendars for these exciting events</p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {upcomingEvents.map((event, idx) => (
                            <motion.div
                                key={event.id}
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, rotate: 1 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 border-transparent hover:border-[#FDB913] group"
                                onClick={() => setSelectedNews(event)}
                            >
                                <div className="bg-gradient-to-br from-[#0F2A4A] to-[#1a4070] h-40 flex items-center justify-center relative overflow-hidden">
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
                                    <div className="absolute top-4 right-4 bg-[#FDB913] text-[#0F2A4A] px-3 py-1 rounded-full text-xs font-bold">
                                        {event.category}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-[#0F2A4A] mb-3 group-hover:text-[#FDB913] transition-colors">
                                        {event.title}
                                    </h3>
                                    <div className="flex items-center text-gray-600 mb-4">
                                        <Calendar className="w-5 h-5 mr-2 text-[#FDB913]" />
                                        <span className="font-semibold">{event.date}</span>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {event.description}
                                    </p>
                                    <div className="flex items-center text-[#FDB913] font-semibold group-hover:translate-x-2 transition-transform">
                                        Learn More
                                        <ChevronRight className="w-5 h-5 ml-1" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Circulars */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">Circulars</h2>
                        <div className="w-32 h-1 bg-[#FDB913] mx-auto mb-4"></div>
                        <p className="text-xl text-gray-600">Important notices and circulars for parents</p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            {circulars.map((circular, idx) => (
                                <motion.div
                                    key={circular.id}
                                    variants={itemVariants}
                                    whileHover={{ x: 10, scale: 1.02 }}
                                    className={`rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer ${
                                        circular.urgent 
                                            ? 'bg-gradient-to-r from-[#FDB913] to-yellow-500 border-2 border-[#0F2A4A]' 
                                            : 'bg-white border-2 border-gray-200 hover:border-[#FDB913]'
                                    }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-6 flex-1">
                                            <div className={`rounded-full p-4 ${
                                                circular.urgent 
                                                    ? 'bg-[#0F2A4A]' 
                                                    : 'bg-gradient-to-br from-[#0F2A4A] to-[#1a4070]'
                                            }`}>
                                                <FileText className="w-8 h-8 text-[#FDB913]" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h3 className={`text-xl font-bold ${
                                                        circular.urgent ? 'text-[#0F2A4A]' : 'text-[#0F2A4A]'
                                                    }`}>
                                                        {circular.title}
                                                    </h3>
                                                    {circular.urgent && (
                                                        <motion.span
                                                            animate={{ scale: [1, 1.1, 1] }}
                                                            transition={{ duration: 1, repeat: Infinity }}
                                                            className="bg-[#0F2A4A] text-[#FDB913] px-3 py-1 rounded-full text-xs font-bold"
                                                        >
                                                            URGENT
                                                        </motion.span>
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <span className={`text-sm font-semibold ${
                                                        circular.urgent ? 'text-[#0F2A4A]/80' : 'text-gray-600'
                                                    }`}>
                                                        {circular.date}
                                                    </span>
                                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                                        circular.urgent 
                                                            ? 'bg-[#0F2A4A] text-[#FDB913]' 
                                                            : 'bg-[#FDB913] text-[#0F2A4A]'
                                                    }`}>
                                                        {circular.type}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="flex gap-3">
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={`p-3 rounded-full ${
                                                    circular.urgent 
                                                        ? 'bg-[#0F2A4A] text-[#FDB913]' 
                                                        : 'bg-[#0F2A4A] text-[#FDB913]'
                                                }`}
                                            >
                                                <Download className="w-5 h-5" />
                                            </motion.button>
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={`p-3 rounded-full ${
                                                    circular.urgent 
                                                        ? 'bg-[#0F2A4A] text-[#FDB913]' 
                                                        : 'bg-[#FDB913] text-[#0F2A4A]'
                                                }`}
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </motion.button>
                                        </div> */}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stay Connected CTA */}
            {/* <section className="py-20 relative overflow-hidden">
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
                            <TrendingUp className="w-20 h-20 mx-auto mb-8 text-[#FDB913]" />
                        </motion.div>
                        
                        <h2 className="text-5xl font-bold mb-6 text-white">Stay Connected</h2>
                        <div className="w-32 h-1 bg-[#FDB913] mx-auto mb-8"></div>
                        <p className="text-2xl mb-12 text-white/90 leading-relaxed max-w-3xl mx-auto">
                            Subscribe to our newsletter to receive the latest updates, announcements, and event notifications
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-4 rounded-2xl text-[#0F2A4A] font-semibold focus:outline-none focus:ring-4 focus:ring-[#FDB913]"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center bg-[#FDB913] hover:bg-yellow-500 text-[#0F2A4A] font-bold px-8 py-4 rounded-2xl transition-all shadow-2xl"
                            >
                                Subscribe
                                <ChevronRight className="ml-2 w-6 h-6" />
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section> */}

            {/* Event Detail Modal */}
            <AnimatePresence>
                {selectedNews && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedNews(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25 }}
                            className="max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="bg-gradient-to-br from-[#0F2A4A] to-[#1a4070] p-8 text-center">
                                <div className="text-8xl mb-4">{selectedNews.icon}</div>
                                <h3 className="text-4xl font-bold text-white mb-2">{selectedNews.title}</h3>
                                <span className="inline-block bg-[#FDB913] text-[#0F2A4A] px-4 py-2 rounded-full font-bold">
                                    {selectedNews.category}
                                </span>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center justify-center gap-2 mb-6">
                                    <Calendar className="w-6 h-6 text-[#FDB913]" />
                                    <span className="text-xl font-semibold text-[#0F2A4A]">{selectedNews.date}</span>
                                </div>
                                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                    {selectedNews.description}
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedNews(null)}
                                    className="w-full bg-[#0F2A4A] hover:bg-[#1a4070] text-white font-bold py-4 rounded-2xl transition-all"
                                >
                                    Close
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PlaySchoolNews;