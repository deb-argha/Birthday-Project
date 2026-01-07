import { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import HeartCursor from "@/components/HeartCursor";
import MessageCard from "@/components/MessageCard";
import MemoriesSection from "@/components/MemoriesSection";
import ReasonsSection from "@/components/ReasonsSection";
import StoryMode from "@/components/StoryMode";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const MainContentPage = () => {
  const [showStoryMode, setShowStoryMode] = useState(false);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <FloatingHearts />
      <HeartCursor />
      
      {/* Hero for main page */}
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center px-4 pt-12">
        <h1 className="font-pacifico text-4xl md:text-6xl text-primary mb-4 text-center animate-bounce-in">
          For My Favorite Person 💖
        </h1>
        <p className="font-dancing text-2xl md:text-3xl text-foreground/70 text-center animate-fade-in-up">
          Every moment with you is a treasure ✨
        </p>
      </section>

      <MessageCard />
      <MemoriesSection />
      <ReasonsSection />

      {/* Story Mode Button */}
      <section className="py-16 px-4 flex flex-col items-center">
        <Button
          onClick={() => setShowStoryMode(true)}
          className="group relative px-10 py-8 text-xl font-poppins bg-gradient-to-r from-lavender to-primary hover:from-primary hover:to-lavender transition-all duration-500 shadow-glow hover:shadow-[0_0_50px_hsl(280_60%_75%/0.6)] rounded-full"
        >
          <span className="relative z-10 flex items-center gap-3">
            Enter Story Mode
            <Sparkles className="w-6 h-6 group-hover:animate-spin" />
          </span>
          <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>
      </section>

      <Footer />

      {/* Story Mode Modal */}
      {showStoryMode && (
        <StoryMode onClose={() => setShowStoryMode(false)} />
      )}
    </main>
  );
};

export default MainContentPage;
