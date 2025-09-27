import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-secondary">Services</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Inspenix International Solutions offers Auditor Training, NDT Level III Consultancy, 
              Third-Party Inspection, and Industrial Technical Training Services globally.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-secondary">Contact Us</h3>
            
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-secondary">Saudi Arabia Office</h4>
                <div className="flex items-start space-x-2 mt-1">
                  <MapPin className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-sm text-primary-foreground/80">Al Jubail, Saudi Arabia</span>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <Mail className="h-4 w-4 text-secondary" />
                  <a href="mailto:info-sa@inspenix.com" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                    info-sa@inspenix.com
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-secondary">India Office</h4>
                <div className="flex items-start space-x-2 mt-1">
                  <MapPin className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-sm text-primary-foreground/80">X-Road, Kattumannarkoil, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <Mail className="h-4 w-4 text-secondary" />
                  <a href="mailto:info-ind@inspenix.com" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                    info-ind@inspenix.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-secondary">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                Home
              </Link>
              <Link to="/services" className="block text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                Services
              </Link>
              <Link to="/training" className="block text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                Training
              </Link>
              <Link to="/about" className="block text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                About Us
              </Link>
              <Link to="/blog" className="block text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                Blog
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-secondary">For Training</h3>
            <p className="text-sm text-primary-foreground/80">
              Enter your professional email address
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Your email address goes here"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Submit your inquiry now
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2025. All rights reserved. Inspenix International Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;