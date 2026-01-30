import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { advisors } from "@/features/about/data/aboutData";
import { Linkedin, X } from "lucide-react";
import { useState } from "react";

type Advisor = (typeof advisors)[number];

export function AdvisorsSection() {
  const [selectedAdvisor, setSelectedAdvisor] = useState<Advisor | null>(null);

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-[1400px] mx-auto px-5 md:px-0">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8 md:mb-10">
          Advisors
        </h2>

        {/* Unified Responsive Grid */}
        {/* Mobile: 2 cols | Tablet: 3 cols | Desktop: 4 cols */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {advisors.map((advisor) => (
            <button
              key={advisor.id}
              className="flex flex-col items-center text-center rounded-lg p-2 transition-colors"
              onClick={() => setSelectedAdvisor(advisor)}
              aria-label={`View ${advisor.name}'s profile`}
            >
              {/* Avatar - Responsive Container */}
              {/* Uses aspect-square and w-full to scale down on small screens */}
              <div className="w-full max-w-[170px] aspect-square rounded-full overflow-hidden bg-muted mx-auto">
                <img
                  src={advisor.imageUrl}
                  alt={advisor.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: advisor.objectPosition ?? "50% %",
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              {/* Name + Role */}
              <div className="mt-3 w-full">
                <h3 className="font-semibold text-xs md:text-sm text-foreground text-center line-clamp-1">
                  {advisor.name}
                </h3>
                <p className="text-[10px] md:text-xs text-muted-foreground mt-1 text-center line-clamp-2">
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
                  <div
                    className="w-32 h-32 md:w-36 md:h-36 rounded-full p-1 mx-auto md:mx-0"
                    style={{ backgroundColor: "#f7efd2" }}
                  >
                    <img
                      src={selectedAdvisor.imageUrl}
                      alt={selectedAdvisor.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full rounded-full object-cover"
                      style={{
                        objectPosition:
                          selectedAdvisor.objectPosition ?? "50% %",
                      }}
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