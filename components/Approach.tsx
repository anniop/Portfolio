import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full py-20 relative overflow-hidden">
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="heading text-center"
      >
        My <span className="text-purple">approach</span>
      </motion.h1>

      {/* Background Animation */}
      <motion.div
        className="absolute -top-20 -right-40 w-96 h-96 bg-purple-500 opacity-10 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 50, 0], rotate: [0, 45, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      ></motion.div>

      {/* Card Container */}
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-10">
        <Card
          title="Planning & Strategy"
          icon={<AceternityIcon order="Phase 1" />}
          des="Together, we’ll craft a roadmap for your website’s success—defining goals, understanding your audience, and outlining key features. From structure to navigation and content, every detail will be purposefully designed."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>

        <Card
          title="Code Crafting"
          icon={<AceternityIcon order="Phase 2" />}
          des="Once the plan is set, I immerse myself in coding, accompanied by my lo-fi playlist. From the first lines of code to the final polish, I ensure you're updated on every milestone along the way."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[[255, 166, 158], [221, 255, 247]]}
            dotSize={2}
          />
        </Card>

        <Card
          title="Building and Delivering"
          icon={<AceternityIcon order="Phase 3" />}
          des="This is where the magic comes to life! Using the approved design as a blueprint, I'll craft every detail into functional code, building your website from scratch and turning ideas into reality."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

// Card Component with Enter/Exit Animations
const Card = ({ title, icon, children, des }: any) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.2)" }}
      transition={{ duration: 0.5 }}
      className="border border-black/[0.2] dark:border-white/[0.2] group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Icon Placement */}
      <div className="relative z-20 flex flex-col items-center">
        {icon}
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-white text-center text-3xl font-bold mt-4"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 mt-4"
        >
          {des}
        </motion.p>
      </div>
    </motion.div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <motion.button
      initial={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative inline-flex overflow-hidden rounded-full p-[1px] shadow-lg"
    >
      <span
        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
      />
      <span
        className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
      >
        {order}
      </span>
    </motion.button>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

