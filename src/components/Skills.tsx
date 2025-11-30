import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      category: "AI/ML Frameworks",
      skills: [
        "LangGraph", "LangChain", "TensorFlow", "PyTorch", "Scikit-learn",
        "FAISS", "Sentence Transformers", "Hugging Face"
      ]
    },
    {
      category: "LLM & APIs",
      skills: [
        "Google Gemini Pro", "Groq API", "OpenAI API", "Llama 3.3",
        "PEFT", "LoRA", "4-bit Quantization", "Unsloth"
      ]
    },
    {
      category: "Cloud & Infrastructure",
      skills: [
        "Google Cloud Platform", "Vertex AI", "BigQuery", "Cloud Storage",
        "PostgreSQL", "Psycopg2", "Docker"
      ]
    },
    {
      category: "Programming & Tools",
      skills: [
        "Python", "SQL", "TypeScript", "React", "Streamlit",
        "Git", "Jupyter", "VS Code"
      ]
    },
    {
      category: "Specialized Areas",
      skills: [
        "Agentic AI Systems", "RAG Architectures", "Multimodal AI",
        "Model Fine-tuning", "Vector Databases", "Semantic Search"
      ]
    },
    {
      category: "Data & Visualization",
      skills: [
        "Pandas", "NumPy", "Matplotlib", "Seaborn", "Tableau",
        "Power BI", "Data Preprocessing"
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
            Skills & Technologies
          </h2>
          <p className="text-center text-muted-foreground mb-16">
            Comprehensive toolkit for building production-grade AI systems
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="border-primary/40 text-foreground/90 hover:bg-primary/10 hover:text-primary transition-all cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Education
                </h3>
                <div className="max-w-2xl mx-auto">
                  <p className="text-xl text-primary font-semibold mb-2">
                    B.Tech in Artificial Intelligence & Data Science
                  </p>
                  <p className="text-foreground/80 mb-2">
                    Annai Mira College of Engineering & Technology
                  </p>
                  <p className="text-muted-foreground mb-2">2021 - 2025</p>
                  <Badge className="bg-primary/20 text-primary border-primary/40">
                    CGPA: 8.51/10.0
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
