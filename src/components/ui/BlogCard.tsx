import * as motion from "framer-motion/client";
import { ArrowRight, BookOpen, Calendar, User } from "lucide-react";

interface BlogCardProps {
    delayTime: number,
    title: string,
    excerpt: string,
    author: string,
    date: string,
    category: string,
    color: string,
}

const BlogCard = ({delayTime, title, excerpt, author, date, category, color}: BlogCardProps) => {
   return (
      <motion.div
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ delay: delayTime * 0.1 }}
         whileHover={{ y: -8 }}
         className="bg-white rounded-4xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full"
      >
         {/* Mock Image Area */}
         <div className="h-48 bg-gray-100 relative">
            <div className="absolute top-4 left-4">
               <span
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg ${color}`}
               >
                  {category}
               </span>
            </div>
            <div className="absolute inset-0 bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center opacity-50">
               <BookOpen className="w-12 h-12 text-gray-400" />
            </div>
         </div>

         <div className="p-8 flex flex-col flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-snug line-clamp-2">
               {title}
            </h3>
            <p className="text-gray-600 mb-6 flex-1 line-clamp-3">
               {excerpt}
            </p>

            <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-auto">
               <div className="flex flex-col gap-1">
                  <div className="flex items-center text-sm font-medium text-gray-900">
                     <User size={14} className="mr-2 text-gray-400" />
                     {author}
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                     <Calendar size={14} className="mr-2 opacity-70" />
                     {date}
                  </div>
               </div>
               <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                  <ArrowRight size={18} />
               </button>
            </div>
         </div>
      </motion.div>
   );
};

export default BlogCard;
