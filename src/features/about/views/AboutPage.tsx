import { useState } from "react";
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

// Avatar Collage for Desktop - matches screenshot bubble layout
function AvatarCollage() {
  const positions = [
    { top: 0, left: 100, size: 48 },
    { top: 15, left: 165, size: 64 },
    { top: 0, left: 250, size: 56 },
    { top: 25, left: 320, size: 48 },
    { top: 60, left: 80, size: 44 },
    { top: 70, left: 140, size: 56 },
    { top: 80, left: 210, size: 48 },
    { top: 65, left: 275, size: 52 },
    { top: 75, left: 340, size: 44 },
    { top: 115, left: 110, size: 52 },
    { top: 130, left: 180, size: 48 },
    { top: 125, left: 250, size: 56 },
    { top: 120, left: 320, size: 48 },
    { top: 175, left: 140, size: 48 },
    { top: 180, left: 210, size: 52 },
    { top: 175, left: 285, size: 48 },
  ];

  return (
    <div className="relative w-[400px] h-[260px] hidden lg:block">
      {avatarCollageImages.slice(0, positions.length).map((src, index) => (
        <div
          key={index}
          className="absolute rounded-full border-2 border-white shadow-md overflow-hidden bg-muted"
          style={{
            top: `${positions[index].top}px`,
            left: `${positions[index].left}px`,
            width: `${positions[index].size}px`,
            height: `${positions[index].size}px`,
          }}
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      ))}
    </div>
  );
}

// Tablet Avatar Collage
function TabletAvatarCollage() {
  const positions = [
    { top: 0, left: 60, size: 40 },
    { top: 10, left: 115, size: 52 },
    { top: 0, left: 185, size: 46 },
    { top: 15, left: 250, size: 40 },
    { top: 50, left: 45, size: 36 },
    { top: 55, left: 100, size: 46 },
    { top: 60, left: 165, size: 40 },
    { top: 50, left: 220, size: 44 },
    { top: 55, left: 275, size: 36 },
    { top: 95, left: 70, size: 44 },
    { top: 105, left: 135, size: 40 },
    { top: 100, left: 195, size: 46 },
    { top: 95, left: 260, size: 40 },
  ];

  return (
    <div className="relative w-[320px] h-[180px] hidden md:block lg:hidden mx-auto">
      {avatarCollageImages.slice(0, positions.length).map((src, index) => (
        <div
          key={index}
          className="absolute rounded-full border-2 border-white shadow-md overflow-hidden bg-muted"
          style={{
            top: `${positions[index].top}px`,
            left: `${positions[index].left}px`,
            width: `${positions[index].size}px`,
            height: `${positions[index].size}px`,
          }}
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      ))}
    </div>
  );
}

// Mobile Avatar Collage
function MobileAvatarCollage() {
  const positions = [
    { top: 0, left: 30, size: 36 },
    { top: 8, left: 80, size: 44 },
    { top: 0, left: 140, size: 40 },
    { top: 10, left: 195, size: 36 },
    { top: 45, left: 15, size: 32 },
    { top: 50, left: 60, size: 40 },
    { top: 52, left: 115, size: 36 },
    { top: 48, left: 165, size: 38 },
    { top: 50, left: 215, size: 32 },
    { top: 90, left: 40, size: 38 },
    { top: 95, left: 95, size: 36 },
    { top: 92, left: 150, size: 40 },
    { top: 90, left: 205, size: 36 },
  ];

  return (
    <div className="relative w-[260px] h-[160px] md:hidden mx-auto">
      {avatarCollageImages.slice(0, positions.length).map((src, index) => (
        <div
          key={index}
          className="absolute rounded-full border-2 border-white shadow-md overflow-hidden bg-muted"
          style={{
            top: `${positions[index].top}px`,
            left: `${positions[index].left}px`,
            width: `${positions[index].size}px`,
            height: `${positions[index].size}px`,
          }}
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      ))}
    </div>
  );
}

function TeamTile({ member }) {
  return (
    <div
      className="relative overflow-hidden w-full h-[260px] md:h-[300px] lg:h-[340px]"
      style={{ backgroundColor: member.bgColor }}
    >
      <img
        src={member.imageUrl}
        alt={member.name}
        className="block w-full h-full object-cover object-[50%_35%]"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />

      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
        <p className="text-white font-semibold text-sm md:text-base leading-tight">
          {member.name}
        </p>
        <p className="text-white/80 text-xs md:text-sm">{member.role}</p>
      </div>
    </div>
  );
}

function HeaderSection() {
  return (
    <section className="bg-white pt-20 pb-12 md:pt-24 md:pb-16">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-center text-foreground mb-10 md:mb-12">
          About Us
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="lg:flex-1 space-y-4">
            {aboutIntroText.map((paragraph, index) => (
              <p
                key={index}
                className="text-muted-foreground leading-[1.7] text-[14px] md:text-[16px]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex justify-center lg:justify-end w-full lg:w-auto">
            <AvatarCollage />
            <TabletAvatarCollage />
            <MobileAvatarCollage />
          </div>
        </div>
      </div>
    </section>
  );
}

function FounderSection() {
  return (
    <section className="py-6 md:py-8 bg-white">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 md:pr-8">
        <div
          className="relative rounded-[24px] md:rounded-[28px] overflow-hidden shadow-sm"
          style={{ backgroundColor: "#f5f0e8" }}
        >
          {/* md+ : 3/4 text + 1/4 image (overlay) | mobile : stacked */}
          <div className="grid grid-cols-1 md:grid-cols-4">
            {/* TEXT (3/4) */}
            <div className="md:col-span-3 p-6 md:p-8 lg:p-10 md:pr-4">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-5">
                Our Founder & CEO
              </h2>

              <div className="space-y-3 lg:max-w-[95%] md:pr-8">
                {founderBio.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-muted-foreground leading-[1.7] text-[13px] md:text-[14px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* md+ name in text area (tab left, lg+ center like your screenshots) */}
              <div className="hidden md:block mt-6 lg:mt-8 md:text-left md:ml-6 lg:text-right lg:mr-20">
                <h3 className="text-base md:text-lg font-semibold text-foreground italic">
                  {founderName}
                </h3>
                <p className="text-muted-foreground text-sm italic">
                  {founderRole}
                </p>
              </div>

              {/* mobile: after text, show image + name side-by-side at bottom-right */}
              <div className="md:hidden mt-2 flex items-end justify-end gap-4">
                <div className="text-right">
                  <h3 className="text-base md:text-lg font-semibold text-foreground italic">
                    {founderName}
                  </h3>
                  <p className="text-muted-foreground text-sm italic">
                    {founderRole}
                  </p>
                </div>

                <div className="shrink-0 w-[160px] h-[160px]">
                  <img
                    src={founderImageUrl}
                    alt={founderName}
                    className="w-full h-full object-contain object-bottom grayscale"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              </div>
            </div>

            {/* IMAGE (1/4) — md+ overlay in its own column */}
            <div className="hidden md:block md:col-span-1 relative">
              {/* soft blend on left edge (tab + laptop) */}
              <div className="absolute inset-y-0 left-0 w-24 z-10" />

              {/* image overlay */}
              <img
                src={founderImageUrl}
                alt={founderName}
                className="
                  pointer-events-none select-none
                  absolute bottom-0 md:-right-6 lg:right-0
                  md:w-[200%] lg:h-full w-[130%] lg:w-[140%] xl:w-[150%]
                  max-w-none
                  object-contain object-bottom grayscale
                "
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MeetTeamSection() {
  return (
    <section className="py-6 md:py-8 bg-white">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div
          className="rounded-[24px] md:rounded-[28px] overflow-hidden shadow-sm"
          style={{ backgroundColor: "#F2FAFF" }}
        >
          {/* Meet Team Area */}
          {/* Meet Team Area */}
          <div className="mb-10 lg:mb-12 bg-[#F0F5F8]  lg:rounded-[32px] overflow-hidden">
            {/* ✅ DESKTOP (lg+) — keep EXACTLY your current layout */}
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-5 gap-0">
              {/* Row 1 – Text spans 2 columns */}
              <div className="md:col-span-2 p-6 md:px-8 lg:px-10 flex flex-col justify-center">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  Meet Team
                </h2>
                <p className="text-muted-foreground text-[13px] md:text-sm leading-relaxed">
                  {meetTeamIntro}
                </p>
              </div>

              {/* Row 1 – Images 1,2,3 */}
              {meetTeamMembers[0] && <TeamTile member={meetTeamMembers[0]} />}
              {meetTeamMembers[1] && <TeamTile member={meetTeamMembers[1]} />}
              {meetTeamMembers[2] && <TeamTile member={meetTeamMembers[2]} />}

              {/* Row 2 – Empty spacer (col 1) */}
              <div className="hidden md:block" />

              {/* Row 2 – Images 4,5,6,7 */}
              {meetTeamMembers[3] && <TeamTile member={meetTeamMembers[3]} />}
              {meetTeamMembers[4] && <TeamTile member={meetTeamMembers[4]} />}
              {meetTeamMembers[5] && <TeamTile member={meetTeamMembers[5]} />}
              {meetTeamMembers[6] && <TeamTile member={meetTeamMembers[6]} />}
            </div>

            {/* ✅ TABLET (md to <lg) — 2 columns */}
            <div className="hidden md:grid lg:hidden grid-cols-2 gap-0">
              {/* Row 1: Text */}
              <div className="p-6 md:px-8 flex flex-col justify-center">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  Meet Team
                </h2>
                <p className="text-muted-foreground text-[13px] md:text-sm leading-relaxed">
                  {meetTeamIntro}
                </p>
              </div>

              {/* Row 1: First image */}
              {meetTeamMembers[0] && <TeamTile member={meetTeamMembers[0]} />}

              {/* Remaining: image-only (fills grid 2 cols) */}
              {meetTeamMembers.slice(1).map((m) => (
                <TeamTile key={m.id} member={m} />
              ))}
            </div>

            {/* ✅ MOBILE — text then swipe images */}
            <div className="md:hidden flex flex-col">
              {/* Text */}
              <div className="p-6 flex flex-col justify-center">
                <h2 className="text-xl font-bold text-foreground mb-3">
                  Meet Team
                </h2>
                <p className="text-muted-foreground text-[13px] leading-relaxed">
                  {meetTeamIntro}
                </p>
              </div>

              {/* Swipe / horizontal scroll images */}
              <div className="overflow-x-auto">
                <div className="flex gap-0 snap-x snap-mandatory">
                  {meetTeamMembers.map((m) => (
                    <div
                      key={m.id}
                      className="shrink-0 w-[78vw] max-w-[360px] snap-start"
                    >
                      <TeamTile member={m} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Design. Content. Technology. Area */}
          {/* Design. Content. Technology. Area */}
          <div className="px-4 mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-1">
              Design. Content. Technology.
            </h2>
            <p className="text-muted-foreground text-[13px] md:text-sm mb-6">
              Teams across disciplines working together to shape Lipi&apos;s
              learning experiences.
            </p>

            <div className="space-y-3">
              {/* ✅ MOBILE: single swipe row (all portraits in 1 row) */}
              <div className="md:hidden">
                <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 snap-x snap-mandatory">
                  {disciplinePortraits.map((portrait) => (
                    <div
                      key={portrait.id}
                      tabIndex={0}
                      className="relative aspect-square overflow-hidden group cursor-pointer shrink-0 w-[160px] snap-start"
                      style={{ backgroundColor: portrait.bgColor }}
                    >
                      <img
                        src={portrait.imageUrl}
                        alt={portrait.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />

                      <div
                        className="
                absolute bottom-0 left-0 right-0 p-2
                bg-gradient-to-t from-black/70 to-transparent

                translate-y-4 opacity-0

                /* Desktop hover */
                group-hover:translate-y-0
                group-hover:opacity-100

                /* Mobile tap */
                group-active:translate-y-0
                group-active:opacity-100
                group-focus-within:translate-y-0
                group-focus-within:opacity-100

                transition-all duration-300 ease-out
              "
                      >
                        <p className="text-white font-medium text-[10px] md:text-xs">
                          {portrait.name}
                        </p>
                        <p className="text-white/80 text-[8px] md:text-[10px]">
                          {portrait.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ✅ TABLET + DESKTOP: keep your exact 2-row layout */}
              <div className="hidden md:block space-y-3">
                {/* First row: 6 on desktop, 3 on tablet */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {disciplinePortraits.slice(0, 6).map((portrait) => (
                    <div
                      key={portrait.id}
                      tabIndex={0}
                      className="relative aspect-square overflow-hidden group cursor-pointer"
                      style={{ backgroundColor: portrait.bgColor }}
                    >
                      <img
                        src={portrait.imageUrl}
                        alt={portrait.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      <div
                        className="
                absolute bottom-0 left-0 right-0 p-2
                bg-gradient-to-t from-black/70 to-transparent

                translate-y-4 opacity-0

                /* Desktop hover */
                group-hover:translate-y-0
                group-hover:opacity-100

                /* Mobile tap */
                group-active:translate-y-0
                group-active:opacity-100
                group-focus-within:translate-y-0
                group-focus-within:opacity-100

                transition-all duration-300 ease-out
              "
                      >
                        <p className="text-white font-medium text-[10px] md:text-xs">
                          {portrait.name}
                        </p>
                        <p className="text-white/80 text-[8px] md:text-[10px]">
                          {portrait.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Second row: 5 on desktop centered, 3 on tablet */}
                <div className="flex justify-center">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 w-full lg:w-5/6">
                    {disciplinePortraits.slice(6, 11).map((portrait) => (
                      <div
                        key={portrait.id}
                        tabIndex={0}
                        className="relative aspect-square overflow-hidden group cursor-pointer"
                        style={{ backgroundColor: portrait.bgColor }}
                      >
                        <img
                          src={portrait.imageUrl}
                          alt={portrait.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                        <div
                          className="
                  absolute bottom-0 left-0 right-0 p-2
                  bg-gradient-to-t from-black/70 to-transparent

                  translate-y-4 opacity-0

                  /* Desktop hover */
                  group-hover:translate-y-0
                  group-hover:opacity-100

                  /* Mobile tap */
                  group-active:translate-y-0
                  group-active:opacity-100
                  group-focus-within:translate-y-0
                  group-focus-within:opacity-100

                  transition-all duration-300 ease-out
                "
                        >
                          <p className="text-white font-medium text-[10px] md:text-xs">
                            {portrait.name}
                          </p>
                          <p className="text-white/80 text-[8px] md:text-[10px]">
                            {portrait.role}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type Advisor = (typeof advisors)[number];

function AdvisorsSection() {
  const [selectedAdvisor, setSelectedAdvisor] = useState<Advisor | null>(null);

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8 md:mb-10">
          Advisors
        </h2>

        {/* 4 columns on desktop, 3 on tablet, 2 on mobile */}
        {/* Mobile: swipe row | md+: same grid */}
        <div className="md:hidden">
          <div className="flex gap-5 overflow-x-auto pb-2 -mx-5 px-5 snap-x snap-mandatory">
            {advisors.map((advisor) => (
              <button
                key={advisor.id}
                className="flex flex-col items-center text-center rounded-lg p-2 shrink-0 w-[190px] snap-start"
                onClick={() => setSelectedAdvisor(advisor)}
                aria-label={`View ${advisor.name}'s profile`}
              >
                {/* Avatar */}
                <div className="w-[169.5px] h-[169.5px] rounded-full overflow-hidden bg-muted">
                  <img
                    src={advisor.imageUrl}
                    alt={advisor.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                {/* Name + Role */}
                <div className="mt-3 w-full">
                  <h3 className="font-semibold text-xs text-foreground text-center">
                    {advisor.name}
                  </h3>
                  <p className="text-[10px] text-muted-foreground mt-1 text-center">
                    {advisor.role}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {advisors.map((advisor) => (
            <button
              key={advisor.id}
              className="flex flex-col items-center text-center rounded-lg p-2"
              onClick={() => setSelectedAdvisor(advisor)}
              aria-label={`View ${advisor.name}'s profile`}
            >
              {/* Avatar */}
              <div className="w-[169.5px] h-[169.5px] rounded-full overflow-hidden bg-muted">
                <img
                  src={advisor.imageUrl}
                  alt={advisor.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              {/* Name + Role */}
              <div className="mt-3 w-full">
                <h3 className="font-semibold text-xs md:text-sm text-foreground text-center">
                  {advisor.name}
                </h3>
                <p className="text-[10px] md:text-xs text-muted-foreground mt-1 text-center">
                  {advisor.role}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Advisor Modal */}
      <Dialog
        open={!!selectedAdvisor}
        onOpenChange={() => setSelectedAdvisor(null)}
      >
        <DialogContent
          className="
    my-4 sm:my-6
    w-[92vw]
    max-w-[520px] sm:max-w-[720px] md:max-w-[900px] lg:max-w-[1100px]
    max-h-[85vh]
    overflow-y-auto overflow-x-hidden
    rounded-[32px] p-0 border-0
    [&>button]:hidden
  "
          aria-describedby="advisor-bio"
        >
          <DialogTitle className="sr-only">
            {selectedAdvisor?.name} - {selectedAdvisor?.role}
          </DialogTitle>

          {selectedAdvisor && (
            <div className="relative p-6 md:p-8">
              {/* Top right controls */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center gap-2">
                {selectedAdvisor.linkedinUrl && (
                  <a
                    href={selectedAdvisor.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-sm bg-[#0077B5] flex items-center justify-center text-white hover:bg-[#005885] transition-colors"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                <button
                  onClick={() => setSelectedAdvisor(null)}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                {/* Left column - Avatar and info */}
                <div className="flex flex-col items-center shrink-0 md:w-44">
                  <div className="w-32 h-32 md:w-36 md:h-36 rounded-full p-1 mx-auto md:mx-0">
                    <img
                      src={selectedAdvisor.imageUrl}
                      alt={selectedAdvisor.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-base md:text-lg text-foreground mt-3 text-center md:text-left">
                    {selectedAdvisor.name}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground text-center w-full">
                    {selectedAdvisor.role}
                  </p>
                </div>

                {/* Right column - Bio */}
                <div id="advisor-bio" className="flex-1 mt-4 md:mt-9">
                  {selectedAdvisor.bio.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-muted-foreground leading-relaxed text-[13px] md:text-[14px] mb-3 last:mb-0"
                    >
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
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div
          className="rounded-[24px] md:rounded-[28px] py-8 md:py-10 px-5 md:px-8"
          style={{ backgroundColor: "#f5f0e8" }}
        >
          <h2 className="text-xl md:text-2xl font-bold text-center text-foreground mb-2">
            References
          </h2>
          <p className="text-muted-foreground text-center text-[13px] md:text-sm max-w-2xl mx-auto mb-8">
            Lipi Games content is curated from authentic publications and
            reviewed by an expert panel to ensure accuracy and credibility.
          </p>

          {/* Reference Cards - 2 columns on desktop, stack on mobile */}
          <div className="grid md:grid-cols-2 gap-5 md:gap-6 mb-6">
            {/* Left Card - Advisory */}
            <div className="relative">
              <div
                className="absolute inset-0 translate-x-2 translate-y-2"
                style={{ backgroundColor: "#715B38" }}
              />
              <div
                className="relative p-5 md:p-6 h-full min-h-[120px]"
                style={{ backgroundColor: "#B9965D" }}
              >
                <h3 className="text-sm md:text-base font-bold text-white mb-3">
                  {references.advisoryTitle}
                </h3>
                <div className="space-y-1.5">
                  {references.advisoryLines.map((line, index) => (
                    <p
                      key={index}
                      className="text-white/90 text-[12px] md:text-[13px]"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card - References */}
            <div className="relative">
              <div
                className="absolute inset-0 translate-x-2 translate-y-2"
                style={{ backgroundColor: "#0E238B" }}
              />
              <div
                className="relative p-5 md:p-6 h-full min-h-[120px]"
                style={{ backgroundColor: "#4758AC" }}
              >
                <h3 className="text-sm md:text-base font-bold text-white mb-3">
                  {references.referencesTitle}
                </h3>
                <ul className="space-y-1.5">
                  {references.referenceItems.map((item, index) => (
                    <li
                      key={index}
                      className="text-white/90 text-[12px] md:text-[13px] flex items-start gap-2"
                    >
                      <span className="text-white mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="bg-white rounded-lg px-4 py-3">
            <p className="text-[12px] md:text-[13px]">
              <span
                className="font-medium underline"
                style={{ color: "#ff7c2b" }}
              >
                Note :
              </span>
              <span className="text-muted-foreground ml-1">
                {references.noteText}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeaderSection />
      <FounderSection />
      <MeetTeamSection />
      <AdvisorsSection />
      <ReferencesSection />
    </main>
  );
}
