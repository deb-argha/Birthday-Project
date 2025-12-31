import { useEffect, useState } from "react";
import { Heart, Sparkles, Star } from "lucide-react";

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  type: "heart" | "sparkle" | "star";
}

const FloatingHearts = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const newElements: FloatingElement[] = [];
    const types: FloatingElement["type"][] = ["heart", "sparkle", "star"];
    
    for (let i = 0; i < 20; i++) {
      newElements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 12 + Math.random() * 20,
        delay: Math.random() * 5,
        duration: 4 + Math.random() * 4,
        type: types[Math.floor(Math.random() * types.length)],
      });
    }
    setElements(newElements);
  }, []);

  const renderElement = (el: FloatingElement) => {
    const baseClass = "absolute text-primary/30 fill-primary/20";
    const style = {
      left: `${el.x}%`,
      top: `${el.y}%`,
      width: `${el.size}px`,
      height: `${el.size}px`,
      animationDelay: `${el.delay}s`,
      animationDuration: `${el.duration}s`,
    };

    switch (el.type) {
      case "heart":
        return (
          <Heart
            key={el.id}
            className={`${baseClass} animate-float-slow`}
            style={style}
          />
        );
      case "sparkle":
        return (
          <Sparkles
            key={el.id}
            className={`${baseClass} animate-sparkle`}
            style={{ ...style, animationDuration: "2s" }}
          />
        );
      case "star":
        return (
          <Star
            key={el.id}
            className={`${baseClass} animate-float`}
            style={style}
          />
        );
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {elements.map(renderElement)}
    </div>
  );
};

export default FloatingHearts;
