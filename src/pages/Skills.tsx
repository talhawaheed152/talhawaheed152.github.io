import { motion } from "motion/react";
import { Code2, Eye, Layers, Zap, Link as LinkIcon, FileType2, Flame, Grid3X3, Cloud, Container, Box, PlayCircle } from "lucide-react";
import { skills } from "../portfolio";

const IconMap: Record<string, any> = {
  "code-2": Code2,
  zap: Zap,
  link: LinkIcon,
  "file-type-2": FileType2,
  flame: Flame,
  eye: Eye,
  "grid-3x3": Grid3X3,
  cloud: Cloud,
  container: Container,
  box: Box,
  "play-circle": PlayCircle,
};

const Skills = () => (
  <section className="pt-32 pb-20 px-6 bg-slate-50 min-h-screen">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-title"
        >
          Detailed Skills
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 max-w-2xl mx-auto"
        >
          A deep dive into my technical expertise, specializing in production-grade AI systems and large-scale multimodal pipelines.
        </motion.p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.data.map((skillGroup, idx) => (
          <motion.div 
            key={skillGroup.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            className="card group"
          >
            <div className="w-14 h-14 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              {idx === 0 ? <Code2 size={28} /> : idx === 1 ? <Eye size={28} /> : <Layers size={28} />}
            </div>
            <h3 className="text-xl font-bold mb-4">{skillGroup.title}</h3>
            <ul className="space-y-3 mb-8">
              {skillGroup.skills.map((s, i) => (
                <li key={i} className="text-sm text-slate-600 flex gap-2">
                  <span className="text-primary mt-1 shrink-0">⚡</span>
                  {s.replace("⚡ ", "")}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              {skillGroup.softwareSkills.map((s) => {
                const Icon = IconMap[s.icon];
                return (
                  <motion.div 
                    key={s.skillName} 
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700 shadow-sm"
                  >
                    {Icon && <Icon size={14} style={s.style} />}
                    {s.skillName}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
