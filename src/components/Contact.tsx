import { Mail, Phone, Github, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Github,
      label: 'GitHub',
      value: 'Harshagowda2003',
      href: 'https://github.com/Harshagowda2003',
      color: 'hover:text-purple-400'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'harshanagesh2@gmail.com',
      href: 'mailto:harshanagesh2@gmail.com',
      color: 'hover:text-blue-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '6364281660',
      href: 'tel:6364281660',
      color: 'hover:text-green-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-card/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-title font-bold mb-12 gradient-text animate-fade-in">
            Let's Connect
          </h2>
          
          <div className="card-glass rounded-lg p-8 shadow-elegant animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities, collaborate on interesting projects, 
              or simply connect with fellow developers and tech enthusiasts.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className={`group p-6 card-glass rounded-lg hover:glow-effect transition-all duration-300 animate-scale-in ${contact.color}`}
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <div className="flex flex-col items-center space-y-3">
                      <div className="p-3 bg-primary/20 rounded-full group-hover:bg-primary/30 transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {contact.label}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {contact.value}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </a>
                );
              })}
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <p className="text-muted-foreground mb-4">
                Feel free to reach out through any of these channels
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-0.5 bg-gradient-primary rounded-full" />
                <span className="text-primary text-2xl animate-pulse">✨</span>
                <div className="w-12 h-0.5 bg-gradient-primary rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;