import React from 'react';
import { FlaskConical, Library, Laptop, Wifi, Bus, Utensils, Heart, Shield, Award, BookOpen, Users, Trophy, School, CheckCircle, Star, ChevronLeft, ChevronRight, GraduationCap, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from "react";

import img20 from "../assets/high-school/Picture20.jpg"
import img21 from "../assets/high-school/Picture21.jpg"
import img22 from "../assets/high-school/Picture22.jpg"
import img23 from "../assets/high-school/Picture23.jpg"
import img24 from "../assets/high-school/Picture24.png"
import img25 from "../assets/high-school/Picture25.png"
import img26 from "../assets/high-school/Picture26.jpg"
import img27 from "../assets/high-school/Picture200.jpg"

import img1 from "../assets/pu-college/Picture3.jpg"
import img2 from "../assets/pu-college/Picture4.jpg"
import img3 from "../assets/pu-college/Picture5.jpg"
import img4 from "../assets/pu-college/Picture6.jpg"
import img5 from "../assets/pu-college/Picture7.jpg"
import img6 from "../assets/pu-college/Picture8.jpg"
import img7 from "../assets/pu-college/Picture9.jpg"
import img8 from "../assets/pu-college/Picture10.jpg"

import img28 from "../assets/high-school/safe.png"
import img29 from "../assets/high-school/safe1.png"
import img30 from "../assets/high-school/Picture28.jpg"
import img31 from "../assets/high-school/Picture27.png"
import img33 from "../assets/play-school/Picture10.png"
import img32 from "../assets/play-school/Picture13.jpg"


import img51 from "../assets/play-school/Picture7.png"
import img52 from "../assets/play-school/Picture5.png"
import img53 from "../assets/play-school/Picture02.jpg"
import img54 from "../assets/pre-primary/sport2.jpg"
import img55 from "../assets/pre-primary/library.jpg"
import img56 from "../assets/pre-primary/gallery/Picture14.jpg"
import img57 from "../assets/pre-primary/gallery/Picture18.jpg"
import img58 from "../assets/pre-primary/gallery/Picture35.jpg"
import img59 from "../assets/pre-primary/gallery/6.png"
import img60 from "../assets/high-school/Picture27.png"



import img66 from "../assets/icse-primary/11.png"
import img65 from "../assets/icse-primary/Picture6.jpg"
import img64 from "../assets/icse-primary/scout/Picture41.jpg"
import img67 from "../assets/high-school/Picture12.jpg"
import img68 from "../assets/high-school/lib1.png"
import img69 from "../assets/high-school/Picture16.jpg"
import img70 from "../assets/high-school/Picture18.jpg"

import img62 from "../assets/high-school/Picture13.jpg"






// Counter Card Component with Enhanced Animation
const CounterCard = ({ icon, number, suffix, label, color }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          const duration = 2000;
          const steps = 60;
          const increment = number / steps;
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= number) {
              setCount(number);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [number, isVisible]);

  return (
    <motion.div 
      ref={countRef} 
      className="flex flex-col items-center text-center"
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div 
        className={`${color} mb-4`}
        animate={{ 
          rotate: isVisible ? [0, 10, -10, 0] : 0,
          scale: isVisible ? [1, 1.1, 1] : 1
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        {icon}
      </motion.div>
      <div className="flex items-center mb-2">
        <motion.span 
          className="text-5xl font-bold text-[#0F2A4A]"
          initial={{ scale: 0 }}
          animate={{ scale: isVisible ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          {count}
        </motion.span>
        <span className="text-4xl font-bold text-[#0F2A4A]">{suffix}</span>
      </div>
      <p className="text-sm font-bold text-gray-700 uppercase tracking-wide">{label}</p>
    </motion.div>
  );
};

const Facilities = () => {
  const sliderImages = [img1, img5, img6, img7, img4, img8, img2, img3, img51,img52, img53, img54, img55, img56, img57, img58, img59, img60,
   img62,  img64, img65, img66, img67, img68, img69, img70
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerView = 4;
  const maxIndex = Math.max(0, sliderImages.length - imagesPerView);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev >= maxIndex ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const facilities = [
    {
      icon: <FlaskConical size={40} />,
      title: 'Advanced Laboratories',
      description: 'Well-equipped Physics, Chemistry, Biology, and Computer labs with modern instruments and safety equipment for hands-on learning and practical experiments.',
      color: 'from-[#0F2A4A]/80 to-[#0F2A4A]/100'
    },
    {
      icon: <Library size={40} />,
      title: 'Comprehensive Library',
      description: 'Extensive collection of reference books, textbooks, journals, magazines, and digital resources. Peaceful reading environment with separate study areas.',
      color: 'from-[#FDB913]/80 to-[#FDB913]/100'
    },
    {
      icon: <Laptop size={40} />,
      title: 'Smart Classrooms',
      description: 'Air-conditioned classrooms with digital boards, projectors, and audio-visual aids for interactive and engaging learning sessions.',
      color: 'from-[#0F2A4A]/80 to-[#0F2A4A]/100'
    },
    {
      icon: <Award size={40} />,
      title: 'Activity Halls',
      description: 'Multipurpose halls for cultural events, seminars, workshops, and extracurricular activities.',
      color: 'from-[#FDB913]/80 to-[#FDB913]/100'
    },
    {
      icon: <Bus size={40} />,
      title: 'Transportation',
      description: 'Safe and reliable transport facility covering major areas of Bangalore with GPS-enabled buses and trained drivers.',
      color: 'from-[#0F2A4A]/80 to-[#0F2A4A]/100'
    },
    {
      icon: <Utensils size={40} />,
      title: 'Cafeteria',
      description: 'Hygienic canteen providing nutritious snacks and meals. Special care for quality and cleanliness maintained at all times.',
      color: 'from-[#FDB913]/80 to-[#FDB913]/100'
    },
    {
      icon: <Heart size={40} />,
      title: 'First Aid & Medical',
      description: 'On-campus first aid facility with trained staff. Tie-ups with nearby hospitals for medical emergencies.',
      color: 'from-[#0F2A4A]/80 to-[#0F2A4A]/100'
    },
    {
      icon: <Shield size={40} />,
      title: 'Security & Safety',
      description: '24/7 security surveillance with CCTV cameras, trained security personnel, and strict visitor management protocols.',
      color: 'from-[#FDB913]/80 to-[#FDB913]/100'
    },
    {
      icon: <Trophy size={40} />,
      title: 'Sports Facilities',
      description: 'Indoor and outdoor sports facilities including basketball, volleyball, badminton courts, and fitness equipment for physical development.',
      color: 'from-[#0F2A4A]/80 to-[#0F2A4A]/100'
    },
    {
      icon: <Users size={40} />,
      title: 'Counseling Center',
      description: 'Career counseling and psychological support services by qualified counselors for academic and personal guidance.',
      color: 'from-[#FDB913]/80 to-[#FDB913]/100'
    },
    {
      icon: <BookOpen size={40} />,
      title: 'Study Rooms',
      description: 'Dedicated quiet study areas and group discussion rooms for self-study and collaborative learning.',
      color: 'from-[#0F2A4A]/80 to-[#0F2A4A]/100'
    },
  ];

  const highlights = [
    'Spacious and well-ventilated classrooms',
    'Separate seating arrangements for boys and girls',
    'Clean and hygienic washrooms',
    'Drinking water with RO purification',
    'Power backup for uninterrupted classes',
    'Eco-friendly campus with green spaces',
    'Accessible infrastructure for differently-abled',
    'Regular maintenance and upgrades'
  ];

  const facilitiesData = [
    {
      title: 'Safety and Security',
      subtitle: '"SAFE CHILDREN SECURE FUTURE"',
      content: 'Security measures like CCTV surveillance, secure entry systems and trained security personnel.',
      sections: [
        { title: 'CCTV Surveillance', images: [img21, img20, img22, img23] },
        { title: 'Fire Extinguishers', images: [img25, img24, img26, img33] },
        { title: 'Security Personnel', images: [img27, img28, img29] },
        { title: 'First Aid Box', images: [img30, img31, img32] }
      ],
      icon: Shield,
      align: 'full'
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Hero Section */}
      <section 
        ref={heroRef}
        className="relative bg-gradient-to-br from-[#0F2A4A] via-[#1a3a5f] to-[#0F2A4A] text-white pt-40 overflow-hidden pb-32"
      >
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, white 2px, transparent 2px)',
            backgroundSize: '50px 50px'
          }}
        />
        
        <motion.div 
          className="absolute top-10 right-10 w-64 h-64 bg-[#FDB913]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div 
          className="absolute bottom-10 left-0 w-96 h-96 bg-[#FDB913]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
        
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          style={{ y, opacity }}
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2
              }}
              className="inline-flex items-center bg-[#FDB913] text-[#0F2A4A] px-6 py-2 rounded-full font-semibold mb-6 shadow-lg"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="mr-2" size={20} />
              </motion.div>
              World-Class Infrastructure
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              State-of-the-Art{' '}
              <motion.span 
                className="text-[#FDB913]"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(253, 185, 19, 0.5)",
                    "0 0 40px rgba(253, 185, 19, 0.8)",
                    "0 0 20px rgba(253, 185, 19, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Facilities
              </motion.span>
            </motion.h1>

            <motion.div 
              className="flex items-center justify-center gap-3 mb-6"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
            >
              <motion.div 
                className="h-1 w-20 bg-[#FDB913] rounded"
                animate={{ width: ["80px", "100px", "80px"] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="h-1 w-12 bg-white rounded" />
              <motion.div 
                className="h-1 w-20 bg-[#FDB913] rounded"
                animate={{ width: ["80px", "100px", "80px"] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </motion.div>

            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Designed to provide the best learning environment for academic excellence
            </motion.p>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-25 left-40"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <School className="w-16 h-16 text-[#FDB913]/30" />
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-20"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        >
          <GraduationCap className="w-20 h-20 text-[#FDB913]/30" />
        </motion.div>
      </section>

      {/* Enhanced Image Slider Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-4 uppercase tracking-wide"
              whileHover={{ scale: 1.05 }}
            >
              Campus Overview
            </motion.h2>
            <motion.div 
              className="flex items-center justify-center gap-3 mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="h-1 w-20 bg-[#FDB913] rounded"></div>
              <div className="h-1 w-12 bg-[#0F2A4A] rounded"></div>
              <div className="h-1 w-20 bg-[#FDB913] rounded"></div>
            </motion.div>
          </motion.div>

          <div className="relative">
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1, backgroundColor: "#FDB913" }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white text-[#0F2A4A] w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all -ml-8"
            >
              <ChevronLeft size={32} />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1, backgroundColor: "#FDB913" }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-[#0F2A4A] w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all -mr-8"
            >
              <ChevronRight size={32} />
            </motion.button>

            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <motion.div
                className="flex"
                animate={{ x: `-${currentIndex * (100 / imagesPerView)}%` }}
                transition={{ 
                  ease: [0.32, 0.72, 0, 1],
                  duration: 0.8
                }}
              >
                {sliderImages.map((img, idx) => (
                  <motion.div
                    key={idx}
                    className="flex-shrink-0 px-2"
                    style={{ width: `${100 / imagesPerView}%` }}
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="rounded-xl overflow-hidden shadow-lg h-80 relative group">
                      <img
                        src={img}
                        alt={`Campus ${idx + 1}`}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 text-white">
                          <p className="text-lg font-bold">Campus View {idx + 1}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-3 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => goToSlide(idx)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`transition-all rounded-full ${
                  currentIndex === idx
                    ? "bg-[#FDB913] w-10 h-3"
                    : "bg-gray-300 w-3 h-3"
                }`}
              />
            ))}
          </div>

          <motion.div 
            className="text-center mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-gray-600 font-semibold text-lg">
              Showing {currentIndex + 1}-{Math.min(currentIndex + imagesPerView, sliderImages.length)} of {sliderImages.length}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Main Facilities Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#0F2A4A] mb-4">Our Facilities</h2>
            <p className="text-xl text-gray-600">Everything you need for comprehensive education</p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {facilities.map((facility, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ 
                  y: -15,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="group bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100 hover:border-[#FDB913] transition-all duration-300 relative overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#FDB913]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0, rotate: 45 }}
                  whileHover={{ scale: 1.5, rotate: 0 }}
                />

                <div className="relative z-10">
                  <motion.div 
                    className={`bg-gradient-to-br ${facility.color} w-20 h-20 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -10, 10, 0],
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {facility.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-[#0F2A4A] mb-4 group-hover:text-[#FDB913] transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Additional Highlights */}
      <section className="py-20 bg-gradient-to-br from-[#0F2A4A] to-[#1a3a5f] text-white relative overflow-hidden">
        {/* Animated Background Pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            backgroundImage: 'linear-gradient(45deg, transparent 48%, white 49%, white 51%, transparent 52%)',
            backgroundSize: '20px 20px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Additional Amenities</h2>
            <p className="text-xl text-white/80">More features that make us stand out</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {highlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.2)"
                }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl flex items-start gap-3 border border-white/20 transition-all cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="text-[#FDB913] shrink-0 mt-1" size={20} />
                </motion.div>
                <p className="text-white/90">{highlight}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Infrastructure Stats */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" 
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, #0F2A4A 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-4">By The Numbers</h2>
            <p className="text-xl text-gray-600">Our infrastructure at a glance</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CounterCard 
              icon={<Award size={48} />}
              number={27}
              suffix="+"
              label="TOTAL ACHIEVEMENT"
              color="text-[#FDB913]"
            />
            <CounterCard 
              icon={<Users size={48} />}
              number={145}
              suffix="+"
              label="TOTAL STUDENTS"
              color="text-[#0F2A4A]"
            />
            <CounterCard 
              icon={<GraduationCap size={48} />}
              number={10}
              suffix="+"
              label="TOTAL INSTRUCTOR"
              color="text-[#FDB913]"
            />
            <CounterCard 
              icon={<Trophy size={48} />}
              number={214}
              suffix="+"
              label="OVER THE WORLD"
              color="text-[#0F2A4A]"
            />
          </div>
        </div>
      </section>

      {/* Enhanced Facilities Sections with Images */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 space-y-20">
          {facilitiesData.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div className="text-center">
                <motion.div 
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FDB913] to-[#FDB913]/80 rounded-3xl mb-6 shadow-2xl"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 360 
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <facility.icon className="w-10 h-10 text-[#0F2A4A]" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-4">{facility.title}</h2>
                {facility.subtitle && (
                  <motion.p 
                    className="text-2xl font-bold text-[#FDB913] italic mb-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                  >
                    {facility.subtitle}
                  </motion.p>
                )}
                <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">{facility.content}</p>
              </div>

              <div className="space-y-12">
                {facility.sections.map((section, sIdx) => (
                  <motion.div 
                    key={sIdx} 
                    className="bg-white rounded-3xl shadow-2xl overflow-hidden border-t-4 border-[#FDB913]"
                    initial={{ opacity: 0, x: sIdx % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: sIdx * 0.1 }}
                  >
                    <motion.div 
                      className="bg-gradient-to-r from-[#0F2A4A] to-[#1a3a5f] py-8 px-10"
                      whileHover={{ 
                        backgroundImage: "linear-gradient(to right, #1a3a5f, #0F2A4A)" 
                      }}
                    >
                      <h3 className="text-3xl font-bold text-white flex items-center">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                        >
                          <CheckCircle className="mr-4 text-[#FDB913]" size={32} />
                        </motion.div>
                        {section.title}
                      </h3>
                    </motion.div>
                    <div className="p-10">
                      <motion.div 
                        className="grid grid-cols-2 md:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        {section.images.map((img, imgIdx) => (
                          <motion.div
                            key={imgIdx}
                            variants={cardVariants}
                            whileHover={{ 
                              scale: 1.05,
                              borderColor: "#FDB913",
                              boxShadow: "0 20px 40px rgba(253, 185, 19, 0.3)"
                            }}
                            className="rounded-2xl overflow-hidden shadow-xl border-4 border-gray-100 transition-all cursor-pointer group"
                          >
                            <div className="relative overflow-hidden">
                              <motion.img 
                                src={img} 
                                alt={`${section.title} ${imgIdx + 1}`} 
                                className="w-full h-64 object-contain"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.4 }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A4A]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-white font-semibold">View Image</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Facilities;