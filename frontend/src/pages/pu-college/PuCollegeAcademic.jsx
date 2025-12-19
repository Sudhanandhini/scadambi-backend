import React, { useState } from 'react';
import { BookOpen, Microscope, Calculator, Globe, Laptop, FlaskConical, Users, Award, Check, Clock, Calendar, TrendingUp, Target, Lightbulb, Star, CheckCircle, FileText, AlertCircle } from 'lucide-react';

const PuCollegeAcademic = () => {
  const [activeStream, setActiveStream] = useState('science');

  const scienceSubjects = [
    {
      name: 'Physics',
      icon: <FlaskConical size={28} />,
      topics: ['Mechanics', 'Thermodynamics', 'Electromagnetism', 'Modern Physics'],
      color: 'from-[#0F2A4A] to-[#0F2A4A]'
    },
    {
      name: 'Chemistry',
      icon: <Microscope size={28} />,
      topics: ['Physical Chemistry', 'Inorganic Chemistry', 'Organic Chemistry', 'Environmental Chemistry'],
      color: 'from-[#FDB913] to-[#FDB913]'
    },
    {
      name: 'Mathematics',
      icon: <Calculator size={28} />,
      topics: ['Calculus', 'Algebra', 'Vectors', 'Statistics & Probability'],
      color: 'from-[#0F2A4A] to-[#0F2A4A]'
    },
    {
      name: 'Biology',
      icon: <Globe size={28} />,
      topics: ['Botany', 'Zoology', 'Genetics', 'Ecology'],
      color: 'from-[#FDB913] to-[#FDB913]'
    },
    {
      name: 'Computer Science',
      icon: <Laptop size={28} />,
      topics: ['Programming in C++', 'Data Structures', 'Database Management', 'Networking'],
      color: 'from-[#0F2A4A] to-[#0F2A4A]'
    }
  ];

  const commerceSubjects = [
    {
      name: 'Accountancy',
      icon: <Calculator size={28} />,
      topics: ['Financial Accounting', 'Partnership Accounts', 'Company Accounts', 'Analysis of Financial Statements'],
      color: 'from-[#0F2A4A] to-[#0F2A4A]'
    },
    {
      name: 'Business Studies',
      icon: <BookOpen size={28} />,
      topics: ['Principles of Management', 'Marketing', 'Finance', 'Human Resource Management'],
      color: 'from-[#FDB913] to-[#FDB913]'
    },
    {
      name: 'Economics',
      icon: <Globe size={28} />,
      topics: ['Microeconomics', 'Macroeconomics', 'Indian Economy', 'International Trade'],
      color: 'from-[#0F2A4A] to-[#0F2A4A]'
    },
    {
      name: 'Statistics',
      icon: <TrendingUp size={28} />,
      topics: ['Probability', 'Statistical Methods', 'Index Numbers', 'Time Series Analysis'],
      color: 'from-[#FDB913] to-[#FDB913]'
    }
  ];

    const disciplinaryRules = [
    "Strict disciplinary action will be taken if a student",
    "Misbehaves and damages school property.",
    "Uses mobile phones and other electronic gadgets",
    "Comes late"
  ];


  
  const codeOfConduct = [
    "Students should converse in English since it is a medium of instruction.",
    "Students must use decent language at all times. They should be courteous and polite.",
    "Students must wear neat and tidy uniform regularly to the school.",
    "Students must maintain discipline in the corridor at all times.",
    "Students must not loiter in public places wearing school uniform.",
    "Movement between class rooms should be done in a disciplinary manner.",
    "Students should keep to the left while walking in the corridor or climbing up the stairs."
  ];



  const parentGuidelines = [
    "Meet the principal only with the prior appointment on any working day.",
    "Ensure punctuality and regularity.",
    "Send a leave note/medical certificate in case of long absence.",
    "Go through the school diary daily for topics covered and home work. Sign in the prescribed column. Only important messages will be sent through SMS.",
    "The school gates will close ten minutes after the first bell.",
    "Drop and pick your wards on time and disperse immediately. Kindly avoid standing in groups around the school campus as it hinders the privacy of the neighbourhood.",
    "Send an authorization letter with the child (only genuine reasons) in case of early dismissal without which the students are not allowed to leave the premises.",
    "Plan your role effectively and supplement the efforts of the teachers to make learning fruitful.",
    "Play an active role and support the school in character molding and personality development.",
    "Stress on neatness and tidiness.",
    "Send text books and other books according to time table.",
    "If any unusual behavior is observed, bring it to the notice of the class teacher."
  ];


  const teachingMethodology = [
    {
      title: 'Interactive Learning',
      description: 'Engaging classroom sessions with practical demonstrations and real-world applications',
      icon: <Users size={32} />,
      gradient: 'from-[#0F2A4A] to-[#1a3a5f]'
    },
    {
      title: 'Competitive Exam Prep',
      description: 'Special coaching for JEE, NEET, CET, and other entrance examinations',
      icon: <Target size={32} />,
      gradient: 'from-[#FDB913] to-[#FDB913]/80'
    },
    {
      title: 'Regular Assessments',
      description: 'Continuous evaluation through tests, assignments, and mock examinations',
      icon: <Award size={32} />,
      gradient: 'from-[#0F2A4A] to-[#1a3a5f]'
    },
    {
      title: 'Doubt Clearing Sessions',
      description: 'Dedicated time for individual student queries and concept clarification',
      icon: <Lightbulb size={32} />,
      gradient: 'from-[#FDB913] to-[#FDB913]/80'
    }
  ];

  const academicFeatures = [
    { text: 'Well-equipped laboratories for practical learning', icon: <FlaskConical size={20} /> },
    { text: 'Comprehensive library with reference books and journals', icon: <BookOpen size={20} /> },
    { text: 'Digital learning resources and smart classrooms', icon: <Laptop size={20} /> },
    { text: 'Guest lectures by subject experts', icon: <Users size={20} /> },
    { text: 'Study materials and practice papers', icon: <BookOpen size={20} /> },
    { text: 'Career counseling and guidance sessions', icon: <Target size={20} /> }
  ];

  const streamBenefits = {
    science: [
      'Preparation for JEE, NEET, CET, and other engineering/medical entrance exams',
      'State-of-the-art laboratory facilities for hands-on learning',
      'Regular practice sessions and mock tests',
      'Expert faculty with years of experience in competitive exam coaching'
    ],
    commerce: [
      'Foundation for CA, CS, CMA, and other commerce careers',
      'Practical exposure to business concepts and case studies',
      'Industry expert guest lectures and workshops',
      'Career guidance for banking, finance, and management fields'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F2A4A] via-[#1a3a5f] to-[#0F2A4A] text-white py-32 mt-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Animated decorative elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#FDB913]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FDB913]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-[#FDB913] text-[#0F2A4A] px-6 py-2 rounded-full font-semibold mb-6 animate-fadeIn">
              <BookOpen className="mr-2" size={20} />
              Academic Excellence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slideDown">
              Academic <span className="text-[#FDB913]">Programs</span>
            </h1>
              <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-20 bg-[#FDB913] rounded"></div>
              <div className="h-1 w-12 bg-white rounded"></div>
              <div className="h-1 w-20 bg-[#FDB913] rounded"></div>
            </div>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fadeIn delay-200">
              Comprehensive curriculum designed for excellence in board exams and competitive entrance tests
            </p>
          </div>
        </div>
      </section>

      {/* Stream Selection */}
      <section className="py-12 bg-white sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveStream('science')}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 ${activeStream === 'science'
                  ? 'bg-gradient-to-r from-[#0F2A4A] to-[#1a3a5f] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              <Microscope className="inline-block mr-2" size={24} />
              Science Stream
            </button>
            <button
              onClick={() => setActiveStream('commerce')}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 ${activeStream === 'commerce'
                  ? 'bg-gradient-to-r from-[#FDB913] to-[#FDB913]/80 text-[#0F2A4A] shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              <Calculator className="inline-block mr-2" size={24} />
              Commerce Stream
            </button>
          </div>
        </div>
      </section>

      {/* Science Stream */}
      {activeStream === 'science' && (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fadeIn">
              <div className="inline-block bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-bold mb-6">
                PCMB / PCME / PCMC
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-4">Science Stream</h2>
              <p className="text-xl text-gray-600 mb-8">For aspiring Engineers, Doctors, and Scientists</p>

              {/* Benefits */}
              <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-12">
                <h3 className="text-2xl font-bold text-[#0F2A4A] mb-6 flex items-center justify-center">
                  <Star className="mr-3 text-[#FDB913]" size={28} />
                  Why Choose Science Stream?
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {streamBenefits.science.map((benefit, idx) => (
                    <div key={idx} className="flex items-start text-left">
                      <Check className="text-[#FDB913] mr-3 mt-1 shrink-0" size={20} />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {scienceSubjects.map((subject, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 animate-slideUp"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Gradient Header */}
                  <div className={`bg-gradient-to-r ${subject.color} p-6 relative`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="relative z-10">
                      <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                        {subject.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white">{subject.name}</h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <ul className="space-y-3">
                      {subject.topics.map((topic, i) => (
                        <li key={i} className="flex items-start text-gray-700 group/item">
                          <Check className="text-[#FDB913] mr-3 mt-1 shrink-0 group-hover/item:scale-125 transition-transform" size={18} />
                          <span className="text-sm group-hover/item:text-[#0F2A4A] transition-colors">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FDB913] rounded-2xl transition-all duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Commerce Stream */}
      {activeStream === 'commerce' && (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fadeIn">
              <div className="inline-block bg-[#FDB913]/10 text-[#FDB913] px-6 py-3 rounded-full font-bold mb-6">
                BSAC / SEBA / CEBA
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-4">Commerce Stream</h2>
              <p className="text-xl text-gray-600 mb-8">For future Business Leaders and Economists</p>

              {/* Benefits */}
              <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-12">
                <h3 className="text-2xl font-bold text-[#0F2A4A] mb-6 flex items-center justify-center">
                  <Star className="mr-3 text-[#FDB913]" size={28} />
                  Why Choose Commerce Stream?
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {streamBenefits.commerce.map((benefit, idx) => (
                    <div key={idx} className="flex items-start text-left">
                      <Check className="text-[#FDB913] mr-3 mt-1 shrink-0" size={20} />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {commerceSubjects.map((subject, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 animate-slideUp"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Gradient Header */}
                  <div className={`bg-gradient-to-r ${subject.color} p-6 relative`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="relative z-10">
                      <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                        {subject.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{subject.name}</h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <ul className="space-y-3">
                      {subject.topics.map((topic, i) => (
                        <li key={i} className="flex items-start text-gray-700 group/item">
                          <Check className="text-[#FDB913] mr-3 mt-1 shrink-0 group-hover/item:scale-125 transition-transform" size={18} />
                          <span className="text-sm group-hover/item:text-[#0F2A4A] transition-colors">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FDB913] rounded-2xl transition-all duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}



      {/* Teaching Methodology */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-yellow-50 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-4">Teaching Methodology</h2>
            <p className="text-xl text-gray-600">Modern approach to effective learning</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachingMethodology.map((method, idx) => (
              <div
                key={idx}
                className="group relative animate-scaleIn"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className={`relative bg-gradient-to-br ${method.gradient} p-8 rounded-2xl text-center shadow-xl transform group-hover:scale-105 transition-all duration-300 overflow-hidden`}>
                  {/* Background decoration */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-black/10 rounded-full"></div>

                  <div className="relative z-10">
                    {/* Number Badge */}
                    <div className={`${method.gradient.includes('FDB913') ? 'bg-[#0F2A4A] text-white' : 'bg-[#FDB913] text-[#0F2A4A]'} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-2xl shadow-lg group-hover:rotate-12 transition-transform`}>
                      {idx + 1}
                    </div>

                    {/* Icon */}
                    <div className={`${method.gradient.includes('FDB913') ? 'text-[#0F2A4A]' : 'text-white'} mb-4`}>
                      {method.icon}
                    </div>

                    <h3 className={`text-xl font-bold mb-4 ${method.gradient.includes('FDB913') ? 'text-[#0F2A4A]' : 'text-white'}`}>
                      {method.title}
                    </h3>
                    <p className={`text-sm ${method.gradient.includes('FDB913') ? 'text-[#0F2A4A]/80' : 'text-white/90'}`}>
                      {method.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Affiliation & Curriculum */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-4xl font-bold text-[#0F2A4A] mb-8 text-center">Affiliation & Curriculum</h2>

            <div className="space-y-6">
              <div className="border-l-4 border-[#FDB913] pl-6">
                <h3 className="text-2xl font-bold text-[#0F2A4A] mb-2">AFFILIATION</h3>
                <p className="text-lg text-gray-700">RECOGNISED BY DEPARTMENT OF PU EDUCATION BOARD</p>
                <p className="text-lg text-gray-700 font-semibold">GOVERNMENT OF KARNATAKA</p>
              </div>

              <div className="border-l-4 border-[#0F2A4A] pl-6">
                <h3 className="text-2xl font-bold text-[#0F2A4A] mb-2">CURRICULAM</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  The structure, organization and consideration in curriculum are created to enhance student learning and facilitate instruction.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gradient-to-br from-[#0F2A4A] to-[#1a3a5f] p-6 rounded-xl text-white">
                  <h4 className="text-xl font-bold mb-3">NCERT FRAMEWORK</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 text-[#FDB913]" size={20} />
                      SUBJECT - CENTERED CURRICULAM
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 text-[#FDB913]" size={20} />
                      LEARNER - CENTERED CURRICULAM
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 text-[#FDB913]" size={20} />
                      CO-CURRICULAM AND EXTRA-CURRICULAM
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-[#FDB913] to-[#FDB913]/80 p-6 rounded-xl text-[#0F2A4A]">
                  <h4 className="text-xl font-bold mb-3">CLASS DIVISIONS</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center font-semibold">
                      <Award className="mr-2" size={20} />
                      1<sup>st</sup> AND 2<sup>nd</sup> PUC- SCIENCE
                    </li>
                    <li className="flex items-center font-semibold">
                      <Award className="mr-2" size={20} />
                      1<sup>st</sup> AND 2<sup>nd</sup> PUC- COMMERCE
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Academic Features */}
      <section className="py-20 bg-gradient-to-br from-[#0F2A4A] via-[#1a3a5f] to-[#0F2A4A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Academic Features</h2>
            <p className="text-xl text-white/80">Everything you need for academic success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="group flex items-center bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn border border-white/20"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="bg-[#FDB913] text-[#0F2A4A] w-12 h-12 rounded-lg flex items-center justify-center mr-4 shrink-0 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <span className="text-white/90 group-hover:text-white transition-colors">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Code of Conduct */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Code of Conduct */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <FileText className="text-[#0F2A4A] mr-3" size={32} />
                <h2 className="text-3xl font-bold text-[#0F2A4A]">CODE OF CONDUCT</h2>
              </div>
              <p className="text-gray-700 mb-6 font-semibold">
                Students are required to strictly follow the guidelines given below.
              </p>
              <ul className="space-y-3">
                {codeOfConduct.map((rule, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <CheckCircle className="mr-3 mt-1 text-[#FDB913] shrink-0" size={20} />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Disciplinary Rules */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <AlertCircle className="text-red-600 mr-3" size={32} />
                <h2 className="text-3xl font-bold text-[#0F2A4A]">DISCIPLINARY RULES</h2>
              </div>
              <ul className="space-y-3">
                {disciplinaryRules.map((rule, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 shrink-0"></div>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>



      {/* Guidelines to Parents */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0F2A4A] to-[#1a3a5f] rounded-2xl shadow-2xl p-8 md:p-12 text-white">
            <div className="flex items-center mb-8">
              <Users className="mr-4 text-[#FDB913]" size={40} />
              <h2 className="text-4xl font-bold">GUIDELINES TO THE PARENTS</h2>
            </div>
            <p className="text-lg mb-6 text-white/90">
              Parents are requested to follow the instructions and co-operate:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {parentGuidelines.map((guideline, idx) => (
                <div key={idx} className="flex items-start bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-colors">
                  <CheckCircle className="mr-3 mt-1 text-[#FDB913] shrink-0" size={20} />
                  <span className="text-white/90">{guideline}</span>
                </div>
              ))}
            </div>
          </div>
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

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slideDown {
          animation: slideDown 0.8s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.8s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
};

export default PuCollegeAcademic;