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
  const positions = [
    { top: "0%", left: "60%", size: "w-14 h-14" },
    { top: "5%", left: "85%", size: "w-16 h-16" },
    { top: "25%", left: "70%", size: "w-12 h-12" },
    { top: "20%", left: "90%", size: "w-14 h-14" },
    { top: "45%", left: "55%", size: "w-16 h-16" },
    { top: "40%", left: "78%", size: "w-12 h-12" },
    { top: "50%", left: "95%", size: "w-14 h-14" },
    { top: "65%", left: "62%", size: "w-12 h-12" },
    { top: "70%", left: "85%", size: "w-16 h-16" },
    { top: "85%", left: "70%", size: "w-14 h-14" },
    { top: "80%", left: "55%", size: "w-10 h-10" },
    { top: "90%", left: "92%", size: "w-12 h-12" },
  ];

  return (
    <div className="relative w-full h-[300px] md:h-[350px]">
      {avatarCollageImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt=""
          className={`absolute rounded-full object-cover border-2 border-white shadow-md ${positions[index]?.size || "w-12 h-12"}`}
          style={{
            top: positions[index]?.top || "0%",
            left: positions[index]?.left || "50%",
          }}
        />
      ))}
    </div>
  );
}

function HeaderSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container size="lg">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-foreground mb-12 md:mb-16">
          About Us
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left - Text content */}
          <div className="space-y-6">
            {aboutIntroText.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground leading-relaxed text-base md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* Right - Avatar collage */}
          <div className="order-first lg:order-last">
            <AvatarCollage />
          </div>
        </div>
      </Container>
    </section>
  );
}

function FounderSection() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#faf8f5" }}>
      <Container size="lg">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left - Bio content */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 md:mb-8">
                Our Founder & CEO
              </h2>
              <div className="space-y-4">
                {founderBio.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            
            {/* Right - Founder image */}
            <div className="order-first lg:order-last flex justify-center lg:justify-end">
              <img
                src={founderImageUrl}
                alt={founderName}
                className="w-64 h-80 md:w-72 md:h-96 object-cover rounded-2xl grayscale"
              />
            </div>
          </div>
          
          {/* Bottom - Name and role */}
          <div className="text-center mt-8 md:mt-12 pt-6 border-t border-gray-100">
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              {founderName}
            </h3>
            <p className="text-muted-foreground mt-1">
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
