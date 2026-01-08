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
        <h2 className="font-pacifico text-3xl md:text-5xl text-primary mb-12 text-center">
          🎂 Make a Wish! 🎂
        </h2>

        {/* Cake */}
        <div className="relative mb-8">
          {/* Cake container with candles ON TOP */}
          <div className="relative w-80 md:w-96">
            
            {/* Candles - positioned at the very top, sitting on cake */}
            <div className="relative flex justify-center gap-2 md:gap-3 mb-0 px-4">
              {[...Array(totalCandles)].map((_, i) => (
                <div
                  key={i}
                  className="relative cursor-pointer group flex flex-col items-center"
                  onClick={() => blowCandle(i)}
                >
                  {/* Flame */}
                  {!blownCandles.includes(i) && (
                    <div className="relative mb-0.5">
                      <div className="relative">
                        <div className="w-2.5 h-4 bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-200 rounded-full animate-pulse" />
                        <div className="absolute top-0.5 left-1/2 transform -translate-x-1/2 w-1 h-2.5 bg-gradient-to-t from-orange-300 to-white rounded-full animate-pulse" />
                      </div>
                      {/* Flame glow */}
                      <div className="absolute -inset-1.5 bg-yellow-400/30 rounded-full blur-sm animate-pulse" />
                    </div>
                  )}
                  
                  {/* Smoke when blown */}
                  {blownCandles.includes(i) && (
                    <div className="h-4 flex items-end">
                      <div className="w-0.5 h-4 bg-gradient-to-t from-gray-400/50 to-transparent animate-fade-in-up" />
                    </div>
                  )}
                  
                  {/* Candle stick */}
                  <div
                    className="w-2 md:w-2.5 h-8 rounded-t-sm transition-all duration-300 shadow-sm"
                    style={{
                      background: `linear-gradient(180deg, 
                        ${i % 3 === 0 ? "#f472b6" : i % 3 === 1 ? "#a78bfa" : "#fbbf24"} 0%, 
                        ${i % 3 === 0 ? "#ec4899" : i % 3 === 1 ? "#8b5cf6" : "#f59e0b"} 100%)`,
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Cake layers */}
            <div className="relative">
              {/* Top chocolate frosting layer */}
              <div className="h-8 bg-gradient-to-b from-amber-700 to-amber-800 rounded-t-2xl relative shadow-inner">
                {/* Frosting shine */}
                <div className="absolute top-1 left-4 right-4 h-1.5 bg-amber-600/40 rounded-full" />
                {/* Chocolate drips */}
                <div className="absolute -bottom-3 left-[15%] w-4 h-5 bg-gradient-to-b from-amber-800 to-amber-900 rounded-b-full" />
                <div className="absolute -bottom-4 left-[30%] w-3 h-6 bg-gradient-to-b from-amber-800 to-amber-900 rounded-b-full" />
                <div className="absolute -bottom-2 left-[45%] w-5 h-4 bg-gradient-to-b from-amber-800 to-amber-900 rounded-b-full" />
                <div className="absolute -bottom-5 left-[60%] w-4 h-7 bg-gradient-to-b from-amber-800 to-amber-900 rounded-b-full" />
                <div className="absolute -bottom-3 left-[75%] w-3 h-5 bg-gradient-to-b from-amber-800 to-amber-900 rounded-b-full" />
              </div>
              
              {/* Top cake layer - vanilla with cream */}
              <div className="h-12 bg-gradient-to-b from-amber-100 to-amber-200 relative border-l-4 border-r-4 border-amber-50/50">
                {/* Cream stripe */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-2 bg-gradient-to-b from-rose-100 to-rose-200" />
                {/* Side texture */}
                <div className="absolute inset-y-0 left-0 w-2 bg-amber-50/30" />
                <div className="absolute inset-y-0 right-0 w-2 bg-amber-300/20" />
              </div>
              
              {/* Middle frosting layer - pink cream */}
              <div className="h-4 bg-gradient-to-b from-rose-200 to-rose-300 relative">
                {/* Piping decoration */}
                <div className="absolute top-0 left-0 right-0 flex justify-around">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-3 h-2 bg-rose-100 rounded-b-full -mt-0.5" />
                  ))}
                </div>
              </div>
              
              {/* Bottom cake layer - larger vanilla */}
              <div className="h-16 bg-gradient-to-b from-amber-100 to-amber-200 relative mx-[-8px] rounded-b-lg border-l-4 border-r-4 border-amber-50/50">
                {/* Cream stripe */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-2 bg-gradient-to-b from-amber-50 to-amber-100" />
                {/* Side highlights */}
                <div className="absolute inset-y-0 left-0 w-3 bg-amber-50/30 rounded-bl-lg" />
                <div className="absolute inset-y-0 right-0 w-3 bg-amber-300/20 rounded-br-lg" />
              </div>
              
              {/* Bottom frosting border */}
              <div className="h-3 bg-gradient-to-b from-rose-200 to-rose-300 mx-[-8px] rounded-b-lg relative">
                {/* Bottom piping */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-around">
                  {[...Array(14)].map((_, i) => (
                    <div key={i} className="w-2.5 h-2 bg-rose-100 rounded-b-full" />
                  ))}
                </div>
              </div>

              {/* Cake plate/stand */}
              <div className="h-3 bg-gradient-to-b from-slate-100 to-slate-200 rounded-full mx-[-16px] shadow-md" />
              <div className="h-6 w-24 bg-gradient-to-b from-slate-200 to-slate-300 rounded-b-lg mx-auto shadow-lg" />
            </div>
          </div>
        </div>

        {/* Instructions */}
        {!allBlown && (
          <p className="font-dancing text-xl md:text-2xl text-foreground/80 text-center mb-8 animate-pulse">
            Click on the candles one by one to blow them 🌬️
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
