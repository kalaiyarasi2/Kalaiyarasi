import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const Projects = () => {
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
      reportLink: "https://docs.google.com/document/d/11EwJuI6eEPbEDWHtRsO_O_cDYHNfJTI8KIMDg1B24aQ/edit"
    },
    {
      title: "Corrective RAG System",
      description:
        "Developed an intelligent Corrective RAG (CRAG) system that dynamically evaluates retrieval relevance and automatically applies hybrid retrieval when initial results are insufficient. The system combines dense semantic search (FAISS) and sparse keyword search (BM25) to improve answer accuracy and reduce hallucinations.Integrated LLM-based relevance scoring to decide when corrective retrieval is required, ensuring high-quality responses from documents.Built an end-to-end solution with a FastAPI backend and an interactive Tailwind CSS frontend for real-time question answering..",
      technologies: [
        "LangChain",
        "GROQ LLM",
        "FAISS (Vector Search)",
        "BM25 (Sparse Retrieval)",
        "FastAPI"
      ],
      category: "Generative AI",
      reportLink: "https://docs.google.com/document/d/1l7rFalq8v9LjibUwcxdU3Jd1GO2N-fk9cof-wyHS60g/edit?usp=sharing",
      CodeLink: "https://github.com/kalaiyarasi2/CRAG"

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
      reportLink: "https://docs.google.com/document/d/1aQmlqAsAv0XiByIj38jsFQDYOAT6RmgFSWwg1v3kHbo/edit?usp=sharing",
      CodeLink: "https://github.com/kalaiyarasi2/Multimodal-Retrieval-and-Voice-Integrated-Knowledge-System"
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
      reportLink: "https://docs.google.com/document/d/1ophPd9ZDMLrO2FBUJ79FAcZYiT7pRgjMKHjbfA71ihE/edit?usp=sharing",
      CodeLink: "https://github.com/kalaiyarasi2/Conversational-AI-Agent"
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
      reportLink: "https://docs.google.com/document/d/1R1ukw55G9F99_GRcKLmVvqyCbHptEEtDm94f5LNnkSY/edit?usp=sharing",
      CodeLink: "https://github.com/kalaiyarasi2/Website-Summarizer"
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
      reportLink: "https://docs.google.com/document/d/1liwyBIimTnBm5EnpDxjUUR4zpvtY2P6TJy0f587Jhkg/edit?usp=sharing",
      CodeLink: "https://github.com/kalaiyarasi2/Customer-Churn-Prediction"
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
      reportLink: "https://docs.google.com/document/d/1fHSlKTyhEE4j25Z1iTrjwXCIqvGB5Mxt4_S9UxU9pPg/edit?usp=sharing",
      CodeLink: "https://github.com/kalaiyarasi2/RAG-Document-Assistant"
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
                    
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-primary/40 text-primary hover:bg-primary/10 w-full">
                      <a
                        href={project.CodeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Code
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
