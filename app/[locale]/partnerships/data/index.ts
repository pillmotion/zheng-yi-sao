import { getScopedI18n } from "@/locales/server";
import type { PartnerSection } from "./types";

export async function getSections(): Promise<PartnerSection[]> {
  const t = await getScopedI18n("partnerships.sections");

  return [
    {
      type: "jointVenture",
      title: t("jointVenture.title"),
      partners: [
        {
          id: "jv1",
          name: "FizzFuture",
          logo: "/imgs/icons/FIzzFuture.png",
          type: "jointVenture",
          location: t("jointVenture.location"),
        },
      ],
    },
    {
      type: "strategic",
      title: t("strategic.title"),
      partners: [
        {
          id: "sp1",
          name: "FizzStudios",
          logo: "/imgs/icons/FutureStudios.png",
          type: "strategic",
          location: t("strategic.location"),
        },
      ],
    },
  ];
}