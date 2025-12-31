import { Heart, Sparkles } from "lucide-react";

interface HeroSectionProps {
  name?: string;
}

const HeroSection = ({ name = "My Love" }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 animate-float delay-100">
        <Heart className="w-8 h-8 text-primary/40 fill-primary/30" />
      </div>
      <div className="absolute top-20 right-16 animate-float delay-300">
        <Sparkles className="w-6 h-6 text-lavender/60" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float delay-500">
        <Heart className="w-10 h-10 text-peach/50 fill-peach/30" />
      </div>
      <div className="absolute bottom-40 right-12 animate-float delay-200">
        <Sparkles className="w-8 h-8 text-primary/40" />
      </div>

      {/* Main content */}
      <div className="text-center z-10 max-w-3xl mx-auto">
        <div className="animate-bounce-in">
          <Heart className="w-16 h-16 mx-auto mb-6 text-primary fill-primary animate-pulse-heart" />
        </div>
        
        <h1 className="font-pacifico text-5xl md:text-7xl lg:text-8xl text-foreground mb-4 animate-bounce-in delay-100">
          Happy Birthday 💖
        </h1>
        
        <h2 className="font-dancing text-4xl md:text-6xl text-primary mb-8 animate-bounce-in delay-200">
          {name}
        </h2>
        
        <p className="font-poppins text-lg md:text-xl text-muted-foreground max-w-md mx-auto animate-fade-in-up delay-400">
          To the girl who makes my world brighter ✨
        </p>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/40 rounded-full mx-auto flex justify-center">
            <div className="w-1.5 h-3 bg-primary/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
