"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const hero = document.getElementById("home");
            // Calculate the hero section's height. If not found, fallback to window height
            const heroHeight = hero ? hero.offsetHeight : window.innerHeight;

            // Trigger the background change after passing the hero section completely
            // Subtracting a small buffer (80px for navbar height) so it changes smoothly
            if (window.scrollY > heroHeight - 80) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Why Us", href: "#why-us" },
        { name: "Strategy", href: "#strategy" },
        { name: "Blog", href: "#blog" },
        { name: "FAQ", href: "#faq" },
    ];

    // Prevent background scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    return (
        <>
            <header
                className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled
                    ? "bg-gray-800 text-white shadow-lg py-4"
                    : "bg-white text-black py-6"
                    }`}
            >
                <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer">
                        <div className={`flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-500 ${isScrolled ? "bg-white text-black" : "bg-black text-white"}`}>
                            <svg
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-4-4h8" />
                            </svg>
                        </div>
                        <span className="ml-3 font-bold text-xl tracking-tight uppercase hidden sm:block">
                            Logo
                        </span>
                    </div>

                    {/* Desktop Links */}
                    <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-200 ${isScrolled
                                    ? "text-white/80 hover:text-white"
                                    : "text-black/80 hover:text-[#8a5cff]"
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Button */}
                    <div className="hidden lg:flex items-center">
                        <button
                            className={`px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 active:scale-95 border ${isScrolled
                                ? "bg-white text-black border-white hover:bg-transparent hover:text-white"
                                : "bg-black text-white border-black hover:bg-transparent hover:text-black"
                                }`}
                        >
                            Get a Quote
                        </button>
                    </div>

                    {/* Mobile Menu Toggle (Hamburger) */}
                    <div className="lg:hidden flex items-center z-[60]">
                        <button
                            className="focus:outline-none p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <svg
                                    className="w-8 h-8"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-8 h-8"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>

                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }}
                        className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col items-center justify-center lg:hidden"
                    >
                        <nav className="grid grid-cols-2 place-items-center gap-y-10 gap-x-4 w-full px-5 max-w-md">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-xl sm:text-2xl font-bold uppercase tracking-widest text-white hover:text-[#8a5cff] transition-colors text-center"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-4 col-span-2 px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 active:scale-95 bg-[#8a5cff] text-white w-full max-w-[280px]"
                            >
                                Get a Quote
                            </motion.button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
