import { Container } from "@/shared/components/Container";
import {
  aboutIntroText,
  avatarCollageImages,
  founderBio,
  founderName,
  founderRole,
  founderImageUrl,
} from "../data/aboutData";

function AvatarCollage() {
  // Positions matching the screenshot cluster layout
  const positions = [
    { top: "0px", left: "180px", size: "w-16 h-16" },
    { top: "10px", left: "260px", size: "w-20 h-20" },
    { top: "0px", left: "360px", size: "w-24 h-24" },
    { top: "60px", left: "150px", size: "w-12 h-12" },
    { top: "70px", left: "220px", size: "w-14 h-14" },
    { top: "80px", left: "300px", size: "w-12 h-12" },
    { top: "100px", left: "360px", size: "w-16 h-16" },
    { top: "120px", left: "420px", size: "w-14 h-14" },
    { top: "140px", left: "180px", size: "w-20 h-20" },
    { top: "150px", left: "270px", size: "w-16 h-16" },
    { top: "160px", left: "350px", size: "w-14 h-14" },
    { top: "170px", left: "420px", size: "w-12 h-12" },
    { top: "220px", left: "100px", size: "w-20 h-20" },
    { top: "230px", left: "200px", size: "w-14 h-14" },
    { top: "240px", left: "280px", size: "w-20 h-20" },
    { top: "250px", left: "380px", size: "w-14 h-14" },
    { top: "260px", left: "450px", size: "w-12 h-12" },
  ];

  return (
    <div className="relative w-[520px] h-[360px] hidden lg:block">
      {avatarCollageImages.slice(0, positions.length).map((src, index) => (
        <img
          key={index}
          src={src}
          alt=""
          className={`absolute rounded-full object-cover border-[3px] border-white shadow-md ${positions[index]?.size || "w-14 h-14"}`}
          style={{
            top: positions[index]?.top || "0px",
            left: positions[index]?.left || "0px",
          }}
        />
      ))}
    </div>
  );
}

function MobileAvatarCollage() {
  return (
    <div className="flex flex-wrap justify-center gap-3 lg:hidden py-8">
      {avatarCollageImages.slice(0, 8).map((src, index) => (
        <img
          key={index}
          src={src}
          alt=""
          className="w-14 h-14 rounded-full object-cover border-[3px] border-white shadow-md"
        />
      ))}
    </div>
  );
}

function HeaderSection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <Container size="lg">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-10 md:mb-12">
          About Us
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 items-start">
          {/* Left - Text content */}
          <div className="lg:max-w-[55%] space-y-4">
            {aboutIntroText.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground leading-relaxed text-[15px]">
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* Mobile Avatar Collage */}
          <MobileAvatarCollage />
          
          {/* Right - Avatar collage (desktop) */}
          <div className="lg:flex-1 flex justify-end">
            <AvatarCollage />
          </div>
        </div>
      </Container>
    </section>
  );
}

function FounderSection() {
  return (
    <section className="py-8 md:py-12 bg-white">
      <Container size="lg">
        <div 
          className="rounded-2xl overflow-hidden p-8 md:p-10 lg:p-12"
          style={{ backgroundColor: "#f5f0e8" }}
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left - Bio content */}
            <div className="lg:flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Our Founder & CEO
              </h2>
              <div className="space-y-4">
                {founderBio.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed text-[15px]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            
            {/* Right - Founder image */}
            <div className="order-first lg:order-last flex justify-center lg:justify-end shrink-0">
              <img
                src={founderImageUrl}
                alt={founderName}
                className="w-56 h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 object-cover object-top rounded-xl grayscale"
              />
            </div>
          </div>
          
          {/* Bottom - Name and role */}
          <div className="text-center mt-6 lg:mt-4 lg:mr-32">
            <h3 className="text-lg md:text-xl font-semibold text-foreground italic">
              {founderName}
            </h3>
            <p className="text-muted-foreground text-sm italic">
              {founderRole}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function AboutPage() {
  return (
    <main className="pt-16">
      <HeaderSection />
      <FounderSection />
    </main>
  );
}
