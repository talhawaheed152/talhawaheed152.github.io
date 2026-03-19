import { motion } from "motion/react";
import { languages } from "../portfolio";

const Languages = () => {
  return (
    <section className="pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Language Proficiency
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto"
          >
            Effective communication in diverse environments through proficiency in multiple languages.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-8">
            {languages.map((lang, idx) => (
              <motion.div 
                key={lang.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm group hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{lang.name}</h3>
                    <p className="text-sm text-slate-500 font-medium">{lang.level}</p>
                  </div>
                  <span className="text-2xl font-bold text-primary/10 group-hover:text-primary/30 transition-colors">
                    {lang.progress}%
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${lang.progress}%` }}
                    transition={{ duration: 1, delay: 0.5 + idx * 0.1, ease: "easeOut" }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
