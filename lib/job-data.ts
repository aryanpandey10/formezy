export type JobSection = {
  title: string;
  bullets: string[];
};

export type Job = {
  id: string;
  slug: string;
  title: string;
  titleHighlight: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string[];
  skills: string[];        /* short skill tags for card view */
  sections: JobSection[];  /* full spec for detail page */
};

export const jobs: Job[] = [
  {
    id: "j1",
    slug: "sql-developer",
    title: "SQL",
    titleHighlight: "Developer",
    department: "Engineering & Tech",
    location: "Ahmedabad, India",
    type: "Full-Time",
    experience: "0–1 Year",
    description: [
      "We are looking for an SQL Developer who can design, optimise and maintain high-performance database systems that support enterprise-grade applications. In this role, you will work closely with development and internal teams to ensure database stability, reliability, and efficiency across all operations.",
      "You will play a key role in improving query performance, maintaining data integrity, and ensuring that database systems scale seamlessly with business needs.",
    ],
    skills: ["SQL / T-SQL", "PostgreSQL", "Query Optimisation", "Git"],
    sections: [
      {
        title: "Key Responsibilities",
        bullets: [
          "Write, optimise, and maintain complex SQL queries for application performance",
          "Ensure database performance, security, and availability across systems",
          "Manage database operations including backup, recovery, and migration",
          "Design and maintain database structures aligned with application requirements",
          "Collaborate with development teams to improve in-application database usage",
        ],
      },
      {
        title: "Tasks & Responsibilities",
        bullets: [
          "Monitor and optimise database performance and resource utilisation",
          "Handle database upgrades, troubleshooting, and issue resolution",
          "Maintain documentation, schemas, and data flow diagrams (DFDs)",
          "Work with MS SQL Server and reporting tools like Crystal Reports",
          "Ensure adherence to best practices in database management and optimisation",
        ],
      },
      {
        title: "Skills & Experience",
        bullets: [
          "Strong proficiency in SQL and relational database systems",
          "Familiarity with MS SQL Server and database optimisation techniques",
          "Ability to handle complex queries and large datasets efficiently",
          "Understanding of database design, indexing, and performance tuning",
          "Basic knowledge of ERP systems and data structures",
          "Familiarity with Git or version control systems is a plus",
        ],
      },
    ],
  },
  {
    id: "j2",
    slug: "pre-sales-executive",
    title: "Pre-Sales",
    titleHighlight: "Executive (IT)",
    department: "Sales & Strategy",
    location: "Ahmedabad, India",
    type: "Full-Time",
    experience: "1–3 Years",
    description: [
      "We are looking for a Pre-Sales Executive who can own enterprise discovery calls, craft tailored demos, and write proposals that communicate Formezy's value to business stakeholders.",
      "You will work across manufacturing, retail and services sectors, helping prospects understand how Formezy maps to their specific operational needs.",
    ],
    skills: ["B2B SaaS Sales", "CRM tools", "Communication", "IT domain knowledge"],
    sections: [
      {
        title: "Key Responsibilities",
        bullets: [
          "Lead pre-sales discovery calls and technical demonstrations for enterprise prospects",
          "Understand client workflows and tailor Formezy demos to specific use cases",
          "Prepare detailed proposals, RFP responses, and solution documents",
          "Collaborate with the product team to translate client requirements into specs",
          "Build long-term relationships with prospective clients through consistent follow-up",
        ],
      },
      {
        title: "Tasks & Responsibilities",
        bullets: [
          "Maintain accurate records of leads and activities in the CRM",
          "Coordinate with the implementation team to ensure smooth handoffs post-sale",
          "Analyse client data and workflows to identify the best-fit Formezy solution",
          "Attend industry events, webinars and product demos to represent Formezy",
          "Provide feedback to the product team on common prospect objections and needs",
        ],
      },
      {
        title: "Skills & Experience",
        bullets: [
          "1–3 years of experience in B2B IT sales or pre-sales",
          "Strong understanding of ERP, CRM and workflow automation tools",
          "Excellent communication and presentation skills",
          "Ability to explain complex technical concepts to non-technical audiences",
          "Proficiency in tools like HubSpot, Salesforce or Zoho CRM is a plus",
        ],
      },
    ],
  },
  {
    id: "j3",
    slug: "react-nextjs-developer",
    title: "React /",
    titleHighlight: "Next.js Developer",
    department: "Engineering & Tech",
    location: "Ahmedabad, India",
    type: "Full-Time",
    experience: "2–4 Years",
    description: [
      "We are looking for a React / Next.js Developer to build and maintain Formezy's front-end platform — from the form builder and workflow canvas to dashboards and mobile views.",
      "You will work closely with product, design and backend teams to ship high-quality, performant user interfaces that enterprise clients rely on every day.",
    ],
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    sections: [
      {
        title: "Key Responsibilities",
        bullets: [
          "Build scalable, component-driven UIs using React and Next.js (App Router)",
          "Implement responsive layouts pixel-perfect from Figma designs",
          "Integrate REST and GraphQL APIs into front-end features",
          "Write clean, maintainable TypeScript with strong typing",
          "Contribute to design system standards and shared component libraries",
        ],
      },
      {
        title: "Tasks & Responsibilities",
        bullets: [
          "Participate in code reviews and uphold front-end quality standards",
          "Optimise pages for Core Web Vitals and performance benchmarks",
          "Collaborate with designers to refine UX patterns and interaction states",
          "Debug cross-browser and cross-device issues",
          "Write unit and integration tests using Jest and Testing Library",
        ],
      },
      {
        title: "Skills & Experience",
        bullets: [
          "2–4 years of hands-on experience with React and Next.js",
          "Strong TypeScript skills and familiarity with modern ES features",
          "Experience with Tailwind CSS or a similar utility-first CSS framework",
          "Understanding of server-side rendering, static generation and caching strategies",
          "Familiarity with Framer Motion or animation libraries is a plus",
          "Experience with version control (Git) and CI/CD workflows",
        ],
      },
    ],
  },
  {
    id: "j4",
    slug: "business-analyst",
    title: "Business",
    titleHighlight: "Analyst",
    department: "Product",
    location: "Ahmedabad, India",
    type: "Full-Time",
    experience: "2–5 Years",
    description: [
      "We are looking for a Business Analyst who can translate complex enterprise requirements into structured product specifications that engineering and design can execute on.",
      "You will work directly with clients to map workflows, identify operational gaps, and deliver solutions that solve real business problems — not just technical ones.",
    ],
    skills: ["Process Mapping", "Documentation", "Stakeholder Management", "ERP knowledge"],
    sections: [
      {
        title: "Key Responsibilities",
        bullets: [
          "Conduct in-depth discovery sessions with enterprise clients to document business requirements",
          "Map existing workflows and propose optimised, system-driven alternatives",
          "Write clear functional specifications for product and engineering teams",
          "Act as the bridge between client stakeholders and internal teams",
          "Validate delivered features against original requirements and user acceptance criteria",
        ],
      },
      {
        title: "Tasks & Responsibilities",
        bullets: [
          "Maintain a structured backlog of client requirements and change requests",
          "Support product managers in defining sprint priorities and release scope",
          "Create wireframes, user story maps, and process diagrams",
          "Conduct UAT sessions and document test outcomes",
          "Produce training material and onboarding guides for enterprise clients",
        ],
      },
      {
        title: "Skills & Experience",
        bullets: [
          "2–5 years of experience as a business analyst in an IT or enterprise software environment",
          "Strong documentation skills (BRDs, FRDs, user stories, process maps)",
          "Familiarity with ERP, CRM or workflow management systems",
          "Excellent communication and stakeholder management skills",
          "Experience with tools like JIRA, Confluence, Miro or Figma",
          "Understanding of Agile delivery methodologies",
        ],
      },
    ],
  },
];

export function getJob(slug: string): Job | undefined {
  return jobs.find((j) => j.slug === slug);
}
