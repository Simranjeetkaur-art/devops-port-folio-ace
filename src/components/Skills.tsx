import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Container, GitBranch, Server, Workflow, Shield } from "lucide-react";

const skillCategories = [
  {
    icon: Cloud,
    title: "Cloud Platforms",
    skills: ["AWS", "Azure", "Google Cloud", "DigitalOcean"],
  },
  {
    icon: Container,
    title: "Containerization",
    skills: ["Docker", "Kubernetes", "Helm", "Docker Compose"],
  },
  {
    icon: GitBranch,
    title: "CI/CD",
    skills: ["Jenkins", "GitLab CI", "GitHub Actions", "ArgoCD"],
  },
  {
    icon: Workflow,
    title: "Infrastructure as Code",
    skills: ["Terraform", "Ansible", "CloudFormation", "Pulumi"],
  },
  {
    icon: Server,
    title: "Monitoring & Logging",
    skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog"],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    skills: ["Vault", "OAuth", "SSL/TLS", "Security Scanning"],
  },
];

const Skills = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive DevOps toolkit for end-to-end infrastructure automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <category.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-3 text-foreground">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full border border-border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
