import { motion } from "motion/react";
import { ExternalLink, BookOpen, Newspaper } from "lucide-react";
import { contactPageData } from "../portfolio";

const Articles = () => {
  const articles = [
    {
      title: "Building Production-Grade AI Agents",
      description: "A deep dive into architecting framework-agnostic agent services with FastAPI and JSON-RPC 2.0.",
      link: "https://medium.com/@talhawaheed152",
      date: "Mar 2026",
      readTime: "10 min read"
    },
    {
      title: "Knowledge Graphs in RAG Systems",
      description: "How to improve Recall@K and reduce hallucination using hybrid search and graph structures.",
      link: "https://medium.com/@talhawaheed152",
      date: "Feb 2026",
      readTime: "12 min read"
    },
    {
      title: "Observability for LLM Applications",
      description: "Implementing OpenTelemetry and distributed tracing for complex tool-calling agents.",
      link: "https://medium.com/@talhawaheed152",
      date: "Jan 2026",
      readTime: "8 min read"
    }
  ];

  return (
    <section className="pt-32 pb-20 px-6 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Articles & Publications
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto"
          >
            I write about AI engineering, MLOps, and the future of agentic systems. Check out my latest thoughts below.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.map((article, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="card group flex flex-col"
            >
              <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{article.title}</h3>
              <p className="text-slate-600 text-sm mb-6 flex-grow">
                {article.description}
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <span className="text-xs text-slate-400 font-medium">{article.date} • {article.readTime}</span>
                <a 
                  href={article.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary font-bold text-sm flex items-center gap-1 hover:underline"
                >
                  Read <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-primary rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
              <Newspaper size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Follow me on Medium</h3>
              <p className="text-primary-foreground/80">Get notified whenever I publish a new article about AI and Engineering.</p>
            </div>
          </div>
          <a 
            href={contactPageData.blogSection.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-8 py-4 bg-white text-primary rounded-xl font-bold hover:bg-slate-100 transition-colors whitespace-nowrap"
          >
            Visit Medium Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Articles;
