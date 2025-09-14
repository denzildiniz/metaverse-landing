import Image from "next/image";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Feature from "@/components/Feature";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <Feature />
      
      {/* About Section */}
      <About />
    </>
  );
}