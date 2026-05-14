export interface ProjectMeta {
  slug: string;
  title: string;
  tagline: string;
  category: "ai-systems" | "saas" | "full-stack" | "developer-tools" | "experimental";
  status: "active" | "completed" | "experimental";
  tier: "featured" | "lab";
  date: string;
  color: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  description: string;
  image?: string;
}

export const categoryLabels: Record<string, string> = {
  "ai-systems": "AI Systems",
  saas: "SaaS",
  "full-stack": "Full-Stack",
  "developer-tools": "Developer Tools",
  experimental: "Experimental",
};

export const projects: ProjectMeta[] = [
  {
    slug: "vaultic",
    title: "Vaultic",
    tagline: "Local-first, zero-knowledge API key vault for developers",
    category: "developer-tools",
    status: "active",
    tier: "featured",
    date: "2025-05",
    color: "#6366f1",
    techStack: ["Next.js", "Tauri", "Rust", "TypeScript", "Zustand", "Web Crypto API"],
    metrics: [
      { label: "Encryption", value: "AES-256-GCM" },
      { label: "Key Derivation", value: "310K PBKDF2" },
      { label: "Architecture", value: "Zero-Knowledge" },
    ],
    githubUrl: "https://github.com",
    description:
      "A desktop-native API key manager built with Tauri and Rust. Features zero-knowledge encryption where keys never leave the device, .env file synchronization with local projects, and a project-first workspace architecture.",
    image: "/vaultic-hero.png",
  },
  {
    slug: "medsage",
    title: "MedSage",
    tagline: "AI-powered medical diagnosis assistant with multi-agent orchestration",
    category: "ai-systems",
    status: "completed",
    tier: "featured",
    date: "2025-04",
    color: "#10b981",
    techStack: ["CrewAI", "FastAPI", "Next.js", "LangChain", "Python", "Gemini API"],
    metrics: [
      { label: "AI Agents", value: "4 Specialized" },
      { label: "Capabilities", value: "Voice + Vision" },
      { label: "Output", value: "PDF Reports" },
    ],
    githubUrl: "https://github.com",
    description:
      "A multi-agent AI system for medical diagnosis powered by CrewAI. Features voice interaction, prescription image analysis via computer vision, and automated PDF report generation with explainable AI reasoning.",
    image: "/medsage-hero.png",
  },
  {
    slug: "keynest",
    title: "KeyNest",
    tagline: "Zero-knowledge API key manager with AI-powered API discovery",
    category: "saas",
    status: "completed",
    tier: "featured",
    date: "2025-02",
    color: "#8b5cf6",
    techStack: ["Next.js", "Tailwind", "Dexie.js", "Claude API", "Web Crypto", "Clerk"],
    metrics: [
      { label: "Storage", value: "Local-First PWA" },
      { label: "AI Feature", value: "API Finder" },
      { label: "Security", value: "End-to-End Encrypted" },
    ],
    githubUrl: "https://github.com",
    description:
      "A progressive web app for managing API keys with zero-knowledge encryption. Includes an AI-powered API Finder that uses Claude to discover relevant APIs based on natural language descriptions.",
    image: "/keynest-hero.png",
  },
  {
    slug: "pdf-qa-agent",
    title: "PDF-QA Agent",
    tagline: "Agentic RAG system for intelligent document question answering",
    category: "ai-systems",
    status: "completed",
    tier: "lab",
    date: "2025-03",
    color: "#f59e0b",
    techStack: ["LangChain", "FAISS", "Python", "FastAPI", "React"],
    metrics: [
      { label: "Pipeline", value: "RAG + Agents" },
      { label: "Embeddings", value: "Vector Search" },
    ],
    githubUrl: "https://github.com",
    description:
      "An agentic RAG system that enables intelligent Q&A over PDF documents using vector embeddings and tool-calling agents.",
  },
  {
    slug: "smartscribe",
    title: "SmartScribe",
    tagline: "AI-powered intelligent note-taking SaaS platform",
    category: "saas",
    status: "experimental",
    tier: "lab",
    date: "2025-01",
    color: "#ec4899",
    techStack: ["Next.js", "OpenAI", "Tailwind", "Supabase"],
    metrics: [
      { label: "AI Features", value: "Auto-Summarize" },
      { label: "Platform", value: "Web SaaS" },
    ],
    githubUrl: "https://github.com",
    description:
      "An AI-powered note-taking platform with automatic summarization, intelligent tagging, and study material generation.",
  },
  {
    slug: "plant-doc-bot",
    title: "Plant-Doc Bot",
    tagline: "Computer vision system for plant disease detection",
    category: "ai-systems",
    status: "completed",
    tier: "lab",
    date: "2024-12",
    color: "#22c55e",
    techStack: ["Python", "TensorFlow", "CNN", "PlantVillage Dataset"],
    metrics: [
      { label: "Model", value: "CNN Classifier" },
      { label: "Dataset", value: "PlantVillage" },
    ],
    githubUrl: "https://github.com",
    description:
      "A deep learning model for automated plant disease detection using convolutional neural networks trained on the PlantVillage dataset.",
  },
  {
    slug: "symptom-checker",
    title: "AI Symptom Checker",
    tagline: "NLP-driven symptom analysis with explainable AI results",
    category: "ai-systems",
    status: "completed",
    tier: "lab",
    date: "2024-11",
    color: "#0ea5e9",
    techStack: ["React", "FastAPI", "spaCy", "scikit-learn", "Python"],
    metrics: [
      { label: "NLP", value: "Entity Extraction" },
      { label: "ML", value: "Classification" },
    ],
    githubUrl: "https://github.com",
    description:
      "An AI-powered symptom analysis tool using NLP for entity extraction and ML for condition classification, with explainable reasoning.",
  },
];

export function getFeaturedProjects(): ProjectMeta[] {
  return projects.filter((p) => p.tier === "featured");
}

export function getLabProjects(): ProjectMeta[] {
  return projects.filter((p) => p.tier === "lab");
}

export function getProjectBySlug(slug: string): ProjectMeta | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: string): ProjectMeta[] {
  if (category === "all") return projects;
  return projects.filter((p) => p.category === category);
}
