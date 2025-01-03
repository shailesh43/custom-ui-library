import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";

function AnimatedCardsPage() {
  const gridContainerVariants = {
    mount: { opacity: 0 },
    unmount: { opacity: 1, transition: { staggerChildren: 0.25 } },
  };
  const gridSqVarients = { mount: { opacity: 0 }, unmount: { opacity: 1 } };

  const [buttonText, setButtonText] = useState("Pass");

  const { scrollYProgress: completionProgress } = useScroll();

  return (
    <>
      <div className="flex flex-col gap-10 overflow-x-hidden ">
        <motion.section
          variants={gridContainerVariants}
          initial="mount"
          animate="unmount"
          className="grid grid-cols-3 p-10 gap-10 bg-slate-900"
        >
          {/* 1) fade up */}

          <motion.div
            variants={gridSqVarients}
            className="flex justify-center items-center gap-10 bg-slate-700 aspect-square rounded-3xl"
          >
            {/* square */}
            <motion.div
              className="w-20 h-20 bg-stone-200 rounded-lg"
              initial={{ opacity: 0, x: -100, y: 100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            />
            {/* circle */}
            <motion.div
              className="w-20 h-20 bg-stone-200 rounded-full"
              initial={{ opacity: 0, x: 100, y: -100 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            />
          </motion.div>

          {/* 2) Shape Shifting*/}
          <motion.div
            variants={gridSqVarients}
            className="flex justify-center items-center gap-10 bg-slate-700 aspect-square rounded-3xl"
          >
            <motion.dev
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
          </motion.div>

          {/* 3) Hover and Clicking */}
          <motion.div
            variants={gridSqVarients}
            className="flex justify-center items-center gap-10 bg-slate-700 aspect-square rounded-3xl"
          >
            <motion.button
              className="bg-teal-600 w-1/4 py-4 text-xl text-stone-200 tracking-wide font-semibold rounded-xl"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              transition={{ bounceDamping: 10, bounceStiffness: 700 }}
            >
              smash
            </motion.button>
            <motion.button
              className="bg-rose-600 w-1/4 py-4 text-xl text-stone-200 tracking-wide font-semibold rounded-xl"
              onHoverStart={() => setButtonText("X")}
              onHoverEnd={() => setButtonText("Pass")}
            >
              {buttonText}
            </motion.button>
          </motion.div>

          {/* 4)Scroll Progression  */}
          <motion.div
            variants={gridSqVarients}
            className="flex justify-center items-center gap-10 bg-slate-700 aspect-square rounded-3xl"
          >
            <motion.div className="w-40 aspect-square bg-gray-50/20 rounded-xl">
              <motion.div
                className="w-full bg-gray-400 rounded-xl h-full origin-bottom"
                style={{ scaleY: completionProgress }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={gridSqVarients}
            className="flex justify-center items-center gap-10 bg-slate-700 aspect-square rounded-3xl"
          ></motion.div>
          <motion.div
            variants={gridSqVarients}
            className="flex justify-center items-center gap-10 bg-slate-700 aspect-square rounded-3xl"
          ></motion.div>
        </motion.section>
      </div>
    </>
  );
}

export default AnimatedCardsPage;
