
import HeroSection from "../components/sections/HeroSection";
import GallerySection from "../components/sections/GallerySection";
import AboutSection from "../components/sections/AboutSection";
import FooterSection from "../components/sections/FooterSection";

export default function Resume() {
  return (
    <div>
      <HeroSection />
      <h1>Gallery Page</h1>
      <GallerySection />
      <AboutSection />
      <FooterSection />
    </div>
  );
}
