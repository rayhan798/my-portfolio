import React from "react";
import { motion } from "framer-motion";
import useLogin from "../hooks/useLogin";
import { loginFields } from "../services/auth.services";

const LoginForm = () => {
  const { formData, handleChange, handleSubmit } = useLogin();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
  };


  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, staggerChildren: 0.1, delayChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black py-6 px-4 relative overflow-hidden">
      
   
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#F6c543]/10 rounded-full blur-[120px] -z-0"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-md w-full bg-gray-900/80 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl border border-yellow-500/10 z-10"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl font-black mb-8 text-center text-white"
        >
          Login <span className="text-[#F6c543]">Form</span>
        </motion.h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {loginFields.map((field) => (
            <motion.div variants={itemVariants} key={field.id}>
              <label className="block text-gray-400 mb-2 font-medium ml-2 text-sm uppercase tracking-widest">
                {field.label}
              </label>
              <input
                id={field.id}
                type={field.type}
                value={formData[field.id]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full bg-black/40 border border-gray-800 p-4 rounded-2xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#F6c543] focus:border-transparent transition-all duration-300"
                required
              />
            </motion.div>
          ))}

          
          <motion.button 
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: "0px 0px 20px rgba(246, 197, 67, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            type="submit" 
            className="w-full bg-[#F6c543] text-black font-black py-4 rounded-2xl transition-all duration-300 shadow-lg mt-4"
          >
            SIGN IN
          </motion.button>
        </form>

        <motion.p 
          variants={itemVariants}
          className="text-center mt-8 text-gray-500 text-sm"
        >
          Don't have an account?{" "}
          <a href="/register" className="text-[#F6c543] hover:text-white transition-colors font-bold">
            Create Account
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoginForm;