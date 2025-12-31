import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import welcomeBrush from "@/assets/welcome-brush.png";
import team1 from "@/assets/team-1.jpeg";


// TODO: Place these images in /public folder:
// - /about-1.jpg (large image - bottom center)
// - /about-2.jpg (medium image - top right)

const aboutImages = [
  { src: team1, alt: "Lipi learning session" },
  { src: team1, alt: "Lipi presentation" },
  { src: team1, alt: "Lipi workshop" },
];

function ImageCard({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border-4 border-white shadow-xl ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
}

function ImageCollage({ isMobile = false }: { isMobile?: boolean }) {
  if (isMobile) {
    // Mobile: 2 images - large bottom-left, small top-right overlapping
    return (
      <div className="relative h-[280px] w-full">
        {/* Large image - bottom left */}
        <ImageCard
          src={aboutImages[0].src}
          alt={aboutImages[0].alt}
          className="absolute bottom-0 left-0 w-[75%] h-[85%] z-10 bg-muted rotate-[-3deg]"
        />
        {/* Small image - top right, overlapping */}
        <ImageCard
          src={aboutImages[1].src}
          alt={aboutImages[1].alt}
          className="absolute top-0 right-0 w-[55%] h-[65%] z-20 bg-muted rotate-[3deg]"
        />
      </div>
    );
  }

  // Desktop: 3 images layout
  return (
    <div className="relative h-[380px] sm:h-[440px] md:h-[480px] lg:h-[520px] w-full">
      {/* Small image - top right */}
      <ImageCard
        src={aboutImages[2].src}
        alt={aboutImages[2].alt}
        className="absolute top-0 right-0 w-[45%] sm:w-[42%] md:w-[45%] h-[32%] sm:h-[35%] z-30 bg-muted"
      />
      {/* Medium image - middle right */}
      <ImageCard
        src={aboutImages[1].src}
        alt={aboutImages[1].alt}
        className="absolute top-[25%] right-[5%] w-[55%] sm:w-[52%] md:w-[55%] h-[38%] sm:h-[40%] z-20 bg-muted"
      />
      {/* Large image - bottom left */}
      <ImageCard
        src={aboutImages[0].src}
        alt={aboutImages[0].alt}
        className="absolute bottom-0 left-0 w-[75%] sm:w-[72%] md:w-[75%] h-[48%] sm:h-[50%] z-10 bg-muted"
      />
    </div>
  );
}

function WelcomeHeading() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <h2 ref={ref} className="relative inline-block text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
      {/* Orange brush background image with zoom animation */}
      <motion.div
        className="absolute inset-0 -z-10 flex items-center justify-center"
        initial={{ scale: 1.5, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.5, opacity: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <img
          src={welcomeBrush}
          alt=""
          aria-hidden="true"
          className="w-[115%] h-auto object-contain pointer-events-none"
          style={{ 
            minWidth: "110%",
            transform: "translateY(-2px)"
          }}
        />
      </motion.div>
      <span className="relative px-2 py-1">Welcome to LIP!</span>
    </h2>
  );
}

export function IntroAboutSection() {
  return (
    <section className="relative z-10 -mt-8 md:-mt-12 bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
      {/* Welcome Block */}
      <div className="pt-16 md:pt-24 lg:pt-32 pb-12 md:pb-16 text-center px-6">
        <WelcomeHeading />
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          We put learners first with our story-driven games.
        </p>
      </div>

      {/* About Us Block */}
      <div className="px-6 md:px-12 lg:px-20 pb-16 md:pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto">
          {/* Mobile: Image first, then text */}
          <div className="block lg:hidden mb-8">
            <ImageCollage isMobile={true} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left column - Text */}
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl sm:text-4xl md:text-[2.5rem] font-semibold text-foreground mb-6">
                About Us
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                <span className="font-semibold text-foreground">Lipi Epics and Word Games</span> is a learning and
                gamification platform rooted in{" "}
                <span className="font-semibold text-foreground">Indian epics, languages, and cultural values</span>. It transforms the{" "}
                <span className="font-semibold text-foreground">Mahabharat</span> and{" "}
                <span className="font-semibold text-foreground">Ramayana</span> into interactive play
                experiences, while blending{" "}
                <span className="font-semibold text-foreground">epic-based learning</span> with{" "}
                <span className="font-semibold text-foreground">word games</span> in Indian languages and English.
                By addressing the gap where{" "}
                <span className="font-semibold text-foreground">ancient wisdom</span> is often missing from modern education, Lipi helps
                today's learners explore{" "}
                <span className="font-semibold text-foreground">culture</span>,{" "}
                <span className="font-semibold text-foreground">values</span>, and{" "}
                <span className="font-semibold text-foreground">thinking skills</span> through play.
              </p>
              <Button
                className="bg-[#ff7c2b] hover:bg-[#ff7c2b]/90 text-white font-semibold px-8 py-3 rounded-full text-base"
              >
                Read more
              </Button>
            </div>

            {/* Right column - Image Collage (Desktop only) */}
            <div className="hidden lg:block order-1 lg:order-2">
              <ImageCollage />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
