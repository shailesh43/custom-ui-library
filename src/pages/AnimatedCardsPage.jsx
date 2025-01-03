import React, { useState } from 'react';
import { motion, useScroll } from 'framer-motion';

const AnimatedCardsPage = () => {
  const [buttonText, setButtonText] = useState("Pass");
  const { scrollYProgress } = useScroll();

  const gridContainerVariants = {
    mount: { opacity: 0 },
    unmount: { opacity: 1, transition: { staggerChildren: 0.25 } },
  };

  const gridSqVariants = {
    mount: { opacity: 0 },
    unmount: { opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          variants={gridContainerVariants}
          initial="mount"
          animate="unmount"
          className="grid grid-cols-3 grid-rows-2 gap-6 h-full"
        >
          {/* Card 1 - Animated Shapes */}
          <motion.div variants={gridSqVariants} className="w-full">
            <div className="bg-slate-700 p-6 rounded-3xl aspect-square flex items-center justify-center gap-4 shadow-lg">
              <motion.div
                className="w-20 h-20 bg-stone-200 rounded-lg"
                initial={{ opacity: 0, x: -100, y: 100 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              />
              <motion.div
                className="w-20 h-20 bg-stone-200 rounded-full"
                initial={{ opacity: 0, x: 100, y: -100 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              />
            </div>
          </motion.div>

          {/* Card 2 - Shape Shifting */}
          <motion.div variants={gridSqVariants} className="w-full">
            <div className="bg-slate-700 p-6 rounded-3xl aspect-square flex items-center justify-center shadow-lg">
              <motion.div
                className="w-1/3 h-1/3 bg-purple-600 rounded-lg shadow-2xl"
                animate={{
                  scale: [1, 1.75, 1.75, 1],
                  rotate: [0, 45, 135, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
              />
            </div>
          </motion.div>

          {/* Card 3 - Interactive Buttons */}
          <motion.div variants={gridSqVariants} className="w-full">
            <div className="bg-slate-700 p-6 rounded-3xl aspect-square flex items-center justify-center gap-4 shadow-lg">
              <motion.button
                className="bg-teal-600 w-1/4 py-4 text-xl text-stone-200 font-semibold rounded-xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ bounceDamping: 10, bounceStiffness: 700 }}
              >
                smash
              </motion.button>
              <motion.button
                className="bg-rose-600 w-1/4 py-4 text-xl text-stone-200 font-semibold rounded-xl"
                onHoverStart={() => setButtonText("X")}
                onHoverEnd={() => setButtonText("Pass")}
              >
                {buttonText}
              </motion.button>
            </div>
          </motion.div>

          {/* Card 4 - Scroll Progress */}
          <motion.div variants={gridSqVariants} className="w-full">
            <div className="bg-slate-700 p-6 rounded-3xl aspect-square flex items-center justify-center shadow-lg">
              <motion.div className="w-40 aspect-square bg-gray-50/20 rounded-xl overflow-hidden">
                <motion.div
                  className="w-full bg-gray-400 rounded-xl h-full origin-bottom"
                  style={{ scaleY: scrollYProgress }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Empty Cards */}
          <motion.div variants={gridSqVariants} className="w-full">
            <div className="bg-slate-700 rounded-3xl aspect-square shadow-lg" />
          </motion.div>
          <motion.div variants={gridSqVariants} className="w-full">
            <div className="bg-slate-700 rounded-3xl aspect-square shadow-lg" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedCardsPage;