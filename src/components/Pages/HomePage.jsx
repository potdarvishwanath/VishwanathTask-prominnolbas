import React from 'react';
import Hero from '../Sections/HomePage/HeroSection'
import TrustSection from '../Sections/HomePage/WhyUs'
import StrategySection from '../Sections/HomePage/StatsBanner'
import OurPartnersSection from '../Sections/HomePage/Partners'
import LatestBlogSection from '../Sections/HomePage/BlogSection'
import TestimonialSection from '../Sections/HomePage/TestimonialSection'
import FAQSection from '../Sections/HomePage/FAQsection'

const HomePage = () => {
    return (
        <main>
            <Hero />
            <TrustSection />
            <StrategySection />
            <OurPartnersSection />
            <LatestBlogSection />
            <TestimonialSection />
            <FAQSection />
        </main>
    );
};

export default HomePage;
