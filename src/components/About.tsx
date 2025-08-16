const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-title font-bold text-center mb-12 gradient-text animate-fade-in">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="card-glass rounded-lg p-8 shadow-card">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Hello! I'm Harsha N, a passionate MCA student with a deep interest in 
                  programming, web development, and creating innovative solutions that make 
                  a real-world impact.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  My journey in technology has been driven by curiosity and the desire to 
                  solve complex problems through elegant code. I believe in continuous 
                  learning and staying updated with the latest trends in technology.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Currently focusing on expanding my expertise in Python development, 
                  web technologies, and database management while working on projects 
                  that challenge me to grow as a developer.
                </p>
              </div>
            </div>
            
            {/* Stats/Highlights */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="grid grid-cols-2 gap-6">
                <div className="card-glass rounded-lg p-6 text-center group hover:glow-effect transition-all duration-300">
                  <div className="text-2xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                    20+
                  </div>
                  <div className="text-muted-foreground text-sm">Projects Completed</div>
                </div>
                
                <div className="card-glass rounded-lg p-6 text-center group hover:glow-effect transition-all duration-300">
                  <div className="text-2xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                    3+
                  </div>
                  <div className="text-muted-foreground text-sm">Technologies Mastered</div>
                </div>
                
                <div className="card-glass rounded-lg p-6 text-center group hover:glow-effect transition-all duration-300">
                  <div className="text-2xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                    100%
                  </div>
                  <div className="text-muted-foreground text-sm">Dedication</div>
                </div>
                
                <div className="card-glass rounded-lg p-6 text-center group hover:glow-effect transition-all duration-300">
                  <div className="text-2xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                    MCA
                  </div>
                  <div className="text-muted-foreground text-sm">Student</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;