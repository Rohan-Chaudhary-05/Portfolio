export const personal = {
  name: "Rohan Chaudhary",
  tagline: "Founder & AI Builder",
  bio: "Building AI products from London. Shipping production ML at Roche; founding PlacementOS to fix how UK students break into tech.",
  about: `I build things. At Roche I engineered AI automation that compressed multi-hour workflows down to minutes — and shipped it into production. On the side I'm founding PlacementOS, an AI platform rethinking how UK students land placements and internships.\n\nI care about moving fast, building things that actually work, and solving problems that matter. Not optimising my LinkedIn.`,
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
    title: "PlacementOS",
    description:
      "Founding an AI platform that fixes how UK STEM students find placements, internships, and graduate roles — and connects them with early-stage startups worth joining.",
    tags: ["AI", "EdTech", "Founder", "In Progress"],
  },
  {
    title: "AI MCED Chatbot",
    description:
      "Fine-tuned an LLM at Roche for multi-cancer early detection. Authored a research abstract on a novel AI evaluation approach, submitted to ASCO and ESMO.",
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
    title: "Founder & Director",
    organisation: "PlacementOS",
    period: "2026 – Present",
    description:
      "Building an AI-powered platform to help UK STEM students land placements and internships.",
  },
  {
    type: "programme",
    title: "Microsoft Mentoring Programme",
    organisation: "Microsoft",
    period: "Jan 2026 – Mar 2026",
    description:
      "Selected for an 8-week programme, meeting twice weekly with professionals across Microsoft on technology, leadership and career development.",
  },
  {
    type: "work",
    title: "Data Science Placement Student",
    organisation: "Roche",
    period: "Aug 2025 – Aug 2026",
    description:
      "Built an OCR automation tool reducing processing time from hours to 2–3 minutes. Improved data retrieval performance by ~80%. Designed and deployed a fine-tuned LLM hosted on HuggingFace. Configured CI/CD pipelines. Collaborated with international teams across Switzerland, Canada, China and India.",
  },
  {
    type: "programme",
    title: "Global Innovation Networking Cohort",
    organisation: "Dubai, UAE",
    period: "Sep 2024",
    description:
      "Competitively selected for an intensive week of dialogue on AI, innovation and entrepreneurship with professionals from Emirates, Spotify, ITV and ALEC Fitout.",
  },
  {
    type: "education",
    title: "BSc Data Science & Analytics",
    organisation: "University of Westminster",
    period: "Sep 2023 – Jun 2027",
    description:
      "Modules include Machine Learning, Data Engineering, Software Development, Statistics and Cybersecurity. Led a data science project with real-world charity Resole. Built supervised ML models for cancer patient mortality prediction achieving over 85% accuracy.",
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
