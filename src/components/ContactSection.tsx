import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';
import { contactInfo, getIconComponent } from "@/data/portfolio-data";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const head = `${formData.name} ${formData.email}`;
      
      await emailjs.send(
        'service_n3ckpnw',
        'template_tq8b8qp',
        {
          head,
          feedback: formData.message,
          to_email: 'mahnader222@gmail.com'
        },
        'SZgeL5iBEktSnu_1q'
      );

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
      console.error('Email sending error:', error);
    }
  };

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
                <h3 className="text-xl font-semibold">Connect With Me</h3>
                <div className="flex flex-wrap gap-4">
                  {contactInfo.map((item, index) => {
                    const IconComponent = getIconComponent(item.icon);
                    return (
                      <a 
                        key={index}
                        href={`${item.prefix}${item.value}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 bg-muted rounded-full hover:bg-accent hover:text-white transition-colors"
                        aria-label={item.type}
                      >
                        <IconComponent className="h-6 w-6" />
                      </a>
                    );
                  })}
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
                    <a href="https://drive.google.com/file/d/1Q1S7iQ05Mw2UocZxHSVbuLeIS27F9xCm/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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
                        value={formData.name}
                        onChange={handleChange}
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
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Write your message here" 
                        required 
                        value={formData.message}
                        onChange={handleChange}
                        className="min-h-[120px]"
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
