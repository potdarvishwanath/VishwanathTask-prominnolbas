"use client";

import React from "react";
import { motion } from "framer-motion";

const StrategySection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
        },
    };

    const fadeUpVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
    };

    const stats = [
        { label: "Clients", value: "12K" },
        { label: "Annual growth", value: "55%" },
        { label: "No of projects", value: "5k" },
        { label: "Positive ratings", value: "80%" },
    ];

    return (
        <section id="strategy" className="relative w-full bg-[#f8f6fc] py-12 md:py-16 lg:py-20 overflow-hidden selection:bg-[#8a5cff] selection:text-white">

            {/* ─── FAINT BACKGROUND ORBS ─────────────────────────────────────── */}
            <div className="absolute top-0 left-[10%] w-[30%] h-[30%] bg-violet-300/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[20%] right-[5%] w-[40%] h-[40%] bg-[#8a5cff]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col">

                {/* ─── TITLE ────────────────────────────────────────────── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUpVariants}
                    className="order-1 max-w-6xl mx-auto w-full mb-6 lg:mb-6"
                >
                    <h2 className="w-full text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#4b2885] via-[#8a5cff] to-violet-600 leading-[1.15] tracking-tight">
                        Our business strategy has helped many businesses across the globe
                    </h2>
                </motion.div>

                {/* ─── MAIN BANNER IMAGE ─────────────────────────────────────────── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUpVariants}
                    className="order-2 lg:order-4 w-full max-w-6xl mx-auto mb-8 lg:mb-0"
                >
                    <div className="relative w-full rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-[0_8px_32px_rgba(138,92,255,0.1)] border border-white/70">
                        {/* Added `object-top` here to strictly align the top line of the image with the top of the div */}
                        <img
                            src="https://res.cloudinary.com/dgt0o0jlc/image/upload/v1781197167/Screenshot_2026-06-11_222907_vxicvu.jpg"
                            alt="Our business strategy global impact"
                            className="w-full aspect-[4/3] sm:aspect-video lg:aspect-[21/9] object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#8a5cff]/5 via-transparent to-transparent pointer-events-none" />
                    </div>
                </motion.div>

                {/* ─── SUBTEXT ────────────────────────────────────────────── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUpVariants}
                    className="order-3 lg:order-2 max-w-6xl mx-auto w-full mb-8 lg:mb-12"
                >
                    <p className="w-full text-left sm:text-center text-sm sm:text-base md:text-lg text-black/70 font-normal leading-relaxed max-w-4xl mx-auto">
                        We empower businesses across industries with innovative software solutions, helping them streamline operations, enhance customer experiences, and accelerate growth.                    </p>
                </motion.div>

                {/* ─── GLASSMORPHIC STATS ROW ────────────────────────────────────── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="order-4 lg:order-3 w-full max-w-6xl mx-auto bg-white/40 backdrop-blur-2xl border border-white/80 shadow-[0_8px_32px_rgba(138,92,255,0.05)] rounded-none py-6 sm:py-8 px-6 sm:px-10 mb-0 lg:mb-12"
                >
                    <div className="grid grid-cols-2 md:flex md:flex-row items-center justify-between gap-y-8 md:gap-y-0">
                        {stats.map((stat, index) => (
                            <React.Fragment key={index}>

                                <motion.div
                                    variants={fadeUpVariants}
                                    className="flex flex-col items-center text-center w-full md:w-auto"
                                >
                                    <span className="text-black/80 font-bold text-sm sm:text-base md:text-lg tracking-wide mb-1 sm:mb-2">
                                        {stat.label}
                                    </span>
                                    <span className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#8a5cff] to-violet-500">
                                        {stat.value}
                                    </span>
                                </motion.div>

                                {/* Divider */}
                                {index !== stats.length - 1 && (
                                    <motion.div
                                        variants={fadeUpVariants}
                                        className="hidden md:block w-px h-12 sm:h-14 bg-black/[0.08]"
                                    />
                                )}

                            </React.Fragment>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default StrategySection;