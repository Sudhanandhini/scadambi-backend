import React, { useState } from 'react';
import { FileText, Calendar, CheckCircle, AlertCircle, Download, Mail, Phone, MapPin, Clock, User, GraduationCap, ArrowRight, Target } from 'lucide-react';

const PuCollegeAdmissions = () => {
  const [activeTab, setActiveTab] = useState('procedure');

  const admissionProcedure = [
    {
      step: '1',
      title: 'Issue of application form',
      description: 'Collect the admission form from the college office during working hours or download from our website',
      icon: FileText
    },
    {
      step: '2',
      title: 'Submission of application',
      description: 'Submit the filled application form along with all required documents before the deadline',
      icon: CheckCircle
    },
    {
      step: '3',
      title: 'Selection process',
      description: 'Admission based on merit. Shortlisted candidates will be notified on the college notice board. Certain seats may be reserved as per government regulations.',
      icon: Target
    },
    {
      step: '4',
      title: 'Interview and counselling',
      description: 'Selected candidates will be called for personal interview and academic counseling session',
      icon: User
    },
    {
      step: '5',
      title: 'Confirmation of Admission',
      description: 'Complete the admission formalities by paying fees and submitting original documents',
      icon: CheckCircle
    },
    {
      step: '6',
      title: 'Orientation Programme',
      description: 'Attend the mandatory orientation program to familiarize with college policies and facilities',
      icon: GraduationCap
    },
    {
      step: '7',
      title: 'Commencement of classes',
      description: 'Regular classes begin as per the academic calendar. Attendance is mandatory from day one',
      icon: Calendar
    }
  ];

  const documentsRequired = [
    'Marks card (Original + Photocopy)',
    'ADHAAR Card',
    'T.C., Income Certificate',
    'Other state students should submit migration certificate'
  ];

  const collegeFeatures = [
    'Individual Attention to Students',
    'Intensive Coaching for KCET Examination',
    'Spacious & Well-Ventilated Classrooms',
    'Efficient, Skilled and Committed Faculty',
    'Affordable Fee Structure & Scholarships for eligible students',
    'Remedial Coaching'
  ];

  const contactPersons = [
    {
      name: 'Smt. Saroja',
      role: 'Admissions Coordinator',
      icon: User
    },
    {
      name: 'Smt. Roopa Pai',
      role: 'Vice-Principal',
      icon: User
    }
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
            <div className="inline-flex items-center bg-[#FDB913] text-[#0F2A4A] px-6 py-3 rounded-full font-bold mb-6 animate-bounce-slow">
              <CheckCircle className="mr-2" size={20} />
              Admissions Open for 2025-26 Academic Year
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join <span className="text-[#FDB913]">S. Cadambi</span>
              <br />Independent PU College
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-20 bg-[#FDB913] rounded"></div>
              <div className="h-1 w-12 bg-white rounded"></div>
              <div className="h-1 w-20 bg-[#FDB913] rounded"></div>
            </div>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Embark on a journey of academic excellence and holistic development
            </p>
            
          </div>
        </div>
      </section>

      {/* College Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0F2A4A] mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600">Excellence in Pre-University Education</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collegeFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border-2 border-blue-100 hover:border-[#FDB913] transition-all transform hover:-translate-y-2 shadow-md hover:shadow-xl animate-fadeIn"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CheckCircle className="text-[#FDB913] shrink-0 mt-1" size={24} />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-gray-100 sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab('procedure')}
              className={`px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-105 ${
                activeTab === 'procedure'
                  ? 'bg-gradient-to-r from-[#0F2A4A] to-[#1a3a5f] text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Admission Procedure
            </button>
            <button
              onClick={() => setActiveTab('eligibility')}
              className={`px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-105 ${
                activeTab === 'eligibility'
                  ? 'bg-gradient-to-r from-[#0F2A4A] to-[#1a3a5f] text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Eligibility
            </button>
            <button
              onClick={() => setActiveTab('documents')}
              className={`px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-105 ${
                activeTab === 'documents'
                  ? 'bg-gradient-to-r from-[#0F2A4A] to-[#1a3a5f] text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Documents
            </button>
          </div>
        </div>
      </section>

      {/* Admission Procedure */}
      {activeTab === 'procedure' && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#0F2A4A] mb-4">Admission Procedure</h2>
              <p className="text-xl text-gray-600">Step-by-step guide to secure your admission</p>
            </div>

            <div className="space-y-6">
              {admissionProcedure.map((process, idx) => {
                const IconComponent = process.icon;
                return (
                  <div
                    key={idx}
                    className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 border-l-4 border-[#FDB913] transform hover:-translate-x-2 animate-slideUp"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="flex items-start gap-6">
                      {/* Step Number */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#0F2A4A] to-[#1a3a5f] rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                          {process.step}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-[#FDB913]/20 rounded-lg flex items-center justify-center">
                            <IconComponent className="text-[#0F2A4A]" size={24} />
                          </div>
                          <h3 className="text-2xl font-bold text-[#0F2A4A]">{process.title}</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{process.description}</p>
                      </div>

                      {/* Arrow for connection */}
                      {idx < admissionProcedure.length - 1 && (
                        <div className="absolute -bottom-3 left-8 w-0.5 h-6 bg-[#FDB913]"></div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Eligibility Criteria */}
      {activeTab === 'eligibility' && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#0F2A4A] mb-4">Eligibility Criteria</h2>
              <p className="text-xl text-gray-600">Who can apply for admission</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-[#0F2A4A] to-[#1a3a5f] rounded-3xl p-10 text-white shadow-2xl">
                <div className="flex items-center gap-4 mb-8">
                  <GraduationCap className="text-[#FDB913]" size={48} />
                  <h3 className="text-3xl font-bold">Required Qualifications</h3>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <CheckCircle className="text-[#FDB913] shrink-0 mt-1" size={24} />
                      <div>
                        <p className="text-lg leading-relaxed">
                          The candidate must have successfully passed the <span className="font-bold text-[#FDB913]">SSLC/10th standard</span> examination conducted by KSEEB/CBSE/ICSE or other state boards/NRI
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 p-6 bg-[#FDB913]/20 rounded-xl border border-[#FDB913]/30">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="text-[#FDB913] shrink-0 mt-1" size={20} />
                    <p className="text-sm text-white/90">
                      Seats may be reserved as per government regulations. Admission is purely based on merit and availability of seats.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Documents Required */}
      {activeTab === 'documents' && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#0F2A4A] mb-4">Documents Required</h2>
              <p className="text-xl text-gray-600">Please prepare the following documents</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-[#FDB913] to-[#FDB913]/80 p-8 text-[#0F2A4A]">
                  <div className="flex items-center gap-4">
                    <FileText size={40} />
                    <h3 className="text-3xl font-bold">Required Documents Checklist</h3>
                  </div>
                </div>
                
                <div className="p-10">
                  <ul className="space-y-6">
                    {documentsRequired.map((doc, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-4 p-5 bg-gradient-to-r from-blue-50 to-white rounded-xl border-2 border-blue-100 hover:border-[#FDB913] transition-all transform hover:translate-x-2"
                      >
                        <div className="w-10 h-10 bg-[#FDB913] rounded-lg flex items-center justify-center shrink-0">
                          <CheckCircle className="text-white" size={20} />
                        </div>
                        <span className="text-gray-700 text-lg font-medium pt-2">{doc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 p-6 bg-[#0F2A4A]/5 rounded-xl border-l-4 border-[#0F2A4A]">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="text-[#0F2A4A] shrink-0 mt-1" size={20} />
                      <p className="text-gray-700">
                        Please bring <span className="font-bold">original documents</span> along with <span className="font-bold">photocopies</span> for verification during the admission process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* College Highlights Banner */}
      <section className="py-20 bg-gradient-to-br from-[#0F2A4A] to-[#1a3a5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border-2 border-[#FDB913]/30">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#FDB913] mb-4">
                S. Cadambi Independent Pre-university College
              </h2>
              <p className="text-white text-xl">10th Main, 2nd Cross, 3rd Stage, Basaveshwaranagar, Bangalore - 560 079.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-[#FDB913] font-bold text-xl mb-4 flex items-center">
                  <CheckCircle className="mr-3" size={24} />
                  Student-Centric Approach
                </h3>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start">
                    <span className="text-[#FDB913] mr-2">•</span>
                    Individual Attention to Students
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FDB913] mr-2">•</span>
                    Spacious & Well-Ventilated Classrooms
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FDB913] mr-2">•</span>
                    Affordable Fee Structure & Scholarships for eligible students
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-[#FDB913] font-bold text-xl mb-4 flex items-center">
                  <Target className="mr-3" size={24} />
                  Academic Excellence
                </h3>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start">
                    <span className="text-[#FDB913] mr-2">•</span>
                    Intensive Coaching for KCET Examination
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FDB913] mr-2">•</span>
                    Efficient, Skilled and Committed Faculty
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FDB913] mr-2">•</span>
                    Remedial Coaching
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prospectus Download */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#FDB913] to-[#FDB913]/80 rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0F2A4A]/10 rounded-full -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <Download className="mx-auto mb-6 text-[#0F2A4A]" size={64} />
              <h2 className="text-4xl font-bold text-[#0F2A4A] mb-4">Download Prospectus</h2>
              <p className="text-xl text-[#0F2A4A]/80 mb-8 max-w-2xl mx-auto">
                Get detailed information about our programs, facilities, and admission process
              </p>
              <button className="bg-[#0F2A4A] hover:bg-[#1a3a5f] text-white px-10 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg inline-flex items-center">
                <Download className="mr-3" size={24} />
                Download Prospectus (PDF)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-br from-[#0F2A4A] via-[#1a3a5f] to-[#0F2A4A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contact Us for Admissions</h2>
            <p className="text-xl text-white/80">We're here to help you with your admission queries</p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Phone */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-[#FDB913] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Phone className="text-[#0F2A4A]" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-3">Call Us</h3>
              <a href="tel:08023222019" className="text-[#FDB913] hover:text-white text-xl font-bold block transition-colors">
                080-23222019
              </a>
            </div>

            {/* Email */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-[#FDB913] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Mail className="text-[#0F2A4A]" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-3">Email Us</h3>
              <a href="mailto:cadambicollege@gmail.com" className="text-[#FDB913] hover:text-white text-sm font-bold block transition-colors">
                cadambicollege@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-[#FDB913] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MapPin className="text-[#0F2A4A]" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-3">Visit Us</h3>
              <p className="text-white/90 text-sm leading-relaxed">AC-2, 10th Main, WOC Road<br/>Basaveshwaranagar<br/>Bengaluru - 560 079</p>
            </div>

            {/* Timing */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-[#FDB913] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Clock className="text-[#0F2A4A]" size={28} />
              </div>
              <h3 className="font-bold text-lg mb-3">Office Hours</h3>
              <p className="text-white/90 text-lg font-semibold">Mon-Sat<br/>9:00 AM - 4:00 PM</p>
            </div>
          </div>

          {/* Contact Persons */}
          {/* <div className="max-w-4xl mx-auto mt-16">
            <h3 className="text-3xl font-bold text-center mb-8">Contact Persons for Admissions</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {contactPersons.map((person, idx) => {
                const IconComponent = person.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border-2 border-white/20 text-center hover:bg-white/20 transition-all transform hover:scale-105 shadow-xl"
                  >
                    <div className="w-24 h-24 bg-[#FDB913] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                      <IconComponent className="text-[#0F2A4A]" size={40} />
                    </div>
                    <h4 className="text-2xl font-bold mb-3">{person.name}</h4>
                    <p className="text-[#FDB913] font-bold text-lg mb-4">{person.role}</p>
                    <div className="flex flex-col gap-3 mt-6">
                      <a href="tel:08023222019" className="inline-flex items-center justify-center gap-2 text-white/90 hover:text-[#FDB913] transition-colors">
                        <Phone size={18} />
                        <span className="font-semibold">080-23222019</span>
                      </a>
                      <a href="mailto:cadambicollege@gmail.com" className="inline-flex items-center justify-center gap-2 text-white/90 hover:text-[#FDB913] transition-colors text-sm">
                        <Mail size={18} />
                        <span className="font-semibold">cadambicollege@gmail.com</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div> */}
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

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animate-bounce-slow {
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
};

export default PuCollegeAdmissions;