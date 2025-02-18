"use client";

import Link from "next/link";
import { MobileMenu } from "./mobile-menu";
import { useScopedI18n } from "@/locales/client";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";

export function Header() {
	const t = useScopedI18n("partnerships");

	return (
		<div className="flex justify-between items-center">
			<div className="md:fixed z-50 flex justify-between items-center top-0 px-6 py-2 w-full bg-background backdrop-filter backdrop-blur-sm bg-opacity-30">
				<Link href="/" className="font-medium font-mono text-sm">
					{t("headerTitle")}
				</Link>

				<div className="hidden md:flex items-center gap-4">
					<LanguageSwitcher />
					<ModeToggle />
				</div>
			</div>
			<MobileMenu />
		</div>
	);
}
