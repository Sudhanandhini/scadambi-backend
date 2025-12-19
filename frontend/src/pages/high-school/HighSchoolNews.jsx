import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar,
  Trophy,
  Flag,
  Flower,
  BookOpen,
  ClipboardCheck,
  GraduationCap,
  Bell,
  Sparkles,
  Clock,
  FileText,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const HighSchoolNews = () => {
  const [expandedTable, setExpandedTable] = useState(null);

  const upcomingEvents = [
    {
      title: 'Sammilana',
      description: 'Inter school competitions 2025-26',
      icon: Trophy,
      color: 'from-[#0F2A4A]/50 to-[#0F2A4A]'
    },
    {
      title: 'Samanvaya',
      description: 'Annual Sports display and cultural meet 2025',
      icon: Sparkles,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Republic Day Celebration',
      description: '26/01/2026',
      icon: Flag,
      color: 'from-[#0F2A4A]/50 to-[#0F2A4A]'
    },
    {
      title: 'Saraswathi Pooja',
      description: '2026',
      icon: Flower,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const examTimetables = [
    {
      title: 'SSLC Preparatory-1 Examination 2025-26',
      dates: '05/01/2026 - 10/01/2026',
      schedule: [
        { date: '05.01.2026 Monday', subject: 'First Language', languages: 'Kannada, Telugu, Hindi, Marati, Tamil, Urdu, English, English (NCERT), Sanskrit', codes: '01, 04, 06, 08, 10, 12, 14, 15, 16', time: '10.00AM - 1.15 PM', duration: '3:00 Hours 15Mins', marks: '100' },
        { date: '06.01.2026 Tuesday', subject: 'Core Subject', languages: 'Mathematics', codes: '81', time: '10.00AM - 1.15 PM', duration: '3:00 Hours 15 Mins', marks: '80' },
        { date: '07.01.2026 Wednesday', subject: 'Second Language', languages: 'English, Kannada', codes: '31, 33', time: '10.00AM - 1.00 PM', duration: '2:45 Hours 15 Mins', marks: '80' },
        { date: '08.01.2026 Thursday', subject: 'Third Language', languages: 'Hindi (NCERT), Hindi, Kannada, English, Arabic, Persian, Urdu, Sanskrit, Konkani, Tulu, Marathi', codes: '60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70', time: '10.00AM - 1.00 PM', duration: '2:45 Hours 15 Mins', marks: '80' },
        { date: '09.01.2026 Friday', subject: 'Core Subject', languages: 'Science', codes: '83', time: '10.00AM - 1.15 PM', duration: '3:00 Hours 15 Mins', marks: '80' },
        { date: '10.01.2026 Saturday', subject: 'Core Subject', languages: 'Social Science', codes: '85', time: '10.00AM - 1.15 PM', duration: '3:00 Hours 15 Mins', marks: '80' }
      ]
    },
    {
      title: 'SSLC Preparatory-2 Examination 2025-26',
      dates: '27/01/2026 - 02/02/2026',
      schedule: [
        { date: '27.01.2026 Tuesday', subject: 'First Language', languages: 'Kannada, Telugu, Hindi, Marati, Tamil, Urdu, English, English (NCERT), Sanskrit', codes: '01, 04, 06, 08, 10, 12, 14, 15, 16', time: '10.00AM - 1.15 PM', duration: '3:00 Hours 15Mins', marks: '100' },
        { date: '28.01.2026 Wednesday', subject: 'Core Subject', languages: 'Mathematics', codes: '81', time: '10.00AM - 1.15 PM', duration: '3:00 Hours 15 Mins', marks: '80' },
        { date: '29.01.2026 Thursday', subject: 'Second Language', languages: 'English, Kannada', codes: '31, 33', time: '10.00AM - 1.00 PM', duration: '2:45 Hours 15 Mins', marks: '80' },
        { date: '30.01.2026 Friday', subject: 'Third Language', languages: 'Hindi (NCERT), Hindi, Kannada, English, Arabic, Persian, Urdu, Sanskrit, Konkani, Tulu, Marathi', codes: '60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70', time: '10.00AM - 1.00 PM', duration: '2:45 Hours 15 Mins', marks: '80' },
        { date: '31.01.2026 Saturday', subject: 'Core Subject', languages: 'Science', codes: '83', time: '10.00AM - 1.15 PM', duration: '3:00 Hours 15 Mins', marks: '80' },
        { date: '01.02.2026 Sunday', subject: '', languages: 'Holiday', codes: '', time: '', duration: '', marks: '' },
        { date: '02.02.2026 Monday', subject: 'Core Subject', languages: 'Social Science', codes: '85', time: '10.00AM - 1.15 PM', duration: '3:00 Hours 15 Mins', marks: '80' }
      ]
    },
    {
      title: 'SSLC Preparatory-3 Examination 2025-26',
      dates: '23/02/2026 - 28/02/2026',
      schedule: [
        { date: '23.02.2026 Monday', subject: 'First Language', languages: 'Kannada, Telugu, Hindi, Marati, Tamil, Urdu, English, English (NCERT), Sanskrit', codes: '01, 04, 06, 08, 10, 12, 14, 15, 16', time: '10.00AM - 1.15 PM', duration: '3:00 Hours 15Mins', marks: '100' },
        { date: '24.02.2026 Tuesday', subject: 'Core Subject', languages: 'Mathematics', codes: '81', time: '10.00AM - 1.15 PM', duration: '3:00 Hours 15 Mins', marks: '80' },
        { date: '25.02.2026 Wednesday', subject: 'Second Language', languages: 'English, Kannada', codes: '31, 33', time: '10.00AM - 1.00 PM', duration: '2:45 Hours 15 Mins', marks: '80' },
        { date: '26.02.2026 Thursday', subject: 'Third Language', languages: 'Hindi (NCERT), Hindi, Kannada, English, Arabic, Persian, Urdu, Sanskrit, Konkani, Tulu, Marathi', codes: '60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70', time: '10.00AM - 1.00 PM', duration: '2:45 Hours 15 Mins', marks: '80' },
        { date: '27.02.2026 Friday', subject: 'Core Subject', languages: 'Science', codes: '83', time: '10.00AM - 1.15 PM', duration: '3:00 Hours 15 Mins', marks: '80' },
        { date: '28.02.2026 Saturday', subject: 'Core Subject', languages: 'Social Science', codes: '85', time: '10.00AM - 1.15 PM', duration: '3:00 Hours 15 Mins', marks: '80' }
      ]
    }
  ];

  const newsUpdates = [
    {
      title: 'Formative Assessment- 3, 2025-26',
      icon: ClipboardCheck,
      color: 'bg-blue-500'
    },
    {
      title: 'Formative Assessment- 4',
      description: 'for 8th & 9th class will be held on 12/01/2026 to 14/01/2026',
      icon: BookOpen,
      color: 'bg-green-500'
    },
    {
      title: 'Summative Assessment 1 and 2, 2025-26',
      icon: ClipboardCheck,
      color: 'bg-purple-500'
    },
    {
      title: 'Preparatory 1 for 10th class',
      description: 'will be held in the month of 05/01/26 to 10/01/2026',
      icon: GraduationCap,
      color: 'bg-orange-500'
    },
    {
      title: 'Preparatory 2 for 10th class',
      description: 'will be held in the month of 27/01/26 to 02/02/2026',
      icon: GraduationCap,
      color: 'bg-red-500'
    },
    {
      title: 'Preparatory 3 for 10th class',
      description: 'will be held in the month of 23/02/2026 to 28/02/2026',
      icon: GraduationCap,
      color: 'bg-indigo-500'
    },
    {
      title: '10th state board exam',
      description: 'will be held on March 2026',
      icon: GraduationCap,
      color: 'bg-pink-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
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
              <Bell className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-[#FDB913] to-green-400 bg-clip-text text-transparent">
              News & Updates
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-16 bg-[#FDB913]"></div>
              <div className="h-1 w-8 bg-green-500"></div>
              <div className="h-1 w-16 bg-[#FDB913]"></div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest events and announcements
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 space-y-20">
          
          {/* Upcoming Events Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FDB913] to-green-500 rounded-2xl mb-6 shadow-lg"
              >
                <Calendar className="w-8 h-8 text-white" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-4">
                Upcoming Events
              </h2>
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="h-1 w-20 bg-[#FDB913] rounded"></div>
                <div className="h-1 w-12 bg-green-500 rounded"></div>
              </div>
            </div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
            >
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden group"
                >
                  <div className={`h-3 bg-gradient-to-r ${event.color}`}></div>
                  <div className="p-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 bg-gradient-to-br ${event.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <event.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-[#0F2A4A] mb-2 group-hover:text-[#FDB913] transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-transparent via-[#FDB913] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Exam Timetable Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] rounded-2xl mb-6 shadow-lg"
              >
                <Clock className="w-8 h-8 text-white" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-4">
                Time Table for Exams
              </h2>
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="h-1 w-20 bg-[#FDB913] rounded"></div>
                <div className="h-1 w-12 bg-green-500 rounded"></div>
              </div>
            </div>

            <motion.div 
              className="space-y-6"
              variants={containerVariants}
            >
              {examTimetables.map((timetable, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-[#FDB913]"
                >
                  <div 
                    className="bg-gradient-to-r from-[#0F2A4A] to-[#1a4d7a] p-6 cursor-pointer group"
                    onClick={() => setExpandedTable(expandedTable === index ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#FDB913] rounded-xl flex items-center justify-center shadow-lg">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-[#FDB913] transition-colors">
                            {timetable.title}
                          </h3>
                          <p className="text-gray-300 flex items-center gap-2 mt-1">
                            <Calendar className="w-4 h-4" />
                            {timetable.dates}
                          </p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedTable === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {expandedTable === index ? (
                          <ChevronUp className="w-6 h-6 text-[#FDB913]" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-white" />
                        )}
                      </motion.div>
                    </div>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedTable === index ? "auto" : 0,
                      opacity: expandedTable === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-gradient-to-r from-[#0F2A4A] to-[#1a4d7a] text-white">
                              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Date & Day</th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Subject</th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Languages/Codes</th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Time</th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Duration</th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Max Marks</th>
                            </tr>
                          </thead>
                          <tbody>
                            {timetable.schedule.map((item, idx) => (
                              <tr key={idx} className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-[#FDB913]/10 transition-colors`}>
                                <td className="border border-gray-300 px-4 py-3 font-medium text-[#0F2A4A]">{item.date}</td>
                                <td className="border border-gray-300 px-4 py-3 font-semibold text-[#0F2A4A]">{item.subject}</td>
                                <td className="border border-gray-300 px-4 py-3 text-gray-700">
                                  <div>{item.languages}</div>
                                  {item.codes && <div className="text-sm text-gray-500 mt-1">Codes: {item.codes}</div>}
                                </td>
                                <td className="border border-gray-300 px-4 py-3 text-gray-700">{item.time}</td>
                                <td className="border border-gray-300 px-4 py-3 text-gray-700">{item.duration}</td>
                                <td className="border border-gray-300 px-4 py-3 text-center font-bold text-[#FDB913]">{item.marks}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-[#0F2A4A]">
                        <p className="text-sm text-gray-700">
                          <span className="font-bold text-[#0F2A4A]">Note:</span> Head Masters of the School should take action to prepare Question papers for the subjects JTS (51, 52, 54), Alternate Subjects (95, 96, 97, 28 & 29), NSQF (86, 87, 88, 90, 21, 22) and Third Language Marathi (70M) from the concerned teachers at the school level and to conduct examination for the same.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* News Updates Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] rounded-2xl mb-6 shadow-lg"
              >
                <BookOpen className="w-8 h-8 text-white" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-4">
                News Updates
              </h2>
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="h-1 w-20 bg-[#FDB913] rounded"></div>
                <div className="h-1 w-12 bg-green-500 rounded"></div>
              </div>
            </div>

            <motion.div 
              className="space-y-6"
              variants={containerVariants}
            >
              {newsUpdates.map((news, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    x: 10,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border-l-4 border-[#FDB913] group"
                >
                  <div className="flex items-start gap-6 p-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 w-16 h-16 ${news.color} rounded-xl flex items-center justify-center shadow-lg`}
                    >
                      <news.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0F2A4A] mb-2 group-hover:text-[#FDB913] transition-colors">
                        {news.title}
                      </h3>
                      {news.description && (
                        <p className="text-gray-600 leading-relaxed">
                          {news.description}
                        </p>
                      )}
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="flex-shrink-0"
                    >
                      <div className="w-2 h-2 bg-[#FDB913] rounded-full"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#0F2A4A] via-[#1a4d7a] to-[#0F2A4A] rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="relative p-12 text-center">
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FDB913] opacity-10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500 opacity-10 rounded-full blur-3xl"></div>
              </div>
              <div className="relative">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-[#FDB913] rounded-2xl mb-6 shadow-xl"
                >
                  <Bell className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Stay Connected
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Don't miss out on important updates and announcements
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#FDB913] text-[#0F2A4A] px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  Subscribe to Updates
                </motion.button>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default HighSchoolNews;