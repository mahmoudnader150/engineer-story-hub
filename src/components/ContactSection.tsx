
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real implementation, you would handle form submission here
    // This is just a placeholder for demonstration
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    // Reset form
    e.currentTarget.reset();
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-accent" />,
      title: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-accent" />,
      title: "Phone",
      value: "+1 (123) 456-7890",
      href: "tel:+11234567890",
    },
    {
      icon: <MapPin className="h-5 w-5 text-accent" />,
      title: "Location",
      value: "San Francisco, CA",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      href: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      href: "https://twitter.com/yourusername",
      label: "Twitter",
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm currently open to new opportunities and collaborations. 
              If you have a project in mind or just want to chat, feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <div className="grid gap-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {item.icon}
                      <div>
                        <p className="text-sm font-medium">{item.title}</p>
                        {item.href ? (
                          <a 
                            href={item.href} 
                            className="text-muted-foreground hover:text-accent transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Connect With Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-muted rounded-full hover:bg-accent hover:text-white transition-colors"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <Card>
                <CardContent className="p-6">
                  <p className="font-medium text-lg">Looking for a developer?</p>
                  <p className="text-muted-foreground mt-2">
                    I'm currently available for freelance work and full-time positions.
                    If you need a developer who can deliver quality work on time, let's talk.
                  </p>
                  <Button asChild className="mt-4 w-full bg-accent hover:bg-accent/90">
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                      Download Resume
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input 
                        id="name" 
                        placeholder="Your name" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Your email" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input 
                        id="subject" 
                        placeholder="Subject of your message" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Your message" 
                        rows={5} 
                        required 
                      />
                    </div>
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
