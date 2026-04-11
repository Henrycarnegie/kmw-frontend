import SectionHeading from "../../../components/ui/SectionHeading";
import * as motion from "framer-motion/client";
import { BookOpen, Star, Clock, ArrowRight } from "lucide-react";
import Button from "../../../components/ui/Button";
import Link from "next/link";
import Badge from "@/src/components/ui/Badge";

const courses = [
   {
      title: "Foundations of Global Awareness",
      description:
         "Learn the core concepts of cultural exchange and how to develop a broader perspective.",
      duration: "4 weeks",
      level: "Beginner",
      rating: 4.8,
   },
   {
      title: "Social Emotional Learning in Practice",
      description:
         "Practical steps to integrate SEL into daily routines and educational frameworks.",
      duration: "6 weeks",
      level: "Intermediate",
      rating: 4.9,
   },
   {
      title: "Community Leadership Lab",
      description:
         "Build the skills needed to lead community-driven social impact projects.",
      duration: "8 weeks",
      level: "Advanced",
      rating: 4.7,
   },
];

export default function SELProgramPage() {
   return (
      <>
         {/* Hero Header */}
         <div className="bg-blue-900 text-white py-20 relative overflow-hidden">
            {/* Abstract Background pattern */}
            <div
               className="absolute inset-0 opacity-10"
               style={{
                  backgroundImage:
                     "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                  backgroundSize: "32px 32px",
               }}
            />

            <div className="container mx-auto px-6 relative z-10 text-center">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
               >
                  <span className="text-blue-300 font-semibold tracking-wider uppercase text-sm mb-4 block">
                     Learning Management System
                  </span>
                  <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                     SEL Programs & Courses
                  </h1>
                  <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                     Expand your knowledge with our structured courses. Track
                     your progress, download materials, and earn certificates.
                  </p>
               </motion.div>
            </div>
         </div>

         {/* Courses Grid */}
         <section className="py-20 bg-gray-50 min-h-[50vh]">
            <div className="container mx-auto px-6 max-w-6xl">
               <SectionHeading
                  title="Discover Our Catalog"
                  subtitle="Browse through our curated collection of programs designed to empower and educate."
               />

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                  {courses.map((course, idx) => (
                     <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white border text-left border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col"
                     >
                        <div className="h-48 bg-linear-to-br from-blue-100 to-green-50 flex items-center justify-center">
                           <BookOpen className="w-16 h-16 text-blue-300" />
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                           <div className="flex items-center justify-between mb-3">
                              <Badge variant={course.level}>{course.level}</Badge>
                              <div className="flex items-center text-yellow-500 text-sm font-medium">
                                 <Star className="w-4 h-4 fill-current mr-1" />
                                 {course.rating}
                              </div>
                           </div>

                           <h3 className="text-xl font-bold text-gray-900 mb-2">
                              {course.title}
                           </h3>
                           <p className="text-gray-600 text-sm mb-6 flex-1">
                              {course.description}
                           </p>

                           <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                              <div className="flex items-center text-gray-500 text-sm">
                                 <Clock className="w-4 h-4 mr-2" />
                                 {course.duration}
                              </div>
                              <Link href="#">
                                 <Button variant="text" className="font-semibold text-blue-600! hover:text-blue-800 hover:bg-transparent! flex items-center">
                                    Enroll{" "}
                                    <ArrowRight className="w-4 h-4 ml-1" />
                                 </Button>
                              </Link>
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </div>

               <div className="mt-16 text-center">
                  <Button
                     variant="secondary"
                     className="px-8 w-auto! inline-block"
                  >
                     View All Courses
                  </Button>
               </div>
            </div>
         </section>
      </>
   );
}
