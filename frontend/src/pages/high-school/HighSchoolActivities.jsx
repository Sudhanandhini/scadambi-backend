import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Sparkles, Music, Award, Target, Flag, Heart, BookOpen, Leaf, Vote, Globe, Medal, Palette } from 'lucide-react';


import img1 from "../../assets/high-school/activity/Picture22.jpg"
import img2 from "../../assets/high-school/activity/Picture23.jpg"

import img3 from "../../assets/high-school/activity/Picture24.jpg"

import img4 from "../../assets/high-school/activity/Picture26.jpg"

import img5 from "../../assets/high-school/activity/Picture25.jpg"

import img6 from "../../assets/high-school/activity/Picture27.jpg"
import img7 from "../../assets/high-school/activity/Picture28.jpg"
import img8 from "../../assets/high-school/activity/Picture29.jpg"
import img9 from "../../assets/high-school/activity/Picture30.jpg"

import img10 from "../../assets/high-school/activity/Picture31.jpg"

import img11 from "../../assets/high-school/activity/Picture32.jpg"

import img12 from "../../assets/high-school/activity/Picture33.jpg"

import img13 from "../../assets/high-school/activity/Picture34.jpg"
import img14 from "../../assets/high-school/activity/Picture35.jpg"
import img15 from "../../assets/high-school/activity/Picture36.jpg"


import img16 from "../../assets/high-school/activity/Picture21.jpg"

import img17 from "../../assets/high-school/activity/Picture37.jpg"

import img18 from "../../assets/high-school/activity/Picture371.jpg"

import img19 from "../../assets/high-school/activity/Picture38.jpg"
import img20 from "../../assets/high-school/activity/Picture39.jpg"
import img21 from "../../assets/high-school/activity/Picture40.jpg"
import img22 from "../../assets/high-school/activity/Picture41.jpg"

import img23 from "../../assets/high-school/activity/Picture42.jpg"
import img24 from "../../assets/high-school/activity/Picture43.jpg"
import img25 from "../../assets/high-school/activity/Picture44.jpg"



const HighSchoolActivities = () => {
  const activitiesData = [
    {
      title: 'Orientation Programs',
      content: 'Special orientation programs conducted to students to create awareness to develop certain skills, knowledge about Moral values, basic communication skills, life skills and ethical values.',
      images: [img1, img2],
      icon: BookOpen,
      align: 'left'
    },
    {
      title: 'Scouts and Guides',
      content: 'We have Baharat scouts /Guides unit in our school to contribute to the education of young people through a value system based on the Scout/Guide promise and law to build a better world where people are self-fulfilled as individuals and play constructive role in society. The chief aim of scouts /Guides is "character development towards happy citizenship through natural rather than artificial means". Their motto is "Be Prepared".',
      image: [img6],
      icon: Flag,
      align: 'right'
    },
    {
      title: 'Sports Activities',
      content: 'Sports are vital in school education, providing numerous benefits to students. These include physical fitness, health, teamwork, discipline, time management, stress relief, and mental well-being. Participating in sports reduces stress and improves mental health. Our school supports children\'s sports interests by creating a conducive environment for their pursuits.',
      image: [img7],
      icon: Trophy,
      align: 'left'
    },
    {
      title: 'Cultural and Literary Activities',
      content: 'Inaugural and Parents Orientation Program. First Day School Opening ceremonies and cultural programs celebrating diversity, creativity, and artistic expression.',
      images: [img8, img9],
      icon: Music,
      align: 'right'
    },
    {
      title: 'Field Trip',
      content: 'Field trips and exhibitions to develop scientific temper and hands-on learning experience. The Amateur Manager and Scientist (TAMS) was conducted by PES university. Students participate in interactive science exhibitions, experiments, and innovative project demonstrations to enhance their understanding of scientific concepts and foster curiosity in STEM fields.',
      image: [img3],
      icon: Target,
      align: 'left'
    },
    {
      title: 'Environment Day',
      content: 'This Go Green Day is celebrated on June 5th every year to create awareness about the values of mother Earth. Activities include seed ball preparation, drawing competition, and International yoga day - Flex Your Body, Free your Mind.',
      image: [img10],
      icon: Leaf,
      align: 'right'
    },
    {
      title: 'Interclass Competitions',
      content: 'Rangoli - Colors that Speaks, Patterns that shine. Tattoo making - Tiny Art, Big Impression. Drawing competition - Every stroke speaks a story. Face painting - From Blank face to living Art. Cooking without fire - No Fire, just flavour and Fun.',
      image: [img11],
      icon: Sparkles,
      align: 'left'
    },
    {
      title: 'Polling at Cadambi',
      content: 'To imbibe leadership qualities at the grass root level, our school has designed the school parliamentary elections every year for High school students. Mock Elections for Guiding Children in Demonstrations.',
      image: [img12],
      icon: Vote,
      align: 'right'
    },
    {
      title: 'Kannada Rajyotsava',
      content: 'Let\'s celebrate the soul of Karnataka. Cultural programs and celebrations marking Karnataka\'s formation day.',
      image: [img13],
      icon: Flag,
      align: 'left'
    },
    {
      title: 'Singing Competition',
      content: 'Annual singing competitions to showcase students\' musical talents and build confidence in performing arts.',
      image: [img14],
      icon: Music,
      align: 'right'
    },
    {
      title: 'Teacher\'s Day Celebration by Management',
      content: 'A teacher take a hand, opens a mind, and touches a heart. Teaching is the one profession that creates all others. The influence of a teacher can never be erased.',
      image: [img15],
      icon: Award,
      align: 'left'
    },
    {
      title: 'Teacher\'s Day Celebration by Students',
      content: 'To the world, you may just be a teacher. But to me you\'re my hero. The best teacher teaches from the heart, not from the book.',
      image: [img16],
      icon: Heart,
      align: 'right'
    },
    {
      title: 'First day school opening',
      content: 'The academic year begins with an inspiring inaugural ceremony where students, teachers, and parents gather to mark the commencement of a new learning journey. Special prayers, motivational speeches, and cultural performances set a positive tone for the year ahead, fostering excitement and commitment among students.',
      image: [img18],
      icon: BookOpen,
      align: 'left'
    },
    {
      title: 'Awareness Programs',
      content: 'Seed ball preparation by Rotaract Basaveshwara nagar. World Environmental day by Yuvaa Niyoga. Scouts 75th founders day cycle Jatha. BBMP Dengue fever awareness. Cluster sports meet - Kho-Kho, Kabaddi, Volleyball, Throwball. Traffic awareness by police officials.',
      image: [img17],
      icon: Globe,
      align: 'right'
    },
     {
      title: ' Science Expo',
      content: 'Science expo at Ankura for students to develop scientific temper through hands-on learning and interactive exhibitions.',
      image: [img5],
      icon: Globe,
      align: 'left'
    },
     {
      title: 'Celebrations',
      content: 'We celebrate National mathematics day, world science day, Vivekananda Jayanti, Kargil Diwas, Bhagath Singh birth anniversary and World Sanskrit day to enhance the interest towards various subjects.',
      image: [img4],
      icon: Globe,
      align: 'right'
    },
     {
    title: 'Face Painting',
    tagline: 'From Blank face to living Art',
    content: 'Face painting competitions transform students into living canvases where creativity knows no bounds. Participants use colors, brushes, and imagination to create stunning designs ranging from animals and nature to abstract art, developing artistic skills, patience, and attention to detail.',
    image: [img19],
    icon: Palette,
    align: 'left'
  },
     {
    title: 'Best Out of Waste',
    tagline: 'Innovative today for a Greener Tomorrow',
    content: 'Students showcase their creativity by transforming discarded materials into useful and artistic items. This eco-friendly competition promotes environmental consciousness, resourcefulness, and sustainable practices while encouraging innovative thinking and artistic expression through recycling and upcycling.',
    image: [img20],
    icon: Leaf,
    align: 'right'
  },
  {
    title: 'Drawing Competition',
    tagline: 'Every stroke speaks a story',
    content: 'Annual drawing competitions provide students a platform to express their imagination and artistic talents. Through colors, lines, and creativity, students illustrate their thoughts, emotions, and perspectives on various themes, developing fine motor skills and visual artistic abilities.',
    image: [img21],
    icon: Palette,
    align: 'left'
  },
  {
    title: 'International Yoga Day',
    tagline: 'Flex Your Body, Free your Mind',
    content: 'Celebrated on June 21st, International Yoga Day brings together students and teachers to practice various yoga asanas and meditation techniques. This promotes physical fitness, mental peace, stress relief, and overall well-being while teaching students the ancient Indian practice of holistic health.',
    image: [img22],
    icon: Heart,
    align: 'right'
  },
  {
    title: 'Tattoo Making',
    tagline: 'Tiny Art, Big Impression',
    content: 'Students explore the art of temporary tattoo design and application, creating intricate patterns and meaningful symbols. This activity enhances artistic precision, design thinking, and cultural appreciation while allowing creative self-expression through body art in a safe, temporary format.',
    image: [img23],
    icon: Sparkles,
    align: 'left'
  },
  {
    title: 'Science Club',
    tagline: 'Unleashing young minds, one talent at a time',
    content: 'The Science Club provides a dynamic platform for curious minds to explore scientific concepts beyond textbooks. Through hands-on experiments, innovative projects, science fairs, and collaborative research, students develop analytical thinking, problem-solving skills, and a genuine passion for scientific inquiry and discovery.',
    image: [img24],
    icon: Target,
    align: 'right'
  },
 
  {
    title: 'Cooking Without Fire',
    tagline: 'No Fire, just flavour and Fun',
    content: 'Students demonstrate culinary creativity by preparing delicious dishes without using heat or fire. This safe, innovative competition teaches food preparation skills, nutrition awareness, hygiene practices, and the art of presentation while encouraging teamwork and following recipes to create healthy, appetizing treats.',
    image: [img25],
    icon: Award,
    align: 'left'
  }

  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-br from-[#0F2A4A] via-[#1a4d7a] to-[#0F2A4A] text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDB913] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500 opacity-10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FDB913] to-green-500 rounded-2xl mb-6 shadow-2xl">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-[#FDB913] to-green-400 bg-clip-text text-transparent">
              Activities & Events
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-16 bg-[#FDB913]"></div>
              <div className="h-1 w-8 bg-green-500"></div>
              <div className="h-1 w-16 bg-[#FDB913]"></div>
            </div>
            <p className="text-xl text-gray-300">Beyond academics - nurturing well-rounded personalities</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 space-y-20">
          {activitiesData.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-12 items-center ${activity.align === 'right' ? 'md:grid-flow-dense' : ''}`}
            >
              <div className={activity.align === 'right' ? 'md:col-start-2' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FDB913] to-green-500 rounded-xl flex items-center justify-center shadow-lg">
                    <activity.icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0F2A4A]">{activity.title}</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{activity.content}</p>
              </div>
              
              <div className={activity.align === 'right' ? 'md:col-start-1 md:row-start-1' : ''}>
                {activity.image ? (
                  <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                    <img src={activity.image} alt={activity.title} className="w-full h-96 object-contain" />
                  </div>
                ) : activity.images ? (
                  <div className="grid grid-cols-2 gap-4">
                    {activity.images.map((img, i) => (
                      <div key={i} className="rounded-xl overflow-hidden shadow-xl border-2 border-gray-100">
                        <img src={img} alt="" className="w-full h-64 object-contain" />
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HighSchoolActivities;