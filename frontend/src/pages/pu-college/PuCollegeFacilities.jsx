import React from 'react';
import { FlaskConical, Library, Laptop, Wifi, Bus, Utensils, Heart, Shield, Award, BookOpen, Users, Trophy, School, CheckCircle, Star, ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from "react";

import img20 from "../../assets/high-school/Picture20.jpg"
import img21 from "../../assets/high-school/Picture21.jpg"
import img22 from "../../assets/high-school/Picture22.jpg"
import img23 from "../../assets/high-school/Picture23.jpg"
import img24 from "../../assets/high-school/Picture24.png"
import img25 from "../../assets/high-school/Picture25.png"
import img26 from "../../assets/high-school/Picture26.jpg"
import img27 from "../../assets/high-school/Picture200.jpg"

import img1 from "../../assets/pu-college/Picture3.jpg"
import img2 from "../../assets/pu-college/Picture4.jpg"
import img3 from "../../assets/pu-college/Picture5.jpg"
import img4 from "../../assets/pu-college/Picture6.jpg"
import img5 from "../../assets/pu-college/Picture7.jpg"
import img6 from "../../assets/pu-college/Picture8.jpg"
import img7 from "../../assets/pu-college/Picture9.jpg"
import img8 from "../../assets/pu-college/Picture10.jpg"

// Counter Card Component
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
    <div ref={countRef} className="flex flex-col items-center text-center">
      <div className={`${color} mb-4`}>
        {icon}
      </div>
      <div className="flex items-center mb-2">
        <span className="text-5xl font-bold text-[#0F2A4A]">{count}</span>
        <span className="text-4xl font-bold text-[#0F2A4A]">{suffix}</span>
      </div>
      <p className="text-sm font-bold text-gray-700 uppercase tracking-wide">{label}</p>
    </div>
  );
};

const PuCollegeFacilities = () => {
  const sliderImages = [img1, img5, img6, img7, img4, img8, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerView = 4;
  const maxIndex = Math.max(0, sliderImages.length - imagesPerView);

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
      icon: <Wifi size={40} />,
      title: 'High-Speed Internet',
      description: 'Campus-wide WiFi connectivity for access to online learning resources, digital libraries, and educational platforms.',
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
    {
      icon: <Award size={40} />,
      title: 'Activity Halls',
      description: 'Multipurpose halls for cultural events, seminars, workshops, and extracurricular activities.',
      color: 'from-[#FDB913]/80 to-[#FDB913]/100'
    }
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
      content: 'Security measures like CCTV surveillance, Secure entry systems and trained security personnel.',
      sections: [
        { title: 'CCTV Surveillance', images: [img21, img20, img22, img23] },
        { title: 'Fire Extinguishers & Security Personnel', images: [img25, img24, img26, img27] },
      ],
      icon: Shield,
      align: 'full'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F2A4A] via-[#1a3a5f] to-[#0F2A4A] text-white py-32 mt-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#FDB913]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FDB913]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-[#FDB913] text-[#0F2A4A] px-6 py-2 rounded-full font-semibold mb-6">
              <Star className="mr-2" size={20} />
              World-Class Infrastructure
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              State-of-the-Art <span className="text-[#FDB913]">Facilities</span>
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-20 bg-[#FDB913] rounded"></div>
              <div className="h-1 w-12 bg-white rounded"></div>
              <div className="h-1 w-20 bg-[#FDB913] rounded"></div>
            </div>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Designed to provide the best learning environment for academic excellence
            </p>
          </div>
        </div>
      </section>

       {/* Enhanced Image Slider Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-4 uppercase tracking-wide">
              Campus Overview
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-20 bg-[#FDB913] rounded"></div>
              <div className="h-1 w-12 bg-[#0F2A4A] rounded"></div>
              <div className="h-1 w-20 bg-[#FDB913] rounded"></div>
            </div>
          </div>

          <div className="relative">
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-[#FDB913] text-[#0F2A4A] hover:text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 -ml-8"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-[#FDB913] text-[#0F2A4A] hover:text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 -mr-8"
            >
              <ChevronRight size={32} />
            </button>

            <div className="overflow-hidden rounded-3xl">
              <motion.div
                className="flex"
                animate={{ x: `-${currentIndex * (100 / imagesPerView)}%` }}
                transition={{ ease: "easeInOut", duration: 0.8 }}
              >
                {sliderImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 px-2"
                    style={{ width: `${100 / imagesPerView}%` }}
                  >
                    <div className="rounded-xl overflow-hidden shadow-lg h-80">
                      <img
                        src={img}
                        alt={`Campus ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-3 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`transition-all rounded-full ${
                  currentIndex === idx
                    ? "bg-[#FDB913] w-10 h-3"
                    : "bg-gray-300 w-3 h-3 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-600 font-semibold text-lg">
              Showing {currentIndex + 1}-{Math.min(currentIndex + imagesPerView, sliderImages.length)} of {sliderImages.length}
            </p>
          </div>
        </div>
      </section>

      {/* Main Facilities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F2A4A] mb-4">Our Facilities</h2>
            <p className="text-xl text-gray-600">Everything you need for comprehensive education</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-gray-100 hover:border-[#FDB913] transform hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-br ${facility.color} w-20 h-20 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  {facility.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0F2A4A] mb-4 group-hover:text-[#FDB913] transition-colors">
                  {facility.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {facility.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Highlights */}
      <section className="py-20 bg-gradient-to-br from-[#0F2A4A] to-[#1a3a5f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Additional Amenities</h2>
            <p className="text-xl text-white/80">More features that make us stand out</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl flex items-start gap-3 border border-white/20 hover:bg-white/20 transition-all"
              >
                <CheckCircle className="text-[#FDB913] shrink-0 mt-1" size={20} />
                <p className="text-white/90">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Stats with Counter Animation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-4">By The Numbers</h2>
            <p className="text-xl text-gray-600">Our infrastructure at a glance</p>
          </div>
          
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
              suffix="k"
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

      {/* Facilities Sections with Images */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 space-y-20">
          {facilitiesData.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FDB913] to-[#FDB913]/80 rounded-3xl mb-6 shadow-2xl">
                  <facility.icon className="w-10 h-10 text-[#0F2A4A]" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-4">{facility.title}</h2>
                {facility.subtitle && (
                  <p className="text-2xl font-bold text-[#FDB913] italic mb-4">{facility.subtitle}</p>
                )}
                <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">{facility.content}</p>
              </div>

              <div className="space-y-12">
                {facility.sections.map((section, sIdx) => (
                  <div key={sIdx} className="bg-white rounded-3xl shadow-2xl overflow-hidden border-t-4 border-[#FDB913]">
                    <div className="bg-gradient-to-r from-[#0F2A4A] to-[#1a3a5f] py-8 px-10">
                      <h3 className="text-3xl font-bold text-white flex items-center">
                        <CheckCircle className="mr-4 text-[#FDB913]" size={32} />
                        {section.title}
                      </h3>
                    </div>
                    <div className="p-10">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {section.images.map((img, imgIdx) => (
                          <motion.div
                            key={imgIdx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: imgIdx * 0.1 }}
                            className="rounded-2xl overflow-hidden shadow-xl border-4 border-gray-100 hover:border-[#FDB913] transition-all transform hover:scale-105"
                          >
                            <img src={img} alt={`${section.title} ${imgIdx + 1}`} className="w-full h-64 object-cover" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

     

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
};

export default PuCollegeFacilities;