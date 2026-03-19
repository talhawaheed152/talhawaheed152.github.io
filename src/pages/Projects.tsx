import { motion } from "motion/react";
import { Github, ExternalLink, ChevronRight } from "lucide-react";
import { bigProjects, greeting } from "../portfolio";

const Projects = () => (
  <section className="pt-32 pb-20 px-6 min-h-screen">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title mb-2"
          >
            {bigProjects.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-xl"
          >
            {bigProjects.subtitle}
          </motion.p>
        </div>
        <a href={greeting.githubProfile} target="_blank" rel="noopener noreferrer" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
          View all on GitHub <ChevronRight size={20} />
        </a>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {bigProjects.projects.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.2 }}
            className="group card overflow-hidden p-0 flex flex-col"
          >
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.projectName} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="flex gap-3">
                  {project.footerLink.map((link) => (
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white text-slate-900 rounded-lg text-xs font-bold flex items-center gap-2">
                      {link.name === "GitHub" ? <Github size={14} /> : <ExternalLink size={14} />}
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-8 flex-grow">
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{project.projectName}</h3>
              <p className="text-slate-600 text-sm leading-relaxed line-clamp-4">
                {project.projectDesc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
