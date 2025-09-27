import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import inspenixLogo from "@/assets/inspenix-logo.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Training", href: "/training" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center space-y-1 sm:space-y-0">
          <div className="flex flex-col sm:flex-row gap-4 text-center sm:text-left">
            <span className="text-secondary font-medium">Saudi Arabia:</span>
            <a href="mailto:info-sa@inspenix.com" className="hover:text-secondary transition-colors">
              info-sa@inspenix.com
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 text-center sm:text-left">
            <span className="text-secondary font-medium">India:</span>
            <a href="mailto:info-ind@inspenix.com" className="hover:text-secondary transition-colors">
              info-ind@inspenix.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-card">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src={inspenixLogo} 
                alt="Inspenix International Solutions" 
                className="h-12 w-auto transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-primary">Inspenix International Solutions</span>
                <span className="text-sm text-muted-foreground hidden sm:block">Professional Inspection & Training Services</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.href)
                      ? "text-primary border-b-2 border-secondary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Social Links & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Social Links - Hidden on mobile */}
              <div className="hidden md:flex items-center space-x-3">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2">
                  <Twitter className="h-4 w-4" />
                </a>
              </div>

              {/* Mobile Menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="outline" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col space-y-6 mt-8">
                    <div className="flex items-center space-x-3 pb-4 border-b">
                      <img src={inspenixLogo} alt="Inspenix" className="h-10 w-auto" />
                      <span className="font-bold text-primary">Inspenix</span>
                    </div>
                    
                    <nav className="flex flex-col space-y-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={`text-lg font-medium transition-colors hover:text-primary px-4 py-2 rounded-lg ${
                            isActive(item.href)
                              ? "text-primary bg-secondary-light"
                              : "text-muted-foreground hover:bg-accent"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </nav>

                    <div className="flex items-center justify-center space-x-4 pt-6 border-t">
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2">
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2">
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2">
                        <Twitter className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;