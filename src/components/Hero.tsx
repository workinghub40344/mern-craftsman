import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-primary">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-float">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-tech-blue to-white bg-clip-text text-transparent">
            Manish Sharma
          </h1>
          <div className="text-2xl md:text-3xl font-semibold mb-8 text-tech-green">
            MERN Stack Developer
          </div>
        </div>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Passionate about building fast, scalable, and user-friendly web applications using 
          <span className="text-tech-blue font-semibold"> MongoDB</span>,
          <span className="text-tech-green font-semibold"> Express.js</span>,
          <span className="text-tech-purple font-semibold"> React.js</span>, and
          <span className="text-tech-blue font-semibold"> Node.js</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-tech-blue hover:bg-tech-blue/90 text-white px-8 py-3 text-lg font-medium shadow-glow"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-tech-green text-tech-green hover:bg-tech-green hover:text-background px-8 py-3 text-lg font-medium"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button>
        </div>
        
        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/manishsharma0024/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-8 h-8 text-gray-400 hover:text-tech-blue transition-colors duration-300" />
          </a>
          <a href="mailto:manishsharma40344@gmail.com">
            <Mail className="w-8 h-8 text-gray-400 hover:text-tech-green transition-colors duration-300" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Github className="w-8 h-8 text-gray-400 hover:text-tech-purple transition-colors duration-300" />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;