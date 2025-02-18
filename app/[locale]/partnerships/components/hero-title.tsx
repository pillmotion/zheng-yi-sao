"use client";

import { useScopedI18n } from "@/locales/client";

export function HeroTitle() {
	const t = useScopedI18n("partnerships");
	const text = t("heroTitle");

	return (
		<div className="text-center mb-8">
			<h1
				className="text-[21px] mb-2"
				style={{
					opacity: 0,
					animation: "fadeIn 0.2s ease forwards",
				}}
			>
				{text}
			</h1>

			<p
				className="text-[#878787] text-sm"
				style={{
					opacity: 0,
					animation: "fadeIn 0.2s ease forwards 0.1s",
				}}
			>
				{t("description")} <br />
				<a
					href="mailto:business@fizzdragon.com"
					className="border-b border-border border-dashed hover:text-primary hover:border-primary transition-colors"
				>
					{t("contactUs")}
				</a>
			</p>
			<style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
		</div>
	);
}
