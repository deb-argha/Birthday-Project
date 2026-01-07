import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";

const SurprisePage = () => {
  const navigate = useNavigate();
  const [blownCandles, setBlownCandles] = useState<number[]>([]);
  const [showCelebration, setShowCelebration] = useState(false);
  const [showWishPopup, setShowWishPopup] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const [showNextButton, setShowNextButton] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const totalCandles = 12;
  const allBlown = blownCandles.length === totalCandles;

  useEffect(() => {
    if (allBlown && !showCelebration) {
      setShowCelebration(true);
      setShowWishPopup(true);
      
      // Play birthday music
      if (audioRef.current) {
        audioRef.current.play().catch(console.log);
      }
    }
  }, [allBlown, showCelebration]);

  useEffect(() => {
    if (showWishPopup && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setShowWishPopup(false);
      setShowNextButton(true);
    }
  }, [showWishPopup, countdown]);

  const blowCandle = (index: number) => {
    if (!blownCandles.includes(index)) {
      setBlownCandles([...blownCandles, index]);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-lavender-light via-rose-light to-peach-light">
      {/* Birthday music */}
      <audio ref={audioRef} loop>
        <source src="https://www.soundjay.com/human/sounds/applause-01.mp3" type="audio/mpeg" />
      </audio>

      {/* Celebration confetti */}
      {showCelebration && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: "-20px",
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              {["❤️", "💖", "✨", "🎉", "💕", "🌟"][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>
      )}

      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-primary/30 animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 20}px`,
              height: `${20 + Math.random() * 20}px`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <h2 className="font-pacifico text-3xl md:text-5xl text-primary mb-8 text-center">
          🎂 Make a Wish! 🎂
        </h2>

        {/* Cake */}
        <div className="relative mb-8">
          {/* Cake base */}
          <div className="relative">
            {/* Cake layers */}
            <div className="relative w-80 md:w-96">
              {/* Top layer - chocolate */}
              <div className="h-16 bg-gradient-to-b from-amber-800 to-amber-900 rounded-t-3xl relative overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-amber-600 to-transparent" />
                {/* Chocolate drip */}
                <div className="absolute -bottom-4 left-1/4 w-8 h-8 bg-amber-800 rounded-full" />
                <div className="absolute -bottom-3 left-1/2 w-6 h-6 bg-amber-800 rounded-full" />
                <div className="absolute -bottom-5 right-1/4 w-10 h-10 bg-amber-800 rounded-full" />
              </div>
              
              {/* Bottom layer - vanilla */}
              <div className="h-24 bg-gradient-to-b from-amber-100 to-amber-200 rounded-b-lg shadow-lg">
                <div className="absolute inset-x-0 top-0 h-2 bg-amber-50/50" />
              </div>

              {/* Cake plate */}
              <div className="h-4 bg-gradient-to-b from-slate-200 to-slate-300 rounded-b-xl shadow-md mx-[-10px]" />
            </div>

            {/* Candles */}
            <div className="absolute -top-24 left-0 right-0 flex justify-center gap-3 md:gap-4">
              {[...Array(totalCandles)].map((_, i) => (
                <div
                  key={i}
                  className="relative cursor-pointer group"
                  onMouseEnter={() => blowCandle(i)}
                >
                  {/* Candle stick */}
                  <div
                    className="w-3 h-12 rounded-t-sm transition-all duration-300"
                    style={{
                      background: `linear-gradient(180deg, 
                        ${i % 3 === 0 ? "#f472b6" : i % 3 === 1 ? "#a78bfa" : "#fbbf24"} 0%, 
                        ${i % 3 === 0 ? "#ec4899" : i % 3 === 1 ? "#8b5cf6" : "#f59e0b"} 100%)`,
                    }}
                  />
                  
                  {/* Flame */}
                  {!blownCandles.includes(i) && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="relative">
                        <div className="w-3 h-5 bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-200 rounded-full animate-pulse" />
                        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-3 bg-gradient-to-t from-orange-300 to-white rounded-full animate-pulse" />
                      </div>
                      {/* Flame glow */}
                      <div className="absolute -inset-2 bg-yellow-400/30 rounded-full blur-md animate-pulse" />
                    </div>
                  )}
                  
                  {/* Smoke when blown */}
                  {blownCandles.includes(i) && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-1 h-6 bg-gradient-to-t from-gray-400/50 to-transparent animate-fade-in-up" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Instructions */}
        {!allBlown && (
          <p className="font-dancing text-xl md:text-2xl text-foreground/80 text-center mb-8 animate-pulse">
            Blow the candles one by one by placing the cursor on them 🌬️
          </p>
        )}

        {/* Progress */}
        <div className="flex items-center gap-2 mb-6">
          <span className="font-poppins text-muted-foreground">
            {blownCandles.length} / {totalCandles} candles blown
          </span>
          {blownCandles.length > 0 && (
            <span className="text-xl">
              {blownCandles.length === totalCandles ? "🎉" : "💨"}
            </span>
          )}
        </div>

        {/* Wish popup */}
        {showWishPopup && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-sm">
            <div className="relative animate-bounce-in">
              {/* Heart shape container */}
              <div className="relative">
                <Heart 
                  className="w-64 h-64 md:w-80 md:h-80 text-primary fill-primary drop-shadow-2xl"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-12 pt-8">
                  <p className="font-pacifico text-2xl md:text-3xl text-primary-foreground mb-4">
                    Make a Wish 💖
                  </p>
                  <div className="font-poppins text-4xl md:text-5xl text-primary-foreground font-bold">
                    {countdown}
                  </div>
                  <p className="font-dancing text-lg text-primary-foreground/80 mt-2">
                    seconds
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Next page button */}
        {showNextButton && (
          <Button
            onClick={() => navigate("/main")}
            className="animate-bounce-in px-8 py-6 text-lg font-poppins bg-gradient-to-r from-primary to-lavender hover:from-lavender hover:to-primary transition-all duration-500 shadow-glow rounded-full"
          >
            Click here to go to Next Page ➡️
          </Button>
        )}
      </div>
    </div>
  );
};

export default SurprisePage;
