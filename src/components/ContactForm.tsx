import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.firstName.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // 🔑 Replace with your actual Formspree endpoint
      const response = await fetch("https://formspree.io/f/mldpgpjy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully.",
        });
        setFormData({ firstName: "", email: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Try again later.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error connecting to the server.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="slide-in-left">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Contact Inspenix International Solutions
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Get in touch for professional inspection, training, and consulting services. 
              We are here to assist you with your needs.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-secondary/10 rounded-full p-3 mt-1">
                  <Mail className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Email</h3>
                  <p className="text-muted-foreground mb-1">
                    <strong>India:</strong> info-ind@inspenix.com
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Saudi Arabia:</strong> info-sa@inspenix.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary/10 rounded-full p-3 mt-1">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Phone</h3>
                  <p className="text-muted-foreground">
                    +91 73050 12045 (WhatsApp Available)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary/10 rounded-full p-3 mt-1">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Locations</h3>
                  <p className="text-muted-foreground mb-2">
                    <strong>India Office:</strong><br />
                    X-Road, Kattumannarkoil, Tamil Nadu, India
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Saudi Arabia Office:</strong><br />
                    Al Jubail, Saudi Arabia
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-accent/30 rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Connect</h3>
              <p className="text-muted-foreground">
                EMAIL: SUPPORT@INSPENIX.COM
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="slide-in-right">
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-primary mb-2">
                      Your First Name *
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Your Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Share your message here"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full min-h-[120px] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full btn-hero text-lg py-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit Your Request <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
