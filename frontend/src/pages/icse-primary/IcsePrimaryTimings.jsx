import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, Sun, Moon } from 'lucide-react';
import IcsePrimaryHeader from './IcsePrimaryHeader';
import IcsePrimaryFooter from './IcsePrimaryFooter';

const IcsePrimaryTimings = () => {
    const scheduleItems = [
        { time: "8:45 AM", activity: "School Begins", icon: Sun },
        { time: "10:30 AM", activity: "Morning Break", icon: Clock },
        { time: "12:45 PM", activity: "Lunch Break", icon: Clock },
        { time: "2:30 PM", activity: "School Ends", icon: Moon }
    ];

    return (
        <div className="min-h-screen bg-background ">
            <IcsePrimaryHeader />
            
            <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white relative overflow-hidden mt-20">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
                    <div className="absolute bottom-20 right-10 w-40 h-40 border-4 border-white rounded-full"></div>
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
                            <Clock className="w-20 h-20 text-white/90" />
                        </motion.div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">School Timings</h1>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto">
                            Our carefully structured daily schedule designed for optimal learning and development
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Main Timings Cards */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }} 
                            whileInView={{ opacity: 1, x: 0 }} 
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-3xl p-12 shadow-xl border-t-4 border-secondary hover:shadow-2xl transition-all"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <Clock className="text-secondary" size={48} />
                                <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold">
                                    5 Days
                                </span>
                            </div>
                            <h2 className="text-3xl font-bold text-primary mb-4">Monday to Friday</h2>
                            <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-2xl p-6 mb-6">
                                <div className="text-5xl font-bold text-secondary mb-2">8:45 AM - 2:30 PM</div>
                                <div className="text-sm text-gray-500 font-medium">5 hours 45 minutes</div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center text-gray-600">
                                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                                    <p>Full curriculum coverage</p>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                                    <p>Regular assessments & activities</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 20 }} 
                            whileInView={{ opacity: 1, x: 0 }} 
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-3xl p-12 shadow-xl border-t-4 border-primary hover:shadow-2xl transition-all"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <Calendar className="text-primary" size={48} />
                                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                                    Saturday
                                </span>
                            </div>
                            <h2 className="text-3xl font-bold text-primary mb-4">Saturday</h2>
                            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6 mb-6">
                                <div className="text-5xl font-bold text-primary mb-2">8:45 AM - 11:40 AM</div>
                                <div className="text-sm text-gray-500 font-medium">2 hours 55 minutes</div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center text-gray-600">
                                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                    <p>Essential classes & review</p>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                    <p>Sports & co-curricular activities</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Daily Schedule Timeline */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-12"
                    >
                        <h3 className="text-3xl font-bold text-primary mb-8 text-center">Daily Schedule Overview</h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {scheduleItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-100 hover:border-secondary/30 transition-all">
                                        <item.icon className="text-secondary mb-3" size={32} />
                                        <div className="text-2xl font-bold text-primary mb-2">{item.time}</div>
                                        <div className="text-gray-600 font-medium">{item.activity}</div>
                                    </div>
                                    {index < scheduleItems.length - 1 && (
                                        <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-secondary to-transparent"></div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Important Notes */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 rounded-3xl p-8 md:p-12 shadow-lg border-2 border-amber-200"
                    >
                        <div className="flex items-start gap-4 mb-6">
                            <div className="bg-amber-500 text-white p-3 rounded-xl">
                                <Calendar size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Important Information</h3>
                                <p className="text-gray-600">Please note the following schedule details</p>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-amber-200">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                                    <h4 className="text-lg font-bold text-gray-800">Second Saturday</h4>
                                </div>
                                <p className="text-gray-700 ml-6">Every second Saturday of the month is a holiday</p>
                            </div>
                            <div className="bg-white/70 backdrop-blur rounded-xl p-6 border border-amber-200">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                                    <h4 className="text-lg font-bold text-gray-800">Sunday</h4>
                                </div>
                                <p className="text-gray-700 ml-6">Closed - Weekly holiday</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

         
        </div>
    );
};

export default IcsePrimaryTimings;