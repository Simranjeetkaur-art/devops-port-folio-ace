import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import TiltedCard from "./TiltedCard";
import kubernetesImg from "@/assets/project-kubernetes.jpg";
import cicdImg from "@/assets/project-cicd.jpg";
import monitoringImg from "@/assets/project-monitoring.jpg";
import serverlessImg from "@/assets/project-serverless.jpg";

const projects = [
  {
    title: "Multi-Cloud Kubernetes Platform",
    description: "Designed and deployed a hybrid Kubernetes infrastructure across AWS and Azure, reducing deployment times by 60% and improving system reliability to 99.9% uptime.",
    tags: ["Kubernetes", "AWS", "Azure", "Terraform", "Helm"],
    impact: "60% faster deployments",
    image: kubernetesImg,
  },
  {
    title: "CI/CD Pipeline Automation",
    description: "Architected comprehensive CI/CD pipelines using GitLab CI and ArgoCD, enabling automated testing, security scanning, and zero-downtime deployments.",
    tags: ["GitLab CI", "ArgoCD", "Docker", "Kubernetes"],
    impact: "100% automated deployments",
    image: cicdImg,
  },
  {
    title: "Infrastructure Monitoring System",
    description: "Implemented full-stack observability using Prometheus, Grafana, and ELK Stack, providing real-time insights and reducing MTTR by 45%.",
    tags: ["Prometheus", "Grafana", "ELK", "Alerting"],
    impact: "45% reduction in MTTR",
    image: monitoringImg,
  },
  {
    title: "Serverless Application Platform",
    description: "Built scalable serverless infrastructure on AWS Lambda with auto-scaling, cost optimization, and event-driven architecture.",
    tags: ["AWS Lambda", "API Gateway", "DynamoDB", "CloudFormation"],
    impact: "70% cost reduction",
    image: serverlessImg,
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="flex flex-col items-center animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <TiltedCard
                imageSrc={project.image}
                altText={project.title}
                captionText={project.title}
                containerHeight="350px"
                containerWidth="100%"
                imageHeight="320px"
                imageWidth="320px"
                scaleOnHover={1.15}
                rotateAmplitude={12}
                showMobileWarning={false}
                showTooltip={true}
              />
              
              <div className="mt-6 w-full max-w-md text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <div className="flex gap-1">
                    <Button size="icon" variant="ghost" className="h-7 w-7">
                      <Github className="h-3.5 w-3.5" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-7 w-7">
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 justify-center mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-accent/10 text-accent border-accent/30 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <div className="h-2 w-2 bg-accent rounded-full" />
                  <span className="text-muted-foreground font-medium">{project.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
