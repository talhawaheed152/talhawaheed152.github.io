import { motion } from "motion/react";
import { GraduationCap, Award, Calendar, Trophy } from "lucide-react";
import { degrees, certifications, honors } from "../portfolio";

const Education = () => (
  <section className="pt-32 pb-20 px-6 bg-slate-50 min-h-screen">
    <div className="max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-title"
      >
        Education & Achievements
      </motion.h2>
      
      <div className="space-y-20">
        {/* Academic Degrees Section */}
        <div className="space-y-12">
          <h3 className="text-2xl font-bold flex items-center gap-3 mb-8">
            <GraduationCap className="text-primary" size={32} /> Academic Degrees
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {degrees.degrees.map((degree, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all h-full flex flex-col group"
              >
                <div className="flex flex-col md:flex-row gap-6 mb-8">
                  <div className="w-20 h-20 shrink-0 bg-white rounded-2xl flex items-center justify-center p-2 border border-slate-100 shadow-sm group-hover:border-primary/30 transition-colors">
                    <img src={degree.logo_path} alt={degree.alt_name} className="max-w-full max-h-full object-contain" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-1">{degree.title}</h4>
                    <p className="text-primary font-bold text-lg">{degree.subtitle}</p>
                    <div className="flex items-center gap-4 mt-3 text-sm text-slate-500 font-medium">
                      <span className="flex items-center gap-1.5"><Calendar size={16} className="text-primary" /> {degree.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Key Coursework & Focus</p>
                  <ul className="space-y-4 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[1px] before:bg-slate-100">
                    {degree.descriptions.map((desc, i) => (
                      <li key={i} className="pl-8 relative group/item">
                        <div className="absolute left-0 top-2 w-3.5 h-3.5 rounded-full bg-white border-2 border-slate-200 group-hover/item:border-primary transition-colors z-10" />
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {desc.replace("- ", "")}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Honors & Awards Section */}
        <div className="space-y-12">
          <h3 className="text-2xl font-bold flex items-center gap-3 mb-8">
            <Trophy className="text-primary" size={32} /> Honors & Awards
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {honors.honors.map((honor, idx) => {
              const Content = (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={honor.certificate_link ? { y: -5, scale: 1.02 } : { y: -5 }}
                  className={`p-6 bg-white border border-slate-100 rounded-2xl flex items-center gap-5 transition-all group h-full ${
                    honor.certificate_link ? "hover:border-primary/30 hover:shadow-md cursor-pointer" : ""
                  }`}
                >
                  <div className="w-16 h-16 shrink-0 flex items-center justify-center bg-slate-50 rounded-xl group-hover:bg-primary/5 transition-colors border border-slate-50">
                    <img src={honor.logo_path} alt={honor.alt_name} className="max-w-[40px] max-h-[40px] object-contain" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-slate-900 leading-tight mb-1">{honor.title}</p>
                    <p className="text-sm font-semibold text-primary">{honor.subtitle.replace("- ", "")}</p>
                  </div>
                </motion.div>
              );

              if (honor.certificate_link) {
                return (
                  <a 
                    key={idx} 
                    href={honor.certificate_link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    {Content}
                  </a>
                );
              }

              return <div key={idx} className="h-full">{Content}</div>;
            })}
          </div>
        </div>

        {/* Professional Certifications Section */}
        <div className="space-y-12">
          <h3 className="text-2xl font-bold flex items-center gap-3 mb-8">
            <Award className="text-primary" size={32} /> Professional Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.certifications.map((cert, idx) => {
              const Content = (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={cert.certificate_link ? { y: -5, scale: 1.02 } : { y: -5 }}
                  className={`p-6 bg-white border border-slate-100 rounded-2xl flex items-center gap-5 transition-all group h-full ${
                    cert.certificate_link ? "hover:border-primary/30 hover:shadow-md cursor-pointer" : ""
                  }`}
                >
                  <div className="w-16 h-16 shrink-0 flex items-center justify-center bg-slate-50 rounded-xl group-hover:bg-primary/5 transition-colors border border-slate-50">
                    <img src={cert.logo_path} alt={cert.alt_name} className="max-w-[40px] max-h-[40px] object-contain" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-slate-900 leading-tight mb-1">{cert.title}</p>
                    <p className="text-sm font-semibold text-primary">{cert.subtitle.replace("- ", "")}</p>
                  </div>
                </motion.div>
              );

              if (cert.certificate_link) {
                return (
                  <a 
                    key={idx} 
                    href={cert.certificate_link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    {Content}
                  </a>
                );
              }

              return <div key={idx} className="h-full">{Content}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
