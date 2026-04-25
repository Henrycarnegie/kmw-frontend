import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

const StatCard = ({ icon: Icon, label, value, colorClass }: { icon: LucideIcon, label: string, value: string, colorClass: string }) => (
   <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4"
   >
      <div className={`p-3 rounded-xl ${colorClass}`}>
         <Icon className="size-6" />
      </div>
      <div>
         <p className="text-xs text-gray-500 font-medium">{label}</p>
         <h3 className="text-xl font-bold text-gray-900">{value}</h3>
      </div>
   </motion.div>
);

export default StatCard