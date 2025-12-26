"use client";

import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Results } from "@/components/home/Results";
import { DoctorFlipCard } from "@/components/home/DoctorFlipCard";
import { EmotionalMessage } from "@/components/home/EmotionalMessage";
import { TechTicker } from "@/components/home/TechTicker";
import { CustomerJourney } from "@/components/home/CustomerJourney";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <Results />
      <DoctorFlipCard />
      <EmotionalMessage />
      <TechTicker />
      <CustomerJourney />
      <FAQ />
      <CTA />
    </div>
  );
}
