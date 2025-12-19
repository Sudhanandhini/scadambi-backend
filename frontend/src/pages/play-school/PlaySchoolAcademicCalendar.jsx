import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Star, Sparkles, ChevronRight, ChevronLeft, AlertCircle, Award } from 'lucide-react';

const PlaySchoolAcademicCalendar = () => {
    const [selectedMonth, setSelectedMonth] = useState(null);
    const scrollContainerRef = React.useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const calendarEvents = [
        // MAY 2025
        { slNo: 1, date: "29/05/2025", day: "THURSDAY", month: "MAY", event: "Nursery Inaugural Day", icon: "🎊" },
        
        // JUNE 2025
        { slNo: 2, date: "05/06/2025", day: "THURSDAY", month: "JUNE", event: "Environment Day", icon: "🌍" },
        { slNo: 3, date: "14/06/2025", day: "SATURDAY", month: "JUNE", event: "Father's Day", icon: "👨" },
        { slNo: 4, date: "18/06/2025", day: "WEDNESDAY", month: "JUNE", event: "Red Colour Day", icon: "🔴" },
        { slNo: 5, date: "20/06/2025", day: "FRIDAY", month: "JUNE", event: "Yoga Day", icon: "🧘" },
        
        // JULY 2025
        { slNo: 6, date: "02/07/2025", day: "WEDNESDAY", month: "JULY", event: "Blue Day", icon: "🔵" },
        { slNo: 7, date: "16/07/2025", day: "WEDNESDAY", month: "JULY", event: "Yellow Day", icon: "🟡" },
        { slNo: 8, date: "25/07/2025", day: "FRIDAY", month: "JULY", event: "Kargil Diwas", icon: "🇮🇳" },
        
        // AUGUST 2025
        { slNo: 9, date: "01/08/2025", day: "FRIDAY", month: "AUGUST", event: "Friendship Day", icon: "🤝" },
        { slNo: 10, date: "02/08/2025", day: "SATURDAY", month: "AUGUST", event: "Ist Parent Teacher Meeting", icon: "👥" },
        { slNo: 11, date: "15/08/2025", day: "FRIDAY", month: "AUGUST", event: "Independence Day", icon: "🇮🇳" },
        { slNo: 12, date: "25/08/2025", day: "MONDAY", month: "AUGUST", event: "Gowri and Ganesha", icon: "🙏" },
        
        // SEPTEMBER 2025
        { slNo: 13, date: "04/09/2025", day: "THURSDAY", month: "SEPTEMBER", event: "Teacher's Day", icon: "👩‍🏫" },
        { slNo: 14, date: "10/09/2025", day: "WEDNESDAY", month: "SEPTEMBER", event: "Gokula Janamashtami", icon: "🎭" },
        { slNo: 15, date: "11/09/2025", day: "THURSDAY", month: "SEPTEMBER", event: "Mid Term Exam Starts", icon: "📝" },
        { slNo: 16, date: "20/09/2025", day: "SATURDAY", month: "SEPTEMBER", event: "Mid Term Exam Ends", icon: "✅" },
        { slNo: 17, date: "20/09/2025", day: "SATURDAY", month: "SEPTEMBER", event: "Dasara Celebration", icon: "🎉" },
        { slNo: 18, date: "22/09/2025", day: "MONDAY", month: "SEPTEMBER", event: "Dasara Vacation Begins", icon: "🏖️" },
        
        // OCTOBER 2025
        { slNo: 19, date: "02/10/2025", day: "THURSDAY", month: "OCTOBER", event: "Dasara Vacation Ends", icon: "🔙" },
        { slNo: 20, date: "08/10/2025", day: "WEDNESDAY", month: "OCTOBER", event: "Fruit Salad Day", icon: "🍎" },
        { slNo: 21, date: "11/10/2025", day: "SATURDAY", month: "OCTOBER", event: "IInd Parent Teacher Meeting", icon: "👥" },
        { slNo: 22, date: "18/10/2025", day: "SATURDAY", month: "OCTOBER", event: "Diwali Celebration", icon: "🪔" },
        { slNo: 23, date: "29/10/2025", day: "WEDNESDAY", month: "OCTOBER", event: "Pink Day", icon: "💖" },
        
        // NOVEMBER 2025
        { slNo: 24, date: "01/11/2025", day: "SATURDAY", month: "NOVEMBER", event: "Kannada Rajyothsava", icon: "🎊" },
        { slNo: 25, date: "05/11/2025", day: "WEDNESDAY", month: "NOVEMBER", event: "Orange Day", icon: "🟠" },
        { slNo: 26, date: "08/11/2025", day: "SATURDAY", month: "NOVEMBER", event: "Fancy Dress", icon: "🎭" },
        { slNo: 27, date: "14/11/2025", day: "FRIDAY", month: "NOVEMBER", event: "Children's Day", icon: "👶" },
        
        // DECEMBER 2025
        { slNo: 28, date: "01/12/2025", day: "MONDAY", month: "DECEMBER", event: "Sports Day", icon: "⚽" },
        { slNo: 29, date: "02/12/2025", day: "TUESDAY", month: "DECEMBER", event: "Sports Day", icon: "🏃" },
        { slNo: 30, date: "06/12/2025", day: "WEDNESDAY", month: "DECEMBER", event: "Sports Day", icon: "🎯" },
        { slNo: 31, date: "10/12/2025", day: "WEDNESDAY", month: "DECEMBER", event: "Vegetable Salad Day", icon: "🥗" },
        { slNo: 32, date: "24/12/2025", day: "WEDNESDAY", month: "DECEMBER", event: "Christmas", icon: "🎄" },
        { slNo: 33, date: "27/12/2025", day: "SATURDAY", month: "DECEMBER", event: "Saraswathi Puja", icon: "📚" },
        
        // JANUARY 2026
        { slNo: 34, date: "13/01/2026", day: "TUESDAY", month: "JANUARY", event: "Sankranthi", icon: "🪁" },
        { slNo: 35, date: "26/01/2026", day: "MONDAY", month: "JANUARY", event: "Republic Day", icon: "🇮🇳" },
        
        // FEBRUARY 2026
        { slNo: 36, date: "07/02/2026", day: "SATURDAY", month: "FEBRUARY", event: "Grand Parents Day", icon: "👵👴" },
        
        // MARCH 2026
        { slNo: 37, date: "12/03/2026", day: "THURSDAY", month: "MARCH", event: "Final Exam Starts", icon: "📝" },
        { slNo: 38, date: "25/03/2026", day: "WEDNESDAY", month: "MARCH", event: "Final Exam Ends", icon: "🎓" },
        
        // APRIL 2026
        { slNo: 39, date: "04/04/2026", day: "SATURDAY", month: "APRIL", event: "Result and final parent teacher Meeting", icon: "📊" }
    ];

    const months = ["MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER", "JANUARY", "FEBRUARY", "MARCH", "APRIL"];
    
    const getMonthEvents = (month) => {
        return calendarEvents.filter(event => event.month === month);
    };

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    React.useEffect(() => {
        checkScroll();
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', checkScroll);
            window.addEventListener('resize', checkScroll);
            return () => {
                scrollContainer.removeEventListener('scroll', checkScroll);
                window.removeEventListener('resize', checkScroll);
            };
        }
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
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
                                <Calendar className="w-16 h-16 text-[#0F2A4A]" />
                            </div>
                        </motion.div>
                        
                        <h1 className="text-6xl font-bold mb-6">Academic Calendar</h1>
                        
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "200px" }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="h-1 bg-[#FDB913] mx-auto mb-8"
                        ></motion.div>
                        
                        <p className="text-3xl text-[#FDB913] font-bold mb-4">2025-2026</p>
                        <p className="text-xl max-w-4xl mx-auto text-white/90 leading-relaxed">
                            A comprehensive schedule of academic activities, events, and celebrations throughout the year
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Important Notice - Final Exams */}
            <section className="py-20 -mt-10">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FDB913] to-yellow-600 rounded-3xl opacity-90 blur-sm"></div>
                        <div className="relative bg-gradient-to-br from-[#FDB913] to-yellow-500 rounded-3xl p-10 shadow-2xl border-4 border-white">
                            <div className="flex items-center justify-center mb-6">
                                <motion.div
                                    animate={{
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                >
                                    <AlertCircle className="w-16 h-16 mr-4 text-[#0F2A4A]" />
                                </motion.div>
                                <h2 className="text-4xl font-bold text-[#0F2A4A]">Important Notice</h2>
                            </div>
                            
                            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#0F2A4A]/20">
                                <h3 className="text-3xl font-bold mb-6 text-center text-[#0F2A4A]">Final Examination</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-[#0F2A4A] rounded-xl p-6 text-center shadow-lg"
                                    >
                                        <Clock className="w-10 h-10 text-[#FDB913] mx-auto mb-3" />
                                        <p className="text-[#FDB913] font-semibold mb-2">Start Date</p>
                                        <p className="text-2xl font-bold text-white">12-03-2026</p>
                                        <p className="text-white/80 text-sm mt-1">Thursday</p>
                                    </motion.div>
                                    
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-[#0F2A4A] rounded-xl p-6 text-center shadow-lg"
                                    >
                                        <Star className="w-10 h-10 text-[#FDB913] mx-auto mb-3" />
                                        <p className="text-[#FDB913] font-semibold mb-2">End Date</p>
                                        <p className="text-2xl font-bold text-white">25-03-2026</p>
                                        <p className="text-white/80 text-sm mt-1">Wednesday</p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Month Navigation */}
            <section className="py-12 bg-white sticky top-20 z-40 shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative">
                        {/* Left Arrow */}
                        <AnimatePresence>
                            {canScrollLeft && (
                                <motion.button
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    onClick={() => scroll('left')}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-[#0F2A4A] to-[#1a4070] text-white p-3 rounded-full shadow-xl hover:scale-110 transition-transform"
                                    aria-label="Scroll left"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </motion.button>
                            )}
                        </AnimatePresence>

                        {/* Scrollable Month Container */}
                        <div className="overflow-hidden px-12">
                            <div 
                                ref={scrollContainerRef}
                                className="flex overflow-x-auto gap-3 pb-4 scrollbar-hide scroll-smooth"
                            >
                                {months.map((month, idx) => {
                                    const eventCount = getMonthEvents(month).length;
                                    return (
                                        <motion.button
                                            key={month}
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.05 }}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setSelectedMonth(selectedMonth === month ? null : month)}
                                            className={`flex-shrink-0 px-6 py-3 rounded-xl font-bold transition-all ${
                                                selectedMonth === month
                                                    ? 'bg-gradient-to-r from-[#0F2A4A] to-[#1a4070] text-white shadow-lg'
                                                    : 'bg-gray-100 text-[#0F2A4A] hover:bg-gray-200'
                                            }`}
                                        >
                                            <div className="text-sm whitespace-nowrap">{month}</div>
                                            <div className={`text-xs mt-1 ${selectedMonth === month ? 'text-[#FDB913]' : 'text-gray-500'}`}>
                                                {eventCount} events
                                            </div>
                                        </motion.button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Arrow */}
                        <AnimatePresence>
                            {canScrollRight && (
                                <motion.button
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    onClick={() => scroll('right')}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-[#0F2A4A] to-[#1a4070] text-white p-3 rounded-full shadow-xl hover:scale-110 transition-transform"
                                    aria-label="Scroll right"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </motion.button>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Calendar Events */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatePresence mode="wait">
                        {selectedMonth ? (
                            <motion.div
                                key={selectedMonth}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                            >
                                <div className="mb-8 text-center">
                                    <h2 className="text-4xl font-bold text-[#0F2A4A] mb-2">{selectedMonth} 2025/2026</h2>
                                    <div className="w-32 h-1 bg-[#FDB913] mx-auto"></div>
                                </div>
                                
                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="space-y-4"
                                >
                                    {getMonthEvents(selectedMonth).map((event, idx) => (
                                        <motion.div
                                            key={event.slNo}
                                            variants={itemVariants}
                                            whileHover={{ x: 10, scale: 1.02 }}
                                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border-2 border-transparent hover:border-[#FDB913]"
                                        >
                                            <div className="flex items-center p-6">
                                                <div className="bg-gradient-to-br from-[#0F2A4A] to-[#1a4070] text-white w-16 h-16 rounded-xl flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0 shadow-lg">
                                                    {event.slNo}
                                                </div>
                                                
                                                <div className="text-6xl mr-6 flex-shrink-0">
                                                    {event.icon}
                                                </div>
                                                
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-2xl font-bold text-[#0F2A4A] mb-2">
                                                        {event.event}
                                                    </h3>
                                                    <div className="flex flex-wrap gap-4 text-sm">
                                                        <div className="flex items-center">
                                                            <Calendar className="w-4 h-4 text-[#FDB913] mr-2" />
                                                            <span className="text-gray-600 font-semibold">{event.date}</span>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <Clock className="w-4 h-4 text-[#FDB913] mr-2" />
                                                            <span className="text-gray-600 font-semibold">{event.day}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <ChevronRight className="text-[#FDB913] w-8 h-8 flex-shrink-0 ml-4" />
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-center py-20"
                            >
                                <motion.div
                                    animate={{
                                        y: [0, -15, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <Sparkles className="w-24 h-24 text-[#FDB913] mx-auto mb-6" />
                                </motion.div>
                                <h3 className="text-3xl font-bold text-[#0F2A4A] mb-4">
                                    Select a month to view events
                                </h3>
                                <p className="text-xl text-gray-600">
                                    Choose from the navigation above to see detailed event information
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* All Events Timeline View */}
            {!selectedMonth && (
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">Complete Event Timeline</h2>
                            <div className="w-32 h-1 bg-[#FDB913] mx-auto mb-4"></div>
                            <p className="text-xl text-gray-600">All events for the academic year 2025-2026</p>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {calendarEvents.map((event, idx) => (
                                <motion.div
                                    key={event.slNo}
                                    variants={itemVariants}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-[#FDB913] group"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="bg-gradient-to-br from-[#0F2A4A] to-[#1a4070] text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold shadow-lg">
                                            {event.slNo}
                                        </div>
                                        <span className="text-4xl">{event.icon}</span>
                                    </div>
                                    
                                    <h3 className="text-lg font-bold text-[#0F2A4A] mb-3 group-hover:text-[#FDB913] transition-colors">
                                        {event.event}
                                    </h3>
                                    
                                    <div className="space-y-2">
                                        <div className="flex items-center text-sm">
                                            <Calendar className="w-4 h-4 text-[#FDB913] mr-2 flex-shrink-0" />
                                            <span className="text-gray-600 font-semibold">{event.date}</span>
                                        </div>
                                        <div className="flex items-center text-sm">
                                            <Clock className="w-4 h-4 text-[#FDB913] mr-2 flex-shrink-0" />
                                            <span className="text-gray-600 font-semibold">{event.day}</span>
                                        </div>
                                        <div className="inline-block bg-[#FDB913] text-[#0F2A4A] px-3 py-1 rounded-full text-xs font-bold mt-2">
                                            {event.month}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            )}

            {/* Important Notes */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-[#FDB913]/20"
                    >
                        <div className="text-center mb-8">
                            <motion.div
                                animate={{
                                    rotate: [0, 10, -10, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="inline-block"
                            >
                                <AlertCircle className="w-16 h-16 text-[#FDB913] mb-4" />
                            </motion.div>
                            <h3 className="text-3xl font-bold text-[#0F2A4A]">Important Notes</h3>
                            <div className="w-24 h-1 bg-[#FDB913] mx-auto mt-4"></div>
                        </div>
                        
                        <div className="space-y-4">
                            {[
                                "The calendar is subject to change. Parents will be notified in advance of any modifications.",
                                "Additional holidays may be declared by the school as per government guidelines.",
                                "Parents are requested to check circulars regularly for updates and announcements.",
                                "For more information, please contact the school office during working hours."
                            ].map((note, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                                >
                                    <div className="bg-[#FDB913] w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                        <span className="text-[#0F2A4A] font-bold">{idx + 1}</span>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed pt-1">{note}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F2A4A] via-[#1a4070] to-[#0F2A4A]"></div>
                <div className="absolute inset-0 opacity-10">
                    <motion.div
                        animate={{
                            scale: [1, 1.5, 1],
                            rotate: [0, 360, 0]
                        }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute top-0 left-0 w-96 h-96 bg-[#FDB913] rounded-full blur-3xl"
                    ></motion.div>
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            rotate: [360, 0, 360]
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute bottom-0 right-0 w-96 h-96 bg-[#FDB913] rounded-full blur-3xl"
                    ></motion.div>
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
                            <Award className="w-20 h-20 mx-auto mb-8 text-[#FDB913]" />
                        </motion.div>
                        
                        <h2 className="text-5xl font-bold mb-6 text-white">Join Our School Community</h2>
                        <p className="text-2xl mb-10 text-white/90 leading-relaxed max-w-3xl mx-auto">
                            Be part of our vibrant learning environment filled with fun activities and meaningful experiences throughout the year
                        </p>
                        
                        <motion.a
                            href="/play-school/admissions"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center bg-[#FDB913] hover:bg-yellow-500 text-[#0F2A4A] font-bold px-10 py-5 rounded-2xl transition-all shadow-2xl text-xl"
                        >
                            Apply for Admission
                            <ChevronRight className="ml-2 w-6 h-6" />
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scroll-smooth {
                    scroll-behavior: smooth;
                }
            `}</style>
        </div>
    );
};

export default PlaySchoolAcademicCalendar;