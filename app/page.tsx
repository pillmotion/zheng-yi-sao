import Project from "@/templates/shadcn/pages/project";
import { Metadata } from "next";
import { page } from "@/data/project";

export const runtime = "edge";

export async function generateMetadata(): Promise<Metadata> {
  return {
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_WEB_URL}/`,
    },
  };
}

export default async function () {
  return <Project page={page} />;
}
