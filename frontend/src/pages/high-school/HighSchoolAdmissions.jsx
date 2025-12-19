import React from 'react';
import { motion } from 'framer-motion';
import { 
  ClipboardCheck,
  FileText,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  AlertCircle,
  Award,
  GraduationCap,
  UserCheck,
  BookOpen,
  ArrowRight
} from 'lucide-react';

const HighSchoolAdmissions = () => {
  const procedure = [
    {
      step: '1',
      title: 'Entrance Examination',
      description: 'Students must appear for entrance examination conducted by the school',
      icon: BookOpen
    },
    {
      step: '2',
      title: 'Assessment',
      description: 'Evaluation of language skills (Kannada, English, Hindi/Sanskrit) and optional subjects',
      icon: ClipboardCheck
    },
    {
      step: '3',
      title: 'Selection',
      description: 'Based on examination results, candidates are selected for admission',
      icon: UserCheck
    },
    {
      step: '4',
      title: 'Documentation',
      description: 'Submit all required documents and complete admission formalities',
      icon: Award
    }
  ];

  const documents = [
    { icon: FileText, text: 'Birth certificate from Municipal Corporation/Civic Authorities' },
    { icon: FileText, text: 'Caste certificate (if applicable)' },
    { icon: FileText, text: 'Latest progress report certified by previous school (Applicable from 9th and 10th std)' },
    { icon: FileText, text: 'Original Transfer Certificate from previous school (Applicable from 9th and 10th std)' },
    { icon: FileText, text: 'Guardianship papers (in case of single parent/separated)' },
    { icon: FileText, text: "Copy of student's and parent's Aadhaar card" },
  ];

  const eligibility = [
    'Passed 8th standard from any recognized board',
    'ICSE, CBSE, State Board, or IGCSE certified',
    'Age-appropriate for the grade level',
    'Good academic and behavioral record'
  ];

  const subjects = {
    languages: ['Kannada', 'English', 'Hindi', 'Sanskrit'],
    optional: ['Maths', 'Science', 'Social']
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F2A4A] via-[#1a4d7a] to-[#0F2A4A] text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDB913] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500 opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/5 rounded-full"></div>
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
              Admissions
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-16 bg-[#FDB913]"></div>
              <div className="h-1 w-8 bg-green-500"></div>
              <div className="h-1 w-16 bg-[#FDB913]"></div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join our legacy of academic excellence and holistic development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Admission Procedure */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FDB913] via-green-500 to-[#FDB913]"></div>
        
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-6 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              How to Apply
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-4">
              Admission Procedure
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="h-1 w-20 bg-[#FDB913] rounded"></div>
              <div className="h-1 w-12 bg-green-500 rounded"></div>
            </div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              Simple and transparent process to join our institution
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting Lines */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#FDB913] to-transparent"></div>
            
            {procedure.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#FDB913] h-full relative overflow-hidden">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#FDB913] to-green-500 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-2xl">{item.step}</span>
                  </div>
                  
                  {/* Background Decoration */}
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <item.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0F2A4A] mb-3 group-hover:text-green-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                
                {/* Arrow connector for desktop */}
                {index < procedure.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-[#FDB913]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Assessment Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] rounded-2xl p-8 md:p-10 text-white shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#FDB913] rounded-xl flex items-center justify-center">
                <ClipboardCheck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Examination Subjects</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="text-lg font-semibold mb-4 text-[#FDB913]">Languages</h4>
                <div className="space-y-2">
                  {subjects.languages.map((lang, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{lang}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="text-lg font-semibold mb-4 text-[#FDB913]">Optional Subjects</h4>
                <div className="space-y-2">
                  {subjects.optional.map((subject, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border-t-8 border-green-500"
          >
            <div className="bg-gradient-to-r from-[#0F2A4A] to-[#1a4d7a] p-8 md:p-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#FDB913] rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Eligibility Criteria
                </h2>
              </div>
            </div>
            
            <div className="p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {eligibility.map((criteria, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-green-50 hover:bg-green-100 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-700 font-medium leading-relaxed pt-2">{criteria}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-[#FDB913]/10 to-green-50 rounded-2xl p-6 md:p-8 border-l-4 border-[#FDB913]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#FDB913] rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0F2A4A] mb-3 text-lg">Important Note</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Students from any board (ICSE, CBSE, State Board, IGCSE) can apply for admission 
                      to our 9th and 10th standards after passing 8th standard.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-6 py-2 bg-[#FDB913]/20 text-[#FDB913] rounded-full text-sm font-semibold mb-4">
              Required Documentation
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-4">
              Documents Required
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="h-1 w-20 bg-green-500 rounded"></div>
              <div className="h-1 w-12 bg-[#FDB913] rounded"></div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-green-500"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <doc.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-2 font-medium">{doc.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Admissions */}
      <section className="py-20 bg-gradient-to-br from-[#0F2A4A] via-[#1a4d7a] to-[#0F2A4A] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDB913] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500 opacity-10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Contact for Admissions
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-1 w-16 bg-[#FDB913]"></div>
              <div className="h-1 w-8 bg-green-500"></div>
              <div className="h-1 w-16 bg-[#FDB913]"></div>
            </div>
            <p className="text-xl text-gray-300">Get in touch with us for admission inquiries</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all hover:scale-105 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#FDB913] to-[#FDB913] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Phone</h3>
              <a href="tel:08023232831" className="text-lg hover:text-[#FDB913] transition-colors font-semibold">
                080-23232831
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all hover:scale-105 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#FDB913] to-[#FDB913] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Email</h3>
              <a href="mailto:scvk123@rediffmail.com" className="text-lg hover:text-[#FDB913] transition-colors break-all font-semibold">
                scvk123@rediffmail.com
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all hover:scale-105 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#FDB913] to-[#FDB913] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Visit Us</h3>
              <p className="text-lg font-semibold">
                Basaveshwara Nagar<br />Bangalore, Karnataka
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-white/10"
          >
            <p className="text-2xl mb-8 font-semibold">Ready to enroll your child?</p>

            <a
              href="tel:08023232831"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#FDB913] to-[#FDB913] text-white rounded-full font-bold hover:shadow-2xl transition-all hover:scale-105 text-lg"
            >
              <Phone size={24} />
              <span>Call Now for Admission</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HighSchoolAdmissions;
