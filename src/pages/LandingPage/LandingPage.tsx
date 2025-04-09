import {
  Header,
  Footer,
  HeroSection,
  FeaturesSection,
  OffersSection,
  BlogSection,
  ContactUsSection,
  FaqSection,
  JoinUsSection,
  MapSection,
  RecommendationsSection,
} from "@/widgets";
import React from "react";

export const LandingPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <OffersSection />
      <RecommendationsSection />
      <MapSection />
      <BlogSection />
      <FaqSection />
      <JoinUsSection />
      <ContactUsSection />
      <Footer />
    </>
  );
};
