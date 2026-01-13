import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      company: "Least Action",
      role: "AI Developer",
      period: "September 2025 - Present",
      current: true,
      achievements: [
        "Developed multiple production-grade AI agents (personal growth, sales automation, social engagement, productivity)",
        "Built intelligent pipelines using LangGraph, StateGraph, Google Gemini Pro for advanced intent classification and multi-step reasoning",
        "Designed scalable PostgreSQL system with Psycopg2 for efficient storage and workflow execution",
        "Implemented conditional routing and multi-agent orchestration, improving task automation accuracy"
      ],
      technologies: ["LangGraph", "Google Gemini Pro", "PostgreSQL", "Psycopg2", "StateGraph"]
    },
    {
      company: "Graditwin",
      role: "Machine Learning Intern",
      period: "February 2025 - May 2025",
      current: false,
      achievements: [
        "Built an AI document assistant with semantic search reducing query time from minutes to seconds",
        "Created RAG pipeline using LangChain, Sentence Transformers, and FAISS",
        "Integrated multi-format text extraction supporting PDF, DOCX, TXT, CSV, Excel, and PPTX",
        "Leveraged Groq API (Llama3-8B-8192) for high-speed inference"
      ],
      technologies: ["LangChain", "FAISS", "Sentence Transformers", "Groq API", "RAG"]
    },
    {
      company: "Strydo Technologies",
      role: "AI Developer Intern",
      period: "June 2023 - July 2023",
      current: false,
      achievements: [
        "Fine-tuned LLMs using Unsloth, PEFT, LoRA, and 4-bit quantization",
        "Achieved 30× faster training and 90% memory reduction through optimization",
        "Enabled training on restricted hardware like Colab T4",
        "Delivered multiple domain-tuned LLMs with high performance"
      ],
      technologies: ["PEFT", "LoRA", "Unsloth", "4-bit Quantization", "Model Fine-tuning"]
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
            Experience
          </h2>
          <p className="text-center text-muted-foreground mb-16">
            Building production-grade AI systems across various domains
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20" />

                  <div className="flex-1">
                    <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all group hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Building2 className="w-5 h-5 text-primary" />
                              <h3 className="text-2xl font-bold text-foreground">
                                {exp.company}
                              </h3>
                              {exp.current && (
                                <Badge className="bg-primary/20 text-primary border-primary/40">
                                  Current
                                </Badge>
                              )}
                            </div>
                            <p className="text-lg text-secondary font-semibold mb-1">
                              {exp.role}
                            </p>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm">{exp.period}</span>
                            </div>
                          </div>
                        </div>

                        <ul className="space-y-2 mb-4">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-foreground/80"
                            >
                              <span className="text-primary mt-1.5">▹</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="border-primary/40 text-primary hover:bg-primary/10"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
