import { Card, CardContent } from "@/components/ui/card";
import { Brain, Database, Cloud, Zap } from "lucide-react";
import { motion } from "framer-motion";

export const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Agentic AI Systems",
      description: "Building intelligent agents with LangGraph, StateGraph, and multi-step reasoning"
    },
    {
      icon: Database,
      title: "RAG Architectures",
      description: "Expert in semantic search with FAISS, Sentence Transformers, and vector databases"
    },
    {
      icon: Cloud,
      title: "Google Cloud Platform",
      description: "Production ML pipelines with Vertex AI, BigQuery, and Cloud Storage"
    },
    {
      icon: Zap,
      title: "LLM Optimization",
      description: "Fine-tuning with PEFT, LoRA, and 4-bit quantization for efficient deployment"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
            About Me
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            AI/ML Developer passionate about building production-grade intelligent systems
          </p>

          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-foreground/90">
                  I specialize in <span className="text-primary font-semibold">agentic AI systems</span>, 
                  <span className="text-primary font-semibold"> LLM integrations</span>, 
                  <span className="text-primary font-semibold"> RAG architectures</span>, and 
                  <span className="text-primary font-semibold"> multimodal pipelines</span>. 
                  With hands-on experience in building full-stack intelligent applications using 
                  LangGraph, Google Gemini APIs, FAISS, and Google Cloud Platform, I've delivered 
                  measurable results including reducing response times from minutes to seconds, 
                  achieving 90% memory optimization in LLM fine-tuning, and building production-ready 
                  ML pipelines. Currently working as an AI Developer at Least Action, developing 
                  multiple production-grade AI agents for personal growth, sales automation, and 
                  productivity enhancement.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all group hover:scale-105">

                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <highlight.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-foreground">
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
