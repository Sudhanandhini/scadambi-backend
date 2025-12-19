import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Users, Award, Heart, Star, GraduationCap, Building2, Lightbulb } from 'lucide-react';

const IcseHighAbout = () => {
  const teachers = [
    'Ms. Harini G S', 'Ms. K.S.Veena', 'Ms. B.P. Indira', 'Ms. R. Mamatha',
    'Ms. Shaila Bhat', 'Ms. G.K. Anandhi', 'Ms. Vidya Pai. K', 'Ms. Virupaksha Swamy',
    'Ms. Laxmi M. R', 'Ms. Seema Kulkarni', 'Ms. Chitra. B', 'Ms. Anjana K N',
    'Ms. Yogitha M R', 'Ms. Lakshmi. S', 'Ms. Jayalakshmamma I G', 'Ms. Bhanu V',
    'Ms. Savitha Babu Rao', 'Ms. Ashwini M. Hemmige', 'Ms. Mounashree G', 'Ms. Nagalakshmi Kiran',
    'Ms. Usha. L', 'Ms. Girish H J', 'Ms. Rani Chennamma Jeevanagi', 'Ms. Rajeshwari V',
    'Ms. Rohini N. Adisheshan', 'Ms. Divya Ramakrishna', 'Ms. Annapurna Praveen Sunithe', 'Ms. Uma Madhusudan',
    'Ms. Anjana K G', 'Ms. Kamala Prasad', 'Ms. Nagaveni V M', 'Mr. Devaraj Gowda',
    'Ms. Sunanda Rajput', 'Ms. Saritha Hallappanavar', 'Ms. Shwetha V', 'Ms. Usha Rani',
    'Ms. Prathima Bhat S.', 'Ms. Komalakshi C N', 'Ms. Veena H R', 'Ms. Suparna',
    'Ms. Shreya Shri', 'Ms. Nagarathna'
  ];

  const supportingStaff = [
    'Ms. Swetha. H J',
    'Ms. Meghala M',
    'Ms. Samundeswari K',
    'Ms. Sujatha G R',
    'Ms. Nagarathna',
    'Ms. Harshitha',
    'Ms. Jayalakshmi N.'
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

  const teacherItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F2A4A] via-[#1a4d7a] to-[#0F2A4A] text-white py-32 overflow-hidden mt-16" >
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
              <BookOpen className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-[#FDB913] to-white bg-clip-text text-transparent">
              About Us
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
            <p className="text-xl md:text-2xl text-gray-300">Know more about ICSE High School</p>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-0.5 w-12 bg-[#0F2A4A]"></div>
                <span className="text-[#0F2A4A] font-bold text-sm uppercase tracking-wider">Welcome</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-6">Welcome to ICSE High School</h2>
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                className="h-2 w-24 bg-gradient-to-r from-[#FDB913] to-yellow-600 rounded-full mb-6"
              />
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                S. Cadambi Vidya Kendra ICSE High School (Grades 6-10) is committed to providing quality education following the ICSE curriculum, nurturing young minds to become responsible global citizens.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With a perfect blend of academic excellence, co-curricular activities, and value-based education, we prepare students for success in their board examinations and beyond.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80" 
                  alt="School" 
                  className="w-full h-96 object-cover" 
                />
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute top-0 left-0 w-full h-2 bg-[#FDB913]"
                  style={{ transformOrigin: 'left' }}
                />
              </div>
            </motion.div>
          </div>

          {/* Vision, Mission, Values */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] rounded-3xl p-10 text-white shadow-2xl overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#FDB913] to-yellow-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
              />
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-[#FDB913] rounded-2xl flex items-center justify-center mb-6 shadow-lg"
              >
                <Target className="w-10 h-10 text-[#0F2A4A]" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="leading-relaxed text-gray-200">
                Enlightenment through education - Academic growth to develop human potential through cutting edge technology.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative bg-gradient-to-br from-[#FDB913] to-yellow-600 rounded-3xl p-10 text-white shadow-2xl overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
              />
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg"
              >
                <Heart className="w-10 h-10 text-[#FDB913]" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="leading-relaxed">
                To instill respect and belief in our cultural heritage and ethos while providing quality ICSE education.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] rounded-3xl p-10 text-white shadow-2xl overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#FDB913] to-yellow-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
              />
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-[#FDB913] rounded-2xl flex items-center justify-center mb-6 shadow-lg"
              >
                <Star className="w-10 h-10 text-[#0F2A4A]" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="leading-relaxed text-gray-200">
                Integrity, Excellence, Respect, Innovation, and Compassion guide everything we do in our educational journey.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Principal's Message */}
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
              <span className="text-[#0F2A4A] font-bold text-sm uppercase tracking-wider">Leadership</span>
              <div className="h-0.5 w-16 bg-[#0F2A4A]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">Principal's Message</h2>
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
            className="bg-white rounded-3xl shadow-2xl p-12 border-t-4 border-[#FDB913]"
          >
            <div className="flex items-start gap-6 mb-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
              >
                <GraduationCap className="w-10 h-10 text-[#FDB913]" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-[#0F2A4A] mb-2">HARINI. G. S</h3>
                <p className="text-[#FDB913] font-semibold">Principal</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              It has been our bench-mark and endeavour of the ICSE High School team to give a holistic learning environment to the students since the last few decades. With a consistent 100% pass percentage, crowned with nearly 80% distinctions through past 32 years of the ICSE Board appearances of the school, the school has made a mark in academic pursuits as well. This accomplishment has been possible, mainly anchored with a team of highly talented and qualified teachers, backed with an able supporting staff. In the future also this will be whole-heartedly followed diligently. Leading this team and steering the students towards a wholesome development to become able, skilled, independent and valuable citizens, is my earnest aspiration. With this noble purpose, we, as a team, look forward to many more years of united efforts to engage, evolve and inspire the future nation builders. Jai Hind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Faculty Section */}
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
              <span className="text-[#0F2A4A] font-bold text-sm uppercase tracking-wider">Our Team</span>
              <div className="h-0.5 w-16 bg-[#0F2A4A]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">Our Faculty</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#FDB913] to-yellow-600 mx-auto rounded-full mb-4"
            />
            <p className="text-gray-600 text-lg">Total strength: 42 Full-Time Staff</p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {teachers.map((teacher, idx) => (
              <motion.div
                key={idx}
                variants={teacherItemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all border-l-4 border-[#FDB913] group"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg"
                  >
                    <Users className="w-6 h-6 text-[#FDB913]" />
                  </motion.div>
                  <p className="text-gray-800 font-semibold group-hover:text-[#0F2A4A] transition-colors">
                    {teacher}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Supporting Staff Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-[#0F2A4A] mb-4">Supporting Staff</h3>
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                className="h-2 w-24 bg-gradient-to-r from-[#FDB913] to-yellow-600 mx-auto rounded-full"
              />
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {supportingStaff.map((staff, idx) => (
                <motion.div
                  key={idx}
                  variants={teacherItemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all border-l-4 border-[#0F2A4A] group"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 bg-gradient-to-br from-[#FDB913] to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg"
                    >
                      <Users className="w-6 h-6 text-white" />
                    </motion.div>
                    <p className="text-gray-800 font-semibold group-hover:text-[#0F2A4A] transition-colors">
                      {staff}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] rounded-3xl p-8 text-white"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Lightbulb className="w-6 h-6 text-[#FDB913]" />
                  Academic Counsellor
                </h3>
                <p className="text-gray-200">Ms. Mallika (Part-time faculty)</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-[#FDB913]" />
                  Affiliation
                </h3>
                <p className="text-gray-200">Indian Council for Secondary Education [ICSE] co-ordinate by CISCE-New Delhi</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">Why Choose Us?</h2>
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
            {[
              { icon: Award, title: 'ICSE Curriculum', desc: 'Comprehensive CISCE board curriculum for grades 6-10' },
              { icon: Users, title: 'Expert Faculty', desc: 'Highly qualified and experienced teaching staff of 42 members' },
              { icon: BookOpen, title: 'Modern Facilities', desc: 'Well-equipped labs, library, and smart classrooms' },
              { icon: Target, title: 'Holistic Development', desc: 'Focus on academics, sports, arts, and character building' }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-l-4 border-[#FDB913]"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-br from-[#FDB913] to-yellow-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0F2A4A] mb-2">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IcseHighAbout;