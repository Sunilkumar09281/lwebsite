import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-background relative py-20">
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 fade-in" style={{animationDelay: "0.2s"}}>
              Contact us for professional inspection, training, and consulting services across 
              Saudi Arabia and India.
            </p>
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6 fade-in">
              Our Locations
            </h2>
            <p className="text-xl text-muted-foreground fade-in" style={{animationDelay: "0.2s"}}>
              Inspenix International Solutions operates in Saudi Arabia and India, 
              providing expert inspection, training, and consulting services tailored to your needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Saudi Arabia Office */}
            <Card className="service-card fade-in">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-secondary/10 rounded-full p-3">
                    <Globe className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Saudi Arabia Office</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary">Location</p>
                      <p className="text-muted-foreground">Al Jubail, Saudi Arabia</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary">Email</p>
                      <a href="mailto:info-sa@inspenix.com" className="text-secondary hover:underline">
                        info-sa@inspenix.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary">Business Hours</p>
                      <p className="text-muted-foreground">Sunday - Thursday: 8:00 AM - 5:00 PM</p>
                      <p className="text-muted-foreground">Friday - Saturday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-secondary/5 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Our Saudi Arabian operations serve the oil & gas, petrochemical, and industrial sectors 
                    with comprehensive NDT and inspection services.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* India Office */}
            <Card className="service-card fade-in" style={{animationDelay: "0.2s"}}>
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-secondary/10 rounded-full p-3">
                    <Globe className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">India Office</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary">Location</p>
                      <p className="text-muted-foreground">X-Road, Kattumannarkoil, Tamil Nadu, India</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary">Email</p>
                      <a href="mailto:info-ind@inspenix.com" className="text-secondary hover:underline">
                        info-ind@inspenix.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary">Phone</p>
                      <p className="text-muted-foreground">+91 73050 12045</p>
                      <p className="text-sm text-secondary">WhatsApp Available</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary">Business Hours</p>
                      <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-secondary/5 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Our Indian headquarters provides training programs, certification support, and 
                    consulting services across multiple industrial sectors.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-6 fade-in">
              Find Us on the Map
            </h2>
            <p className="text-xl text-muted-foreground fade-in" style={{animationDelay: "0.2s"}}>
              Locate our offices and get directions for your visit.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Saudi Arabia Map */}
            <Card className="service-card fade-in">
              <CardContent className="p-0">
                <div className="h-64 rounded-t-xl overflow-hidden bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-secondary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-primary mb-2">Al Jubail, Saudi Arabia</h3>
                    <p className="text-muted-foreground mb-4">Interactive map coming soon</p>
                    <a 
                      href="https://maps.google.com/maps?q=Al+Jubail+Saudi+Arabia" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary hover:underline"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-primary mb-2">Saudi Arabia Office</h4>
                  <p className="text-muted-foreground">Al Jubail, Saudi Arabia</p>
                </div>
              </CardContent>
            </Card>

            {/* India Map */}
            <Card className="service-card fade-in" style={{animationDelay: "0.2s"}}>
              <CardContent className="p-0">
                <div className="h-64 rounded-t-xl overflow-hidden bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-secondary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-primary mb-2">Kattumannarkoil, Tamil Nadu</h3>
                    <p className="text-muted-foreground mb-4">Interactive map coming soon</p>
                    <a 
                      href="https://maps.google.com/maps?q=Kattumannarkoil+Tamil+Nadu+India" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary hover:underline"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-primary mb-2">India Office</h4>
                  <p className="text-muted-foreground">X-Road, Kattumannarkoil, Tamil Nadu, India</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Additional Contact Information */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 fade-in">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto fade-in" style={{animationDelay: "0.2s"}}>
            Whether you need inspection services, training programs, or consulting support, 
            our team is ready to help you achieve excellence in quality and compliance.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center fade-in" style={{animationDelay: "0.3s"}}>
              <div className="bg-secondary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-primary-foreground/80">+91 73050 12045</p>
            </div>
            
            <div className="text-center fade-in" style={{animationDelay: "0.4s"}}>
              <div className="bg-secondary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-primary-foreground/80">info-ind@inspenix.com</p>
            </div>
            
            <div className="text-center fade-in" style={{animationDelay: "0.5s"}}>
              <div className="bg-secondary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
              <p className="text-primary-foreground/80">Mon-Fri: 9AM-5PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;