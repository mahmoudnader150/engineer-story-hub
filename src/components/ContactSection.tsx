import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';
import { contactInfo, getIconComponent } from "@/data/portfolio-data";
import SectionHeading from "@/components/comic/SectionHeading";
import { WebCorner, WebDivider } from "@/components/comic/ComicArt";

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
    <section id="contact" className="comic-section comic-bg-cover section-padding">
      <WebDivider className="text-white/70" />
      <WebCorner className="absolute bottom-0 right-0 -z-10 w-48 rotate-180 text-white/40 md:w-80" />
      <div className="container-custom">
        <div className="space-y-12">
          <SectionHeading
            eyebrow="Chapter 4: Send the signal"
            title="Get In Touch"
            tone="light"
            center
            subtitle="I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to chat, feel free to reach out!"
          />

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="comic-title comic-title-light text-4xl">Connect With Me</h3>
                <div className="flex flex-wrap gap-4">
                  {contactInfo.map((item, index) => {
                    const IconComponent = getIconComponent(item.icon);
                    return (
                      <a 
                        key={index}
                        href={`${item.prefix}${item.value}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="comic-icon-btn !h-14 !w-14"
                        aria-label={item.type}
                      >
                        <IconComponent className="h-6 w-6" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="comic-speech">
                <div>
                  <p className="comic-panel-title text-3xl">Looking for a developer?</p>
                  <p className="text-muted-foreground mt-2">
                    I'm currently available for freelance work and full-time positions.
                    If you need a developer who can deliver quality work on time, let's talk.
                  </p>
                  <Button asChild className="comic-btn comic-btn-red mt-5 w-full">
                    <a href="https://drive.google.com/file/d/1Q1S7iQ05Mw2UocZxHSVbuLeIS27F9xCm/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <Card className="comic-panel tilt-r">
                <CardContent className="p-6">
                  <h3 className="comic-panel-title mb-6 text-3xl">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="comic-label">
                        Name
                      </label>
                      <Input 
                        className="comic-input"
                        id="name" 
                        placeholder="Your name" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="comic-label">
                        Email
                      </label>
                      <Input 
                        className="comic-input"
                        id="email" 
                        type="email" 
                        placeholder="Your email" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="comic-label">
                        Message
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Write your message here" 
                        required 
                        value={formData.message}
                        onChange={handleChange}
                        className="comic-input min-h-[120px]"
                      />
                    </div>
                    <Button type="submit" className="comic-btn comic-btn-red w-full">
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
