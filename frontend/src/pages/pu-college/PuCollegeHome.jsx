import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, TrendingUp, ArrowRight, Check, GraduationCap, Microscope, Calculator, Target, Globe, Lightbulb, Heart, UserCheck, ThumbsUp, Star, Trophy, Clock, MapPin } from 'lucide-react';
import img1 from "../../assets/images/division_college.png"

const PuCollegeHome = () => {
  const features = [
    {
      icon: <BookOpen size={28} />,
      title: 'Quality Education',
      description: 'Comprehensive curriculum designed for competitive exam preparation'
    },
    {
      icon: <Users size={28} />,
      title: 'Experienced Faculty',
      description: 'Expert teachers with proven track record in PU education'
    },
    {
      icon: <Award size={28} />,
      title: 'Excellent Results',
      description: 'Consistent high performance in board examinations'
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'Career Guidance',
      description: 'Professional counseling for higher education and career paths'
    }
  ];

  const aboutFeatures = [
    {
      icon: <Target size={24} />,
      title: 'Successfully Trained',
      description: 'Excellence in academic training with personalized attention and comprehensive support services',
      color: 'bg-pink-500'
    },
    {
      icon: <Globe size={24} />,
      title: 'Education Growth',
      description: 'Continuous development through modern teaching methodologies and innovative learning approaches',
      color: 'bg-cyan-500'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Students Trained',
      description: 'Empowering students with knowledge, skills and values for future success',
      color: 'bg-orange-500'
    },
    {
      icon: <Heart size={24} />,
      title: 'Successfully Trained',
      description: 'Holistic development focusing on academic excellence and character building',
      color: 'bg-purple-500'
    }
  ];

  const achievements = [
    {
      number: 20,
      suffix: 'k+',
      label: 'Our Happy Students',
      icon: <Users size={28} />
    },
    {
      number: 17,
      suffix: 'k+',
      label: 'Enrolled Learners',
      icon: <GraduationCap size={28} />
    },
    {
      number: 70,
      suffix: 'k+',
      label: 'Expert Instructor',
      icon: <UserCheck size={28} />
    },
    {
      number: 98,
      suffix: '%',
      label: 'Satisfaction Rate',
      icon: <ThumbsUp size={28} />
    }
  ];

  // Vision & Mission Tabs Component
  const VisionMissionTabs = () => {
    const [activeTab, setActiveTab] = useState('about');

    const tabs = [
      { id: 'about', label: 'ABOUT' },
      { id: 'mission', label: 'OUR MISSION' },
      { id: 'vision', label: 'OUR VISION' },

    ];

    const content = {
      about: {
        text: "The S Cadambi Independent PU College was inaugurated on June 25, 2007 by the then president of KET Sri G. R. Shrinivasan. Our college is committed to providing quality education that blends academics with value and innovation. We focus on cultivating discipline and excellence in every learner, preparing them for higher education and successful careers. Our state-of-the-art facilities include modern laboratories, a five-stacked library, and experienced faculty dedicated to student success."
      },
      mission: {
        title: "MISSION:",
        text: "To provide quality education that blends academics with value and innovation, while cultvating discipline and excellence in every learner."
      },
      vision: {
        title: "VISION:",
        text: "To be a center of excellence that inspires intellectual curiosity, ethical values and holistic development."
      },

    };

    return (
      <div>
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block bg-[#FDB913]/10 text-[#FDB913] px-6 py-2 rounded-full font-semibold mb-4 text-sm">
            Overview
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] leading-tight">
            Perfect University <span className="relative">
              Overview

            </span>
            <br />
            For Your Career
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-bold text-sm transition-all ${activeTab === tab.id
                  ? 'bg-white text-[#0F2A4A] shadow-md border-b-4 border-[#0F2A4A]'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          {content[activeTab].title && (
            <h3 className="font-bold text-lg text-[#0F2A4A] mb-3">
              {content[activeTab].title}
            </h3>
          )}
          <p className="text-gray-600 leading-relaxed">
            {activeTab === 'vision' && (
              <span className="text-[#0F2A4A] font-semibold">
                {content[activeTab].text.split('INTELLECTUAL CURIOSITY,')[0]}
                <span className="underline decoration-[#FDB913] decoration-2 underline-offset-4">
                  INTELLECTUAL CURIOSITY,
                </span>
                {content[activeTab].text.split('INTELLECTUAL CURIOSITY,')[1]}
              </span>
            )}
            {activeTab === 'mission' && (
              <span className="text-[#0F2A4A] font-semibold">
                {content[activeTab].text}
              </span>
            )}
            {(activeTab === 'about' || activeTab === 'award') && content[activeTab].text}
          </p>
        </div>
      </div>
    );
  };

  // Counter Animation Component
  const AchievementCard = ({ achievement, index }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.5 }
      );

      const element = document.getElementById(`achievement-${index}`);
      if (element) {
        observer.observe(element);
      }

      return () => {
        if (element) {
          observer.unobserve(element);
        }
      };
    }, [index]);

    useEffect(() => {
      if (isVisible) {
        let start = 0;
        const end = achievement.number;
        const duration = 2000; // 2 seconds
        const increment = end / (duration / 16); // 60 FPS

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);

        return () => clearInterval(timer);
      }
    }, [isVisible, achievement.number]);

    return (
      <div
        id={`achievement-${index}`}
        className="relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeIn group"
        style={{ animationDelay: `${index * 150}ms` }}
      >
        {/* Icon */}
        <div className="absolute top-6 left-6">
          <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 group-hover:bg-[#FDB913] group-hover:text-white transition-all duration-300">
            {achievement.icon}
          </div>
        </div>

        {/* Content */}
        <div className="text-center mt-8">
          <div className="text-5xl md:text-6xl font-bold text-[#0F2A4A] mb-3">
            {count}{achievement.suffix}
          </div>
          <div className="text-gray-600 text-base">{achievement.label}</div>
        </div>

        {/* Hover Effect Border */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#0F2A4A] rounded-2xl transition-all duration-300"></div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}


      <section className="relative bg-gradient-to-br from-[#0F2A4A] via-[#1a3a5f] to-[#0F2A4A] text-white pt-32 pb-20 mt-20 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#FDB913] rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FDB913] rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
        </div>

        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGREI5MTMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slideRight">
              {/* Badge */}
              <div className="inline-flex items-center bg-[#FDB913] text-[#0F2A4A] px-6 py-3 rounded-full font-bold mb-6 shadow-lg hover:shadow-xl transition-shadow animate-fadeIn">
                <GraduationCap className="mr-2" size={20} />
                <span>Pre-University Education Excellence</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight animate-slideDown">
                Welcome to
                <span className="block text-[#FDB913] mt-2">
                  S CADAMBI
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl mt-2">
                  Independent PU College
                </span>
              </h1>

              {/* Decorative Line */}
              <div className="flex items-center gap-3 mb-6 animate-fadeIn delay-200">
                <div className="h-1 w-16 bg-[#FDB913] rounded"></div>
                <Star className="text-[#FDB913]" size={20} fill="#FDB913" />
                <div className="h-1 w-16 bg-[#FDB913] rounded"></div>
              </div>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fadeIn delay-300">
                Shaping Future Leaders through Excellence in
                <span className="font-bold text-[#FDB913]"> Science & Commerce </span>
                Education
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8 animate-fadeIn delay-400">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="flex items-center justify-center mb-2">
                    <Trophy className="text-[#FDB913]" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-center">20+</div>
                  <div className="text-xs text-white/80 text-center">Years Legacy</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="text-[#FDB913]" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-center">98%</div>
                  <div className="text-xs text-white/80 text-center">Success Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="text-[#FDB913]" size={24} />
                  </div>
                  <div className="text-2xl font-bold text-center">6</div>
                  <div className="text-xs text-white/80 text-center">Top Streams</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn delay-500">
                <Link
                  to="/pu-college/admissions"
                  className="group bg-[#FDB913] hover:bg-[#FDB913]/90 text-[#0F2A4A] px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 hover:shadow-2xl flex items-center justify-center relative overflow-hidden"
                >
                  <span className="relative z-10">Apply Now</span>
                  <ArrowRight className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FDB913] to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
                <Link
                  to="/pu-college/about"
                  className="group bg-[#0F2A4A]/50 hover:bg-[#0F2A4A]/80 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center"
                >
                  <span>Learn More</span>
                  <BookOpen className="ml-2 group-hover:rotate-12 transition-transform" size={20} />
                </Link>
              </div>

              {/* Additional Info */}
              {/* <div className="mt-8 flex flex-wrap gap-6 text-sm animate-fadeIn delay-600">
                <div className="flex items-center gap-2 text-white/80">
                  <MapPin size={16} className="text-[#FDB913]" />
                  <span>Bengaluru, Karnataka</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Clock size={16} className="text-[#FDB913]" />
                  <span>Established 2007</span>
                </div>
              </div> */}
            </div>

            {/* Right Side - Feature Cards */}
            <div className="relative animate-fadeIn delay-300">
              <div className="grid grid-cols-2 gap-4">
                {/* Science Stream Card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all transform hover:-translate-y-2 hover:shadow-2xl group">
                  <div className="w-14 h-14 bg-[#FDB913] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Microscope className="text-[#0F2A4A]" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Science Stream</h3>
                  <p className="text-white/70 text-sm mb-3">PCMB, PCMC, PCME</p>
                  <div className="flex items-center text-[#FDB913] text-sm font-semibold">
                    <span>Explore</span>
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Commerce Stream Card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all transform hover:-translate-y-2 hover:shadow-2xl group mt-8">
                  <div className="w-14 h-14 bg-[#FDB913] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Calculator className="text-[#0F2A4A]" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Commerce Stream</h3>
                  <p className="text-white/70 text-sm mb-3">BSAC, SEBA, CEBA</p>
                  <div className="flex items-center text-[#FDB913] text-sm font-semibold">
                    <span>Explore</span>
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Facilities Card - Spanning 2 columns */}
                <div className="col-span-2 bg-gradient-to-r from-[#FDB913] to-yellow-400 rounded-2xl p-6 hover:shadow-2xl transition-all transform hover:-translate-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-[#0F2A4A] mb-2">
                        Modern Facilities
                      </h3>
                      <p className="text-[#0F2A4A]/80 text-sm mb-4">
                        State-of-the-art labs, 5-stack library, experienced faculty
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-[#0F2A4A] text-white px-3 py-1 rounded-full text-xs font-semibold">Labs</span>
                        <span className="bg-[#0F2A4A] text-white px-3 py-1 rounded-full text-xs font-semibold">Library</span>
                        <span className="bg-[#0F2A4A] text-white px-3 py-1 rounded-full text-xs font-semibold">Sports</span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-[#0F2A4A] rounded-xl flex items-center justify-center">
                      <BookOpen className="text-[#FDB913]" size={24} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Achievement Badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-2xl animate-float">
                <div className="text-center">
                  <Star className="text-[#FDB913] mx-auto mb-1" size={32} fill="#FDB913" />
                  <div className="text-[#0F2A4A] font-bold text-sm">Top Rated</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F9FAFB" />
          </svg>
        </div>
      </section>



      {/* About Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              {/* Decorative dots pattern */}
              <div className="absolute -top-10 -right-10 grid grid-cols-5 gap-2 opacity-20">
                {[...Array(25)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-[#0F2A4A] rounded-full"></div>
                ))}
              </div>

              {/* Small circular image */}
              <div className="absolute -top-5 -left-5 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl z-10 animate-float">
                <img
                  src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&h=400&fit=crop"
                  alt="Student"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Main circular image */}
              <div className="relative rounded-full overflow-hidden w-full aspect-square max-w-lg mx-auto border-8 border-gray-100 shadow-2xl animate-scaleIn">
                <img
                  src={img1}
                  alt="Student studying"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Years badge */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#0F2A4A] text-white px-10 py-4 rounded-full shadow-2xl z-10 animate-bounce-slow">
                <div className="text-center">
                  <div className="text-4xl font-bold">20+</div>
                  <div className="text-sm font-semibold uppercase tracking-wider">Years of Experience</div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="animate-slideRight">
              <div className="inline-block text-[#0F2A4A] font-semibold mb-4 uppercase tracking-wider text-sm">
                ■ Our About Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-6 leading-tight">
                Complete About Students University Education.
              </h2>

              {/* College Details */}
              <div className="mb-8 p-6 bg-gray-50 rounded-xl border-l-4 border-[#FDB913]">
                <h3 className="font-bold text-xl text-[#0F2A4A] mb-2">S Cadambi Independent PU College</h3>
                <div className="mb-4 p-3 bg-white rounded-lg">
                  <p className="text-gray-700 font-semibold mb-1">विद्या विनियोगात् विकासः</p>
                  <p className="text-gray-600 italic">vidyā viniyogāt vikāsaḥ</p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  The S Cadambi Independent PU College was inaugurated on June 25, 2007 by the then president of KET
                  Sri G. R. Shrinivasan. A separate college block was inaugurated by the state HRD minister. The five
                  stacked library was inaugurated on 1st of November 2007 by Sri A. Ramachar Rtd, Principal of S Cadambi
                  State High School. Upgraded Physics, Chemistry and Biology labs were inaugurated on 25th of July 2009
                  by Prof K.V.K Iyengar, a well known figure in the field of education.
                </p>
              </div>

              {/* Features Grid */}
              {/* <div className="grid sm:grid-cols-2 gap-4">
                {aboutFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 animate-fadeIn"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className={`${feature.color} w-14 h-14 rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F2A4A] mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </section>


      {/* Streams Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <div className="inline-block text-[#FDB913] font-semibold mb-4 uppercase tracking-wider text-sm">
              ■ OUR COURSE CATEGORIES ■
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-4">
              We Success For Categories<br />Creative Students.
            </h2>
          </div>

          {/* Science Stream Combinations */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#0F2A4A] mb-6 flex items-center">
              <div className="w-1 h-8 bg-[#FDB913] mr-3"></div>
              SCIENCE
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* PCMB */}
              <div className="relative group animate-slideUp cursor-pointer" style={{ animationDelay: '0ms' }}>
                <div className="absolute -top-3 -left-3 w-20 h-20 bg-[#0F2A4A] rounded-full flex items-center justify-center text-white z-10 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl">
                  <Microscope size={32} className="group-hover:rotate-[-12deg] transition-transform duration-500" />
                </div>
                <div className="absolute -top-2 -left-2 w-20 h-20 border-2 border-[#FDB913] rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                <div className="relative bg-white p-6 pt-12 pl-20 rounded-2xl shadow-md group-hover:shadow-2xl transition-all duration-500 border-l-4 border-[#0F2A4A] group-hover:border-[#FDB913] transform group-hover:-translate-y-2 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-blue-50">
                  <h4 className="text-xl font-bold text-[#0F2A4A] mb-3 group-hover:text-[#FDB913] transition-colors">PCMB</h4>
                  <p className="text-gray-600 mb-4 text-sm">Physics, Chemistry, Mathematics, Biology</p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700 text-sm transform group-hover:translate-x-2 transition-transform duration-300">
                      <Check className="text-[#FDB913] mr-2 shrink-0" size={16} />
                      Medical aspirants
                    </li>
                    <li className="flex items-center text-gray-700 text-sm transform group-hover:translate-x-2 transition-transform duration-300 delay-75">
                      <Check className="text-[#FDB913] mr-2 shrink-0" size={16} />
                      Research careers
                    </li>
                  </ul>
                </div>
              </div>

              {/* PCME */}
              <div className="relative group animate-slideUp cursor-pointer" style={{ animationDelay: '100ms' }}>
                <div className="absolute -top-3 -left-3 w-20 h-20 bg-[#FDB913] rounded-full flex items-center justify-center text-[#0F2A4A] z-10 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl">
                  <Microscope size={32} className="group-hover:rotate-[-12deg] transition-transform duration-500" />
                </div>
                <div className="absolute -top-2 -left-2 w-20 h-20 border-2 border-[#0F2A4A] rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                <div className="relative bg-white p-6 pt-12 pl-20 rounded-2xl shadow-md group-hover:shadow-2xl transition-all duration-500 border-l-4 border-[#FDB913] group-hover:border-[#0F2A4A] transform group-hover:-translate-y-2 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-yellow-50">
                  <h4 className="text-xl font-bold text-[#0F2A4A] mb-3 group-hover:text-[#FDB913] transition-colors">PCME</h4>
                  <p className="text-gray-600 mb-4 text-sm">Physics, Chemistry, Mathematics, Electronics</p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700 text-sm transform group-hover:translate-x-2 transition-transform duration-300">
                      <Check className="text-[#FDB913] mr-2 shrink-0" size={16} />
                      Engineering streams
                    </li>
                    <li className="flex items-center text-gray-700 text-sm transform group-hover:translate-x-2 transition-transform duration-300 delay-75">
                      <Check className="text-[#FDB913] mr-2 shrink-0" size={16} />
                      Technology fields
                    </li>
                  </ul>
                </div>
              </div>

              {/* PCMC */}
              <div className="relative group animate-slideUp cursor-pointer" style={{ animationDelay: '200ms' }}>
                <div className="absolute -top-3 -left-3 w-20 h-20 bg-[#0F2A4A] rounded-full flex items-center justify-center text-white z-10 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl">
                  <Calculator size={32} className="group-hover:rotate-[-12deg] transition-transform duration-500" />
                </div>
                <div className="absolute -top-2 -left-2 w-20 h-20 border-2 border-[#FDB913] rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                <div className="relative bg-white p-6 pt-12 pl-20 rounded-2xl shadow-md group-hover:shadow-2xl transition-all duration-500 border-l-4 border-[#0F2A4A] group-hover:border-[#FDB913] transform group-hover:-translate-y-2 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-blue-50">
                  <h4 className="text-xl font-bold text-[#0F2A4A] mb-3 group-hover:text-[#FDB913] transition-colors">PCMC</h4>
                  <p className="text-gray-600 mb-4 text-sm">Physics, Chemistry, Mathematics, Computer Science</p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700 text-sm transform group-hover:translate-x-2 transition-transform duration-300">
                      <Check className="text-[#FDB913] mr-2 shrink-0" size={16} />
                      IT & Software
                    </li>
                    <li className="flex items-center text-gray-700 text-sm transform group-hover:translate-x-2 transition-transform duration-300 delay-75">
                      <Check className="text-[#FDB913] mr-2 shrink-0" size={16} />
                      Data Science
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Commerce Stream Combinations */}
          <div>
            <h3 className="text-2xl font-bold text-[#0F2A4A] mb-6 flex items-center">
              <div className="w-1 h-8 bg-[#FDB913] mr-3"></div>
              COMMERCE
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* BSAC */}
              <div className="relative group animate-slideUp cursor-pointer" style={{ animationDelay: '300ms' }}>
                <div className="absolute -top-3 -left-3 w-20 h-20 bg-[#FDB913] rounded-full flex items-center justify-center text-[#0F2A4A] z-10 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl">
                  <BookOpen size={32} className="group-hover:rotate-[-12deg] transition-transform duration-500" />
                </div>
                <div className="absolute -top-2 -left-2 w-20 h-20 border-2 border-[#0F2A4A] rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                <div className="relative bg-white p-6 pt-12 pl-20 rounded-2xl shadow-md group-hover:shadow-2xl transition-all duration-500 border-l-4 border-[#FDB913] group-hover:border-[#0F2A4A] transform group-hover:-translate-y-2 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-yellow-50">
                  <h4 className="text-xl font-bold text-[#0F2A4A] mb-3 group-hover:text-[#FDB913] transition-colors">BSAC</h4>
                  <p className="text-gray-600 mb-4 text-sm">Business Studies, Accountancy, Statistics, Computer Science</p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700 text-sm transform group-hover:translate-x-2 transition-transform duration-300">
                      <Check className="text-[#FDB913] mr-2 shrink-0" size={16} />
                      Business & Finance
                    </li>
                    <li className="flex items-center text-gray-700 text-sm transform group-hover:translate-x-2 transition-transform duration-300 delay-75">
                      <Check className="text-[#FDB913] mr-2 shrink-0" size={16} />
                      IT Applications
                    </li>
                  </ul>
                </div>
              </div>

              {/* SEBA */}
              <div className="relative group animate-slideUp cursor-pointer" style={{ animationDelay: '400ms' }}>
                <div className="absolute -top-3 -left-3 w-20 h-20 bg-[#0F2A4A] rounded-full flex items-center justify-center text-white z-10 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl">
                  <TrendingUp size={32} className="group-hover:rotate-[-12deg] transition-transform duration-500" />
                </div>
                <div className="absolute -top-2 -left-2 w-20 h-20 border-2 border-[#FDB913] rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                <div className="relative bg-white p-6 pt-12 pl-20 rounded-2xl shadow-md group-hover:shadow-2xl transition-all duration-500 border-l-4 border-[#0F2A4A] group-hover:border-[#FDB913] transform group-hover:-translate-y-2 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-blue-50">
                  <h4 className="text-xl font-bold text-[#0F2A4A] mb-3 group-hover:text-[#FDB913] transition-colors">SEBA</h4>
                  <p className="text-gray-600 mb-4 text-sm">Statistics, Economics, Business Studies, Accountancy</p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700 text-sm transform group-hover:translate-x-2 transition-transform duration-300">
                      <Check className="text-[#FDB913] mr-2 shrink-0" size={16} />
                      Commerce & Trade
                    </li>
                    <li className="flex items-center text-gray-700 text-sm transform group-hover:translate-x-2 transition-transform duration-300 delay-75">
                      <Check className="text-[#FDB913] mr-2 shrink-0" size={16} />
                      Economics fields
                    </li>
                  </ul>
                </div>
              </div>

              {/* CEBA */}
              <div className="relative group animate-slideUp cursor-pointer" style={{ animationDelay: '500ms' }}>
                <div className="absolute -top-3 -left-3 w-20 h-20 bg-[#FDB913] rounded-full flex items-center justify-center text-[#0F2A4A] z-10 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl">
                  <Calculator size={32} className="group-hover:rotate-[-12deg] transition-transform duration-500" />
                </div>
                <div className="absolute -top-2 -left-2 w-20 h-20 border-2 border-[#0F2A4A] rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                <div className="relative bg-white p-6 pt-12 pl-20 rounded-2xl shadow-md group-hover:shadow-2xl transition-all duration-500 border-l-4 border-[#FDB913] group-hover:border-[#0F2A4A] transform group-hover:-translate-y-2 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-yellow-50">
                  <h4 className="text-xl font-bold text-[#0F2A4A] mb-3 group-hover:text-[#FDB913] transition-colors">CEBA</h4>
                  <p className="text-gray-600 mb-4 text-sm">Computer Science, Economics, Business Studies, Accountancy</p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700 text-sm transform group-hover:translate-x-2 transition-transform duration-300">
                      <Check className="text-[#FDB913] mr-2 shrink-0" size={16} />
                      Digital Commerce
                    </li>
                    <li className="flex items-center text-gray-700 text-sm transform group-hover:translate-x-2 transition-transform duration-300 delay-75">
                      <Check className="text-[#FDB913] mr-2 shrink-0" size={16} />
                      Fintech careers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative animate-fadeIn">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop"
                  alt="Students"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FDB913] rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#0F2A4A] rounded-full opacity-20 blur-2xl"></div>
            </div>

            {/* Right Side - Content with Tabs */}
            <div className="animate-slideRight">
              <VisionMissionTabs />
            </div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl font-bold text-[#0F2A4A] mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">Excellence in every aspect of education</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center transform hover:-translate-y-2 animate-scaleIn"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="bg-[#FDB913]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[#0F2A4A] transform hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0F2A4A] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-0.5 w-16 bg-[#FDB913]"></div>
              <h2 className="text-4xl font-bold text-[#0F2A4A]">
                Our <span className="text-[#0F2A4A]">Achievements</span>
              </h2>
              <div className="h-0.5 w-16 bg-[#FDB913]"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, idx) => (
              <AchievementCard
                key={idx}
                achievement={achievement}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FDB913] to-[#FDB913]/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwRjJBNEEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fadeIn">
          <h2 className="text-4xl font-bold text-[#0F2A4A] mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-[#0F2A4A]/80 mb-8 max-w-2xl mx-auto">
            Join us and become part of a legacy of excellence in pre-university education
          </p>
          <Link
            to="/pu-college/admissions"
            className="inline-flex items-center bg-[#0F2A4A] hover:bg-[#0F2A4A]/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 hover:shadow-2xl"
          >
            Apply for Admission
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0) translateX(-50%);
          }
          50% {
            transform: translateY(-10px) translateX(-50%);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slideDown {
          animation: slideDown 0.8s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animate-slideRight {
          animation: slideRight 0.8s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .delay-75 {
          animation-delay: 75ms;
        }

        .delay-100 {
          animation-delay: 100ms;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }

          @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0) translateX(-50%);
          }
          50% {
            transform: translateY(-10px) translateX(-50%);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slideDown {
          animation: slideDown 0.8s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animate-slideRight {
          animation: slideRight 0.8s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .delay-75 {
          animation-delay: 75ms;
        }

        .delay-100 {
          animation-delay: 100ms;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-400 {
          animation-delay: 400ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-600 {
          animation-delay: 600ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>


    </div>
  );
};

export default PuCollegeHome;