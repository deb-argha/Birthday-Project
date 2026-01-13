import { Heart } from "lucide-react";

const MessageCard = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="gradient-card rounded-3xl p-8 md:p-12 shadow-card relative overflow-hidden group hover:shadow-glow transition-all duration-500 animate-fade-in-up">
          {/* Decorative corner hearts */}
          <Heart className="absolute top-4 right-4 w-6 h-6 text-primary/20 fill-primary/10 group-hover:scale-110 transition-transform" />
          <Heart className="absolute bottom-4 left-4 w-5 h-5 text-lavender/30 fill-lavender/20 group-hover:scale-110 transition-transform" />
          
          <div className="text-center relative z-10">
            <h3 className="font-pacifico text-3xl md:text-4xl text-foreground mb-6">
              For You 💗
            </h3>
            
            <p className="font-dancing text-2xl md:text-3xl text-foreground/90 leading-relaxed mb-6">
              Every moment with you feels like a beautiful dream I never want to wake up from.
            </p>
            
            <p className="font-poppins text-muted-foreground">
              It's a special day for you as well for me too! Forever baby!! I will be there till the end of my life to tell you how much I love you!
              To celebrate every birthday of yours!🥳 It's a neverending Love between us. I Love You🎀✨
            </p>
          </div>

          {/* Hover glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-lavender/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
        </div>
      </div>
    </section>
  );
};

export default MessageCard;
