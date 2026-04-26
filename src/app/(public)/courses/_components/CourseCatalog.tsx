"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, BookOpen } from 'lucide-react';
import CatalogCourseCard from './CatalogCourseCard';
import EmptyState from '@/src/components/ui/EmptyState';
import { Course } from '@/src/types/course';
import { useFilter } from '@/src/hooks/useFilter';

const CATEGORIES = ["All", "Free Courses", "Paid Courses"];

interface CourseCatalogProps {
    initialCourses: Course[];
}

const CourseCatalog = ({ initialCourses }: CourseCatalogProps) => {
    const {
        activeTab,
        setActiveTab,
        searchQuery,
        setSearchQuery,
        filteredItems: filteredCourses,
        clearFilters
    } = useFilter<Course>({
        items: initialCourses,
        searchFields: ['title', 'description'],
        categoryRules: {
            "Free Courses": (course) => course.is_published, // Note: Logic from original code
            "Paid Courses": (course) => !course.is_published,
        }
    });

    return (
        <>
            {/* Filter & Search Bar */}
            <section className="sticky top-16 md:top-20 z-40 px-4 md:px-10 -mt-10 md:mt-12">
                <div className="max-w-7xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/80 backdrop-blur-sm border border-gray-100 shadow-lg rounded-2xl md:rounded-3xl p-3 md:p-4 flex flex-col lg:flex-row gap-4 items-center justify-between"
                    >
                        {/* Tabs */}
                        <div className="flex bg-gray-50 p-1.5 rounded-xl md:rounded-2xl w-full lg:w-auto overflow-x-auto no-scrollbar">
                            {CATEGORIES.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveTab(category)}
                                    className={`flex-1 lg:flex-none whitespace-nowrap px-4 md:px-6 py-2 md:py-2.5 rounded-lg md:rounded-xl text-xs md:text-sm font-bold transition-all duration-300 ${
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
                        <div className="relative w-full lg:max-w-md group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 md:size-5 text-gray-400 group-focus-within:text-sky-500 transition-colors" />
                            <input 
                                type="text" 
                                placeholder="Search for courses..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 md:pl-12 pr-4 py-3 md:py-3.5 bg-gray-50 border border-gray-100 rounded-xl md:rounded-2xl text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Course Grid */}
            <section className="max-w-7xl mx-auto px-5 md:px-10 py-10 md:py-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4 md:gap-6">
                    <div className="space-y-1 md:space-y-2">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Available Courses</h2>
                        <p className="text-sm md:text-base text-gray-500">Showing {filteredCourses.length} courses tailored for you</p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-gray-400">
                        <SlidersHorizontal className="size-3 md:size-4" />
                        Sort By: <span className="text-gray-900 ml-1">Newest First</span>
                    </div>
                </div>

                {filteredCourses.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
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
                    <EmptyState 
                        icon={BookOpen}
                        title="No courses found"
                        description="Try adjusting your search or filters to find what you're looking for."
                        actionLabel="Clear all filters"
                        onAction={clearFilters}
                    />
                )}
            </section>
        </>
    );
};

export default CourseCatalog;
