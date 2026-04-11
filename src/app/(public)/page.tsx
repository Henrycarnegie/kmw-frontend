import {
   BookOpen,
   Users,
   Globe,
   HandHeart,
   Play,
   ArrowRight,
   GraduationCap,
   Star,
} from "lucide-react";
import SectionHeading from "../../components/ui/SectionHeading";
import FeatureCard from "../../components/ui/FeatureCard";
import Button from "../../components/ui/Button";
import Link from "next/link";
import * as motion from "framer-motion/client";

const Index = () => {
   const features = [
      {
         title: "Learning Management System",
         description:
            "Access a wide range of interactive modules designed to foster global awareness and emotional intelligence.",
         icon: <BookOpen className="w-7 h-7" />,
      },
      {
         title: "Community Forums",
         description:
            "Engage in enriching discussions with peers, educators, and global stakeholders to share perspectives.",
         icon: <Users className="w-7 h-7" />,
      },
      {
         title: "Webinars & Events",
         description:
            "Join live recording sessions and interactive workshops led by industry experts and global contributors.",
         icon: <Play className="w-7 h-7" />,
      },
      {
         title: "NGO & Donations",
         description:
            "Support social impact initiatives. Your contributions help spread education and actionable global change.",
         icon: <HandHeart className="w-7 h-7" />,
      },
   ];

   const stats = [
      {
         value: "50,000+",
         label: "Students Reached",
         icon: <GraduationCap className="h-8 w-8 text-blue-400 mx-auto mb-2" />,
      },
      {
         value: "120+",
         label: "Countries Connected",
         icon: <Globe className="h-8 w-8 text-blue-400 mx-auto mb-2" />,
      },
      {
         value: "2,500+",
         label: "Educators Trained",
         icon: <Users className="h-8 w-8 text-blue-400 mx-auto mb-2" />,
      },
      {
         value: "95%",
         label: "Satisfaction Rate",
         icon: <Star className="h-8 w-8 text-blue-400 mx-auto mb-2" />,
      },
   ];

   return (
      <>
         {/* HERO SECTION */}
         <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--tw-linear-stops))] from-blue-50 via-white to-white" />
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-20 filter blur-3xl pointer-events-none">
               <div className="w-[500px] h-[500px] bg-blue-400 rounded-full mix-blend-multiply" />
            </div>
            <div className="absolute top-1/3 left-0 -translate-x-1/2 opacity-20 filter blur-3xl pointer-events-none">
               <div className="w-[400px] h-[400px] bg-green-300 rounded-full mix-blend-multiply" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
               <div className="max-w-4xl mx-auto text-center">
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6 }}
                     className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-medium text-sm mb-8 border border-blue-100 shadow-sm"
                  >
                     <Globe className="w-4 h-4" />
                     <span>Connecting Individuals & Communities Globally</span>
                  </motion.div>

                  <motion.h1
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: 0.1 }}
                     className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 leading-tight"
                  >
                     Empowering Minds <br className="hidden md:block" />
                     <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-green-500">
                        Transforming Worlds
                     </span>
                  </motion.h1>

                  <motion.p
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: 0.2 }}
                     className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
                  >
                     A comprehensive NGO web platform bridging the gap between
                     education, collaboration, and continuous social impact.
                  </motion.p>

                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: 0.3 }}
                     className="flex flex-col sm:flex-row items-center justify-center gap-4"
                  >
                     <Link href="/sel_program" className="w-full sm:w-auto">
                        <Button className="flex items-center justify-center gap-2 w-full text-center hover:-translate-y-1 transition-transform group py-3 px-8 text-lg">
                           Start Learning
                           <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                     </Link>
                     <Link href="/donate" className="w-full sm:w-auto">
                        <Button
                           variant="text"
                           className="flex items-center justify-center gap-2 w-full text-center hover:-translate-y-1 transition-transform border border-gray-200 bg-white py-3 px-8 text-lg"
                        >
                           Make a Donation
                        </Button>
                     </Link>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* Stats */}
         <section className="bg-card border-y border-gray-200">
            <div className="container mx-auto px-6 py-8 md:py-10">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {stats.map((stat, i) => (
                     <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="text-center"
                     >
                        {stat.icon}
                        <p className="text-3xl md:text-4xl font-display font-bold text-foreground">
                           {stat.value}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                           {stat.label}
                        </p>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* FEATURES SECTION */}
         <section className="py-24 bg-gray-50/50">
            <div className="container mx-auto px-6">
               <SectionHeading
                  title="Everything You Need in One Place"
                  subtitle="From structured courses to active community engagement, Know My World offers all the tools you need to grow and connect."
               />

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {features.map((feature, idx) => (
                     <FeatureCard
                        key={idx}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                        delay={idx * 0.1}
                     />
                  ))}
               </div>
            </div>
         </section>

         {/* IMPACT / CTA SECTION */}
         <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-600 -z-20" />

            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-linear-stops))] from-white to-transparent mix-blend-overlay -z-10" />

            <div className="container mx-auto px-6 relative z-10">
               <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-12 rounded-[2.5rem] shadow-2xl max-w-5xl mx-auto text-center text-white">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">
                     Ready to Create a Global Impact?
                  </h2>
                  <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                     Whether you are here to learn, to teach, or to support our
                     mission, your involvement makes all the difference. Get
                     involved today.
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                     <Link href="/get-involved" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                           Join Our Community
                        </button>
                     </Link>
                     <Link href="/about" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-medium py-3 px-8 rounded-xl transition-all">
                           Learn More About Us
                        </button>
                     </Link>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Index;
