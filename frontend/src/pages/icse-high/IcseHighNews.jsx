import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Calendar, Trophy, Sparkles, BookOpen, GraduationCap, PartyPopper, Flower2, ClipboardList, Star, ChevronRight, Mail, Phone } from 'lucide-react';

const IcseHighNews = () => {
  const upcomingEvents = [
    { 
      icon: PartyPopper, 
      title: 'Sammilana - Annual School Fest', 
      description: 'Join us for our grand annual cultural festival celebrating talent and creativity',
      date: 'Coming Soon',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      icon: Trophy, 
      title: 'Republic Day 2026', 
      description: 'Celebrating the spirit of democracy with patriotic performances and activities',
      date: 'January 26, 2026',
      color: 'from-orange-500 to-red-500'
    },
    { 
      icon: GraduationCap, 
      title: 'Graduation Day for Grade 10', 
      description: 'Honoring our Grade 10 students as they complete their ICSE journey',
      date: 'Coming Soon',
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      icon: Flower2, 
      title: 'Saraswati Puja', 
      description: 'Seeking blessings of the Goddess of Knowledge for academic success',
      date: 'February 2026',
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      icon: ClipboardList, 
      title: 'ICSE Board Exams - Grade 10', 
      description: 'Board examinations for Grade 10 students',
      date: 'February - March 2026',
      color: 'from-[#0F2A4A] to-[#1a4d7a]'
    },
    { 
      icon: BookOpen, 
      title: 'Annual Exams - Grades 6 to 9', 
      description: 'Final examinations for Grades 6, 7, 8, and 9',
      date: 'February - March 2026',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const importantNotices = [
    'Exam schedules will be announced 2 weeks prior to commencement',
    'Students must carry their ID cards during examination days',
    'Regular attendance is mandatory for all students',
    'Parent-teacher meetings scheduled quarterly',
    'Updated fee structure available at the office'
  ];

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
              <Bell className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-[#FDB913] to-white bg-clip-text text-transparent">
              News & Announcements
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
            <p className="text-xl md:text-2xl text-gray-300">Stay Updated with Latest Events & Notices</p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-0.5 w-16 bg-[#0F2A4A]"></div>
              <span className="text-[#0F2A4A] font-bold text-sm uppercase tracking-wider">Upcoming</span>
              <div className="h-0.5 w-16 bg-[#0F2A4A]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">Upcoming Events</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#FDB913] to-yellow-600 mx-auto rounded-full"
            />
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {upcomingEvents.map((event, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 relative overflow-hidden group h-full">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 bg-gradient-to-br ${event.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10`}
                  >
                    <event.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Date Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="absolute top-6 right-6 bg-[#FDB913] text-[#0F2A4A] px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10"
                  >
                    {event.date}
                  </motion.div>

                  <h3 className="text-xl font-bold text-[#0F2A4A] mb-3 relative z-10">{event.title}</h3>
                  <p className="text-gray-700 leading-relaxed relative z-10">{event.description}</p>

                  {/* Decorative Element */}
                  <motion.div
                    className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#FDB913] rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Important Notices Section */}
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
              <span className="text-[#0F2A4A] font-bold text-sm uppercase tracking-wider">Notices</span>
              <div className="h-0.5 w-16 bg-[#0F2A4A]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">Important Notices</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#FDB913] to-yellow-600 mx-auto rounded-full"
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Notices List */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-10 shadow-2xl border-t-4 border-[#FDB913]"
            >
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-[#FDB913] to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <Star className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold text-[#0F2A4A]">General Notices</h3>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {importantNotices.map((notice, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-3 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="flex-shrink-0 w-2 h-2 bg-[#FDB913] rounded-full mt-2"
                    />
                    <ChevronRight className="w-5 h-5 text-[#0F2A4A] flex-shrink-0 mt-0.5 group-hover:text-[#FDB913] transition-colors" />
                    <span className="text-gray-800 font-medium group-hover:text-[#0F2A4A] transition-colors">{notice}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Academic Calendar Highlight */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] rounded-3xl p-10 shadow-2xl text-white relative overflow-hidden"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-0 right-0 w-64 h-64 bg-[#FDB913] rounded-full opacity-10 blur-3xl"
              />

              <h3 className="text-3xl font-bold mb-8 relative z-10">Academic Highlights</h3>
              
              <div className="space-y-6 relative z-10">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-6 h-6 text-[#FDB913]" />
                    <h4 className="text-xl font-semibold text-[#FDB913]">Examination Period</h4>
                  </div>
                  <p className="text-gray-200">Board and Annual Exams scheduled for February - March 2026</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Trophy className="w-6 h-6 text-[#FDB913]" />
                    <h4 className="text-xl font-semibold text-[#FDB913]">Cultural Events</h4>
                  </div>
                  <p className="text-gray-200">Sammilana Annual Fest and special celebrations throughout the year</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap className="w-6 h-6 text-[#FDB913]" />
                    <h4 className="text-xl font-semibold text-[#FDB913]">Graduation Ceremony</h4>
                  </div>
                  <p className="text-gray-200">Celebrating achievements of our Grade 10 graduating class</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Exam Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-0.5 w-16 bg-[#0F2A4A]"></div>
              <span className="text-[#0F2A4A] font-bold text-sm uppercase tracking-wider">Timeline</span>
              <div className="h-0.5 w-16 bg-[#0F2A4A]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">Examination Schedule 2026</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#FDB913] to-yellow-600 mx-auto rounded-full"
            />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Grade 10 ICSE Exams */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative pl-8 border-l-4 border-[#FDB913]"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-[#FDB913] rounded-full border-4 border-white shadow-lg" />
                <div className="bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] rounded-2xl p-8 shadow-xl text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <ClipboardList className="w-8 h-8 text-[#FDB913]" />
                    <h3 className="text-2xl font-bold">ICSE Board Exams - Grade 10</h3>
                  </div>
                  <p className="text-gray-200 mb-2">February - March 2026</p>
                  <p className="text-sm text-gray-300">Final board examinations for Grade 10 students</p>
                </div>
              </motion.div>

              {/* Grades 6-9 Annual Exams */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative pl-8 border-l-4 border-[#FDB913]"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-[#FDB913] rounded-full border-4 border-white shadow-lg" />
                <div className="bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] rounded-2xl p-8 shadow-xl text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="w-8 h-8 text-white" />
                    <h3 className="text-2xl font-bold">Annual Exams - Grades 6 to 9</h3>
                  </div>
                  <p className="text-gray-100 mb-2">February - March 2026</p>
                  <p className="text-sm text-gray-100">Final examinations for Grades 6, 7, 8, and 9</p>
                </div>
              </motion.div>

              {/* End marker */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative pl-8 border-l-4 border-transparent"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-gray-300 rounded-full border-4 border-white shadow-lg" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-[#0F2A4A] via-[#1a4d7a] to-[#0F2A4A] rounded-[3rem] shadow-2xl p-16 text-center text-white overflow-hidden"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-0 left-0 w-full h-full bg-[#FDB913] opacity-10 rounded-[3rem]"
            />
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <Bell className="w-20 h-20 text-[#FDB913] mx-auto" />
              </motion.div>
              
              <h2 className="text-5xl font-bold mb-6">Stay Updated!</h2>
              <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-gray-200">
                Never miss important announcements, events, or updates. Contact us for more information.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <motion.a 
                  href="tel:08023232831"
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center justify-center gap-3 bg-[#FDB913] hover:bg-yellow-600 text-[#0F2A4A] px-8 py-5 rounded-full font-bold transition-all shadow-2xl text-lg relative overflow-hidden"
                >
                  <Phone className="w-6 h-6 group-hover:animate-bounce" />
                  <span>080-23232831</span>
                </motion.a>

                <motion.a 
                  href="mailto:scvk123@rediffmail.com"
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-[#0F2A4A] px-8 py-5 rounded-full font-bold transition-all shadow-2xl text-lg relative overflow-hidden"
                >
                  <Mail className="w-6 h-6 group-hover:animate-bounce" />
                  <span>Email Us</span>
                </motion.a>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex items-center justify-center gap-2 text-[#FDB913]"
              >
                <Sparkles className="w-5 h-5" />
                <p className="text-sm">Get notified about all upcoming events and important dates</p>
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute -bottom-20 -right-20 w-64 h-64 bg-green-500 rounded-full opacity-10 blur-3xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IcseHighNews;