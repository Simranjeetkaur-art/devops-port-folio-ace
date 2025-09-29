import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Available for freelance projects and consulting. Let's discuss how I can help scale your infrastructure.
            </p>
          </div>

          <Card className="border-border bg-gradient-primary text-white overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                  <p className="text-white/80 mb-6">
                    I'm currently available for freelance work and exciting DevOps projects. Whether you need help with cloud migration, CI/CD setup, or infrastructure optimization, I'd love to hear from you.
                  </p>
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white w-full md:w-auto">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-4 text-white/90">Connect With Me</h4>
                    <div className="space-y-3">
                      <a 
                        href="#" 
                        className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors group"
                      >
                        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                          <Mail className="h-5 w-5" />
                        </div>
                        <span>your.email@example.com</span>
                      </a>
                      <a 
                        href="#" 
                        className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors group"
                      >
                        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </div>
                        <span>LinkedIn Profile</span>
                      </a>
                      <a 
                        href="#" 
                        className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors group"
                      >
                        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                          <Github className="h-5 w-5" />
                        </div>
                        <span>GitHub Profile</span>
                      </a>
                      <a 
                        href="#" 
                        className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors group"
                      >
                        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                          <MessageSquare className="h-5 w-5" />
                        </div>
                        <span>Schedule a Call</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
