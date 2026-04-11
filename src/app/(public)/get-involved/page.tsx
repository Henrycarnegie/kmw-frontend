import SectionHeading from "../../../components/ui/SectionHeading";
import * as motion from "framer-motion/client";
import { CalendarDays, MessageSquare, Handshake } from "lucide-react";
import Button from "../../../components/ui/Button";
import TextInput from "@/src/components/ui/TextInput";

export default function GetInvolvedPage() {
   return (
      <>
         {/* Collaborative Hero section */}
         <div className="relative bg-white py-20 pb-32">
            <div className="container mx-auto px-6 text-center max-w-4xl">
               <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
               >
                  <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                     Join the <span className="text-blue-600">Movement</span>
                  </h1>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                     Be a part of our global network. Whether as an instructor,
                     stakeholder, or a passionate learner, your voice matters
                     here.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                     <Button className="w-auto! px-8 py-3 text-lg">
                        Become a Member
                     </Button>
                     <Button
                        variant="text"
                        className="w-auto! px-8 py-3 text-lg border"
                     >
                        Partner With Us
                     </Button>
                  </div>
               </motion.div>
            </div>
         </div>

         {/* Ways to get involved */}
         <section className="py-20 relative bg-gray-50 border-t border-gray-100">
            {/* Decorative Top overlap */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-6">
               <div className="bg-blue-600 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between shadow-2xl text-white">
                  <div className="mb-4 md:mb-0">
                     <h3 className="text-2xl font-bold mb-2">
                        Join our membership
                     </h3>
                     <p className="text-blue-100">
                        Get the latest updates on webinars and courses.
                     </p>
                  </div>
                  <div className="flex w-full md:w-auto">
                     <TextInput name="email" type="email" placeholder="Your email address" className="rounded-r-none"/>
                     <button className="bg-gray-900 px-6 py-3 rounded-r-lg font-bold hover:bg-black transition-colors">
                        Subscribe
                     </button>
                  </div>
               </div>
            </div>

            <div className="container mx-auto px-6 pt-24 max-w-6xl">
               <SectionHeading title="Ways You Can Contribute" />

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Community Forums */}
                  <motion.div
                     whileHover={{ y: -5 }}
                     className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
                  >
                     <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                        <MessageSquare size={24} />
                     </div>
                     <h3 className="text-xl font-bold mb-3">
                        Community Forums
                     </h3>
                     <p className="text-gray-600 mb-6">
                        Participate in dedicated topic-based discussions. Share
                        your local perspectives on global issues.
                     </p>
                     <a
                        href="#"
                        className="font-bold text-purple-600 hover:text-purple-800"
                     >
                        Browse Forums &rarr;
                     </a>
                  </motion.div>

                  {/* Webinars & Events */}
                  <motion.div
                     whileHover={{ y: -5 }}
                     className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
                  >
                     <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center mb-6">
                        <CalendarDays size={24} />
                     </div>
                     <h3 className="text-xl font-bold mb-3">
                        Webinars & Events
                     </h3>
                     <p className="text-gray-600 mb-6">
                        Register for live interactive sessions with educators
                        and global impact leaders.
                     </p>
                     <a
                        href="#"
                        className="font-bold text-sky-600 hover:text-sky-800"
                     >
                        View Events Calendar &rarr;
                     </a>
                  </motion.div>

                  {/* Mentorship / Instructor */}
                  <motion.div
                     whileHover={{ y: -5 }}
                     className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
                  >
                     <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                        <Handshake size={24} />
                     </div>
                     <h3 className="text-xl font-bold mb-3">
                        Become an Instructor
                     </h3>
                     <p className="text-gray-600 mb-6">
                        Have an expertise in SEL or global issues? Host your own
                        structured courses on our platform.
                     </p>
                     <a
                        href="#"
                        className="font-bold text-green-600 hover:text-green-800"
                     >
                        Apply to Teach &rarr;
                     </a>
                  </motion.div>
               </div>
            </div>
         </section>
      </>
   );
}
