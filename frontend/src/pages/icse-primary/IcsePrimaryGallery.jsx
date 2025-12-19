import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera, Play, ExternalLink, Image as ImageIcon, Film, Maximize2 } from 'lucide-react';
import IcsePrimaryHeader from './IcsePrimaryHeader';
import IcsePrimaryFooter from './IcsePrimaryFooter';

// --- IMPORT YOUR IMAGES HERE ---
// Replace these with the actual files you have in ../../assets/icse-primary/...
import img1 from "../../assets/icse-primary/scout/Picture30.jpg";
import img2 from "../../assets/icse-primary/scout/Picture33.jpg";
import img3 from "../../assets/icse-primary/scout/Picture41.jpg";
import img4 from "../../assets/icse-primary/scout/Picture43.jpg";
import img5 from "../../assets/icse-primary/scout/Picture44.jpg";
import img6 from "../../assets/icse-primary/scout/Picture51.jpg";
import img7 from "../../assets/icse-primary/scout/Picture52.jpg";
import img8 from "../../assets/icse-primary/scout/Picture55.jpg";
import img9 from "../../assets/icse-primary/scout/Picture65.jpg";
import img10 from "../../assets/icse-primary/scout/Picture62.jpg";
import img11 from "../../assets/icse-primary/scout/Picture67.jpg";
import img12 from "../../assets/icse-primary/scout/Picture69.jpg";

import img13 from "../../assets/icse-primary/Picture15.jpg";
import img14 from "../../assets/icse-primary/art/Picture28.jpg";
import img15 from "../../assets/icse-primary/Picture35.png";
import img16 from "../../assets/icse-primary/Picture12.jpg";
import img17 from "../../assets/icse-primary/Picture5.jpg";
import img18 from "../../assets/icse-primary/Picture32.jpg";
import img19 from "../../assets/icse-primary/Picture48.jpg";

import img24 from "../../assets/icse-primary/yoga.jpeg";
import img25 from "../../assets/icse-primary/Picture2.jpg";
import img23 from "../../assets/icse-primary/32.png";
import img22 from "../../assets/icse-primary/31.png";
import img21 from "../../assets/icse-primary/sport.jpeg";
import img20 from "../../assets/icse-primary/Picture48.jpg";

import img26 from "../../assets/icse-primary/Picture2.png";
import img27 from "../../assets/icse-primary/art/Picture14.jpg";
import img28 from "../../assets/icse-primary/Picture6.png";
import img29 from "../../assets/icse-primary/art/Picture3.jpg";


import img31 from "../../assets/icse-primary/scout/Picture1.jpg";
import img32 from "../../assets/icse-primary/scout/Picture2.png";

import img35 from "../../assets/icse-primary/scout/Picture5.png";
import img36 from "../../assets/icse-primary/scout/Picture6.jpg";
import img37 from "../../assets/icse-primary/scout/Picture7.jpg";
import img38 from "../../assets/icse-primary/scout/Picture8.png";
import img39 from "../../assets/icse-primary/scout/Picture9.png";
import img40 from "../../assets/icse-primary/scout/Picture10.png";
import img41 from "../../assets/icse-primary/scout/Picture11.png";






const IcsePrimaryGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeCategory, setActiveCategory] = useState('all');

    const galleryCategories = [
        {
            id: 'events',
            title: "Annual Events",
            color: "blue",
            icon: "🎉",
            images: [
                { id: 1, src: img20, title: "World Environment Day", description: "World Environment Day Activities ", category: "events" },
                { id: 2, src: img21, title: "Sports Day", description: "Annual Sports Meet 2025", category: "events" },
                { id: 3, src: img24, title: "Yoga Day", description: "International Yoga Day Celebration", category: "events" },
                { id: 4, src: img25, title: "Independence Day", description: "79th Independence Day Celebration", category: "events" },
                { id: 28, src: img22, title: "Bhagavat Gita Recitation", description: "Moral and spiritual guidance", category: "events" },
                { id: 29, src: img23, title: "Bal Vikas Program", description: "Nurture a child's personality", category: "events" }
            ]
        },
        {
            id: 'scouts',
            title: "Scouts & Guides",
            color: "green",
            icon: "⚜️",
            images: [
                { id: 5, src: img1, title: "Geeta Gayana Competition", description: "Builds confidence in public speaking and presentation", category: "scouts" },
                { id: 6, src: img2, title: "Nature Camp at Doddamaranahalli", description: "Team bonding through shared camping experiences", category: "scouts" },
                { id: 7, src: img3, title: "International Jamboree", description: "Cultural exchange and global perspective", category: "scouts" },
                { id: 8, src: img4, title: "Founder's Day Celebration", description: "Celebrates the rich heritage of Scouting", category: "scouts" },
                { id: 20, src: img5, title: "Nature Camp at Shimoga", description: "Understanding sustainable and organic farming", category: "scouts" },
                { id: 19, src: img6, title: "Environment Day at Vidhana Soudha", description: "Participation in state-level environmental initiatives", category: "scouts" },
                { id: 17, src: img7, title: "Tritiya Sopan Examination", description: "Tests leadership and decision-making abilities", category: "scouts" },
                { id: 18, src: img8, title: "Senses Testing", description: "Improves observation and awareness skills", category: "scouts" },
                { id: 21, src: img9, title: "Traffic Awareness Program", description: "Community service through awareness campaigns", category: "scouts" },
                { id: 22, src: img10, title: "Diamond Jubilee Jamboree", description: "Celebrating 75 years of scouting heritage", category: "scouts" },
                { id: 24, src: img11, title: "Rajat Pankh & Dwitiya Pankh", description: "Testing of fundamental scouting knowledge", category: "scouts" },
                { id: 23, src: img12, title: "Testing Camp BSG", description: "Comprehensive evaluation of scouting competencies", category: "scouts" },
            ]
        },
        {
            id: 'competitions',
            title: "Competitions",
            color: "purple",
            icon: "🏆",
            images: [
                { id: 9, src: img13, title: "Fancy Dress", description: "Theme-based Fancy Dress Competition", category: "competitions" },
                { id: 10, src: img14, title: "Art Competition", description: "Pair Event Art Competition", category: "competitions" },
                { id: 11, src: img15, title: "Solo Singing", description: "Solo Singing Competition", category: "competitions" },
                { id: 25, src: img16, title: "Pick and Speak", description: "Improves public speaking confidence", category: "competitions" },
                { id: 26, src: img17, title: "Memory Test Competition", description: "Develops concentration and focus", category: "competitions" },
                { id: 27, src: img18, title: "Oratory Competition", description: "Improves vocabulary & fluency", category: "competitions" },
                { id: 12, src: img19, title: "Quiz Competition", description: "General Knowledge Quiz", category: "competitions" }
            ]
        },
        {
            id: 'classroom',
            title: "Classroom Activities",
            color: "orange",
            icon: "📚",
            images: [
                { id: 13, src: img26, title: "Learning Activities", description: "Interactive Classroom Sessions", category: "classroom" },
                { id: 14, src: img27, title: "Group Work", description: "Collaborative Learning", category: "classroom" },
                { id: 15, src: img28, title: "Science Exhibition", description: "Student Projects Display", category: "classroom" },
                { id: 16, src: img29, title: "Art & Craft", description: "Creative Activities", category: "classroom" }
            ]
        },
        // NEW: Activity Tab (keeps existing design/colors)
        {
            id: 'activity',
            title: "Other Activities",
            color: "blue", // keeping design consistent
            icon: "✨",
            images: [

                { id: 31, src: img31, title: "Community Service", description: "Building imagination & language skills", category: "activity" },
                { id: 32, src: img32, title: "Community Service", description: "Students engage with local community", category: "activity" },
                            
                { id: 35, src: img35, title: "Community Service", description: "Building imagination & language skills", category: "activity" },
                { id: 36, src: img36, title: "Community Service", description: "Students engage with local community", category: "activity" },
                { id: 37, src: img37, title: "Community Service", description: "Building imagination & language skills", category: "activity" },
                { id: 38, src: img38, title: "Community Service", description: "Students engage with local community", category: "activity" },
                { id: 39, src: img39, title: "Community Service", description: "Building imagination & language skills", category: "activity" },
                { id: 40, src: img40, title: "Community Service", description: "Students engage with local community", category: "activity" },
                { id: 41, src: img41, title: "Community Service", description: "Building imagination & language skills", category: "activity" }
            ]
        }
    ];

    const allImages = galleryCategories.flatMap(cat => cat.images);
    const filteredImages = activeCategory === 'all' ? allImages : allImages.filter(img => img.category === activeCategory);

    return (
        <div className="min-h-screen bg-background">
            <IcsePrimaryHeader />

            {/* Hero */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white relative overflow-hidden mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                      <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="inline-block mb-6"
                        >
                            <Camera className="w-20 h-20 text-white/90" />
                        </motion.div>
                   
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Photo Gallery</h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto">
                        Capturing moments of learning, growth, and celebration at ICSE Primary Wing
                    </p>
                </div>
            </section>

            {/* Filters */}
            <section className="py-8 bg-white sticky top-20 z-40 shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap gap-3 justify-center">
                        <button onClick={() => setActiveCategory('all')} className={`px-6 py-3 rounded-xl font-semibold ${activeCategory === 'all' ? 'bg-primary text-white' : 'bg-gray-100'}`}>🌟 All Photos</button>
                        {galleryCategories.map(cat => (
                            <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`px-6 py-3 rounded-xl font-semibold ${activeCategory === cat.id ? 'bg-primary text-white' : 'bg-gray-100'}`}>
                                <span className="mr-2">{cat.icon}</span>{cat.title}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                            <ImageIcon className="inline-block mr-2" size={16} />
                            {filteredImages.length} Photos
                        </span>
                        <h2 className="text-3xl font-bold text-primary">{activeCategory === 'all' ? 'All Memories' : galleryCategories.find(c => c.id === activeCategory)?.title}</h2>
                    </div>

                    <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredImages.map((image, idx) => (
                            <motion.div key={image.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer" onClick={() => setSelectedImage(image)}>
                                <div className="aspect-square relative overflow-hidden">
                                    {image.src ? (
                                        <img src={image.src} alt={image.title} className="w-full h-full object-cover" loading="lazy" />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-7xl opacity-40">📸</span>
                                        </div>
                                    )}

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <Maximize2 className="mx-auto text-white mb-2" size={32} />
                                            <p className="text-white font-semibold">View Image</p>
                                        </div>
                                    </div>

                                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary">
                                        {galleryCategories.find(c => c.id === image.category)?.icon}
                                    </div>
                                </div>

                                <div className="p-5">
                                    <h3 className="font-bold text-primary mb-2 text-lg">{image.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{image.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
                        <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} transition={{ type: 'spring', damping: 20 }} className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden" onClick={e => e.stopPropagation()}>
                            <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 z-10 bg-white/90 rounded-full p-3 shadow-lg">
                                <X size={24} className="text-primary" />
                            </button>

                            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                                {selectedImage.src ? (
                                    <img src={selectedImage.src} alt={selectedImage.title} className="max-h-[70vh] w-full object-contain" />
                                ) : (
                                    <span className="text-9xl">📸</span>
                                )}
                            </div>

                            <div className="p-8 bg-white">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <h3 className="text-3xl font-bold text-primary mb-2">{selectedImage.title}</h3>
                                        <p className="text-lg text-gray-600">{selectedImage.description}</p>
                                    </div>
                                    <div className="ml-4">
                                        <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold">
                                            {galleryCategories.find(c => c.id === selectedImage.category)?.icon}
                                            {' '}
                                            {galleryCategories.find(c => c.id === selectedImage.category)?.title}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

           
        </div>
    );
};

export default IcsePrimaryGallery;
