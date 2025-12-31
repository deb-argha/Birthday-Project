import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

interface Memory {
  id: number;
  caption: string;
  emoji: string;
}

const memories: Memory[] = [
  { id: 1, caption: "This smile", emoji: "🥺" },
  { id: 2, caption: "My favorite moment", emoji: "💕" },
  { id: 3, caption: "Us", emoji: "✨" },
  { id: 4, caption: "Pure happiness", emoji: "💗" },
  { id: 5, caption: "Always beautiful", emoji: "🌸" },
  { id: 6, caption: "My heart", emoji: "💖" },
];

const MemoriesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("memories-section");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="memories-section" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h3 className="font-pacifico text-4xl md:text-5xl text-center text-foreground mb-4">
          Our Memories 📸
        </h3>
        <p className="font-poppins text-muted-foreground text-center mb-12">
          Every picture tells our story 💕
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              className={`polaroid cursor-pointer ${
                isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
              }`}
              style={{
                animationDelay: `${index * 0.15}s`,
                animationFillMode: "forwards",
              }}
            >
              {/* Image placeholder */}
              <div className="aspect-square bg-gradient-to-br from-rose-light via-lavender-light to-peach-light rounded-sm flex items-center justify-center relative overflow-hidden group">
                <Heart className="w-12 h-12 text-primary/40 fill-primary/20 group-hover:scale-110 transition-transform duration-300" />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
              
              {/* Caption */}
              <p className="font-dancing text-xl text-center mt-4 text-foreground/80">
                {memory.caption} {memory.emoji}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;
