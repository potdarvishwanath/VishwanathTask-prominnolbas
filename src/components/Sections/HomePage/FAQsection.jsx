"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection = () => {
    // State to track the currently open FAQ item. Defaulting to the first one (index 0).
    const [openIndex, setOpenIndex] = useState(0);

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

    // Realistic Business FAQ Data (5 Questions)
    const faqs = [
        {
            question: "How long does a typical project take to complete?",
            answer: "Project timelines vary depending on the scope and complexity of your requirements. A standard strategy engagement typically takes between 4 to 8 weeks from initial discovery to final implementation.",
        },
        {
            question: "Do you offer custom solutions for specific industries?",
            answer: "Yes, absolutely. We understand that every industry has unique challenges. Our team conducts deep market research to tailor our business strategies specifically to your niche and target audience.",
        },
        {
            question: "What makes your approach different from others?",
            answer: "We blend data-driven analytics with human-centric design. Rather than relying on generic templates, we build agile frameworks that adapt to market shifts while keeping your core brand identity intact.",
        },
        {
            question: "How do you measure the success of your strategies?",
            answer: "We define clear Key Performance Indicators (KPIs) at the start of every project. This includes tracking ROI, customer acquisition costs, engagement metrics, and overall revenue growth through transparent reporting.",
        },
        {
            question: "Can you integrate with our existing software stack?",
            answer: "Our technical team is highly experienced in seamless integrations. Whether you use legacy CRM systems or modern SaaS platforms, we ensure our strategic implementations align perfectly with your existing tech infrastructure.",
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="relative w-full bg-[#f8f6fc] py-16 md:py-24 overflow-hidden selection:bg-[#8a5cff] selection:text-white">
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    // Mobile: Stacks using Flex. Desktop: 5-column Grid for perfect 40/60 split.
                    className="flex flex-col lg:grid lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-x-12 xl:gap-x-20 lg:gap-y-8 lg:items-start"
                >

                    {/* ─── TITLE: Mobile (Top), Desktop (Top Right - 60%) ───────────── */}
                    <motion.div
                        variants={fadeUpVariants}
                        // col-span-3 (out of 5) = 60% width
                        className="order-1 lg:order-none lg:col-span-3 lg:col-start-3 lg:row-start-1"
                    >
                        {/* Applied theme gradient and exact typography scale */}
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.25rem] xl:text-[4rem] font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#4b2885] via-[#8a5cff] to-violet-600 leading-[1.05] tracking-tight -mt-1 lg:-mt-2 pb-2">
                            Frequently asked questions
                        </h2>
                    </motion.div>

                    {/* ─── IMAGE: Mobile (Middle), Desktop (Left column - 40%) ──────── */}
                    <motion.div
                        variants={fadeUpVariants}
                        // col-span-2 = 40% width. 
                        // row-start-2 & self-center pins the image precisely to the vertical center of the questions block.
                        className="order-2 lg:order-none lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:self-center w-full flex-shrink-0"
                    >
                        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-black/5 overflow-hidden shadow-sm border border-black/5 rounded-none">
                            <img
                                src="https://res.cloudinary.com/dgt0o0jlc/image/upload/v1781200887/Screenshot_2026-06-11_232921_otk6jm.jpg"
                                alt="FAQ Representation"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-transparent pointer-events-none" />
                        </div>
                    </motion.div>

                    {/* ─── QUESTIONS: Mobile (Bottom), Desktop (Bottom Right - 60%) ─── */}
                    <motion.div
                        variants={containerVariants}
                        // col-span-3 (out of 5) = 60% width
                        className="order-3 lg:order-none lg:col-span-3 lg:col-start-3 lg:row-start-2 flex flex-col gap-4"
                    >
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <motion.div
                                    key={index}
                                    variants={fadeUpVariants}
                                    className="bg-white border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-colors duration-300 hover:border-[#8a5cff]/20"
                                >
                                    {/* FAQ Header (Clickable) */}
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none group"
                                    >
                                        <span className={`text-base sm:text-lg font-semibold pr-4 transition-colors duration-300 ${isOpen ? "text-[#8a5cff]" : "text-black/80 group-hover:text-[#8a5cff]"}`}>
                                            {faq.question}
                                        </span>

                                        {/* Plus / Minus Icon */}
                                        <div className="relative w-4 h-4 flex-shrink-0 flex items-center justify-center">
                                            <span className={`absolute w-full h-[2px] transition-colors duration-300 ${isOpen ? "bg-[#8a5cff]" : "bg-black/80 group-hover:bg-[#8a5cff]"}`} />
                                            <span className={`absolute w-full h-[2px] transition-all duration-300 ${isOpen ? "bg-[#8a5cff] rotate-0 opacity-0" : "bg-black/80 group-hover:bg-[#8a5cff] rotate-90 opacity-100"}`} />
                                        </div>
                                    </button>

                                    {/* FAQ Body (Animated Dropdown) */}
                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 sm:px-8 pb-6 sm:pb-8 text-black/60 font-normal text-sm sm:text-base leading-relaxed">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default FAQSection;