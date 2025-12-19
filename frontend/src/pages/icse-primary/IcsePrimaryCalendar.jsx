import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, BookOpen, Trophy, Users, GraduationCap, Calendar, PartyPopper, Coffee, Award, Target } from 'lucide-react';
import IcsePrimaryHeader from './IcsePrimaryHeader';
import IcsePrimaryFooter from './IcsePrimaryFooter';

const IcsePrimaryCalendar = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const academicEvents = [
        { slNo: 1, date: "26-05-2025", day: "MONDAY", event: "SCHOOL REOPENS", type: "academic", month: "MAY 2025" },
        { slNo: 2, date: "05-06-2025", day: "THURSDAY", event: "ENVIRONMENTAL DAY CELEBRATION", type: "celebration", month: "JUNE 2025" },
        { slNo: 3, date: "14-06-2025", day: "SATURDAY", event: "ORIENTATION FOR 1ST STD", type: "meeting", month: "JUNE 2025" },
        { slNo: 4, date: "21-06-2025", day: "SATURDAY", event: "INTERNATIONAL YOGA DAY CELEBRATION", type: "celebration", month: "JUNE 2025" },
        { slNo: 5, date: "30-06-2025", day: "MONDAY", event: "1ST UNIT TEST", type: "exam", month: "JUNE 2025" },
        { slNo: 6, date: "19-07-2025", day: "SATURDAY", event: "PARENT TEACHER MEETING", type: "meeting", month: "JULY 2025" },
        { slNo: 7, date: "01-08-2025", day: "FRIDAY", event: "2ND UNIT TEST", type: "exam", month: "AUGUST 2025" },
        { slNo: 8, date: "12-09-2025", day: "FRIDAY", event: "COMMENCEMENT OF MID TERM EXAM", type: "exam", month: "SEPTEMBER 2025" },
        { slNo: 9, date: "20-09-2025", day: "SATURDAY", event: "END OF MID TERM EXAM", type: "exam", month: "SEPTEMBER 2025" },
        { slNo: 10, date: "22-09-2025", day: "MONDAY", event: "DASARA VACATION BEGINS", type: "vacation", month: "SEPTEMBER 2025" },
        { slNo: 11, date: "03-10-2025", day: "FRIDAY", event: "SCHOOL REOPENS AFTER VACATION", type: "academic", month: "OCTOBER 2025" },
        { slNo: 12, date: "11-10-2025", day: "SATURDAY", event: "PARENT TEACHER MEETING", type: "meeting", month: "OCTOBER 2025" },
        { slNo: 13, date: "14-11-2025", day: "FRIDAY", event: "CHILDREN'S DAY CELEBRATION", type: "celebration", month: "NOVEMBER 2025" },
        { slNo: 14, date: "08-12-2025", day: "MONDAY", event: "3RD UNIT TEST", type: "exam", month: "DECEMBER 2025" },
        { slNo: 15, date: "27-12-2025", day: "SATURDAY", event: "SAMANVAYA 2025-26", type: "event", month: "DECEMBER 2025" },
        { slNo: 16, date: "SECOND WEEK", day: "JANUARY 2026", event: "ANNUAL SPORTS DAY", type: "sports", month: "JANUARY 2026" },
        { slNo: 17, date: "28-01-2026", day: "WEDNESDAY", event: "4TH UNIT TEST", type: "exam", month: "JANUARY 2026" },
        { slNo: 18, date: "1ST WEEK", day: "FEBRUARY 2026", event: "PRIZE DISTRIBUTION DAY", type: "event", month: "FEBRUARY 2026" },
        { slNo: 19, date: "12-03-2026", day: "THURSDAY", event: "COMMENCEMENT OF FINAL EXAM", type: "exam", month: "MARCH 2026" },
        { slNo: 20, date: "24-03-2026", day: "TUESDAY", event: "END OF FINAL EXAM", type: "exam", month: "MARCH 2026" },
        { slNo: 21, date: "04-04-2026", day: "SATURDAY", event: "RESULT DAY", type: "result", month: "APRIL 2026" }
    ];

    const categories = [
        { id: 'all', label: 'All Events', icon: CalendarIcon, color: 'bg-primary', textColor: 'text-white', borderColor: 'border-primary' },
        { id: 'exam', label: 'Exams & Tests', icon: BookOpen, color: 'bg-red-500', textColor: 'text-white', borderColor: 'border-red-500' },
        { id: 'celebration', label: 'Celebrations', icon: PartyPopper, color: 'bg-purple-500', textColor: 'text-white', borderColor: 'border-purple-500' },
        { id: 'meeting', label: 'Meetings', icon: Users, color: 'bg-blue-500', textColor: 'text-white', borderColor: 'border-blue-500' },
        { id: 'sports', label: 'Sports', icon: Trophy, color: 'bg-green-500', textColor: 'text-white', borderColor: 'border-green-500' },
        { id: 'vacation', label: 'Vacation', icon: Coffee, color: 'bg-orange-500', textColor: 'text-white', borderColor: 'border-orange-500' },
        { id: 'academic', label: 'Academic', icon: GraduationCap, color: 'bg-teal-500', textColor: 'text-white', borderColor: 'border-teal-500' },
        { id: 'event', label: 'Special Events', icon: Award, color: 'bg-yellow-500', textColor: 'text-white', borderColor: 'border-yellow-500' }
    ];

    const getEventIcon = (type) => {
        switch(type) {
            case 'exam': return BookOpen;
            case 'celebration': return PartyPopper;
            case 'meeting': return Users;
            case 'sports': return Trophy;
            case 'vacation': return Coffee;
            case 'result': return Award;
            case 'academic': return GraduationCap;
            case 'event': return Target;
            default: return CalendarIcon;
        }
    };

    const getEventColor = (type) => {
        switch(type) {
            case 'exam': return { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', icon: 'text-red-600' };
            case 'celebration': return { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', icon: 'text-purple-600' };
            case 'meeting': return { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', icon: 'text-blue-600' };
            case 'sports': return { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', icon: 'text-green-600' };
            case 'vacation': return { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', icon: 'text-orange-600' };
            case 'academic': return { bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-700', icon: 'text-teal-600' };
            case 'event': return { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700', icon: 'text-yellow-600' };
            case 'result': return { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700', icon: 'text-amber-600' };
            default: return { bg: 'bg-gray-50', border: 'border-gray-200', text: 'text-gray-700', icon: 'text-gray-600' };
        }
    };

    const filteredEvents = activeCategory === 'all' 
        ? academicEvents 
        : academicEvents.filter(event => event.type === activeCategory);

    const getEventCount = (categoryId) => {
        return categoryId === 'all' 
            ? academicEvents.length 
            : academicEvents.filter(event => event.type === categoryId).length;
    };

    return (
        <div className="min-h-screen bg-background">
            <IcsePrimaryHeader />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-blue-900 text-white relative overflow-hidden mt-20">
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
                            <CalendarIcon className="w-20 h-20 text-white/90" />
                        </motion.div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">Academic Calendar 2025-26</h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-6">
                            Complete schedule of academic year events and examinations
                        </p>
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-6 py-3 rounded-full">
                            <Calendar size={20} />
                            <span className="font-semibold">{academicEvents.length} Events Planned</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Category Filter Cards */}
            <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <h3 className="text-2xl font-bold text-center text-primary mb-8">Event Categories</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                            {categories.map((category) => {
                                const CategoryIcon = category.icon;
                                const isActive = activeCategory === category.id;
                                const count = getEventCount(category.id);
                                
                                return (
                                    <motion.button
                                        key={category.id}
                                        onClick={() => setActiveCategory(category.id)}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`relative flex flex-col items-center p-4 rounded-2xl border-2 transition-all ${
                                            isActive 
                                                ? `${category.color} ${category.textColor} ${category.borderColor} shadow-xl` 
                                                : 'bg-white text-gray-700 border-gray-200 hover:shadow-lg'
                                        }`}
                                    >
                                        <CategoryIcon size={28} className="mb-2" />
                                        <span className="text-xs font-bold text-center leading-tight">{category.label}</span>
                                        <span className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                            isActive ? 'bg-white text-primary' : 'bg-primary text-white'
                                        }`}>
                                            {count}
                                        </span>
                                    </motion.button>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Single Calendar Table */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100"
                    >
                        {/* Table Header */}
                        <div className="bg-gradient-to-r from-primary to-blue-800 text-white px-6 py-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-3xl font-bold">
                                    {activeCategory === 'all' 
                                        ? 'All Events' 
                                        : categories.find(c => c.id === activeCategory)?.label}
                                </h2>
                                <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-full">
                                    <span className="font-semibold">{filteredEvents.length} Events</span>
                                </div>
                            </div>
                        </div>

                        {/* Events Table */}
                        {filteredEvents.length === 0 ? (
                            <div className="text-center py-20">
                                <CalendarIcon className="w-20 h-20 text-gray-300 mx-auto mb-4" />
                                <p className="text-xl text-gray-500">No events found in this category</p>
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gradient-to-r from-gray-100 to-gray-50 border-b-2 border-gray-200">
                                        <tr>
                                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider w-20">SI.NO</th>
                                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Tentative Dates</th>
                                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Day</th>
                                            <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">Events</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredEvents.map((event, idx) => {
                                            const EventIcon = getEventIcon(event.type);
                                            const colors = getEventColor(event.type);
                                            const isNewMonth = idx === 0 || event.month !== filteredEvents[idx - 1].month;
                                            
                                            return (
                                                <React.Fragment key={event.slNo}>
                                                    {isNewMonth && (
                                                        <tr>
                                                            <td colSpan="4" className="px-6 py-3 bg-gradient-to-r from-green-100 to-green-50 border-y-2 border-green-200">
                                                                <div className="flex items-center gap-3">
                                                                    <Calendar size={20} className="text-green-700" />
                                                                    <span className="font-bold text-green-800 text-lg uppercase tracking-wide">{event.month}</span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )}
                                                    <motion.tr
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: idx * 0.03 }}
                                                        className="border-b border-gray-100 hover:bg-gray-50 transition-all group"
                                                    >
                                                        <td className="px-6 py-5">
                                                            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-blue-700 text-white rounded-xl font-bold shadow-md group-hover:scale-110 transition-transform">
                                                                {event.slNo}
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-5">
                                                            <div className="flex items-center gap-3">
                                                                <Clock size={18} className="text-gray-400" />
                                                                <span className="font-bold text-gray-800 text-base">{event.date}</span>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-5">
                                                            <span className="text-gray-700 font-semibold">{event.day}</span>
                                                        </td>
                                                        <td className="px-6 py-5">
                                                            <div className={`inline-flex items-center gap-3 px-5 py-3 rounded-xl border-2 ${colors.bg} ${colors.border} group-hover:shadow-lg transition-shadow`}>
                                                                <EventIcon size={20} className={colors.icon} />
                                                                <span className={`font-bold text-base ${colors.text}`}>{event.event}</span>
                                                            </div>
                                                        </td>
                                                    </motion.tr>
                                                </React.Fragment>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

          
            
        </div>
    );
};

export default IcsePrimaryCalendar;