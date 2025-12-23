import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon, Award, Sprout, Trophy, Palette, Users, PartyPopper } from 'lucide-react';

// Import actual images from assets
// Academic Excellence
import topperImg from "../../assets/icse-high/Photo-gallery-for-ICSE-High-school-1.jpg"

// Environmental Activities
import envDay1 from "../../assets/icse-high/Photo-gallery-for-ICSE-High-school-2.jpg"
import envDay2 from "../../assets/icse-high/Photo-gallery-for-ICSE-High-school-2.jpg"

// Sports Events
import sportsDay from "../../assets/icse-high/Photo-gallery-for-ICSE-High-school-3.jpg"
import khoKho from "../../assets/icse-high/Photo-gallery-for-ICSE-High-school-10.jpg"

// Literary & Creative Activities
import tshirtPainting from "../../assets/icse-high/Picture4.jpg"
import photoFrame from "../../assets/icse-high/Photo-gallery-for-ICSE-High-school-5.jpg"
import modelMaking from "../../assets/icse-high/Photo-gallery-for-ICSE-High-school-6.jpg"

// Guides & Scouts
import jamboree from "../../assets/icse-high/Photo-gallery-for-ICSE-High-school-7.jpg"
import cycleJatha from "../../assets/icse-high/Photo-gallery-for-ICSE-High-school-8.jpg"
import agriCamp from "../../assets/icse-high/Photo-gallery-for-ICSE-High-school-9.jpg"

// Annual Events
import sammilina from "../../assets/icse-high/Photo-gallery-for-ICSE-High-school-11.jpg"
import samanya1 from "../../assets/icse-high/Photo-gallery-for-ICSE-High-school-12.jpg"
import samanya2 from "../../assets/icse-high/Photo-gallery-for-ICSE-High-school-13.jpg"
import samanya3 from "../../assets/icse-high/Photo-gallery-for-ICSE-High-school-14.jpg"
import samanya4 from "../../assets/icse-high/Photo-gallery-for-ICSE-High-school-15.jpg"

const IcseHighGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gallery data organized by categories based on PDF content
  const galleryData = [
    {
      title: "Academic Excellence",
      icon: Award,
      color: "from-[#0F2A4A] to-[#1a4d7a]",
      images: [
        { 
          src: topperImg,
          caption: "ICSE 10th Topper 2024-25 - Poorvika M S",
          description: "Outstanding academic achievement and excellence"
        },
      ]
    },
    {
      title: "Environmental Activities",
      icon: Sprout,
      color: "from-green-500 to-teal-600",
      images: [
        { 
          src: envDay1,
          caption: "Environmental Day 2025",
          description: "Students creating eco-friendly projects and models"
        },
        { 
          src: envDay2,
          caption: "Environmental Awareness Project",
          description: "Innovative environmental conservation models"
        },
      ]
    },
    {
      title: "Sports Events",
      icon: Trophy,
      color: "from-orange-500 to-red-500",
      images: [
        { 
          src: sportsDay,
          caption: "Sports Day 2025",
          description: "Team spirit and sportsmanship in action"
        },
        { 
          src: khoKho,
          caption: "National Kho-Kho Tournament - Kolkata",
          description: "ICSE High School representing Karnataka at national level"
        },
      ]
    },
    {
      title: "Literary & Creative Activities",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      images: [
        { 
          src: tshirtPainting,
          caption: "T-Shirt Painting 2025",
          description: "Students showcasing their artistic talents and creativity"
        },
        { 
          src: photoFrame,
          caption: "Photo Frame Making 2025",
          description: "Creative crafts and innovative handwork designs"
        },
        { 
          src: modelMaking,
          caption: "Model Making 2025",
          description: "Students displaying innovative project models"
        },
      ]
    },
    {
      title: "Guides & Scouts",
      icon: Users,
      color: "from-blue-500 to-indigo-500",
      images: [
        { 
          src: jamboree,
          caption: "Guides Unit at Jamboree - Lucknow 2025",
          description: "Representing Karnataka with pride at national jamboree"
        },
        { 
          src: cycleJatha,
          caption: "Cycle Jatha on Bicycle Day 2025",
          description: "Promoting eco-friendly transportation and awareness"
        },
        { 
          src: agriCamp,
          caption: "Agricultural Camp - Shivamogga 2025",
          description: "Hands-on learning experience in agriculture and farming"
        },
      ]
    },
    {
      title: "Annual Events",
      icon: PartyPopper,
      color: "from-[#FDB913] to-yellow-600",
      images: [
        { 
          src: sammilina,
          caption: "Sammilina 2025",
          description: "Students celebrating with championship trophy"
        },
        { 
          src: samanya1,
          caption: "Samanya 2024 - Cultural Performance",
          description: "Spectacular cultural showcase and athletic performance"
        },
        { 
          src: samanya2,
          caption: "Samanya 2024 - Traditional Dance",
          description: "Traditional folk dance performance on stage"
        },
        { 
          src: samanya3,
          caption: "Samanya 2024 - Cultural Dance",
          description: "Students performing colorful traditional dance"
        },
        { 
          src: samanya4,
          caption: "Samanya 2024 - Stage Performance",
          description: "Dramatic cultural presentation under scenic backdrop"
        },
      ]
    },
  ];

  // Flatten all images for navigation
  const allImages = galleryData.flatMap(section => 
    section.images.map(img => ({
      ...img,
      category: section.title
    }))
  );

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % allImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(allImages[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(allImages[newIndex]);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
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
              <ImageIcon className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-[#FDB913] to-white bg-clip-text text-transparent">
              Photo Gallery
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
            <p className="text-xl md:text-2xl text-gray-300">Capturing Moments of Excellence & Achievement</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Sections */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        {galleryData.map((section, sectionIdx) => (
          <motion.section
            key={sectionIdx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            {/* Section Title with Icon */}
            <div className="mb-10">
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${section.color} rounded-2xl flex items-center justify-center shadow-lg`}
                >
                  <section.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h2 className="text-4xl font-bold text-[#0F2A4A]">{section.title}</h2>
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    className="h-1 w-24 bg-[#FDB913] rounded mt-2"
                  />
                </div>
              </div>
            </div>

            {/* Image Grid - 3 per row */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {section.images.map((image, imgIdx) => {
                const globalIndex = allImages.findIndex(
                  img => img.src === image.src && img.caption === image.caption
                );
                
                return (
                  <motion.div
                    key={imgIdx}
                    variants={itemVariants}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100"
                    onClick={() => openModal(allImages[globalIndex], globalIndex)}
                  >
                    <div className="relative overflow-hidden bg-white">
                      <img
                        src={image.src}
                        alt={image.caption}
                        className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A4A]/90 via-[#0F2A4A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <p className="text-white font-bold text-lg mb-2">{image.caption}</p>
                          <p className="text-[#FDB913] text-sm">{image.description}</p>
                        </div>
                      </div>

                      {/* Icon overlay */}
                      <div className="absolute top-4 right-4 bg-[#FDB913] text-[#0F2A4A] w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
                        <ImageIcon size={24} />
                      </div>

                      {/* Category Badge */}
                      <div className={`absolute top-4 left-4 bg-gradient-to-r ${section.color} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                        {section.title}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.section>
        ))}
      </div>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#0F2A4A] mb-4">Our Achievements in Pictures</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#FDB913] to-yellow-600 mx-auto rounded-full"
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "18+", label: "Memorable Moments", icon: ImageIcon },
              { number: "6", label: "Event Categories", icon: PartyPopper },
              { number: "500+", label: "Happy Students", icon: Users }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] rounded-3xl p-8 text-white text-center shadow-xl"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-[#FDB913] rounded-2xl mb-4"
                >
                  <stat.icon className="w-8 h-8 text-[#0F2A4A]" />
                </motion.div>
                <h3 className="text-5xl font-bold text-[#FDB913] mb-2">{stat.number}</h3>
                <p className="text-xl text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal/Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={closeModal}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={closeModal}
              className="absolute top-6 right-6 bg-[#FDB913] text-[#0F2A4A] w-14 h-14 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors z-50 shadow-2xl"
            >
              <X size={28} strokeWidth={3} />
            </motion.button>

            {/* Previous Button */}
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#0F2A4A] w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-2xl z-50"
            >
              <ChevronLeft size={32} strokeWidth={3} />
            </motion.button>

            {/* Next Button */}
            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#0F2A4A] w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-2xl z-50"
            >
              <ChevronRight size={32} strokeWidth={3} />
            </motion.button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.caption}
                  className="w-full max-h-[70vh] object-contain bg-gray-100"
                />
                
                {/* Caption */}
                <div className="bg-gradient-to-br from-[#0F2A4A] to-[#1a4d7a] text-white p-8">
                  <p className="text-2xl font-bold mb-2">{selectedImage.caption}</p>
                  <p className="text-[#FDB913] text-lg mb-2">{selectedImage.description}</p>
                  {selectedImage.category && (
                    <p className="text-gray-300 text-sm">Category: {selectedImage.category}</p>
                  )}
                </div>
              </div>

              {/* Image Counter */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mt-6"
              >
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <p className="text-white text-lg font-semibold">
                    {currentIndex + 1} / {allImages.length}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IcseHighGallery;