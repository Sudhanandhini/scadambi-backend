import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, Sun, AlertCircle, Coffee } from 'lucide-react';

const HighSchoolSchoolTimings = () => {
  const weekdaySchedule = [
    { time: '09:45 AM', activity: 'School Starts', isBreak: false },
    { time: '09:45 AM - 10:30 AM', activity: 'Period 1', isBreak: false },
    { time: '10:30 AM - 11:15 AM', activity: 'Period 2', isBreak: false },
    { time: '11:15 AM - 12:00 PM', activity: 'Period 3', isBreak: false },
    { time: '12:00 PM - 12:45 PM', activity: 'Period 4', isBreak: false },
    { time: '12:45 PM - 01:15 PM', activity: 'Lunch Break', isBreak: true },
    { time: '01:15 PM - 02:00 PM', activity: 'Period 5', isBreak: false },
    { time: '02:00 PM - 02:45 PM', activity: 'Period 6', isBreak: false },
    { time: '02:45 PM - 03:30 PM', activity: 'Period 7', isBreak: false },
    { time: '03:30 PM - 04:00 PM', activity: 'Period 8', isBreak: false },
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
              <Clock className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-[#FDB913] to-green-400 bg-clip-text text-transparent">
              School Timings
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-16 bg-[#FDB913]"></div>
              <div className="h-1 w-8 bg-green-500"></div>
              <div className="h-1 w-16 bg-[#FDB913]"></div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Grade 9-10 • State High School
            </p>
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
            className="grid md:grid-cols-2 gap-8"
          >
            {/* STATE HIGH SCHOOL Box */}
            <div className="md:col-span-2 mb-8">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-[#0F2A4A]">
                <div className="grid md:grid-cols-5 divide-x divide-gray-200">
                  {/* Left Side - STATE HIGH SCHOOL */}
                  <div className="md:col-span-2 bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] p-10 flex items-center justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                      STATE HIGH SCHOOL
                    </h2>
                  </div>
                  
                  {/* Right Side - Details */}
                  <div className="md:col-span-3 p-8 bg-gradient-to-br from-blue-50 to-white">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-[#FDB913] rounded-full"></div>
                        <div>
                          <p className="text-xl font-bold text-[#0F2A4A]">GRADE 9-10</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-[#FDB913] rounded-full"></div>
                        <div>
                          <p className="text-lg font-semibold text-gray-700">MONDAY TO FRIDAY</p>
                          <p className="text-2xl font-bold text-[#0F2A4A]">09:45 A.M TO 04:00 PM</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div>
                          <p className="text-lg font-semibold text-gray-700">SATURDAY</p>
                          <p className="text-2xl font-bold text-[#0F2A4A]">08:45 TO 12:45 P.M</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Schedule */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-6 py-2 bg-[#FDB913]/20 text-[#FDB913] rounded-full text-sm font-semibold mb-4">
              Daily Schedule
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-4">
              Detailed Timetable
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="h-1 w-20 bg-[#FDB913] rounded"></div>
              <div className="h-1 w-12 bg-green-500 rounded"></div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Weekday Schedule */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-t-4 border-[#FDB913]">
                <div className="bg-gradient-to-r from-[#FDB913] to-[#f5a503] text-white p-8">
                  <div className="flex items-center gap-4">
                    <Sun className="w-10 h-10" />
                    <div>
                      <h3 className="text-2xl font-bold">Monday - Friday</h3>
                      <p className="text-yellow-100">Weekday Schedule</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-2">
                    {weekdaySchedule.map((item, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-between p-4 rounded-xl transition-all ${
                          item.isBreak
                            ? 'bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-500'
                            : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {item.isBreak ? (
                            <Coffee className="w-5 h-5 text-green-600" />
                          ) : (
                            <Clock className="w-5 h-5 text-[#FDB913]" />
                          )}
                          <span className="font-bold text-[#0F2A4A]">{item.time}</span>
                        </div>
                        <span className={`font-semibold ${item.isBreak ? 'text-green-700' : 'text-gray-700'}`}>
                          {item.activity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Saturday Schedule */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-t-4 border-green-500">
                <div className="bg-gradient-to-r from-green-600 to-green-500 text-white p-8">
                  <div className="flex items-center gap-4">
                    <Calendar className="w-10 h-10" />
                    <div>
                      <h3 className="text-2xl font-bold">Saturday</h3>
                      <p className="text-green-100">Half-day Schedule</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-2">
                    {saturdaySchedule.map((item, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-between p-4 rounded-xl transition-all ${
                          item.isBreak
                            ? 'bg-gradient-to-r from-[#FDB913]/10 to-[#FDB913]/20 border-2 border-[#FDB913]'
                            : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {item.isBreak ? (
                            <Calendar className="w-5 h-5 text-[#FDB913]" />
                          ) : (
                            <Clock className="w-5 h-5 text-green-600" />
                          )}
                          <span className="font-bold text-[#0F2A4A]">{item.time}</span>
                        </div>
                        <span className={`font-semibold ${item.isBreak ? 'text-[#FDB913]' : 'text-gray-700'}`}>
                          {item.activity}
                        </span>
                      </div>
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
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] rounded-2xl shadow-2xl p-8 text-white"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#FDB913] rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">General Guidelines</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FDB913] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">Students must arrive before 9:45 AM on weekdays</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#FDB913] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">Saturday classes start at 8:45 AM (earlier than weekdays)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">Lunch break is from 12:45 PM to 1:15 PM (30 minutes)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="leading-relaxed">Each period is 45 minutes long</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-green-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F2A4A]">Contact for Queries</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                For any questions regarding school timings or schedule:
              </p>
              <div className="space-y-4">
                <a
                  href="tel:08023232831"
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                >
                  <div className="w-10 h-10 bg-[#FDB913] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-[#0F2A4A]">080-23232831</span>
                </a>
                <a
                  href="mailto:scvk123@rediffmail.com"
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                >
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <AlertCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-[#0F2A4A]">scvk123@rediffmail.com</span>
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 bg-gradient-to-r from-[#FDB913] to-[#FDB913] rounded-2xl p-8 text-white shadow-2xl"
          >
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-3">Important Note</h3>
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

export default HighSchoolSchoolTimings;