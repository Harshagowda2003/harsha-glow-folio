const Footer = () => {
  return (
    <footer className="py-8 bg-card/20 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-muted-foreground">
            © 2025 Harsha N | Built with <span className="text-primary animate-pulse">❤</span> using Lovable AI
          </p>
          <div className="mt-4 flex items-center justify-center space-x-4">
            <div className="w-8 h-0.5 bg-gradient-primary rounded-full opacity-50" />
            <span className="text-primary/60 text-sm">✨</span>
            <div className="w-8 h-0.5 bg-gradient-primary rounded-full opacity-50" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;