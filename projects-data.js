// ─────────────────────────────────────────────────────────────────
//  PROJECTS CONTENT  —  edit this file to update your projects
// ─────────────────────────────────────────────────────────────────

const PROJECTS = {

  name:     "Jonas Kauko",
  role:     "Service Delivery Manager",
  email:    "jonas.kauko@gmail.com",
  location: "Espoo, Finland",

  intro: "Across six years at Efecte and Matrix42, I have delivered 90+ projects spanning enterprise ITSM transformations, public-sector platform rollouts, system integrations, and long-term managed services — ranging from targeted consulting engagements to multi-year programmes worth 200k+€.",

  // ── AGGREGATE STATS ──────────────────────────────────────────
  stats: {
    kpis: [
      { number: "90+",       label: "Projects delivered" },
      { number: "8+",        label: "Industries served"  },
      { number: "2020–2026", label: "Active years"       },
      { number: "200k+€",    label: "Largest contract"   },
    ],
    deliveryTypes: [
      { label: "Implementation Project (ITSM/ESM)", count: 37 },
      { label: "Continuous development & Consulting", count: 38 },
      { label: "Integrations",                       count:  8 },
      { label: "Training",                           count:  7 },
    ],
    sectors: [
      { label: "IT & Technology",          count: 22 },
      { label: "Public Sector",            count: 15 },
      { label: "Industrial & Mfg.",        count: 10 },
      { label: "Insurance & Finance",      count: 10 },
      { label: "Healthcare & Non-profit",  count:  9 },
      { label: "Retail & Consumer",        count:  9 },
      { label: "Security & Building",      count:  9 },
      { label: "Education & Legal",        count:  6 },
    ],
  },

  // ── FEATURED PROJECTS (edit descriptions to taste) ───────────
  projects: [
    {
      name:      "Enterprise service & ERP transformation",
      company:   "Private sector (Enterprise)",
      dateRange: "Nov 2020 – Dec 2023",
      desc:      "Led a three-year, multi-workstream enterprise service management and ERP transformation for a major private-sector organisation. Oversaw end-to-end platform adoption, process standardisation, and stakeholder alignment at scale — the largest single engagement of my tenure.",
      tags:      ["Implementation Project (ITSM/ESM)", "200k+ €", "250+ consultant-days"],
    },
    {
      name:      "Platform implementation (long-term municipal contract)",
      company:   "Public sector (Municipality)",
      dateRange: "Aug 2023 – Mar 2027",
      desc:      "Multi-year ITSM platform rollout for a Finnish municipality. Managing delivery across implementation, go-live, and a sustained post-live maturity phase — a contract built on a prior successful engagement with the same customer.",
      tags:      ["Implementation Project (ITSM/ESM)", "100–200k €", "100+ consultant-days"],
    },
    {
      name:      "ITSM implementation with training & integration",
      company:   "Private sector (Enterprise)",
      dateRange: "Aug 2024 – Nov 2025",
      desc:      "Complex multi-faceted delivery combining full ITSM platform implementation, end-user training programme, and technical integration work. Managed cross-functional teams and coordinated stakeholder sign-offs across parallel tracks.",
      tags:      ["Implementation Project (ITSM/ESM)", "Training", "Integrations", "100–200k €"],
    },
    {
      name:      "Long-running care engagement (Insurance)",
      company:   "Insurance",
      dateRange: "Jan 2024 – Sep 2026",
      desc:      "Ongoing managed service engagement for a leading insurance company. Responsible for SLA governance, service review cadence, continuous improvement, and platform support throughout an extended multi-year contract.",
      tags:      ["Continuous development", "100–200k €", "100+ consultant-days"],
    },
    {
      name:      "Municipal ITSM platform rollout",
      company:   "Public sector (Municipality)",
      dateRange: "Apr 2023 – Apr 2024",
      desc:      "End-to-end ITSM platform implementation for a Finnish municipality, delivered within a 12-month engagement. Managed scoping, configuration, user acceptance testing, and go-live handover.",
      tags:      ["Implementation Project (ITSM/ESM)", "50–100k €", "50+ consultant-days"],
    },
    {
      name:      "Whistleblowing solution implementation",
      company:   "Private sector (Enterprise)",
      dateRange: "Nov 2021 – Mar 2023",
      desc:      "Compliance-driven deployment of a whistleblowing solution meeting EU directive requirements. Managed from initial scoping and solution design through configuration, testing, and go-live — coordinating legal, HR, and IT stakeholders.",
      tags:      ["Implementation Project (ITSM/ESM)", "Compliance", "10–20k €"],
    },
    {
      name:      "Integration & connectivity implementation",
      company:   "Private sector (Enterprise)",
      dateRange: "Mar 2022 – Sep 2023",
      desc:      "Technical integration engagement connecting the ITSM platform with enterprise systems. Oversaw solution design, integration testing, and structured handover to the customer's operations team.",
      tags:      ["Integrations", "10–20k €"],
    },
  ],

};
