import { motion } from "motion/react";
import { 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  Zap, 
  ChevronRight,
  Code2,
  Briefcase,
  GraduationCap,
  Layers,
  BookOpen,
  Languages as LangIcon,
  MapPin,
  Calendar,
  Trophy
} from "lucide-react";
import { Link } from "react-router-dom";
import { 
  greeting, 
  socialMediaLinks, 
  contactPageData,
  skills,
  experience,
  bigProjects,
  degrees,
  languages
} from "../portfolio";

const IconMap: Record<string, any> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  trophy: Trophy,
};

const Home = () => {
  // Get current work and education
  const currentWork = experience.sections[0].experiences[0];
  const currentEdu = degrees.degrees[0];
  const featuredArticles = [
    {
      title: "Building Production-Grade AI Agents",
      description: "A deep dive into architecting framework-agnostic agent services with FastAPI and JSON-RPC 2.0.",
      date: "Mar 2026",
    },
    {
      title: "Knowledge Graphs in RAG Systems",
      description: "How to improve Recall@K and reduce hallucination using hybrid search and graph structures.",
      date: "Feb 2026",
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
              Hi, I'm <span className="text-primary">{greeting.title}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
              {greeting.subTitle}
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <a href={greeting.resumeLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Download size={20} /> Download Resume
              </a>
              <div className="flex items-center gap-3">
                {socialMediaLinks.map((social, idx) => {
                  const Icon = IconMap[social.icon];
                  return (
                    <motion.a 
                      key={social.name} 
                      href={social.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 flex items-center justify-center rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-primary transition-all shadow-sm"
                      title={social.name}
                    >
                      {Icon && <Icon size={22} />}
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-2xl relative z-10">
              <img 
                src={contactPageData.contactSection.profile_image_path} 
                alt={greeting.title} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Current Status Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Current Work */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Current Work</h3>
                  <p className="text-sm text-slate-500">Industry Role</p>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-bold text-slate-900">{currentWork.title}</h4>
                <p className="text-primary font-semibold">{currentWork.company}</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {currentWork.duration}</span>
                  <span className="flex items-center gap-1"><MapPin size={14} /> {currentWork.location}</span>
                </div>
              </div>
              <Link to="/experience" className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                View Full Experience <ChevronRight size={16} />
              </Link>
            </motion.div>

            {/* Current Education */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Current Education</h3>
                  <p className="text-sm text-slate-500">Academic Studies</p>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-bold text-slate-900">{currentEdu.title}</h4>
                <p className="text-primary font-semibold">{currentEdu.subtitle}</p>
                <div className="flex items-center gap-2 mt-2 text-sm text-slate-500">
                  <Calendar size={14} /> {currentEdu.duration}
                </div>
              </div>
              <Link to="/education" className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                View Education Details <ChevronRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Content Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Projects */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Layers className="text-primary" /> Featured Projects
                </h3>
                <Link to="/projects" className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
                  All Projects <ChevronRight size={16} />
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {bigProjects.projects.slice(0, 2).map((project, idx) => (
                  <div key={idx} className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <div className="aspect-video overflow-hidden">
                      <img src={project.image} alt={project.projectName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <h4 className="font-bold mb-2 line-clamp-1">{project.projectName}</h4>
                      <p className="text-xs text-slate-500 line-clamp-2 mb-4">{project.projectDesc}</p>
                      <Link to="/projects" className="text-primary text-xs font-bold flex items-center gap-1">
                        Learn More <ChevronRight size={12} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages & Articles */}
            <div className="space-y-8">
              {/* Languages Overview */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold flex items-center gap-3 mb-6">
                  <LangIcon className="text-primary" /> Languages
                </h3>
                <div className="space-y-4 mb-6">
                  {languages
                    .filter((lang) => ["English", "German"].includes(lang.name))
                    .map((lang) => (
                      <div key={lang.name}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-bold">{lang.name}</span>
                          <span className="text-slate-500">{lang.level}</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: `${lang.progress}%` }}></div>
                        </div>
                      </div>
                    ))}
                </div>
                <Link to="/languages" className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  View All Languages <ChevronRight size={16} />
                </Link>
              </div>

              {/* Featured Articles */}
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold flex items-center gap-3 mb-6">
                  <BookOpen className="text-primary" /> Recent Articles
                </h3>
                <div className="space-y-4 mb-6">
                  {featuredArticles.map((article, idx) => (
                    <div key={idx} className="group">
                      <h4 className="text-sm font-bold group-hover:text-primary transition-colors line-clamp-1">{article.title}</h4>
                      <p className="text-xs text-slate-500 line-clamp-1">{article.date}</p>
                    </div>
                  ))}
                </div>
                <Link to="/articles" className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  Read More <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
