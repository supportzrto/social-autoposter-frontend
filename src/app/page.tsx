"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorks from "@/components/home/HowItWorks";
import PricingPreview from "@/components/home/PricingPreview";
import CTASection from "@/components/home/CTASection";


export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch(
      "https://social-poster-app.up.railway.app/auth/me",
      {
        credentials: "include",
      }
    )
      .then((res) => {
        if (res.ok) {
          router.push("/dashboard");
        } else {
          setLoading(false);
        }
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return null;
  }

  return (
    <>
      <Navbar />
      <HeroSection />
       <FeaturesSection />
       <HowItWorks />
       <PricingPreview />
       <CTASection />
       <Footer />
    </>
  );
}