"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const LatestBlogSection = () => {
    // Reference for the mobile scroll container
    const scrollContainerRef = useRef(null);

    // Loading State for Skeletons
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    // Function to handle smooth scrolling left and right
    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            // Scrolls roughly the width of one card + gap
            const scrollAmount = window.innerWidth * 0.85;
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

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

    // Upgraded Blog Data
    const blogs = [
        {
            id: 1,
            title: "Why Humans Still Outsmart AI in Creative Thinking",
            excerpt: "While algorithms can process data at lightning speed, human intuition and creative problem-solving remain unmatched.",
            category: "Artificial Intelligence",
            date: "Oct 12, 2026",
            linkText: "Read Article",
            image: "https://res.cloudinary.com/dgt0o0jlc/image/upload/v1781200887/Screenshot_2026-06-11_232921_otk6jm.jpg",
        },
        {
            id: 2,
            title: "The Future of Quantum Computing in Business Strategy",
            excerpt: "Explore how quantum processors are moving out of the lab and into enterprise systems to solve complex logistical challenges.",
            category: "Innovation",
            date: "Oct 10, 2026",
            linkText: "Read Article",
            image: "https://res.cloudinary.com/dgt0o0jlc/image/upload/v1781200887/Screenshot_2026-06-11_232936_het544.jpg",
        },
        {
            id: 3,
            title: "Building Ethical Guardrails for Machine Learning",
            excerpt: "As AI systems make more critical decisions, establishing transparent ethical frameworks has never been more vital for growth.",
            category: "Technology",
            date: "Oct 05, 2026",
            linkText: "Read Article",
            image: "https://res.cloudinary.com/dgt0o0jlc/image/upload/v1781200887/Screenshot_2026-06-11_232950_qd8dry.jpg",
        },
    ];

    return (
        <section id="blog" className="relative w-full bg-[#f8f6fc] py-12 md:py-16 lg:py-20 overflow-hidden selection:bg-[#8a5cff] selection:text-white">

            {/* ─── FAINT BACKGROUND ORBS ─────────────────────────────────────── */}
            <div className="absolute top-[-5%] left-[5%] w-[30%] h-[30%] bg-[#8a5cff]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[10%] w-[40%] h-[40%] bg-violet-300/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-0 md:px-5 sm:px-8 lg:px-12">

                {/* ─── HEADER SECTION ────────────────────────────────────────────── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="max-w-6xl mx-auto flex flex-col items-center text-center mb-10 lg:mb-12 px-5 md:px-0"
                >
                    <motion.h2
                        variants={fadeUpVariants}
                        className="w-full text-4xl sm:text-5xl md:text-6xl lg:text-[3.25rem] xl:text-[4rem] font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#4b2885] via-[#8a5cff] to-violet-600 leading-[1.05] tracking-tight"
                    >
                        Latest blog
                    </motion.h2>
                </motion.div>

                {/* ─── BLOG CARDS GRID / CAROUSEL ──────────────────────────────── */}
                <div className="relative w-full group">

                    {/* Left Scroll Button (Mobile Only) */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex md:hidden items-center justify-center w-10 h-10 bg-white border border-black/10 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.1)] text-[#8a5cff] active:scale-95 transition-transform"
                        aria-label="Scroll left"
                    >
                        <svg className="w-5 h-5 pr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <motion.div
                        ref={scrollContainerRef}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                        // Mobile: flex row, hidden scrollbar, snapping. Tab/Desktop: grid.
                        className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-10 lg:mb-12 px-5 md:px-0 pb-6 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    >
                        {isLoading ? (
                            Array.from({ length: 3 }).map((_, i) => (
                                <motion.div
                                    key={`skeleton-${i}`}
                                    variants={fadeUpVariants}
                                    className="group flex flex-col bg-white rounded-none overflow-hidden border border-black/[0.05] shadow-sm w-[85vw] sm:w-[60vw] md:w-auto shrink-0 snap-center md:snap-align-none animate-pulse"
                                >
                                    <div className="relative w-full aspect-[4/3] bg-gray-200"></div>
                                    <div className="flex flex-col flex-grow p-6 sm:p-8">
                                        <div className="h-3 bg-gray-200 rounded w-1/4 mb-4"></div>
                                        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                                        <div className="h-6 bg-gray-200 rounded w-1/2 mb-6"></div>
                                        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                                        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                                        <div className="h-4 bg-gray-200 rounded w-2/3 mb-6 flex-grow"></div>
                                        <div className="mt-auto flex items-center">
                                            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            blogs.map((blog) => (
                                <motion.div
                                    key={blog.id}
                                    variants={fadeUpVariants}
                                    className="group flex flex-col bg-white rounded-none overflow-hidden border border-black/[0.05] shadow-sm transition-all duration-300 hover:shadow-[0_20px_40px_rgba(138,92,255,0.08)] hover:-translate-y-2 cursor-pointer w-[85vw] sm:w-[60vw] md:w-auto shrink-0 snap-center md:snap-align-none"
                                >
                                    {/* Image Header */}
                                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-black/5">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-transparent pointer-events-none" />

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4 sm:top-5 sm:left-5 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-none">
                                            <span className="text-xs font-bold uppercase tracking-wider text-[#8a5cff]">
                                                {blog.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Card Content Area */}
                                    <div className="flex flex-col flex-grow p-6 sm:p-8">
                                        {/* Date */}
                                        <span className="text-xs font-semibold text-black/40 uppercase tracking-widest mb-3">
                                            {blog.date}
                                        </span>

                                        <h3 className="text-xl sm:text-2xl font-bold text-black/90 mb-4 leading-snug group-hover:text-[#8a5cff] transition-colors duration-300">
                                            {blog.title}
                                        </h3>

                                        <p className="text-black/60 font-normal text-sm sm:text-base leading-relaxed mb-6 flex-grow">
                                            {blog.excerpt}
                                        </p>

                                        {/* Learn More Link */}
                                        <div className="flex items-center text-[#8a5cff] font-semibold text-sm tracking-wide uppercase mt-auto">
                                            {blog.linkText}
                                            <svg
                                                className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1.5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </motion.div>

                    {/* Right Scroll Button (Mobile Only) */}
                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex md:hidden items-center justify-center w-10 h-10 bg-white border border-black/10 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.1)] text-[#8a5cff] active:scale-95 transition-transform"
                        aria-label="Scroll right"
                    >
                        <svg className="w-5 h-5 pl-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* ─── BOTTOM CTA BUTTON ───────────────────────────────────────── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="flex justify-center"
                >
                    <motion.button
                        variants={fadeUpVariants}
                        className="w-max px-12 py-4 bg-black/80 backdrop-blur-xl border border-black/20 text-white text-sm sm:text-base font-bold tracking-widest uppercase rounded-full transition-all duration-300 hover:bg-[#8a5cff]/90 hover:border-[#8a5cff]/50 hover:shadow-[0_8px_25px_rgba(138,92,255,0.4)] hover:-translate-y-1 active:translate-y-0"
                    >
                        View All Posts
                    </motion.button>
                </motion.div>

            </div>
        </section>
    );
};

export default LatestBlogSection;