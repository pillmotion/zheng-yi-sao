import { Search } from "lucide-react";  // 添加搜索图标
import { useScopedI18n } from "@/locales/client";

export function GlobalSearchInput() {
  const t = useScopedI18n("partnerships");
  const placeholder = t("searchPlaceholder");

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative h-[60px] bg-background border border-border rounded-lg group focus-within:border-primary/50 transition-colors">
        {/* 搜索图标 */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
          <Search size={20} />
        </div>

        <input
          type="text"
          className="w-full h-full bg-transparent pl-12 pr-4 text-base 
            text-foreground placeholder:text-muted-foreground 
            focus:outline-none caret-primary"
          placeholder={placeholder}
          autoComplete="off"
          spellCheck="false"
        />
      </div>
    </div>
  );
}