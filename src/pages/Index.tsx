import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Background grid pattern */}
      <div className="fixed inset-0 grid-pattern opacity-50" />
      
      {/* Radial gradient overlay */}
      <div className="fixed inset-0 bg-gradient-radial pointer-events-none" style={{
        background: 'radial-gradient(circle at 50% 0%, hsl(180 100% 50% / 0.1), transparent 50%)'
      }} />
      
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
