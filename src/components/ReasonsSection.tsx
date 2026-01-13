import { useState, useEffect } from "react";
import { Heart, Star, Sparkles, Flower2, Sun, Moon } from "lucide-react";

interface Reason {
  id: number;
  text: string;
  icon: React.ElementType;
}

const reasons: Reason[] = [
  { id: 1, text: "You understand me like no one does", icon: Sun },
  { id: 2, text: "You feel like my home! My World", icon: Sparkles },
  { id: 3, text: "I Love your Continuous BakBak", icon: Heart },
  { id: 4, text: "I feel really safe whenever I am with you", icon: Star },
  { id: 5, text: "I love how you care about me", icon: Flower2 },
  { id: 6, text: "You are the 'Everything' in my life I want", icon: Moon },
];

const ReasonsSection = () => {
  const [visibleReasons, setVisibleReasons] = useState<number[]>([]);
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !sectionVisible) {
          setSectionVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("reasons-section");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, [sectionVisible]);

  useEffect(() => {
    if (sectionVisible) {
      reasons.forEach((_, index) => {
        setTimeout(() => {
          setVisibleReasons((prev) => [...prev, index]);
        }, index * 400);
      });
    }
  }, [sectionVisible]);

  return (
    <section id="reasons-section" className="py-20 px-4 relative">
      <div className="max-w-3xl mx-auto">
        <h3 className="font-pacifico text-4xl md:text-5xl text-center text-foreground mb-4">
          Reasons I Love You 💗
        </h3>
        <p className="font-poppins text-muted-foreground text-center mb-12">
          (There are infinite, but here are some(1%)) ✨
        </p>

        <div className="space-y-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isVisible = visibleReasons.includes(index);
            
            return (
              <div
                key={reason.id}
                className={`flex items-center gap-4 p-5 rounded-2xl gradient-card shadow-soft group hover:shadow-card transition-all duration-300 ${
                  isVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: `${index * 0.1}s`,
                }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-rose-light to-lavender-light flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-dancing text-xl md:text-2xl text-foreground/90">
                  {reason.text} 💕
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
