import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Globe,
  Heart,
  Trophy,
  Music,
  Palette,
  Video,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import IcsePrimaryHeader from "./IcsePrimaryHeader";
import IcsePrimaryFooter from "./IcsePrimaryFooter";


import img5 from "../../assets/icse-primary/31.png";
import img6 from "../../assets/icse-primary/32.png";
import img2 from "../../assets/icse-primary/yoga.jpeg";
import img3 from "../../assets/icse-primary/sport.jpeg";
import img1 from "../../assets/icse-primary/Picture1.jpg";
import img4 from "../../assets/icse-primary/Picture2.jpg";




const IcsePrimaryEvents = () => {
  const events = [
    {
      icon: Globe,
      title: "World Environment Day",
      date: "5th June",
      description:
        "World Environment Day is observed on 5th June every year. A day is set aside every year to promote worldwide awareness and action for the protection of our environment.",
      details:
        'This year, students actively took part in "Pick and Speak Competition" on topics related to environment and nature. Our scouts and guide students participated in Seed Ball Making activity on this day.',
      image: img1,
      color: "green",
    },
    {
      icon: Heart,
      title: "International Yoga Day",
      date: "21st June",
      description:
        "This day was celebrated on 21st June. The event began with a brief introduction on Yoga Day and benefits of Yoga. Warm up exercises, all the students practiced and performed sitting and standing asanas, importance of these are explained simultaneously.",
      details:
        "The International Yoga Day celebration in our school serves as a platform to educate and inspire our students, teachers, and staff members about the immense value of yoga in maintaining a healthy and balanced lifestyle.",
      image: img2,
      color: "blue",
    },
    {
      icon: Trophy,
      title: "Sports Day",
      date: "19th September",
      description:
        "Sports are super important in schools. They promote physical fitness, teamwork, and discipline and instil values related to healthy competition. Rather than being seen as mere extracurricular activities, sports should be regarded as an integral part of the curriculum.",
      details:
        "This year on 19th September, we conducted final rounds of games like Throw Ball, Tug of War, Kho Kho, Hoops Relay and many more.",
      video: "https://www.facebook.com/share/v/1BkgJk5CCB/",
      video2: "https://www.facebook.com/share/v/1A66CyVsC9/",
      image: img3,
      color: "orange",
    },
    {
      icon: Music,
      title: "Independence Day",
      date: "15th August",
      description:
        "Independence Day is a time of great pride and patriotism for every Indian. As we celebrate this day, it's crucial to teach students the importance of freedom, unity, and love for our country.",
      details:
        'This year on 15th August, We celebrated 79th Independence Day with great enthusiasm and pride. Students who have won prizes in various interschool competitions at district, state and national levels were appreciated and many students participated in a dance drama on the theme "Operation Sindoor" which was choreographed by our teachers.',
      video: "https://www.facebook.com/share/v/16ZJn28t2U/",
      image: img4,
      color: "green",
    },
    {
      icon: Palette,
      title: "Bhagavat Gita Recitation",
      description:
        "Everyday, In the school assembly, students and taught Bhagavat Gita. The goal is to provide moral and spiritual guidance. We strongly trust Bhagavat Gita can help students develop better decision-making skills by learning about life lessons.",
      image: img5,
      color: "blue",
    },
    {
      icon: Heart,
      title: "Bal Vikas Program",
      description:
        "This year, at primary wing, we have started the Bal vikas program focused on character building and human values, often emphasizing principles like truth, righteousness, peace, love, and non-violence.",
      details:
        "It aims to nurture a child's personality through activities like storytelling, prayer, singing, and service, with a goal of fostering self-confidence, respect to all.",
      image: img6, // <-- fixed (was `image: {img1}`)
      color: "orange",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      green: "from-green-500 to-green-700",
      purple: "from-purple-500 to-purple-700",
      blue: "from-blue-500 to-blue-700",
      orange: "from-[#FDB913] to-[#FDB913]",
      yellow: "from-amber-500 to-amber-700",
      pink: "from-pink-500 to-pink-700",
    };
    return colors[color] || colors.blue;
  };

  const getIconBgColor = (color) => {
    const colors = {
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      blue: "bg-blue-100 text-blue-600",
      orange: "bg-[#F7D1A9] text-[#FDB913]",
      yellow: "bg-amber-100 text-amber-600",
      pink: "bg-pink-100 text-pink-600",
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-background">
      <IcsePrimaryHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-blue-900 text-white relative overflow-hidden mt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border-4 border-white rounded-full" />
          <div className="absolute bottom-20 right-10 w-40 h-40 border-4 border-white rounded-full" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 border-4 border-white rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring" }} className="inline-block mb-6">
              <Sparkles className="w-20 h-20 text-white/90" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Activities and Events</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Celebrating talents, fostering creativity, and building community bonds through memorable experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">Key Events</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Key Annual Events Conducted at Our School</h2>
          </motion.div>

          <div className="space-y-20">
            {events.map((event, idx) => {
              const IconComponent = event.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  {/* Content Side - keep left-aligned text always */}
                  <div className={`${!isEven ? "lg:order-last" : ""}`}>
                    <div className={`flex items-center gap-4 mb-6 ${!isEven ? "lg:flex-row-reverse lg:justify-end" : ""}`}>
                      <div className={`${getIconBgColor(event.color)} w-16 h-16 rounded-2xl flex items-center justify-center`}>
                        <IconComponent size={32} />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-primary">{event.title}</h3>
                        {event.date && (
                          <p className={`text-lg font-semibold bg-gradient-to-r ${getColorClasses(event.color)} bg-clip-text text-transparent`}>
                            {event.date}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-4 mb-6 text-left">
                      <p className="text-lg text-gray-700 leading-relaxed">{event.description}</p>
                      {event.details && <p className="text-lg text-gray-700 leading-relaxed">{event.details}</p>}
                    </div>

                    {event.highlights && event.highlights.length > 0 && (
                      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-100 mb-6">
                        <h4 className="font-bold text-primary mb-4">Highlights:</h4>
                        <div className="space-y-3">
                          {event.highlights.map((highlight, hIdx) => (
                            <div key={hIdx} className={`flex items-center gap-3 ${!isEven ? "lg:flex-row-reverse lg:justify-end" : ""}`}>
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getColorClasses(event.color)}`} />
                              <span className="text-gray-700 font-medium">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {(event.video || event.video2) && (
                      <div className={`flex flex-wrap gap-3 ${!isEven ? "lg:justify-end" : ""}`}>
                        {event.video && (
                          <a href={event.video} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 bg-gradient-to-r ${getColorClasses(event.color)} text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-all shadow-lg`}>
                            <Video size={20} />
                            Watch Video
                            <ExternalLink size={16} />
                          </a>
                        )}
                        {event.video2 && (
                          <a href={event.video2} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 bg-gradient-to-r ${getColorClasses(event.color)} text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-all shadow-lg`}>
                            <Video size={20} />
                            Watch More
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Image Side -- render real image */}
                  <div className={`${!isEven ? "lg:order-first" : ""}`}>
                    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="relative group">
                      <div className={`absolute inset-0 bg-gradient-to-r ${getColorClasses(event.color)} rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity`} />
                      <div className="relative bg-white rounded-3xl p-4 shadow-2xl border-2 border-gray-100">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                          {/* actual image */}
                          <img
                            src={event.image}
                            alt={event.title}
                            loading="lazy"
                            className="w-full h-full object-cover block"
                          />
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="sr-only">{event.title} photo</span>
                          </div>
                        </div>
                      </div>

                      <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r ${getColorClasses(event.color)} rounded-full opacity-20`} />
                      <div className={`absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r ${getColorClasses(event.color)} rounded-full opacity-20`} />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA & Footer */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-primary to-blue-900 text-white rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-32 h-32 border-4 border-white rounded-full" />
              <div className="absolute bottom-10 left-10 w-24 h-24 border-4 border-white rounded-full" />
            </div>
            <div className="relative z-10">
              <Calendar className="mx-auto mb-6 text-secondary" size={64} />
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Join Us for Our Events</h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Stay connected with our school community and never miss an exciting event</p>
              <a href="/icse-primary/calendar" className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-4 rounded-xl transition-all inline-flex items-center gap-2 shadow-lg">
                <Calendar size={20} />
                View Full Calendar
              </a>
            </div>
          </motion.div>
        </div>
      </section>

     
    </div>
  );
};

export default IcsePrimaryEvents;
