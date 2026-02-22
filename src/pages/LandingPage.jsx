import React from "react";
import LandingNavbar from "../components/landing/LandingNavbar";
import HeroSection from "../components/landing/HeroSection";
import StatsSection from "../components/landing/StatsSection";
import ServicesSection from "../components/landing/ServicesSection";
import WhyUsSection from "../components/landing/WhyUsSection";
import ProcessSection from "../components/landing/ProcessSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import CTABannerSection from "../components/landing/CTABannerSection";
import ContactSection from "../components/landing/ContactSection";
import FooterSection from "../components/landing/FooterSection";

// ─────────────────────────────────────────────
// LANDING PAGE — Página principal del taller
// ─────────────────────────────────────────────

export default function LandingPage() {
    return (
        <div style={{ backgroundColor: "#080818", minHeight: "100vh" }}>
            <LandingNavbar />
            <HeroSection />
            <StatsSection />
            <ServicesSection />
            <WhyUsSection />
            <ProcessSection />
            <TestimonialsSection />
            <CTABannerSection />
            <ContactSection />
            <FooterSection />
        </div>
    );
}
