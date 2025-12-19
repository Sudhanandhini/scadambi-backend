import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FlaskConical, Globe, Calculator, Palette, Music, Trophy, Languages, Computer, Heart, Clock, Shirt, GraduationCap, Award, Users, Target, Lightbulb, CheckCircle2 } from 'lucide-react';

const IcseHighAcademic = () => {
  const subjects = [
    { icon: BookOpen, name: 'English', description: 'Language and Literature' },
    { icon: Languages, name: 'Second Language', description: 'Hindi/Kannada/Sanskrit' },
    { icon: Calculator, name: 'Mathematics', description: 'Pure Mathematics' },
    { icon: FlaskConical, name: 'Science', description: 'Physics, Chemistry, Biology' },
    { icon: Globe, name: 'Social Studies', description: 'History, Geography, Civics' },
    { icon: Computer, name: 'Computer Studies', description: 'IT & Applications' },
    { icon: Palette, name: 'Arts Education', description: 'Drawing & Painting' },
    { icon: Trophy, name: 'Physical Education', description: 'Sports & Fitness' }
  ];

  const gradeSixToEight = [
    'English',
    'Second Language (Hindi/Kannada/Sanskrit)',
    'Mathematics',
    'Science (Physics, Chemistry, Biology)',
    'History and Civics, Geography',
    'Computer Studies',
    'Arts Education'
  ];

  const gradeNineToTen = [
    'English',
    'Second Language (Hindi/Kannada/Sanskrit)',
    'Mathematics',
    'Science (Physics, Chemistry, Biology)',
    'History and Civics, Geography',
    '6th subject: Computer Application/Physical Education/Commercial Applications (From 9th std)'
  ];

  const additionalSubjects = [
    'Third Language (VI - VIII)',
    'Computer Application/Physical Education/Commercial Applications (From 9th std)',
    'Education in Moral and Spiritual Values',
    'SUPW'
  ];

  const uniformDetails = {
    grades67: {
      boys: {
        regular: 'Cream and Green Checks Shirt with Plain Green Pant',
        belt: 'Green Belt with school logo, Green Socks with Black Shoes',
        special: 'Wednesday and Saturday: House Uniform'
      },
      girls: {
        regular: 'Cream and Green checks shirt with Plain Green skirt',
        belt: 'Green Belt with school logo, Green Socks and Black shoes',
        special: 'Wednesday and Saturday: House Uniform'
      }
    },
    grades8910: {
      boys: {
        regular: 'Cream and green checks shirt and green pant',
        belt: 'Green Belt with school logo, green socks and black shoes',
        special: 'Wed and Sat: House Uniform'
      },
      girls: {
        regular: 'Cream and green checks salwar top, plain green pant and green waist coat with green socks and belt',
        special: 'Wed and Sat: House Uniform'
      }
    }
  };

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
              <BookOpen className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-[#FDB913] to-white bg-clip-text text-transparent">
              Academics
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
            <p className="text-xl md:text-2xl text-gray-300">ICSE Curriculum for Grades 6-10</p>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Overview */}
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
              <span className="text-[#0F2A4A] font-bold text-sm uppercase tracking-wider">Curriculum</span>
              <div className="h-0.5 w-16 bg-[#0F2A4A]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">ICSE Curriculum</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#FDB913] to-yellow-600 mx-auto rounded-full mb-6"
            />
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
             The curriculum follows a holistic approach where practitioners support and scaffold the child’s learning through enriched play experiences. The pedagogical and transactional processes/ strategies suggested in the curriculum include engaging and enjoyable play activities and learning experiences that awaken / ignite the child’s thinking process and help build their confidence. The activities and play based experiences connect young children’s fascination with learning in every domain so that they can enjoy, learn and make the most of their time in preschool
            </p>
          </motion.div>

          {/* Subjects Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {subjects.map((subject, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
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
                  <subject.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-[#0F2A4A] mb-2 relative z-10">{subject.name}</h3>
                <p className="text-gray-700 relative z-10">{subject.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Grade-wise Subjects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">Subjects by Grade</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#FDB913] to-yellow-600 mx-auto rounded-full"
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Grade VI-VIII */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#0F2A4A]"
            >
              <div className="bg-gradient-to-r from-[#0F2A4A] to-[#1a4d7a] p-6">
                <h3 className="text-3xl font-bold text-white text-center">Grade VI - VIII</h3>
              </div>
              <div className="p-8">
                {gradeSixToEight.map((subject, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 mb-4 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-6 h-6 bg-[#FDB913] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#0F2A4A]" strokeWidth={3} />
                    </motion.div>
                    <span className="text-gray-800 font-medium group-hover:text-[#0F2A4A] transition-colors">{subject}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Grade IX-X */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#FDB913]"
            >
              <div className="bg-gradient-to-r from-[#FDB913] to-yellow-600 p-6">
                <h3 className="text-3xl font-bold text-[#0F2A4A] text-center">Grade IX - X</h3>
              </div>
              <div className="p-8">
                {gradeNineToTen.map((subject, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 mb-4 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-6 h-6 bg-[#0F2A4A] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#FDB913]" strokeWidth={3} />
                    </motion.div>
                    <span className="text-gray-800 font-medium group-hover:text-[#0F2A4A] transition-colors">{subject}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Additional Subjects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] rounded-3xl p-8 text-white shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Lightbulb className="w-8 h-8 text-[#FDB913]" />
              Additional Subjects
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {additionalSubjects.map((subject, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4"
                >
                  <div className="w-2 h-2 bg-[#FDB913] rounded-full"></div>
                  <span className="text-gray-200">{subject}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Teaching Methods & Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Teaching Methods */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              className="bg-white rounded-3xl p-8 shadow-2xl border-t-4 border-[#FDB913]"
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 bg-gradient-to-br from-[#FDB913] to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <Target className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold text-[#0F2A4A]">Teaching Methods</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Play-way method',
                  'Activity-based learning',
                  'Class-room teaching',
                  'Laboratory-practical learning'
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-2 h-2 bg-[#FDB913] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-lg group-hover:text-[#0F2A4A] transition-colors">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* School Timings */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              className="bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] rounded-3xl p-8 shadow-2xl text-white"
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-14 h-14 bg-[#FDB913] rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <Clock className="w-7 h-7 text-[#0F2A4A]" />
                </motion.div>
                <h3 className="text-3xl font-bold">School Timings</h3>
              </div>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <h4 className="text-xl font-semibold mb-3 text-[#FDB913]">Grade 6 to 10</h4>
                  <div className="space-y-2">
                    <p className="text-gray-200 flex items-center gap-2">
                      <span className="font-semibold text-white">Monday to Friday:</span> 10:00 AM to 04:00 PM
                    </p>
                    <p className="text-gray-200 flex items-center gap-2">
                      <span className="font-semibold text-white">Saturday:</span> 08:45 AM to 12:45 PM
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Uniform Section */}
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
              <Shirt className="w-6 h-6 text-[#0F2A4A]" />
              <div className="h-0.5 w-16 bg-[#0F2A4A]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">School Uniform</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#FDB913] to-yellow-600 mx-auto rounded-full"
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Grade 6 & 7 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-[#0F2A4A] to-[#1a4d7a] p-6">
                <h3 className="text-2xl font-bold text-white text-center">Grade 6 and 7</h3>
              </div>
              <div className="p-8 space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-[#0F2A4A] mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#FDB913]" /> Boys
                  </h4>
                  <div className="space-y-3 pl-7">
                    <p className="text-gray-700"><span className="font-semibold">Regular:</span> {uniformDetails.grades67.boys.regular}</p>
                    <p className="text-gray-700">{uniformDetails.grades67.boys.belt}</p>
                    <p className="text-gray-700 text-sm italic">{uniformDetails.grades67.boys.special}</p>
                  </div>
                </div>
                <div className="border-t-2 border-gray-100 pt-6">
                  <h4 className="text-xl font-bold text-[#0F2A4A] mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#FDB913]" /> Girls
                  </h4>
                  <div className="space-y-3 pl-7">
                    <p className="text-gray-700"><span className="font-semibold">Regular:</span> {uniformDetails.grades67.girls.regular}</p>
                    <p className="text-gray-700">{uniformDetails.grades67.girls.belt}</p>
                    <p className="text-gray-700 text-sm italic">{uniformDetails.grades67.girls.special}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Grade 8, 9, 10 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-[#FDB913] to-yellow-600 p-6">
                <h3 className="text-2xl font-bold text-[#0F2A4A] text-center">ICSE Grades 8, 9, 10</h3>
              </div>
              <div className="p-8 space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-[#0F2A4A] mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#FDB913]" /> Boys
                  </h4>
                  <div className="space-y-3 pl-7">
                    <p className="text-gray-700"><span className="font-semibold">Regular:</span> {uniformDetails.grades8910.boys.regular}</p>
                    <p className="text-gray-700">{uniformDetails.grades8910.boys.belt}</p>
                    <p className="text-gray-700 text-sm italic">{uniformDetails.grades8910.boys.special}</p>
                  </div>
                </div>
                <div className="border-t-2 border-gray-100 pt-6">
                  <h4 className="text-xl font-bold text-[#0F2A4A] mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#FDB913]" /> Girls
                  </h4>
                  <div className="space-y-3 pl-7">
                    <p className="text-gray-700"><span className="font-semibold">Regular:</span> {uniformDetails.grades8910.girls.regular}</p>
                    <p className="text-gray-700 text-sm italic">{uniformDetails.grades8910.girls.special}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Assessment Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">Assessment Pattern</h2>
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
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Award, title: 'Continuous Evaluation', desc: 'Regular tests, assignments, and projects to monitor progress' },
              { icon: GraduationCap, title: 'Periodic Tests', desc: 'Unit tests conducted throughout the academic year' },
              { icon: Trophy, title: 'Board Examinations', desc: 'ICSE Board Examinations at the end of Class 10' },
              { icon: FlaskConical, title: 'Practical Assessments', desc: 'Hands-on practical work in Science, Arts, and other subjects' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-l-4 border-[#FDB913]"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 bg-gradient-to-br from-[#FDB913] to-yellow-600 rounded-xl flex items-center justify-center mb-4"
                >
                  <item.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h4 className="text-lg font-bold text-[#0F2A4A] mb-2">{item.title}</h4>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IcseHighAcademic;