import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Bell, Trophy, Utensils, Music, GraduationCap, Target } from 'lucide-react';
import IcsePrimaryHeader from './IcsePrimaryHeader';
import IcsePrimaryFooter from './IcsePrimaryFooter';

const IcsePrimaryNews = () => {
    const upcomingEvents = [
        {
            date: "14th Nov",
            title: "Children's Day Celebration",
            description: "Special celebration honoring childhood with cultural programs and fun activities",
            category: "Event",
            icon: Trophy,
            color: "gold"
        },
        {
            date: "15th Nov",
            title: "Solo Dance Competition",
            description: "3-minute solo dance performance competition open for all grades",
            category: "Competition",
            icon: Music,
            color: "blue"
        },
        {
            date: "29th Nov",
            title: "Cooking Without Fire",
            description: "Pair activity showcasing culinary creativity without using fire",
            category: "Activity",
            icon: Utensils,
            color: "gold"
        },
        {
            date: "8th Dec to 13th Dec",
            title: "Unit Test - III",
            description: "Third unit test for all subjects. Students should prepare thoroughly",
            category: "Examination",
            icon: GraduationCap,
            color: "blue"
        },
        {
            date: "27th Dec",
            title: "SAMANVAYA Annual Sports and Cultural Meet 2025-26",
            description: "Major annual event bringing together sports and cultural activities",
            category: "Event",
            icon: Trophy,
            color: "gold",
            featured: true
        },
        {
            date: "28th Jan to 3rd Feb",
            title: "Unit Test - IV",
            description: "Fourth unit test covering all subjects for comprehensive evaluation",
            category: "Examination",
            icon: GraduationCap,
            color: "blue"
        },
        {
            date: "Feb 6th",
            title: "Annual Sports Day",
            description: "Biggest sporting event featuring athletics and team competitions",
            category: "Sports",
            icon: Trophy,
            color: "gold"
        },
        {
            date: "13th and 14th Feb",
            title: "Prize Distribution Day",
            description: "Celebrating academic and extracurricular achievements of students",
            category: "Event",
            icon: Trophy,
            color: "blue"
        },
        {
            date: "12th March",
            title: "Commencement of Final Examination",
            description: "Final examinations begin - 60 marks weightage for each subject",
            category: "Examination",
            icon: GraduationCap,
            color: "gold"
        },
        {
            date: "4th April",
            title: "Result Day",
            description: "Academic results announcement and report card distribution",
            category: "Result",
            icon: Target,
            color: "blue"
        }
    ];

    const sportsActivities = {
        title: "Annual Sports Day Activities",
        classes: [
            {
                grade: "1st std",
                indoor: "Bowling Pins, Match It",
                outdoor: "Hoops Relay Balancing Game"
            },
            {
                grade: "2nd std",
                indoor: "Cones and Rings, Snake and Ladder",
                outdoor: "Relay Race, Roll the Ball"
            },
            {
                grade: "3rd std",
                indoor: "Board game (chouka bara), Cones and Rings",
                outdoor: "Hoops Race, Throw Ball"
            },
            {
                grade: "4th std",
                indoor: "Chess and Brainvita",
                outdoor: "Kho Kho and 4 x 100 m Relay"
            },
            {
                grade: "5th std",
                indoor: "Chess and Balancing game",
                outdoor: "Kho Kho and Tug of War"
            }
        ]
    };

    const getColorClasses = (color) => {
        const colors = {
            purple: "from-purple-500 to-purple-600 bg-purple-50 border-purple-200 text-purple-700",
            pink: "from-pink-500 to-pink-600 bg-pink-50 border-pink-200 text-pink-700",
            orange: "from-orange-500 to-orange-600 bg-orange-50 border-orange-200 text-orange-700",
            red: "from-red-500 to-red-600 bg-red-50 border-red-200 text-red-700",
           blue: "from-[#0F2A4A] to-[#1e4976] bg-blue-50 border-blue-200 text-[#0F2A4A]",
            green: "from-green-500 to-green-600 bg-green-50 border-green-200 text-green-700",
            gold: "from-[#FDB913] to-[#FDB913] bg-amber-50 border-amber-200 text-[#FDB913]-700"
        };
        return colors[color] || colors.blue;
    };

    const getCategoryBadge = (category, color) => {
        const colorParts = getColorClasses(color).split(' ');
        const bgColor = colorParts[2];
        const textColor = colorParts[4];
        return `${bgColor} ${textColor}`;
    };

    return (
        <div className="min-h-screen bg-background">
            <IcsePrimaryHeader />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white relative overflow-hidden mt-20">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
                    <div className="absolute bottom-20 right-10 w-40 h-40 border-4 border-white rounded-full"></div>
                    <div className="absolute top-1/2 left-1/3 w-24 h-24 border-4 border-white rounded-full"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        className="text-center"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="inline-block mb-6"
                        >
                            <Bell className="w-20 h-20 text-white/90" />
                        </motion.div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">News Announcements and Notices</h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            Stay updated with upcoming events and competitions
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Upcoming Events Section */}
            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                            What's Coming Up
                        </span>
                        <h2 className="text-4xl font-bold text-primary mb-4">Upcoming Events and Competitions</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Mark your calendars for these exciting activities and important dates
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {upcomingEvents.map((item, idx) => {
                            const IconComponent = item.icon;
                            const colorClasses = getColorClasses(item.color);
                            const gradientClass = colorClasses.split(' ')[0] + ' ' + colorClasses.split(' ')[1];
                            
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    whileHover={{ y: -5 }}
                                    className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border-2 border-gray-100 ${item.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
                                >
                                    {/* Date Badge */}
                                    <div className={`bg-gradient-to-r ${gradientClass} text-white px-6 py-4`}>
                                        <div className="flex items-center gap-2">
                                            <Calendar size={20} />
                                            <span className="font-bold">{item.date}</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`p-3 rounded-xl bg-gradient-to-br ${gradientClass}`}>
                                                <IconComponent className="text-white" size={24} />
                                            </div>
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryBadge(item.category, item.color)}`}>
                                                {item.category}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-primary mb-3 leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {item.description}
                                        </p>

                                        {item.featured && (
                                            <div className="mt-4 pt-4 border-t border-gray-100">
                                                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                                                    <Trophy size={16} />
                                                    Featured Event
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Sports Activities Table */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                            Sports Details
                        </span>
                        <h2 className="text-4xl font-bold text-primary mb-4">{sportsActivities.title}</h2>
                        <p className="text-lg text-gray-600">
                            Grade-wise indoor and outdoor sports activities
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100"
                    >
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gradient-to-r from-primary to-blue-800 text-white">
                                        <th className="px-6 py-4 text-left text-sm font-bold uppercase">Class</th>
                                        <th className="px-6 py-4 text-left text-sm font-bold uppercase">Indoor Activities</th>
                                        <th className="px-6 py-4 text-left text-sm font-bold uppercase">Outdoor Activities</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sportsActivities.classes.map((classData, idx) => (
                                        <motion.tr
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.05 }}
                                            className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-green-50 transition-colors border-b border-gray-100`}
                                        >
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center justify-center bg-primary text-white px-4 py-2 rounded-lg font-bold">
                                                    {classData.grade}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-start gap-2">
                                                    <div className="bg-blue-100 text-blue-700 p-2 rounded-lg">
                                                        <Trophy size={16} />
                                                    </div>
                                                    <span className="text-gray-700 leading-relaxed">{classData.indoor}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-start gap-2">
                                                    <div className="bg-green-100 text-green-700 p-2 rounded-lg">
                                                        <Target size={16} />
                                                    </div>
                                                    <span className="text-gray-700 leading-relaxed">{classData.outdoor}</span>
                                                </div>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Notice Section */}
            <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50 rounded-3xl p-8 md:p-10 shadow-xl border-2 border-blue-200"
                    >
                        <div className="flex items-start gap-4 mb-4">
                            <div className="bg-blue-500 text-white p-3 rounded-xl">
                                <Bell size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Important Notice</h3>
                                <p className="text-gray-600">Stay connected with school updates</p>
                            </div>
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            All dates and activities are tentative and subject to change. Please check with the school office 
                            or refer to official communications for any updates or modifications to the schedule.
                        </p>
                    </motion.div>
                </div>
            </section>

           
        </div>
    );
};

export default IcsePrimaryNews;