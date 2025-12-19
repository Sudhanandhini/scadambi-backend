import React from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  Users,
  Award,
  BookOpen,
  Heart,
  Trophy,
  Globe,
  Sparkles,
  Star,
  GraduationCap
} from 'lucide-react';

// Import the staff photo
import staffPhoto from '../../assets/high-school/Picture3.jpg'; // Adjust path as needed
import principalPhoto from '../../assets/high-school/Picture2.jpg'; // Add principal photo
import img1 from "../../assets/high-school/Picture4.jpg"
import img2 from "../../assets/high-school/Picture5.jpg"






const HighSchoolAbout = () => {
  const visionMission = [
    {
      icon: Eye,
      title: 'Our Vision',
      content: 'Enlightenment through education.',
      color: 'blue',
      gradient: 'from-[#0F2A4A] to-[#1a4d7a]'
    },
    {
      icon: Target,
      title: 'Our Mission',
      points: [
        'Academic growth to develop human potential through cutting edge technology',
        'To instill respect and belief in our cultural heritage and ethos'
      ],
      color: 'yellow',
      gradient: 'from-[#FDB913] to-[#f5a503]'
    },
    {
      icon: BookOpen,
      title: 'Our Objectives',
      points: [
        'Provide a broad, stimulating curriculum to develop confidence in individuals to make them successful learners, responsible citizens and effective contributors.',
        'Maintain a healthy learning environment to approach challenges and incorporate new knowledge with a "can-do" attitude.',
        'Foster positive behaviour, focusing strongly on a culture of celebrating success, where all are responsible for their actions.'
      ],
      color: 'green',
      gradient: 'from-green-600 to-green-500'
    }
  ];

  const staffMembers = [
    { name: 'Indira Shyam Sunder', position: 'Principal', qualification: 'M.A (English), M.Sc (Physics), B.Ed', subjects: 'English for 9th & 10th Std' },
    { name: 'Savitha D H', position: 'Vice Principal', qualification: 'B.Sc, B.Ed', subjects: 'Science Teacher' },
    { name: 'Roopa Pai', position: 'Teacher', qualification: '', subjects: 'Physics & Computer Science' },
    { name: 'Rohini Gopal', position: 'Teacher', qualification: '', subjects: 'English for 8th Std' },
    { name: 'Geethanjali P', position: 'Teacher', qualification: 'Diploma in Montessori, B.Com, B.Ed, MBA', subjects: 'Social Science' },
    { name: 'Mahalingappa N', position: 'Teacher', qualification: 'B.A, B.P.Ed', subjects: 'Physical Education' },
    { name: 'Danamma A', position: 'Teacher', qualification: 'M.Sc, B.Ed', subjects: 'Mathematics' },
    { name: 'Pushpa Bai', position: 'Teacher', qualification: 'M.A, B.Ed', subjects: 'Hindi & Moral Science' },
    { name: 'Vanitha M', position: 'Teacher', qualification: 'M.A, B.Ed', subjects: 'Kannada' },
    { name: 'Mani Prasad', position: 'Teacher', qualification: 'M.A, B.Ed', subjects: 'Sanskrit' },
  ];

  const officeStaff = [
    { name: 'Dr. S. S. Rajan', position: 'Administrator', qualification: 'M.A, B.Ed, M.Phil, Ph.D' },
    { name: 'Ananthasree R', position: 'Accountant', qualification: 'MBA' },
    { name: 'M.V. Poornima Prakash', position: 'Librarian', qualification: 'Diploma in Library & Information Science, Diploma in Telecommunication' },
    { name: 'Anantharam K', position: 'Attender', qualification: '' },
    { name: 'Jayamma', position: 'Sub Staff', qualification: '' },
    { name: 'Lakshmi Bai', position: 'Sub Staff', qualification: '' },
  ];

  const achievements = [
    { icon: Award, text: 'Best Administration Award from Government of Karnataka', color: 'text-[#FDB913]' },
    { icon: Star, text: 'Recognized for excellence in curricular and co-curricular activities', color: 'text-green-600' },
    { icon: Trophy, text: 'Honored by Kumari Shobha Karandlaje, Hon. Minister for Labor', color: 'text-[#0F2A4A]' },
    { icon: Sparkles, text: '40+ years of educational excellence', color: 'text-[#FDB913]' },
    { icon: GraduationCap, text: 'Over 4000 students educated successfully', color: 'text-green-600' },
  ];

  const affiliations = [
    'S Cadambi Vidya Kendra High School',
    'Affiliated to Karnataka State Board',
    'Prescribed Syllabus - State Board'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F2A4A] via-[#1a4d7a] to-[#0F2A4A] text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDB913] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500 opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FDB913] to-green-500 rounded-2xl mb-6 shadow-2xl"
            >
              <Globe className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-[#FDB913] to-green-400 bg-clip-text text-transparent">
              About Our School
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-16 bg-[#FDB913]"></div>
              <div className="h-1 w-8 bg-green-500"></div>
              <div className="h-1 w-16 bg-[#FDB913]"></div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A legacy of excellence in education since 1984
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#FDB913] to-green-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-[#0F2A4A]">About Us</h2>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg">
                The journey goes like this from the budding stage to blossoming stage. S. Cadambi Vidya Kendra state high school was established in the year 1984.
                The dream of our service minded elders became true vision.
                Wherein our respectful salutation goes to Sri. cadambi Srinivasachar, who was a guiding force behind all these achievements.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg">
                With a vision to promote educational facility, he along with his friends, Diwan Bahadur Sri.K.R Seshachar, Dr. K. Srinivasachar, Sri. K. Narayana Iyengar,
                Dr. K Krishna Iyengar, Amaldar Sri. K vedanth Iyengar, started 'The Kalkunte education Trust' under the guidance of Prof. C. Rangachar.
                The institution has established itself in the beginning in the state stream comprising 8th to 10th standards.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg">
                The initial start has emerged to a well dimensional school which caters education state syllabi at an economical fee structure.
                The school functions with well-furnished labs, classrooms, and qualified faculty, apart from academic excellence addition, an extra training programme for students aspiring to take up national level competitive examinations is also conducted.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-[#FDB913]">
                <h3 className="text-2xl font-bold text-[#0F2A4A] mb-6 flex items-center gap-3">
                  <Award className="w-7 h-7 text-[#FDB913]" />
                  Key Highlights
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FDB913] to-[#f5a503] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F2A4A] mb-1 text-lg">Established 1984</h4>
                      <p className="text-gray-600">Over 40 years of educational excellence</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F2A4A] mb-1 text-lg">4000+ Students</h4>
                      <p className="text-gray-600">Growing from 50 students to a large institution</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FDB913] to-[#f5a503] rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F2A4A] mb-1 text-lg">State Board</h4>
                      <p className="text-gray-600">Affiliated to Karnataka State Board</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F2A4A] mb-1 text-lg">Best Administration</h4>
                      <p className="text-gray-600">Recognized by Government of Karnataka</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Objectives */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-6 py-2 bg-[#FDB913]/20 text-[#FDB913] rounded-full text-sm font-semibold mb-4">
              Our Foundation
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-4">
              Vision, Mission & Objectives
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="h-1 w-20 bg-[#FDB913] rounded"></div>
              <div className="h-1 w-12 bg-green-500 rounded"></div>
            </div>
          </motion.div>

          {/* First Row - Objectives (Full Width) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-t-4 border-transparent hover:border-green-500 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#0F2A4A]">Our Objectives</h3>
              </div>
              <ul className="space-y-4 ">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">Provide a broad, stimulating curriculum to develop confidence in individuals to make them successful learners, responsible citizens and effective contributors.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">Maintain a healthy learning environment to approach challenges and incorporate new knowledge with a "can-do" attitude.</span>
                </li>
                <li className="flex items-start gap-3 md:col-span-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">Foster positive behaviour, focusing strongly on a culture of celebrating success, where all are responsible for their actions.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Second Row - Vision (Left) and Mission (Right) */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all h-full border-t-4 border-transparent hover:border-[#0F2A4A]">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F2A4A] mb-4">Our Vision</h3>
                <p className="text-gray-700 text-lg leading-relaxed font-medium">Enlightenment through education.</p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all h-full border-t-4 border-transparent hover:border-[#FDB913]">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FDB913] to-[#f5a503] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F2A4A] mb-4">Our Mission</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FDB913] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">Academic growth to develop human potential through cutting edge technology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FDB913] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">To instill respect and belief in our cultural heritage and ethos</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="p-8 md:p-12 text-white">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-[#FDB913] rounded-xl flex items-center justify-center shadow-lg">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Our History</h2>
              </div>
              <div className="space-y-5 text-gray-100 leading-relaxed text-lg">
                <p>
                  In the year 1939, the Kalkunte Education Trust became a registered body. It was founded by a group
                  of educationists and philanthropists with a vision to help the poor and needy students of the Kalkunte
                  and Chichurukanahalli communities in pursuing their education by means of scholarships.
                </p>
                <p>
                  S. Cadambi Vidya Kendra was established in the year 1984 with a humble beginning to build academic
                  institutions par excellence and to nurture the character of the young ones to grow into diplomatic
                  citizens of our country.
                </p>
                <p>
                  It started with an academic strength of less than 50 students and has now reached a strength of
                  around 4000 students. The S. Cadambi Vidya Kendra is flourishing and functioning effectively through
                  different wings with a vision of enlightenment through education.
                </p>
                <p>
                  The dedicated teaching and non-teaching staff under the guidance of able management are extending their fullest co-operation in the implementation of autonomy in its true spirit.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-6 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              Leadership
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-4">
              Principal's Message
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="h-1 w-20 bg-green-500 rounded"></div>
              <div className="h-1 w-12 bg-[#FDB913] rounded"></div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 text-center border-t-4 border-green-500">
                <div className=" mx-auto mb-6 p-1">
                  <div className="w-full h-full  bg-gray-200 flex items-center justify-center overflow-hidden">
                    {/* Replace with actual image */}
                    <Heart className="w-16 h-16 text-[#FDB913]" />
                    <img src={principalPhoto} alt="Principal" className="w-full h-full object-cover" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#0F2A4A] mb-2">Smt. Indira Shyam Sunder</h3>
                <p className="text-[#FDB913] font-semibold mb-2">Principal</p>
                <p className="text-gray-600 text-sm">M.A (English), M.Sc (Physics), B.Ed</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-3"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 h-full">
                <div className="space-y-5 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    Welcome to the Official Website of S. Cadambi Vidya Kendra State High School. I am truly honoured
                    to serve as the Principal and share what makes our school so special.
                  </p>
                  <p>
                    At S. Cadambi Vidya Kendra, our foundation is built on a resolute commitment to academic precision
                    and holistic development. I believe education is about much more than just mastering a curriculum;
                    it is about cultivating curious, critical thinkers prepared to navigate the complexities of the
                    modern world.
                  </p>
                  <p>
                    My dedicated faculty members are not just instructors; they are mentors who inspire lifelong learning
                    in every student. We pride ourselves on fostering an environment where every individual feels valued,
                    challenged, and supported to manifest their latent potential.
                  </p>
                  <p>
                    Our campus is a vibrant community of opportunity. While our classroom instruction is second to none,
                    we strongly encourage participation in a wide range of extra-curricular activities - from sports to
                    cultural events, from STEM clubs to community service initiatives. These experiences are crucial for
                    developing leadership skills, teamwork, and a strong sense of social responsibility.
                  </p>
                  <p>
                    As we look ahead, we remain focused on innovation, continuously integrating new technologies and
                    pedagogical approaches to ensure our students are equipped with skills demanded by tomorrow's world.
                  </p>
                  <div className="pt-4 border-t-2 border-gray-200">
                    <p className="text-[#0F2A4A] font-semibold italic">
                      "Teachers mould every individual who goes on to influence every aspect of society."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Awards & Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-6 py-2 bg-[#FDB913]/20 text-[#FDB913] rounded-full text-sm font-semibold mb-4">
              Recognition
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-4">
              Awards & Achievements
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="h-1 w-20 bg-[#FDB913] rounded"></div>
              <div className="h-1 w-12 bg-green-500 rounded"></div>
            </div>
          </motion.div>

          {/* Best Administration Award Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-t-4 border-[#0F2A4A]">
              <div className="bg-gradient-to-r from-blue-950 to-blue-900 py-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white text-center uppercase">
                  Best Administration Award to SCVK
                </h3>
              </div>

              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Left - Single Image */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="rounded-2xl overflow-hidden shadow-xl"
                  >
                    <img
                      src={img1}
                      alt="Best Administration Award"
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>

                  {/* Right - Content */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#FDB913] to-[#f5a503] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Award className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl md:text-3xl font-bold text-[#0F2A4A] leading-relaxed mb-4">
                          Government of Karnataka has recognized our School as Best Administration School For Curricular and Co-curricular activities
                        </h4>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          This prestigious recognition highlights our commitment to providing exceptional education and comprehensive development opportunities for our students.</p>
                         <p className="text-gray-700 text-lg leading-relaxed mt-4"> Our school has been acknowledged for maintaining high standards in both academic and extra-curricular programs, fostering an environment where students excel in all aspects of their educational journey.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secretary Award Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-t-4 border-green-500">
              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Left - Single Image */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="rounded-2xl overflow-hidden shadow-xl"
                  >
                    <img
                      src={img2}
                      alt="Secretary Award"
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>

                  {/* Right - Content */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Trophy className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl md:text-3xl font-bold text-[#0F2A4A] leading-relaxed mb-4">
                          Sri.C.K.Keshavan, honorable secretary of Kalkunte Education Trust received the Best Administration Award from Government of Karnataka
                        </h4>
                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                          This award was graciously presented by Kumari Shobha Kardanlaje, Honorable Minister for Labor, Employment, Micro, Small and Medium Enterprises, Government of India.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          This recognition reflects the exemplary leadership and dedication of our trust in promoting quality education and maintaining administrative excellence. </p>
                           <p className="text-gray-700 text-lg leading-relaxed mt-4"> Under this visionary guidance, our institution continues to set benchmarks in educational administration and student welfare.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-[#FDB913] group"
            >
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7 text-[#FDB913]" />
              </div>
              <p className="text-gray-700 leading-relaxed font-medium">
                Best Administration Award from Government of Karnataka
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-green-500 group"
            >
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Star className="w-7 h-7 text-green-600" />
              </div>
              <p className="text-gray-700 leading-relaxed font-medium">
                Recognized for excellence in curricular and co-curricular activities
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-[#0F2A4A] group"
            >
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Trophy className="w-7 h-7 text-[#0F2A4A]" />
              </div>
              <p className="text-gray-700 leading-relaxed font-medium">
                Honored by Kumari Shobha Karandlaje, Hon. Minister for Labor
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-[#FDB913] group"
            >
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Sparkles className="w-7 h-7 text-[#FDB913]" />
              </div>
              <p className="text-gray-700 leading-relaxed font-medium">
                40+ years of educational excellence
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-green-500 group"
            >
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-7 h-7 text-green-600" />
              </div>
              <p className="text-gray-700 leading-relaxed font-medium">
                Over 4000 students educated successfully
              </p>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Staff Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-6 py-2 bg-[#FDB913]/20 text-[#FDB913] rounded-full text-sm font-semibold mb-4">
              Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-4">
              School Staff
            </h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-1 w-20 bg-[#FDB913] rounded"></div>
              <div className="h-1 w-12 bg-green-500 rounded"></div>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Teachers mould every single individual who goes on to influence every aspect of society. They, therefore, have the most important job in the world. They are the pillars holding up society's hope for the growth and prosperity. Our school has these decorated pillars, and we are proud of them and the enormous efforts they put in day after day.
            </p>
          </motion.div>

          {/* Staff Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-t-4 border-[#FDB913]">

              {/* Replace with actual image: */}
              <img src={staffPhoto} alt="School Staff" className="w-full h-auto object-cover" />
            </div>
          </motion.div>

          {/* Additional Staff Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <p className="text-gray-700 leading-relaxed text-lg">
              We have an army of highly qualified faculty who are passionate about what they do. They grow while they teach and genuinely care about their student's futures. We have subject matter experts in all subjects and a wealth of experience to draw from, enabling smooth, seamless knowledge transfer practices. Our students couldn't be in more capable hands!
            </p>
          </div>

          {/* Teaching Staff */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-[#0F2A4A] mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#FDB913] to-green-500 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              Teaching Staff
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {staffMembers.map((staff, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-[#FDB913] group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FDB913] to-[#f5a503] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0F2A4A] mb-1">{staff.name}</h4>
                  <p className="text-sm text-[#FDB913] font-semibold mb-2">{staff.position}</p>
                  {staff.qualification && (
                    <p className="text-xs text-gray-600 mb-2 leading-relaxed">{staff.qualification}</p>
                  )}
                  {staff.subjects && (
                    <p className="text-sm text-gray-700 font-medium bg-gray-50 p-2 rounded-lg">{staff.subjects}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Office Staff */}
          <div>
            <h3 className="text-3xl font-bold text-[#0F2A4A] mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-500 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              Office Staff
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {officeStaff.map((staff, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-green-500 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0F2A4A] mb-1">{staff.name}</h4>
                  <p className="text-sm text-green-600 font-semibold mb-2">{staff.position}</p>
                  {staff.qualification && (
                    <p className="text-xs text-gray-600 leading-relaxed">{staff.qualification}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HighSchoolAbout;