import React from 'react';

const Footer = () => {
    return (
        <footer className="relative w-full bg-[#111] text-white pt-32 sm:pt-40 pb-8 mt-32">

            {/* ─── OVERLAPPING CTA BANNER ───────────────────────────────────── */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] px-5 sm:px-8 lg:px-12">
                <div className="w-full bg-gray-300 rounded-xl sm:rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.15)] p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-200">
                    <div className="text-center md:text-left flex-1">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-black">Need more information?</h3>
                        <p className="text-gray-600 font-medium text-sm max-w-lg mx-auto md:mx-0">
                            Write your concern to us and our specialist will get back to you.
                        </p>
                    </div>
                    <button className="flex-shrink-0 px-8 py-4 bg-[#8853ff] text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#713fdb] transition-colors active:scale-95 shadow-lg">
                        Contact Now
                    </button>
                </div>
            </div>

            {/* ─── MAIN FOOTER CONTENT ──────────────────────────────────────── */}
            <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-x-6 gap-y-10 lg:gap-y-12">

                {/* logo and text */}
                <div className="col-span-2 md:col-span-3 lg:col-span-3 order-1 lg:order-1 flex flex-col items-center text-center md:items-start md:text-left">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-white border border-white/10 shadow-lg">
                            <span className="text-2xl font-bold">V</span>
                        </div>
                        <span className="font-bold text-2xl text-white tracking-tight uppercase">Task</span>
                    </div>
                    <p className="text-[#a0a0a0] text-sm leading-loose max-w-sm font-normal md:pr-4">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sintelit officia consequat
                    </p>
                </div>

                {/* social icons */}
                <div className="col-span-2 md:col-span-3 lg:col-span-3 order-5 md:order-2 lg:order-5 flex flex-col items-center md:items-end lg:items-start">
                    <h4 className="font-bold text-lg mb-6 tracking-wide text-white">Connect with us</h4>
                    <div className="flex gap-3 justify-center md:justify-end lg:justify-start flex-wrap">
                        {/* Facebook */}
                        <a href="#" className="w-10 h-10 rounded-full bg-[#333] hover:bg-[#8853ff] hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-sm text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                        </a>
                        {/* Twitter / X */}
                        <a href="#" className="w-10 h-10 rounded-full bg-[#333] hover:bg-[#8853ff] hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-sm text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                        </a>
                        {/* Instagram */}
                        <a href="#" className="w-10 h-10 rounded-full bg-[#333] hover:bg-[#8853ff] hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-sm text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="#" className="w-10 h-10 rounded-full bg-[#333] hover:bg-[#8853ff] hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-sm text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                        </a>
                    </div>
                </div>

                {/* company links */}
                <div className="col-span-1 md:col-span-2 lg:col-span-2 order-2 md:order-3 lg:order-2 flex flex-col items-center md:items-start text-center md:text-left">
                    <h4 className="font-bold text-lg mb-6 tracking-wide text-white">Company</h4>
                    <div className="flex flex-col gap-4">
                        <a href="#" className="text-[#a0a0a0] hover:text-white transition-colors text-sm font-medium">About Us</a>
                        <a href="#" className="text-[#a0a0a0] hover:text-white transition-colors text-sm font-medium">Careers</a>
                        <a href="#" className="text-[#a0a0a0] hover:text-white transition-colors text-sm font-medium">Our Story</a>
                        <a href="#" className="text-[#a0a0a0] hover:text-white transition-colors text-sm font-medium">Team</a>
                    </div>
                </div>

                {/* service links */}
                <div className="col-span-1 md:col-span-2 lg:col-span-2 order-3 md:order-4 lg:order-3 flex flex-col items-center md:items-start text-center md:text-left">
                    <h4 className="font-bold text-lg mb-6 tracking-wide text-white">Services</h4>
                    <div className="flex flex-col gap-4">
                        <a href="#" className="text-[#a0a0a0] hover:text-white transition-colors text-sm font-medium">Web Design</a>
                        <a href="#" className="text-[#a0a0a0] hover:text-white transition-colors text-sm font-medium">Development</a>
                        <a href="#" className="text-[#a0a0a0] hover:text-white transition-colors text-sm font-medium">SEO Strategy</a>
                        <a href="#" className="text-[#a0a0a0] hover:text-white transition-colors text-sm font-medium">Consulting</a>
                    </div>
                </div>

                {/* support links */}
                <div className="col-span-1 md:col-span-2 lg:col-span-2 order-4 md:order-5 lg:order-4 flex flex-col items-center md:items-start text-center md:text-left">
                    <h4 className="font-bold text-lg mb-6 tracking-wide text-white">Support</h4>
                    <div className="flex flex-col gap-4">
                        <a href="#" className="text-[#a0a0a0] hover:text-white transition-colors text-sm font-medium">Help Center</a>
                        <a href="#" className="text-[#a0a0a0] hover:text-white transition-colors text-sm font-medium">Privacy Policy</a>
                        <a href="#" className="text-[#a0a0a0] hover:text-white transition-colors text-sm font-medium">Terms of Service</a>
                        <a href="#" className="text-[#a0a0a0] hover:text-white transition-colors text-sm font-medium">Contact</a>
                    </div>
                </div>

            </div>

            {/* ─── COPYRIGHT & LEGAL ──────────────────────────────────────── */}
            <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                <p className="text-[#a0a0a0] text-sm">
                    © {new Date().getFullYear()} Task. All rights reserved.
                </p>
                <div className="flex gap-6 text-[#a0a0a0]">
                    <a href="#" className="hover:text-white transition-colors text-sm">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors text-sm">Terms of Service</a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
