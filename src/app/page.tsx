import { FeaturedStatesSection } from "@/components/home/featured-states/FeaturedStatesSection";
import { HeroSection } from "@/components/home/HeroSection";
import { IndiaMapSection } from "@/components/home/map/IndiaMapSection";
import { FeaturedDistrictsSection } from "@/components/home/featured-districts/FeaturedDistrictsSection";

export default function HomePage() {

  return (
   <>
  <HeroSection />

  <IndiaMapSection />

  <FeaturedStatesSection />

<FeaturedDistrictsSection />

</>
  );
}
