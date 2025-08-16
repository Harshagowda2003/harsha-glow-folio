import { useEffect, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'Python', level: 85, icon: '🐍' },
    { name: 'MySQL', level: 78, icon: '🗄️' },
    { name: 'HTML', level: 90, icon: '🌐' },
    { name: 'CSS', level: 85, icon: '🎨' },
  ];

  return (
    <section id="skills" className="py-20 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-title font-bold text-center mb-12 gradient-text animate-fade-in">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="card-glass rounded-lg p-6 group hover:glow-effect transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="text-xl font-semibold text-foreground">{skill.name}</h3>
                  </div>
                  <span className="text-primary font-medium">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-primary transition-all duration-1000 ease-out ${
                      isVisible ? 'animate-glow-pulse' : ''
                    }`}
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 0.2}s`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional skills as badges */}
          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-lg font-semibold text-muted-foreground mb-6">Also familiar with:</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['JavaScript', 'React', 'Git', 'Linux', 'Problem Solving'].map((tech, index) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm border border-accent/30 hover:border-primary hover:text-primary transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;