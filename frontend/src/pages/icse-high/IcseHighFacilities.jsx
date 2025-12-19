import React from 'react';
import { motion } from 'framer-motion';
import { School, FlaskConical, BookOpen, Users, Monitor, Trophy, Droplet, Shield, Bus, Home, Calendar, CheckCircle2, Lightbulb } from 'lucide-react';

const IcseHighFacilities = () => {
  const facilities = [
    {
      icon: School,
      title: 'Smart Classrooms',
      description: 'Well-equipped, bright and spacious classrooms designed for optimal learning environment. Features modern teaching aids and interactive smart boards.',
      details: [
        '21 main Classrooms',
        '2 language and electives classrooms',
        'Well-ventilated and naturally lit spaces'
      ]
    },
    {
      icon: FlaskConical,
      title: 'Science Laboratories',
      description: 'State-of-the-art laboratories for hands-on practical learning in Physics, Chemistry, and Biology.',
      details: [
        'Computer Lab (School lab)',
        'Physics lab',
        'Chemistry lab',
        'Biology lab (shared with PU college)',
        'Latest equipment and apparatus'
      ]
    },
    {
      icon: BookOpen,
      title: 'Library',
      description: 'Well-equipped library with wide collection of books ranging from subject, syllabus oriented to fictions, periodicals, biographies, non-fictions, philosophical, spiritual etc.',
      details: [
        'Books allowed for borrowing from grade 6 to 10',
        'Reference section for in-library study',
        'Periodicals and magazines subscription',
        'Quiet reading environment'
      ]
    },
    {
      icon: Trophy,
      title: 'Sports Facilities',
      description: 'Comprehensive sports facilities with trained PE teachers and well-equipped band-set with the band-troupe.',
      details: [
        'Ample encouragement given for sports activities',
        'Well-trained PE teachers who conduct coaching for:',
        'Kho-Kho, Kabaddi, Throwball',
        'Handball, cricket and athletics',
        'Well-equipped band-set trained by PE faculty in-house'
      ]
    },
    {
      icon: Bus,
      title: 'Transport',
      description: 'Safe and reliable transportation facility for students.',
      details: [
        'Only Private Transport facility',
        'Verified and trusted transport providers',
        'Regular route monitoring'
      ]
    },
    {
      icon: Home,
      title: 'Hostel/Boarding',
      description: 'Accommodation facilities information.',
      details: [
        'No facilities available on campus',
        'Nearby accommodation options can be arranged',
        'Contact administration for assistance'
      ]
    }
  ];

  const safetyFeatures = [
    {
      title: 'Guarded Gates',
      description: 'All gates completely guarded with utmost care by well-trained, trust-worthy security staff'
    },
    {
      title: 'Safety Club',
      description: 'Safety-club in place for giving maximum impetus on safety and security of students and staff. The members include principals, Teachers, Parent representatives, student representatives, Transport providing staff and security guards.'
    },
    {
      title: 'Safety Programs',
      description: 'Regular safety awareness programs conducted to educate students on safety and security and well-being'
    },
    {
      title: 'Health & Hygiene',
      description: 'Facilities like first-aid, safe water-dispenser, clean and hygienic wash-rooms are provided'
    }
  ];

  const events = [
    'National Festivals: Independence Day, Republic Day',
    'Kannada Rajyotsava',
    'Cultural festivals and celebrations',
    'Annual Day celebration',
    'Sports Day events'
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
              <School className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-[#FDB913] to-white bg-clip-text text-transparent">
              Our Facilities
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
            <p className="text-xl md:text-2xl text-gray-300">World-class infrastructure for comprehensive learning</p>
          </motion.div>
        </div>
      </section>

      {/* Campus Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-0.5 w-16 bg-[#0F2A4A]"></div>
              <span className="text-[#0F2A4A] font-bold text-sm uppercase tracking-wider">Overview</span>
              <div className="h-0.5 w-16 bg-[#0F2A4A]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">Campus Overview</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#FDB913] to-yellow-600 mx-auto rounded-full mb-6"
            />
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Well-equipped, bright and spacious classrooms, Laboratories, play-area.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Facilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {facilities.map((facility, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border-t-4 border-[#FDB913]"
              >
                <div className="p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-20 h-20 bg-gradient-to-br from-[#FDB913] to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg"
                    >
                      <facility.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <h2 className="text-4xl font-bold text-[#0F2A4A]">{facility.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {facility.description}
                  </p>

                  <div className="bg-gradient-to-r from-[#0F2A4A]/5 to-[#FDB913]/5 rounded-2xl p-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      {facility.details.map((detail, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className="w-6 h-6 text-[#FDB913] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span className="text-gray-800 font-medium">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">Safety & Security</h2>
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
            className="grid md:grid-cols-2 gap-8"
          >
            {safetyFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#FDB913] to-yellow-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#FDB913] rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-200 leading-relaxed text-lg">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Activities and Events */}
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
              <Calendar className="w-6 h-6 text-[#0F2A4A]" />
              <div className="h-0.5 w-16 bg-[#0F2A4A]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">Activities and Events</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#FDB913] to-yellow-600 mx-auto rounded-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 shadow-2xl border-t-4 border-[#FDB913]"
          >
            <h3 className="text-3xl font-bold text-[#0F2A4A] mb-8 flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-[#FDB913]" />
              Annual Events
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {events.map((event, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#0F2A4A]/5 to-[#FDB913]/5 rounded-xl hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FDB913] to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-800 font-semibold text-lg pt-2">{event}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Amenities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">Additional Amenities</h2>
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
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: Shield, title: 'Safety & Security', desc: 'CCTV surveillance and trained security personnel ensuring 24/7 campus safety' },
              { icon: Droplet, title: 'Clean Environment', desc: 'Hygienic campus with clean drinking water facilities and eco-friendly practices' },
              { icon: Users, title: 'Canteen', desc: 'Nutritious and hygienic food available with varied menu options' }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-t-4 border-[#FDB913] relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#FDB913]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10"
                >
                  <item.icon className="w-8 h-8 text-[#FDB913]" />
                </motion.div>
                <h3 className="text-2xl font-bold text-[#0F2A4A] mb-3 relative z-10">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IcseHighFacilities;