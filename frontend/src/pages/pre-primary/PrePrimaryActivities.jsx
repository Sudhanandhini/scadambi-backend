import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Palette,
    Users,
    Brain,
    Sparkles,
    Music,
    Heart,
    Trophy,
    Calendar,
    Award,
    Star,
} from "lucide-react";
import pic1 from "../../assets/pre-primary/activity/Picture6.jpg"
import pic2 from "../../assets/pre-primary/activity/Picture7.jpg"
import pic3 from "../../assets/pre-primary/activity/Picture8.jpg"
import pic4 from "../../assets/pre-primary/activity/Picture9.jpg"
import pic5 from "../../assets/pre-primary/activity/Picture10.jpg"
import pic6 from "../../assets/pre-primary/activity/Picture11.jpg"
import pic7 from "../../assets/pre-primary/activity/Picture12.jpg"
import pic8 from "../../assets/pre-primary/activity/Picture13.jpg"
import pic9 from "../../assets/pre-primary/activity/Picture14.jpg"
import pic10 from "../../assets/pre-primary/activity/Picture15.jpg"
import pic11 from "../../assets/pre-primary/activity/Picture16.jpg"
import pic12 from "../../assets/pre-primary/activity/Picture17.jpg"
import pic13 from "../../assets/pre-primary/activity/Picture18.jpg"
import pic14 from "../../assets/pre-primary/activity/Picture19.jpg"
import pic15 from "../../assets/pre-primary/activity/Picture20.jpg"
import pic16 from "../../assets/pre-primary/activity/Picture21.jpg"
import pic18 from "../../assets/pre-primary/activity/Picture22.jpg"
import pic19 from "../../assets/pre-primary/activity/Picture24.jpg"
import pic20 from "../../assets/pre-primary/activity/Picture25.jpg"
import pic21 from "../../assets/pre-primary/activity/Picture26.jpg"
import pic22 from "../../assets/pre-primary/activity/Picture27.jpg"
import pic17 from "../../assets/pre-primary/activity/Picture23.jpg"
import pic23 from "../../assets/pre-primary/activity/Picture37.jpg"
import pic24 from "../../assets/pre-primary/activity/Picture36.jpg"
import pic25 from "../../assets/pre-primary/activity/Picture38.jpg"
import pic26 from "../../assets/pre-primary/activity/Picture39.jpg"
import pic27 from "../../assets/pre-primary/activity/5.png"
import pic28 from "../../assets/pre-primary/activity/4.png"
import pic29 from "../../assets/pre-primary/activity/3.png"
import pic30 from "../../assets/pre-primary/activity/2.png"
import pic31 from "../../assets/pre-primary/activity/1.png"
import pic32 from "../../assets/pre-primary/activity/Picture28.jpg"
import pic33 from "../../assets/pre-primary/activity/Picture29.jpg"
import pic34 from "../../assets/pre-primary/activity/Picture32.jpg"
import pic35 from "../../assets/pre-primary/activity/Picture33.jpg"
import pic36 from "../../assets/pre-primary/activity/Picture35.jpg"
import pic37 from "../../assets/pre-primary/activity/Picture34.jpg"
import pic38 from "../../assets/pre-primary/activity/6.png"
import pic39 from "../../assets/pre-primary/activity/7.png"
import pic40 from "../../assets/pre-primary/activity/Picture44.jpg"
import pic41 from "../../assets/pre-primary/activity/Picture45.jpg"
import pic42 from "../../assets/pre-primary/activity/9.png"
import pic43 from "../../assets/pre-primary/activity/11.png"
import pic44 from "../../assets/pre-primary/activity/10.png"
import pic45 from "../../assets/pre-primary/activity/13.png"
import pic46 from "../../assets/pre-primary/activity/8.png"
import pic47 from "../../assets/pre-primary/activity/12.png"
import pic48 from "../../assets/pre-primary/activity/14.png"
import pic49 from "../../assets/pre-primary/activity/15.png"
import pic50 from "../../assets/pre-primary/activity/16.png"
import pic51 from "../../assets/pre-primary/activity/17.png"
import pic52 from "../../assets/pre-primary/activity/18.png"
import pic53 from "../../assets/pre-primary/activity/19.png"
import pic54 from "../../assets/pre-primary/activity/20.png"
import pic55 from "../../assets/pre-primary/activity/21.png"
import pic56 from "../../assets/pre-primary/activity/22.png"
import pic58 from "../../assets/pre-primary/activity/Picture40.jpg"
import pic57 from "../../assets/pre-primary/activity/Picture41.jpg"
import pic59 from "../../assets/pre-primary/activity/Picture100.jpg"
import pic60 from "../../assets/pre-primary/activity/Picture102.jpg"
import pic61 from "../../assets/pre-primary/activity/Picture103.jpg"
import pic62 from "../../assets/pre-primary/activity/Picture104.jpg"
import pic63 from "../../assets/pre-primary/activity/Picture105.jpg"
import pic64 from "../../assets/pre-primary/activity/Picture106.jpg"
import pic65 from "../../assets/pre-primary/activity/25.png"
import pic66 from "../../assets/pre-primary/activity/23.png"
import pic67 from "../../assets/pre-primary/activity/24.png"




// Image slider with autoplay
const ImageSlider = ({ images, title }) => {
    const [index, setIndex] = useState(0);

    if (!images || images.length === 0) return null;

    const next = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    // 🔁 Autoplay every 4 seconds
    useEffect(() => {
        if (images.length <= 1) return; // no autoplay for single image

        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000); // 4 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
            <motion.img
                key={index}
                src={images[index]}
                alt={title}
                className="w-full h-80 object-cover"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            {images.length > 1 && (
                <div className="absolute bottom-4 left-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                    {index + 1} / {images.length}
                </div>
            )}

            {images.length > 1 && (
                <>
                    <button
                        onClick={prev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-md"
                    >
                        ‹
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-md"
                    >
                        ›
                    </button>
                </>
            )}
        </div>
    );
};

const PrePrimaryActivities = () => {
    const dailyActivities = [
        {
            icon: Palette,
            title: "Creativity & Curiosity Skills",
            description:
                "Young children are curious, ask questions and love to explore the environment around them. They also have creative ideas and imagination. Preschool activities such as beading, art and craft, field trips and free play help develop creativity.",
            images: [
                pic1, pic2
            ],
            color: "from-pink-400 to-pink-600",
        },
        {
            icon: Users,
            title: "Social Skills",
            description:
                "Till the age of 3 a child spends most of his life with his parents and immediate family. At preschool children spend extended periods of time with other children and people who are not members of their families. The child learns how to make friends, collaborate, listen and develop conversational skills with strangers. They also learn how to interact with others, how to share and how to conduct themselves in a socially appropriate manner.",
            images: [
                pic3, pic4
            ],
            color: "from-blue-400 to-blue-600",
        },
        {
            icon: Brain,
            title: "Language Skills",
            description:
                "The cooing and babbling is now slowly getting replaced by words and meaningful sentences. Language rich setting in a preschool helps child by introducing new vocabulary and asking them thought provoking questions. Preschoolers thus learn to speak effectively because they have many opportunities to explore new things, read books, act out stories, singing and also communicate with their peers and teachers.",
            images: [
                pic5, pic6
            ],
            color: "from-green-400 to-green-600",
        },
        {
            icon: Sparkles,
            title: "Cognitive Skills",
            description:
                "Preschool curriculum involves participation in activities that encourage children to try new things, solve problems, ask questions and observe the world around them. These activities are targeted towards enhancing the cognitive skills of a child thus enabling them to learn more.",
            images: [
                pic7, pic8
            ],
            color: "from-purple-400 to-purple-600",
        },
        {
            icon: Heart,
            title: "Motor Skills",
            description:
                "Fine motor and gross motor development are one of the major skills that a child should acquire. These skills stay with them for life and help them in various activities. Preschool activities such as lacing, reading, cutting, sticking, throwing, painting, running and outdoor play encourages developing fine and gross motor development.",
            images: [
                pic9, pic10
            ],
            color: "from-red-400 to-red-600",
        },
        {
            icon: Music,
            title: "Pre-Literacy Skills",
            description:
                "In preschool, teachers use a variety of games and activities to develop pre-literacy skills. Rhymes help to discriminate between different sounds. Stories help to develop fundamental life skills in a fun way. Introduction of alphabets, words and numbers are a prerequisite for language and math skills. Children develop a sense of joy and motivation to learn new things.Here in SCEC, the development and growth of each child is taken into consideration and the best learning experience is given to them. They strive to build a strong foundation that ensures academic success and overall growth. ",
            images: [
                pic11, pic12
            ],
            color: "from-yellow-400 to-yellow-600",
        },
        {
            icon: Trophy,
            title: "Numeracy Skills",
            description:
                "Numeracy is the ability to see and use math in all areas of life. Math is introduced through everyday play and activities by encouraging the child to compare and order things of different sizes, group things together, use words to describe where things are, notice and make patterns. When we teach about math concepts in everyday activities, it helps the child to understand how and why math is useful.",
            images: [
                pic13, pic14
            ],
            color: "from-indigo-400 to-indigo-600",
        },
        {
            icon: Award,
            title: "Co-Curricular Activities",
            description:
                "Co-curricular activities are important for several reasons. They enhance students' academic development and performance. Co-curricular activities are designed to balance academic curriculum so that every child gets to learn beyond subjects. They also help children to build several important life skills, traditional values, socialization, moral values, personality progress and Indian culture. It makes teaching and learning experiences exciting for both students and teachers.",
            images: [
                pic15, pic16
            ],
            color: "from-teal-400 to-teal-600",
        },
    ];

    const annualEvents = [
        {
            icon: Trophy,
            title: "Samanvaya",
            subtitle: "Annual Sports & Cultural Meet",
            description:
                "A grand celebration showcasing children's talents in sports, dance, music, and cultural activities. This annual event brings together the entire school community in a vibrant display of energy, creativity, and teamwork.",
            images: [
                pic17, pic18
            ],
            color: "from-blue-400 to-blue-600",
        },
        {
            icon: Heart,
            title: "Funathon",
            subtitle: "Annual Sports Day",
            description:
                "Different games will be conducted for the children, parents and grandparents. The event will be a wonderful, fun filled experience encouraging the children to participate in all the games. A day full of laughter, competition, and family bonding.",
            images: [
                pic19, pic20
            ],
            color: "from-green-400 to-green-600",
        },
        {
            icon: Sparkles,
            title: "Pinnacle",
            subtitle: "Academic & Co-curricular Culmination",
            description:
                "Children exhibit and explain to visitors about their models based on different topics from their syllabus. Children will also showcase Dance, Drama, recite Shlokas, Bhagavadgita and Vachanas. A celebration of learning and cultural heritage.",
            images: [
                pic21, pic22
            ],
            color: "from-purple-400 to-purple-600",
        },
        {
            icon: Users,
            title: "International Yoga Day",
            subtitle: "Yoga for One Earth, One Health",
            description:
                "stresses harmony between humans, the environment, and overall wellness. Children are growing up in a world where screens take up a lion’s share of their routine. Even kids find themselves ensnared in the clutches of stress. This is where yoga steps in, one of the holistic ways to manage day-to-day stress. This International Yoga Day, let it be the start of a new routine where yoga is introduced to children. S. Cadambi Education Centre celebrated 11th International Yoga Day. Children and teachers performed simple yogasana under the guidance of our Physical education instructor Smt. Kunjurani. Kids performed yogasana with full energy and enthusiasm.",
            images: [
                pic23, pic24
            ],
            color: "from-orange-400 to-orange-600",
        },
        {
            icon: Star,
            title: "Star of the Week",
            subtitle: "Parent as Guest Teacher",
            description:
                "The star of the week is for students to learn more about each other and their families. The better way to build a strong classroom community.  Here parents are given an opportunity to become a teacher of their child's class. Parents with great enthusiasm conducted different activities for children, taught songs and moral values to the children.",
            images: [
                pic25, pic26
            ],
            color: "from-yellow-400 to-yellow-600",
        },
        {
            icon: Heart,
            title: "Nutritional Week",
            subtitle: "Feeding Smart Right From Start",
            description:
                "S.Cadambi Education Centre -Nutritional week from 02/09/25 to 09/09/25 Feeding Smart Right From Start to help children practice healthy eating habits. Vegetable salad day, Fruit Salad day, Whole Grains day, Dry Fruits Day, Sprouts day was celebrated to help tiny tots to learn the names,color, shape and taste of vegetables, fruits, grains, dry fruits and also its benefits.",
            images: [
                pic27, pic28, pic29, pic30, pic31
            ],
            color: "from-red-400 to-red-600",
        },
        {
            icon: Trophy,
            title: "Republic Day Celebration",
            subtitle: "January 26",
            description:
                "Celebrating India's Republic Day with patriotic fervor. Children participate in cultural programs, flag hoisting, and activities that instill pride in our nation and its democratic values.",
            images: [
                pic32, pic33
            ],
            color: "from-indigo-400 to-indigo-600",
        },
        {
            icon: Trophy,
            title: "Independence Day Celebration",
            subtitle: "August 15",
            description:
                "Commemorating India's Independence with patriotic songs, cultural performances, and activities that teach children about our freedom struggle and national heroes. Instilling pride in our heritage and freedom.",
            images: [
                pic34, pic35
            ],
            color: "from-teal-400 to-teal-600",
        },
        {
            icon: Heart,
            title: "International Doctor's Day",
            subtitle: "July 1",
            description:
                "A pretend play activity on Doctor's Day was conducted on July 1st 2025 in SCEC preprimary wing. A pretend hospital was set up with toy medical equipment, role-play as doctors and patients by children, they used dolls for play. Kids learnt the tools used by doctors, how hospital works.Pretend play may look simple, but it’s a powerful tool for helping toddlers learn about themselves and the world around them in a joyful and natural way.",
            images: [
                pic36, pic37
            ],
            color: "from-cyan-400 to-cyan-600",
        },
        {
            icon: Award,
            title: "Kargil Vijay Diwas",
            subtitle: "July 26",
            description:
                "Har dil mein ek junoon jagao, Kargil ke veeron ka samman badhao. Gratitude to the soldiers by our UKG children through drawing and coloring activities. Teaching children about bravery, sacrifice, and national pride.",
            images: [
                pic38, pic39
            ],
            color: "from-amber-400 to-amber-600",
        },
        {
            icon: Sparkles,
            title: "Ganesha Chaturthi",
            subtitle: "September",
            description:
                "Celebrating Lord Ganesha's birthday with prayers, songs, and creative activities. Children learn about the significance of this beloved deity and participate in eco-friendly celebrations that teach respect for nature.",
            images: [
                pic40, pic41
            ],
            color: "from-rose-400 to-rose-600",
        },
        {
            icon: Music,
            title: "Krishna Janmashtami",
            subtitle: "August",
            description:
                "Celebrating the birth of Lord Krishna with traditional activities, dressing up as Krishna and Radha, Dahi Handi, devotional songs, and stories about Krishna's childhood. Children learn about love, devotion, and Indian mythology.",
            images: [
                pic42, pic43, pic44
            ],
            color: "from-sky-400 to-sky-600",
        },
        {
            icon: Heart,
            title: "Onam Celebration",
            subtitle: "August-September",
            description:
                "The little ones embrace the essence of Onam by dressing up in traditional attire. Our tiny tots co-create a magnificent pookalam, symbolizing unity and teamwork. Children decorate and color different pictures representing Onam, learning about Kerala's harvest festival.",
            images: [
                pic45, pic46, pic47
            ],
            color: "from-lime-400 to-lime-600",
        },
        {
            icon: Sparkles,
            title: "Diwali Celebration",
            subtitle: "October-November",
            description:
                "Diwali, the 'festival of lights' was celebrated at SCEC. The students showcase the spirit of Diwali through a skit where kids are dressed as Lord Rama, Sita, Lakshmana, Bharatha, and Hanuman. The assembly has an ambience of joy with vibrant hues, chanting bhajana, shlokas, and activities like drawing and coloring.",
            images: [
                pic48, pic49, pic50
            ],
            color: "from-orange-400 to-orange-600",
        },
        {
            icon: Award,
            title: "Kannada Rajyotsava",
            subtitle: "November 1",
            description:
                "Celebrating Karnataka's formation day with traditional performances, songs in Kannada, and activities that instill pride in our state's rich culture, language, and heritage. Children dress in traditional attire and learn about Karnataka's history.",
            images: [
                pic51, pic52, pic53, pic54, pic55, pic56
            ],
            color: "from-red-400 to-red-600",
        },
        {
            icon: Users,
            title: "Parent Orientation Program",
            subtitle: "Beginning of Academic Year",
            description:
                "Parent Orientation Program @ SCEC on 14th June 2025 was conducted. The role of parents, rules of the school, safety of their child in the school, academic insights, methodology, how parent-school partnership help in holistic development of a child was explained.The session was filled with engaging activities for parents who actively participated and enjoyed themselves. The program ended with refreshments to parents and staff.We thank all the parents who joined us and made it a memorable event! We're excited to partner with you in your child's educational journey.",
            images: [
                pic57, pic58
            ],
            color: "from-violet-400 to-violet-600",
        },
      
        {
            icon: Sparkles,
            title: "Assembly Activities",
            subtitle: "Showcasing Talents & Values",
            description:
                "Assembly activities at SCEC provide a vibrant platform for students to showcase their talents and learn important life lessons. Children participate in skits, rhyme recitations, theme-based talks, role plays, storytelling, news reading and special presentations on festivals and important days. These activities help in improving communication skills, stage confidence, team spirit and value-based learning in a joyful and engaging manner.",
            images: [
                pic65, pic66, pic67
            ],
            color: "from-blue-400 to-blue-600",
        },
         {
            icon: Users,
            title: "Assembly",
            subtitle: "Daily Morning Gathering",
            description:
                "Our daily morning assembly at SCEC sets a positive tone for the day. Students come together to recite prayers, thought for the day, pledge, and sing patriotic songs. Important announcements are shared and values like discipline, punctuality, respect and responsibility are reinforced. The assembly helps children build confidence, develop a sense of belonging and start their day with focus and enthusiasm.",
            images: [
                pic59, pic60,pic61, pic62, pic63, pic64
            ],
            color: "from-emerald-400 to-emerald-600",
        },

    ];

    const specialPrograms = [
        {
            title: "Environmental Day",
            description:
                "Special activities to create awareness about environment protection and conservation.",
            icon: "🌍",
        },
        {
            title: "Assembly Activities",
            description: "Regular assemblies with storytelling, rhymes, and presentations.",
            icon: "📚",
        },
        {
            title: "Inter-School Competitions",
            description:
                "Children participate in Kinder Beat Rhapsody and other inter-school competitions including Story narrating, Pick and Speech, Coloring, Figure print art, Paper tear activity, and Palm Printing.",
            icon: "🏆",
        },
    ];

    return (
        <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero */}
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
                            Activities & Events
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            Engaging activities designed to nurture every aspect of your child's
                            development
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Daily Activities with image slider */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">
                            Everyday Learning
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mt-3 mb-6">
                            Daily Activities
                        </h2>
                        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                            Structured play-based activities that promote holistic development
                        </p>
                    </div>

                    <div className="space-y-16">
                        {dailyActivities.map((activity, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                            >
                                {/* Image slider – left on 1st row, right on 2nd row, etc. */}
                                <div className={idx % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                                    <ImageSlider images={activity.images} title={activity.title} />
                                </div>

                                {/* Text – opposite side of image */}
                                <div className={idx % 2 === 0 ? "lg:order-2" : "lg:order-1"}>
                                    <div
                                        className={`bg-gradient-to-br ${activity.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                                    >
                                        <activity.icon className="text-white" size={32} />
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-primary font-serif mb-4">
                                        {activity.title}
                                    </h3>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        {activity.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Annual Events with image slider - same layout as Daily Activities */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">
                            Celebrations & Programs
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mt-3 mb-6">
                            Annual Events
                        </h2>
                        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                            Special occasions that create lasting memories and learning experiences
                        </p>
                    </div>

                    <div className="space-y-16">
                        {annualEvents.map((event, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                            >
                                {/* Image slider – left on 1st row, right on 2nd row, etc. */}
                                <div className={idx % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                                    <ImageSlider images={event.images} title={event.title} />
                                </div>

                                {/* Text – opposite side of image */}
                                <div className={idx % 2 === 0 ? "lg:order-2" : "lg:order-1"}>
                                    <div
                                        className={`bg-gradient-to-br ${event.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                                    >
                                        <event.icon className="text-white" size={32} />
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-primary font-serif mb-4">
                                        {event.title}
                                    </h3>
                                    <p className="text-secondary font-semibold text-lg mb-3">
                                        {event.subtitle}
                                    </p>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        {event.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Special Programs */}
                {/* <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-3xl p-12 border-2 border-secondary/20">
                        <div className="text-center mb-12">
                            <span className="text-secondary font-bold tracking-widest uppercase text-sm">
                                Extra Learning
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mt-3 mb-6">
                                Special Programs
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {specialPrograms.map((program, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all"
                                >
                                    <div className="text-5xl mb-4">{program.icon}</div>
                                    <h3 className="text-xl font-bold text-primary mb-3">
                                        {program.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {program.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section> */}

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-12 text-white">
                        <Calendar className="mx-auto mb-6 text-secondary" size={64} />
                        <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
                            Join Our Next Event
                        </h2>
                        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                            Experience our vibrant learning community and see how we make
                            education fun
                        </p>

                        <a
                            href="/scadambi/pre-primary/calender"
                            className="inline-block bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                        >
                            View Event Calendar
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrePrimaryActivities;