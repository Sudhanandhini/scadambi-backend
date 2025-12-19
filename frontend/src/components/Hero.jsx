import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroBg from '../assets/images/hero_bg.png';

const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 mix-blend-multiply" />
            </div>

            {/* Content */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-sm font-semibold mb-6 backdrop-blur-sm">
                        Admissions Open for 2025-26
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white font-serif leading-tight mb-6">
                        Empowering Minds, <br />
                        <span className="text-secondary">Shaping Futures.</span>
                    </h1>
                    <p className="text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
                        Join a community dedicated to academic excellence, character development, and holistic growth. From Pre-School to College, we nurture every step of the journey.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-secondary hover:bg-yellow-500 text-primary font-bold py-4 px-8 rounded-lg transition-all transform hover:translate-y-[-2px] shadow-lg flex items-center justify-center gap-2 group">
                            Explore Academics
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold py-4 px-8 rounded-lg backdrop-blur-sm transition-all">
                            Virtual Tour
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/60"
            >
                <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0 animate-pulse" />
            </motion.div>
        </div>
    );
};

export default Hero;
