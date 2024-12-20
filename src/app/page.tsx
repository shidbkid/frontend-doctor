import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Recommendations from "../components/Recommendations";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Recommendations */}
      <Recommendations />
    </div>
  );
}
