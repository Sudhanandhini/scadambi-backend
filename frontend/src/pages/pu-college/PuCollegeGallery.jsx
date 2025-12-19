import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';


import img25 from "../../assets/pu-college/Picture25.png"
import img26 from "../../assets/pu-college/Picture26.png"
import img27 from "../../assets/pu-college/Picture27.png"
import img30 from "../../assets/pu-college/Picture30.jpg"
import img32 from "../../assets/pu-college/Picture32.png"

import img35 from "../../assets/pu-college/Picture35.jpg"
import img36 from "../../assets/pu-college/Picture36.jpg"
import img37 from "../../assets/pu-college/Picture37.png"
import img38 from "../../assets/pu-college/Picture38.jpg"

import img39 from "../../assets/pu-college/Picture39.jpg"
import img40 from "../../assets/pu-college/Picture40.png"
import img41 from "../../assets/pu-college/Picture41.jpg"

import img33 from "../../assets/pu-college/Picture33.jpg"
import img34 from "../../assets/pu-college/Picture34.jpg"

import img11 from "../../assets/pu-college/Picture11.png"
import img12 from "../../assets/pu-college/Picture12.png"
import img13 from "../../assets/pu-college/Picture13.png"
import img14 from "../../assets/pu-college/Picture14.png"

import img1 from "../../assets/pu-college/Picture3.jpg"
import img2 from "../../assets/pu-college/Picture4.jpg"
import img3 from "../../assets/pu-college/Picture5.jpg"
import img4 from "../../assets/pu-college/Picture6.jpg"
import img5 from "../../assets/pu-college/Picture7.jpg"
import img6 from "../../assets/pu-college/Picture8.jpg"
import img7 from "../../assets/pu-college/Picture9.jpg"




const PuCollegeGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gallery data organized by categories
  const galleryData = [
    {
      title: "Academic Activities",
      images: [
        { src: img12, caption: "Students engaged in academic work" },
       
        { src: img11, caption: "Art and Draft Activity" },
        { src: img14, caption: "Classroom learning" },
        { src: img13, caption: "Educational program" },
      ]
    },
    {
      title: "Gallery Media",
      images: [
        { src: img33, caption: "Installation and Skill Development" },
        { src: img34, caption: "Student gathering" },
      ]
    },
    {
      title: "Investiture Ceremony",
      images: [
        { src: img39, caption: "Lead with courage, serve with grace" },
        { src: img40, caption: "Student council members" },
        { src: img41, caption: "Leadership ceremony" },
      ]
    },
    {
      title: "Eco Club Activity",
      images: [
        { src: img36, caption: "Best Out of Waste" },
        { src: img35, caption: "Eco-friendly crafts" },
        { src: img37, caption: "Serve with grace" },
        { src: img38, caption: "Where Creativity meets Sustainability" },
      ]
    },
    {
      title: "Guru Ratna Teachers' Award 2025",
      images: [
        { src: img25, caption: "Sri Naveen Kumar – Social Activist Award" },
        { src: img26, caption: "Smt Sukanya H B – Best Women Teacher" },
        { src: img27, caption: "Smt W Madhavi Latha – Best Teacher" },
      ]
    },
    {
      title: "Teacher Recognition",
      images: [
        { src: img30, caption: "Where Passion meets Purpose – a teacher shines" },
        { src: img32, caption: "Malleshwaram Ladies Association felicitated Smt Indira Shamsunder as 'Acharya Devo Bhava'" },
      ]
    },
    {
  title: "Campus Overview",
  images: [
    { src: img1, caption: "Well-structured multi-storey academic campus" },
    { src: img2, caption: "Spacious courtyard ensuring light and ventilation" },
    { src: img3, caption: "Safe, organized, student-friendly campus environment" }
  ]
},
   {
  title: "Class Room",
  images: [
    { src: img4, caption: "Spacious classrooms with comfortable seating" },
    { src: img5, caption: "Well-ventilated classrooms with natural light" },
    { src: img6, caption: "Traditional classroom setup for focused learning" },
    { src: img7, caption: "Clean, organized classrooms promoting discipline" }
  ]
}
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F2A4A] via-[#1a3a5f] to-[#0F2A4A] text-white py-32 mt-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#FDB913]/10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center bg-[#FDB913] text-[#0F2A4A] px-6 py-2 rounded-full font-semibold mb-6">
              <ImageIcon className="mr-2" size={20} />
              Moments Captured
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Photo <span className="text-[#FDB913]">Gallery</span>
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-20 bg-[#FDB913] rounded"></div>
              <div className="h-1 w-12 bg-white rounded"></div>
              <div className="h-1 w-20 bg-[#FDB913] rounded"></div>
            </div>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Explore our vibrant campus life through memorable moments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {galleryData.map((section, sectionIdx) => (
          <motion.section
            key={sectionIdx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            {/* Section Title */}
            <div className="mb-10">
              <h2 className="text-4xl font-bold text-[#0F2A4A] mb-2">{section.title}</h2>
              <div className="h-1 w-24 bg-[#FDB913] rounded"></div>
            </div>

            {/* Image Grid - 3 per row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.images.map((image, imgIdx) => {
                const globalIndex = allImages.findIndex(
                  img => img.src === image.src && img.caption === image.caption
                );
                
                return (
                  <motion.div
                    key={imgIdx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: imgIdx * 0.1 }}
                    className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all"
                    onClick={() => openModal(allImages[globalIndex], globalIndex)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.caption}
                        className="w-full h-80 object-contain transform group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <p className="text-white font-semibold text-lg">{image.caption}</p>
                        </div>
                      </div>

                      {/* Icon overlay */}
                      <div className="absolute top-4 right-4 bg-[#FDB913] text-[#0F2A4A] w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ImageIcon size={20} />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        ))}
      </div>

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
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 bg-[#FDB913] text-[#0F2A4A] w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform z-50 shadow-2xl"
            >
              <X size={28} />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#0F2A4A] w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-2xl z-50"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#0F2A4A] w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-2xl z-50"
            >
              <ChevronRight size={32} />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.caption}
                  className="w-full max-h-[70vh] object-contain"
                />
                
                {/* Caption */}
                <div className="bg-[#0F2A4A] text-white p-6 text-center">
                  <p className="text-xl font-semibold">{selectedImage.caption}</p>
                  {selectedImage.category && (
                    <p className="text-[#FDB913] text-sm mt-2">{selectedImage.category}</p>
                  )}
                </div>
              </div>

              {/* Image Counter */}
              <div className="text-center mt-4">
                <p className="text-white text-lg">
                  {currentIndex + 1} / {allImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PuCollegeGallery;