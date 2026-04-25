import Image from 'next/image';
import { motion } from "framer-motion";
import Button from './Button';
import { ChevronRight } from 'lucide-react';

const CourseCard = ({ title, progress, instructor, thumbnail }: { title: string, progress: number, instructor: string, thumbnail: string }) => (
   <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300">
      <div className="h-44 bg-gray-100 relative overflow-hidden">
         <Image 
            width={1000}
            height={1000}
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
               (e.target as HTMLImageElement).src = "https://placehold.co/600x400/e2e8f0/64748b?text=Course+Thumbnail";
            }}
         />
         <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
         <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-sky-600 uppercase tracking-wider">
            {progress === 100 ? "Completed" : "In Progress"}
         </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
         <h4 className="font-bold text-gray-900 mb-1 line-clamp-2 group-hover:text-sky-600 transition-colors">{title}</h4>
         <p className="text-sm text-gray-500 mb-4 flex items-center gap-1">
            by <span className="text-sm font-medium text-gray-700">{instructor}</span>
         </p>
         
         <div className="mt-auto">
            <div className="flex justify-between items-center mb-2">
               <span className="text-xs font-semibold text-gray-400">Progress</span>
               <span className="text-xs font-bold text-sky-600">{progress}%</span>
            </div>
            <div className="w-full bg-gray-100 h-1.5 rounded-full mb-5 overflow-hidden">
               <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="bg-sky-500 h-full rounded-full"
               />
            </div>
            <Button variant={progress === 100 ? "active" : "outline"} size="sm" className="w-full justify-between">
               {progress === 100 ? "Review Course" : "Continue Lesson"}
               <ChevronRight className="size-4" />
            </Button>
         </div>
      </div>
   </div>
);

export default CourseCard