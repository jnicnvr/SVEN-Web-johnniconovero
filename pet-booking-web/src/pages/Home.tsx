import Header from "@/pages/Header";
import HeroSection from "@/pages/HeroSection";
import Footer from "@/pages/Footer";
import BookingSection from "@/pages/BookingSection";
import ExpertCareSection from "@/pages/ExpertCareSection";
import { useRef } from "react";
export default function Home() {
  const aboutUsRef = useRef<HTMLElement | null>(null);
  const bookingRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (section: "about" | "booking") => {
    const targetRef = section === "about" ? aboutUsRef : bookingRef;
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
};
    return (
        <div className="min-h-screen bg-white">
            <Header onNavigate={scrollToSection} />
            <HeroSection onNavigate={scrollToSection} />
            <ExpertCareSection onNavigate={scrollToSection} ref={aboutUsRef} />
            <BookingSection ref={bookingRef} />
            <Footer />
        </div>
    );
}
