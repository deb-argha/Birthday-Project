import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import theSmile from "../Assests/TheSmile.jpg";
import favMoment from "../Assests/favMoment.jpg";
import usImg from "../Assests/usImg.jpg";
import happiness from "../Assests/happiness.jpg";
import beautiful from "../Assests/butiful.jpg";
import heartImg from "../Assests/heart.jpg";
interface Memory {
  id: number;
  caption: string;
  emoji: string;
  image: string;
}

const memories: Memory[] = [
  { id: 1, caption: "This smile", emoji: "🥺", image: theSmile },
  { id: 2, caption: "Our Best Memory", emoji: "🧿", image: favMoment },
  { id: 3, caption: "Usssss", emoji: "✨", image: usImg },
  { id: 4, caption: "Kalyani Uhmmm", emoji: "💗", image: happiness },
  { id: 5, caption: "Cutiesss", emoji: "🌸", image: beautiful },
  { id: 6, caption: "My Babyyy", emoji: "💖", image: heartImg },
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
              <div className="aspect-square rounded-sm relative overflow-hidden group shadow-lg">
  <img
    src={memory.image}
    alt={memory.caption}
    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
  />

  {/* Soft overlay */}
  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

  {/* Shimmer */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
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
