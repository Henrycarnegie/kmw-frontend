import * as motion from "framer-motion/client";
import { BookOpen, Search } from "lucide-react";
import Button from "../../../components/ui/Button";
import BlogCard from "@/src/components/ui/BlogCard";

export default function BlogPage() {
   return (
      <>
         {/* Hero Header */}
         <div className="relative bg-gray-50 py-12 overflow-hidden">
            <div className="absolute top-0 left-0 translate-y-10 -translate-x-1/4 opacity-10 filter blur-3xl pointer-events-none">
               <div className="w-[400px] h-[400px] bg-purple-500 rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
               >
                  <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-full mb-6">
                     <BookOpen size={28} />
                  </div>
                  <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
                     Latest Article
                  </h1>
                  <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                     Explore our latest articles, updates, and resources on
                     social-emotional learning, cross-cultural exchange, and
                     global education.
                  </p>

                  {/* Search bar mock */}
                  <div className="max-w-xl mx-auto flex items-center bg-white p-2 rounded-2xl shadow-sm border border-gray-200">
                     <div className="pl-4 text-gray-400">
                        <Search size={20} />
                     </div>
                     <input
                        type="text"
                        placeholder="Search topics, authors, or keywords..."
                        className="w-full px-4 py-3 outline-none text-gray-700 bg-transparent"
                     />
                     <Button className="w-auto! shrink-0 px-6 py-3 rounded-xl">
                        Search
                     </Button>
                  </div>
               </motion.div>
            </div>
         </div>

         {/* Blog Grid Section */}
         <section className="py-14 bg-white relative">
            <div className="container mx-auto px-6 max-w-7xl">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.map((post, idx) => (
                     <BlogCard key={post.title} delayTime={idx} {...post} />
                  ))}
               </div>

               <div className="mt-16 text-center">
                  <Button
                     variant="outline"
                     className="w-auto! px-8 py-3 mx-auto border-2 text-gray-700 hover:bg-gray-50"
                  >
                     Load More Articles
                  </Button>
               </div>
            </div>
         </section>

         {/* Newsletter Section */}
         <section className="py-20 bg-blue-600 border-t border-gray-100">
            <div className="container mx-auto px-6 max-w-4xl text-center">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
               >
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                     Stay Updated with Our Newsletter
                  </h2>
                  <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                     Get the latest articles, resources, and event invitations
                     delivered directly to your inbox every month.
                  </p>

                  <div className="flex flex-col sm:flex-row w-full max-w-lg mx-auto gap-4">
                     <div className="flex-1">
                        <input
                           type="email"
                           placeholder="Your email address"
                           className="w-full px-6 py-4 rounded-xl outline-none text-gray-900 bg-white"
                        />
                     </div>
                     <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition-colors shrink-0">
                        Subscribe
                     </button>
                  </div>
               </motion.div>
            </div>
         </section>
      </>
   );
}

const blogPosts = [
   {
      title: "Empowering Next Generation Leaders",
      excerpt:
         "Discover how our recent workshop in Kenya impacted over 200 students by integrating social-emotional learning into their daily curriculum.",
      date: "April 10, 2026",
      author: "Sarah Jenkins",
      category: "Field Notes",
      color: "bg-blue-100 text-blue-600",
   },
   {
      title: "The Importance of Cross-Cultural Exchange",
      excerpt:
         "How connecting students across continents fosters deeper empathy and understanding in an increasingly interconnected world.",
      date: "April 02, 2026",
      author: "David Chen",
      category: "Education",
      color: "bg-purple-100 text-purple-600",
   },
   {
      title: "5 Strategies for Inclusive Classrooms",
      excerpt:
         "Actionable tips for educators to create a learning environment where every student feels seen, heard, and valued.",
      date: "March 28, 2026",
      author: "Maria Garcia",
      category: "Resources",
      color: "bg-green-100 text-green-600",
   },
   {
      title: "A Year in Review: Impact Report 2025",
      excerpt:
         "Looking back at our milestones, the communities we've served, and the global goals we strive towards in the coming year.",
      date: "March 15, 2026",
      author: "Know My World Team",
      category: "Impact",
      color: "bg-sky-100 text-sky-600",
   },
   {
      title: "Design Thinking in Social Studies",
      excerpt:
         "Integrating design thinking frameworks into traditional subjects to encourage active problem solving among young learners.",
      date: "February 20, 2026",
      author: "James Wilson",
      category: "Curriculum",
      color: "bg-orange-100 text-orange-600",
   },
   {
      title: "Teacher Spotlight: Voices from the Classroom",
      excerpt:
         "Hear from educators who have successfully transformed their teaching practice using our virtual exchange platform.",
      date: "February 05, 2026",
      author: "Emily Clark",
      category: "Community",
      color: "bg-rose-100 text-rose-600",
   },
];
