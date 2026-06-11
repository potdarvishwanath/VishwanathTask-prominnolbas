"use client";

import React from "react";
import { motion } from "framer-motion";

const TrustSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const fadeUpVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        },
    };

    const listItems = [
        "Experienced team delivering high-quality web, mobile, and cloud solutions.",
        "Transparent communication and agile development throughout every project.",
        "Scalable and secure software built using modern technologies and best practices.",
        "Dedicated support and long-term partnerships focused on your business growth.",
    ];

    return (
        <section id="why-us" className="w-full bg-white py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden selection:bg-[#8a5cff] selection:text-white">
            <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">

                {/* ─── HEADER SECTION (HERO STYLE) ───────────────────────────────── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="max-w-5xl mx-auto flex flex-col mb-14 sm:mb-16 lg:mb-24 items-start sm:items-center"
                >
                    <motion.h2
                        variants={fadeUpVariants}
                        className="w-full text-left sm:text-center text-4xl sm:text-5xl md:text-6xl lg:text-[3.25rem] xl:text-[4rem] font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-[#8a5cff] to-violet-700 leading-[1.05] tracking-tight mb-5 sm:mb-8 lg:whitespace-nowrap"
                    >
                        Why our clients <br className="block sm:block lg:hidden" /> trust us
                    </motion.h2>

                    <motion.p
                        variants={fadeUpVariants}
                        className="w-full text-left sm:text-center text-base sm:text-lg md:text-xl text-black/80 font-normal leading-relaxed max-w-3xl"
                    >
                        We deliver reliable, scalable, and high-quality software solutions tailored to each client's unique business goals. Our commitment to transparency, innovation, and timely delivery has helped businesses build stronger digital foundations.                    </motion.p>
                </motion.div>

                {/* ─── MAIN CONTENT GRID ─────────────────────────────────────────── */}
                {/* Adjusted gap for lg (small laptops) vs xl (large desktops) */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-10 xl:gap-20">

                    {/* Left Column: Image Masonry Composition */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                        className="w-full lg:w-[48%] flex items-center justify-center"
                    >
                        {/* Constrained max-width for smaller laptops (lg), letting it expand on xl */}
                        <div className="relative w-full max-w-[500px] lg:max-w-[480px] xl:max-w-[600px] aspect-square lg:aspect-[4/3] flex-shrink-0">

                            <motion.div variants={fadeUpVariants} className="absolute top-0 left-0 w-[58%] h-[55%]">
                                <img
                                    src="https://res.cloudinary.com/dgt0o0jlc/image/upload/v1781195459/Screenshot_2026-06-11_220017_wsqdof.jpg"
                                    alt="Client Trust 1"
                                    className="w-full h-full object-cover shadow-lg border-2 border-[#8a5cff]"
                                />
                            </motion.div>

                            <motion.div variants={fadeUpVariants} className="absolute top-[10%] right-0 w-[38%] h-[48%]">
                                <img
                                    src="https://res.cloudinary.com/dgt0o0jlc/image/upload/v1781194644/Screenshot_2026-06-11_214631_f4ckeg.jpg"
                                    alt="Client Trust 2"
                                    className="w-full h-full object-cover shadow-lg border-2 border-[#8a5cff]"
                                />
                            </motion.div>

                            <motion.div variants={fadeUpVariants} className="absolute bottom-0 left-[18%] w-[60%] h-[40%]">
                                <img
                                    src="https://res.cloudinary.com/dgt0o0jlc/image/upload/v1781195661/Screenshot_2026-06-11_220357_zaz9zz.jpg"
                                    alt="Client Trust 3"
                                    className="w-full h-full object-cover shadow-lg border-2 border-[#8a5cff]"
                                />
                            </motion.div>

                        </div>
                    </motion.div>

                    {/* Right Column: Features List & CTA */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                        className="w-full lg:w-[48%] flex flex-col items-center lg:items-start justify-center"
                    >
                        <div className="flex flex-col gap-5 sm:gap-7 mb-10 w-full sm:max-w-2xl md:max-w-3xl lg:max-w-none">
                            {listItems.map((text, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeUpVariants}
                                    className="flex flex-row items-start text-left gap-4 sm:gap-5"
                                >
                                    <div className="mt-1 flex-shrink-0 text-[#8a5cff]">
                                        <svg
                                            className="w-6 h-6 sm:w-7 sm:h-7 lg:w-6 lg:h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p className="text-black/90 font-medium text-base sm:text-lg leading-relaxed">
                                        {text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            variants={fadeUpVariants}
                            className="cursor-pointer w-max px-10 py-4 bg-black/80 backdrop-blur-xl border border-black/20 text-white text-sm sm:text-base font-bold tracking-widest uppercase rounded-full transition-all duration-300 hover:bg-[#8a5cff]/90 hover:border-[#8a5cff]/50 hover:shadow-[0_8px_25px_rgba(138,92,255,0.4)] hover:-translate-y-1 active:translate-y-0"
                        >
                            Get Started
                        </motion.button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default TrustSection;