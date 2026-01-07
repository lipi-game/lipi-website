import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import welcomeBrush from "/Assets/welcome-brush.png";
import team1 from "/Assets/team-1.jpeg";

const aboutImages = [
  { src: team1, alt: "Lipi learning session" },
  { src: team1, alt: "Lipi presentation" },
  { src: team1, alt: "Lipi workshop" },
];

function ImageCard({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl ${className}`}
      style={{
        border: "10px solid rgba(18, 204, 253, 0.1)",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
      }}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-300 ease-out hover:scale-[1.01]"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
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

function MobileAboutSection() {
  return (
    <div className="px-6 pb-16">
      <div className="relative mb-8 h-[320px] w-full">
        <ImageCard
          src={aboutImages[0].src}
          alt={aboutImages[0].alt}
          className="absolute bottom-0 left-0 w-[65%] h-[70%] z-10 bg-muted -rotate-3"
        />
        <ImageCard
          src={aboutImages[1].src}
          alt={aboutImages[1].alt}
          className="absolute top-0 right-0 w-[55%] h-[60%] z-20 bg-muted rotate-3"
        />
      </div>
      
      <h3 className="text-3xl font-bold text-foreground mb-6 tracking-tight">
        About Us
      </h3>
      <p className="text-base text-muted-foreground leading-relaxed mb-8">
        <span className="font-bold">Lipi Epics and Word Games</span> is a learning and
        gamification platform rooted in{" "}
        <span>Indian epics, languages, and cultural values</span>. It transforms the{" "}
        <span>Mahabharat</span> and{" "}
        <span>Ramayana</span> into interactive play
        experiences, while blending{" "}
        <span>epic-based learning</span> with{" "}
        <span>word games</span> in Indian languages and English.
      </p>
      <Button
        asChild
        className="bg-[#118fdd] hover:bg-[#118fdd]/90 text-white font-semibold px-8 py-3 rounded-full text-base"
      >
        <Link to="/about">Read more</Link>
      </Button>
    </div>
  );
}

function DesktopAboutSection() {
  return (
    <div className="w-full pb-16 md:pb-24 lg:pb-32">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 relative min-h-[550px] lg:min-h-[720px]">
        {/* Text content - positioned left */}
        <div className="relative z-10 max-w-sm lg:max-w-md pt-4">
          <h3 className="text-2xl sm:text-3xl md:text-[2rem] lg:text-[2.25rem] font-bold text-foreground mb-4 lg:mb-6 tracking-tight">
            About Us
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
            <span className="font-bold">Lipi Epics and Word Games</span> is a learning and
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
            asChild
            className="bg-[#118fdd] hover:bg-[#118fdd]/90 text-white font-semibold px-6 py-2.5 rounded-full text-sm"
          >
            <Link to="/about">Read more</Link>
          </Button>
        </div>

        {/* Image tiles - positioned to start from right, flowing down diagonally */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top right image - small */}
          <ImageCard
            src={aboutImages[2].src}
            alt={aboutImages[2].alt}
            className="absolute top-[20px] right-[40px] w-[200px] md:w-[240px] lg:w-[280px] h-[150px] md:h-[170px] lg:h-[200px] z-30 bg-muted pointer-events-auto"
          />
          {/* Middle image - medium, positioned below and left of first */}
          <ImageCard
            src={aboutImages[1].src}
            alt={aboutImages[1].alt}
            className="absolute top-[160px] md:top-[180px] lg:top-[200px] right-[200px] md:right-[260px] lg:right-[300px] w-[280px] md:w-[320px] lg:w-[360px] h-[200px] md:h-[230px] lg:h-[260px] z-20 bg-muted pointer-events-auto"
          />
          {/* Bottom image - large, positioned below text area */}
          <ImageCard
            src={aboutImages[0].src}
            alt={aboutImages[0].alt}
            className="absolute top-[340px] md:top-[380px] lg:top-[440px] left-[60px] md:left-[80px] lg:left-[160px] w-[360px] md:w-[420px] lg:w-[480px] h-[180px] md:h-[200px] lg:h-[330px] z-10 bg-muted pointer-events-auto"
          />
        </div>
      </div>
    </div>
  );
}

export function IntroAboutSection() {
  return (
    <section className="relative z-10 -mt-8 md:-mt-12 bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)]" style={{ backgroundColor: "#ffffff" }}>
      <div className="pt-16 md:pt-24 lg:pt-32 pb-12 md:pb-16 text-center px-7">
        <WelcomeHeading />
        <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto mt-4 md:mt-6 leading-relaxed">
          We put learners first with our story-driven games.
        </p>
      </div>

      {/* Mobile layout */}
      <div className="block lg:hidden">
        <MobileAboutSection />
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:block">
        <DesktopAboutSection />
      </div>
    </section>
  );
}