import React, { useState } from 'react';
import { GraduationCap, Target, Eye, BookOpen, Users, Award, CheckCircle, AlertCircle, FileText, UserCheck } from 'lucide-react';

const PuCollegeAbout = () => {
  const [activeTab, setActiveTab] = useState('vision');

  const facultyList = [
    {
      name: "Smt. INDIRA SHAMSUNDER",
      role: "PRINCIPAL",
      department: "DEPARTMENT OF ENGLISH",
      qualification: "M.A, M.Sc., B.Ed"
    },
    {
      name: "Smt.Roopa pai",
      role: "VICE-PRINCIPAL",
      department: "DEPARTMENT OF ELECTRONICS",
      qualification: "B.E,M.TECH,B.Ed,MCA"
    },
    {
      name: "Smt. Swarna Gowri",
      department: "DEPARTMENT OF PHYSICS",
      qualification: "M Sc.,B.Ed"
    },
    {
      name: "Smt. Aparna K S",
      department: "DEPARTMENT OF PHYSICS",
      qualification: "M Sc.,B.Ed"
    },
    {
      name: "Smt. Madhavi Latha",
      department: "DEPARTMENT OF CHEMISTRY",
      qualification: "M Sc.,B.Ed"
    },
    {
      name: "Smt. Pavithra B R",
      department: "DEPARTMENT OF CHEMISTRY",
      qualification: "M Sc.,B.Ed"
    },
    {
      name: "Smt.Sukanya H.B",
      department: "DEPARTMENT OF MATHEMATICS",
      qualification: "M Sc., B.Ed"
    },
    {
      name: "Smt. Rashmi G R",
      department: "DEPARTMENT OF MATHEMATICS",
      qualification: "M Sc., B.Ed"
    },
    {
      name: "Smt. Megha V",
      department: "DEPARTMENT OF BIOLOGY",
      qualification: "M Sc.,B.Ed"
    },
    {
      name: "Smt. Ashwini S",
      department: "DEPARTMENT OF COMPUTER SCIENCE",
      qualification: "MCA"
    },
    {
      name: "Smt.Ranjitha S",
      department: "DEPARTMENT OF COMPUTER SCIENCE",
      qualification: "B E, B.Ed"
    },
    {
      name: "Sri. Naveen Kumar K",
      department: "DEPARTMENT OF ACCOUNTANCY",
      qualification: "M Com, B.Ed"
    },
    {
      name: "Smt. Shama M",
      department: "DEPARTMENT OF BUSINESS STUDIES",
      qualification: "M.Com., B.Ed"
    },
    {
      name: "Smt. Madhu B K",
      department: "DEPARTMENT OF STATISTICS",
      qualification: "M Com.,B.Ed"
    },
    {
      name: "Kum.Subhedha K",
      department: "DEPARTMENT OF ECONOMICS",
      qualification: "M A"
    },
    {
      name: "Smt Raksha Lakshman",
      department: "DEPARTMENT OF ENGLISH",
      qualification: "M A.,B.Ed"
    },
    {
      name: "Sri S Lokesh",
      department: "DEPARTMENT OF KANNADA",
      qualification: "M A.,B.Ed"
    },
    {
      name: "PUSHPA BAI V",
      department: "DEPARTMENT OF HINDI",
      qualification: "M.A B.Ed"
    },
    {
      name: "Sri Maniprasad",
      department: "DEPARTMENT OF SANSKRIT",
      qualification: "M.A,B.Ed"
    },
    {
      name: "Sri. Yeshodhara S",
      department: "DEPARTMENT OF PHYSICAL EDUCATION",
      qualification: "BCom, M.PEd"
    }
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
                    <GraduationCap className="mr-2" size={20} />
                     About Us
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

      

      {/* Vision & Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0F2A4A] mb-4">Vision and Mission</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-gradient-to-br from-[#0F2A4A] to-[#1a3a5f] p-8 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-[#FDB913] w-14 h-14 rounded-xl flex items-center justify-center mr-4">
                  <Eye size={28} />
                </div>
                <h3 className="text-3xl font-bold">VISION:</h3>
              </div>
              <p className="text-lg leading-relaxed">
                "TO BE A CENTER OF EXCELLENCE THAT INSPIRES <span className="text-[#FDB913] font-bold underline decoration-2">INTELLECTUAL CURIOSITY</span>, ETHICAL VALUES AND HOLISTIC DEVELOPMENT."
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-br from-[#FDB913] to-[#FDB913]/80 p-8 rounded-2xl shadow-xl text-[#0F2A4A] transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-[#0F2A4A] w-14 h-14 rounded-xl flex items-center justify-center text-white mr-4">
                  <Target size={28} />
                </div>
                <h3 className="text-3xl font-bold">MISSION:</h3>
              </div>
              <p className="text-lg leading-relaxed font-semibold">
                "TO PROVIDE QUALITY EDUCATION THAT BLENDS ACADEMICS WITH VALUE AND INNOVATION, WHILE CULTIVATING DISCIPLINE AND EXCELLENCE IN EVERY LEARNER."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#0F2A4A] to-[#1a3a5f] p-8 text-white">
              <div className="flex items-center">
                <UserCheck className="mr-4" size={40} />
                <h2 className="text-3xl font-bold">PRINCIPAL'S MESSAGE</h2>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <div className="prose max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Welcome to the Official Website of S. <span className="font-bold text-[#0F2A4A]">Cadambi</span> Vidya Kendra State High School and S. <span className="font-bold text-[#0F2A4A]">Cadambi</span> Independent Pre-University College. I am truly honoured to serve as the Principal and share a snapshot of what makes our college stand out so special. S. Cadambi Independent PU College and S. Cadambi Vidya Kendra State High School College, our foundation is built on a resolute commitment to academic precision and holistic development. I believe education is about much more than just mastering a curriculum; it is about cultivating curious, critical thinkers prepared to navigate the complexities of the competitive Modern World.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  My dedicated faculty members are not just instructive; they are mentors who animate a lifelong learning in every student. We pride ourselves on stimulating an environment where every individual feels treasured, challenged, and supported to manifest their latent potential. Our campus is an effervescent community of opportunity. While our classroom instruction is second to none, we strongly encourage participation on manifold range of extra-curricular activities from cultural to sports, from STEM club to community service initiatives.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  These experiences are crucial for developing leadership skills, team-work and strong sense of Social Responsibility. We want our students to leave us with impressive academic records but also with the confidence and character necessary to make meaningful contribution to the society.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  As we look to the time ahead we remain earnest on innovation. We are continuously integrating new technologies and didactic approaches to ensure our students are equipped with skills demanded by tomorrow's VISTA.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed">
                  Whether you are a prospective student or a current member of our institution or a supportive alumnus thank you for being part of institution's <span className="font-bold text-[#0F2A4A]">Odyssey</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0F2A4A] mb-4">Faculty List</h2>
            <p className="text-xl text-gray-600">Our Experienced and Dedicated Team</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyList.map((faculty, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-[#FDB913] transform hover:-translate-y-2"
              >
                {faculty.role && (
                  <div className="bg-[#0F2A4A] text-white px-3 py-1 rounded-full text-xs font-bold inline-block mb-3">
                    {faculty.role}
                  </div>
                )}
                <h3 className="text-xl font-bold text-[#0F2A4A] mb-2">{faculty.name}</h3>
                <p className="text-sm font-semibold text-gray-700 mb-2">{faculty.department}</p>
                <p className="text-sm text-gray-600">{faculty.qualification}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

  

      {/* Subjects Offered */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0F2A4A] mb-4">SUBJECTS OFFERED</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Science */}
            <div>
              <h3 className="text-3xl font-bold text-[#0F2A4A] mb-6">SCIENCE</h3>
              <div className="mb-6 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop"
                  alt="Science Stream"
                  className="w-full h-auto"
                />
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-lg text-gray-700 p-3 bg-gray-50 rounded-lg hover:bg-[#FDB913]/10 transition-colors">
                  <CheckCircle className="mr-3 text-[#FDB913] shrink-0" size={24} />
                  Physics, Chemistry, Mathematics, Biology
                </li>
                <li className="flex items-center text-lg text-gray-700 p-3 bg-gray-50 rounded-lg hover:bg-[#FDB913]/10 transition-colors">
                  <CheckCircle className="mr-3 text-[#FDB913] shrink-0" size={24} />
                  Physics, Chemistry, Mathematics, Electronics
                </li>
                <li className="flex items-center text-lg text-gray-700 p-3 bg-gray-50 rounded-lg hover:bg-[#FDB913]/10 transition-colors">
                  <CheckCircle className="mr-3 text-[#FDB913] shrink-0" size={24} />
                  Physics, Chemistry, Mathematics, Computer Science
                </li>
              </ul>
            </div>

            {/* Commerce */}
            <div>
              <h3 className="text-3xl font-bold text-[#0F2A4A] mb-6">COMMERCE</h3>
              <div className="mb-6 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
                  alt="Commerce Stream"
                  className="w-full h-auto"
                />
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-lg text-gray-700 p-3 bg-gray-50 rounded-lg hover:bg-[#FDB913]/10 transition-colors">
                  <CheckCircle className="mr-3 text-[#FDB913] shrink-0" size={24} />
                  Business Studies, Accountancy, Statistics, Computer Science
                </li>
                <li className="flex items-center text-lg text-gray-700 p-3 bg-gray-50 rounded-lg hover:bg-[#FDB913]/10 transition-colors">
                  <CheckCircle className="mr-3 text-[#FDB913] shrink-0" size={24} />
                  Statistics, Economics, Business Studies, Accountancy
                </li>
                <li className="flex items-center text-lg text-gray-700 p-3 bg-gray-50 rounded-lg hover:bg-[#FDB913]/10 transition-colors">
                  <CheckCircle className="mr-3 text-[#FDB913] shrink-0" size={24} />
                  Computer Science, Economics, Business Studies, Accountancy
                </li>
              </ul>
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

export default PuCollegeAbout;