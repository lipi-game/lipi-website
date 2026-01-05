import { useState } from "react";
import { Container } from "@/shared/components/Container";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X, Linkedin } from "lucide-react";
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
  advisors,
  references,
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

type Advisor = typeof advisors[number];

function AdvisorsSection() {
  const [selectedAdvisor, setSelectedAdvisor] = useState<Advisor | null>(null);

  return (
    <section className="py-8 md:py-12 bg-white">
      <Container size="lg">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-10 md:mb-14">
            Advisors
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {advisors.map((advisor) => (
              <div
                key={advisor.id}
                className="flex flex-col items-center cursor-pointer group"
                onClick={() => setSelectedAdvisor(advisor)}
              >
                <div
                  className="w-28 h-28 md:w-32 md:h-32 rounded-full p-1.5 mb-3"
                  style={{ backgroundColor: advisor.avatarBg }}
                >
                  <img
                    src={advisor.imageUrl}
                    alt={advisor.name}
                    className="w-full h-full rounded-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <h3 className="font-semibold text-sm md:text-base text-foreground text-center">
                  {advisor.name}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground text-center">
                  {advisor.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Dialog open={!!selectedAdvisor} onOpenChange={() => setSelectedAdvisor(null)}>
        <DialogContent className="max-w-3xl rounded-[28px] p-0 overflow-hidden">
          <DialogTitle className="sr-only">
            {selectedAdvisor?.name} - {selectedAdvisor?.role}
          </DialogTitle>
          
          {selectedAdvisor && (
            <div className="relative p-6 md:p-8">
              <div className="absolute top-4 right-4 flex items-center gap-2">
                {selectedAdvisor.linkedinUrl && (
                  <a
                    href={selectedAdvisor.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-[#0077B5] flex items-center justify-center text-white hover:bg-[#005885] transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                <button
                  onClick={() => setSelectedAdvisor(null)}
                  className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-foreground hover:bg-muted/80 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 mt-8 md:mt-4">
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full p-2 mb-4"
                    style={{ backgroundColor: selectedAdvisor.avatarBg }}
                  >
                    <img
                      src={selectedAdvisor.imageUrl}
                      alt={selectedAdvisor.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg text-foreground text-center">
                    {selectedAdvisor.name}
                  </h3>
                  <p className="text-sm text-muted-foreground text-center">
                    {selectedAdvisor.role}
                  </p>
                </div>
                
                <div className="flex-1 max-h-[300px] overflow-y-auto pr-2">
                  {selectedAdvisor.bio.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function ReferencesSection() {
  return (
    <section className="py-8 md:py-12 bg-white">
      <Container size="lg">
        <div className="max-w-[1280px] mx-auto">
          <div
            className="rounded-[28px] p-8 md:p-10 lg:p-12"
            style={{ backgroundColor: "#f5f0e8" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-3">
              References
            </h2>
            <p className="text-muted-foreground text-center text-sm md:text-base max-w-3xl mx-auto mb-10">
              Lipi Games content is curated from authentic publications and reviewed by an expert panel to ensure accuracy and credibility.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Left Card - Advisory */}
              <div className="relative">
                <div 
                  className="absolute inset-0 translate-x-2 translate-y-2 rounded-[20px]"
                  style={{ backgroundColor: "#8B6914" }}
                />
                <div 
                  className="relative rounded-[20px] p-6 md:p-8"
                  style={{ backgroundColor: "#C49A1A" }}
                >
                  <h3 className="text-lg md:text-xl font-bold text-white mb-4">
                    {references.advisoryTitle}
                  </h3>
                  <ul className="space-y-2">
                    {references.advisoryLines.map((line, index) => (
                      <li key={index} className="text-white/90 text-sm md:text-base">
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Right Card - References */}
              <div className="relative">
                <div 
                  className="absolute inset-0 translate-x-2 translate-y-2 rounded-[20px]"
                  style={{ backgroundColor: "#1A3A5C" }}
                />
                <div 
                  className="relative rounded-[20px] p-6 md:p-8"
                  style={{ backgroundColor: "#2D5A87" }}
                >
                  <h3 className="text-lg md:text-xl font-bold text-white mb-4">
                    {references.referencesTitle}
                  </h3>
                  <ul className="space-y-2 list-disc list-inside">
                    {references.referenceItems.map((item, index) => (
                      <li key={index} className="text-white/90 text-sm md:text-base">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Note */}
            <div className="bg-white/80 rounded-xl p-4 md:p-5">
              <p className="text-sm md:text-base">
                <span className="font-semibold italic" style={{ color: "#ff7c2b" }}>Note : </span>
                <span className="text-muted-foreground">{references.noteText}</span>
              </p>
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
      <AdvisorsSection />
      <ReferencesSection />
    </main>
  );
}
