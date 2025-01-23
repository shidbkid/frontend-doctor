import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import Recommendations from "@/components/Recommendations";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Recommendations */}
      <Recommendations />
    </Layout>
  );
}
