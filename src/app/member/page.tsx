"use client";

import Searchbar from "@/src/components/ui/Searchbar";
import { 
   BookOpen, 
   CheckCircle, 
   Clock, 
   Trophy, 
   ChevronRight,
   Bell
} from "lucide-react";
import Button from "@/src/components/ui/Button";
import Badge from "@/src/components/ui/Badge";
import Image from "next/image";
import StatCard from "@/src/components/ui/StatCard";
import CourseCard from "@/src/components/ui/CourseCard";

const ActivityItem = ({ title, time, type }: { title: string, time: string, type: string }) => (
   <div className="flex gap-4 items-start py-3 border-b border-gray-50 last:border-0">
      <div className="size-2 mt-2 rounded-full bg-sky-500 shrink-0" />
      <div>
         <p className="text-sm text-gray-800 font-medium">{title}</p>
         <div className="flex items-center gap-2 mt-1">
            <span className="text-[10px] uppercase font-bold text-gray-400">{type}</span>
            <span className="text-[10px] text-gray-400">•</span>
            <span className="text-[10px] text-gray-400">{time}</span>
         </div>
      </div>
   </div>
);

const Page = () => {
   return (
      <div className="max-w-7xl mx-auto space-y-8">
         {/* Header Section */}
         <header className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
               {/* User Profile Block */}
               <div className="size-14 rounded-full bg-sky-100 border-2 border-white shadow-sm overflow-hidden shrink-0 relative">
                  <Image 
                     src="/user-alex.png" 
                     alt="Alex Graham" 
                     fill 
                     className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-sky-600 font-bold text-xl bg-sky-100">
                     A
                  </div>
               </div>
               <div>
                  <div className="flex items-center gap-3">
                     <h1 className="text-2xl font-bold text-gray-900">Alex Graham</h1>
                     <Badge variant="active" className="px-2 py-0.5">Free Plan</Badge>
                  </div>
                  <p className="text-gray-500 text-sm">Continue your learning journey! 🚀</p>
               </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
               <div className="w-full sm:w-80">
                  <Searchbar />
               </div>
            </div>
         </header>

         {/* Stats Grid */}
         <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard  
               icon={BookOpen} 
               label="In Progress" 
               value="4 Courses" 
               colorClass="bg-blue-50 text-blue-600" 
            />
            <StatCard 
               icon={CheckCircle} 
               label="Completed" 
               value="12 Courses" 
               colorClass="bg-emerald-50 text-emerald-600" 
            />
            <StatCard 
               icon={Clock} 
               label="Learning Hours" 
               value="56 Hours" 
               colorClass="bg-amber-50 text-amber-600" 
            />
            <StatCard 
               icon={Trophy} 
               label="Achievements" 
               value="8 Badges" 
               colorClass="bg-purple-50 text-purple-600" 
            />
         </section>

         {/* Main Content Grid */}
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Courses */}
            <div className="lg:col-span-2 space-y-6">
               <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">Continue Learning</h2>
                  <Button variant="text" size="sm" className="w-fit! text-sky-600 font-semibold">
                     View All <ChevronRight className="size-4" />
                  </Button>
               </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <CourseCard
                     title="Mastering Modern Web Development with React"
                     instructor="Sarah Johnson"
                     progress={75}
                     thumbnail="/logo.png"
                  />
                  <CourseCard 
                     title="Advanced Data Structures and Algorithms"
                     instructor="Prof. Michael Chen"
                     progress={30}
                     thumbnail="/logo.png"
                  />
               </div>
            </div>

            {/* Right Column: Activity & Notifications */}
            <div className="space-y-6">
               <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                     <h2 className="text-lg font-bold text-gray-900">Recent Activity</h2>
                     <Bell className="size-5 text-gray-400" />
                  </div>
                  <div className="space-y-2">
                     <ActivityItem 
                        title="You completed 'Intro to Tailwind CSS'"
                        time="2 hours ago"
                        type="Course"
                     />
                     <ActivityItem 
                        title="New assignment posted in 'React Masterclass'"
                        time="5 hours ago"
                        type="Update"
                     />
                     <ActivityItem 
                        title="Quiz result: 95/100 in 'JS Fundamentals'"
                        time="Yesterday"
                        type="Quiz"
                     />
                     <ActivityItem 
                        title="You earned a 'Fast Learner' badge"
                        time="2 days ago"
                        type="Badge"
                     />
                  </div>
                  <Button variant="outline" className="mt-6 w-full" size="sm">
                     View History
                  </Button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Page;
