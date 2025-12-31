import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import FloatingHearts from "@/components/FloatingHearts";
import HeartCursor from "@/components/HeartCursor";
import HeroSection from "@/components/HeroSection";
import MessageCard from "@/components/MessageCard";
import MemoriesSection from "@/components/MemoriesSection";
import ReasonsSection from "@/components/ReasonsSection";
import SurpriseButton from "@/components/SurpriseButton";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the cute animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <FloatingHearts />
      <HeartCursor />
      
      <HeroSection name="My Love" />
      <MessageCard />
      <MemoriesSection />
      <ReasonsSection />
      <SurpriseButton />
      <Footer />
    </main>
  );
};

export default Index;
