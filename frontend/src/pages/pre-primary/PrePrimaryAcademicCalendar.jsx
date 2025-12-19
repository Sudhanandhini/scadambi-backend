import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Download, Search, Filter, ChevronRight } from 'lucide-react';

const PrePrimaryAcademicCalendar = () => {
    const [selectedMonth, setSelectedMonth] = useState('All');

    const calendarEvents = [
        // MAY 2025
        { date: "29/05/25", day: "Thursday", month: "May", event: "Commencement of Pre KG - Aksharabhyasa, LKG and UKG", type: "Academic" },
        
        // JUNE 2025
        { date: "05/06/25", day: "Thursday", month: "June", event: "Environmental Day Celebration", type: "Celebration" },
        { date: "12/06/25", day: "Thursday", month: "June", event: "Fathers' Day Activity", type: "Special Day" },
        { date: "14/06/25", day: "Saturday", month: "June", event: "Parent Orientation Program", type: "Meeting" },
        { date: "21/06/25", day: "Saturday", month: "June", event: "International Yoga Day", type: "Special Day" },
        
        // JULY 2025
        { date: "01/07/25", day: "Tuesday", month: "July", event: "Doctors' Day Activity", type: "Special Day" },
        { date: "04/07/25", day: "Friday", month: "July", event: "Red Day", type: "Theme Day" },
        { date: "12/07/25", day: "Saturday", month: "July", event: "First Parent Teacher Meeting", type: "Meeting" },
        
        // AUGUST 2025
        { date: "01/08/25", day: "Friday", month: "August", event: "Friendship Day Activity and Blue Day", type: "Special Day" },
        { date: "15/08/25", day: "Friday", month: "August", event: "Independence Day Celebration", type: "National" },
        { date: "25/08/25", day: "Monday", month: "August", event: "Gowri - Ganesha Chaturthi Celebration", type: "Festival" },
        
        // SEPTEMBER 2025
        { date: "01/09/25", day: "Monday", month: "September", event: "Nutritional Week", type: "Special Week" },
        { date: "05/09/25", day: "Friday", month: "September", event: "Yellow Day", type: "Theme Day" },
        { date: "10/09/25", day: "Wednesday", month: "September", event: "Sri Krishna Janmashtami Celebration", type: "Festival" },
        { date: "11/09/25", day: "Thursday", month: "September", event: "Commencement of Mid Term Exam", type: "Academic" },
        { date: "20/09/25", day: "Saturday", month: "September", event: "End of Mid Term Exam", type: "Academic" },
        { date: "22/09/25", day: "Monday", month: "September", event: "Dasara Vacation Begins", type: "Holiday" },
        
        // OCTOBER 2025
        { date: "02/10/25", day: "Thursday", month: "October", event: "Dasara Vacation Ends", type: "Holiday" },
        { date: "03/10/25", day: "Friday", month: "October", event: "School Reopens After Dasara Vacation", type: "Academic" },
        { date: "11/10/25", day: "Saturday", month: "October", event: "Second Parent Teacher Meeting", type: "Meeting" },
        { date: "18/10/25", day: "Saturday", month: "October", event: "Deepavali Celebration", type: "Festival" },
        { date: "25/10/25", day: "Saturday", month: "October", event: "Green Day", type: "Theme Day" },
        
        // NOVEMBER 2025
        { date: "14/11/25", day: "Friday", month: "November", event: "Children's Day", type: "Special Day" },
        { date: "22/11/25", day: "Saturday", month: "November", event: "Orange Day", type: "Theme Day" },
        
        // DECEMBER 2025
        { date: "27/12/25", day: "Saturday", month: "December", event: "Samanvayava", type: "Event" },
        
        // JANUARY 2026
        { date: "03/01/26", day: "Saturday", month: "January", event: "Violet Day", type: "Theme Day" },
        { date: "09/01/26", day: "Friday", month: "January", event: "Fancy Dress - UKG", type: "Event" },
        { date: "10/01/26", day: "Saturday", month: "January", event: "Fancy Dress - LKG and Pre KG", type: "Event" },
        { date: "13/01/26", day: "Tuesday", month: "January", event: "Sankranthi Celebration", type: "Festival" },
        
        // FEBRUARY 2026
        { date: "06/02/26", day: "Friday", month: "February", event: "Rainbow Salad Day", type: "Theme Day" },
        { date: "08/02/26", day: "Sunday", month: "February", event: "Funathon", type: "Event" },
        { date: "21/02/26", day: "Saturday", month: "February", event: "Pinnacle", type: "Event" },
        
        // MARCH 2026
        { date: "12/03/26", day: "Thursday", month: "March", event: "Commencement of Annual Exam", type: "Academic" },
        { date: "25/03/26", day: "Wednesday", month: "March", event: "End of Final Exam", type: "Academic" },
        
        // APRIL 2026
        { date: "04/04/26", day: "Saturday", month: "April", event: "Result and Third Parent Teacher Meeting", type: "Meeting" }
    ];

    const months = ['All', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April'];

    const eventTypes = {
        'Academic': 'from-primary/20 to-primary/10 border-primary/30 text-primary',
        'Celebration': 'from-secondary/20 to-secondary/10 border-secondary/30 text-secondary',
        'Special Day': 'from-primary/20 to-primary/10 border-primary/30 text-primary',
        'Meeting': 'from-secondary/20 to-secondary/10 border-secondary/30 text-secondary',
        'Theme Day': 'from-primary/20 to-primary/10 border-primary/30 text-primary',
        'National': 'from-secondary/20 to-secondary/10 border-secondary/30 text-secondary',
        'Festival': 'from-primary/20 to-primary/10 border-primary/30 text-primary',
        'Special Week': 'from-secondary/20 to-secondary/10 border-secondary/30 text-secondary',
        'Holiday': 'from-primary/20 to-primary/10 border-primary/30 text-primary',
        'Event': 'from-secondary/20 to-secondary/10 border-secondary/30 text-secondary'
    };

    const filteredEvents = selectedMonth === 'All' 
        ? calendarEvents 
        : calendarEvents.filter(event => event.month === selectedMonth);

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
                            Academic Year 2025-26
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold font-serif mt-3 mb-6">
                            Academic Calendar
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            Pre-Primary Wing Yearly Planner - Important dates and events
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Filter Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center">
                                <Filter className="text-primary mr-3" size={24} />
                                <h3 className="text-xl font-bold text-primary">Filter by Month:</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {months.map((month, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedMonth(month)}
                                        className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                                            selectedMonth === month
                                                ? 'bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg'
                                                : 'bg-gray-100 text-gray-700 hover:bg-secondary/20'
                                        }`}
                                    >
                                        {month}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Events List */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="space-y-4">
                        {filteredEvents.map((event, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.02 }}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group border-2 border-gray-100 hover:border-secondary"
                            >
                                <div className="flex flex-col md:flex-row">
                                    {/* Date Section */}
                                    <div className={`bg-gradient-to-br ${idx % 2 === 0 ? 'from-primary to-primary/90' : 'from-secondary to-secondary/90'} ${idx % 2 === 0 ? 'text-white' : 'text-primary'} p-6 md:w-48 flex flex-col justify-center items-center`}>
                                        <Calendar className="mb-2" size={32} />
                                        <p className="text-3xl font-bold">{event.date.split('/')[0]}</p>
                                        <p className="text-lg font-semibold">{event.month} 2025</p>
                                        <p className={`text-sm ${idx % 2 === 0 ? 'text-white/80' : 'text-primary/80'} mt-1`}>{event.day}</p>
                                    </div>

                                    {/* Event Details */}
                                    <div className="flex-1 p-6 flex items-center justify-between">
                                        <div className="flex-1">
                                            <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                                                {event.event}
                                            </h3>
                                            <div className={`inline-block bg-gradient-to-r ${eventTypes[event.type]} px-4 py-2 rounded-full text-sm font-semibold border-2`}>
                                                {event.type}
                                            </div>
                                        </div>
                                        {/* <ChevronRight className="text-gray-400 group-hover:text-secondary transition-colors group-hover:translate-x-1 hidden md:block" size={24} /> */}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {filteredEvents.length === 0 && (
                        <div className="text-center py-20">
                            <Calendar className="mx-auto text-gray-300 mb-4" size={64} />
                            <p className="text-gray-500 text-xl">No events found for this month</p>
                        </div>
                    )}
                </motion.section>

                {/* Legend Section */}
                {/* <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 border-2 border-primary/20">
                        <h3 className="text-2xl font-bold text-primary mb-6 text-center">Event Types Legend</h3>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            {Object.entries(eventTypes).map(([type, style], idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className={`bg-gradient-to-r ${style} px-4 py-3 rounded-xl text-center font-semibold border-2 shadow-md`}
                                >
                                    {type}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section> */}

                {/* Quick Stats */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-2 border-primary/20 hover:border-primary transition-all">
                            <div className="bg-gradient-to-br from-primary to-primary/80 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Calendar className="text-white" size={32} />
                            </div>
                            <h3 className="text-4xl font-bold text-primary mb-2">{calendarEvents.length}</h3>
                            <p className="text-gray-600 font-medium">Total Events</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-2 border-secondary/20 hover:border-secondary transition-all">
                            <div className="bg-gradient-to-br from-secondary to-secondary/80 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Calendar className="text-primary" size={32} />
                            </div>
                            <h3 className="text-4xl font-bold text-primary mb-2">
                                {calendarEvents.filter(e => e.type === 'Festival').length}
                            </h3>
                            <p className="text-gray-600 font-medium">Festivals</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-2 border-primary/20 hover:border-primary transition-all">
                            <div className="bg-gradient-to-br from-primary to-primary/80 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Calendar className="text-white" size={32} />
                            </div>
                            <h3 className="text-4xl font-bold text-primary mb-2">
                                {calendarEvents.filter(e => e.type === 'Theme Day').length}
                            </h3>
                            <p className="text-gray-600 font-medium">Theme Days</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-2 border-secondary/20 hover:border-secondary transition-all">
                            <div className="bg-gradient-to-br from-secondary to-secondary/80 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Calendar className="text-primary" size={32} />
                            </div>
                            <h3 className="text-4xl font-bold text-primary mb-2">
                                {calendarEvents.filter(e => e.type === 'Meeting').length}
                            </h3>
                            <p className="text-gray-600 font-medium">PTM Meetings</p>
                        </div>
                    </div>
                </motion.section>

                {/* Download Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-gradient-to-r from-secondary to-secondary/90 rounded-3xl p-12 text-center text-primary shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full -ml-48 -mb-48"></div>
                        
                        <div className="relative z-10">
                            <Download className="mx-auto mb-6" size={64} />
                            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                                Download Academic Calendar
                            </h2>
                            <p className="text-primary/80 text-lg mb-8 max-w-2xl mx-auto">
                                Get the complete academic calendar PDF for the year 2025-26
                            </p>
                            <button className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                                Download PDF
                            </button>
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default PrePrimaryAcademicCalendar;