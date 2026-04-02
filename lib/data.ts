export const personal = {
  name: "Rohan Chaudhary",
  tagline: "Data Scientist & AI Builder",
  bio: "BSc Data Science & Analytics student at the University of Westminster, currently on placement at Roche building AI-powered tools at the intersection of data science and healthcare. Available for internships from September 2026.",
  about: `I am a Data Science and Analytics student at the University of Westminster, currently completing a placement year at Roche where I have built AI-powered automation tools, developed data interfaces, and engineered workflows that reduced processing times from hours to minutes. I am passionate about applying technology responsibly to solve real-world problems — whether in healthcare, education, or beyond.`,
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
    title: "AI MCED Chatbot",
    description:
      "A PhD-level initiative at Roche involving a fine-tuned language model for multi-cancer early detection. Authored a research abstract on a potentially novel AI evaluation approach, submitted to ASCO and ESMO.",
    tags: ["Python", "LLMs", "HuggingFace", "Fine-tuning", "Healthcare", "Roche"],
  },
  {
    title: "PlacementOS",
    description:
      "An AI-powered platform I am building to help UK STEM students find placements, internships and graduate schemes, and connect with early-stage startups.",
    tags: ["AI", "EdTech", "Founder", "In Progress"],
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
    type: "education",
    title: "BSc Data Science & Analytics",
    organisation: "University of Westminster",
    period: "Sep 2023 – Jun 2027",
    description:
      "Predicted 1st. Modules include Machine Learning, Data Engineering, Software Development, Statistics and Cybersecurity. Led a data science project with real-world charity Resole. Built supervised ML models for cancer patient mortality prediction achieving over 85% accuracy.",
  },
  {
    type: "work",
    title: "Sales Advisor",
    organisation: "Decathlon UK",
    period: "Mar 2023 – May 2025",
    description:
      "Developed communication and stakeholder management skills in a fast-paced customer-facing environment.",
  },
  {
    type: "programme",
    title: "Global Innovation Networking Cohort",
    organisation: "Dubai, UAE",
    period: "Sep 2024",
    description:
      "Competitively selected for an intensive week of structured dialogue on AI, innovation and entrepreneurship with professionals from Emirates, Spotify, ITV and ALEC Fitout.",
  },
  {
    type: "education",
    title: "A-Levels",
    organisation: "Chingford Foundation Sixth Form",
    period: "Sep 2021 – Jun 2023",
    description: "Mathematics, Physics, Further Mathematics.",
  },
  {
    type: "programme",
    title: "UCL Japan Challenge — Cohort 21'",
    organisation: "UCL",
    period: "2021",
    description:
      "Selected as 1 of 2 students from a cohort of over 150 to visit RCAST at the University of Tokyo (visit cancelled due to pandemic). A one-month programme simulating university-level study across sustainability, science and technology with a focus on Japanese culture and innovation.",
  },
  {
    type: "programme",
    title: "Volunteer",
    organisation: "Barnardo's Children's Charity",
    period: "Sep 2021 – Dec 2021",
    description:
      "Volunteered at Barnardo's Children's Charity, supporting young people in the local community.",
  },
  {
    type: "education",
    title: "GCSEs",
    organisation: "Chingford Foundation Secondary",
    period: "Sep 2019 – Jun 2021",
    description:
      "Nine GCSEs graded 9–7, including Mathematics, English and Triple Science.",
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
