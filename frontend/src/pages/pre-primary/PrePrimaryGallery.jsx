import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon, X } from 'lucide-react';

// Import Academic Activity Images
import academic1 from '../../assets/pre-primary/gallery/Picture1.jpg';
import academic2 from '../../assets/pre-primary/gallery/Picture2.jpg';
import academic3 from '../../assets/pre-primary/gallery/Picture3.jpg';
import academic4 from '../../assets/pre-primary/gallery/Picture4.jpg';
import academic5 from '../../assets/pre-primary/gallery/Picture5.jpg';
import academic6 from '../../assets/pre-primary/gallery/Picture6.jpg';
import academic7 from '../../assets/pre-primary/gallery/Picture7.jpg';
import academic8 from '../../assets/pre-primary/gallery/Picture8.jpg';
import academic9 from '../../assets/pre-primary/gallery/Picture9.jpg';
import academic10 from '../../assets/pre-primary/gallery/Picture10.jpg';
import academic11 from '../../assets/pre-primary/gallery/Picture11.jpg';
import academic12 from '../../assets/pre-primary/gallery/Picture12.jpg';
import academic13 from '../../assets/pre-primary/gallery/Picture13.jpg';
import academic14 from '../../assets/pre-primary/gallery/Picture14.jpg';
import academic15 from '../../assets/pre-primary/gallery/Picture15.jpg';
import academic16 from '../../assets/pre-primary/gallery/Picture16.jpg';
import academic17 from '../../assets/pre-primary/gallery/Picture17.jpg';
import academic18 from '../../assets/pre-primary/gallery/Picture18.jpg';
import academic19 from '../../assets/pre-primary/gallery/Picture19.jpg';
import academic20 from '../../assets/pre-primary/gallery/Picture20.jpg';
import academic21 from '../../assets/pre-primary/gallery/Picture23.jpg';
import academic22 from '../../assets/pre-primary/gallery/Picture24.jpg';
import academic25 from '../../assets/pre-primary/gallery/Picture25.jpg';
import academic26 from '../../assets/pre-primary/gallery/Picture26.jpg';
import academic28 from '../../assets/pre-primary/gallery/Picture21.jpg';
import academic27 from '../../assets/pre-primary/gallery/Picture22.jpg';
import academic23 from '../../assets/pre-primary/gallery/Picture30.jpg';
import academic24 from '../../assets/pre-primary/gallery/Picture27.jpg';
import academic30 from '../../assets/pre-primary/gallery/Picture28.jpg';
import academic29 from '../../assets/pre-primary/gallery/Picture29.jpg';
import academic31 from '../../assets/pre-primary/gallery/Picture31.jpg';
import academic32 from '../../assets/pre-primary/gallery/Picture32.jpg';
import academic33 from '../../assets/pre-primary/gallery/Picture33.jpg';
import academic34 from '../../assets/pre-primary/gallery/Picture34.jpg';
import academic35 from '../../assets/pre-primary/gallery/Picture35.jpg';
import academic36 from '../../assets/pre-primary/gallery/Picture36.jpg';
import academic37 from '../../assets/pre-primary/gallery/Picture37.jpg';
import academic38 from '../../assets/pre-primary/gallery/Picture38.jpg';
import academic39 from '../../assets/pre-primary/gallery/Picture39.jpg';
import academic40 from '../../assets/pre-primary/gallery/Picture40.jpg';



// Import Sports & Activities Images
import sports1 from '../../assets/pre-primary/gallery/Picture41.jpg';
import sports2 from '../../assets/pre-primary/gallery/Picture42.jpg';
import sports3 from '../../assets/pre-primary/gallery/Picture43.jpg';
import sports45 from '../../assets/pre-primary/gallery/Picture45.jpg';
import sports5 from '../../assets/pre-primary/gallery/Picture46.jpg';
import sports6 from '../../assets/pre-primary/gallery/5.png';
import sports4 from '../../assets/pre-primary/gallery/6.png';
import sports7 from '../../assets/pre-primary/gallery/Picture49.jpg';
import sports8 from '../../assets/pre-primary/gallery/Picture50.jpg';
import sports9 from '../../assets/pre-primary/gallery/Picture51.jpg';
import sports10 from '../../assets/pre-primary/gallery/Picture52.jpg';
import sports11 from '../../assets/pre-primary/gallery/Picture53.jpg';
import sports12 from '../../assets/pre-primary/gallery/Picture54.jpg';
import sports13 from '../../assets/pre-primary/gallery/Picture55.jpg';
import sports14 from '../../assets/pre-primary/gallery/Picture56.jpg';
// import sports15 from '../../assets/pre-primary/gallery/Picture59.jpg';
import sports16 from '../../assets/pre-primary/gallery/Picture58.jpg';
// import sports19 from '../../assets/pre-primary/gallery/Picture57.jpg';
import sports20 from '../../assets/pre-primary/gallery/Picture62.jpg';
import sports17 from '../../assets/pre-primary/gallery/Picture61.jpg';
import sports18 from '../../assets/pre-primary/gallery/Picture60.jpg';
import sports21 from '../../assets/pre-primary/gallery/Picture63.jpg';
import sports22 from '../../assets/pre-primary/gallery/Picture64.jpg';
import sports23 from '../../assets/pre-primary/gallery/Picture65.jpg';
import sports24 from '../../assets/pre-primary/gallery/Picture66.jpg';
import sports25 from '../../assets/pre-primary/gallery/Picture67.jpg';
import sports26 from '../../assets/pre-primary/gallery/Picture68.jpg';
import sports27 from '../../assets/pre-primary/gallery/Picture69.jpg';
import sports28 from '../../assets/pre-primary/gallery/Picture70.jpg';
import sports29 from '../../assets/pre-primary/gallery/Picture71.jpg';
import sports30 from '../../assets/pre-primary/gallery/Picture72.jpg';
import sports31 from '../../assets/pre-primary/gallery/Picture73.jpg';
import sports32 from '../../assets/pre-primary/gallery/Picture74.jpg';
import sports33 from '../../assets/pre-primary/gallery/Picture75.jpg';
import sports34 from '../../assets/pre-primary/gallery/Picture76.jpg';
import sports37 from '../../assets/pre-primary/gallery/Picture79.jpg';
import sports38 from '../../assets/pre-primary/gallery/Picture80.jpg';
import sports39 from '../../assets/pre-primary/gallery/Picture81.jpg';
import sports40 from '../../assets/pre-primary/gallery/Picture77.jpg';



// Import Cultural Events Images
import cultural1 from '../../assets/pre-primary/gallery/1.png';
import cultural2 from '../../assets/pre-primary/gallery/2.png';
import cultural3 from '../../assets/pre-primary/gallery/3.png';
import cultural4 from '../../assets/pre-primary/gallery/4.png';


// Import Facilities Images
import facility1 from '../../assets/pre-primary/gallery/8.png';
import facility2 from '../../assets/pre-primary/gallery/Picture54.jpg';
import facility3 from '../../assets/pre-primary/gallery/library.jpg';
import facility4 from '../../assets/pre-primary/gallery/Picture59.jpg';
import facility5 from '../../assets/pre-primary/gallery/Picture56.jpg';
import facility6 from '../../assets/pre-primary/gallery/Picture1.jpg';

const PrePrimaryGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryCategories = [
    {
      title: 'Academic Activities',
      images: [
        { id: 1, src: academic1, alt: 'Students in classroom' },
        { id: 2, src: academic2, alt: 'Art and craft activity' },
        { id: 3, src: academic3, alt: 'Group study session' },
        { id: 4, src: academic4, alt: 'Science experiment' },
        { id: 5, src: academic5, alt: 'Interactive learning' },
        { id: 6, src: academic6, alt: 'Teacher instruction' },
        { id: 7, src: academic7, alt: 'Art and craft activity' },
        { id: 8, src: academic8, alt: 'Group study session' },
        { id: 9, src: academic9, alt: 'Art and craft activity' },
        { id: 10, src: academic10, alt: 'Art and craft activity' },
        { id: 11, src: academic11, alt: 'Art and craft activity' },
        { id: 12, src: academic12, alt: 'Art and craft activity' },
        { id: 13, src: academic13, alt: 'Art and craft activity' },
        { id: 14, src: academic14, alt: 'Art and craft activity' },
        { id: 15, src: academic15, alt: 'Art and craft activity' },
        { id: 16, src: academic16, alt: 'Art and craft activity' },
        { id: 17, src: academic17, alt: 'Art and craft activity' },
        { id: 18, src: academic18, alt: 'Art and craft activity' },
        { id: 19, src: academic19, alt: 'Art and craft activity' },
        { id: 20, src: academic20, alt: 'Art and craft activity' },
        { id: 21, src: academic21, alt: 'Art and craft activity' },
        { id: 22, src: academic22, alt: 'Art and craft activity' },
        { id: 23, src: academic23, alt: 'Art and craft activity' },
        { id: 24, src: academic24, alt: 'Art and craft activity' },
        { id: 25, src: academic25, alt: 'Art and craft activity' },
        { id: 26, src: academic26, alt: 'Art and craft activity' },
        { id: 27, src: academic27, alt: 'Art and craft activity' },
        { id: 28, src: academic28, alt: 'Art and craft activity' },
        { id: 29, src: academic29, alt: 'Art and craft activity' },
        { id: 30, src: academic30, alt: 'Art and craft activity' },
        { id: 31, src: academic31, alt: 'Art and craft activity' },
        { id: 32, src: academic32, alt: 'Art and craft activity' },
        { id: 33, src: academic33, alt: 'Art and craft activity' },
        { id: 34, src: academic34, alt: 'Students in classroom' },
        { id: 35, src: academic35, alt: 'Students in classroom' },
        { id: 36, src: academic36, alt: 'Students in classroom' },
        { id: 37, src: academic37, alt: 'Students in classroom' },
        { id: 38, src: academic38, alt: 'Students in classroom' },
        { id: 40, src: academic40, alt: 'Students in classroom' },
        { id: 39, src: academic39, alt: 'Students in classroom' },


      ]
    },
    {
      title: 'Sports & Activities',
      images: [
        { id: 41, src: sports1, alt: 'Sports practice things' },
        { id: 42, src: sports2, alt: 'Basketball practice' },
        { id: 43, src: sports3, alt: 'Athletics competition' },
        { id: 44, src: sports45, alt: 'Yoga session' },
        { id: 45, src: sports5, alt: 'Team games' },
        { id: 46, src: sports6, alt: 'Physical education' },
        { id: 50, src: sports7, alt: 'Physical education' },
        { id: 48, src: sports8, alt: 'Basketball practice' },
        { id: 49, src: sports4, alt: 'Physical education' },
        { id: 47, src: sports9, alt: 'Team games' },
        { id: 51, src: sports10, alt: 'Team games' },
        { id: 52, src: sports11, alt: 'Physical education' },
        { id: 53, src: sports12, alt: 'Physical education' },
        { id: 54, src: sports13, alt: 'Physical education' },
        { id: 55, src: sports14, alt: 'Physical education' },

        { id: 57, src: sports17, alt: 'Physical education' },
        { id: 58, src: sports16, alt: 'Physical education' },
        { id: 59, src: sports18, alt: 'Physical education' },

        { id: 61, src: sports20, alt: 'Physical education' },
        { id: 62, src: sports21, alt: 'Physical education' },
        { id: 63, src: sports22, alt: 'Physical education' },

        { id: 64, src: sports23, alt: 'Physical education' },
        { id: 65, src: sports24, alt: 'Physical education' },
        { id: 67, src: sports25, alt: 'Physical education' },
        { id: 68, src: sports26, alt: 'Physical education' },
        { id: 69, src: sports27, alt: 'Physical education' },
        { id: 70, src: sports28, alt: 'Physical education' },

        { id: 72, src: sports29, alt: 'Physical education' },
        { id: 73, src: sports30, alt: 'Physical education' },
        { id: 70, src: sports31, alt: 'Physical education' },
        { id: 74, src: sports32, alt: 'Physical education' },
        { id: 75, src: sports33, alt: 'Physical education' },
        { id: 76, src: sports34, alt: 'Physical education' },
        { id: 81, src: sports40, alt: 'Physical education' },
        { id: 80, src: sports39, alt: 'Physical education' },
        { id: 82, src: sports38, alt: 'Physical education' },
        { id: 83, src: sports37, alt: 'Physical education' },


      ]

    },
    {
      title: 'Celebration',
      images: [
        { id: 13, src: cultural1, alt: 'Ganesha Chaturthi' },
        { id: 14, src: cultural2, alt: 'Krishna Janmashtami' },
        { id: 15, src: cultural3, alt: 'Ganesha Chaturthi' },
        { id: 16, src: cultural4, alt: 'Krishna Janmashtami' }

      ]
    },
    {
      title: 'Facilities',
      images: [
        { id: 19, src: facility1, alt: 'Celebration' },
        { id: 20, src: facility2, alt: 'Teacher meeting' },
        { id: 21, src: facility3, alt: 'Library' },
        { id: 22, src: facility4, alt: 'Assembly Activities' },
        { id: 23, src: facility5, alt: 'Super Star' },
        { id: 24, src: facility6, alt: 'Classroom' },
      ]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">

      <div className="relative bg-gradient-to-r from-primary to-primary/90 text-white py-20 mt-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">
              Learning Through Play
            </span>
            <h1 className="text-5xl md:text-6xl font-bold font-serif mt-3 mb-6">
              Photo Gallery
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Glimpses of life at S. Cadambi High School
            </p>
          </motion.div>
        </div>
      </div>
      {/* Hero Section */}
      {/* <section className="relative bg-gradient-to-br from-primary via-blue-900 to-primary text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <ImageIcon className="w-16 h-16 mx-auto mb-6 text-secondary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Glimpses of life at S. Cadambi High School
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Gallery Sections */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          {galleryCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 last:mb-0">
              {/* Category Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-primary mb-2">{category.title}</h2>
                <div className="w-20 h-1 bg-secondary"></div>
              </motion.div>

              {/* Image Grid - 3 columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.images.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-secondary"
                    onClick={() => setSelectedImage(image)}
                  >
                    {/* Image Container */}
                    <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="text-white font-semibold text-sm">{image.alt}</p>
                        </div>
                      </div>

                      {/* View Icon */}
                      <div className="absolute top-3 right-3 w-10 h-10 bg-secondary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ImageIcon size={20} className="text-primary" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary/90 transition-all z-10"
          >
            <X size={24} className="text-primary" />
          </button>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="text-white text-center mt-4 text-lg font-semibold">
              {selectedImage.alt}
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default PrePrimaryGallery;