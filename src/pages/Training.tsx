import { CheckCircle, Award, Users, BookOpen, ArrowRight, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import isoTraining from "@/assets/iso-training.jpg";
import technicalTraining from "@/assets/technical-training.jpg";
import inspectionServices from "@/assets/inspection-services.jpg";

const Training = () => {
  const trainingPrograms = [
    {
      title: "ISO 9001 - Quality Management Systems",
      description: "Comprehensive training on quality management principles and implementation strategies.",
      duration: "3-5 Days",
      level: "Foundation to Lead Auditor",
      image: isoTraining,
      features: [
        "Quality management principles",
        "Process approach implementation", 
        "Risk-based thinking",
        "Continuous improvement strategies",
        "Internal audit techniques"
      ]
    },
    {
      title: "ISO 14001 - Environmental Management Systems", 
      description: "Environmental management system implementation and auditing training.",
      duration: "3-5 Days",
      level: "Foundation to Lead Auditor",
      image: technicalTraining,
      features: [
        "Environmental policy development",
        "Legal and regulatory compliance",
        "Environmental aspects and impacts",
        "Operational controls",
        "Environmental performance evaluation"
      ]
    },
    {
      title: "ISO 45001 - Occupational Health & Safety",
      description: "Occupational health and safety management system training and certification.",
      duration: "3-5 Days", 
      level: "Foundation to Lead Auditor",
      image: inspectionServices,
      features: [
        "OH&S policy and objectives",
        "Hazard identification and risk assessment",
        "Legal requirements compliance",
        "Worker participation and consultation",
        "Incident investigation"
      ]
    }
  ];

  const ndtTraining = [
    {
      title: "Visual Testing (VT)",
      description: "Basic visual inspection techniques and procedures",
      level: "Level I & II"
    },
    {
      title: "Liquid Penetrant Testing (PT)",
      description: "Surface crack detection using penetrant methods",
      level: "Level I & II"
    },
    {
      title: "Magnetic Particle Testing (MT)", 
      description: "Magnetic field-based defect detection training",
      level: "Level I & II"
    },
    {
      title: "Ultrasonic Testing (UT)",
      description: "Sound wave-based internal defect detection",
      level: "Level I & II"
    },
    {
      title: "Radiographic Testing (RT)",
      description: "X-ray and gamma ray inspection techniques",
      level: "Level I & II"
    },
    {
      title: "Phased Array Ultrasonic Testing (PAUT)",
      description: "Advanced ultrasonic testing with phased array technology",
      level: "Level II"
    }
  ];

  const industrialTraining = [
    "Industrial Safety Training (Fire Safety, Confined Space, LOTO)",
    "Quality Control & Welding Inspection Programs", 
    "Oil & Gas Field-Oriented Training",
    "Manufacturing Process Training",
    "Construction Safety Management",
    "Customized Skill Development for Technicians and Engineers"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-background relative py-20">
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in">
              Professional Training Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 fade-in" style={{animationDelay: "0.2s"}}>
              We offer specialized ISO auditor training and consulting services for various 
              industry standards.
            </p>
          </div>
        </div>
      </section>

      {/* ISO Training Programs */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 fade-in">
              ISO Auditor Training & Certification
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in" style={{animationDelay: "0.2s"}}>
              Professional certification programs designed to enhance your auditing skills and advance your career.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => (
              <Card key={index} className="service-card fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-secondary text-secondary-foreground">
                      {program.level}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Clock className="h-4 w-4 text-secondary" />
                    <span className="text-sm text-muted-foreground">{program.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-3">{program.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{program.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Key Features:</h4>
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <a href={`mailto:info-ind@inspenix.com?subject=Training Inquiry - ${program.title}`}>
                      {/* <Button className="w-full btn-secondary">
                        Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Button> */}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NDT Training */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-4xl font-bold text-primary mb-6">
                NDT Training Programs
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Comprehensive Non-Destructive Testing training programs certified according to SNTTC-1A and ISO 9712 standards.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {ndtTraining.map((training, index) => (
                  <Card key={index} className="border-secondary/20">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <Award className="h-5 w-5 text-secondary" />
                        <Badge variant="outline" className="text-xs">{training.level}</Badge>
                      </div>
                      <h3 className="font-bold text-primary mb-2">{training.title}</h3>
                      <p className="text-sm text-muted-foreground">{training.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* <div className="mt-8">
                <a href="mailto:info-ind@inspenix.com?subject=NDT Training Inquiry">
                  <Button className="btn-hero">
                    Get NDT Training Details <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div> */}
            </div>

            <div className="slide-in-right">
              <div className="relative">
                <img 
                  src={technicalTraining} 
                  alt="NDT Training" 
                  className="rounded-xl shadow-elegant w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
                
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-6 shadow-elegant border">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">6</div>
                    <div className="text-sm text-muted-foreground">NDT Methods</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Training */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6 fade-in">
                Industrial & Technical Training
              </h2>
              <p className="text-xl text-muted-foreground fade-in" style={{animationDelay: "0.2s"}}>
                Specialized training programs for industrial safety, quality control, and technical excellence 
                across oil & gas, manufacturing, and construction sectors.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {industrialTraining.map((training, index) => (
                <div key={index} className="flex items-center space-x-4 bg-card rounded-lg p-4 shadow-card fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="bg-secondary/10 rounded-full p-2">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                  </div>
                  <span className="text-muted-foreground">{training}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
<a
  href="#inquiry-form"
  onClick={() => {
    setTimeout(() => {
      const event = new Event("show-footer-popup");
      window.dispatchEvent(event);
    }, 300); // wait for scroll to finish
  }}
>
  <Button className="btn-secondary text-lg px-8 py-4">
    Request Custom Training <ArrowRight className="ml-2 h-5 w-5" />
  </Button>
</a>


            </div>
          </div>
        </div>
      </section>

      {/* Training Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6 fade-in">
              Why Choose Our Training?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center service-card fade-in">
              <CardContent className="p-8">
                <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Expert Instructors</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Learn from qualified Level III professionals and certified trainers with extensive industry experience.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center service-card fade-in" style={{animationDelay: "0.2s"}}>
              <CardContent className="p-8">
                <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Practical Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Hands-on training with real-world applications and case studies for effective learning.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center service-card fade-in" style={{animationDelay: "0.4s"}}>
              <CardContent className="p-8">
                <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Star className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">International Standards</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All training programs align with international standards and industry best practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 fade-in">
            Ready to Advance Your Career?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto fade-in" style={{animationDelay: "0.2s"}}>
            Join thousands of professionals who have enhanced their skills through our comprehensive training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in" style={{animationDelay: "0.4s"}}>
            {/* <a href="mailto:info-ind@inspenix.com?subject=Training Program Inquiry">
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg">
                Enroll Today
              </Button>
            </a> */}
            <Link to="/services">
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 text-lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;