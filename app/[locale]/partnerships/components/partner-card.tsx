import { Card } from "@/components/ui/card";
import Image from "next/image";
import type { Partner } from "../data/types";

export function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <Card className="bg-background border-border p-4 sm:p-6 hover:border-primary/50 transition-all duration-300 group">
      <div className="flex items-center gap-3 sm:gap-6">
        {/* Logo 容器 - 更浅的背景 */}
        <div className="h-12 w-12 sm:h-16 sm:w-16 relative flex-shrink-0 bg-zinc-600 rounded-lg p-2">
          <Image
            src={partner.logo}
            alt={partner.name}
            fill
            className="object-contain transition-all brightness-110"
          />
        </div>
        
        <div className="space-y-1 sm:space-y-2">
          <h3 className="font-medium text-base sm:text-lg text-foreground group-hover:text-foreground/90">
            {partner.name}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-muted-foreground/30" />
            {partner.location}
          </p>
        </div>
      </div>
    </Card>
  );
}