import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const OpeningPage = () => {
  const navigate = useNavigate();
  const [visibleLetters, setVisibleLetters] = useState(0);
  const [showCap, setShowCap] = useState(false);
  const [capLanded, setCapLanded] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const happyBirthday = "Happy Birthday";
  
  useEffect(() => {
    // Drop letters one by one
    const letterInterval = setInterval(() => {
      setVisibleLetters((prev) => {
        if (prev >= happyBirthday.length) {
          clearInterval(letterInterval);
          // Show cap after all letters
          setTimeout(() => setShowCap(true), 300);
          return prev;
        }
        return prev + 1;
      });
    }, 150);

    return () => clearInterval(letterInterval);
  }, []);

  useEffect(() => {
    if (showCap) {
      setTimeout(() => setCapLanded(true), 500);
      setTimeout(() => setShowImage(true), 800);
      setTimeout(() => setShowContent(true), 1200);
    }
  }, [showCap]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-light via-lavender-light to-peach-light">
      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Stars */}
        {[...Array(15)].map((_, i) => (
          <Star
            key={`star-${i}`}
            className="absolute text-primary/30 fill-primary/20 animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${15 + Math.random() * 20}px`,
              height: `${15 + Math.random() * 20}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
        
        {/* Sparkles */}
        {[...Array(10)].map((_, i) => (
          <Sparkles
            key={`sparkle-${i}`}
            className="absolute text-lavender/40 animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 15}px`,
              height: `${20 + Math.random() * 15}px`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}

        {/* Cat emojis */}
        {["😺", "😸", "😻", "🐱", "😽"].map((emoji, i) => (
          <span
            key={`cat-${i}`}
            className="absolute text-2xl animate-float-slow opacity-60"
            style={{
              left: `${10 + i * 20}%`,
              top: `${15 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          >
            {emoji}
          </span>
        ))}

        {/* Smileys */}
        {["😊", "🥰", "💕", "✨", "🎀"].map((emoji, i) => (
          <span
            key={`smiley-${i}`}
            className="absolute text-xl animate-float opacity-50"
            style={{
              right: `${5 + i * 18}%`,
              bottom: `${20 + (i % 4) * 15}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {emoji}
          </span>
        ))}

        {/* Party decorations */}
        {["🎈", "🎉", "🎊", "🎁", "🎂"].map((emoji, i) => (
          <span
            key={`party-${i}`}
            className="absolute text-3xl animate-float-slow opacity-70"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 30 + 5}%`,
              animationDelay: `${i * 0.7}s`,
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Dropping text */}
        <div className="relative mb-8">
          <h1 className="font-pacifico text-5xl md:text-7xl lg:text-8xl text-primary flex flex-wrap justify-center">
            {happyBirthday.split("").map((letter, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-300 ${
                  index < visibleLetters
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-20"
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h1>
          
          {/* Birthday cap on 'y' */}
          {showCap && (
            <span
              className={`absolute text-4xl md:text-5xl transition-all duration-500 ${
                capLanded ? "translate-y-0 rotate-12" : "-translate-y-32 rotate-0"
              }`}
              style={{
                right: "0%",
                top: "-35px",
              }}
            >
              🎂
            </span>
          )}
        </div>

        {/* Balloon image section */}
        {showImage && (
          <div className="relative mb-8 animate-fade-in-up">
            {/* Balloons */}
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 flex gap-2">
              {["🎈", "🎈", "🎈"].map((balloon, i) => (
                <span
                  key={i}
                  className="text-4xl animate-float"
                  style={{
                    animationDelay: `${i * 0.3}s`,
                    color: i === 0 ? "#ff6b9d" : i === 1 ? "#a78bfa" : "#fbbf24",
                  }}
                >
                  {balloon}
                </span>
              ))}
            </div>
            
            {/* String lines */}
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 flex gap-8">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-px h-16 bg-gradient-to-b from-muted-foreground/50 to-transparent"
                />
              ))}
            </div>

            {/* Main image */}
            <div className="relative p-2 bg-card rounded-2xl shadow-card">
              <img
                src="https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=300&h=300&fit=crop"
                alt="Birthday celebration"
                className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-xl"
              />
              <div className="absolute -bottom-2 -right-2 text-3xl animate-bounce">
                💖
              </div>
            </div>
          </div>
        )}

        {/* Date and button */}
        {showContent && (
          <div className="text-center animate-bounce-in">
            <p className="font-dancing text-3xl md:text-4xl text-foreground mb-6">
              27th May ✨
            </p>
            
            <Button
              onClick={() => navigate("/surprise")}
              className="group relative px-8 py-6 text-lg font-poppins bg-gradient-to-r from-primary to-lavender hover:from-lavender hover:to-primary transition-all duration-500 shadow-glow hover:shadow-[0_0_40px_hsl(350_70%_65%/0.6)] rounded-full"
            >
              <span className="relative z-10 flex items-center gap-2">
                Click here for Surprise
                <span className="text-2xl group-hover:animate-bounce">🎁</span>
              </span>
              <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OpeningPage;
