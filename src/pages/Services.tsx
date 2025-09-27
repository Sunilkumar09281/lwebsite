import { CheckCircle, Shield, Users, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import inspectionServices from "@/assets/inspection-services.jpg";
import isoTraining from "@/assets/iso-training.jpg";
import technicalTraining from "@/assets/technical-training.jpg";

const Services = () => {
  const ndtServices = [
    "ASNT Level III Consultancy & Procedure Preparation",
    "Third-Party NDT Inspection Coordination", 
    "NDT Personnel Qualification Support (as per SNTTC-1A / ISO 9712)",
    "NDT Method Support: RT, UT, MT, PT, VT, PAUT, TOFD"
  ];

  const auditingServices = [
    "ISO 9001 – Quality Management Systems",
    "ISO 14001 – Environmental Management Systems", 
    "ISO 45001 – Occupational Health & Safety Management",
    "Internal Auditor & Lead Auditor Training Programs",
    "Customized Training for Corporate Compliance Teams"
  ];

  const inspectionServicesList = [
    "Vendor and Supplier Audits",
    "Quality Surveillance and Monitoring",
    "Final Inspection and Pre-Shipment Inspections", 
    "Industrial Equipment and Project Inspection"
  ];

  const industrialTraining = [
    "Industrial Safety Training (Fire Safety, Confined Space, LOTO, etc.)",
    "Quality Control & Welding Inspection Programs",
    "Oil & Gas, Manufacturing, and Construction Field-Oriented Training",
    "Customized Skill Development Courses for Technicians and Engineers"
  ];

  const serviceCards = [
    {
      title: "NDT (Non-Destructive Testing) Services",
      description: "Comprehensive NDT solutions ensuring structural integrity and safety compliance.",
      services: ndtServices,
      image: inspectionServices,
      icon: Shield,
      color: "text-blue-600"
    },
    {
      title: "Auditor Training & Certification", 
      description: "Professional ISO certification programs to enhance your auditing capabilities.",
      services: auditingServices,
      image: isoTraining,
      icon: Award,
      color: "text-green-600"
    },
    {
      title: "Third-Party Inspection Services",
      description: "Independent inspection services ensuring quality and regulatory compliance.",
      services: inspectionServicesList, 
      image: technicalTraining,
      icon: Users,
      color: "text-purple-600"
    },
    {
      title: "Industrial & Technical Training",
      description: "Specialized training programs for industrial safety and technical excellence.",
      services: industrialTraining,
      image: inspectionServices,
      icon: CheckCircle,
      color: "text-orange-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-background relative py-20">
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in">
              Professional Inspection Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 fade-in" style={{animationDelay: "0.2s"}}>
              Expert training and consulting solutions for ISO standards and third-party 
              inspections in Saudi Arabia and India.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 fade-in">
              Our Comprehensive Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in" style={{animationDelay: "0.2s"}}>
              Inspenix International Solutions provides world-class inspection, training, and consulting services 
              across multiple industries and sectors.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {serviceCards.map((service, index) => (
              <Card key={index} className="service-card fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex flex-col lg:flex-row h-full">
                  <div className="relative lg:w-1/3 h-48 lg:h-auto overflow-hidden rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="lg:w-2/3 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`p-2 rounded-lg bg-secondary/10`}>
                          <service.icon className={`h-6 w-6 text-secondary`} />
                        </div>
                        <h3 className="text-xl font-bold text-primary">{service.title}</h3>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-3">
                        {service.services.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Why Choose Inspenix?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Our certified experts provide world-class solutions in internal audits, third-party inspections, 
                and ISO training, ensuring integrity, accuracy, and professionalism in every service.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 rounded-full p-2 mt-1">
                    <Shield className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Certified Expertise</h3>
                    <p className="text-muted-foreground">Our team consists of qualified Level III professionals and certified trainers.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 rounded-full p-2 mt-1">
                    <Award className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Industry Standards</h3>
                    <p className="text-muted-foreground">All our services align with international standards and best practices.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/10 rounded-full p-2 mt-1">
                    <Users className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Global Reach</h3>
                    <p className="text-muted-foreground">Serving clients across Saudi Arabia, India, and international markets.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/about">
                  <Button className="btn-hero">
                    Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="slide-in-right">
              <div className="relative">
                <img 
                  src={inspectionServices} 
                  alt="Professional Services" 
                  className="rounded-xl shadow-elegant w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 fade-in">
            Ready to Enhance Your Operations?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto fade-in" style={{animationDelay: "0.2s"}}>
            Contact us today to discuss how our professional services can help your organization 
            achieve excellence in quality, safety, and compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in" style={{animationDelay: "0.4s"}}>
            <a href="mailto:info-ind@inspenix.com">
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg">
                Get Started Today
              </Button>
            </a>
            <Link to="/training">
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 text-lg">
                View Training Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;