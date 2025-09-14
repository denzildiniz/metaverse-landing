import Image from "next/image";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <section className="min-h-screen bg-navy-secondary py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary font-montserrat mb-6">
              <span className="text-text-accent">&lt;</span>FEATURES<span className="text-text-accent">/&gt;</span>
            </h2>
            <p className="text-lg text-text-secondary font-montserrat max-w-2xl mx-auto">
              Powerful tools and technologies to bring your metaverse vision to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-navy-tertiary border border-navy-border rounded-lg p-8 hover:border-text-accent transition-all duration-300 hover:shadow-navy">
              <div className="text-text-accent text-4xl mb-4">&lt;/&gt;</div>
              <h3 className="text-xl font-semibold text-text-primary font-montserrat mb-4">Code Editor</h3>
              <p className="text-text-secondary font-montserrat">Advanced code editor with syntax highlighting and real-time collaboration.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-navy-tertiary border border-navy-border rounded-lg p-8 hover:border-text-accent transition-all duration-300 hover:shadow-navy">
              <div className="text-text-accent text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-text-primary font-montserrat mb-4">Deploy Instantly</h3>
              <p className="text-text-secondary font-montserrat">Deploy your metaverse projects instantly with our cloud infrastructure.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-navy-tertiary border border-navy-border rounded-lg p-8 hover:border-text-accent transition-all duration-300 hover:shadow-navy">
              <div className="text-text-accent text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-text-primary font-montserrat mb-4">Global Network</h3>
              <p className="text-text-secondary font-montserrat">Connect with developers worldwide and share your creations.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="min-h-screen bg-navy-primary py-20 relative z-20">
        <div className="absolute inset-0 bg-gradient-to-t from-navy-secondary to-navy-primary"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-text-primary font-montserrat mb-8">
            Ready to <span className="text-text-accent">Code</span>?
          </h2>
          <p className="text-xl text-text-secondary font-montserrat mb-12 max-w-2xl mx-auto">
            Join thousands of developers building the future of the metaverse
          </p>
          <button className="px-12 py-6 bg-text-accent text-navy-primary rounded-lg hover:bg-blue-400 font-bold text-xl font-montserrat transition-all duration-300 shadow-lg hover:shadow-navy-lg transform hover:scale-105 animate-glow">
            Get Started Now
          </button>
        </div>
      </section>
    </>
  );
}