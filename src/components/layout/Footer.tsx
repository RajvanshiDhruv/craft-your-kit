import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">BC</span>
              </div>
              <span className="font-semibold text-xl text-foreground">BundleCraft</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Build your perfect product bundles with BundleCraft. From study essentials to skincare routines, 
              create customized kits that match your lifestyle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-smooth">
                Home
              </Link>
              <Link to="/build" className="text-muted-foreground hover:text-foreground transition-smooth">
                Build Kit
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-smooth">
                About
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-smooth">
                Contact
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 BundleCraft. All rights reserved. Built with care for customization.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;