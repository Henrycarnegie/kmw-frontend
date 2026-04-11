"use client";

import * as motion from "framer-motion/client";
import { Heart, CreditCard, ShieldCheck } from "lucide-react";
import Button from "../../../components/ui/Button";
import { useState } from "react";
import TextInput from "@/src/components/ui/TextInput";

export default function DonatePage() {
   const [amount, setAmount] = useState<number | null>(50);
   const [customAmount, setCustomAmount] = useState("");
   const [isRecurring, setIsRecurring] = useState(false);

   const presetAmounts = [25, 50, 100, 250];

   return (
      <>
         <div className="bg-gray-50 py-20 min-h-screen flex items-center">
            <div className="container mx-auto px-6 max-w-6xl">
               <div className="flex flex-col lg:flex-row gap-16 items-center">
                  {/* Left Side Content */}
                  <div className="flex-1 text-center lg:text-left">
                     <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                     >
                        <div className="inline-flex items-center justify-center p-3 bg-red-100 text-red-500 rounded-full mb-6">
                           <Heart className="w-8 h-8 fill-current" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                           Support Global Education & Empathy
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                           Your contribution directly funds transparent social
                           impact initiatives, allowing more learners to access
                           our SEL programs and expand their worldview.
                        </p>

                        <div className="flex items-center gap-4 text-left bg-white p-4 rounded-2xl border border-gray-100 shadow-sm max-w-sm mx-auto lg:mx-0">
                           <ShieldCheck className="w-10 h-10 text-green-500 shrink-0" />
                           <div>
                              <h4 className="font-bold text-gray-900">
                                 Secure & Transparent
                              </h4>
                              <p className="text-sm text-gray-500">
                                 100% of your donation goes directly to our
                                 registered initiatives.
                              </p>
                           </div>
                        </div>
                     </motion.div>
                  </div>

                  {/* Right Side Form */}
                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: 0.2 }}
                     className="flex-1 w-full max-w-md"
                  >
                     <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100">
                        {/* Donation Type Selection */}
                        <div className="flex bg-gray-100 p-1 rounded-xl mb-8">
                           <button
                              onClick={() => setIsRecurring(false)}
                              className={`flex-1 py-2 font-semibold text-sm rounded-lg transition-colors ${!isRecurring ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900"}`}
                           >
                              Give Once
                           </button>
                           <button
                              onClick={() => setIsRecurring(true)}
                              className={`flex-1 py-2 font-semibold text-sm rounded-lg transition-colors flex items-center justify-center gap-2 ${isRecurring ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900"}`}
                           >
                              <Heart className="w-4 h-4" /> Monthly
                           </button>
                        </div>

                        {/* Amount Selection */}
                        <div className="mb-6">
                           <h3 className="font-bold text-gray-900 mb-4 text-center">
                              Select an Amount
                           </h3>
                           <div className="grid grid-cols-2 gap-3 mb-3">
                              {presetAmounts.map((amt) => (
                                 <Button
                                    key={amt}
                                    onClick={() => {
                                       setAmount(amt);
                                       setCustomAmount("");
                                    }}

                                    variant={`${amount === amt && !customAmount ? "primary" : "outline"}`}
                                    className={`${amount === amt && !customAmount && "bg-blue-100! text-blue-500! border border-blue-200"}`}
                                    size="lg"
                                 >
                                    ${amt}
                                 </Button>
                              ))}
                           </div>
                           <div className="relative">
                              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">
                                 $
                              </span>
                              <TextInput 
                                 placeholder="Custom Amount"
                                 type="number"
                                 name="customAmount"
                                 value={customAmount}
                                 onChange={(e) => {
                                    setCustomAmount(e.target.value);
                                    setAmount(null);
                                 }}
                                 className={`text-lg font-bold`}

                              />
                           </div>
                        </div>

                        <Button variant="primary" className="bg-blue-500 text-lg text-white" size="lg">
                           <CreditCard className="w-7 h-7 text-white" />
                           Donate{" "}
                           {amount
                              ? `$${amount}`
                              : customAmount
                                ? `$${customAmount}`
                                : ""}
                        </Button>
                        <p className="text-center text-xs text-gray-400 mt-4">
                           By donating, you agree to our Terms & Conditions.
                        </p>
                     </div>
                  </motion.div>
               </div>
            </div>
         </div>
      </>
   );
}
