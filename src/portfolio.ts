/* Change this file to get your personal Portfolio */

// Website related settings
export const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

// SEO Related settings
export const seo = {
  title: "Talha Waheed | AI & Agentic Systems Engineer",
  description:
    "AI/Software Engineer (Werkstudent) in Munich building production-grade agentic services, LLM/RAG systems, multimodal CV pipelines, and cross-cloud deployments with CI/CD and OpenTelemetry observability.",
  og: {
    title: "Muhammad Talha (Talha Waheed) | Portfolio",
    type: "website",
    url: "https://talhawaheed152.github.io/",
  },
};

// Home Page
export const greeting = {
  title: "Muhammad Talha",
  logo_name: "Muhammad Talha",
  logo_path: "/logo.png",
  subTitle:
    "I am an AI & Software Engineer at Siemens AG and a Master's student in Artificial Intelligence at FAU Erlangen-Nürnberg. I specialize in architecting production-grade Agentic AI systems, building advanced RAG/CAG pipelines, and developing multimodal Computer Vision solutions. My work bridges the gap between academic research and industrial-scale deployment, with a strong focus on cross-cloud observability and robust MLOps.",
  resumeLink:
    "https://drive.google.com/drive/folders/16-_wKLR2XjrBr6-OmMUU2oDSnvf27pm2?usp=drive_link",
  portfolio_repository:
    "https://github.com/talhawaheed152/talhawaheed152.github.io",
  githubProfile: "https://github.com/talhawaheed152",
};

export const socialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mtalhawaheed/",
    icon: "linkedin",
    backgroundColor: "#0077B5",
  },
  {
    name: "Github",
    link: "https://github.com/talhawaheed152",
    icon: "github",
    backgroundColor: "#181717",
  },
  {
    name: "Gmail",
    link: "mailto:talhawaheed152@gmail.com",
    icon: "mail",
    backgroundColor: "#D14836",
  },
  {
    name: "Kaggle",
    link: "https://www.kaggle.com/talhawaheed152",
    icon: "trophy",
    backgroundColor: "#20BEFF",
  },
];

// Skills Page
export const skills = {
  data: [
    {
      title: "Agentic AI & Generative Systems",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Architecting framework-agnostic Agentic AI services using FastAPI and JSON-RPC 2.0 for standardized, scalable execution.",
        "⚡ Building state-of-the-art LLM systems with RAG, CAG, and Knowledge Graphs to unlock insights from complex data.",
        "⚡ Implementing secure, production-ready GenAI workloads with OAuth2 + PKCE and end-to-end user context propagation.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          icon: "code-2",
          style: { backgroundColor: "transparent", color: "#3776AB" },
        },
        {
          skillName: "LangChain",
          icon: "link",
          style: { color: "#111111" },
        },
        {
          skillName: "LangGraph",
          icon: "git-branch",
          style: { color: "#000000" },
        },
        {
          skillName: "FastAPI",
          icon: "zap",
          style: { color: "#009688" },
        },
        {
          skillName: "Hugging Face",
          icon: "face-smile",
          style: { color: "#FFD21E" },
        },
      ],
    },
    {
      title: "Multimodal Vision & Deep Learning",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing multimodal pipelines (CV + NLP + VLMs) for context-aware assistants and visual information extraction.",
        "⚡ Engineering large-scale Computer Vision systems for asset detection, classification, and computational geometry.",
        "⚡ Fine-tuning transformer ensembles (DeBERTa, ResNets, UNets) to achieve high-precision results in real-world scenarios.",
      ],
      softwareSkills: [
        {
          skillName: "PyTorch",
          icon: "flame",
          style: { backgroundColor: "transparent", color: "#EE4C2C" },
        },
        {
          skillName: "TensorFlow",
          icon: "box",
          style: { color: "#FF6F00" },
        },
        {
          skillName: "OpenCV",
          icon: "eye",
          style: { color: "#5C3EE8" },
        },
        {
          skillName: "spaCy",
          icon: "target",
          style: { color: "#09A3D5" },
        },
      ],
    },
    {
      title: "MLOps, Cloud & Observability",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Designing cross-cloud blueprints (AWS, Azure, GCP) for containerized AI services with secure network topologies.",
        "⚡ Automating CI/CD pipelines with GitHub Actions and GitLab CI/CD, incorporating SAST and vulnerability scanning.",
        "⚡ Implementing production observability with OpenTelemetry, Grafana, and Jaeger for end-to-end traceability.",
      ],
      softwareSkills: [
        {
          skillName: "Docker",
          icon: "container",
          style: { color: "#1488C6" },
        },
        {
          skillName: "Kubernetes",
          icon: "box",
          style: { color: "#326CE5" },
        },
        {
          skillName: "AWS",
          icon: "cloud",
          style: { color: "#FF9900" },
        },
        {
          skillName: "OpenTelemetry",
          icon: "activity",
          style: { color: "#000000" },
        },
        {
          skillName: "MLflow",
          icon: "bar-chart-2",
          style: { color: "#0194E2" },
        },
      ],
    },
  ],
};

// Education Page
export const competitiveSites = {
  competitiveSites: [],
};

export const degrees = {
  degrees: [
    {
      title: "Friedrich-Alexander University (FAU), Germany",
      subtitle: "MS in Artificial Intelligence (Grade: 2.0)",
      logo_path: "/fau_logo.png",
      alt_name: "Friedrich-Alexander University",
      duration: "Aug 2023 - Present",
      descriptions: [
        "The program focuses on educating thoroughly skilled computer scientists capable of solving complex engineering tasks at the intersection of AI, applied mathematics, and engineering.",
        "Core Pillars: Symbolic AI (Knowledge Representation), Subsymbolic AI (Machine Learning, Deep Learning), and AI Systems & Applications.",
        "Specialized in Pattern Recognition and Computer Vision at the PR Lab, currently conducting research on historical writer retrieval using multi-vector approaches.",
        "Interdisciplinary minor in Business Intelligence and Digital Change Management, bridging technical AI with industrial application.",
      ],
      website_link: "https://www.fau.eu/degree-program/artificial-intelligence-ai-m-sc/",
    },
  ],
};

// Certifications / Awards
export const certifications = {
  title: "Certifications",
  certifications: [
    {
      title: "Introducing Generative AI with AWS",
      subtitle: "- Udacity",
      logo_path: "/udacity_logo.png",
      certificate_link:
        "https://www.udacity.com/certificate/e/088921ae-3e64-11f0-b8ea-3fd202967d32",
      alt_name: "Udacity",
      color_code: "#02B3E4",
    },
    {
      title: "AWS Educate Introduction to Generative AI",
      subtitle: "- AWS Educate (Credly Badge)",
      logo_path: "/aws_logo.png",
      certificate_link:
        "https://www.credly.com/earner/earned/badge/d283e9ca-d6eb-4ba4-8105-76de9e30d53c",
      alt_name: "AWS Educate",
      color_code: "#FF9900",
    },
    {
      title: "AWS Educate Machine Learning Foundations",
      subtitle: "- AWS Educate (Credly Badge)",
      logo_path: "/aws_logo.png",
      certificate_link:
        "https://www.credly.com/badges/cdc2825a-2ca2-4818-8eb7-eb373d345a1c/public_url",
      alt_name: "AWS Educate",
      color_code: "#FF9900",
    },
    {
      title: "Samsung Innovation Campus",
      subtitle: "- Artificial Intelligence",
      logo_path: "/samsung_ino.jpeg",
      certificate_link: "",
      alt_name: "Samsung Innovation Campus",
      color_code: "#1428A0",
    },
    {
      title: "AI Agents in LangGraph",
      subtitle: "- DeepLearning.AI",
      logo_path: "/deeplearning_ai_logo.jpg",
      certificate_link:
        "https://learn.deeplearning.ai/accomplishments/05ffd413-f192-40d2-a149-0bc4b4bfbe27?usp=sharing",
      alt_name: "DeepLearning.AI",
      color_code: "#00000099",
    },
    {
      title: "Functions, Tools and Agents with LangChain",
      subtitle: "- DeepLearning.AI",
      logo_path: "/deeplearning_ai_logo.jpg",
      certificate_link:
        "https://learn.deeplearning.ai/accomplishments/c8e9bd72-fd85-4c0f-8c28-e6d603c487ed?usp=sharing",
      alt_name: "DeepLearning.AI",
      color_code: "#00000099",
    },
    {
      title: "Google Finance Data Analyst Professional Certificate",
      subtitle: "- Coursera",
      logo_path: "/coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/P8VBJFNT4T7B",
      alt_name: "Coursera / Google",
      color_code: "#2A73CC",
    },
    {
      title: "Google Data Analytics Specialization",
      subtitle: "- Coursera",
      logo_path: "/google.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/W3TTGJD82EP3",
      alt_name: "Coursera / Google",
      color_code: "#2A73CC",
    },
    {
      title: "Process Data from Dirty to Clean",
      subtitle: "- Coursera",
      logo_path: "/coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/LQBGZXFB2YT7",
      alt_name: "Coursera / Google",
      color_code: "#2A73CC",
    },
    {
      title: "Prepare Data for Exploration",
      subtitle: "- Coursera",
      logo_path: "/coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/DA956MKEH489",
      alt_name: "Coursera / Google",
      color_code: "#2A73CC",
    },
    {
      title: "Analyze Data to Answer Questions",
      subtitle: "- Coursera",
      logo_path: "/coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/WPXR3Q49SXQU",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Data Analysis with R Programming",
      subtitle: "- Coursera",
      logo_path: "/coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/T525353MUY3M",
      alt_name: "Coursera / Google",
      color_code: "#2A73CC",
    },
    {
      title: "Crash Course on Python",
      subtitle: "- Coursera",
      logo_path: "/coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/CNX4UMBJ6QGG",
      alt_name: "Coursera / Google",
      color_code: "#2A73CC",
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      subtitle: "- Coursera",
      logo_path: "/coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/M8RNM96EPS2S",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Share Data Through the Art of Visualization",
      subtitle: "- Coursera",
      logo_path: "/coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/RV27Q2EA4E75",
      alt_name: "Coursera / Google",
      color_code: "#2A73CC",
    },
  ],
};

export const honors = {
  title: "Honors & Awards",
  honors: [
    {
      title: "Bronze Medal",
      subtitle: "- Kaggle Competition",
      logo_path: "/kaggle_logo.png",
      certificate_link: "",
      alt_name: "Kaggle",
      color_code: "#20BEFF",
    },
    {
      title: "1st Place",
      subtitle: "- Samsung Innovation Campus AI Bootcamp",
      logo_path: "/samsung_ino.jpeg",
      certificate_link: "",
      alt_name: "Samsung Innovation Campus",
      color_code: "#1428A0",
    },
    {
      title: "Runners-Up",
      subtitle: "- Microsoft Imagine Cup",
      logo_path: "/microsoft_logo.png",
      certificate_link: "",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
  ],
};

export const languages = [
  { name: "Urdu", level: "Native", progress: 100 },
  { name: "Punjabi", level: "Native", progress: 100 },
  { name: "English", level: "C1 (Professional)", progress: 95 },
  { name: "German", level: "B2 (In Progress)", progress: 75 },
  { name: "Arabic", level: "A1", progress: 25 },
];

// Experience Page
export const experience = {
  title: "Experience",
  subtitle: "Industry Roles & Research",
  description:
    "I build production-grade AI systems—agentic services, LLM/RAG pipelines, multimodal CV solutions, and cloud deployments—backed by strong CI/CD, security, and observability practices.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "AI/Software Engineer — Werkstudent",
          company: "Siemens AG",
          company_url: "https://www.siemens.com/",
          logo_path: "/siemens_logo.jpeg",
          duration: "Oct 2025 - Present",
          location: "Germany",
          description:
            "Architected cross-cloud blueprints for enterprise agentic services (AWS/Azure/GCP). Built framework-agnostic agent service bases (FastAPI + JSON-RPC 2.0), automated CI/CD pipelines with quality gates and multi-env deployments (AWS ECS Fargate, Azure Container Apps), implemented OAuth2 (PKCE) auth + user-context propagation, and established OpenTelemetry tracing for end-to-end execution visibility.",
          color: "#0A2A66",
        },
        {
          title: "Data Scientist — Werkstudent",
          company: "Deepvertise",
          company_url: "",
          logo_path: "/deepvertise_logo.jpeg",
          duration: "Jul 2024 - Jan 2025",
          location: "Germany",
          description:
            "Led delivery across stakeholders and engineers; defined KPIs for improvement surveys. Designed and deployed LLM-powered NLP systems (RAG, web scraping, custom agents, workflows) achieving 89% precision for buy-decision support. Built a Knowledge-Graph RAG + hybrid search system for financial document insight extraction, improving Recall@K by 20%, speeding processing >15×, and reducing cost by 70% through pipeline optimization.",
          color: "#2E6FBE",
        },
      ],
    },
    {
      title: "Research",
      experiences: [
        {
          title:
            "Research Student — Master’s Seminar (AI-Based Object Detection & Computer Vision Systems)",
          company: "Fraunhofer IIS",
          company_url: "https://www.iis.fraunhofer.de/",
          logo_path: "/fraunhofer_iis_logo.png",
          duration: "Nov 2024 - Apr 2025",
          location: "Erlangen, Bavaria, Germany (Hybrid)",
          description:
            "Conducted advanced research on deep learning architectures for real-time object detection in CV applications. Analyzed and benchmarked state-of-the-art detection frameworks to evaluate speed/accuracy/efficiency trade-offs. Explored re-parameterized convolutions, compound model scaling, and dynamic label assignment to improve inference on resource-constrained devices. Authored a technical review paper and presented findings in collaboration with Fraunhofer IIS on design strategies and emerging trends for embedded and autonomous vision systems.",
          color: "#0B5FA5",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "Core9 Ventures",
          company_url: "",
          logo_path: "/core9_logo.png",
          duration: "Jan 2024 - Jun 2024",
          location: "USA / Pakistan",
          description:
            "Built a multimodal AI voice assistant for travel videos using CV + NLP + VLMs (captioning, VQA, OCR, zero-shot detection, RAG, speech). Engineered large-scale CV extraction for 500K+ images across 20+ asset types, improving accuracy and processing time. Developed a CV compliance monitoring system achieving 93% detection accuracy with PostgreSQL integration and Tableau dashboards.",
          color: "#111111",
        },
      ],
    },
  ],
};

// Projects Page
export const projectsHeader = {
  title: "Projects",
  description:
    "Selected projects across Agentic AI, RAG/Knowledge Graphs, Computer Vision, predictive maintenance, and audio intelligence—built with production readiness in mind.",
  avatar_image_path: "projects_image.svg",
};

export const bigProjects = {
  title: "Featured Projects",
  subtitle:
    "A selection of applied AI projects across climate AI, educational NLP, predictive maintenance, and biodiversity monitoring.",
  projects: [
    {
      image: "/contrail.jpg",
      projectName:
        "Google Research — Identify Contrails to Reduce Global Warming",
      projectDesc:
        "Built a deep learning pipeline for contrail identification from satellite imagery in the Google Research Kaggle challenge. Focused on segmentation-style modeling, robust preprocessing, evaluation, and climate-relevant prediction quality for aviation-induced warming signals.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/talhawaheed152/Google-Research---Identify-Contrails-to-Reduce-Global-Warming",
        },
      ],
    },
    {
      image: "/commonlit.jpg",
      projectName: "CommonLit — Evaluate Student Summaries",
      projectDesc:
        "Developed an NLP pipeline to assess student-written summaries by modeling writing quality and content fidelity. Worked with text preprocessing, transformer-based representations, regression/classification experimentation, and competition-style evaluation to improve educational feedback automation.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/talhawaheed152/CommonLit---Evaluate-Student-Summaries",
        },
      ],
    },
    {
      image: "/predicitve_maintenance.png",
      projectName:
        "Implementation and Evaluation of Machine and Deep Learning Techniques for Predictive Maintenance in Hot-Crimping",
      projectDesc:
        "May 2024 – Jan 2025 | Grade: 1.3. Designed and evaluated a predictive-maintenance framework for hot-crimping using sensor and wear data from FAPS at FAU under NDA. Built a Python pipeline for cleaning, normalization, interpolation, and tsfresh-based feature extraction from high-frequency temperature, power-consumption, and 3D surface-roughness data. Trained XGBoost and CatBoost regressors with recursive feature elimination and Optuna-tuned nested Leave-One-Group-Out cross-validation. Also developed deep learning models in PyTorch/tsai, including InceptionTimePlus, PatchTST, TCN, and TSTPlus, with multimodal fusion of time-series embeddings and tabular metadata. The multimodal PatchTST model achieved the best performance, reaching approximately 14 cycles MAE for RUL and 14 µm MAE for wear prediction, demonstrating robust generalization across unseen electrode assemblies and strong potential for condition-based maintenance in high-throughput manufacturing. (Note: Detailed technical documentation and codebase are confidential).",
      footerLink: [
        {
          name: "View on LinkedIn",
          url: "https://www.linkedin.com/in/mtalhawaheed/details/projects/",
        },
      ],
    },
    {
      image: "/birdclef_project.png",
      projectName: "Bird Species Classification from Audio Recordings",
      projectDesc:
        "Grade: 1.0. Developed and benchmarked machine learning pipelines for bird-species identification from noisy field audio recorded in India’s Western Ghats. Converted audio clips into 128×384 mel-spectrograms, applied MixUp and Random Cutout augmentation, and extracted Wav2Vec2 embeddings for representation learning. Built two primary pipelines: an EfficientNetV2-B2 spectrogram classifier and a k-NN classifier over averaged Wav2Vec2 embeddings, with Optuna-based tuning and Bayesian smoothing for post-processing. The final ensemble improved performance from individual F1 scores of 0.59 and 0.21 to a final score of 0.68, showing the value of combining waveform embeddings, spectrogram modeling, and probabilistic calibration for scalable biodiversity monitoring. (Note: Detailed technical documentation and codebase are confidential).",
      footerLink: [
        {
          name: "View on LinkedIn",
          url: "https://www.linkedin.com/in/mtalhawaheed/details/projects/",
        },
      ],
    },
  ],
};

export const publicationsHeader = {
  title: "Publications",
  description:
    "Articles and research links (add items here if you want them displayed).",
  avatar_image_path: "projects_image.svg",
};

export const publications = {
  data: [],
};

// Contact Page
export const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "/profile.png",
    description:
      "Reach me on LinkedIn or GitHub, or email me directly. Based in Munich, Germany.",
  },
  blogSection: {
    title: "Articles",
    subtitle:
      "I write and share my learnings on Medium — check out my latest articles here.",
    link: "https://medium.com/@talhawaheed152",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Munich, Germany",
    locality: "Munich",
    country: "Germany",
    region: "Bavaria",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/Munich,+Germany",
  },
};
