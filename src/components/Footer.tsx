const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} DevOps Portfolio. Built with passion for automation.
          </p>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
            <span>•</span>
            <a href="#" className="hover:text-accent transition-colors">Blog</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
