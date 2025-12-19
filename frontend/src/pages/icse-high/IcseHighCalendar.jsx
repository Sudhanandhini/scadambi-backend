import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Filter, BookOpen, GraduationCap, Trophy, Music, Palette, Award } from 'lucide-react';

const IcseHighCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState('All');

  const months = [
    'All', 'May', 'June', 'July', 'August', 'September', 'October',
    'November', 'December', 'January', 'February', 'March', 'April'
  ];

  const events = [
    {
      date: '29',
      month: 'May',
      year: '2025',
      day: 'Thursday',
      title: 'Commencement of Pre KG - Aksharabhyasa, LKG and UKG',
      category: 'Academic',
      color: 'blue'
    },
    {
      date: '15',
      month: 'June',
      year: '2025',
      day: 'Sunday',
      title: 'Environmental Day Celebration',
      category: 'Cultural',
      color: 'yellow'
    },
    {
      date: '21',
      month: 'June',
      year: '2025',
      day: 'Saturday',
      title: 'International Day of Yoga',
      category: 'Sports',
      color: 'blue'
    },
    {
      date: '21',
      month: 'June',
      year: '2025',
      day: 'Saturday',
      title: 'World Music Day',
      category: 'Cultural',
      color: 'yellow'
    },
    {
      date: '15',
      month: 'August',
      year: '2025',
      day: 'Friday',
      title: 'Independence Day Celebration',
      category: 'National Festival',
      color: 'blue'
    },
    {
      date: '29',
      month: 'August',
      year: '2025',
      day: 'Friday',
      title: 'National Sports Day',
      category: 'Sports',
      color: 'yellow'
    },
    {
      date: '14',
      month: 'September',
      year: '2025',
      day: 'Sunday',
      title: 'Hindi Divas',
      category: 'Cultural',
      color: 'blue'
    },
    {
      date: '20',
      month: 'September',
      year: '2025',
      day: 'Saturday',
      title: 'Samanvaya - Annual Fest',
      category: 'Cultural',
      color: 'yellow'
    },
    {
      date: '15',
      month: 'October',
      year: '2025',
      day: 'Wednesday',
      title: 'Sanskrit Day',
      category: 'Academic',
      color: 'blue'
    },
    {
      date: '01',
      month: 'November',
      year: '2025',
      day: 'Saturday',
      title: 'Kannada Rajyotsava',
      category: 'National Festival',
      color: 'yellow'
    },
    {
      date: '10',
      month: 'November',
      year: '2025',
      day: 'Monday',
      title: 'Sammilana - Inter-school Competitions',
      category: 'Competition',
      color: 'blue'
    },
    {
      date: '15',
      month: 'December',
      year: '2025',
      day: 'Monday',
      title: 'Khelo Cadambi - Annual Sports Day',
      category: 'Sports',
      color: 'yellow'
    },
    {
      date: '20',
      month: 'December',
      year: '2025',
      day: 'Saturday',
      title: 'Talentia - Literary and Co-curricular Competitions',
      category: 'Competition',
      color: 'blue'
    },
    {
      date: '26',
      month: 'January',
      year: '2026',
      day: 'Monday',
      title: 'Republic Day Celebration',
      category: 'National Festival',
      color: 'yellow'
    },
    {
      date: '05',
      month: 'February',
      year: '2026',
      day: 'Thursday',
      title: 'Saraswati Puja',
      category: 'Cultural',
      color: 'blue'
    },
    {
      date: '15',
      month: 'February',
      year: '2026',
      day: 'Sunday',
      title: 'ICSE Board Exams for Grade 10 Begin',
      category: 'Academic',
      color: 'yellow'
    },
    {
      date: '20',
      month: 'February',
      year: '2026',
      day: 'Friday',
      title: 'Annual Exams for Grades 6 to 9 Begin',
      category: 'Academic',
      color: 'blue'
    },
    {
      date: '15',
      month: 'March',
      year: '2026',
      day: 'Sunday',
      title: 'Graduation Day for Grade 10',
      category: 'Academic',
      color: 'yellow'
    }
  ];

  const filteredEvents = selectedMonth === 'All' 
    ? events 
    : events.filter(event => event.month === selectedMonth);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Academic':
        return <BookOpen className="w-5 h-5" />;
      case 'Sports':
        return <Trophy className="w-5 h-5" />;
      case 'Cultural':
        return <Music className="w-5 h-5" />;
      case 'Competition':
        return <Award className="w-5 h-5" />;
      case 'National Festival':
        return <GraduationCap className="w-5 h-5" />;
      default:
        return <Calendar className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Academic':
        return 'bg-[#0F2A4A] text-white';
      case 'Sports':
        return 'bg-green-100 text-green-700';
      case 'Cultural':
        return 'bg-purple-100 text-purple-700';
      case 'Competition':
        return 'bg-red-100 text-red-700';
      case 'National Festival':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F2A4A] via-[#1a4d7a] to-[#0F2A4A] text-white py-32 overflow-hidden mt-16">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-96 h-96 bg-[#FDB913] opacity-10 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-[#FDB913] opacity-10 rounded-full blur-3xl"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#FDB913] to-yellow-600 rounded-3xl mb-6 shadow-2xl"
            >
              <Calendar className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-[#FDB913] to-white bg-clip-text text-transparent">
              Academic Calendar
            </h1>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <div className="h-1 w-16 bg-[#FDB913] rounded-full"></div>
              <motion.div 
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-2 w-2 bg-white rounded-full"
              />
              <div className="h-1 w-16 bg-[#FDB913] rounded-full"></div>
            </motion.div>
            <p className="text-xl md:text-2xl text-gray-300">Stay Updated with All Our Events & Important Dates</p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-3xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <Filter className="w-6 h-6 text-[#0F2A4A]" />
              <h2 className="text-2xl font-bold text-[#0F2A4A]">Filter by Month:</h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {months.map((month) => (
                <motion.button
                  key={month}
                  onClick={() => setSelectedMonth(month)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    selectedMonth === month
                      ? 'bg-[#0F2A4A] text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                  }`}
                >
                  {month}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Date Card */}
                    <div className={`${
                      event.color === 'blue' 
                        ? 'bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a]' 
                        : 'bg-gradient-to-br from-[#FDB913] to-yellow-600'
                    } text-white p-8 md:w-64 flex flex-col items-center justify-center text-center`}>
                      <Calendar className="w-12 h-12 mb-4 opacity-80" />
                      <div className="text-6xl font-bold mb-2">{event.date}</div>
                      <div className="text-2xl font-semibold mb-1">{event.month} {event.year}</div>
                      <div className="text-sm opacity-90">{event.day}</div>
                    </div>

                    {/* Event Details */}
                    <div className="flex-1 p-8">
                      <h3 className="text-2xl md:text-3xl font-bold text-[#0F2A4A] mb-4">
                        {event.title}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold ${getCategoryColor(event.category)}`}>
                          {getCategoryIcon(event.category)}
                          {event.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <Calendar className="w-24 h-24 mx-auto text-gray-300 mb-6" />
                <h3 className="text-3xl font-bold text-gray-400 mb-2">No Events Found</h3>
                <p className="text-gray-500 text-lg">No events scheduled for {selectedMonth}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Upcoming Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">Upcoming Highlights</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#FDB913] to-yellow-600 mx-auto rounded-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] rounded-3xl p-10 text-white shadow-2xl"
          >
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Calendar className="w-8 h-8 text-[#FDB913]" />
              News, Announcements & Notices
            </h3>
            <div className="space-y-4 text-lg leading-relaxed">
              <p className="text-gray-200">
                <strong className="text-[#FDB913]">Upcoming Events:</strong> Sammilana - Annual School Fest, 
                Republic Day 2026, Graduation Day for Grade 10, Saraswati Puja, ICSE Board Exams for Grade 10 
                in February and March, Annual Exams from Grade 6 to 9 in February and March 2026
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IcseHighCalendar;