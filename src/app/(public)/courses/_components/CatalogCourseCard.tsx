"use client";

import { motion } from "framer-motion";
import Button from '@/src/components/ui/Button';
import { ChevronRight, Clock, User } from 'lucide-react';
import Badge from '@/src/components/ui/Badge';
import Link from 'next/link';
import { formatDate } from '@/src/lib/date';
import { Course } from '@/src/types/course';

const CatalogCourseCard = ({ 
    id,
    title, 
    description, 
    language,
    is_published,
    createdAt,
    publishedAt,
}: Course) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group bg-white rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 h-full"
    >
        <div className="h-48 md:h-52 bg-gray-100 relative overflow-hidden">
            {/* Thumbnail Placeholder */}
            <div className="absolute inset-0 bg-sky-50 flex items-center justify-center">
                <BookOpen className="size-10 text-sky-200" />
            </div>
            
            <div className="absolute top-3 left-3 md:top-4 md:left-4 flex gap-2 flex-wrap">
                <Badge variant="active" className="backdrop-blur-md bg-white/90 border-none shadow-sm text-[10px] md:text-xs">
                    {language}
                </Badge>
                {is_published && (
                    <Badge variant="secondary" className="backdrop-blur-md bg-green-500/90 text-white border-none shadow-sm font-bold text-[10px] md:text-xs">
                        Published
                    </Badge>
                )}
            </div>
        </div>

        <div className="p-4 md:p-6 flex-1 flex flex-col">
            <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3 text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                <span className="flex items-center gap-1">
                    <Clock className="size-3" /> {formatDate(publishedAt)}
                </span>
                <span className="flex items-center gap-1">
                    <User className="size-3" /> {formatDate(createdAt)}
                </span>
            </div>

            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-sky-600 transition-colors leading-tight">
                {title}
            </h3>
            
            <p className="text-xs md:text-sm text-gray-500 line-clamp-2 mb-4 md:mb-6 flex-1">
                {description}
            </p>
            
            <div className="pt-3 md:pt-4 border-t border-gray-50 flex items-center justify-between mt-auto">
                <Link href={`/courses/${id}`} className="w-full">
                    <Button variant={"primary"} className="w-full justify-between group/btn text-xs md:text-sm h-10 md:h-11">
                        {"Start Learning"}
                        <ChevronRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                </Link>
            </div>
        </div>
    </motion.div>
);

import { BookOpen } from "lucide-react";

export default CatalogCourseCard;
