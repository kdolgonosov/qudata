import { Header, Footer } from "@/widgets";
import {
  Hero,
  Features,
  Offers,
  Blog,
  ContactUs,
  Faq,
  JoinUs,
  CompareMap,
  Recommendations,
} from "../sections";

export const LandingPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Offers />
        <Recommendations />
        <CompareMap />
        <Blog />
        <Faq />
        <JoinUs />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
};
