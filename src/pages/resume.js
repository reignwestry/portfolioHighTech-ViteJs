import HeadSection from "./../components/Head";
import HeroSection from "../components/sections/HeroSection";
import ShowcaseSection from "../components/sections/ShowcaseSection";
import AboutSection from "../components/sections/AboutSection";
import FooterSection from "../components/sections/Footer";

export default function Resume() {
  return (
    <div>
      <HeadSection />
          <HeroSection />
          <h1>Resume Page</h1>
      <ShowcaseSection />
      <AboutSection />
      <FooterSection />
    </div>
  );
}
