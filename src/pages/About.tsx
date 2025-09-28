import { ArrowRight, Users, Award, Globe, Target, Eye, Heart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-industrial.jpg";
import isoTraining from "@/assets/iso-training.jpg";
import inspectionServices from "@/assets/inspection-services.jpg";

const About = () => {
  const coreValues = [
    {
      icon: Target,
      title: "Quality",
      description: "We never compromise on the accuracy and standards of our services."
    },
    {
      icon: Heart,
      title: "Integrity", 
      description: "We follow ethical practices in all aspects of our work."
    },
    {
      icon: Users,
      title: "Excellence",
      description: "We strive for continuous improvement and professional growth."
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "We embrace new technologies and methodologies for better results."
    }
  ];

  const achievements = [
    "ISO 9001 certified organization",
    "Over 15 years of industry experience",
    "Trained 1000+ professionals across multiple countries",
    "Successfully completed 500+ inspection projects",
    "Certified Level III NDT professionals on staff",
    "Strategic partnerships in Saudi Arabia and India"
  ];

  const leadership = [
    {
      name: "Mr. Tamilmurugan Manivannan",
      position: "Managing Director & Founder",
      description: "Visionary leader with extensive experience in NDT and quality management systems.",
      image: isoTraining
    },
    {
      name: "Mr. Ali Falah Ali Al-Hajri",
      position: "Co-Founder",
      description: "Strategic partner bringing deep understanding of Saudi Arabian industrial sector.",
      image: inspectionServices
    },
    {
      name: "Mr. Mubarak Falah Ali Al Hajri",
      position: "Co-Founder", 
      description: "Expert in business development and international operations management.",
      image: heroImage
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-background relative py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="About Inspenix" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-overlay"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in">
              Who We Are
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 fade-in" style={{animationDelay: "0.2s"}}>
              Our certified experts provide world-class solutions in internal audits, third-party inspections, 
              and ISO training, ensuring integrity, accuracy, and professionalism in every service.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-4xl font-bold text-primary mb-6">
                About Inspenix International Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Inspenix International Solutions is a trusted provider of Non-Destructive Testing (NDT) inspection, 
                training, and certification support services. Established with a vision to promote industrial safety 
                and professional excellence, we are committed to delivering high-quality solutions across various 
                sectors including oil & gas, construction, manufacturing, power, and infrastructure.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With a team of qualified experts, certified trainers, and NDT Level III professionals, we offer 
                practical, standards-based services that align with industry requirements. Our training programs 
                are structured as per SNT-TC-1A and cover a wide range of NDT methods to equip individuals with 
                the knowledge and skills needed to succeed in the field.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-muted-foreground">Professionals Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <div className="text-muted-foreground">Countries Served</div>
                </div>
              </div>
            </div>

            <div className="slide-in-right">
              <div className="relative">
                <img 
                  src={inspectionServices} 
                  alt="Our Team" 
                  className="rounded-xl shadow-elegant w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <Card className="service-card fade-in">
              <CardContent className="p-8 text-center">
                <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide high-quality NDT inspection and certification support services that ensure safety, 
                  reliability, and compliance across industries. We are dedicated to building skilled professionals 
                  through advanced training and practical knowledge.
                </p>
              </CardContent>
            </Card>

            <Card className="service-card fade-in" style={{animationDelay: "0.2s"}}>
              <CardContent className="p-8 text-center">
                <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become a globally recognized name in NDT training, inspection, and certification services 
                  by delivering trusted and innovative solutions that promote industry excellence and professional growth.
                </p>
              </CardContent>
            </Card>

            <Card className="service-card fade-in" style={{animationDelay: "0.4s"}}>
              <CardContent className="p-8 text-center">
                <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We bring together decades of experience, technical expertise, and a passion for continuous 
                  improvement to help clients improve operational quality, ensure regulatory compliance, 
                  and enhance workforce capabilities.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-6 fade-in">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6 fade-in">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in" style={{animationDelay: "0.2s"}}>
              Meet the visionary leaders driving Inspenix International Solutions toward excellence 
              in industrial inspection and training services.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="service-card fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="relative h-64 overflow-hidden rounded-t-xl">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-primary mb-2">{leader.name}</h3>
                  <p className="text-secondary font-semibold mb-4">{leader.position}</p>
                  <p className="text-muted-foreground leading-relaxed">{leader.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Our Achievements
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Through dedication to excellence and continuous improvement, we have achieved significant 
                milestones that demonstrate our commitment to quality and professional growth.
              </p>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link to="/services">
                  <Button className="btn-hero">
                    Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="slide-in-right">
              <div className="relative">
                <img 
                  src={isoTraining} 
                  alt="Our Achievements" 
                  className="rounded-xl shadow-elegant w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 fade-in">
              Our Global Presence
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto fade-in" style={{animationDelay: "0.2s"}}>
              Inspenix International Solutions operates in Saudi Arabia and India, providing expert inspection, 
              training, and consulting services tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 fade-in">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-secondary mb-4">Saudi Arabia</h3>
                <p className="text-primary-foreground/90 mb-4">Al Jubail, Saudi Arabia</p>
                <p className="text-primary-foreground/80 mb-6">
                  Our Saudi Arabian operations serve the oil & gas, petrochemical, and industrial sectors 
                  with comprehensive NDT and inspection services.
                </p>
                <a href="mailto:info-sa@inspenix.com" className="text-secondary hover:underline">
                  info-sa@inspenix.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground/10 border-primary-foreground/20 fade-in" style={{animationDelay: "0.2s"}}>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-secondary mb-4">India</h3>
                <p className="text-primary-foreground/90 mb-4">X-Road, Kattumannarkoil, Tamil Nadu</p>
                <p className="text-primary-foreground/80 mb-6">
                  Our Indian headquarters provides training programs, certification support, and 
                  consulting services across multiple industrial sectors.
                </p>
                <a href="mailto:info-ind@inspenix.com" className="text-secondary hover:underline">
                  info-ind@inspenix.com
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6 fade-in">
            Partner with Us
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto fade-in" style={{animationDelay: "0.2s"}}>
            Whether you are an organization seeking reliable inspection services or a professional aiming 
            to advance your career, Inspenix stands as your dependable partner in quality, safety, and compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in" style={{animationDelay: "0.4s"}}>
            <a href="/contact">
              <Button className="btn-hero text-lg px-8 py-4">
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link to="/training">
              <Button variant="outline" className="text-lg px-8 py-4">
                View Training Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
