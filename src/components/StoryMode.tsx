import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, ChevronRight, Heart } from "lucide-react";

interface StoryModeProps {
  onClose: () => void;
}

const stories = [
  {
    gif: "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
    text: "The way you light up every room you walk into ✨",
  },
  {
    gif: "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
    text: "Your infectious laughter that makes everyone smile 😊",
  },
  {
    gif: "https://media.giphy.com/media/l4pTdcifPZLpDjL1e/giphy.gif",
    text: "The kindness you show to everyone around you 💕",
  },
  {
    gif: "https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif",
    text: "Your determination when you set your mind to something 💪",
  },
  {
    gif: "https://media.giphy.com/media/l0HlHFRbmaZtBRhXG/giphy.gif",
    text: "The way your eyes sparkle when you're excited 🌟",
  },
  {
    gif: "https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif",
    text: "Your creativity and unique perspective on life 🎨",
  },
  {
    gif: "https://media.giphy.com/media/l0MYGb1LuZ3n7dRnO/giphy.gif",
    text: "How you make ordinary moments feel magical ✨",
  },
  {
    gif: "https://media.giphy.com/media/3oz8xIsloV7zOmt81G/giphy.gif",
    text: "The comfort of just being near you 🤗",
  },
  {
    gif: "https://media.giphy.com/media/l4pT2ASyWWGw4NbDG/giphy.gif",
    text: "Your beautiful heart that loves so deeply 💖",
  },
  {
    gif: "https://media.giphy.com/media/26FLdmIp6wJr91JAI/giphy.gif",
    text: "Everything about you makes my world better 🌈",
  },
];

const StoryMode = ({ onClose }: StoryModeProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleNext = () => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Progress bar */}
      <div className="absolute top-4 left-4 right-16 flex gap-1">
        {stories.map((_, i) => (
          <div
            key={i}
            className="h-1 flex-1 rounded-full overflow-hidden bg-white/20"
          >
            <div
              className={`h-full bg-primary transition-all duration-300 ${
                i < currentIndex
                  ? "w-full"
                  : i === currentIndex
                  ? "w-full animate-pulse"
                  : "w-0"
              }`}
            />
          </div>
        ))}
      </div>

      {!isFinished ? (
        <div className="w-full max-w-lg px-4 animate-fade-in-up" key={currentIndex}>
          {/* GIF */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6">
            <img
              src={stories[currentIndex].gif}
              alt="Story moment"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Text */}
          <p className="font-dancing text-2xl md:text-3xl text-white text-center mb-8">
            {stories[currentIndex].text}
          </p>

          {/* Navigation */}
          <div className="flex justify-center">
            <Button
              onClick={handleNext}
              className="px-8 py-6 text-lg font-poppins bg-gradient-to-r from-primary to-lavender hover:from-lavender hover:to-primary transition-all duration-500 rounded-full"
            >
              {currentIndex < stories.length - 1 ? (
                <>
                  Next <ChevronRight className="w-5 h-5 ml-2" />
                </>
              ) : (
                "Continue 💕"
              )}
            </Button>
          </div>

          {/* Story counter */}
          <p className="text-center text-white/50 mt-4 font-poppins">
            {currentIndex + 1} / {stories.length}
          </p>
        </div>
      ) : (
        /* Final screen */
        <div className="text-center animate-bounce-in px-4">
          <Heart className="w-24 h-24 mx-auto text-primary fill-primary mb-6 animate-pulse-heart" />
          <h2 className="font-pacifico text-4xl md:text-5xl text-white mb-4">
            That's You! 💖
          </h2>
          <p className="font-dancing text-2xl text-white/80 mb-8">
            The most amazing person in my life
          </p>
          <Button
            onClick={onClose}
            className="px-8 py-6 text-lg font-poppins bg-gradient-to-r from-primary to-lavender hover:from-lavender hover:to-primary transition-all duration-500 rounded-full"
          >
            Finish 💕
          </Button>
        </div>
      )}
    </div>
  );
};

export default StoryMode;
