import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Emotion-Based Music Recommendation System",
      description: "An intelligent system that analyzes user emotions and recommends music accordingly using machine learning algorithms.",
      tech: ["Python", "Machine Learning", "Flask", "OpenCV"],
      features: [
        "Real-time emotion detection",
        "Personalized recommendations",
        "User-friendly interface",
        "Music library integration"
      ]
    },
    {
      title: "Hotel Management System",
      description: "A comprehensive hotel management solution with booking, room management, and customer service features.",
      tech: ["Python", "MySQL", "Tkinter", "Database Design"],
      features: [
        "Room booking system",
        "Customer management",
        "Billing and invoicing",
        "Inventory tracking"
      ]
    },
    {
      title: "Adventure Travel Website",
      description: "A modern, responsive website for adventure travel bookings with stunning visuals and smooth user experience.",
      tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      features: [
        "Interactive booking forms",
        "Image galleries",
        "Mobile-responsive design",
        "Contact integration"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-title font-bold text-center mb-12 gradient-text animate-fade-in">
            Featured Projects
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="flip-card h-80 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flip-card-inner relative w-full h-full">
                  {/* Front of card */}
                  <div className="flip-card-front absolute inset-0 card-glass rounded-lg p-6 border-2 border-transparent hover:border-primary/50 transition-all duration-300">
                    <div className="flex flex-col h-full">
                      <div className="text-center mb-4">
                        <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-lg flex items-center justify-center text-white text-xl font-bold glow-effect">
                          {project.title.charAt(0)}
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {project.title}
                        </h3>
                      </div>
                      
                      <p className="text-muted-foreground text-sm mb-4 flex-grow">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span 
                            key={tech}
                            className="px-2 py-1 bg-primary/20 text-primary text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Back of card */}
                  <div className="flip-card-back absolute inset-0 card-glass rounded-lg p-6 border-2 border-primary glow-effect">
                    <div className="flex flex-col h-full">
                      <h3 className="text-lg font-semibold text-primary mb-4">
                        Key Features
                      </h3>
                      
                      <ul className="space-y-2 mb-6 flex-grow">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex gap-3">
                        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary hover:bg-primary-glow text-primary-foreground text-sm rounded transition-colors duration-300">
                          <Github className="w-4 h-4" />
                          Code
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-accent hover:bg-accent/80 text-accent-foreground text-sm rounded transition-colors duration-300">
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p className="text-muted-foreground mb-4">
              Hover over the cards to see more details about each project
            </p>
            <div className="w-16 h-0.5 bg-gradient-primary mx-auto rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;