"use client";

import { HeroTitle } from "./hero-title";
import { GlobalSearchInput } from "./global-search-input";
import { motion } from "framer-motion";
import { PartnerList } from "./partner-list";
import type { PartnerSection } from "../data/types";

export function GlobalSearch({ sections }: { sections: PartnerSection[] }) {
	return (
		<div>
			<div className="flex flex-col gap-4 w-full relative mx-auto h-screen">
				<div className="transition-all duration-1000">
					<div
						className="flex justify-center items-center mb-8"
						style={{
							opacity: 0,
							animation: "fadeIn 0.05s ease forwards",
						}}
					>
						<img src="/imgs/png2.png" alt="FizzDragon" className="h-8" />
					</div>

					<HeroTitle />

					<div className="max-w-[620px] mx-auto w-full mb-14">
						<GlobalSearchInput />
					</div>

					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
					>
						<PartnerList sections={sections} />
					</motion.div>
				</div>
			</div>
		</div>
	);
}
