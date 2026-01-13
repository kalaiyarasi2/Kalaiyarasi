import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const Projects = () => {
  const REPORT_LINK =
    "https://docs.google.com/document/d/11EwJuI6eEPbEDWHtRsO_O_cDYHNfJTI8KIMDg1B24aQ/edit";

  const projects = [
    {
      title: "Vertex AI ML Pipeline",
      description:
        "End-to-end ML pipeline on Google Cloud Platform for ticket priority classification and image classification using Vertex AI Workbench and Cloud Storage. Achieved 97% precision and 96.2% recall on AutoML Image Classification.",
      technologies: [
        "Vertex AI",
        "BigQuery",
        "Cloud Storage",
        "AutoML",
        "Random Forest"
      ],
      category: "Machine Learning",
      reportLink: REPORT_LINK
    },
    {
      title: "Multimodal RAG System",
      description:
        "Full-stack AI chat application supporting text, image, audio, and video inputs using FAISS, Gemini Vision, and Deepgram for comprehensive multimodal understanding and response generation.",
      technologies: [
        "FAISS",
        "Gemini Vision",
        "Deepgram",
        "RAG",
        "Multimodal AI"
      ],
      category: "Generative AI",
      reportLink: REPORT_LINK
    },
    {
      title: "Real-Time Voice Assistant (Jarvis)",
      description:
        "Built intelligent voice assistant with LiveKit and Gemini Realtime enabling smooth human-like AI conversations with noise cancellation and real-time processing capabilities.",
      technologies: [
        "LiveKit",
        "Gemini Realtime",
        "Voice AI",
        "Real-time Processing"
      ],
      category: "Voice AI",
      reportLink: REPORT_LINK
    },
    {
      title: "Enhanced Website Summarizer",
      description:
        "AI-powered web content summarization tool using Llama 3.3 and MCP for efficient async processing and generating concise research insights from web pages.",
      technologies: [
        "Llama 3.3",
        "MCP",
        "LangChain",
        "Web Scraping"
      ],
      category: "NLP",
      reportLink: REPORT_LINK
    },
    {
      title: "Customer Churn Prediction",
      description:
        "XGBoost-based predictive model with SMOTE-ENN for imbalanced data handling to predict customer churn, helping businesses reduce customer loss by 10-15%.",
      technologies: [
        "XGBoost",
        "SMOTE-ENN",
        "Scikit-learn",
        "Pandas"
      ],
      category: "Predictive Analytics",
      reportLink: REPORT_LINK
    },
    {
      title: "AI Document Assistant",
      description:
        "Production-ready document Q&A system with multi-format support (PDF, DOCX, Excel, PPTX) using RAG architecture. Reduced query response time from minutes to seconds using Groq API.",
      technologies: [
        "LangChain",
        "FAISS",
        "Groq API",
        "PyPDF2",
        "RAG"
      ],
      category: "Document AI",
      reportLink: REPORT_LINK
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-center text-muted-foreground mb-16">
            Innovative AI/ML solutions with measurable impact
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all group hover:scale-105 animate-fade-in-up flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <Badge className="bg-primary/20 text-primary border-primary/40 mb-3">
                      {project.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="border-primary/30 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-primary/40 text-primary hover:bg-primary/10 w-full"
                    >
                      <a
                        href={project.reportLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Report
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
