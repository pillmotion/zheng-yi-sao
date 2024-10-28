import "../assets/css/style.css";

import Cta from "@/app/[locale]/zhengyisao/templates/shadcn/components/cta";
import Faq from "@/app/[locale]/zhengyisao/templates/shadcn/components/faq";
import Feature from "@/app/[locale]/zhengyisao/templates/shadcn/components/feature";
import Footer from "@/app/[locale]/zhengyisao/templates/shadcn/components/footer";
import Header from "@/app/[locale]/zhengyisao/templates/shadcn/components/header";
import Hero from "@/app/[locale]/zhengyisao/templates/shadcn/components/hero";
import { Page } from "@/types/landing";
import Section from "@/app/[locale]/zhengyisao/templates/shadcn/components/section";
import Testimonial from "@/app/[locale]/zhengyisao/templates/shadcn/components/testimonial";
import Usercase from "@/app/[locale]/zhengyisao/templates/shadcn/components/usercase";

export default function ({ page }: { page: Page }) {
  return (
    <>
      {page.header && <Header header={page.header} />}
      {page.hero && <Hero hero={page.hero} />}
      {page.usercase && <Usercase section={page.usercase} />}
      {page.section && <Section section={page.section} />}
      {page.feature && <Feature section={page.feature} />}
      {page.testimonial && <Testimonial section={page.testimonial} />}
      {page.faq && <Faq section={page.faq} />}
      {page.cta && <Cta section={page.cta} />}
      {page.footer && <Footer footer={page.footer} />}
    </>
  );
}
