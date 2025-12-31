import { Heart } from "lucide-react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gradient-hero">
      <div className="animate-loading flex flex-col items-center gap-6">
        <div className="relative">
          <Heart 
            className="w-16 h-16 text-primary fill-primary animate-pulse-heart" 
          />
          <div className="absolute inset-0 animate-ping">
            <Heart className="w-16 h-16 text-primary/30 fill-primary/30" />
          </div>
        </div>
        <p className="font-dancing text-2xl text-foreground/80">
          Made with love 💕
        </p>
      </div>
      
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/20 fill-primary/10 animate-float-slow"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
              width: `${20 + i * 5}px`,
              height: `${20 + i * 5}px`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
