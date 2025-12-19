import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Calendar, Pin, Download, FileText, Award } from 'lucide-react';

const PrePrimaryNews = () => {
    const announcements = [
        {
            title: "Admissions Open for 2025-2026",
            date: "Dec 1, 2025",
            type: "Admissions",
            pinned: true,
            content: "We are excited to announce that admissions are now open for the academic year 2025-2026 for Pre-KG, LKG, and UKG. Limited seats available. Early registrations encouraged!",
            color: "bg-green-500"
        },
        {
            title: "Funathon 2025 - Annual Sports Day",
            date: "Jan 15, 2026",
            type: "Event",
            pinned: true,
            content: "Join us for our annual sports celebration! Parents and grandparents are invited to participate in fun activities with their little ones. Save the date!",
            color: "bg-blue-500"
        },
        {
            title: "Parent Orientation Program",
            date: "Dec 15, 2025",
            type: "Meeting",
            pinned: false,
            content: "Orientation program for new parents to understand our teaching methodology, facilities, and meet our faculty members. RSVP required.",
            color: "bg-purple-500"
        }
    ];

    const upcomingEvents = [
        {
            title: "Orange Day",
            date: "November 2025",
            time: "Regular school hours",
            description: "A vibrant celebration where children learn about the color orange through fun activities, art, and themed snacks.",
            icon: "🍊"
        },
        {
            title: "Samanvaya - Annual Cultural and Sports Meet",
            date: "December 2025",
            time: "Full day event",
            description: "Our grand annual celebration bringing together cultural performances, sports activities, and showcasing student talents.",
            icon: "🎪"
        },
        {
            title: "Violet Day",
            date: "January 2026",
            time: "Regular school hours",
            description: "Exploring the beautiful color violet with creative activities, dress-up, and learning experiences.",
            icon: "💜"
        },
        {
            title: "Fancy Dress Competition",
            date: "January 2026",
            time: "10:00 AM onwards",
            description: "Children dress up as their favorite characters, fostering creativity and confidence.",
            icon: "🎭"
        },
        {
            title: "Sankranthi Celebration",
            date: "January 2026",
            time: "9:00 AM - 12:00 PM",
            description: "Traditional harvest festival celebration with cultural activities, kite flying, and festive treats.",
            icon: "🪁"
        },
        {
            title: "Rainbow Salad Day",
            date: "February 2026",
            time: "Regular school hours",
            description: "Promoting healthy eating habits through colorful salads made with fresh fruits and vegetables.",
            icon: "🥗"
        },
        {
            title: "Funathon - Annual Sports Day",
            date: "February 2026",
            time: "8:00 AM onwards",
            description: "Join us for our annual sports celebration! Parents and grandparents are invited to participate in fun activities with their little ones.",
            icon: "🏃"
        },
        {
            title: "Pinnacle - Academic and Co-curricular Culmination",
            date: "February 2026",
            time: "10:00 AM onwards",
            description: "Showcasing children's learning through models, experiments, cultural performances, and creative displays.",
            icon: "🎨"
        },
        {
            title: "Annual Examination",
            date: "March 2026",
            time: "As per schedule",
            description: "Year-end assessments to evaluate learning outcomes and celebrate children's growth throughout the year.",
            icon: "📚"
        },
        {
            title: "Nutritional Week",
            date: "Feb 2-9, 2026",
            time: "Regular school hours",
            description: "Theme-based days promoting healthy eating: Vegetable Day, Fruit Day, Grains Day, Dry Fruits Day, and Sprouts Day.",
            icon: "🍎"
        },
        {
            title: "Cultural Day - Krishna Janmashtami",
            date: "Aug 16, 2026",
            time: "9:00 AM - 12:00 PM",
            description: "Celebration of Krishna's birthday with traditional dress, stories, and fun activities.",
            icon: "🎪"
        },
        {
            title: "International Yoga Day",
            date: "Jun 21, 2026",
            time: "8:00 AM - 10:00 AM",
            description: "Introduction to simple yoga poses and breathing exercises for physical and mental wellness.",
            icon: "🧘"
        }
    ];

    const circulars = [
        {
            title: "Pre-Primary Fee Structure 2025-2026",
            date: "Nov 28, 2025",
            type: "Important",
            icon: FileText
        },
        {
            title: "Winter Break Holiday Notice",
            date: "Dec 10, 2025",
            type: "Holiday",
            icon: Calendar
        },
        {
            title: "Uniform Guidelines for Pre-Primary",
            date: "Nov 15, 2025",
            type: "General",
            icon: FileText
        },
        {
            title: "Safety Protocols Update",
            date: "Nov 1, 2025",
            type: "Important",
            icon: Bell
        }
    ];

    const importantNotices = [
        {
            title: "Star of the Week Program",
            date: "Ongoing",
            description: "Parents are invited to participate as guest teachers. Schedule your visit with the class teacher."
        },
        {
            title: "Daily Drop-off and Pick-up Timings",
            date: "Reminder",
            description: "School hours: 8:45 AM - 2:30 PM. Please ensure punctuality for the safety and routine of your child."
        },
        {
            title: "Healthy Snack Policy",
            date: "Important",
            description: "Please pack nutritious, home-cooked snacks. Avoid junk food, chocolates, and carbonated drinks."
        }
    ];

    return (
        <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-primary to-primary/90 text-white py-20 mt-16">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">
                            Stay Updated
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold font-serif mt-3 mb-6">
                            News & Announcements
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            Important updates, events, and notices for our pre-primary community
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Latest Announcements */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="flex items-center mb-8">
                        <Bell className="text-secondary mr-3" size={32} />
                        <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif">
                            Latest Announcements
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {announcements.map((announcement, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
                            >
                                <div className="flex flex-col md:flex-row">
                                    <div className={`${announcement.color} text-white p-6 md:w-48 flex flex-col justify-center items-center md:items-start`}>
                                        <span className="text-sm font-semibold uppercase mb-2">{announcement.type}</span>
                                        <p className="text-white/90 text-sm">{announcement.date}</p>
                                        {announcement.pinned && (
                                            <div className="mt-3 bg-white/20 px-3 py-1 rounded-full flex items-center">
                                                <Pin size={14} className="mr-1" />
                                                <span className="text-xs font-semibold">Pinned</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6 flex-1">
                                        <h3 className="text-2xl font-bold text-primary mb-3">{announcement.title}</h3>
                                        <p className="text-gray-700 leading-relaxed">{announcement.content}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Upcoming Events */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="flex items-center mb-8">
                        <Calendar className="text-secondary mr-3" size={32} />
                        <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif">
                            Upcoming Events
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {upcomingEvents.map((event, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all border-l-4 border-secondary"
                            >
                                <div className="text-5xl mb-4">{event.icon}</div>
                                <h3 className="text-2xl font-bold text-primary mb-2">{event.title}</h3>
                                <div className="flex items-center text-secondary mb-2">
                                    <Calendar size={16} className="mr-2" />
                                    <span className="font-semibold">{event.date}</span>
                                </div>
                                <p className="text-gray-600 text-sm mb-4">{event.time}</p>
                                <p className="text-gray-700 leading-relaxed">{event.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Circulars & Documents */}
                {/* <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-12 border-2 border-blue-200">
                        <div className="flex items-center mb-8">
                            <Download className="text-blue-600 mr-3" size={32} />
                            <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif">
                                Circulars & Documents
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {circulars.map((circular, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all flex items-center justify-between group cursor-pointer"
                                >
                                    <div className="flex items-center flex-1">
                                        <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                            <circular.icon className="text-blue-600" size={24} />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-primary mb-1 group-hover:text-secondary transition-colors">
                                                {circular.title}
                                            </h4>
                                            <p className="text-sm text-gray-600">{circular.date}</p>
                                        </div>
                                    </div>
                                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                        circular.type === 'Important' ? 'bg-red-100 text-red-700' :
                                        circular.type === 'Holiday' ? 'bg-purple-100 text-purple-700' :
                                        'bg-gray-100 text-gray-700'
                                    }`}>
                                        {circular.type}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section> */}

                {/* Important Notices */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="flex items-center mb-8">
                        <Award className="text-secondary mr-3" size={32} />
                        <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif">
                            Important Notices
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {importantNotices.map((notice, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-6 border-2 border-secondary/20 hover:shadow-lg transition-all"
                            >
                                <div className="bg-secondary text-primary px-3 py-1 rounded-full inline-block text-sm font-bold mb-4">
                                    {notice.date}
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{notice.title}</h3>
                                <p className="text-gray-700 leading-relaxed">{notice.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default PrePrimaryNews;