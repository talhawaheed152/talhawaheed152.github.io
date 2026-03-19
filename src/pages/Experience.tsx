import { motion } from "motion/react";
import { MapPin, ExternalLink } from "lucide-react";
import { experience } from "../portfolio";

const Experience = () => (
  <section className="pt-32 pb-20 px-6 min-h-screen">
    <div className="max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-title"
      >
        Career History
      </motion.h2>
      <div className="space-y-16">
        {experience.sections.map((section, sectionIdx) => (
          <div key={section.title}>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: sectionIdx * 0.2 }}
              className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-10 flex items-center gap-4 overflow-hidden whitespace-nowrap"
            >
              {section.title}
              <div className="h-px bg-slate-200 flex-grow"></div>
            </motion.h3>
            <div className="space-y-12">
              {section.experiences.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="flex flex-col md:flex-row gap-8 md:gap-12 group"
                >
                  <div className="md:w-32 shrink-0 flex flex-col items-center md:items-start">
                    <div className="w-20 h-20 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center p-3 mb-4 group-hover:shadow-xl group-hover:border-primary/30 transition-all overflow-hidden">
                      <img 
                        src={exp.logo_path} 
                        alt={exp.company} 
                        className="max-w-full max-h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <p className="text-xs font-bold text-slate-400 text-center md:text-left">{exp.duration}</p>
                  </div>
                  <div className="flex-grow bg-white p-6 md:p-8 rounded-3xl border border-slate-100 group-hover:border-primary/20 group-hover:bg-slate-50/50 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-all">
                          {exp.title}
                        </h4>
                        <a href={exp.company_url} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold text-lg hover:underline inline-flex items-center gap-1">
                          {exp.company} <ExternalLink size={14} />
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 text-sm bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                        <MapPin size={16} className="text-primary" /> {exp.location}
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
