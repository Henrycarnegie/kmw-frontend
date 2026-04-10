import Layout from "../../components/layout/Layout";
import SectionHeading from "../../components/ui/SectionHeading";
import * as motion from "framer-motion/client";
import { Target, Users, Lightbulb, Handshake, GlobeIcon } from "lucide-react";

export default function AboutPage() {
   const studentValues = [
      {
         title: "Global Citizenship",
         description:
            "Students develop an understanding of their role in the world and their responsibility to others.",
         icon: GlobeIcon,
      },
      {
         title: "Cultural Awareness and Sensitivity",
         description:
            "Students gain exposure to diverse perspectives, traditions, and ways of life, fostering respect and understanding for global diversity.",
         icon: GlobeIcon,
      },
      {
         title: "Conscious Communication",
         description:
            "Students develop skills in active listening, perspective-taking, and respectful dialogue, enhancing their ability to connect meaningfully with others.",
         icon: Lightbulb,
      },
      {
         title: "Positive Relationship Building",
         description:
            "Students build meaningful connections with peers from different backgrounds, developing empathy, trust, and a sense of global community.",
         icon: Users,
      },
      {
         title: "Critical Thinking",
         description:
            "Students analyze information from multiple perspectives, challenge assumptions, and develop reasoned judgments about global issues.",
         icon: Handshake,
      },
      {
         title: "Problem Solving",
         description:
            "Students apply creative thinking and collaborative strategies to address real-world challenges, developing innovative solutions and a sense of agency.",
         icon: Handshake,
      },
   ];

   const profesionalValues = [
      {
         title: "Research-Based Content",
         description:
            "All programs are grounded in research-based content and best practices in social, emotional, and cultural learning.",
         icon: GlobeIcon,
      },
      {
         title: "Resource Training",
         description:
            "Teachers receive comprehensive training on how to effectively use program resources and integrate social, emotional, and cultural learning into their teaching.",
         icon: GlobeIcon,
      },
      {
         title: "Integrating Social, Emotional, and Cultural Competencies Into Your Curriculum",
         description:
            "Teachers learn how to seamlessly integrate social, emotional, and cultural competencies into their existing curriculum through practical strategies and activities.",
         icon: Lightbulb,
      },
      {
         title: "Classroom Application Through Best Practices",
         description:
            "Teachers apply best practices in social, emotional, and cultural learning to create inclusive and supportive classroom environments.",
         icon: Users,
      },
      {
         title: "Coaching Support",
         description:
            "Teachers receive ongoing coaching support to enhance their skills in social, emotional, and cultural learning.",
         icon: Handshake,
      },
      {
         title: "Facilitated Cross-Cultural Virtual Exchange",
         description:
            "Students engage in facilitated cross-cultural virtual exchanges to develop global awareness and intercultural understanding.",
         icon: Handshake,
      },
      {
         title: "Project Based Learning Using Design Thinking",
         description:
            "Students apply design thinking principles to project-based learning experiences that address real-world challenges.",
         icon: Handshake,
      },
      {
         title: "Certificate of Completion",
         description:
            "Teachers receive a certificate of completion upon successful participation in the program.",
         icon: Handshake,
      },
   ];

   return (
      <Layout>
         {/* Hero Header */}
         <div className="relative bg-gray-50 py-20 overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 opacity-10 filter blur-3xl pointer-events-none">
               <div className="w-[400px] h-[400px] bg-blue-500 rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
               >
                  <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
                     About Know My World
                  </h1>
                  <p className="text-xl text-gray-600 max-w-7xl mx-auto">
                     As global educators, the co-founders of Know My World always understood that educating a child went far beyond their academic abilities. We established this organization in 2010 with a mission to support the cultivation of social, emotional, and cultural competencies in classrooms around the world. We believe that every child, when guided, and provided the right opportunities, is able to tap into their full potential and create meaningful contributions to the world.
                  </p>
               </motion.div>
            </div>
         </div>

         {/* Mission Section */}
         <section className="py-20">
            <div className="container mx-auto px-6">
               <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
                  <motion.div
                     initial={{ opacity: 0, x: -30 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="flex-1"
                  >
                     <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                        <Target size={32} />
                     </div>
                     <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        What Do We Do?
                     </h2>
                     <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        Know My World delivers research-based professional development training for educators, both online and in person, focused on building social, emotional, and cultural competencies. We help teachers apply these skills in their own lives and integrate them into student learning through best-practice educational approaches. 
                     </p>
                     <p className="text-lg text-gray-600 leading-relaxed">
                        Additionally, we facilitate student-centered virtual cross-cultural exchange programs that connect classrooms globally through digital journaling, Design Thinking, and project-based learning—empowering educators and students to deepen self-awareness, expand cultural understanding, and create meaningful social impact.
                     </p>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, x: 30 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="flex-1 w-full relative"
                  >
                     <div className="aspect-square md:aspect-auto md:h-[500px] bg-gray-200 rounded-3xl overflow-hidden relative shadow-2xl">
                        {/* Placeholder for an Image */}
                        <div className="absolute inset-0 bg-linear-to-br from-blue-300 to-green-200 flex items-center justify-center">
                           <GlobeIcon className="w-32 h-32 text-white/50" />
                        </div>
                     </div>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* Values Section */}
         <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
               <SectionHeading
                  title="Our Student Virtual Cross-Cultural Exchange Experiences incorporate"
                  subtitle=""
               />

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                  {studentValues.map((item, idx) => (
                     <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow text-center"
                     >
                        <div className="mx-auto w-14 h-14 bg-blue-50 text-blue-600 flex items-center justify-center rounded-xl mb-6">
                           <item.icon size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* Values Section */}
         <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
               <SectionHeading
                  title="Our Professional Development Training Programs Includes"
                  subtitle=""
               />

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                  {profesionalValues.map((item, idx) => (
                     <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow text-center"
                     >
                        <div className="mx-auto w-14 h-14 bg-blue-50 text-blue-600 flex items-center justify-center rounded-xl mb-6">
                           <item.icon size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>
      </Layout>
   );
}
