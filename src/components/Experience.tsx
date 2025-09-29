import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Senior DevOps Engineer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    highlights: [
      "Led migration of monolithic applications to microservices architecture",
      "Reduced infrastructure costs by 40% through optimization",
      "Mentored team of 5 junior DevOps engineers",
    ],
  },
  {
    role: "DevOps Engineer",
    company: "Cloud Solutions Co.",
    period: "2019 - 2021",
    highlights: [
      "Implemented automated CI/CD pipelines for 20+ applications",
      "Managed multi-region AWS infrastructure serving 1M+ users",
      "Achieved 99.95% uptime SLA across all services",
    ],
  },
  {
    role: "Systems Administrator",
    company: "Digital Enterprises",
    period: "2017 - 2019",
    highlights: [
      "Automated routine tasks reducing manual work by 80%",
      "Managed Linux server infrastructure and monitoring",
      "Implemented disaster recovery procedures",
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Years of experience building and scaling infrastructure
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="border-border hover:border-accent/50 transition-all duration-300 animate-slide-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      <span className="text-muted-foreground font-medium">{exp.period}</span>
                    </div>
                    <p className="text-lg text-accent mb-4">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2 text-muted-foreground">
                          <span className="h-1.5 w-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience;
