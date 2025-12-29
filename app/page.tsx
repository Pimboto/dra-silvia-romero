"use client";

import { Hero } from "@/components/home/Hero";
import { Results } from "@/components/home/Results";
import { DoctorFlipCard } from "@/components/home/DoctorFlipCard";
import { Services } from "@/components/home/Services";
import { Testimonials } from "@/components/home/Testimonials";
import { CustomerJourney } from "@/components/home/CustomerJourney";
import { FAQ } from "@/components/home/FAQ";
import { TechTicker } from "@/components/home/TechTicker";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Results />
      <DoctorFlipCard />
      <Services />
      <Testimonials />
      <CustomerJourney />
      <FAQ />
      <TechTicker />
      <CTA />
    </div>
  );
}
