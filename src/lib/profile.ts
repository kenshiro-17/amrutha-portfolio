import {
  Award,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  Languages,
  Mail,
  MapPin,
  Phone,
  ScanFace,
  Trophy,
  Wheat,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  icon: LucideIcon;
};

export type Project = {
  title: string;
  eyebrow: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
};

export type SkillCluster = {
  title: string;
  skills: string[];
  icon: LucideIcon;
};

export const profile = {
  name: "Amrutha Sreeraj",
  initials: "AS",
  role: "Applied AI Professional",
  portrait: "/amrutha-sreeraj-portrait.png",
  headline: "Applied AI professional building computer vision and ML pipeline systems.",
  location: "Stuttgart, Germany",
  availability: "Computer vision and ML engineer based in Germany",
  email: "amrutha.sreeraj@outlook.com",
  phone: "+49 15906701213",
  summary:
    "Applied AI practitioner with hands-on experience in computer vision, model validation, ML pipeline development, and Java API engineering. Currently contributing to smart farming research at Fraunhofer IGD.",
  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  stats: [
    { value: "MSc AI", label: "Artificial Intelligence" },
    { value: "2+", label: "Years industry and research" },
    { value: "Germany", label: "Available for full-time roles" },
  ],
  contactLinks: [
    {
      label: "Email",
      value: "amrutha.sreeraj@outlook.com",
      href: "mailto:amrutha.sreeraj@outlook.com",
      icon: Mail,
    },
    {
      label: "Phone",
      value: "+49 15906701213",
      href: "tel:+4915906701213",
      icon: Phone,
    },
    {
      label: "Location",
      value: "Stuttgart, Germany",
      href: "#contact",
      icon: MapPin,
    },
  ],
};

export const experience: Experience[] = [
  {
    role: "Hilfswissenschaftlerin - Smart Farming",
    company: "Fraunhofer IGD",
    period: "03/2024 - Present",
    location: "Rostock, Germany",
    icon: Wheat,
    highlights: [
      "Applied computer vision methods for data-driven smart farming solutions.",
      "Developed scalable end-to-end ML pipelines for detection and tracking.",
      "Conducted model validation, evaluation, and performance optimization.",
    ],
  },
  {
    role: "Java API Developer",
    company: "Tata Consultancy Services",
    period: "07/2021 - 11/2022",
    location: "Chennai, India",
    icon: BriefcaseBusiness,
    highlights: [
      "Developed RESTful APIs and managed JSON documents for a TCS iON internal project.",
      "Handled troubleshooting and debugging across project software workflows.",
    ],
  },
  {
    role: "Intern",
    company: "CAPCEE Technologies",
    period: "2018",
    location: "Calicut, India",
    icon: Code2,
    highlights: [
      "Worked across front-end and back-end web development tasks.",
      "Built hands-on experience with PHP, HTML, and Bootstrap.",
    ],
  },
];

export const education = [
  {
    degree: "MSc. Artificial Intelligence",
    institution: "Brandenburg University of Technology",
    period: "10/2022 - Present",
    location: "Cottbus, Germany",
  },
  {
    degree: "B Tech. Computer Science",
    institution: "Muthoot Institute of Technology and Science",
    period: "2017 - 2021",
    location: "Kochi, India",
    detail: "8.26 CGPA",
  },
];

export const projects: Project[] = [
  {
    title: "Region-Aware Hybrid Face Inpainting Pipeline",
    eyebrow: "Master's thesis",
    description:
      "A hybrid pipeline using exemplar-based pre-fill and latent diffusion refinement for region-aware face inpainting.",
    tags: ["Computer Vision", "Diffusion", "Python", "ML Pipeline"],
    icon: ScanFace,
  },
  {
    title: "Automatic Text Summarization",
    eyebrow: "Deep learning research",
    description:
      "Explored text summarization using deep learning and reinforcement learning methods.",
    tags: ["Deep Learning", "Reinforcement Learning", "NLP"],
    icon: BrainCircuit,
  },
  {
    title: "Clinic Management System",
    eyebrow: "Full-stack web project",
    description:
      "Built a clinic management web project with HTML, CSS, Bootstrap, PHP, and MySQL.",
    tags: ["PHP", "MySQL", "Bootstrap", "Web"],
    icon: Database,
  },
  {
    title: "Dialogflow Chatbots",
    eyebrow: "Hackathon and techfest builds",
    description:
      "Created chatbot projects for Vyapti Techfest and Devathon, including an insurance company use case.",
    tags: ["Dialogflow", "Chatbot", "Team Project"],
    icon: Bot,
  },
];

export const skillClusters: SkillCluster[] = [
  {
    title: "AI and ML",
    skills: ["Python", "Machine Learning", "Computer Vision", "OpenCV", "PyTorch", "TensorFlow"],
    icon: BrainCircuit,
  },
  {
    title: "Engineering",
    skills: ["Java", "REST APIs", "SQL", "C", "GitHub", "Pipeline Building"],
    icon: Code2,
  },
  {
    title: "Tools and Methods",
    skills: ["Model Evaluation", "Performance Optimization", "Excel", "Deep-Q"],
    icon: Database,
  },
  {
    title: "Languages",
    skills: ["English", "German"],
    icon: Languages,
  },
];

export const publications = [
  {
    title: "Automatic Text Summarization using Deep Learning and Reinforcement Learning",
    icon: Award,
  },
  {
    title: "Smart Traffic System",
    icon: Award,
  },
];

export const awards = [
  {
    title: "Devathon Hackathon",
    period: "01/12/2018",
    description: "Secured first position in the hackathon conducted in M A College.",
    icon: Trophy,
  },
  {
    title: "Game Development, MITS",
    period: "01/12/2016",
    description: "Secured first position in a game development competition conducted by FOSS club.",
    icon: Trophy,
  },
];
