import { useEffect, useCallback } from "react";

const HeartCursor = () => {
  const createHeart = useCallback((x: number, y: number) => {
    const heart = document.createElement("div");
    heart.className = "heart-cursor";
    heart.innerHTML = "💗";
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1500);
  }, []);

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let throttle = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (throttle) return;
      
      const distance = Math.sqrt(
        Math.pow(e.clientX - lastX, 2) + Math.pow(e.clientY - lastY, 2)
      );

      if (distance > 50) {
        createHeart(e.clientX, e.clientY);
        lastX = e.clientX;
        lastY = e.clientY;
        throttle = true;
        setTimeout(() => {
          throttle = false;
        }, 100);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [createHeart]);

  return null;
};

export default HeartCursor;
