import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
            Get In Touch
          </h2>
          <p className="text-center text-muted-foreground mb-16">
            Let's collaborate on building innovative AI solutions
          </p>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 mb-12 animate-fade-in-up">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a
                  href="mailto:kalaiyarasi04ai@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-primary/10 hover:border-primary/40 border border-transparent transition-all group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold text-foreground">kalaiyarasi04ai@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+919751718523"
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-primary/10 hover:border-primary/40 border border-transparent transition-all group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-semibold text-foreground">+91 9751718523</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold text-foreground">Chennai, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Open Source</p>
                    <p className="font-semibold text-foreground">Available for collaboration</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-pulse"
                asChild
              >
                <a href="https://linkedin.com/in/kalaiyarasigopal" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
                asChild
              >
                <a href="https://github.com/kalaiyarasi2" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>

            <p className="text-center text-muted-foreground max-w-2xl">
              I'm currently open to new opportunities and interesting projects in AI/ML. 
              Whether you have a question, want to collaborate, or just want to say hi, 
              feel free to reach out!
            </p>
          </div>
        </div>
      </div>

      <footer className="mt-16 pt-8 border-t border-border">
        <p className="text-center text-muted-foreground text-sm">
          © Kalaiyarasi G
        </p>
      </footer>
    </section>
  );
};
