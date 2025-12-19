import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, Calendar, Phone, Mail, Download, Clock, Users, Award, MapPin, DollarSign, AlertCircle } from 'lucide-react';

const IcseHighAdmissions = () => {
  const steps = [
    { icon: FileText, title: 'Fill Application Form', description: 'Complete the admission form with all required details' },
    { icon: CheckCircle, title: 'Submit Documents', description: 'Provide necessary documents and certificates' },
    { icon: Calendar, title: 'Entrance Test', description: 'Appear for the admission test (if applicable)' },
    { icon: CheckCircle, title: 'Confirmation', description: 'Pay fees and confirm admission' }
  ];

  const documents = [
    'Birth Certificate (Original & Photocopy)',
    'Transfer Certificate from previous school',
    'Mark sheets of previous classes',
    'Aadhar Card copy',
    'Recent passport size photographs',
    'Parent ID proof',
    'Address proof',
    'Caste certificate (if applicable)'
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
              <FileText className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-[#FDB913] to-white bg-clip-text text-transparent">
              Admissions
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
            <p className="text-xl md:text-2xl text-gray-300">Join ICSE High School for Quality Education</p>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
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
              <span className="text-[#0F2A4A] font-bold text-sm uppercase tracking-wider">Process</span>
              <div className="h-0.5 w-16 bg-[#0F2A4A]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#0F2A4A] mb-4">Admission Process</h2>
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
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {steps.map((step, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-[#FDB913] relative overflow-hidden group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#FDB913]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#FDB913] to-yellow-600 rounded-tl-3xl rounded-br-3xl flex items-center justify-center shadow-2xl z-10">
                    <span className="text-[#0F2A4A] font-bold text-2xl">{idx + 1}</span>
                  </div>

                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] rounded-2xl flex items-center justify-center mb-6 ml-auto shadow-lg relative z-10"
                  >
                    <step.icon className="w-10 h-10 text-[#FDB913]" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-[#0F2A4A] mb-3 relative z-10">{step.title}</h3>
                  <p className="text-gray-700 leading-relaxed relative z-10">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Documents & Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* First Row: Documents & Important Info */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Required Documents */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-10 shadow-2xl border-t-4 border-[#FDB913]"
            >
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-[#FDB913] to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <FileText className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold text-[#0F2A4A]">Required Documents</h3>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {documents.map((doc, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="flex items-start gap-3 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="flex-shrink-0 w-7 h-7 bg-[#FDB913] rounded-full flex items-center justify-center mt-0.5"
                    >
                      <CheckCircle className="w-5 h-5 text-[#0F2A4A]" strokeWidth={3} />
                    </motion.div>
                    <span className="text-gray-800 font-medium group-hover:text-[#0F2A4A] transition-colors">{doc}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Important Information */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] rounded-3xl p-10 shadow-2xl text-white relative overflow-hidden"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-0 right-0 w-64 h-64 bg-[#FDB913] rounded-full opacity-10 blur-3xl"
              />

              <h3 className="text-3xl font-bold mb-8 relative z-10">Important Information</h3>
              
              <div className="space-y-6 relative z-10">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-6 h-6 text-[#FDB913]" />
                    <h4 className="text-xl font-semibold text-[#FDB913]">Age Criteria</h4>
                  </div>
                  <p className="text-gray-200">As per CISCE guidelines for respective grades</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-6 h-6 text-[#FDB913]" />
                    <h4 className="text-xl font-semibold text-[#FDB913]">Admission Period</h4>
                  </div>
                  <p className="text-gray-200">March to May for the new academic year</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="w-6 h-6 text-[#FDB913]" />
                    <h4 className="text-xl font-semibold text-[#FDB913]">Seats Available</h4>
                  </div>
                  <p className="text-gray-200">Limited seats available for each grade</p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Second Row: Contact for Admissions (Full Width) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-br from-[#FDB913] to-yellow-600 rounded-3xl p-10 shadow-2xl relative overflow-hidden"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"
            />

            <h3 className="text-3xl font-bold text-[#0F2A4A] mb-8 relative z-10">Contact for Admissions</h3>
            
            <div className="grid md:grid-cols-2 gap-6 relative z-10">
              <motion.a 
                href="tel:08023232831"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 bg-white/30 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/40 transition-all"
              >
                <div className="w-16 h-16 bg-[#0F2A4A] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-8 h-8 text-[#FDB913]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0F2A4A] opacity-80">Call Us</p>
                  <p className="font-bold text-2xl text-[#0F2A4A]">080-23232831</p>
                </div>
              </motion.a>

              <motion.a 
                href="mailto:scvk123@rediffmail.com"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 bg-white/30 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/40 transition-all"
              >
                <div className="w-16 h-16 bg-[#0F2A4A] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-8 h-8 text-[#FDB913]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0F2A4A] opacity-80">Email Us</p>
                  <p className="font-bold text-xl text-[#0F2A4A]">scvk123@rediffmail.com</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-[#0F2A4A] via-[#1a4d7a] to-[#0F2A4A] rounded-[3rem] shadow-2xl p-16 text-center text-white overflow-hidden"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-0 left-0 w-full h-full bg-[#FDB913] opacity-10 rounded-[3rem]"
            />
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <FileText className="w-20 h-20 text-[#FDB913] mx-auto" />
              </motion.div>
              
              <h2 className="text-5xl font-bold mb-6">Ready to Apply?</h2>
              <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-gray-200">
                Start your child's journey towards academic excellence. Apply now for admissions.
              </p>
              
              <motion.div 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.95 }}
              >
                <button className="group inline-flex items-center gap-3 bg-[#FDB913] hover:bg-yellow-600 text-[#0F2A4A] px-12 py-6 rounded-full font-bold transition-all shadow-2xl text-lg relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <Download className="w-6 h-6 relative z-10 group-hover:animate-bounce" />
                  <span className="relative z-10">Download Application Form</span>
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex items-center justify-center gap-2 text-[#FDB913]"
              >
                <AlertCircle className="w-5 h-5" />
                <p className="text-sm">Limited seats available - Apply early!</p>
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute -bottom-20 -left-20 w-64 h-64 bg-green-500 rounded-full opacity-10 blur-3xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IcseHighAdmissions;