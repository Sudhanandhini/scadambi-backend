import React ,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Trophy,
  Users,
  BookOpen,
  Award,
  Target,
  ArrowRight,
  Lightbulb,
  Globe,
  Heart,
  Calendar,  Quote, ChevronLeft,ChevronRight
} from 'lucide-react';


import img1 from "../../assets/images/division_preschool.png"
import img2 from "../../assets/images/division_primary.png"
import img3 from "../../assets/images/about_students.png"






const HighSchoolHome = () => {
  const stats = [
    { icon: GraduationCap, label: 'Years of Excellence', value: '43+' },
    { icon: Users, label: 'Total Students', value: '4000+' },
    { icon: Trophy, label: 'Awards Won', value: '50+' },
    { icon: BookOpen, label: 'Quality Education', value: '100%' },
  ];


   const [currentTestimonial, setCurrentTestimonial] = useState(0);
  



    const testimonials = [
  {
    name: "Sowmya Karthik",
    relation: "Bhuvan S Gowda's Parent",
    student: "Bhuvan S Gowda, 10th Std",
    content:
      "My son loves coming to school every day. This is the best sign that he is happy and that this is the right school for him. Happy students, happy parents, and happy teachers!"
  },
  {
    name: "Sheetal Shivani's Parent",
    relation: "Parent",
    student: "Sheetal Shivani, 10th Std",
    content:
      "We feel good to see my daughter growing and learning. She enjoys coming to school. All the teachers are really good and cooperative. Thanks to all the members of management for providing a good atmosphere. The staff have been fantastic at supporting my daughter with career guidance, from explaining targets to discussing options, which has helped enormously with her next steps."
  },
  {
    name: "Pragathi N's Parent",
    relation: "Parent",
    student: "Pragathi N, 8th Std",
    content:
      "My child has been welcomed as a new student this year after moving from a different area. She has been made very welcome and already feels comfortable. The school creates a very positive approach throughout, which is clearly evident during school events."
  },
  {
    name: "Chandana R's Parent",
    relation: "Parent",
    student: "Chandana R, 9th Std",
    content:
      "Child safety and security have gone to a whole new level. We are very happy to let our children come to this school. It is good to see the school investing in new buildings and capital projects. The organization of school life creates an orderly environment. We sincerely appreciate the dedication of the teachers and management. My child's progress has been remarkable."
  },
  {
    name: "Kousthubh Shanbogh's Parent",
    relation: "Parent",
    student: "Kousthubh Shanbogh, 8th Std",
    content:
      "Communication is good, and we always feel involved in school decisions. The education, textbooks, and other learning resources provided are excellent. We appreciate the care taken and the regular updates. We are pleased with the extra co-curricular activities like scouts and guides, outdoor and indoor games."
  },
  {
    name: "Abhay Surya's Parent",
    relation: "Parent",
    student: "Abhay Surya, 9th Std",
    content:
      "We are impressed with how the school has supported my son's learning needs and adapted teaching approaches to suit his style. We appreciate the willingness to listen to parental concerns and work collaboratively to find solutions. We are grateful for the extra resources provided to help him catch up on missed materials."
  }
];


  const features = [
    {
      icon: Target,
      title: 'State Board Excellence',
      description: 'Comprehensive curriculum aligned with Karnataka State Board standards for grades 9-10.',
      color: 'orange'
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Highly qualified and experienced teachers dedicated to student success.',
      color: 'blue'
    },
    {
      icon: Lightbulb,
      title: 'Holistic Development',
      description: 'Focus on academics, sports, cultural activities, and character building.',
      color: 'green'
    },
    {
      icon: Award,
      title: 'Best Administration',
      description: 'Recognized by Government of Karnataka for excellence in education.',
      color: 'purple'
    },
  ];

  const highlights = [
    {
      title: 'Academic Excellence',
      description: 'Comprehensive State Board curriculum with FA and SA assessment',
      image: '📚'
    },
    {
      title: 'Modern Facilities',
      description: 'Well-equipped labs, spacious classrooms, and digital learning',
      image: '🏫'
    },
    {
      title: 'Sports & Activities',
      description: 'Wide range of sports and co-curricular activities',
      image: '⚽'
    },
    {
      title: 'Scouts & Guides',
      description: 'Character development through Bharat Scouts and Guides',
      image: '🎯'
    },
  ];

  const campusFeatures = [
    {
      icon: BookOpen,
      title: 'State Board Excellence',
      description:
        'Comprehensive curriculum aligned with Karnataka State Board standards for grades 9-10.',
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description:
        'Highly qualified and experienced teachers dedicated to student success.',
    },
    {
      icon: Award,
      title: 'Holistic Development',
      description:
        'Focus on academics, sports, cultural activities, and character building.',
    },
    {
      icon: Trophy,
      title: 'Best Administration',
      description:
        'Recognized by Government of Karnataka for excellence in education.',
    },
  ];



   // Auto-play functionality
      useEffect(() => {
          const interval = setInterval(() => {
              setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
          }, 5000);
  
          return () => clearInterval(interval);
      }, [testimonials.length]);
  
      const nextTestimonial = () => {
          setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      };
  
      const prevTestimonial = () => {
          setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      };
  


  return (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-[#0F2A4A] via-blue-900 to-[#0F2A4A] text-white overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-10 w-72 h-72 bg-[#FDB913] rounded-full blur-3xl"
          ></motion.div>
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#FDB913] rounded-full blur-3xl"
          ></motion.div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#FDB913]/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * 600,
              }}
              animate={{
                y: [null, -100],
                x: [null, Math.random() * 50 - 25],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05 }}
              className="inline-block px-4 py-2 bg-[#FDB913]/20 backdrop-blur-sm rounded-full mb-6 border border-[#FDB913]/30 shadow-lg"
            >
              <span className="text-[#FDB913] font-semibold">Grade 9-10 • State Board</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              S. Cadambi Vidya Kendra
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="block text-[#FDB913] mt-2"
              >
                High School
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-lg md:text-xl text-gray-300 mb-4 italic">
                "Jnanam Paramam Balam"
              </p>
              <motion.p 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-base md:text-lg text-gray-400 mb-8"
              >
                Knowledge is the Supreme Power
              </motion.p>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Empowering young minds through quality education, strong values, and holistic development since 1984.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/high-school/admissions">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(253, 185, 19, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FDB913] to-amber-400 text-white rounded-full font-semibold transition-all shadow-xl group"
                >
                  Apply Now 
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
                </motion.button>
              </Link>
              <Link to="/high-school/about">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold transition-all border border-white/30 shadow-lg"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section - Enhanced */}
        <div className="relative max-w-7xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 1 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(253, 185, 19, 0.2)",
                  transition: { duration: 0.3 }
                }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-[#FDB913]" />
                </motion.div>
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: 1.2 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="text-3xl font-bold mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* About Section – University style layout */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT – Image collage */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main big image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={img1}
                  alt="Students on campus"
                  className="w-full h-[260px] md:h-[380px] lg:h-[420px] object-cover"
                />
              </div>

              {/* Small image overlapping bottom-right */}
              <div className="absolute -bottom-16 right-6 md:right-10 w-52 md:w-64 rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-white">
                <img
                  src={img2}
                  alt="Campus life"
                  className="w-full h-[220px] md:h-[260px] object-cover"
                />
              </div>

              {/* Circular badge bottom-left (play-style button) */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
                className="absolute -bottom-20 left-4 md:left-10 w-40 h-40 md:w-44 md:h-44 rounded-full bg-primary shadow-2xl border-[10px] border-white flex items-center justify-center cursor-pointer group"
              >
                <div className="w-16 h-16 rounded-full bg-white/15 border border-white/40 flex items-center justify-center group-hover:bg-white/25 transition-all">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </motion.div>

              {/* Vertical EST text – like in the design */}
              <div className="absolute top-0 -left-10 hidden xl:block">
                <div
                  className="text-6xl font-bold text-[#0F2A4A] tracking-[0.2em]"
                  style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                >
                  EST 1984
                </div>
              </div>

              {/* Spacer so overlaps don't cut off */}
              <div className="h-24 md:h-28" />
            </motion.div>

            {/* RIGHT – Content same style as screenshot */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Small label */}
              <div>
                <span className="text-secondary font-bold uppercase tracking-[0.25em] text-xs md:text-sm">
                  Welcome
                </span>
                <h2 className="mt-4 text-3xl md:text-5xl font-bold text-primary leading-tight">
                  The most trusted & holistic
                  <span className="block text-secondary mt-2">
                    High School in Basaveshwaranagar
                  </span>
                </h2>
              </div>

              {/* Description paragraph */}
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                S. Cadambi Vidya Kendra High School has been a cornerstone of quality
                secondary education since 1984. We blend strong academics, values,
                and co-curricular opportunities to help every learner discover and
                develop their full potential.
              </p>

              {/* Programs list – styled like the design */}
              <div className="space-y-4">
                {/* Grade 9 */}
                <div className="py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-semibold text-primary">
                      Grade 9 Program
                    </h3>
                    <ArrowRight className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="mt-1 text-sm md:text-base text-gray-500">
                    Browse the Grade 9 curriculum and continuous assessment pattern.
                  </p>
                </div>

                {/* Grade 10 */}
                <div className="py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-semibold text-primary">
                      Grade 10 (SSLC) Program
                    </h3>
                    <ArrowRight className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="mt-1 text-sm md:text-base text-gray-500">
                    Explore our intensive SSLC preparation with board-oriented
                    support.
                  </p>
                </div>
              </div>

              {/* Button like "More About" in screenshot, but with your theme */}
              <div>
                <Link
                  to="/high-school/about"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-primary to-blue-900 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-transform group"
                >
                  More About
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Welcome Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Welcome to Our High School
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A legacy of 40 years in providing quality education and shaping future leaders
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-primary">
                Building Tomorrow's Leaders
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Established in 1984, S. Cadambi Vidya Kendra High School has been a beacon of educational excellence
                in Basaveshwara Nagar, Bangalore. Our institution was founded by visionary educationists with a mission
                to provide quality education to students from all backgrounds.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We follow the Karnataka State Board curriculum for grades 9-10, offering comprehensive education that
                prepares students for competitive examinations and future success. Our dedicated faculty and modern
                infrastructure ensure that every student receives personalized attention and the best learning experience.
              </p>
              <Link
                to="/high-school/about"
                className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-4 transition-all"
              >
                Read More About Us <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-t-4 border-secondary"
                >
                  <div className="text-4xl mb-3">{item.image}</div>
                  <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>




      {/* Campus Lifestyle Section – same layout as reference image */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* subtle wave pattern in background */}
        <div className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] opacity-20">
          <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M50 50C150 100 250 100 350 50C250 150 150 150 50 50ZM50 120C150 170 250 170 350 120C250 220 150 220 50 120ZM50 190C150 240 250 240 350 190C250 290 150 290 50 190Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* LEFT – big campus image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={img3}
                  alt="Students on campus"
                  className="w-full h-[360px] md:h-[480px] lg:h-[600px] object-cover"
                />
              </div>
            </motion.div>

            {/* RIGHT – white card with list */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-3xl shadow-2xl px-6 py-8 md:px-10 md:py-12">
                {/* small label */}
                <span className="text-secondary font-bold uppercase tracking-[0.25em] text-xs md:text-sm">
                  SCHOOL
                </span>

                {/* heading */}
                <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                  Why Choose Us
                  {/* <span className="block">Lifestyle</span> */}
                </h2>

                {/* feature list */}
                <div className="mt-8 space-y-5 md:space-y-6">
                  {campusFeatures.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="flex items-start gap-5"
                    >
                      {/* square icon block */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 md:w-18 md:h-18 rounded-2xl bg-secondary/10 flex items-center justify-center">
                          <item.icon className="w-7 h-7 text-secondary" />
                        </div>
                      </div>

                      {/* text */}
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-primary">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm md:text-base text-gray-500 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>







      {/* Features Section */}
      {/* <section className="py-16 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-t-4 border-secondary hover:-translate-y-2"
              >
                <div className={`w-14 h-14 bg-${feature.color}-100 rounded-full flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-7 h-7 text-secondary`} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}



      {/* Upcoming Events Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Upcoming Events
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Stay updated with our school calendar - Academic Year 2025-26
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Side - Calendar Events */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-secondary">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <Calendar className="w-8 h-8 text-secondary" />
                Calendar of Events 2025-26
              </h3>
              <div className="space-y-4">
                {[
                  { date: '01', month: 'November 2025', event: 'Karnataka Rajyotsava' },
                  { date: '05', month: 'November 2025', event: 'Guru Nanak Jayanthi' },
                  { date: '14', month: 'November 2025', event: "Children's Day Celebration" },
                  { date: '15', month: 'November 2025', event: 'Sammilana 2025 (Inter-school Competition)' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-yellow-50 transition-all border-l-4 border-secondary"
                  >
                    <div className="bg-gradient-to-br from-primary to-blue-900 text-white rounded-xl p-4 text-center min-w-[80px]">
                      <div className="text-3xl font-bold">{item.date}</div>
                      <div className="text-xs mt-1">{item.month.split(' ')[0]}</div>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-primary">{item.event}</p>
                      <p className="text-sm text-gray-600">{item.month}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side - Upcoming Events */}
            <div className="bg-gradient-to-br from-primary to-blue-900 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Award className="w-8 h-8 text-secondary" />
                Upcoming Events
              </h3>
              <div className="space-y-4">
                {[
                  { date: '1', month: 'December 2025', event: 'Pre-Final Exam for STD X' },
                  { date: '1', month: 'December 2025', event: 'II Round Tests Pre-primary to STD IX' },
                  { date: '7', month: 'December 2025', event: 'Excursion for STD X' },
                  { date: '25', month: 'December 2025', event: 'Christmas Celebration' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all border-l-4 border-secondary"
                  >
                    <div className="bg-secondary text-primary rounded-xl p-4 text-center min-w-[80px] font-bold">
                      <div className="text-3xl">{item.date}</div>
                      <div className="text-xs mt-1">{item.month.split(' ')[0]}</div>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-white">{item.event}</p>
                      <p className="text-sm text-yellow-200">{item.month}</p>
                    </div>
                  </motion.div>
                ))}
              </div>



            </div>
          </div>

          <div className="flex justify-center">
            <Link to="/high-school/calender">
              <button className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-4 my-8 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                View Complete Calendar
              </button>
            </Link>
          </div>



        </div>
      </section>


      {/* Testimonials Section */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Parents' Feedback</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mt-3 mb-6">
              What Parents Say About Us
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Hear from our wonderful parent community about their experience with S. Cadambi Education Center
            </p>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <div className="bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-12 text-white shadow-2xl relative">
                    <Quote className="absolute top-8 left-8 text-secondary/30" size={64} />
                    <div className="relative z-10">
                      <p className="text-l md:text-xl leading-relaxed mb-8 font-light" style={{ lineHeight: '1.5' }}>
                        "{testimonials[currentTestimonial].content}"
                      </p>
                      <div className="flex items-center">
                        <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mr-4">
                          <Users className="text-primary" size={32} />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-secondary">{testimonials[currentTestimonial].name}</h4>
                          <p className="text-white/90">{testimonials[currentTestimonial].relation}</p>
                          <p className="text-white/80 text-sm mt-1">Student: {testimonials[currentTestimonial].student}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center mt-8 gap-4">
              <button
                onClick={prevTestimonial}
                className="bg-secondary hover:bg-secondary/90 text-primary p-4 rounded-full shadow-lg transition-all transform hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`h-3 rounded-full transition-all ${idx === currentTestimonial
                      ? 'bg-primary w-8'
                      : 'bg-gray-300 hover:bg-primary/50 w-3'
                      }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="bg-secondary hover:bg-secondary/90 text-primary p-4 rounded-full shadow-lg transition-all transform hover:scale-110"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>





      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary to-yellow-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heart className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our School Community?
            </h2>
            <p className="text-xl mb-8 text-yellow-100">
              Enroll your child today and give them the foundation for a bright future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/high-school/admissions"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-secondary rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
              >
                Apply for Admission <ArrowRight size={20} />
              </Link>
              <Link
                to="/high-school/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-secondary transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HighSchoolHome;