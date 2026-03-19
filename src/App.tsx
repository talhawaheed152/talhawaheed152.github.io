import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { settings, greeting } from "./portfolio";

// Components
import Layout from "./components/Layout";
import Logo from "./components/Logo";

// Pages
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Languages from "./pages/Languages";
import Articles from "./pages/Articles";

const Splash = () => (
  <motion.div 
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
  >
    <Logo size="lg" />
  </motion.div>
);

export default function App() {
  const [loading, setLoading] = useState(settings.isSplash);

  useEffect(() => {
    if (settings.isSplash) {
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Router>
      <AnimatePresence>
        {loading && <Splash />}
      </AnimatePresence>
      
      {!loading && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="skills" element={<Skills />} />
            <Route path="experience" element={<Experience />} />
            <Route path="education" element={<Education />} />
            <Route path="projects" element={<Projects />} />
            <Route path="languages" element={<Languages />} />
            <Route path="articles" element={<Articles />} />
          </Route>
        </Routes>
      )}
    </Router>
  );
}
