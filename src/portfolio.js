/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Talha Waheed | AI & Agentic Systems Engineer",
  description:
    "AI/Software Engineer (Werkstudent) in Munich building production-grade agentic services, LLM/RAG systems, multimodal CV pipelines, and cross-cloud deployments with CI/CD and OpenTelemetry observability.",
  og: {
    title: "Muhammad Talha (Talha Waheed) | Portfolio",
    type: "website",
    url: "https://talhawaheed152.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Muhammad Talha",
  logo_name: "TalhaWaheed",
  subTitle:
    "AI/Software Engineer (Werkstudent) focused on Agentic AI, LLM systems (RAG + Knowledge Graphs), multimodal CV/VLM pipelines, and production-grade cloud deployments with CI/CD and OpenTelemetry observability.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository:
    "https://github.com/talhawaheed152/talhawaheed152.github.io",
  githubProfile: "https://github.com/talhawaheed152",
};

const socialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mtalhawaheed/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Github",
    link: "https://github.com/talhawaheed152",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "Gmail",
    link: "mailto:talhawaheed152@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

// Skills Page
const skills = {
  data: [
    {
      title: "Agentic AI & LLM Systems",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Designing framework-agnostic agent services with FastAPI + JSON-RPC 2.0 (standardized entrypoints, metadata endpoints, health monitoring)",
        "⚡ Building LLM-powered systems (RAG, hybrid search, Knowledge Graph RAG) for insight extraction from documents, emails, and presentations",
        "⚡ Implementing secure authentication and governance patterns (OAuth2 + PKCE, user-context propagation, auditability)",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { backgroundColor: "transparent", color: "#3776AB" },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: { color: "#009688" },
        },
        {
          skillName: "LangChain",
          fontAwesomeClassname: "simple-icons:langchain",
          style: { color: "#111111" },
        },
        {
          skillName: "LangGraph",
          fontAwesomeClassname: "simple-icons:langgraph",
          style: { color: "#111111" },
        },
        {
          skillName: "Hugging Face",
          fontAwesomeClassname: "simple-icons:huggingface",
          style: { color: "#FFD21E" },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: { color: "#3178C6" },
        },
      ],
    },
    {
      title: "Computer Vision & Multimodal AI",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building multimodal pipelines using CV + NLP + VLMs (captioning, VQA, OCR, zero-shot detection) for context-aware assistants",
        "⚡ Large-scale visual information extraction (classification, detection, segmentation, computational geometry) across many asset types",
        "⚡ Delivering measurable improvements (accuracy gains, processing time reduction, and production integration)",
      ],
      softwareSkills: [
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: { backgroundColor: "white", color: "#D00000" },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: { color: "#5C3EE8" },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: { color: "#013243" },
        },
        {
          skillName: "pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: { color: "#150458" },
        },
      ],
    },
    {
      title: "MLOps, Cloud & Observability",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Cross-cloud blueprints for production agentic services (AWS, Azure, GCP) with secure connectivity and containerized runtime patterns",
        "⚡ CI/CD pipelines with quality gates (type checks, secret scanning, vuln scanning, container builds) and multi-environment deployments",
        "⚡ Production observability with OpenTelemetry + distributed tracing for tool-calls, debugging, and failure diagnostics",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#FF9900" },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: { color: "#0089D6" },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: { color: "#4285F4" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#1488C6" },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: { color: "#326CE5" },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: { color: "#2088FF" },
        },
        {
          skillName: "GitLab",
          fontAwesomeClassname: "simple-icons:gitlab",
          style: { color: "#FC6D26" },
        },
        {
          skillName: "OpenTelemetry",
          fontAwesomeClassname: "simple-icons:opentelemetry",
          style: { color: "#000000" },
        },
        {
          skillName: "Grafana",
          fontAwesomeClassname: "simple-icons:grafana",
          style: { color: "#F46800" },
        },
        {
          skillName: "Jaeger",
          fontAwesomeClassname: "simple-icons:jaeger",
          style: { color: "#66CFE3" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { color: "#336791" },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: { color: "#47A248" },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Friedrich-Alexander University (FAU), Germany",
      subtitle: "MS in Artificial Intelligence (Grade: 1.8)",
      logo_path: "fau_logo.png",
      alt_name: "Friedrich-Alexander University",
      duration: "Aug 2023 - Present",
      descriptions: [
        "- Symbolic AI: Artificial Intelligence I.",
        "- Subsymbolic AI / Machine Learning: Deep Learning; Machine Learning for Time Series; Pattern Recognition; Pattern Analysis; Computational / Numerical Neurotechnology.",
        "- AI Systems & Applications: Methods of Advance Data Engineering; Human Computer Interaction.",
        "- Minor Subject: Business Intelligence; People Analytics (Data Science for Human Resources Management); Digital Change Management.",
      ],
      website_link: "https://www.fau.eu/",
    },
  ],
};

// Certifications / Awards (kept + expanded with links)
const certifications = {
  certifications: [
    // Awards (existing)
    {
      title: "Bronze Medal",
      subtitle: "- Kaggle Competition",
      logo_path: "kaggle_logo.png",
      certificate_link: "",
      alt_name: "Kaggle",
      color_code: "#20BEFF",
    },
    {
      title: "1st Place",
      subtitle: "- Samsung Innovation Campus AI Bootcamp",
      logo_path: "samsung_logo.png",
      certificate_link: "",
      alt_name: "Samsung Innovation Campus",
      color_code: "#1428A0",
    },
    {
      title: "Runners-Up",
      subtitle: "- Microsoft Imagine Cup",
      logo_path: "microsoft_logo.png",
      certificate_link: "",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },

    // New certifications (with links)
    {
      title: "Introducing Generative AI with AWS",
      subtitle: "- Udacity",
      logo_path: "udacity_logo.png",
      certificate_link:
        "https://www.udacity.com/certificate/e/088921ae-3e64-11f0-b8ea-3fd202967d32",
      alt_name: "Udacity",
      color_code: "#02B3E4",
    },
    {
      title: "AWS Educate Introduction to Generative AI",
      subtitle: "- AWS Educate (Credly Badge)",
      logo_path: "aws_logo.png",
      certificate_link:
        "https://www.credly.com/earner/earned/badge/d283e9ca-d6eb-4ba4-8105-76de9e30d53c",
      alt_name: "AWS Educate",
      color_code: "#FF9900",
    },
    {
      title: "AWS Educate Machine Learning Foundations",
      subtitle: "- AWS Educate (Credly Badge)",
      logo_path: "aws_logo.png",
      certificate_link:
        "https://www.credly.com/badges/cdc2825a-2ca2-4818-8eb7-eb373d345a1c/public_url",
      alt_name: "AWS Educate",
      color_code: "#FF9900",
    },
    {
      title: "Samsung Innovation Campus",
      subtitle: "- Artificial Intelligence",
      logo_path: "samsung_logo.png",
      certificate_link: "",
      alt_name: "Samsung Innovation Campus",
      color_code: "#1428A0",
    },
    {
      title: "AI Agents in LangGraph",
      subtitle: "- DeepLearning.AI",
      logo_path: "deeplearning_ai_logo.jpg",
      certificate_link:
        "https://learn.deeplearning.ai/accomplishments/05ffd413-f192-40d2-a149-0bc4b4bfbe27?usp=sharing",
      alt_name: "DeepLearning.AI",
      color_code: "#00000099",
    },
    {
      title: "Functions, Tools and Agents with LangChain",
      subtitle: "- DeepLearning.AI",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://learn.deeplearning.ai/accomplishments/c8e9bd72-fd85-4c0f-8c28-e6d603c487ed?usp=sharing",
      alt_name: "DeepLearning.AI",
      color_code: "#00000099",
    },
    {
      title: "Google Finance Data Analyst Professional Certificate",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/P8VBJFNT4T7B",
      alt_name: "Coursera / Google",
      color_code: "#2A73CC",
    },
    {
      title: "Google Data Analytics Specialization",
      subtitle: "- Coursera",
      logo_path: "google.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/W3TTGJD82EP3",
      alt_name: "Coursera / Google",
      color_code: "#2A73CC",
    },
    {
      title: "Process Data from Dirty to Clean",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/LQBGZXFB2YT7",
      alt_name: "Coursera / Google",
      color_code: "#2A73CC",
    },
    {
      title: "Prepare Data for Exploration",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/DA956MKEH489",
      alt_name: "Coursera / Google",
      color_code: "#2A73CC",
    },
    {
      title: "Analyze Data to Answer Questions",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/WPXR3Q49SXQU",
      alt_name: "Coursera / Google",
      color_code: "#2A73CC",
    },
    {
      title: "Data Analysis with R Programming",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/T525353MUY3M",
      alt_name: "Coursera / Google",
      color_code: "#2A73CC",
    },
    {
      title: "Crash Course on Python",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/CNX4UMBJ6QGG",
      alt_name: "Coursera / Google",
      color_code: "#2A73CC",
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/M8RNM96EPS2S",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Share Data Through the Art of Visualization",
      subtitle: "- Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/RV27Q2EA4E75",
      alt_name: "Coursera / Google",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
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
          logo_path: "siemens_logo.jpeg",
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
          logo_path: "deepvertise_logo.jpeg",
          duration: "Jul 2024 - Jan 2025",
          location: "Germany",
          description:
            "Led delivery across stakeholders and engineers; defined KPIs for improvement surveys. Designed and deployed LLM-powered NLP systems (RAG, web scraping, custom agents, workflows) achieving 89% precision for buy-decision support. Built a Knowledge-Graph RAG + hybrid search system for financial document insight extraction, improving Recall@K by 20%, speeding processing >15×, and reducing cost by 70% through pipeline optimization.",
          color: "#2E6FBE",
        },
      ],
    },

    // Added: Research / Seminar
    {
      title: "Research",
      experiences: [
        {
          title:
            "Research Student — Master’s Seminar (AI-Based Object Detection & Computer Vision Systems)",
          company: "Fraunhofer IIS",
          company_url: "https://www.iis.fraunhofer.de/",
          logo_path: "fraunhofer_iis_logo.png",
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
          logo_path: "core9_logo.png",
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
const projectsHeader = {
  title: "Projects",
  description:
    "Selected projects across Agentic AI, RAG/Knowledge Graphs, and Computer Vision at scale—built with production readiness in mind (evaluation, deployment, and monitoring).",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "Articles and research links (add items here if you want them displayed).",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "talha.png",
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
  phoneSection: {
    title: "Phone",
    subtitle: "+49 1573 5805403",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
