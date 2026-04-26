"use client";

import Image from 'next/image';
import { motion } from "framer-motion";
import Button from './Button';
import { ChevronRight, Clock, User } from 'lucide-react';
import Badge from './Badge';
import Link from 'next/link';

interface CatalogCourseCardProps {
   id: number;
   documentId: number;
   title: string;
   description: string;
   language: string;
   is_published: boolean;
   createdAt: string;
   updatedAt: string;
   publishedAt: string;
}

const CatalogCourseCard = ({ 
   id,
   title, 
   description, 
   language,
   is_published,
   createdAt,
   publishedAt,
}: CatalogCourseCardProps) => (
   <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300"
   >
      <div className="h-52 bg-gray-100 relative overflow-hidden">
         {/* <Image
            width={1000}
            height={1000}
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            priority={id <= 3}
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
         
         <div className="absolute top-4 left-4 flex gap-2">
            <Badge variant="active" className="backdrop-blur-md bg-white/90 border-none shadow-sm">
               {language}
            </Badge>
            {is_published && (
               <Badge variant="secondary" className="backdrop-blur-md bg-green-500/90 text-white border-none shadow-sm font-bold">
                  Published
               </Badge>
            )}
         </div>

         {/* {!isFree && price && (
            <div className="absolute bottom-4 right-4">
               <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg shadow-sm font-bold text-sky-600 text-sm">
                  ${price}
               </div>
            </div>
         )} */}
      </div>

      <div className="p-6 flex-1 flex flex-col">
         <div className="flex items-center gap-4 mb-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <span className="flex items-center gap-1">
               <Clock className="size-3" /> {publishedAt}
            </span>
            <span className="flex items-center gap-1">
               <User className="size-3" /> {createdAt}
            </span>
         </div>

         <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-sky-600 transition-colors leading-tight">
            {title}
         </h3>
         
         <p className="text-sm text-gray-500 line-clamp-2 mb-6 flex-1">
            {description}
         </p>
         
         <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
            <Link href={`/courses/${id}`} className="w-full">
               <Button variant={"primary"} className="w-full justify-between group/btn">
                  {"Start Learning"}
                  <ChevronRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
               </Button>
            </Link>
         </div>
      </div>
   </motion.div>
);

export default CatalogCourseCard;
