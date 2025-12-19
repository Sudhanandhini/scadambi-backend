import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, Sun, AlertCircle, Coffee, Phone, Mail } from 'lucide-react';

const IcseHighSchoolTimings = () => {
  const weekdaySchedule = [
    { time: '10:00 AM', activity: 'School Starts', isBreak: false },
    { time: '10:00 AM - 10:45 AM', activity: 'Period 1', isBreak: false },
    { time: '10:45 AM - 11:30 AM', activity: 'Period 2', isBreak: false },
    { time: '11:30 AM - 12:15 PM', activity: 'Period 3', isBreak: false },
    { time: '12:15 PM - 01:00 PM', activity: 'Period 4', isBreak: false },
    { time: '01:00 PM - 01:30 PM', activity: 'Lunch Break', isBreak: true },
    { time: '01:30 PM - 02:15 PM', activity: 'Period 5', isBreak: false },
    { time: '02:15 PM - 03:00 PM', activity: 'Period 6', isBreak: false },
    { time: '03:00 PM - 03:45 PM', activity: 'Period 7', isBreak: false },
    { time: '03:45 PM - 04:00 PM', activity: 'Period 8', isBreak: false },
    { time: '04:00 PM', activity: 'School Ends', isBreak: false },
  ];

  const saturdaySchedule = [
    { time: '08:45 AM', activity: 'School Starts', isBreak: false },
    { time: '08:45 AM - 09:30 AM', activity: 'Period 1', isBreak: false },
    { time: '09:30 AM - 10:15 AM', activity: 'Period 2', isBreak: false },
    { time: '10:15 AM - 11:00 AM', activity: 'Period 3', isBreak: false },
    { time: '11:00 AM - 11:45 AM', activity: 'Period 4', isBreak: false },
    { time: '11:45 AM - 12:30 PM', activity: 'Period 5', isBreak: false },
    { time: '12:30 PM - 12:45 PM', activity: 'Assembly/Activities', isBreak: true },
    { time: '12:45 PM', activity: 'School Ends', isBreak: false },
  ];

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
              <Clock className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-[#FDB913] to-white bg-clip-text text-transparent">
              School Timings
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
            <p className="text-xl md:text-2xl text-gray-300">Grade 6 to 10 • ICSE High School</p>
          </motion.div>
        </div>
      </section>

      {/* Main Timings Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#0F2A4A]">
              <div className="grid md:grid-cols-5 divide-x divide-gray-200">
                {/* Left Side - Title */}
                <div className="md:col-span-2 bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] p-10 flex items-center justify-center relative overflow-hidden">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-0 bg-[#FDB913]"
                  />
                  <h2 className="text-3xl md:text-4xl font-bold text-white text-center relative z-10">
                    ICSE HIGH SCHOOL
                  </h2>
                </div>
                
                {/* Right Side - Details */}
                <div className="md:col-span-3 p-10 bg-gradient-to-br from-blue-50 to-white">
                  <div className="space-y-6">
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.2 }}
                        className="w-4 h-4 bg-[#FDB913] rounded-full"
                      />
                      <div>
                        <p className="text-xl font-bold text-[#0F2A4A]">GRADE 6 to 10</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.2 }}
                        className="w-4 h-4 bg-[#FDB913] rounded-full"
                      />
                      <div>
                        <p className="text-lg font-semibold text-gray-700">Monday to Friday</p>
                        <p className="text-2xl font-bold text-[#0F2A4A]">10:00 AM to 04:00 PM</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center gap-4"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.2 }}
                        className="w-4 h-4 bg-[#FDB913] rounded-full"
                      />
                      <div>
                        <p className="text-lg font-semibold text-gray-700">Saturday</p>
                        <p className="text-2xl font-bold text-[#0F2A4A]">08:45 to 12:45 PM</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Schedule */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-0.5 w-16 bg-[#0F2A4A]"></div>
              <span className="text-[#0F2A4A] font-bold text-sm uppercase tracking-wider">Schedule</span>
              <div className="h-0.5 w-16 bg-[#0F2A4A]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">Detailed Timetable</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#FDB913] to-yellow-600 mx-auto rounded-full"
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Weekday Schedule */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-t-4 border-[#FDB913]">
                <div className="bg-gradient-to-r from-[#FDB913] to-yellow-600 text-white p-8">
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Sun className="w-12 h-12" />
                    </motion.div>
                    <div>
                      <h3 className="text-3xl font-bold">Monday - Friday</h3>
                      <p className="text-yellow-100 text-lg">Weekday Schedule</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {weekdaySchedule.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ x: 5 }}
                        className={`flex items-center justify-between p-4 rounded-2xl transition-all ${
                          item.isBreak
                            ? 'bg-gradient-to-r from-[#FDB913]/20 to-[#FDB913]/30 border-2 border-[#FDB913]'
                            : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          {item.isBreak ? (
                            <Coffee className="w-6 h-6 text-[#FDB913]" />
                          ) : (
                            <Clock className="w-6 h-6 text-[#0F2A4A]" />
                          )}
                          <span className="font-bold text-[#0F2A4A] text-lg">{item.time}</span>
                        </div>
                        <span className={`font-semibold text-lg ${item.isBreak ? 'text-[#FDB913]' : 'text-gray-700'}`}>
                          {item.activity}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Saturday Schedule */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-t-4 border-[#0F2A4A]">
                <div className="bg-gradient-to-r from-[#0F2A4A] to-[#1a4d7a] text-white p-8">
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Calendar className="w-12 h-12 text-[#FDB913]" />
                    </motion.div>
                    <div>
                      <h3 className="text-3xl font-bold">Saturday</h3>
                      <p className="text-gray-200 text-lg">Half-day Schedule</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {saturdaySchedule.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ x: -5 }}
                        className={`flex items-center justify-between p-4 rounded-2xl transition-all ${
                          item.isBreak
                            ? 'bg-gradient-to-r from-[#FDB913]/20 to-[#FDB913]/30 border-2 border-[#FDB913]'
                            : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          {item.isBreak ? (
                            <Calendar className="w-6 h-6 text-[#FDB913]" />
                          ) : (
                            <Clock className="w-6 h-6 text-[#0F2A4A]" />
                          )}
                          <span className="font-bold text-[#0F2A4A] text-lg">{item.time}</span>
                        </div>
                        <span className={`font-semibold text-lg ${item.isBreak ? 'text-[#FDB913]' : 'text-gray-700'}`}>
                          {item.activity}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] rounded-3xl shadow-2xl p-10 text-white relative overflow-hidden"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-[#FDB913]"
              />
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-[#FDB913] rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <AlertCircle className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold">General Guidelines</h3>
              </div>
              <ul className="space-y-4 relative z-10">
                {[
                  'Students must arrive before 10:00 AM on weekdays',
                  'Saturday classes start at 8:45 AM (earlier than weekdays)',
                  'Lunch break is from 1:00 PM to 1:30 PM (30 minutes)',
                  'Each period is 45 minutes long'
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-[#FDB913] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl shadow-2xl p-10 border-4 border-[#FDB913]"
            >
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-[#FDB913] to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <Clock className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold text-[#0F2A4A]">Contact for Queries</h3>
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                For any questions regarding school timings or schedule:
              </p>
              <div className="space-y-4">
                <motion.a
                  href="tel:08023232831"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl hover:shadow-lg transition-all group"
                >
                  <div className="w-14 h-14 bg-[#0F2A4A] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-7 h-7 text-[#FDB913]" />
                  </div>
                  <span className="text-xl font-semibold text-[#0F2A4A]">080-23232831</span>
                </motion.a>
                <motion.a
                  href="mailto:scvk123@rediffmail.com"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl hover:shadow-lg transition-all group"
                >
                  <div className="w-14 h-14 bg-[#FDB913] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-xl font-semibold text-[#0F2A4A]">scvk123@rediffmail.com</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 bg-gradient-to-r from-[#FDB913] to-yellow-600 rounded-3xl p-8 text-white shadow-2xl"
          >
            <div className="flex items-start gap-4">
              <AlertCircle className="w-10 h-10 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-3">Important Note</h3>
                <p className="leading-relaxed text-lg">
                  Students are expected to arrive 10 minutes before the start of school. 
                  Late arrivals may result in missed attendance or important announcements.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IcseHighSchoolTimings;