import React from "react";
import { motion } from "framer-motion";
import useRegister from "../hooks/useRegister";
import { registerFields } from "../services/auth.services";
import Register from './../pages/Register';

const RegisterForm = () => {
  const { formData, handleChange, handleSubmit } = useRegister();

  const onSubmit = (data) => {
    console.log("Register Data:", data);
  };


  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        staggerChildren: 0.08, 
        delayChildren: 0.1 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black py-12 px-4 relative overflow-hidden">
      

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#F6c543]/5 rounded-full blur-[130px] -z-0"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-md w-full bg-gray-900/80 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl border border-yellow-500/10 z-10"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl font-black mb-6 text-center text-white"
        >
          Register <span className="text-[#F6c543]">Form</span>
        </motion.h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {registerFields.map((field) => (
            <motion.div variants={itemVariants} key={field.id}>
              <label className="block text-gray-400 mb-1.5 font-medium ml-2 text-[10px] uppercase tracking-[0.2em]">
                {field.label}
              </label>
              <input
                id={field.id}
                type={field.type}
                value={formData[field.id]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full bg-black/40 border border-gray-800 p-3.5 rounded-2xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#F6c543] focus:border-transparent transition-all duration-300"
                required
              />
            </motion.div>
          ))}

         
          <motion.button 
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: "0px 0px 20px rgba(246, 197, 67, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            type="submit" 
            className="w-full bg-[#F6c543] text-black font-black py-4 mt-4 rounded-2xl transition-all duration-300 shadow-lg"
          >
            CREATE ACCOUNT
          </motion.button>
        </form>

        <motion.p 
          variants={itemVariants}
          className="text-center mt-8 text-gray-500 text-sm"
        >
          Already have an account?{" "}
          <a href="/login" className="text-[#F6c543] hover:text-white transition-colors font-bold underline underline-offset-4">
            Login here
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default RegisterForm;