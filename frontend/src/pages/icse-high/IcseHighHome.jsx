import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, Target, ArrowRight, GraduationCap, Trophy, Globe, Sparkles, TrendingUp, Brain, Heart, Check, User, Tag, Phone } from 'lucide-react';


import img1 from "../../assets/images/division_preschool.png"






const IcseHighHome = () => {
  const aboutFeatures = [
    'ICSE Curriculum Excellence',
    'Experienced Faculty',
    'Modern Infrastructure',
    'Holistic Development',
    'Student-Centered Learning',
    'Co-curricular Activities'
  ];

  const features = [
    { icon: BookOpen, title: 'ICSE Curriculum', description: 'Comprehensive education following CISCE board standards' },
    { icon: Users, title: 'Expert Faculty', description: 'Experienced teachers dedicated to student success' },
    { icon: Award, title: 'Academic Excellence', description: 'Consistent outstanding results in board examinations' },
    { icon: Target, title: 'Holistic Development', description: 'Focus on academics, sports, and character building' }
  ];

  const highlights = [
    { icon: GraduationCap, title: 'Grades 6-10', value: 'ICSE Board' },
    { icon: Trophy, title: 'Top Results', value: '95%+ Success' },
    { icon: Globe, title: 'Modern Facilities', value: 'Smart Classrooms' }
  ];

  const stats = [
    { icon: Brain, label: 'Expert Teachers', value: '50+' },
    { icon: Users, label: 'Students', value: '1000+' },
    { icon: Trophy, label: 'Awards Won', value: '25+' },
    { icon: TrendingUp, label: 'Pass Rate', value: '99%' }
  ];

  const events = [
    {
      date: 'JAN',
      day: '20',
      author: 'BY ADMIN',
      category: 'Annual Day',
      title: 'Annual Day Celebration 2025'
    },
    {
      date: 'FEB',
      day: '26',
      author: 'BY ADMIN',
      category: 'Sports Day',
      title: 'Inter-House Sports Competition'
    },
    {
      date: 'MAR',
      day: '28',
      author: 'BY ADMIN',
      category: 'Science Fair',
      title: 'Science Exhibition & Project Display'
    }
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

  const aboutItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const eventContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const eventItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F2A4A] via-[#1a4d7a] to-[#0F2A4A] text-white py-32 overflow-hidden mt-12">
        {/* Animated Background */}
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
          <motion.div
            animate={{ x: [-100, 100, -100], y: [-50, 50, -50] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-500 opacity-5 rounded-full blur-3xl"
          />
        </div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#FDB913] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

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
              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#FDB913] via-yellow-500 to-yellow-600 rounded-3xl mb-6 shadow-2xl relative"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-3xl border-4 border-dashed border-white opacity-30"
              />
              <GraduationCap className="w-12 h-12 text-white relative z-10" />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-2 -right-2"
              >
                <Sparkles className="w-6 h-6 text-[#FDB913]" />
              </motion.div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-white via-[#FDB913] to-white bg-clip-text text-transparent">
               S. Cadambi Vidya Kendra English Secondary School - ICSE High School
              </span>
            </motion.h1>

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

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              Grades 6 to 10 • CISCE Affiliated • Excellence in Education
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/icse-high/admissions" className="group relative inline-flex items-center gap-2 bg-[#FDB913] hover:bg-yellow-600 text-[#0F2A4A] px-10 py-5 rounded-full font-bold transition-all shadow-2xl overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">Apply for Admission</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/icse-high/about" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-10 py-5 rounded-full font-bold transition-all border-2 border-white/30">
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 z-10 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all cursor-pointer border-t-4 border-[#FDB913]"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] rounded-xl flex items-center justify-center mx-auto mb-4"
                >
                  <stat.icon className="w-8 h-8 text-[#FDB913]" />
                </motion.div>
                <motion.p
                  className="text-4xl font-bold text-[#0F2A4A] mb-2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={img1}
                  alt="Students"
                  className="w-full h-[600px] object-cover"
                />

                {/* Yellow Accent Strip */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute top-0 right-0 w-20 h-full bg-[#FDB913]"
                  style={{ transformOrigin: 'top' }}
                />

                {/* Icon Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
                  className="absolute bottom-8 left-8 w-32 h-32 bg-[#0F2A4A] rounded-2xl flex items-center justify-center shadow-2xl"
                >
                  <GraduationCap className="w-16 h-16 text-[#FDB913]" />
                </motion.div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-0.5 w-12 bg-[#0F2A4A]"></div>
                  <span className="text-[#0F2A4A] font-bold text-sm uppercase tracking-wider">About Us</span>
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-6 leading-tight"
              >
                Education in continuing a proud tradition.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-gray-600 text-lg mb-8 leading-relaxed"
              >
                S. Cadambi Vidya Kendra has been nurturing young minds for decades, providing quality ICSE education that combines academic excellence with character development. Our commitment to holistic growth ensures every student reaches their full potential.
              </motion.p>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4 mb-10"
              >
                {aboutFeatures.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    variants={aboutItemVariants}
                    className="flex items-center gap-3 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="flex-shrink-0 w-8 h-8 bg-[#FDB913] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl"
                    >
                      <Check className="w-5 h-5 text-[#0F2A4A]" strokeWidth={3} />
                    </motion.div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/icse-high/about"
                    className="inline-block px-10 py-4 bg-white border-2 border-[#0F2A4A] text-[#0F2A4A] rounded-full font-bold hover:bg-[#0F2A4A] hover:text-white transition-all shadow-lg hover:shadow-xl"
                  >
                    Read More
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-[#FDB913] text-[#0F2A4A] px-6 py-2 rounded-full font-semibold mb-4"
            >
              <Heart className="w-5 h-5" />
              <span>Why Choose Us</span>
            </motion.div>

            <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">
              Why Choose ICSE High School?
            </h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#FDB913] to-yellow-600 mx-auto rounded-full"
            />
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-t-4 border-[#FDB913] relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#FDB913]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-[#FDB913] to-yellow-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10"
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-[#0F2A4A] mb-3 relative z-10">
                  {feature.title}
                </h3>

                <p className="text-gray-700 leading-relaxed relative z-10">
                  {feature.description}
                </p>

                <motion.div
                  className="absolute bottom-0 right-0 w-24 h-24 bg-[#0F2A4A] rounded-tl-full opacity-5"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>


      {/* Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-0.5 w-16 bg-[#0F2A4A]"></div>
              <span className="text-[#0F2A4A] font-bold text-sm uppercase tracking-wider">Events</span>
              <div className="h-0.5 w-16 bg-[#0F2A4A]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#0F2A4A]">Upcoming Events</h2>
          </motion.div>

          {/* Events Grid */}
          <div className="grid lg:grid-cols-2  items-center">
            {/* Left Side - Events List */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#0F2A4A]  p-12"
              style={{ borderBottomLeftRadius: '20px', borderTopLeftRadius: '20px' }}
            >
              <motion.div
                variants={eventContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-8"
              >
                {events.map((event, idx) => (
                  <motion.div
                    key={idx}
                    variants={eventItemVariants}
                    className="flex items-start gap-6 pb-8 border-b border-white/10 last:border-b-0 last:pb-0 group"
                  >
                    {/* Date Box */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 w-20 h-20 bg-[#FDB913] rounded-xl flex flex-col items-center justify-center text-[#0F2A4A] font-bold shadow-lg"
                    >
                      <span className="text-xs uppercase">{event.date}</span>
                      <span className="text-3xl leading-none">{event.day}</span>
                    </motion.div>

                    {/* Event Details */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3 text-sm text-gray-300">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{event.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Tag className="w-4 h-4" />
                          <span>{event.category}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#FDB913] transition-colors duration-300">
                        {event.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Image with Call to Action */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl h-full min-h-[500px]"
            >
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
                alt="Students"
                className="w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#FDB913] via-[#FDB913]/50 to-transparent"></div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-0 left-0 right-0 p-12 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-2xl"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-14 h-14 bg-[#0F2A4A] rounded-full flex items-center justify-center"
                  >
                    <Phone className="w-7 h-7 text-[#FDB913]" />
                  </motion.div>
                  <div className="text-left">
                    <p className="text-sm text-gray-600 font-semibold">Call Us</p>
                    <p className="text-2xl font-bold text-[#0F2A4A]">360-779-2228</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                className="relative bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] rounded-3xl p-10 text-center text-white shadow-2xl overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#FDB913] to-yellow-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                />
                <motion.div
                  animate={floatingAnimation}
                  className="relative z-10"
                >
                  <item.icon className="w-16 h-16 mx-auto mb-4 text-[#FDB913]" />
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-3xl font-bold text-[#FDB913]">{item.value}</p>
                </motion.div>
                <motion.div
                  className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#FDB913] rounded-full opacity-10"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-96 h-96 bg-[#FDB913] opacity-5 rounded-full blur-3xl"
        />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
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
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <Sparkles className="w-16 h-16 text-[#FDB913] mx-auto" />
              </motion.div>
              <h2 className="text-5xl font-bold mb-6">Ready to Join Us?</h2>
              <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-gray-200">
                Admissions are now open for the new academic year. Give your child the gift of quality education.
              </p>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link to="/icse-high/admissions" className="group inline-flex items-center gap-3 bg-[#FDB913] hover:bg-yellow-600 text-[#0F2A4A] px-12 py-6 rounded-full font-bold transition-all shadow-2xl text-lg relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">Apply Now</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="relative z-10"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute -bottom-20 -left-20 w-64 h-64 bg-green-500 rounded-full opacity-10 blur-3xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IcseHighHome;