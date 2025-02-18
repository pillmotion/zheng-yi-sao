import type { PartnerSection } from "../data/types";
import { PartnerCard } from "./partner-card";

export function PartnerList({ sections }: { sections: PartnerSection[] }) {
  return (
    <div className="space-y-8 sm:space-y-16">
      {sections.map((section) => (
        <section key={section.type} id={section.type}>
          <h2 className="text-lg sm:text-xl font-medium text-foreground mb-4 sm:mb-8">
            {section.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {section.partners.map((partner) => (
              <PartnerCard key={partner.id} partner={partner} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}