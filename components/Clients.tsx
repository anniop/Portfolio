"use client";

import React from "react";
import { motion } from "framer-motion";
import { skills } from "@/data"; // Assuming you have the skills array in data

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Clients = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center text-white text-4xl font-bold mb-12"
      >
        My <span className="text-purple-500">Skills</span>
      </motion.h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        {/* Skills Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="flex flex-wrap items-center justify-center gap-10 md:gap-16"
        >
          {skills.map((category) => (
            <motion.div
              key={category.id}
              variants={fadeIn}
              className="relative bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-lg border border-gray-600 p-8 rounded-2xl shadow-xl w-full md:w-[45%] lg:w-[23%] mt-6 hover:scale-105 transition-transform duration-300 ease-out"
            >
              {/* Card Hover Effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent to-gray-800 opacity-0 hover:opacity-50 rounded-2xl transition-opacity duration-300" />

              {/* Card Content */}
              <h3 className="text-2xl text-white font-semibold mb-6 text-center">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-6 justify-center">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center transform transition-transform duration-300 hover:scale-110"
                  >
                    <motion.img
                      src={skill.icon}
                      alt={skill.name}
                      whileHover={{ rotate: 10 }}
                      className="w-16 h-16 mb-4 object-contain"
                    />
                    <span className="text-white text-lg font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;

