import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  GraduationCap,
  FlaskConical,
  Calculator,
  Globe,
  Lightbulb,
  Award,
  Target,
  CheckCircle,
  Languages,
  Trophy,
  Users,
  Brain,
  Sparkles
} from 'lucide-react';

const HighSchoolAcademic = () => {
  const subjects = [
    { name: 'Kannada', icon: Languages },
    { name: 'English', icon: BookOpen },
    { name: 'Hindi / Sanskrit', icon: Languages },
    { name: 'Mathematics', icon: Calculator },
    { name: 'Science (Physics, Chemistry and Biology)', icon: FlaskConical },
    { name: 'Social Science', icon: Globe },
    { name: 'Computer Studies', icon: Target },
    { name: 'Physical Education', icon: Award },
    { name: 'Moral Science', icon: GraduationCap },
  ];

  const teachingMethods = [
    'Traditional methods',
    'Communicative language teaching',
    'Task physical response',
    'Content and language integrated learning',
    'Inquiry based learning',
    'Project based learning',
    'Experimental learning',
    'Using technology',
    'Using models, Symbols, Charts, Flash cards, Globe'
  ];

  const assessmentTypes = [
    {
      type: 'Formative Assessment (FA)',
      description: 'Continuous evaluation throughout the academic year',
      features: ['Regular tests', 'Class participation', 'Assignments', 'Projects']
    },
    {
      type: 'Summative Assessment (SA)',
      description: 'End-term comprehensive examinations',
      features: ['Mid-term exams', 'Final exams', 'Annual evaluation', 'Result analysis']
    }
  ];

  const languageNotes = [
    '9th & 10th Std Students have to opt for Kannada as 1st language, the 3rd language should be Hindi/Sanskrit.',
    'English is taught as 2nd Language compulsorily.'
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
              <GraduationCap className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-[#FDB913] to-green-400 bg-clip-text text-transparent">
              Academic Curriculum
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-16 bg-[#FDB913]"></div>
              <div className="h-1 w-8 bg-green-500"></div>
              <div className="h-1 w-16 bg-[#FDB913]"></div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Karnataka State Board Curriculum - Grades 9 & 10
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] rounded-3xl shadow-2xl overflow-hidden text-white"
          >
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-[#FDB913] rounded-xl flex items-center justify-center shadow-lg">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Academic Curriculum</h2>
              </div>
              <div className="space-y-5 text-gray-100 leading-relaxed text-lg">
                <p>
                  <strong>S. Cadambi Vidya Kendra High School, Basaveshwarnagara</strong>, has programmed a diverse and specialized 
                  curriculum, which helps the child to develop critical thinking, and problem-solving. Curriculum development is 
                  therefore a permanent feature of this educational institution.
                </p>
                <p>
                  We follow the Karnataka State Board system of <strong>Formative Assessment (FA)</strong> and 
                  <strong> Summative Assessment (SA)</strong>, which are the two primary components of the continuous 
                  and Comprehensive Evaluation (CCE) model.
                </p>
                <p>
                  Innovations are encouraged for an effective symbiotic relationship between teaching and learning to 
                  help imbibe different perspectives within each subject area. The students become participants in learning, 
                  not just merely securing body of knowledge, so that their learning becomes linked to their life outside the school.
                </p>
                <p>
                  Spirited participation in seminars, discussions, dramatics, public speaking and other activities that 
                  enhance concentration and classroom learning enable students to acquire learning skills required 
                  for an overall intellectual, psychological and social growth.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-6 py-2 bg-[#FDB913]/20 text-[#FDB913] rounded-full text-sm font-semibold mb-4">
              Curriculum
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-4">
              Subjects to be studied at the State High School
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-1 w-20 bg-[#FDB913] rounded"></div>
              <div className="h-1 w-12 bg-green-500 rounded"></div>
            </div>
            <p className="text-lg text-gray-600">
              (Karnataka School Examination and Assessment Board syllabus path way)
            </p>
          </motion.div>

          {/* Grade IX - X Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-[#0F2A4A]">
              <div className="bg-gradient-to-r from-[#0F2A4A] to-[#1a4d7a] py-6 text-center">
                <h3 className="text-3xl font-bold text-white">Grade IX - X</h3>
              </div>
              <div className="p-8">
                <div className="grid gap-4">
                  {subjects.map((subject, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-[#FDB913] to-green-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <subject.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-lg font-semibold text-[#0F2A4A]">{subject.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Language Note */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-600 to-green-500 rounded-3xl shadow-2xl text-white p-8 md:p-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <Languages className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">
                Note on the Third Language (STATE HIGH SCHOOL)
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-xl font-semibold mb-6">
                The students can opt any one of the following subjects as third language:
              </p>
              {languageNotes.map((note, index) => (
                <div key={index} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                  <CheckCircle className="w-7 h-7 flex-shrink-0 mt-1" />
                  <p className="text-lg leading-relaxed">{note}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Class Divisions */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-6 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              Structure
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-4">
              Class Divisions
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="h-1 w-20 bg-green-500 rounded"></div>
              <div className="h-1 w-12 bg-[#FDB913] rounded"></div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden border-t-4 border-[#FDB913]"
            >
              <div className="p-8 text-center">
                <div className="text-7xl font-bold text-[#FDB913] mb-4">9<sup className="text-4xl">th</sup></div>
                <p className="text-2xl text-[#0F2A4A] font-bold mb-2">Standard</p>
                <p className="text-lg text-gray-600">(STATE SYLLABUS)</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden border-t-4 border-green-500"
            >
              <div className="p-8 text-center">
                <div className="text-7xl font-bold text-green-600 mb-4">10<sup className="text-4xl">th</sup></div>
                <p className="text-2xl text-[#0F2A4A] font-bold mb-2">Standard</p>
                <p className="text-lg text-gray-600">(STATE SYLLABUS)</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <p className="text-xl text-gray-700 font-semibold">
              Class divisions includes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Teaching Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-6 py-2 bg-[#FDB913]/20 text-[#FDB913] rounded-full text-sm font-semibold mb-4">
              Pedagogy
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-4">
              Teaching Methods
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="h-1 w-20 bg-[#FDB913] rounded"></div>
              <div className="h-1 w-12 bg-green-500 rounded"></div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachingMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-[#FDB913] group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                  <p className="text-lg text-gray-700 font-medium leading-relaxed">{method}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment System */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-6 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              Evaluation
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-4">
              Assessment System
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-1 w-20 bg-green-500 rounded"></div>
              <div className="h-1 w-12 bg-[#FDB913] rounded"></div>
            </div>
            <p className="text-lg text-gray-600">
              Continuous and Comprehensive Evaluation (CCE) Model
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {assessmentTypes.map((assessment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden border-t-4 border-[#FDB913]"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FDB913] to-green-500 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0F2A4A]">{assessment.type}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg">{assessment.description}</p>
                  <div className="space-y-3">
                    {assessment.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Activities */}
      <section className="py-20 bg-gradient-to-br from-[#0F2A4A] via-[#1a4d7a] to-[#0F2A4A] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Beyond Academics
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-1 w-16 bg-[#FDB913]"></div>
              <div className="h-1 w-8 bg-green-500"></div>
              <div className="h-1 w-16 bg-[#FDB913]"></div>
            </div>
            <p className="text-xl text-gray-300">
              Competitive examinations and skill development programs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#FDB913] to-green-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Trophy className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Olympiad Training</h3>
              <p className="text-gray-200 leading-relaxed">
                Students of grades 9-10 receive training for National level Olympiads
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-green-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Matematica Exam</h3>
              <p className="text-gray-200 leading-relaxed">
                State Level Talent Examination by Karnataka Academy of Mathematics
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#FDB913] to-green-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Cultural Exams</h3>
              <p className="text-gray-200 leading-relaxed">
                Ramayana and Mahabharata examinations by Bharatha Sanskriti Pratishtan
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HighSchoolAcademic;