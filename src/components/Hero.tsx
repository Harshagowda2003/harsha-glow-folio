import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Download, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Exploring Python, Web Development & Innovative Projects";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Profile image placeholder - can be replaced with actual image */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-primary glow-effect flex items-center justify-center text-white text-4xl font-bold">
            HN
          </div>
          
          <h1 className="text-hero font-bold mb-4 animate-scale-in">
            <span className="gradient-text">Harsha N</span>
          </h1>
          
          <h2 className="text-subtitle text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            MCA Student
          </h2>
          
          <div className="mb-8 h-16 flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg text-foreground font-mono">
              {typedText}
              <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
            >
              <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-primary transition-colors"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;