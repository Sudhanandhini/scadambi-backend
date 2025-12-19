import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, Sun, Moon, Coffee, Bell, BookOpen, Users } from 'lucide-react';

const PrePrimarySchoolTimings = () => {
    const timingsData = [
        {
            program: "Pre-KG",
            age: "3-4 years",
            weekdays: {
                days: "Monday to Friday",
                time: "08:45 AM to 12:30 PM",
                icon: Sun
            },
            saturday: {
                status: "Holiday",
                note: "Every Saturday holiday"
            },
            color: "from-primary to-primary/90"
        },
        {
            program: "LKG & UKG",
            age: "4-6 years",
            weekdays: {
                days: "Monday to Friday",
                time: "08:45 AM to 01:30 PM",
                icon: Sun
            },
            saturday: {
                status: "Working",
                time: "08:45 AM to 11:30 AM",
                note: "Every Second Saturday holiday"
            },
            color: "from-secondary to-secondary/90"
        }
    ];

    const importantNotes = [
        {
            icon: Bell,
            title: "Punctuality",
            description: "Please ensure children arrive on time for a smooth start to their day"
        },
        {
            icon: Users,
            title: "Pick-up Time",
            description: "Please be punctual during pick-up time for the safety of your child"
        },
        {
            icon: BookOpen,
            title: "Attendance",
            description: "Regular attendance is crucial for your child's learning and development"
        },
        {
            icon: Coffee,
            title: "Break Time",
            description: "Mid-morning snack break is included in the schedule"
        }
    ];

    const weeklySchedule = [
        { day: "Monday", status: "working", programs: ["Pre-KG", "LKG", "UKG"] },
        { day: "Tuesday", status: "working", programs: ["Pre-KG", "LKG", "UKG"] },
        { day: "Wednesday", status: "working", programs: ["Pre-KG", "LKG", "UKG"] },
        { day: "Thursday", status: "working", programs: ["Pre-KG", "LKG", "UKG"] },
        { day: "Friday", status: "working", programs: ["Pre-KG", "LKG", "UKG"] },
        { day: "Saturday", status: "partial", programs: ["LKG", "UKG"], note: "Pre-KG Holiday" },
        { day: "Sunday", status: "holiday", programs: [], note: "Weekly Holiday" }
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
                            Schedule Information
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold font-serif mt-3 mb-6">
                            School Timings
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            Our carefully planned schedule for Pre-KG, LKG & UKG programs
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Program Timings */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">Daily Schedule</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mt-3 mb-4">
                            Program-wise Timings
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Different timings designed for each age group's developmental needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {timingsData.map((timing, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all"
                            >
                                {/* Header */}
                                <div className={`bg-gradient-to-r ${timing.color} p-8 text-white relative overflow-hidden`}>
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
                                    <div className="relative z-10">
                                        <h3 className="text-4xl font-bold mb-2">{timing.program}</h3>
                                        <p className="text-white/90 text-lg">{timing.age}</p>
                                    </div>
                                </div>

                                {/* Weekday Timings */}
                                <div className="p-8 border-b-2 border-gray-100">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-gradient-to-br from-secondary to-secondary/80 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                                            <timing.weekdays.icon className="text-primary" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-primary">{timing.weekdays.days}</h4>
                                        </div>
                                    </div>
                                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6">
                                        <div className="flex items-center justify-center">
                                            <Clock className="text-primary mr-3" size={28} />
                                            <p className="text-2xl font-bold text-primary">{timing.weekdays.time}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Saturday Timings */}
                                <div className="p-8">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-gradient-to-br from-secondary to-secondary/80 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                                            <Calendar className="text-primary" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-primary">Saturday</h4>
                                        </div>
                                    </div>
                                    {timing.saturday.status === "Holiday" ? (
                                        <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-6 text-center">
                                            <p className="text-xl font-bold text-primary mb-2">Holiday</p>
                                            <p className="text-gray-600">{timing.saturday.note}</p>
                                        </div>
                                    ) : (
                                        <div>
                                            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-6 mb-4">
                                                <div className="flex items-center justify-center">
                                                    <Clock className="text-primary mr-3" size={24} />
                                                    <p className="text-xl font-bold text-primary">{timing.saturday.time}</p>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 text-center text-sm italic">{timing.saturday.note}</p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Weekly Schedule Overview */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">Week at a Glance</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mt-3 mb-4">
                            Weekly Schedule
                        </h2>
                    </div>

                    <div className="bg-white rounded-3xl shadow-2xl p-8 overflow-x-auto">
                        <div className="grid grid-cols-7 gap-4 min-w-[800px]">
                            {weeklySchedule.map((day, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className={`rounded-2xl p-6 text-center ${
                                        day.status === 'working' 
                                            ? 'bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20'
                                            : day.status === 'partial'
                                            ? 'bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary/20'
                                            : 'bg-gradient-to-br from-gray-100 to-gray-50 border-2 border-gray-200'
                                    }`}
                                >
                                    <h4 className="text-lg font-bold text-primary mb-3">{day.day}</h4>
                                    {day.status === 'holiday' ? (
                                        <div>
                                            <Moon className="mx-auto text-gray-400 mb-2" size={32} />
                                            <p className="text-sm text-gray-600 font-semibold">{day.note}</p>
                                        </div>
                                    ) : (
                                        <div>
                                            <Sun className={`mx-auto mb-3 ${day.status === 'working' ? 'text-primary' : 'text-secondary'}`} size={32} />
                                            {day.programs.map((program, pIdx) => (
                                                <span key={pIdx} className="block text-xs text-gray-700 font-medium mb-1">
                                                    {program}
                                                </span>
                                            ))}
                                            {day.note && (
                                                <p className="text-xs text-gray-500 mt-2 italic">{day.note}</p>
                                            )}
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Important Notes */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">Please Note</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mt-3 mb-4">
                            Important Information
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {importantNotes.map((note, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-secondary"
                            >
                                <div className="bg-gradient-to-br from-secondary to-secondary/80 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                                    <note.icon className="text-primary" size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{note.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{note.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Contact CTA */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full -mr-32 -mt-32"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48"></div>
                        
                        <div className="relative z-10">
                            <Clock className="mx-auto mb-6 text-secondary" size={64} />
                            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                                Have Questions About Our Timings?
                            </h2>
                            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                                Our team is here to help you with any queries regarding school schedule and timings
                            </p>
                            
                            
                            <a
                                href="/scadambi/pre-primary/contact"
                                className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default PrePrimarySchoolTimings;