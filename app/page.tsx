import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import RankSection from "../components/RankSection";
import DepartmentSection from "../components/DepartmentSection";
import LeadershipSection from "../components/LeadershipSection";
import NewsSection from "../components/NewsSection";
import JoinSection from "../components/JoinSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-white">

      <Navbar />

      <Hero />

      <Mission />

      <RankSection />

      <DepartmentSection />

      <LeadershipSection />

      <NewsSection />

      <JoinSection />

      <Footer />
    </main>
  );
}