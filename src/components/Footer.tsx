import { Github, Linkedin } from "lucide-react";
import { greeting, socialMediaLinks } from "../portfolio";

const Footer = () => (
  <footer className="py-12 px-6 border-t border-slate-200">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} {greeting.title}. Built with React & Tailwind.
      </p>
      <div className="flex items-center gap-6">
        <a href={greeting.portfolio_repository} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors">
          <Github size={20} />
        </a>
        <a href={socialMediaLinks.find(s => s.name === "LinkedIn")?.link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary transition-colors">
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
