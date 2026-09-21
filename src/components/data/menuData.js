// data/menuData.js
import icon1 from "../../../public/assets/img1.avif";
import icon2 from "../../../public/assets/img2.avif";
import icon3 from "../../../public/assets/img3.avif";
import icon4 from "../../../public/assets/img4.avif";
import icon5 from "../../../public/assets/img5.avif";
import icon6 from "../../../public/assets/img6.avif";
export const menuData = {
  services: {
    discover: [
      "Digital Experience Consulting",
      "Transformation Strategy",
      "UX & CX Strategy",
      "AI Readiness Assessment",
      "Technology & Platform Audits",
    ],
    build: [
      "Design",
      "Drupal",
      "Product Engineering",
      "AI",
      "Drupal Migration & Integration",
      "Cloud Engineering",
    ],
    transform: [
      "Performance Engineering",
      "Continuous Support & Maintenance",
      "Experience Optimization & SEO",
      "Platform Modernization",
    ],
    byIndustry: [
      { name: "Education & EdTech", },
      { name: "BFSI", },
      { name: "Public Sector", },
      { name: "Healthcare & Wellness", },
      { name: "Media & Publishing", },
      { name: "Energy", },
      { name: "Travel", },
    ],
  },

  solutions: [
    {
      id: "lep",
      title: "Learning Experience Platform",
      description: "Outgrow Your Legacy LMS. Deploy an AI-Powered Learning Experience.",
      image: icon1
    },
    {
      id: "ai-gov",
      title: "AI Governance",
      description: "Build responsible, compliant, and trustworthy AI systems across your organization.",
      image: icon2
    },
    {
      id: "ai-chatbot",
      title: "AI Chatbot",
      description: "Deploy intelligent conversational agents that understand context and deliver real value.",
      image: icon3
    },
    {
      id: "platform-perf",
      title: "Platform Performance",
      description: "Maximize speed, scalability, and reliability of your digital platforms.",
      image: icon4
    },
    {
      id: "dam",
      title: "Digital Asset Management",
      description: "Centralize, organize, and deliver your digital assets at scale with intelligent workflows.",
      image: icon5
    },
    {
      id: "workforce",
      title: "Workforce Automation",
      description: "Automate repetitive tasks and free your teams to focus on high-impact work.",
      image: icon6
    },
  ],
};
