import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import aditiImg from "../Assests/aditi.jpg";
const OpeningPage = () => {
  const navigate = useNavigate();
  const [visibleLetters, setVisibleLetters] = useState(0);
  const [showCap, setShowCap] = useState(false);
  const [capLanded, setCapLanded] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  const happyText = "Happy";
  const birthdayText = "Birthday";
  const totalLetters = happyText.length + birthdayText.length;
  
  useEffect(() => {
    // Drop letters one by one
    const letterInterval = setInterval(() => {
      setVisibleLetters((prev) => {
        if (prev >= totalLetters) {
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

  useEffect(() => {
  if (!showCap) return;

  // Image + balloons
  setTimeout(() => setShowImage(true), 600);

  // Dear Aditi + button
  setTimeout(() => setShowText(true), 2500);

  // Welcome to 21 (LAST)
  setTimeout(() => setShowWelcome(true), 4200);
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

      {/* Main content - Two column layout */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* LEFT SIDE - Text */}
          <div className="flex flex-col items-start justify-center order-2 md:order-1">
            {/* Happy text */}
            <div className="relative mb-2">
              <h1 className="flex" style={{ fontFamily: "'Bangers', cursive" }}>
                {happyText.split("").map((letter, index) => (
                  <span
                    key={index}
                    className={`inline-block transition-all duration-300 text-7xl md:text-8xl lg:text-9xl ${
                      index < visibleLetters
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-20"
                    }`}
                    style={{
                      transitionDelay: `${index * 50}ms`,
                      color: "#fff8f0",
                      WebkitTextStroke: "2px hsl(350, 70%, 50%)",
                      textShadow: "3px 3px 0px hsl(350, 70%, 60%), 5px 5px 10px rgba(0,0,0,0.2)",
                      fontWeight: 700,
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </h1>
            </div>

            {/* Birthday text with cap */}
            <div className="relative mb-6">
              <h1 className="flex" style={{ fontFamily: "'Bangers', cursive" }}>
                {birthdayText.split("").map((letter, index) => {
                  const globalIndex = happyText.length + index;
                  return (
                    <span
                      key={index}
                      className={`inline-block transition-all duration-300 text-7xl md:text-8xl lg:text-9xl ${
                        globalIndex < visibleLetters
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-20"
                      }`}
                      style={{
                        transitionDelay: `${globalIndex * 50}ms`,
                        color: "#fff8f0",
                        WebkitTextStroke: "2px hsl(350, 70%, 50%)",
                        textShadow: "3px 3px 0px hsl(350, 70%, 60%), 5px 5px 10px rgba(0,0,0,0.2)",
                        fontWeight: 700,
                      }}
                    >
                      {letter}
                    </span>
                  );
                })}
              </h1>
              
              {/* Birthday cap on 'y' */}
              {showCap && (
                <span
                  className={`absolute text-9xl md:text-9xl transition-all duration-500 ${
                    capLanded ? "translate-y-0 rotate-12" : "-translate-y-32 rotate-0"
                  }`}
                  style={{
                    right: "-60px",
                    top: "-120px",
                  }}
                >
                  🥳
                </span>
              )}
            </div>

            {/* Date text */}
            {showWelcome && (
              <p className="
               mt-10
              font-dancing
              text-4xl md:text-5xl
              text-foreground
              animate-fade-in
              animate-pulse
              scale-110
              drop-shadow-[0_0_18px_rgba(255,255,255,0.6)]
              drop-shadow-[0_0_36px_rgba(255,182,193,0.35)]

              ">
                Welcome to 21 💦
              </p>
            )}
          </div>

          {/* RIGHT SIDE - Image */}
          <div className="flex flex-col items-center justify-center order-1 md:order-2">
            {/* Balloon image section */}
            {showImage && (
              <div className="relative mb-6 lift-group">
                {/* Balloons */}
                <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 flex gap-1">
                  {["🎈", "🎈", "🎈"].map((balloon, i) => (
                    <span
                      key={i}
                      className="text-6xl animate-float"
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
                <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 flex gap-20">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-px h-20 bg-gradient-to-b from-muted-foreground/50 to-transparent"
                    />
                  ))}
                </div>

                {/* Main image - Perfect circle */}
                <div className="relative p-3 bg-card rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.15)] border-4 border-white/60">
                  <img
                    src={aditiImg}
                    alt="Birthday celebration"
                    className="w-80 h-80 md:w-76 md:h-76 object-cover rounded-full"
                  />
                  <div className="absolute -bottom-2 -right-2 text-5xl animate-bounce">
                    💖
                  </div>
                </div>
              </div>
            )}

            {/* Dear Aditi text */}
            {showText && (
              <p className="font-dancing text-3xl md:text-4xl text-foreground animate-bounce-in">
                Dear Aditi 🎀
              </p>
            )}
          </div>
        </div>

        {/* Button - Centered below both columns */}
        {showText && (
          <div className="mt-12 animate-bounce-in">
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
