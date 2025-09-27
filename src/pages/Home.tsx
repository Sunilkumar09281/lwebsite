import { ArrowRight, CheckCircle, Star, Users, Award, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-industrial.jpg";
import isoTraining from "@/assets/iso-training.jpg";
import inspectionServices from "@/assets/inspection-services.jpg";
import technicalTraining from "@/assets/technical-training.jpg";

const Home = () => {
  const stats = [
    { icon: Users, label: "Expert Professionals", value: "50+" },
    { icon: Award, label: "Years of Experience", value: "15+" },
    { icon: Globe, label: "Countries Served", value: "20+" },
    { icon: Zap, label: "Projects Completed", value: "1000+" },
  ];

  const services = [
    {
      title: "ISO Auditor Training",
      description: "Expert training for ISO 9001, 14001, and 45001 certifications to enhance your auditing skills.",
      image: isoTraining,
      link: "/training"
    },
    {
      title: "Third-Party Inspection",
      description: "Reliable third-party inspection services ensuring compliance and quality in your operations.",
      image: inspectionServices,
      link: "/services"
    },
    {
      title: "Technical Training",
      description: "Comprehensive Internal Audits and NDT training for maintaining standards and improving organizational processes.",
      image: technicalTraining,
      link: "/training"
    }
  ];

  const testimonials = [
    {
      content: "The training sessions were informative and engaging, greatly enhancing our team's skills and knowledge in ISO standards.",
      author: "Jane Smith",
      location: "Mumbai, IN",
      rating: 5
    },
    {
      content: "Inspenix provided outstanding training and consulting services that exceeded our expectations.",
      author: "John Doe",
      location: "Riyadh, SA",
      rating: 5
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="hero-background relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Industrial facility" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-overlay"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 fade-in">
              Empowering industries with Inspenix's expert 
              <span className="text-secondary"> Inspection, NDT, and Auditor Training Services</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 fade-in" style={{animationDelay: "0.2s"}}>
              Delivering ISO training, NDT consultancy, and third-party inspections 
              across Saudi Arabia and India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in" style={{animationDelay: "0.4s"}}>
              <Link to="/services">
                <Button className="btn-hero text-lg px-8 py-4">
                  Our Services <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/training">
                <Button variant="outline" className="text-lg px-8 py-4 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                  Training Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 fade-in">
              Welcome to Inspenix International Solutions
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed fade-in" style={{animationDelay: "0.2s"}}>
              At Inspenix International Solutions, we are committed to empowering industries through excellence in 
              <span className="text-primary font-semibold"> Third-Party Inspection, Management System Services, and Professional Training & Consulting</span>.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h3 className="text-2xl font-bold text-primary mb-6">Our Vision & Mission</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded by <strong>Mr. Tamilmurugan Manivannan</strong>, with co-founders <strong>Mr. Ali Falah Ali Al-Hajri</strong> and 
                <strong> Mr. Mubarak Falah Ali Al Hajri</strong>, Inspenix was established with a clear vision: 
                To deliver <span className="text-primary font-semibold">trusted, compliant, and value-driven services</span> that support 
                global industry standards and workforce development.
              </p>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                With a strong presence in <strong>Al Jubail, Saudi Arabia</strong>, Inspenix has become a reliable partner for clients 
                seeking quality assurance, regulatory compliance, and expert support across sectors like oil & gas, manufacturing, 
                construction, and more.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-muted-foreground">Improve operational quality</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-muted-foreground">Ensure regulatory compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-muted-foreground">Enhance workforce capabilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-muted-foreground">Support continuous improvement</span>
                </div>
              </div>
            </div>

            <div className="slide-in-right">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={isoTraining} 
                  alt="ISO Training" 
                  className="rounded-xl shadow-elegant w-full h-48 object-cover"
                />
                <img 
                  src={inspectionServices} 
                  alt="Inspection Services" 
                  className="rounded-xl shadow-elegant w-full h-48 object-cover mt-8"
                />
                <img 
                  src={technicalTraining} 
                  alt="Technical Training" 
                  className="rounded-xl shadow-elegant w-full h-48 object-cover -mt-8"
                />
                <img 
                  src={heroImage} 
                  alt="Industrial Excellence" 
                  className="rounded-xl shadow-elegant w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 fade-in">
              Professional Training Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in" style={{animationDelay: "0.2s"}}>
              We offer specialized ISO auditor training and consulting services for various industry standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <Link to={service.link}>
                    <Button variant="outline" className="w-full group">
                      Learn More 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Feedback */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 fade-in">
              Client Feedback
            </h2>
            <p className="text-xl text-muted-foreground fade-in" style={{animationDelay: "0.2s"}}>
              Hear from our satisfied clients about our exceptional services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-secondary-light/20 border-secondary/20 fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                      <span className="text-secondary-foreground font-semibold">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-primary">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;