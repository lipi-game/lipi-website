import { Container } from "@/shared/components/Container";
import {
  aboutIntroText,
  avatarCollageImages,
  founderBio,
  founderName,
  founderRole,
  founderImageUrl,
  meetTeamIntro,
  meetTeamMembers,
  disciplinePortraits,
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

function MeetTeamSection() {
  // Define positions for the staggered grid layout matching screenshot
  const tilePositions = [
    { row: 0, col: 2 }, // Prasad - top right area
    { row: 0, col: 3 }, // Aparna
    { row: 0, col: 4 }, // Narendra
    { row: 1, col: 0 }, // Bhavani - bottom left
    { row: 1, col: 1 }, // Shiva
    { row: 1, col: 2 }, // Prashant
    { row: 1, col: 3 }, // Kalyani
  ];

  return (
    <section className="py-8 md:py-12 bg-white">
      <Container size="lg">
        <div 
          className="rounded-[28px] overflow-hidden p-8 md:p-10 lg:p-12"
          style={{ backgroundColor: "#e8f4f8" }}
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left - Intro text */}
            <div className="lg:w-[280px] shrink-0">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Meet Team
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {meetTeamIntro}
              </p>
            </div>
            
            {/* Right - Team grid */}
            <div className="flex-1">
              {/* Desktop staggered grid */}
              <div className="hidden lg:grid grid-cols-5 gap-3">
                {/* Row 1 - offset to the right */}
                <div className="col-span-2"></div>
                {meetTeamMembers.slice(0, 3).map((member) => (
                  <div
                    key={member.id}
                    className="relative rounded-xl overflow-hidden aspect-[3/4]"
                    style={{ backgroundColor: member.bgColor }}
                  >
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/40 to-transparent">
                      <p className="text-white font-semibold text-sm">{member.name}</p>
                      <p className="text-white/80 text-xs">{member.role}</p>
                    </div>
                  </div>
                ))}
                
                {/* Row 2 - starts from left */}
                {meetTeamMembers.slice(3, 7).map((member) => (
                  <div
                    key={member.id}
                    className="relative rounded-xl overflow-hidden aspect-[3/4]"
                    style={{ backgroundColor: member.bgColor }}
                  >
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/40 to-transparent">
                      <p className="text-white font-semibold text-sm">{member.name}</p>
                      <p className="text-white/80 text-xs">{member.role}</p>
                    </div>
                  </div>
                ))}
                <div className="col-span-1"></div>
              </div>
              
              {/* Tablet grid */}
              <div className="hidden md:grid lg:hidden grid-cols-3 gap-3">
                {meetTeamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="relative rounded-xl overflow-hidden aspect-[3/4]"
                    style={{ backgroundColor: member.bgColor }}
                  >
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/40 to-transparent">
                      <p className="text-white font-semibold text-sm">{member.name}</p>
                      <p className="text-white/80 text-xs">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Mobile grid */}
              <div className="grid md:hidden grid-cols-2 gap-3">
                {meetTeamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="relative rounded-xl overflow-hidden aspect-[3/4]"
                    style={{ backgroundColor: member.bgColor }}
                  >
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/40 to-transparent">
                      <p className="text-white font-semibold text-sm">{member.name}</p>
                      <p className="text-white/80 text-xs">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function DisciplineSection() {
  const row1 = disciplinePortraits.slice(0, 6);
  const row2 = disciplinePortraits.slice(6, 11);

  return (
    <section className="py-8 md:py-12 bg-white">
      <Container size="lg">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Design. Content. Technology.
        </h2>
        <p className="text-muted-foreground text-sm mb-8">
          Teams across disciplines working together to shape Lipi's learning experiences.
        </p>
        
        {/* Portrait Grid */}
        <div className="space-y-3">
          {/* Row 1 - 6 portraits */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {row1.map((portrait) => (
              <div
                key={portrait.id}
                className="aspect-square rounded-lg overflow-hidden bg-muted"
              >
                <img
                  src={portrait.imageUrl}
                  alt=""
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
          
          {/* Row 2 - 5 portraits centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3 w-full md:w-5/6">
              {row2.map((portrait) => (
                <div
                  key={portrait.id}
                  className="aspect-square rounded-lg overflow-hidden bg-muted"
                >
                  <img
                    src={portrait.imageUrl}
                    alt=""
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
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
      <MeetTeamSection />
      <DisciplineSection />
    </main>
  );
}
