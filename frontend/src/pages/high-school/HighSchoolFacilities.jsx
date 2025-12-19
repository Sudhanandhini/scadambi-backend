import React from 'react';
import { motion } from 'framer-motion';
import { 
  School,
  FlaskConical,
  BookOpen,
  Users,
  Shield,
  Droplet,
  Camera,
  Heart,
  Trophy,
  Bus
} from 'lucide-react';
import img1 from "../../assets/high-school/Picture19.jpg"
import lib from "../../assets/high-school/lib.png"
import lib1 from "../../assets/high-school/lib1.png"
import img3 from "../../assets/high-school/Picture12.jpg"
import img4 from "../../assets/high-school/Picture13.jpg"
import img5 from "../../assets/high-school/Picture14.jpg"
import sport1 from "../../assets/high-school/sport1.png"
import img7 from "../../assets/high-school/Picture16.jpg"
import sport from "../../assets/high-school/sport.png"
import img9 from "../../assets/high-school/Picture18.jpg"
import clas1 from "../../assets/high-school/class1.png"
import clas2 from "../../assets/high-school/class2.png"
import clas3 from "../../assets/high-school/class3.png"


import img20 from "../../assets/high-school/Picture20.jpg"
import img21 from "../../assets/high-school/Picture21.jpg"
import img22 from "../../assets/high-school/Picture22.jpg"
import img23 from "../../assets/high-school/Picture23.jpg"

import img24 from "../../assets/high-school/Picture24.png"
import img25 from "../../assets/high-school/Picture25.png"
import img26 from "../../assets/high-school/Picture26.jpg"
import img27 from "../../assets/high-school/fire.png"

import img28 from "../../assets/high-school/safe.png"
import img29 from "../../assets/high-school/safe1.png"
import img30 from "../../assets/high-school/Picture28.jpg"
import img31 from "../../assets/high-school/Picture27.png"


const HighSchoolFacilities = () => {
  const facilitiesData = [
    {
      title: 'Academic Facilities',
      content: 'Our school provides spacious, well-ventilated classrooms designed to create an optimal learning environment. We have specialized laboratories for Physics, Chemistry, Biology, and Computer Science, equipped with modern apparatus and safety measures. Our comprehensive library houses an extensive collection of books, periodicals, reference materials, and digital resources to support research and independent learning. Each facility is maintained to the highest standards, ensuring students have access to world-class infrastructure that enhances their educational experience and fosters academic excellence.',
      image: img1,
      icon: School,
      align: 'left'
    },
    {
      title: 'Classrooms',
      content: 'Our specialized classrooms are thoughtfully designed with ergonomic furniture including comfortable tables and chairs arranged to facilitate both individual learning and group discussions. Each classroom is equipped with traditional teaching aids like blackboards alongside modern technology including Smart TVs for multimedia presentations and interactive learning. The classrooms feature excellent natural lighting and ventilation, creating a conducive atmosphere for focused study. Adequate spacing between desks ensures student comfort while maintaining proper classroom management. These well-equipped learning spaces support various teaching methodologies and enable teachers to deliver engaging, effective lessons.',
      images: [clas1, clas2, clas3],
      icon: BookOpen,
      align: 'right'
    },
    {
      title: 'Labs',
      content: 'Our state-of-the-art laboratory facilities are equipped with specialized equipment and apparatus to provide students with hands-on practical experience in various scientific disciplines. Each lab is designed with comprehensive safety measures including fire extinguishers, first aid kits, and proper ventilation systems. Students gain valuable experimental skills under the guidance of experienced teachers, learning to handle sophisticated instruments and conduct experiments following proper scientific protocols. The labs feature modern workstations, adequate storage for chemicals and equipment, and sufficient space for collaborative practical work. Regular maintenance and upgrading ensure that our laboratories remain at the forefront of educational standards, providing students with an effective and secure learning environment that prepares them for advanced scientific studies.',
      list: ['Physics Lab', 'Chemistry Lab', 'Biology Lab', 'Computer Lab'],
      images: [img3, img4, img5],
      icon: FlaskConical,
      align: 'left'
    },
    {
      title: 'Library',
      content: 'Our school library serves as the intellectual heart of our institution, functioning as a comprehensive hub for reading, research, studying, and collaborative learning. It plays an integral role in the school\'s academic life by providing students and teachers with access to vast knowledge resources. The library maintains a carefully curated collection that includes textbooks, reference materials, fiction and non-fiction books, academic journals, periodicals, newspapers, and digital resources. Our qualified librarian assists students in developing information literacy skills, teaching them how to effectively search for, evaluate, and utilize information. The library provides a quiet, comfortable environment conducive to focused study and research work. With its well-organized cataloging system and user-friendly layout, students can easily locate required materials. The library also supports the curriculum by maintaining relevant subject-specific resources and offering programs that encourage reading habits and academic inquiry among students.',
      list: ['Collection of resources', 'Learning environment', 'Information literacy', 'Accessibility and organization', 'Support for curriculum'],
      images: [lib, lib1],
      icon: BookOpen,
      align: 'right'
    },
    {
      title: 'Auditorium',
      content: 'The school boasts a magnificent, spacious auditorium that serves as the venue for major school events, cultural programs, and special assemblies. This impressive facility can comfortably accommodate over 200 individuals at a time, making it ideal for conducting large-scale co-curricular activities, annual day celebrations, talent shows, inter-house competitions, and cultural programmes. The auditorium features excellent acoustics, proper lighting systems, and a well-designed stage equipped for various types of performances including drama, dance, music concerts, and presentations. Comfortable seating arrangements ensure that the audience can enjoy programs in a pleasant atmosphere. The versatile space also serves as a venue for important meetings, guest lectures, workshops, and parent-teacher interactions. This multipurpose hall plays a crucial role in nurturing students\' artistic talents and providing them with a professional platform to showcase their skills and build confidence in public performance.',
      image: img7,
      icon: Users,
      align: 'left'
    },
    {
      title: 'Sports',
      content: 'Our comprehensive sports facilities cater to both indoor and outdoor games, providing students with a wide range of athletic opportunities. The school maintains well-equipped playgrounds and specialized courts that support various sports activities. We believe in the holistic development of students, where physical fitness and sportsmanship go hand-in-hand with academic excellence. Our sports infrastructure ranges from basic playgrounds for casual play to specialized complexes for competitive sports training. Qualified physical education instructors guide students in proper techniques, team coordination, and sportsmanship. Regular inter-house competitions, sports days, and participation in inter-school tournaments provide students with platforms to showcase their athletic abilities. The sports facilities are maintained to high safety standards, ensuring students can enjoy physical activities in a secure environment while developing teamwork, discipline, and competitive spirit.',
      list: ['Kho-Kho', 'Kabaddi', 'Volley ball', 'Badminton', 'Throw ball', 'Short put', 'Chess and carom setup'],
      images: [sport, sport1],
      icon: Trophy,
      align: 'right'
    },
    {
      title: 'Transport',
      content: 'Student transportation to and from school is facilitated through various safe and convenient means. While the school does not operate its own bus service, parents and caregivers ensure reliable transportation for their children through multiple options. Many students commute via bicycles, which promotes physical fitness and environmental consciousness. Others walk to school from nearby neighborhoods, contributing to their daily exercise. For students living at greater distances, families arrange private transportation options including personal vehicles, shared carpools with neighboring families, and trusted private transport services. The school maintains flexible arrival and departure timings to accommodate different transportation schedules while ensuring students reach school safely and on time. We encourage parents to choose transportation methods that prioritize student safety, punctuality, and environmental sustainability.',
      list: ['Private transportation'],
      image: img9,
      icon: Bus,
      align: 'left'
    },
    {
      title: 'Safety and Security',
      subtitle: '"SAFE CHILDREN SECURE FUTURE"',
      content: 'Security measures like CCTV surveillance, Secure entry systems and trained security personnel.',
      sections: [
        { title: 'CCTV', images: [img21, img20, img22, img23] },
        { title: 'Fire Extinguishers', images: [img25, img24, img26, img27] },
        { title: 'Security Personnel', images: [img28, img29] },
        { title: 'First Aid Box', images: [img30, img31] }
      ],
      icon: Shield,
      align: 'full'
    },
   
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
              <School className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-[#FDB913] to-green-400 bg-clip-text text-transparent">
              Our Facilities
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-16 bg-[#FDB913]"></div>
              <div className="h-1 w-8 bg-green-500"></div>
              <div className="h-1 w-16 bg-[#FDB913]"></div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              World-class infrastructure for comprehensive learning and development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facilities Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 space-y-20">
          {facilitiesData.map((facility, index) => {
            if (facility.align === 'full') {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-12"
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FDB913] to-green-500 rounded-2xl mb-6 shadow-lg">
                      <facility.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-4">{facility.title}</h2>
                    {facility.subtitle && (
                      <p className="text-2xl font-bold text-green-600 italic mb-4">{facility.subtitle}</p>
                    )}
                    <div className="flex items-center justify-center gap-2 mb-6">
                      <div className="h-1 w-20 bg-[#FDB913] rounded"></div>
                      <div className="h-1 w-12 bg-green-500 rounded"></div>
                    </div>
                    <p className="text-lg text-gray-700 max-w-4xl mx-auto">{facility.content}</p>
                  </div>

                  <div className="space-y-12">
                    {facility.sections.map((section, sIdx) => (
                      <div key={sIdx} className="bg-white rounded-2xl shadow-2xl overflow-hidden border-t-4 border-[#FDB913]">
                        <div className="bg-gradient-to-r from-[#0F2A4A] to-[#1a4d7a] py-6 px-8">
                          <h3 className="text-3xl font-bold text-white">{section.title}</h3>
                        </div>
                        <div className={`p-8 grid ${section.images.length === 4 ? 'grid-cols-2 md:grid-cols-4' : section.images.length === 3 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'} gap-6`}>
                          {section.images.map((img, imgIdx) => (
                            <div key={imgIdx} className="rounded-xl overflow-hidden shadow-lg">
                              <img src={img} alt={`${section.title} ${imgIdx + 1}`} className="w-full h-64 object-cover" />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-12 items-center ${facility.align === 'right' ? 'md:grid-flow-dense' : ''}`}
              >
                {/* Content Section */}
                <div className={facility.align === 'right' ? 'md:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#FDB913] to-green-500 rounded-xl flex items-center justify-center shadow-lg">
                      <facility.icon className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F2A4A]">{facility.title}</h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">{facility.content}</p>
                  {facility.list && (
                    <ul className="space-y-3">
                      {facility.list.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#FDB913] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Image Section */}
                <div className={facility.align === 'right' ? 'md:col-start-1 md:row-start-1' : ''}>
                  {facility.image ? (
                    <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                      <img src={facility.image} alt={facility.title} className="w-full h-96 object-cover" />
                    </div>
                  ) : facility.images ? (
                    facility.images.length === 2 ? (
                      <div className="space-y-4">
                        {facility.images.map((img, imgIdx) => (
                          <div key={imgIdx} className="rounded-xl overflow-hidden shadow-xl border-2 border-gray-100">
                            <img src={img} alt={`${facility.title} ${imgIdx + 1}`} className="w-full h-64 object-cover" />
                          </div>
                        ))}
                      </div>
                    ) : facility.images.length === 3 ? (
                      <div className="space-y-4">
                        <div className="rounded-xl overflow-hidden shadow-xl border-2 border-gray-100">
                          <img src={facility.images[0]} alt={`${facility.title} 1`} className="w-full h-64 object-cover" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="rounded-xl overflow-hidden shadow-xl border-2 border-gray-100">
                            <img src={facility.images[1]} alt={`${facility.title} 2`} className="w-full h-48 object-cover" />
                          </div>
                          <div className="rounded-xl overflow-hidden shadow-xl border-2 border-gray-100">
                            <img src={facility.images[2]} alt={`${facility.title} 3`} className="w-full h-48 object-cover" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-4">
                        {facility.images.map((img, imgIdx) => (
                          <div key={imgIdx} className="rounded-xl overflow-hidden shadow-xl">
                            <img src={img} alt={`${facility.title} ${imgIdx + 1}`} className="w-full h-64 object-cover" />
                          </div>
                        ))}
                      </div>
                    )
                  ) : null}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default HighSchoolFacilities;