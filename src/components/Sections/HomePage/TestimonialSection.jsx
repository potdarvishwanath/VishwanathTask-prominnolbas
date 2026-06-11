"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

const TestimonialSection = () => {
    const scrollRef = useRef(null);

    // Animation Variants
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

    const testimonials = [
        {
            id: 1,
            text: "Working with this team completely transformed our digital strategy. Their insights were sharp, and the execution was flawless. We saw a 55% growth in just one year.",
            name: "Jacqueline Wright",
            role: "Marketing Director",
            avatar: "https://i.pravatar.cc/150?u=jacqueline1",
        },
        {
            id: 2,
            text: "I was blown away by their attention to detail. Condimentum eget vitae ligula sed urna sit sagittis interdum a. Blandit mattis mattis lobortis orci. Highly recommended.",
            name: "Marcus Thorne",
            role: "CEO, TechFlow",
            avatar: "https://i.pravatar.cc/150?u=marcus",
        },
        {
            id: 3,
            text: "A truly seamless experience from start to finish. Facilisis dui sagittis tempor egestas pellentesque eu maecenas. Our customer retention has never been higher.",
            name: "Elena Rodriguez",
            role: "Head of Operations",
            avatar: "https://i.pravatar.cc/150?u=elena",
        },
        {
            id: 4,
            text: "They didn't just deliver a product; they delivered a solution that fundamentally improved how our entire team collaborates on a daily basis.",
            name: "David Chen",
            role: "Product Manager",
            avatar: "https://i.pravatar.cc/150?u=david",
        },
    ];

    const scroll = (direction) => {
        if (scrollRef.current) {
            // Scroll by the width of one card approximately
            const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : 400;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden selection:bg-[#8a5cff] selection:text-white">

            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-[40%] h-[50%] bg-violet-100/40 blur-[120px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">

                {/* ─── CENTERED HEADER ──────────────────────────────────────── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="flex flex-col items-center justify-center text-center mb-12 sm:mb-16"
                >
                    <motion.h2
                        variants={fadeUpVariants}
                        // Applied our established Standard Section Title typography scale & leading
                        className="w-full text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#4b2885] via-[#8a5cff] to-violet-600 leading-[1.05] tracking-tight"
                    >
                        Our happy clients
                    </motion.h2>
                </motion.div>

                {/* ─── CAROUSEL WRAPPER ────────────────────────────────────────── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="relative w-full group"
                >
                    {/* Left Scroll Button */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute -left-3 sm:-left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white border border-black/10 shadow-[0_4px_15px_rgba(0,0,0,0.1)] text-[#8a5cff] hover:bg-[#8a5cff] hover:text-white hover:border-[#8a5cff]/30 active:scale-95 transition-all rounded-full"
                        aria-label="Scroll left"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 pr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Cards Container */}
                    <div
                        ref={scrollRef}
                        className="flex flex-nowrap gap-5 sm:gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory pb-10 pt-2 px-8 sm:px-10 md:px-14 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    >
                        {testimonials.map((t) => (
                            <motion.div
                                key={t.id}
                                variants={fadeUpVariants}
                                className="relative flex flex-col justify-between flex-none w-[85vw] sm:w-[60vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-21px)] snap-center bg-[#f8f5ff] border border-violet-100 shadow-[0_8px_30px_rgba(138,92,255,0.04)] p-8 sm:p-10 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(138,92,255,0.1)] hover:-translate-y-1 hover:border-[#8a5cff]/30 group"
                            >
                                {/* Large decorative quote mark in the background */}
                                <svg
                                    className="absolute top-6 right-6 w-16 h-16 text-[#8a5cff]/[0.06] group-hover:text-[#8a5cff]/10 transition-colors duration-300 pointer-events-none"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>

                                <p className="relative z-10 text-black/75 font-medium leading-relaxed mb-10 text-base sm:text-lg">
                                    "{t.text}"
                                </p>

                                <div className="relative z-10 flex items-center gap-4 mt-auto">
                                    <div className="relative">
                                        <img src={t.avatar} alt={t.name} className="w-14 h-14 object-cover border border-violet-200" />
                                        {/* Little accent dot */}
                                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#8a5cff] border-2 border-[#f8f5ff] rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-black/90 text-sm uppercase tracking-wider">{t.name}</h4>
                                        <p className="text-[#8a5cff] text-xs uppercase tracking-widest font-semibold mt-0.5">{t.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Scroll Button */}
                    <button
                        onClick={() => scroll("right")}
                        className="absolute -right-3 sm:-right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white border border-black/10 shadow-[0_4px_15px_rgba(0,0,0,0.1)] text-[#8a5cff] hover:bg-[#8a5cff] hover:text-white hover:border-[#8a5cff]/30 active:scale-95 transition-all rounded-full"
                        aria-label="Scroll right"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 pl-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </motion.div>

            </div>
        </section>
    );
};

export default TestimonialSection;