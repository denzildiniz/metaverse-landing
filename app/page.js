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
      
      {/* Animated Metal Circles Background */}
      <div className="animated-metalCircel-container z-[100]">
        <Image
          src="/images/silver.png"
          alt="Animated Metal Circle 1"
          width={150}
          height={150}
          className="animated-metalItem"
        />
      </div>
      
      <div className="animated-metalCircel-container z-[100]">
        <Image
          src="/images/metalCircle.png"
          alt="Animated Metal Circle 2"
          width={50}
          height={50}
          className="animated-metalItem-2"
        />
      </div>
      
      <div className="animated-metalCircel-container z-[100]">
        <Image
          src="/images/metalCircle.png"
          alt="Animated Metal Circle 3"
          width={120}
          height={120}
          className="animated-metalItem-3"
        />
      </div>
      
      <div className="animated-metalCircel-container z-[100]">
        <Image
          src="/images/silver.png"
          alt="Animated Metal Circle 4"
          width={80}
          height={80}
          className="animated-metalItem-4"
        />
      </div>
      
      <div className="animated-metalCircel-container z-[100]">
        <Image
          src="/images/metalCircle.png"
          alt="Animated Metal Circle 5"
          width={130}
          height={130}
          className="animated-metalItem-5"
        />
      </div>
      
      <div className="animated-metalCircel-container z-[100]">
        <Image
          src="/images/silver.png"
          alt="Animated Metal Circle 6"
          width={80}
          height={80}
          className="animated-metalItem-6"
        />
      </div>
      
      <div className="animated-metalCircel-container z-[100]">
        <Image
          src="/images/silver.png"
          alt="Animated Metal Circle 7"
          width={60}
          height={60}
          className="animated-metalItem-7"
        />
      </div>
      
      <div className="animated-metalCircel-container z-[100]">
        <Image
          src="/images/metalCircle.png"
          alt="Animated Metal Circle 8"
          width={70}
          height={70}
          className="animated-metalItem-8"
        />
      </div>
      
      <div className="animated-metalCircel-container z-[100]">
        <Image
          src="/images/silver.png"
          alt="Animated Metal Circle 9"
          width={90}
          height={90}
          className="animated-metalItem-9"
        />
      </div>
      
      <div className="animated-metalCircel-container z-[100]">
        <Image
          src="/images/metalCircle.png"
          alt="Animated Metal Circle 10"
          width={40}
          height={40}
          className="animated-metalItem-10"
        />
      </div>
      
      <div className="animated-metalCircel-container z-[100]">
        <Image
          src="/images/silver.png"
          alt="Animated Metal Circle 11"
          width={30}
          height={30}
          className="animated-metalItem-11"
        />
      </div>
    </>
  );
}