import { useState, useCallback } from "react";
import { Gift, Heart, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Confetti {
  id: number;
  x: number;
  color: string;
  delay: number;
}

const SurpriseButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [confetti, setConfetti] = useState<Confetti[]>([]);

  const colors = [
    "hsl(350, 70%, 65%)", // rose
    "hsl(280, 60%, 75%)", // lavender
    "hsl(25, 80%, 75%)",  // peach
    "hsl(350, 60%, 80%)", // light rose
    "hsl(280, 50%, 85%)", // light lavender
  ];

  const createConfetti = useCallback(() => {
    const newConfetti: Confetti[] = [];
    for (let i = 0; i < 50; i++) {
      newConfetti.push({
        id: i,
        x: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.5,
      });
    }
    setConfetti(newConfetti);
    
    // Clear confetti after animation
    setTimeout(() => {
      setConfetti([]);
    }, 3500);
  }, []);

  const handleClick = () => {
    setIsOpen(true);
    createConfetti();
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Confetti */}
      {confetti.map((c) => (
        <div
          key={c.id}
          className="fixed top-0 w-3 h-3 rounded-full animate-confetti z-50"
          style={{
            left: `${c.x}%`,
            backgroundColor: c.color,
            animationDelay: `${c.delay}s`,
          }}
        />
      ))}

      <div className="max-w-md mx-auto text-center">
        {!isOpen ? (
          <div className="animate-fade-in-up">
            <Button
              onClick={handleClick}
              className="group relative px-8 py-6 text-xl font-dancing bg-gradient-to-r from-primary to-lavender hover:from-primary/90 hover:to-lavender/90 text-primary-foreground rounded-full shadow-glow hover:scale-105 transition-all duration-300"
            >
              <Gift className="w-6 h-6 mr-2 group-hover:animate-wiggle" />
              Click me 🎁
            </Button>
            <p className="mt-4 text-muted-foreground font-poppins text-sm">
              I have a surprise for you...
            </p>
          </div>
        ) : (
          <div className="animate-bounce-in relative">
            <div className="gradient-card rounded-3xl p-8 md:p-10 shadow-glow relative overflow-hidden">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>

              <Heart className="w-16 h-16 mx-auto mb-6 text-primary fill-primary animate-pulse-heart" />
              
              <h4 className="font-pacifico text-3xl text-foreground mb-4">
                My Dearest 💖
              </h4>
              
              <p className="font-dancing text-2xl text-foreground/90 leading-relaxed">
                You make my heart feel safe.
                <br />
                I love you more than words can say.
              </p>
              
              <div className="mt-6 flex justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Heart
                    key={i}
                    className="w-5 h-5 text-primary fill-primary animate-pulse-heart"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SurpriseButton;
