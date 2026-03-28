import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import AIFeatures from "@/components/landing/AIFeatures";
import CTAWaitlist from "@/components/landing/CTAWaitlist";
import Hero from "@/components/landing/Hero";
import Pricing from "@/components/landing/Pricing";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import Testimonials from "@/components/landing/Testimonials";
import ThreePillars from "@/components/landing/ThreePillars";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <ThreePillars />
      <AIFeatures />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  );
}