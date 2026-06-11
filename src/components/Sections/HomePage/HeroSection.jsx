"use client";

import React from "react";
import { motion } from "framer-motion";
import ColorBends from "../../common/ColorBlend/ColorBends";

const HomeHero = () => {
  // Framer Motion variants for staggered text reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  return (
    // Outer container: Scales naturally to its content
    <section id="home" className="relative w-full bg-black overflow-hidden flex flex-col justify-center selection:bg-white/20 selection:text-white">

      {/* ─── BACKGROUND LAYERS ────────────────────────────────────────── */}

      {/* Dynamic ColorBends Shader */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <ColorBends
          colors={["#8a5cff"]}
          rotation={90}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          noise={0.15}
          parallax={0.5}
          iterations={1}
          intensity={1.5}
          bandWidth={6}
          transparent
          autoRotate={0}
          color="#A855F7"
        />
      </div>

      {/* Abstract Background Orbs for Glassmorphic Refraction */}
      <div className="absolute z-0 top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/25 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute z-0 bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-rose-600/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      {/* ─── FOREGROUND CONTENT ───────────────────────────────────────── */}

      {/* Main Content Grid */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-8 pb-16 lg:pt-12 lg:pb-24 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">

        {/* Left Column: Typography & CTA */}
        <motion.div
          className="w-full lg:w-[55%] flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 1. Title (Left Aligned) — mobile reduced to text-4xl */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold uppercase text-white leading-[1.05] tracking-tight mb-2 sm:mb-4 lg:mb-7"
          >
            Great design is <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-fuchsia-200 to-indigo-300">
              invisible
            </span>
          </motion.h1>

          {/* 2. MOBILE / TAB IMAGE (Full Width, visible only on screens smaller than 'lg') */}
          <motion.div
            variants={itemVariants}
            className="relative flex lg:hidden w-full aspect-[4/3] sm:aspect-video bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-[1.5rem] shadow-2xl overflow-hidden items-center justify-center my-6 sm:my-8"
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
            <img
              src="https://res.cloudinary.com/dgt0o0jlc/image/upload/v1781191766/ChatGPT_Image_Jun_11_2026_08_57_02_PM_1_vurinp.png"
              alt="Herosection image"
              className="w-full h-full object-cover relative z-0"
            />
          </motion.div>

          {/* 3. Text Paragraph (Left Aligned) */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-white/70 mb-8 sm:mb-10 w-full max-w-none lg:max-w-lg font-light leading-relaxed tracking-wide"
          >
            Lorem ipsum dolor sit amet constreteur. Our integrated approach to interior and exterior design allows us to provide a comprehensive solution.
          </motion.p>

          {/* 4. Button (Solid White background, black text, smooth hover effects) */}
          <motion.button
            variants={itemVariants}
            className="cursor-pointer self-center lg:self-start group relative px-8 py-3.5 sm:py-4 bg-white text-black rounded-full text-sm sm:text-base font-semibold overflow-hidden transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center justify-center gap-3 sm:gap-4 active:scale-95"
          >
            <span className="tracking-wide uppercase text-xs sm:text-sm">Get a Quote</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </motion.div>

        {/* Right Column: DESKTOP IMAGE (Visible only on 'lg' screens and up) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="hidden lg:flex w-full lg:w-[45%] items-center justify-end"
        >
          <div className="relative w-full max-w-[480px] xl:max-w-[550px] aspect-square bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden flex items-center justify-center transition-all duration-500 hover:bg-white/[0.06]">

            <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

            <img
              src="https://res.cloudinary.com/dgt0o0jlc/image/upload/v1781191766/ChatGPT_Image_Jun_11_2026_08_57_02_PM_1_vurinp.png"
              alt="Herosection image"
              className="w-full h-full object-cover relative z-0 transition-transform duration-700 hover:scale-105"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HomeHero;