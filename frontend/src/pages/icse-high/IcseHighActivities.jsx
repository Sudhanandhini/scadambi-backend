import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Trophy, Users, Award, Star, Sparkles, Flag, Book, Music, Palette, ChevronLeft, ChevronRight } from 'lucide-react';

import img2 from "../../assets/icse-high/Picture2.jpg"
import img3 from "../../assets/icse-high/Picture3.jpg"
import img4 from "../../assets/icse-high/Picture4.jpg"

import img5 from "../../assets/icse-high/Picture5.jpg"
import img6 from "../../assets/icse-high/Picture6.jpg"
import img7 from "../../assets/icse-high/Picture7.jpg"

import img8 from "../../assets/icse-high/Picture8.jpg"
import img9 from "../../assets/icse-high/Picture9.jpg"
import img10 from "../../assets/icse-high/Picture10.jpg"



const clubs = [
    { 
      icon: Book, 
      name: 'Literary Club', 
      description: 'Fostering reading habits and creative writing skills',
      image: img2
    },
    { 
      icon: Palette, 
      name: 'Arts Club', 
      description: 'Nurturing artistic talents and creativity',
      image: img3
    },
    { 
      icon: Music, 
      name: 'Music Club', 
      description: 'Developing musical abilities and appreciation',
      image: img4
    },
    { 
      icon: Trophy, 
      name: 'Sports Club', 
      description: 'Promoting physical fitness and sportsmanship',
      image: img5
    }
  ];



const ImageSlider = ({ images, autoPlayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [images.length, autoPlayInterval]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[600px] group">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
          className="w-full h-full object-contain"
        />
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-10"
      >
        <ChevronLeft className="w-6 h-6 text-[#0F2A4A]" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-10"
      >
        <ChevronRight className="w-6 h-6 text-[#0F2A4A]" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex ? 'bg-[#FDB913] w-8' : 'bg-white/60 hover:bg-white/80'
              }`}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A4A]/50 to-transparent"></div>
    </div>
  );
};

const IcseHighActivities = () => {
  const nationalFestivalImages = [
    img2, img3, img4
  ];

  const culturalFestivalImages = [
  img5, img6, img7
  ];

  const annualEventsImages = [
    img8, img9, img10
  ];

  const culturalFestivals = [
    { name: 'Samanvaya', description: 'Annual Fest celebrating unity and diversity' },
    { name: 'Sammilana', description: 'Inter-school competitions showcasing talent' },
    { name: 'Khelo Cadambi', description: 'Annual sports competitions' },
    { name: 'Talentia', description: 'Annual Literary and Co-curricular competitions' }
  ];

  const annualEvents = [
    { name: 'Environmental Day', description: 'Celebrating and promoting environmental awareness and sustainable practices' },
    { name: 'National Sports Day', description: 'Encouraging physical fitness and sportsmanship among students' },
    { name: 'Hindi Divas', description: 'Celebrating the richness of Hindi language and literature' },
    { name: 'Sanskrit Day', description: 'Honoring the ancient language and its cultural significance' },
    { name: 'International Day of Yoga', description: 'Promoting physical and mental well-being through yoga' },
    { name: 'World Music Day', description: 'Celebrating musical talents and appreciation for various music forms' }
  ];

  // const clubs = [
  //   { icon: Book, name: 'Literary Club', description: 'Fostering reading habits and creative writing skills' },
  //   { icon: Palette, name: 'Arts Club', description: 'Nurturing artistic talents and creativity' },
  //   { icon: Music, name: 'Music Club', description: 'Developing musical abilities and appreciation' },
  //   { icon: Trophy, name: 'Sports Club', description: 'Promoting physical fitness and sportsmanship' }
  // ];

  const competitions = [
    'Inter-school Sports competitions',
    'Annual sports and Literary Competitions',
    'Sammilana: Inter-school competitions'
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
              <Calendar className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-[#FDB913] to-white bg-clip-text text-transparent">
              Activities & Events
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
            <p className="text-xl md:text-2xl text-gray-300">Celebrating Learning Beyond Classrooms</p>
          </motion.div>
        </div>
      </section>

      {/* National Festivals - Row 1: Content Left, Image Slider Right */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 bg-gradient-to-br from-[#FDB913] to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <Flag className="w-10 h-10 text-white" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A]">National Festivals</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-[#0F2A4A]/5 to-[#FDB913]/5 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-[#0F2A4A] mb-4">Independence Day</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Celebrated with great patriotic fervor, including flag hoisting ceremony, cultural programs,
                    and activities that instill a sense of national pride and responsibility in students.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#0F2A4A]/5 to-[#FDB913]/5 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-[#0F2A4A] mb-4">Republic Day</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Commemorating the adoption of the Constitution with parade, speeches, and performances
                    that highlight the democratic values and constitutional rights of our nation.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#0F2A4A]/5 to-[#FDB913]/5 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-[#0F2A4A] mb-4">Kannada Rajyotsava</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Celebrating Karnataka's rich cultural heritage with traditional performances,
                    folk dances, and activities that promote regional pride and linguistic diversity.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Image Slider Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ImageSlider images={nationalFestivalImages} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cultural Festivals - Row 2: Image Slider Left, Content Right */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Slider Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ImageSlider images={culturalFestivalImages} />
            </motion.div>

            {/* Content Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 bg-gradient-to-br from-[#FDB913] to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <Sparkles className="w-10 h-10 text-white" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A]">Cultural Festivals</h2>
              </div>

              <div className="space-y-4">
                {culturalFestivals.map((festival, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-l-4 border-[#FDB913]"
                  >
                    <h3 className="text-2xl font-bold text-[#0F2A4A] mb-2">{festival.name}</h3>
                    <p className="text-gray-700 text-lg">{festival.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Annual Events - Row 3: Content Left, Image Slider Right */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <Star className="w-10 h-10 text-[#FDB913]" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A]">Other Annual Events</h2>
              </div>

              <div className="space-y-4">
                {annualEvents.map((event, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="bg-gradient-to-r from-[#0F2A4A]/5 to-[#FDB913]/5 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border-l-4 border-[#0F2A4A]"
                  >
                    <h3 className="text-xl font-bold text-[#0F2A4A] mb-2">{event.name}</h3>
                    <p className="text-gray-700 leading-relaxed">{event.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image Slider Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ImageSlider images={annualEventsImages} />
            </motion.div>
          </div>
        </div>
      </section>

     
    {/* Clubs & Societies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-0.5 w-16 bg-[#0F2A4A]"></div>
              <Users className="w-6 h-6 text-[#0F2A4A]" />
              <div className="h-0.5 w-16 bg-[#0F2A4A]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">Clubs & Societies</h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#FDB913] to-yellow-600 mx-auto rounded-full mb-4"
            />
            <p className="text-xl text-gray-700">
              Security Club and various student-led organizations fostering holistic development
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {clubs.map((club, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-[#FDB913] text-center overflow-hidden group h-80"
              >
                {/* Background Image - visible by default, hidden on hover */}
                <div className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-500 z-10">
                  <img
                    src={club.image}
                    alt={club.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A4A]/80 via-[#0F2A4A]/40 to-transparent"></div>

                  {/* Heading on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white">{club.name}</h3>
                  </div>
                </div>

                {/* Content - hidden by default, shown on hover */}
                <div className="absolute inset-0 p-8 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 bg-white">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                  >
                    <club.icon className="w-10 h-10 text-[#FDB913]" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#0F2A4A] mb-4">{club.name}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {club.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Activities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">Additional Activities</h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#FDB913] to-yellow-600 mx-auto rounded-full"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Scouts and Guides */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] rounded-3xl p-10 text-white shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <Award className="w-12 h-12 text-[#FDB913]" />
                <h3 className="text-3xl font-bold">Scouts and Guides Training Centre</h3>
              </div>
              <p className="text-gray-200 leading-relaxed text-lg">
                Developing leadership, teamwork, and life skills through structured training programs
                and outdoor activities that build character and confidence.
              </p>
            </motion.div>

            {/* Competitions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-2xl border-t-4 border-[#FDB913]"
            >
              <div className="flex items-center gap-4 mb-6">
                <Trophy className="w-12 h-12 text-[#FDB913]" />
                <h3 className="text-3xl font-bold text-[#0F2A4A]">Competitions</h3>
              </div>
              <div className="space-y-4">
                {competitions.map((comp, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#0F2A4A]/5 to-[#FDB913]/5 rounded-xl"
                  >
                    <Award className="w-6 h-6 text-[#FDB913] flex-shrink-0 mt-1" />
                    <span className="text-gray-800 font-semibold text-lg">{comp}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IcseHighActivities;