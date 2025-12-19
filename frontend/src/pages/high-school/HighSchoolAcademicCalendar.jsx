import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react';

const HighSchoolAcademicCalendarAccordion = () => {
  const [expandedMonth, setExpandedMonth] = useState(null);

  const academicYear = '2025-2026';

  const monthlyEvents = [
    {
      month: 'May 2025',
      events: [
        { date: '19-05-2025', day: 'Monday', event: 'Parent orientation program & Commencement of 10th classes', committee: 'PTS Committee' },
        { date: '26-05-2025', day: 'Monday', event: 'Parent orientation program for 8th std', committee: 'Cultural Committee' },
        { date: '28-05-2025', day: 'Wednesday', event: 'Veer Savarkar Day', committee: '' },
        { date: '29-05-2025', day: 'Thursday', event: 'Commencement of 8th and 9th classes', committee: 'Election Committee' },
        { date: '31-05-2025', day: 'Saturday', event: 'World No Tobacco Day', committee: '' },
      ]
    },
    {
      month: 'June 2025',
      events: [
        { date: '05-06-2025', day: 'Thursday', event: 'World Environmental Day', committee: 'Discipline Committee' },
        { date: '12-06-2025', day: 'Thursday', event: 'World Child Labour Day', committee: '' },
        { date: '18-06-2025', day: 'Wednesday', event: 'Election Day', committee: 'Sports Club' },
      ]
    },
    {
      month: 'July 2025',
      events: [
        { date: '04-07-2025', day: 'Friday', event: 'Formative Assessment - I', committee: 'Science Club' },
        { date: '19-07-2025', day: 'Saturday', event: '1st Term Parent Teacher Meeting', committee: '' },
        { date: '21-07-2025', day: 'Monday', event: 'Investiture Ceremony', committee: '' },
        { date: '26-07-2025', day: 'Friday', event: 'Kargil Diwas', committee: '' },
      ]
    },
    {
      month: 'August 2025',
      events: [
        { date: '09-08-2025', day: 'Monday', event: 'World Sanskrit Day Celebration', committee: 'Competitions' },
        { date: '12-08-2025', day: 'Tuesday', event: 'Commencement of Talents Week', committee: '' },
        { date: '18-08-2025', day: 'Monday', event: 'Formative Assessment - II', committee: '' },
        { date: '20-08-2025', day: 'Wednesday', event: 'National Sadhbhavan Day', committee: '' },
      ]
    },
    {
      month: 'September 2025',
      events: [
        { date: '13-09-2025', day: 'Saturday', event: 'Summative Assessment I', committee: '' },
        { date: '15-09-2025', day: 'Monday', event: 'Hindi Diwas/Engineers Day', committee: '' },
        { date: '16-09-2025', day: 'Tuesday', event: 'World Ozone Day', committee: '' },
      ]
    },
    {
      month: 'October 2025',
      events: [
        { date: '17-10-2025', day: 'Friday', event: 'Annual Sports Day', committee: '' },
        { date: '18-10-2025', day: 'Saturday', event: 'Annual Sports Day (Day 2)', committee: '' },
        { date: '25-10-2025', day: 'Saturday', event: 'Mid Term Parent Teacher Meeting', committee: '' },
      ]
    },
    {
      month: 'November 2025',
      events: [
        { date: '01-11-2025', day: 'Saturday', event: 'Kannada Rajyotsava', committee: '' },
        { date: '14-11-2025', day: 'Friday', event: 'Children\'s Day', committee: '' },
        { date: '15-11-2025', day: 'Saturday', event: 'Sammilana 2025 Inter-school Competition', committee: '' },
        { date: '24-11-2025', day: 'Monday', event: 'Formative Assessment - III', committee: '' },
        { date: '26-11-2025', day: 'Wednesday', event: 'Constitution Day', committee: '' },
      ]
    },
    {
      month: 'December 2025',
      events: [
        { date: '06-12-2025', day: 'Saturday', event: 'Parent Teacher Meeting', committee: '' },
        { date: '27-12-2025', day: 'Saturday', event: 'SAMANVAYA - 2025', committee: '' },
      ]
    },
    {
      month: 'January 2026',
      events: [
        { date: '05-01-2026', day: 'Monday', event: 'Formative Assessment - IV', committee: '' },
        { date: '12-01-2026', day: 'Monday', event: 'National Youth Day', committee: '' },
        { date: '17-01-2026', day: 'Saturday', event: 'Parent Teacher Meeting', committee: '' },
        { date: '19-01-2026', day: 'Monday', event: 'Preparatory Exam - I (10th std)', committee: '' },
      ]
    },
    {
      month: 'February 2026',
      events: [
        { date: '09-02-2026', day: 'Monday', event: 'Preparatory Exam - II (10th std)', committee: '' },
        { date: '23-02-2026', day: 'Monday', event: 'Preparatory Exam - I (8th and 9th std)', committee: '' },
        { date: '28-02-2026', day: 'Saturday', event: 'National Science Day', committee: '' },
      ]
    },
    {
      month: 'March 2026',
      events: [
        { date: '1st Week', day: '', event: 'Preparatory Exam - III (10th std)', committee: '' },
        { date: '3rd Week', day: '', event: 'Final Exams - 8th and 9th std', committee: '' },
        { date: 'Last Week', day: '', event: 'SSLC Final Exams', committee: '' },
      ]
    },
    {
      month: 'April 2026',
      events: [
        { date: '1st/2nd Week', day: '', event: 'Results - 8th & 9th', committee: '' },
      ]
    },
  ];

  const toggleMonth = (month) => {
    setExpandedMonth(expandedMonth === month ? null : month);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F2A4A] via-[#1a4d7a] to-[#0F2A4A] text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDB913] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500 opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FDB913] to-green-500 rounded-2xl mb-6 shadow-2xl"
            >
              <Calendar className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-[#FDB913] to-green-400 bg-clip-text text-transparent">
              Academic Calendar
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-16 bg-[#FDB913]"></div>
              <div className="h-1 w-8 bg-green-500"></div>
              <div className="h-1 w-16 bg-[#FDB913]"></div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Academic Year {academicYear}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {monthlyEvents.map((monthData, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border-2 border-gray-100"
              >
                {/* Month Header */}
                <button
                  onClick={() => toggleMonth(monthData.month)}
                  className="w-full px-8 py-6 flex items-center justify-between bg-gradient-to-r from-gray-50 to-white hover:from-[#FDB913]/10 hover:to-green-50 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FDB913] to-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0F2A4A]">{monthData.month}</h2>
                    <span className="px-4 py-2 bg-gradient-to-r from-[#FDB913] to-green-500 text-white text-sm font-bold rounded-full shadow-lg">
                      {monthData.events.length} Events
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500 hidden sm:block">
                      {expandedMonth === monthData.month ? 'Click to collapse' : 'Click to expand'}
                    </span>
                    {expandedMonth === monthData.month ? (
                      <ChevronUp className="w-7 h-7 text-[#FDB913]" />
                    ) : (
                      <ChevronDown className="w-7 h-7 text-green-500" />
                    )}
                  </div>
                </button>

                {/* Events List */}
                {expandedMonth === monthData.month && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t-2 border-gray-100"
                  >
                    <div className="p-8 space-y-4 bg-gradient-to-br from-gray-50 to-white">
                      {monthData.events.map((event, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-6 p-6 bg-white rounded-xl hover:bg-gradient-to-r hover:from-[#FDB913]/5 hover:to-green-50 transition-all shadow-md hover:shadow-lg border-2 border-gray-100 hover:border-[#FDB913]/30"
                        >
                          <div className="flex-shrink-0 text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] text-white rounded-xl flex flex-col items-center justify-center shadow-lg">
                              <span className="text-2xl font-bold">
                                {event.date.split('-')[0] || '?'}
                              </span>
                              <span className="text-xs mt-1 text-gray-300">{event.day}</span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-[#0F2A4A] mb-2 leading-tight">
                              {event.event}
                            </h3>
                            {event.committee && (
                              <div className="flex items-center gap-2 mb-2">
                                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                                  {event.committee}
                                </span>
                              </div>
                            )}
                            <p className="text-sm text-gray-500 font-medium">
                              📅 {event.date}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Competitions Note */}
      <section className="py-20 bg-gradient-to-br from-[#0F2A4A] via-[#1a4d7a] to-[#0F2A4A] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-6 py-2 bg-white/20 text-white rounded-full text-sm font-semibold mb-4">
              August Special
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Talent Week Competitions</h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-16 bg-[#FDB913]"></div>
              <div className="h-1 w-8 bg-green-500"></div>
              <div className="h-1 w-16 bg-[#FDB913]"></div>
            </div>
            <p className="text-xl text-gray-300 mb-12">
              During August, we organize various inter-class competitions including:
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {['Debate', 'Bhagavad Gita Recitation', 'Drawing', 'Face Painting', 'Folk Dance', 'Rangoli', 'Solo Singing', 'Dance', 'Clay Modeling', 'Best Out of Waste', 'Vegetable Carving', 'Cooking Without Fire'].map((comp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center hover:bg-white/20 transition-all border border-white/20 font-semibold"
              >
                {comp}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#FDB913] to-[#FDB913] rounded-3xl shadow-2xl p-12 md:p-16 text-white text-center"
          >
            <Calendar className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Important Note</h2>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto">
              Dates are tentative and subject to change. Parents and students will be notified 
              in advance about any modifications to the calendar. Please check regularly for updates.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HighSchoolAcademicCalendarAccordion;