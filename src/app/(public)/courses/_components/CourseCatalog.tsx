"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, BookOpen } from 'lucide-react';
import CatalogCourseCard from '@/src/app/(public)/courses/_components/CatalogCourseCard';
import Button from '@/src/components/ui/Button';
import { Course } from '@/src/types/course';

const CATEGORIES = ["All", "Free Courses", "Paid Courses"];

interface CourseCatalogProps {
    initialCourses: Course[];
}

const CourseCatalog = ({ initialCourses }: CourseCatalogProps) => {
    const [activeTab, setActiveTab] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCourses = initialCourses.filter(course => {
        const matchesTab = 
            activeTab === "All" || 
            (activeTab === "Free Courses" && course.is_published) || 
            (activeTab === "Paid Courses" && !course.is_published);
        
        const matchesSearch = 
            course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.description.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesTab && matchesSearch;
    });

    return (
        <>
            {/* Filter & Search Bar */}
            <section className="sticky top-20 z-40 px-5 md:px-10 -mt-12">
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/80 backdrop-blur-sm border border-gray-100 shadow-lg rounded-3xl p-2 md:p-4 flex flex-col md:flex-row gap-4 items-center justify-between"
                    >
                        {/* Tabs */}
                        <div className="flex bg-gray-50 p-1.5 rounded-2xl w-full md:w-auto">
                            {CATEGORIES.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveTab(category)}
                                    className={`flex-1 md:flex-none px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                                        activeTab === category 
                                            ? "bg-white text-sky-600 shadow-sm" 
                                            : "text-gray-500 hover:text-gray-800"
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Search */}
                        <div className="relative w-full md:max-w-md group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400 group-focus-within:text-sky-500 transition-colors" />
                            <input 
                                type="text" 
                                placeholder="Search for courses..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Course Grid */}
            <section className="max-w-7xl mx-auto px-5 md:px-10 py-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold text-gray-900">Available Courses</h2>
                        <p className="text-gray-500">Showing {filteredCourses.length} courses tailored for you</p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm font-bold text-gray-400">
                        <SlidersHorizontal className="size-4" />
                        Sort By: <span className="text-gray-900 ml-1">Newest First</span>
                    </div>
                </div>

                {filteredCourses.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode='popLayout'>
                            {filteredCourses.map((course, index) => (
                                <motion.div
                                    key={course.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    <CatalogCourseCard {...course} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                ) : (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-20 text-center space-y-4 bg-gray-50 rounded-4xl border-2 border-dashed border-gray-200"
                    >
                        <div className="bg-white size-16 rounded-full flex items-center justify-center mx-auto shadow-sm border border-gray-100">
                            <BookOpen className="size-8 text-gray-300" />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-xl font-bold text-gray-900">No courses found</h3>
                            <p className="text-gray-500">Try adjusting your search or filters to find what you&apos;re looking for.</p>
                        </div>
                        <Button 
                            variant="outline" 
                            className="w-auto px-8 mx-auto mt-4"
                            onClick={() => {
                                setActiveTab("All");
                                setSearchQuery("");
                            }}
                        >
                            Clear all filters
                        </Button>
                    </motion.div>
                )}
            </section>
        </>
    );
};

export default CourseCatalog;
