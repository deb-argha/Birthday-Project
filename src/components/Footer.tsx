import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-4 text-center">
      <div className="max-w-md mx-auto">
        <div className="flex justify-center gap-2 mb-6">
          {[...Array(3)].map((_, i) => (
            <Heart
              key={i}
              className="w-6 h-6 text-primary fill-primary animate-pulse-heart"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
        
        <p className="font-pacifico text-2xl md:text-3xl text-foreground mb-4">
          Happy Birthday, my favorite person 💕
        </p>
        
        <p className="font-dancing text-xl text-muted-foreground">
          Today and always, you are loved ✨
        </p>
        
        <div className="mt-8 pt-8 border-t border-border/50">
          <p className="font-poppins text-sm text-muted-foreground/60">
            Made with 💗 just for you
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
