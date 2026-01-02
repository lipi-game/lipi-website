import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import welcomeBrush from "@/assets/welcome-brush.png";
import team1 from "@/assets/team-1.jpeg";

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
    return (
      <div className="relative h-[380px] w-full">
        <ImageCard
          src={aboutImages[2].src}
          alt={aboutImages[2].alt}
          className="absolute top-0 right-0 w-[50%] h-[45%] z-30 bg-muted"
        />
        <ImageCard
          src={aboutImages[1].src}
          alt={aboutImages[1].alt}
          className="absolute top-[20%] left-[15%] w-[65%] h-[45%] z-20 bg-muted"
        />
        <ImageCard
          src={aboutImages[0].src}
          alt={aboutImages[0].alt}
          className="absolute bottom-0 left-0 w-[50%] h-[45%] z-10 bg-muted"
        />
      </div>
    );
  }

  return (
    <div className="relative h-[560px] sm:h-[600px] md:h-[640px] lg:h-[700px] w-full">
      <ImageCard
        src={aboutImages[2].src}
        alt={aboutImages[2].alt}
        className="absolute top-0 right-0 w-[45%] sm:w-[42%] md:w-[45%] h-[50%] sm:h-[52%] z-30 bg-muted rounded-3xl"
      />
      <ImageCard
        src={aboutImages[1].src}
        alt={aboutImages[1].alt}
        className="absolute top-[30%] left-[20%] w-[65%] sm:w-[62%] md:w-[65%] h-[50%] sm:h-[52%] z-20 bg-muted rounded-3xl"
      />
      <ImageCard
        src={aboutImages[0].src}
        alt={aboutImages[0].alt}
        className="absolute bottom-0 left-0 w-[45%] sm:w-[42%] md:w-[45%] h-[50%] sm:h-[52%] z-10 bg-muted rounded-3xl"
      />
    </div>
  );
}

function WelcomeHeading() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <h2 ref={ref} className="relative inline-block text-3xl sm:text-4xl md:text-5xl font-bold text-white text-foreground mb-4 md:mb-6">
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
      <span className="relative px-2 py-1">Welcome to LIPI.</span>
    </h2>
  );
}

export function IntroAboutSection() {
  return (
    <section className="relative z-10 -mt-8 md:-mt-12 bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] gap-8 md:gap-12 lg:gap-16">
      <div className="pt-16 md:pt-24 lg:pt-32 pb-12 md:pb-16 text-center px-7">
        <WelcomeHeading />
        <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto mt-4 md:mt-6 leading-relaxed">
          We put learners first with our story-driven games.
        </p>
      </div>

      <div className="px-6 md:px-12 lg:px-20 pb-16 md:pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="block lg:hidden mb-8">
            <ImageCollage isMobile={true} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl font-bold text-foreground mb-6 lg:mb-8 tracking-tight">
                About Us
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                <span className="font-bold ">Lipi Epics and Word Games</span> is a learning and
                gamification platform rooted in{" "}
                <span className="">Indian epics, languages, and cultural values</span>. It transforms the{" "}
                <span className="">Mahabharat</span> and{" "}
                <span className="">Ramayana</span> into interactive play
                experiences, while blending{" "}
                <span className="">epic-based learning</span> with{" "}
                <span className="">word games</span> in Indian languages and English.
                By addressing the gap where{" "}
                <span className="">ancient wisdom</span> is often missing from modern education, Lipi helps
                today's learners explore{" "}
                <span className="">culture</span>,{" "}
                <span className="">values</span>, and{" "}
                <span className="">thinking skills</span> through play.
              </p>
              <Button
                className="bg-[#118fdd] hover:bg-[#118fdd]/90 text-white font-semibold px-8 py-3 rounded-full text-base"
              >
                Read more
              </Button>
            </div>

            <div className="hidden lg:block order-1 lg:order-2">
              <ImageCollage />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
