"use client";

import React from "react";
import { motion } from "framer-motion";

const partnersLogos = [

    {
        id: 1,
        name: "Infosys",
        src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg"
    },
    {
        id: 3,
        name: "Accenture",
        src: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg"
    },
    {
        id: 4,
        name: "Wipro",
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg"
    },

    {
        id: 5,
        name: "Cognizant",
        src: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg"
    },
];

const OurPartnersSection = () => {
    const headerVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
    };

    const duplicatedLogos = [...partnersLogos, ...partnersLogos];

    return (
        <section className="relative w-full bg-white py-12 md:py-16 lg:py-20 overflow-hidden selection:bg-[#8a5cff] selection:text-white">

            {/* ─── FAINT BACKGROUND ORBS ─────────────────────────────────────── */}
            <div className="absolute top-0 left-[15%] w-[40%] h-[40%] bg-violet-300/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-[10%] right-[10%] w-[35%] h-[35%] bg-[#8a5cff]/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">

                {/* ─── HEADER SECTION ────────────────────────────────────────────── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={headerVariants}
                    className="max-w-6xl mx-auto flex flex-col items-center text-center mb-10 lg:mb-16"
                >
                    {/* Headline */}
                    <h2 className="w-full text-4xl sm:text-5xl md:text-6xl lg:text-[3.25rem] xl:text-[4rem] font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#4b2885] via-[#8a5cff] to-violet-600 leading-[1.15] tracking-tight mb-4 sm:mb-6">
                        Information Partners
                    </h2>

                    {/* Subtitle text */}
                    <p className="w-full text-sm sm:text-base md:text-lg text-black/70 font-normal leading-relaxed max-w-4xl">
                        We collaborate with industry leaders to bring you the best technology solutions.
                    </p>
                </motion.div>

                {/* ─── LOGO SCROLLING BAR ─────────────────────────────────────── */}
                <div className="w-full max-w-7xl mx-auto py-6 sm:py-8 mb-10 lg:mb-12 relative">

                    {/* The logo scrolling animation container */}
                    <div className="overflow-hidden w-full relative flex items-center">
                        <motion.div
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                            className="flex whitespace-nowrap gap-x-16 sm:gap-x-20 md:gap-x-28 items-center w-max px-8"
                        >
                            {duplicatedLogos.map((partner, index) => (
                                <div
                                    key={`${partner.id}-${index}`}
                                    className="flex-shrink-0 cursor-pointer"
                                >
                                    <img
                                        src={partner.src}
                                        alt={`${partner.name} logo`}
                                        className="h-9 sm:h-12 lg:h-14 w-auto object-contain grayscale opacity-40 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* ─── BLURY FADE EFFECT AT ENDS ────────────────────────────── */}
                    {/* Left Gradient Mask */}
                    <div className="absolute top-0 left-0 h-full w-[80px] sm:w-[150px] bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />

                    {/* Right Gradient Mask */}
                    <div className="absolute top-0 right-0 h-full w-[80px] sm:w-[150px] bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />
                </div>

            </div>
        </section>
    );
};

export default OurPartnersSection;