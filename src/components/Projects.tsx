import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Multi-Cloud Kubernetes Platform",
    description: "Designed and deployed a hybrid Kubernetes infrastructure across AWS and Azure, reducing deployment times by 60% and improving system reliability to 99.9% uptime.",
    tags: ["Kubernetes", "AWS", "Azure", "Terraform", "Helm"],
    impact: "60% faster deployments",
  },
  {
    title: "CI/CD Pipeline Automation",
    description: "Architected comprehensive CI/CD pipelines using GitLab CI and ArgoCD, enabling automated testing, security scanning, and zero-downtime deployments.",
    tags: ["GitLab CI", "ArgoCD", "Docker", "Kubernetes"],
    impact: "100% automated deployments",
  },
  {
    title: "Infrastructure Monitoring System",
    description: "Implemented full-stack observability using Prometheus, Grafana, and ELK Stack, providing real-time insights and reducing MTTR by 45%.",
    tags: ["Prometheus", "Grafana", "ELK", "Alerting"],
    impact: "45% reduction in MTTR",
  },
  {
    title: "Serverless Application Platform",
    description: "Built scalable serverless infrastructure on AWS Lambda with auto-scaling, cost optimization, and event-driven architecture.",
    tags: ["AWS Lambda", "API Gateway", "DynamoDB", "CloudFormation"],
    impact: "70% cost reduction",
  },
];

const Projects = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world solutions delivering measurable business impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-2xl text-foreground">{project.title}</CardTitle>
                  <div className="flex gap-2">
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-accent/10 text-accent border-accent/30">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="h-2 w-2 bg-accent rounded-full" />
                  <span className="text-muted-foreground font-medium">{project.impact}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
