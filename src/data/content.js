import {
  Linkedin,
  Github,
  Mail,
  Code2,
  Globe,
  Database,
  BookOpen,
  Wrench,
  Target,
  Award,
  Sparkles,
  Brain,
} from "lucide-react";

export const CONTACT = {
  phone: "+91 8303574594",
  phoneHref: "tel:+918303574594",
  email: "khushichaurasia.dev@gmail.com",
  location: "Kanpur, India",
};

export const SOCIALS = [
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/khushi-chaurasia-1364ba343" },
  { label: "GitHub", icon: Github, href: "https://github.com/khushic210" },
  { label: "LeetCode", icon: "LC", href: "https://leetcode.com/u/Khushi_Chaurasia/" },
  { label: "Email", icon: Mail, href: `mailto:${CONTACT.email}` },
];

export const SKILL_GROUPS = [
  { title: "Programming Languages", icon: Code2, items: ["C", "C++", "Python (basic)", "JavaScript"] },
  {
    title: "Web Technologies",
    icon: Globe,
    items: ["HTML", "CSS", "React.js", "Node.js", "Express.js", "REST APIs", "Chrome Extensions (Manifest V3)"],
  },
  {
    title: "AI / LLM",
    icon: Brain,
    items: ["LLMs", "RAG", "CRAG (Corrective RAG)", "LangChain", "Prompt Engineering", "Embeddings & Semantic Search"],
  },
  { title: "Databases", icon: Database, items: ["SQL", "Oracle", "MongoDB"] },
  { title: "Core Subjects", icon: BookOpen, items: ["Data Structures & Algorithms", "DBMS", "OOPS"] },
  { title: "Tools", icon: Wrench, items: ["Git", "GitHub", "VS Code"] },
];

export const EXPERIENCE = [
  {
    role: "Web Development Intern — HTML & CSS",
    company: "EWB",
    period: "Sep – Oct 2026",
    points: [
      "Built and styled responsive web pages using HTML and CSS.",
      "Practiced semantic markup, layouts, and cross-device responsive design.",
    ],
  },
];

// `demo` is optional — leave it empty and the Live Demo button is hidden.
// Replace the `github` links with the exact repository URLs.
export const PROJECTS = [
  {
    title: "LectureMateAI",
    subtitle: "RAG-Based YouTube Assistant",
    status: "Building",
    points: [
      "Chrome extension that helps students learn from YouTube lectures without leaving the platform, using a LangChain-based RAG pipeline over video transcripts.",
      "In-page Q&A: ask questions while watching and get context-grounded answers from the video content.",
      "Generates video summaries and flashcards automatically for quick revision.",
      "Applied Corrective RAG (CRAG) to evaluate retrieved context, improve answer relevance, and reduce hallucinations.",
    ],
    stack: ["LangChain", "RAG", "CRAG", "LLM", "Chrome Extension"],
    github: "https://github.com/khushic210",
    demo: "",
  },
  {
    title: "FitX",
    subtitle: "AI-Powered Fitness Platform",
    role: "Frontend Developer",
    points: [
      "Worked primarily as a Frontend Developer, building responsive user interfaces for an AI-powered fitness platform.",
      "Collaborated on a full-stack fitness workflow with JWT-secured authentication, Node.js/Express, MongoDB, and an AI coaching component.",
    ],
    stack: ["React.js", "JavaScript", "REST APIs", "Node.js", "MongoDB", "AI"],
    github: "https://github.com/khushic210",
    demo: "",
  },
  {
    title: "DevTracker",
    subtitle: "Developer Productivity Platform",
    status: "In Progress",
    points: [
      "Building a full-stack developer productivity platform to track coding progress, goals, and learning activities.",
      "Developing responsive UI and backend APIs for efficient progress tracking and data management.",
    ],
    stack: [],
    github: "https://github.com/khushic210",
    demo: "",
  },
];

export const ACHIEVEMENTS = [
  {
    icon: Target,
    title: "130+ Problems Solved",
    desc: "Solved 130+ LeetCode problems across arrays, strings, hashing, two pointers, sliding window, stacks, queues, linked lists, binary search, trees, and heaps.",
  },
  {
    icon: Award,
    title: "LeetCode 50 Days Badge",
    desc: "Earned the badge for maintaining a 50+ day problem-solving streak.",
  },
  {
    icon: Sparkles,
    title: "Strong DSA Foundation",
    desc: "Built a strong foundation in Data Structures & Algorithms through consistent practice.",
  },
];

export const CERTIFICATIONS = [
  { title: "HTML", issuer: "Infosys Springboard" },
  { title: "Java", issuer: "Infosys Springboard" },
  { title: "DBMS", issuer: "Infosys Springboard" },
];

export const EDUCATION = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    place: "Pranveer Singh Institute of Technology (PSIT), Kanpur · AKTU",
    meta: "CGPA: 8.06 · 2024 – 2028",
    tag: "Current",
  },
  {
    degree: "Class XII (CBSE)",
    place: "Deoria Senior Secondary School",
    meta: "83%",
    tag: "School",
  },
  {
    degree: "Class X (CBSE)",
    place: "Deoria Senior Secondary School",
    meta: "91.6%",
    tag: "School",
  },
];

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
