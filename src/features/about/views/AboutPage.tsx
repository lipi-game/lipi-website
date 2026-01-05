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
  const positions = [
    { top: 0, left: 160, size: 56 },
    { top: 10, left: 240, size: 72 },
    { top: 5, left: 340, size: 64 },
    { top: 20, left: 420, size: 52 },
    { top: 65, left: 120, size: 48 },
    { top: 75, left: 185, size: 60 },
    { top: 85, left: 270, size: 52 },
    { top: 70, left: 340, size: 56 },
    { top: 80, left: 415, size: 48 },
    { top: 130, left: 150, size: 64 },
    { top: 140, left: 240, size: 56 },
    { top: 145, left: 320, size: 60 },
    { top: 135, left: 400, size: 52 },
    { top: 200, left: 180, size: 56 },
    { top: 210, left: 260, size: 64 },
    { top: 205, left: 355, size: 52 },
  ];

  return (
    <div className="relative w-[520px] h-[320px] hidden lg:block">
      {avatarCollageImages.slice(0, positions.length).map((src, index) => (
        <img
          key={index}
          src={src}
          alt=""
          className="absolute rounded-full object-cover border-2 border-white shadow-md"
          style={{
            top: `${positions[index].top}px`,
            left: `${positions[index].left}px`,
            width: `${positions[index].size}px`,
            height: `${positions[index].size}px`,
          }}
        />
      ))}
    </div>
  );
}

function MobileAvatarCollage() {
  return (
    <div className="flex flex-wrap justify-center gap-3 lg:hidden py-6">
      {avatarCollageImages.slice(0, 8).map((src, index) => (
        <img
          key={index}
          src={src}
          alt=""
          className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
        />
      ))}
    </div>
  );
}

function HeaderSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container size="lg">
        <div className="max-w-[1280px] mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-foreground mb-12 md:mb-16">
            About Us
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="lg:w-[50%] space-y-5">
              {aboutIntroText.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed text-[15px]">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <MobileAvatarCollage />
            
            <div className="lg:flex-1 flex justify-center lg:justify-end">
              <AvatarCollage />
            </div>
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
        <div className="max-w-[1280px] mx-auto">
          <div 
            className="relative rounded-[28px] overflow-hidden"
            style={{ backgroundColor: "#f5f0e8" }}
          >
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 p-8 md:p-10 lg:p-12 lg:pr-0">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Our Founder & CEO
                </h2>
                <div className="space-y-4 lg:max-w-[90%]">
                  {founderBio.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed text-[15px]">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                <div className="mt-8 lg:mt-10">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground italic">
                    {founderName}
                  </h3>
                  <p className="text-muted-foreground text-sm italic">
                    {founderRole}
                  </p>
                </div>
              </div>
              
              <div className="relative lg:w-[320px] xl:w-[380px] shrink-0">
                <div 
                  className="absolute inset-y-0 left-0 w-32 z-10 hidden lg:block"
                  style={{ 
                    background: "linear-gradient(to right, #f5f0e8 0%, transparent 100%)" 
                  }}
                />
                <img
                  src={founderImageUrl}
                  alt={founderName}
                  className="w-full h-64 lg:h-full object-cover object-top grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function MeetTeamSection() {
  return (
    <section className="py-8 md:py-12 bg-white">
      <Container size="lg">
        <div className="max-w-[1280px] mx-auto">
          <div 
            className="rounded-[28px] overflow-hidden p-8 md:p-10 lg:p-12"
            style={{ backgroundColor: "#EAF6FA" }}
          >
            {/* Meet Team Area */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12 lg:mb-16">
              <div className="lg:w-[260px] shrink-0">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Meet Team
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {meetTeamIntro}
                </p>
              </div>
              
              <div className="flex-1">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {meetTeamMembers.map((member) => (
                    <div
                      key={member.id}
                      className="relative rounded-[20px] overflow-hidden aspect-[3/4]"
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
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                        <p className="text-white font-semibold text-sm">{member.name}</p>
                        <p className="text-white/80 text-xs">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Design. Content. Technology. Area */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Design. Content. Technology.
              </h2>
              <p className="text-muted-foreground text-sm mb-8">
                Teams across disciplines working together to shape Lipi's learning experiences.
              </p>
              
              <div className="space-y-3">
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                  {disciplinePortraits.slice(0, 6).map((portrait) => (
                    <div
                      key={portrait.id}
                      className="relative aspect-square rounded-[16px] overflow-hidden group cursor-pointer"
                      style={{ backgroundColor: portrait.bgColor }}
                    >
                      <img
                        src={portrait.imageUrl}
                        alt={portrait.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white font-medium text-xs">{portrait.name}</p>
                        <p className="text-white/80 text-[10px]">{portrait.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center">
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3 w-full md:w-5/6">
                    {disciplinePortraits.slice(6, 11).map((portrait) => (
                      <div
                        key={portrait.id}
                        className="relative aspect-square rounded-[16px] overflow-hidden group cursor-pointer"
                        style={{ backgroundColor: portrait.bgColor }}
                      >
                        <img
                          src={portrait.imageUrl}
                          alt={portrait.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-white font-medium text-xs">{portrait.name}</p>
                          <p className="text-white/80 text-[10px]">{portrait.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
    </main>
  );
}
