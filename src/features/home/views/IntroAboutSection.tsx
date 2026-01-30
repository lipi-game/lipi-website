import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { assetUrl } from "@/config/assets";

const welcomeBrush400 = assetUrl("images/logo/welcome-brush-500.webp");
const welcomeBrush800 = assetUrl("images/logo/welcome-brush-1000.webp");

const about1_400 = assetUrl("images/about-section/about-image-1-400.webp");
const about1_800 = assetUrl("images/about-section/about-image-1-800.webp");

const about2_400 = assetUrl("images/about-section/about-image-2-400.webp");
const about2_800 = assetUrl("images/about-section/about-image-2-800.webp");

const about3_400 = assetUrl("images/about-section/about-image-3-400.webp");
const about3_800 = assetUrl("images/about-section/about-image-3-800.webp");

const aboutImages = [
  {
    src: about1_400,
    srcSet: `${about1_400} 400w, ${about1_800} 800w`,
    alt: "Lipi learning session",
  },
  {
    src: about2_400,
    srcSet: `${about2_400} 400w, ${about2_800} 800w`,
    alt: "Lipi presentation",
  },
  {
    src: about3_400,
    srcSet: `${about3_400} 400w, ${about3_800} 800w`,
    alt: "Lipi workshop",
  },
];

function ImageCard({
  src,
  srcSet,
  sizes,
  alt,
  className,
}: {
  src: string;
  srcSet?: string;
  sizes?: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl ${className}`}
      style={{
        border: "10px solid rgba(18, 204, 253, 0.1)",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading="lazy"
        decoding="async"
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
    <h2
      ref={ref}
      className="relative inline-block text-3xl sm:text-4xl md:text-5xl font-bold text-white text-foreground mb-4 md:mb-6"
    >
      <motion.div
        className="absolute inset-0 -z-10 flex items-center justify-center"
        initial={{ scale: 1.5, opacity: 0 }}
        animate={
          isInView ? { scale: 1, opacity: 1 } : { scale: 1.5, opacity: 0 }
        }
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <img
          src={welcomeBrush400}
          srcSet={`${welcomeBrush400} 500w, ${welcomeBrush800} 1000w`}
          sizes="(max-width: 768px) 360px, 463px"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="w-[115%] h-auto object-contain pointer-events-none"
          style={{ minWidth: "110%", transform: "translateY(-2px)" }}
        />
      </motion.div>
      <span className="relative px-2 py-1">Welcome to Lipi</span>
    </h2>
  );
}

function AboutSection() {
  return (
    <div className="w-full pb-16 md:pb-24 lg:pb-2 xl:pb-32 overflow-hidden px-6 lg:px-0">
      <div className="mx-auto w-full max-w-[1400px] lg:px-8 relative min-h-[auto] lg:min-h-[720px]">
        {/* UNIFIED IMAGE CONTAINER 
          Mobile: Relative block with defined height to push text down.
          Desktop: Absolute overlay covering the background, allowing text to sit on top/left.
        */}
        <div className="relative mb-36 md:mb-36 lg:mb-0 h-[320px] md:h-[450px] lg:h-auto lg:absolute lg:inset-0 lg:pointer-events-none w-full max-w-[500px] mx-auto md:max-w-none">
          {/* Bottom Left Image (Image 0) - Merged Positioning */}
          <ImageCard
            src={aboutImages[0].src}
            srcSet={aboutImages[0].srcSet}
            sizes="(max-width: 1024px) 260px, 480px"
            alt={aboutImages[0].alt}
            className={`
              absolute z-10 bg-muted 
              /* Mobile/Tablet Position */
              top-44 md:top-52 left-0 w-[65%] md:w-[50%] h-[70%] -rotate-3 bottom-0
              /* Desktop Position (Resetting mobile values) */
              lg:top-[380px] xl:top-[420px] lg:bottom-auto 
              lg:left-[35%] xl:left-[270px] 
              lg:w-[400px] xl:w-[480px] 
              lg:h-[240px] xl:h-[330px] 
              lg:rotate-0 lg:pointer-events-auto lg:shadow-lg
            `}
          />

          {/* Middle Right Image (Image 1) - Merged Positioning */}
          <ImageCard
            src={aboutImages[1].src}
            srcSet={aboutImages[1].srcSet}
            sizes="(max-width: 1024px) 240px, 360px"
            alt={aboutImages[1].alt}
            className={`
              absolute z-20 bg-muted
              /* Mobile/Tablet Position */
              top-0 right-0 md:right-10 w-[55%] md:w-[45%] h-[60%] rotate-3
              /* Desktop Position (Resetting mobile values) */
              lg:top-[170px] xl:top-[180px] 
              lg:right-[15%] xl:right-[22%] 
              lg:w-[300px] xl:w-[360px] 
              lg:h-[220px] xl:h-[260px] 
              lg:rotate-0 lg:pointer-events-auto lg:shadow-lg
            `}
          />

          {/* Top Right Image (Image 2) - Desktop Only */}
          <ImageCard
            src={aboutImages[2].src}
            srcSet={aboutImages[2].srcSet}
            sizes="(min-width: 1024px) 280px, 0px"
            alt={aboutImages[2].alt}
            className={`
              hidden lg:block absolute z-30 bg-muted lg:pointer-events-auto lg:shadow-lg
              /* Desktop Position */
              top-0 right-[2%] xl:right-[40px] 
              w-[180px] lg:w-[240px] xl:w-[280px] 
              h-[140px] lg:h-[180px] xl:h-[200px]
            `}
          />
        </div>

        {/* UNIFIED TEXT CONTENT
          Mobile: Flows naturally after the image container (thanks to relative positioning).
          Desktop: Uses padding/z-index to sit in the correct spot over the 'absolute' images.
        */}
        <div className="relative z-30 md:text-left lg:max-w-[45%] xl:max-w-lg lg:pt-4">
          <h3 className="text-3xl sm:text-3xl md:text-[2rem] lg:text-[2.25rem] font-bold text-foreground mb-6 lg:mb-6 tracking-tight">
            About Us
          </h3>
          <p className="text-base md:text-lg sm:text-base lg:text-lg text-muted-foreground leading-relaxed mb-8 lg:mb-6 bg-transparent lg:bg-white/50 lg:backdrop-blur-[2px] lg:rounded-lg xl:bg-transparent xl:backdrop-blur-0">
            <span className="font-bold">Lipi Epics and Word Games</span> is a
            learning and gamification platform rooted in{" "}
            <span className="font-bold">
              Indian epics, languages, and cultural values
            </span>
            . It transforms the <span className="font-bold">Mahabharat</span>{" "}
            and <span className="font-bold">Ramayana</span> into interactive
            play experiences, while blending{" "}
            <span className="font-bold">epic-based learning</span> with{" "}
            <span className="font-bold">word games</span> in Indian languages
            and English.
            <span className="hidden lg:inline">
              {" "}
              By addressing the gap where{" "}
              <span className="font-bold">ancient wisdom</span> is often missing
              from modern education, Lipi helps today's learners explore{" "}
              <span className="font-bold">culture</span>,{" "}
              <span className="font-bold">values</span>, and{" "}
              <span className="font-bold">thinking skills</span> through play.
            </span>
          </p>
          <Button
            asChild
            className="bg-[#118fdd] hover:bg-[#118fdd]/90 text-white font-semibold px-8 lg:px-6 py-3 lg:py-2.5 rounded-full text-base lg:text-sm"
          >
            <Link to="/about">Read more</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export function IntroAboutSection() {
  return (
    <section
      className="relative z-10 -mt-8 md:-mt-12 bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="pt-16 md:pt-24 lg:pt-32 pb-12 md:pb-16 text-center px-6">
        <WelcomeHeading />
        <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto mt-4 md:mt-6 leading-relaxed">
          We put learners first with our story-driven games.
        </p>
      </div>

      <AboutSection />
    </section>
  );
}