"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const CourseHero = () => {
    return (
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-sky-50 to-transparent -z-10" />
            <div className="absolute -top-24 -right-24 w-64 h-64 md:w-96 md:h-96 bg-sky-200/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 -left-24 w-48 h-48 md:w-72 md:h-72 bg-blue-200/20 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-5 md:px-10">
                <div className="text-center space-y-4 md:space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-sky-100 text-sky-700 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase"
                    >
                        <GraduationCap className="size-3 md:size-4" />
                        Learning Excellence
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight max-w-4xl mx-auto"
                    >
                        Empower Your Future with <br className="hidden sm:block" />
                        <span className="text-sky-600">Expert-Led Courses</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-sm md:text-lg text-gray-500 max-w-2xl mx-auto px-4"
                    >
                        Access world-class education from anywhere. Start your journey today with our curated selection of professional courses.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default CourseHero;
