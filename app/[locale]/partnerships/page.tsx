import { GlobalSearch } from "./components/global-search";
import { getPopularPartners } from "./data/popular";
import { Header } from "./components/header";
import { getScopedI18n } from "@/locales/server";

export async function generateMetadata() {
	const t = await getScopedI18n("partnerships");

	return {
		title: `FizzDragon - ${t("title")}`,
		description: t("description"),
	};
}

export default async function Page() {
	const popularPartners = await getPopularPartners();

	return (
		<>
			<Header />
			<div className="flex justify-center min-h-screen w-full px-2 mt-[15%]">
				<div className="w-full max-w-6xl">
					<GlobalSearch sections={popularPartners} />
				</div>
			</div>
		</>
	);
}
