import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X, Linkedin, ChevronDown } from "lucide-react";
import {
  founderBio,
  founderName,
  founderRole,
  founderImageUrl,
  meetTeamMembers,
  disciplinePortraits,
  advisors,
} from "../data/aboutData";
import {
  accuracyDisclaimerText,
  accuracyDisclaimerTitle,
  originalContentCreationText,
  originalContentCreationTitle,
  referenceBlocks,
} from "../data/ReferenceBlockData";
import { useSEO } from "@/shared/hooks/useSEO";
import { aboutIntroText } from "../data/aboutIntro";
import { meetTeamIntro } from "../data/meetTeamIntro";

function TeamTile({
  member,
  onSelect,
}: {
  member: any;
  onSelect: (m: any) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(member)}
      className="group relative overflow-hidden w-full h-[260px] md:h-[300px] lg:h-[340px] text-left rounded-sm md:rounded-none"
      style={{ backgroundColor: member.bgColor }}
      aria-label={`View ${member.name}'s profile`}
    >
      <img
        src={member.imageUrl}
        alt={member.name}
        loading="lazy"
        decoding="async"
        className="block w-full h-full object-cover transition-transform duration-300 ease-out [@media(hover:hover)]:group-hover:scale-105"
        style={{ objectPosition: member.objectPosition ?? "50% 20%" }}
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
    </button>
  );
}

function HeaderSection() {
  return (
    <section className="bg-white pt-20 pb-12 md:pt-24 md:pb-16">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-center text-foreground mb-10 md:mb-12">
          About Us
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:px-1 items-center">
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
        </div>
      </div>
    </section>
  );
}

function FounderSection() {
  return (
    <section className="py-6 md:py-8 bg-white">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 md:pr-8">
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
              <div className="md:hidden flex flex-col items-center text-center">
                <div className="w-[min(240px,78vw)] sm:w-[min(280px,60vw)] aspect-square">
                  <img
                    src={founderImageUrl}
                    alt={founderName}
                    className="w-full h-full object-contain object-bottom"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <div className="mt-3">
                  <h3 className="text-base font-semibold text-foreground italic">
                    {founderName}
                  </h3>
                  <p className="text-muted-foreground text-sm italic">
                    {founderRole}
                  </p>
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
                  object-contain object-bottom
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
  const [selectedMember, setSelectedMember] = useState<any | null>(null);

  return (
    <section className="py-6 md:py-8 bg-white">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div
          className="rounded-[24px] md:rounded-[28px] overflow-hidden shadow-sm"
          style={{ backgroundColor: "#F2FAFF" }}
        >
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
              {meetTeamMembers[0] && (
                <TeamTile
                  member={meetTeamMembers[0]}
                  onSelect={setSelectedMember}
                />
              )}
              {meetTeamMembers[1] && (
                <TeamTile
                  member={meetTeamMembers[1]}
                  onSelect={setSelectedMember}
                />
              )}
              {meetTeamMembers[2] && (
                <TeamTile
                  member={meetTeamMembers[2]}
                  onSelect={setSelectedMember}
                />
              )}

              {/* Row 2 – Empty spacer (col 1) */}
              <div className="hidden md:block" />

              {/* Row 2 – Images 4,5,6,7 */}
              {meetTeamMembers[3] && (
                <TeamTile
                  member={meetTeamMembers[3]}
                  onSelect={setSelectedMember}
                />
              )}
              {meetTeamMembers[4] && (
                <TeamTile
                  member={meetTeamMembers[4]}
                  onSelect={setSelectedMember}
                />
              )}
              {meetTeamMembers[5] && (
                <TeamTile
                  member={meetTeamMembers[5]}
                  onSelect={setSelectedMember}
                />
              )}
              {meetTeamMembers[6] && (
                <TeamTile
                  member={meetTeamMembers[6]}
                  onSelect={setSelectedMember}
                />
              )}
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
              {meetTeamMembers[0] && (
                <TeamTile
                  member={meetTeamMembers[0]}
                  onSelect={setSelectedMember}
                />
              )}

              {/* Remaining: image-only (fills grid 2 cols) */}
              {meetTeamMembers.slice(1).map((m) => (
                <TeamTile key={m.id} member={m} onSelect={setSelectedMember} />
              ))}
            </div>

            {/* ✅ MOBILE — text then 2 per row grid */}
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

              {/* 2 per row */}
              <div className="px-6 pb-6">
                <div className="grid grid-cols-1 gap-1">
                  {meetTeamMembers.map((m) => (
                    <TeamTile
                      key={m.id}
                      member={m}
                      onSelect={setSelectedMember}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Dialog
            open={!!selectedMember}
            onOpenChange={() => setSelectedMember(null)}
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
              aria-describedby="team-member-bio"
            >
              <DialogTitle className="sr-only">
                {selectedMember?.name} - {selectedMember?.role}
              </DialogTitle>

              {selectedMember && (
                <div className="relative p-6 md:p-8">
                  {/* Top right close */}
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center gap-2">
                    {selectedMember.linkedinUrl && (
                      <a
                        href={selectedMember.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-sm bg-[#0077B5] flex items-center justify-center text-white hover:bg-[#005885] transition-colors"
                        aria-label="LinkedIn profile"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}

                    <button
                      onClick={() => setSelectedMember(null)}
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      aria-label="Close modal"
                      type="button"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Left column */}
                    <div className="flex flex-col items-center shrink-0 md:w-44">
                      <div
                        className="w-32 h-32 md:w-36 md:h-36 rounded-full p-1 mx-auto md:mx-0"
                        style={{ backgroundColor: "#f7efd2" }}
                      >
                        <img
                          src={selectedMember.imageUrl}
                          alt={selectedMember.name}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full rounded-full object-cover"
                          style={{
                            objectPosition:
                              selectedMember.objectPosition ?? "50% 20%",
                          }}
                        />
                      </div>

                      <h3 className="font-bold text-base md:text-lg text-foreground mt-3 text-center md:text-left">
                        {selectedMember.name}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground text-center w-full">
                        {selectedMember.role}
                      </p>
                    </div>

                    {/* Right column */}
                    <div id="team-member-bio" className="flex-1 mt-4 md:mt-9">
                      {(selectedMember.bio?.length
                        ? selectedMember.bio
                        : ["Bio coming soon."]
                      ).map((paragraph: string, index: number) => (
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
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        style={{
                          objectPosition: portrait.objectPosition ?? "50% 20%",
                        }}
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
                      className="rounded-sm relative aspect-square overflow-hidden group cursor-pointer"
                      style={{ backgroundColor: portrait.bgColor }}
                    >
                      <img
                        src={portrait.imageUrl}
                        alt={portrait.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        style={{
                          objectPosition: portrait.objectPosition ?? "50% 20%",
                        }}
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
                        className="rounded-sm relative aspect-square overflow-hidden group cursor-pointer"
                        style={{ backgroundColor: portrait.bgColor }}
                      >
                        <img
                          src={portrait.imageUrl}
                          alt={portrait.name}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          style={{
                            objectPosition:
                              portrait.objectPosition ?? "50% 20%",
                          }}
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

export function ReferencesSection() {
  const cardVariants = {
    brown: { shadow: "#715B38", bg: "#B9965D" },
    blue: { shadow: "#1D3AB3", bg: "#7383D9" },
  } as const;

  const [openMap, setOpenMap] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    referenceBlocks.forEach((b) => (initial[b.id] = false));
    return initial;
  });

  const toggleCard = (id: string) => {
    setOpenMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div
          className="rounded-[24px] md:rounded-[28px] py-8 md:py-10 px-5 md:px-8"
          style={{ backgroundColor: "#f5f0e8" }}
        >
          <h2 className="text-xl md:text-2xl font-bold text-center text-foreground mb-2">
            References
          </h2>
          <p className="text-muted-foreground text-center text-[13px] md:text-sm max-w-2xl mx-auto mb-8">
            Lipi Inc content is curated from authentic publications and
            reviewed by an expert panel to ensure accuracy and credibility.
          </p>

          {/* Expandable Cards */}
          <div className="grid grid-cols-1 gap-5 md:gap-6 mb-6">
            {referenceBlocks.map((b) => {
              const colors = cardVariants[b.variant];
              const isOpen = openMap[b.id] ?? false;

              return (
                <div key={b.id} className="relative">
                  {/* Shadow Block */}
                  <div
                    className="absolute inset-0 translate-x-2 translate-y-2"
                    style={{ backgroundColor: colors.shadow }}
                  />

                  {/* Main Card */}
                  <div
                    className="relative p-5 md:p-6 h-full min-h-[60px]"
                    style={{ backgroundColor: colors.bg }}
                  >
                    <button
                      type="button"
                      onClick={() => toggleCard(b.id)}
                      className="w-full flex items-center justify-between gap-3 text-left"
                      aria-expanded={isOpen}
                      aria-controls={`ref-block-${b.id}`}
                    >
                      <h3 className="text-sm md:text-base font-bold text-white">
                        {b.title}
                      </h3>

                      <span
                        className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/60 bg-white/10 hover:bg-white/15 transition-colors"
                        aria-hidden="true"
                      >
                        <ChevronDown
                          className={`w-5 h-5 text-white transition-transform duration-200 ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </span>
                    </button>

                    {/* Content Area */}
                    {isOpen && (
                      <div id={`ref-block-${b.id}`} className="mt-4 space-y-4">
                        {b.content.map((item, index) => {
                          if (item.type === "text") {
                            return (
                              <p
                                key={index}
                                className="text-white/90 text-[12px] md:text-[13px] leading-relaxed"
                              >
                                {item.value}
                              </p>
                            );
                          }
                          if (item.type === "list") {
                            return (
                              <ul key={index} className="space-y-1.5">
                                {item.items.map((line, idx) => (
                                  <li
                                    key={idx}
                                    className="text-white/90 text-[12px] md:text-[13px] flex items-start gap-2"
                                  >
                                    <span className="text-white mt-0.5">•</span>
                                    <span>{line}</span>
                                  </li>
                                ))}
                              </ul>
                            );
                          }
                          return null;
                        })}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Disclaimers */}
          <div className="space-y-3">
            <DisclaimerBlock
              title={accuracyDisclaimerTitle}
              text={accuracyDisclaimerText}
            />
            <DisclaimerBlock
              title={originalContentCreationTitle}
              text={originalContentCreationText}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function DisclaimerBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-white rounded-lg px-4 py-3">
      <p className="text-[12px] md:text-[13px]">
        <span className="font-medium underline" style={{ color: "#ff7c2b" }}>
          {title}:
        </span>
        <span className="text-muted-foreground ml-1">{text}</span>
      </p>
    </div>
  );
}

export default function AboutPage() {
  useSEO({
    title: "About Us | Lipi Inc - AI-Powered Indian Epics Learning",
    description:
      "Meet the team behind Lipi Inc. Learn about our mission to blend AI-driven learning with Indian cultural heritage through interactive word games and epic storytelling.",
    canonical: "https://lipiinc.com/about",
    keywords:
      "lipi inc, lipi games, about lipi, indian epics learning app, mahabharata app, ramayana app, AI education, cultural learning",
    ogTitle: "About Lipi Inc | AI-Powered Indian Epics Learning",
    ogDescription:
      "Discover how Lipi Inc is building the next generation of learning experiences rooted in Indian epics and native languages.",
    ogImage: "https://img.lipi.games/lipi-notifications/email/Lipi-cube-logo.png",
  });

  return (
    <main className="min-h-screen bg-white">
      <HeaderSection />
      <FounderSection />
      <MeetTeamSection />
      <ReferencesSection />
    </main>
  );
}
