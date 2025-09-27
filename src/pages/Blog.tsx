import { ArrowRight, Calendar, Clock, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-industrial.jpg";
import isoTraining from "@/assets/iso-training.jpg";
import inspectionServices from "@/assets/inspection-services.jpg";
import technicalTraining from "@/assets/technical-training.jpg";

const Blog = () => {
  const blogPosts = [
    {
      title: "Understanding ISO 9001:2015 Quality Management Systems",
      excerpt: "A comprehensive guide to implementing and maintaining ISO 9001:2015 standards in your organization for improved quality management.",
      image: isoTraining,
      category: "ISO Standards",
      author: "Tamilmurugan Manivannan",
      date: "2025-01-15",
      readTime: "8 min read",
      featured: true
    },
    {
      title: "NDT Methods: A Complete Guide to Non-Destructive Testing",
      excerpt: "Explore the various NDT methods including ultrasonic testing, radiographic testing, and magnetic particle testing for industrial applications.",
      image: inspectionServices,
      category: "NDT Technology",
      author: "Expert Team",
      date: "2025-01-10",
      readTime: "12 min read",
      featured: true
    },
    {
      title: "Safety Protocols in Oil & Gas Industry Inspections",
      excerpt: "Essential safety protocols and best practices for conducting inspections in oil & gas facilities and petrochemical plants.",
      image: heroImage,
      category: "Safety",
      author: "Safety Team",
      date: "2025-01-05",
      readTime: "6 min read",
      featured: false
    },
    {
      title: "Career Opportunities in Industrial Inspection Services",
      excerpt: "Discover the growing career opportunities in industrial inspection, NDT, and quality assurance across various industries.",
      image: technicalTraining,
      category: "Career",
      author: "HR Department",
      date: "2024-12-28",
      readTime: "5 min read",
      featured: false
    },
    {
      title: "Third-Party Inspection: Ensuring Quality and Compliance",
      excerpt: "Learn about the importance of third-party inspection services in maintaining quality standards and regulatory compliance.",
      image: inspectionServices,
      category: "Quality Assurance",
      author: "Quality Team",
      date: "2024-12-20",
      readTime: "7 min read",
      featured: false
    },
    {
      title: "Digital Transformation in NDT: Future Trends",
      excerpt: "Explore how digital technologies are revolutionizing non-destructive testing and inspection processes in modern industries.",
      image: technicalTraining,
      category: "Technology",
      author: "Tech Team",
      date: "2024-12-15",
      readTime: "10 min read",
      featured: false
    }
  ];

  const categories = [
    "All Posts",
    "ISO Standards", 
    "NDT Technology",
    "Safety",
    "Quality Assurance",
    "Career",
    "Technology"
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-background relative py-20">
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in">
              Blog
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 fade-in" style={{animationDelay: "0.2s"}}>
              Insights, updates, and expert knowledge from the world of industrial inspection, 
              NDT, and quality management systems.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Badge 
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={index === 0 ? "bg-secondary text-secondary-foreground" : "hover:bg-secondary hover:text-secondary-foreground cursor-pointer"}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6 fade-in">
              Featured Articles
            </h2>
            <p className="text-xl text-muted-foreground fade-in" style={{animationDelay: "0.2s"}}>
              Our latest insights and expert analysis on industry trends and best practices.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="service-card fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="relative h-64 overflow-hidden rounded-t-xl">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-secondary text-secondary-foreground">
                      Featured
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Button variant="outline" className="group">
                    Read More 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6 fade-in">
              Latest Articles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Card key={index} className="service-card fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-primary mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">By {post.author}</span>
                    <Button variant="ghost" size="sm" className="p-0 h-auto">
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" className="px-8 py-4">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 fade-in">
              Stay Updated
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 fade-in" style={{animationDelay: "0.2s"}}>
              Subscribe to our newsletter to receive the latest insights on industrial inspection, 
              NDT technologies, and quality management systems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto fade-in" style={{animationDelay: "0.4s"}}>
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <a href="mailto:info-ind@inspenix.com?subject=Newsletter Subscription">
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground whitespace-nowrap">
                  Subscribe
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;