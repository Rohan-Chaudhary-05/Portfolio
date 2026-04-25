export const personal = {
  name: "Rohan Chaudhary",
  tagline: "Co-Founder & AI Builder",
  bio: "",
  about: `I spent my placement year at Roche building AI tools that actually got used — OCR automation, a fine-tuned LLM, data pipelines that replaced manual processes people had been living with for years.\n\nNow I'm co-founding Stoneset.ai, a compliance tool for the EU AI Act. I run product and operations. We're early and building fast.`,
  email: "Rohan.sc.33@gmail.com",
  linkedin: "https://linkedin.com/in/rohan-chaudhary-",
  github: "https://github.com/Rohan-Chaudhary-05",
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Stoneset.ai",
    description:
      "Co-Founder & COO. Stoneset classifies AI systems against the EU AI Act — deterministically, with every decision traceable to a specific article, paragraph, and annex. No LLM guesswork. I run product and operations.",
    tags: ["RegTech", "EU AI Act", "Co-Founder", "COO"],
  },
  {
    title: "AI MCED Chatbot",
    description:
      "Fine-tuned an LLM at Roche for multi-cancer early detection. Authoring a research publication on a novel AI evaluation approach for MCED.",
    tags: ["Python", "LLMs", "HuggingFace", "Fine-tuning", "Healthcare"],
  },
  {
    title: "Tesla Market & Strategy Analysis",
    description:
      "An independent case study analysing Tesla's market position, business strategy, and competitive landscape using data-driven insights.",
    tags: ["Data Analysis", "Business Strategy", "Case Study", "EV Industry"],
  },
];

export type TimelineEntry = {
  type: "work" | "education" | "programme";
  title: string;
  organisation: string;
  period: string;
  description: string;
};

export const timeline: TimelineEntry[] = [
  {
    type: "work",
    title: "Co-Founder & COO",
    organisation: "Stoneset.ai",
    period: "2026 – Present",
    description:
      "Co-founding Stoneset.ai. Leading product, strategy, and operations — building from zero with intent.",
  },
  {
    type: "programme",
    title: "Microsoft Mentoring Programme",
    organisation: "Microsoft",
    period: "Jan 2026 – Mar 2026",
    description:
      "Selected for an 8-week programme with professionals across Microsoft, covering technology, leadership, and strategy.",
  },
  {
    type: "work",
    title: "Data Science Placement Student",
    organisation: "Roche",
    period: "Aug 2025 – Aug 2026",
    description:
      "Built OCR automation reducing processing time from hours to under three minutes. Improved data retrieval by ~80%. Designed and deployed a fine-tuned LLM on HuggingFace. Configured CI/CD pipelines. Worked across teams in Switzerland, Canada, China, and India.",
  },
  {
    type: "education",
    title: "BSc Data Science & Analytics",
    organisation: "University of Westminster",
    period: "Sep 2023 – Jun 2027",
    description:
      "Machine Learning, Data Engineering, Software Development, Statistics, Cybersecurity. Built supervised ML models for cancer patient mortality prediction — over 85% accuracy.",
  },
];

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages & Tools",
    skills: ["Python", "R", "SQL", "Git", "GitHub", "GitLab", "VS Code", "MS Office"],
  },
  {
    category: "Frameworks & Platforms",
    skills: ["R Shiny", "Streamlit", "HuggingFace", "Power BI"],
  },
  {
    category: "AI & ML",
    skills: ["LLMs", "Fine-tuning", "Generative AI", "Prompt Engineering", "RAG"],
  },
  {
    category: "Other",
    skills: ["CI/CD Pipelines", "OCR Automation", "Data Visualisation"],
  },
];
