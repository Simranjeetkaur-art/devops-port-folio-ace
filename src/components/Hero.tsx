import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="DevOps Infrastructure" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
            <span className="text-accent font-medium">DevOps Engineer & Cloud Architect</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Building Scalable Infrastructure for Modern Applications
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
            Helping businesses deploy faster, scale smarter, and maintain reliability through automation and cloud-native solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-glow group">
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm">
              Get in Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center">
            <a href="#" className="text-white/60 hover:text-accent transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-white/60 hover:text-accent transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-white/60 hover:text-accent transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
