// ─────────────────────────────────────────────────────────────────
//  CV CONTENT  —  edit this file to update your CV
//  No coding knowledge needed. Just change the text between quotes.
//  Save the file, then refresh cv.html in your browser.
// ─────────────────────────────────────────────────────────────────

const CV = {

  // ── Personal ────────────────────────────────────────────────────
  name:     "Jonas Kauko",
  role:     "Service Delivery Manager",
  email:    "jonas.kauko@gmail.com",
  phone:    "+358 44 970 0279",
  linkedin: "linkedin.com/in/jonaskauko",
  location: "Espoo, Finland",
  photo:    "pictures/DSC02724 copy.jpg",

  // ── Summary (shown at the top of the main column) ────────────────
  summary: "Service Delivery Manager at Matrix42 with a strong foundation in Service Management (ITSM/ESM), digital transformation, and process design. Skilled in bridging business, technology, and people — with 8+ years of experience across consulting, customer service, startups, and product development. Successfully delivered 90+ projects across 35+ customers. Currently responsible for all Swedish and Scandinavian Deliveries.",

  // ── Languages ────────────────────────────────────────────────────
  languages: [
    { name: "Swedish", level: "Native" },
    { name: "Finnish", level: "Native" },
    { name: "English", level: "Full Professional" },
  ],

  // ── Skills ───────────────────────────────────────────────────────
  softSkills: [
    "Project Management",
    "Service Design",
    "Customer-Centric UX",
    "Facilitation & Workshopping",
    "Communication",
    "Problem-Solving",
    "Prototyping",
  ],

  technicalSkills: [
    "Python & Jython",
    "SQL / SQL Server",
    "REST API · XML · SOAP",
    "Azure / Entra ID · MS Exchange",
    "PowerBI",
    "SAP S4/HANA",
    "Linux",
    "ITSM · SIAM · BPMN 2.0 · UML",
  ],

  // ── Certifications ───────────────────────────────────────────────
  certifications: [
    { name: "Certified Matrix42 Professional Administrator", issuer: "Efecte (Matrix42)", date: "Jan 2020" },
    { name: "Certified Visual Workflow Automation Admin",    issuer: "Efecte (Matrix42)", date: "Jan 2020" },
    { name: "ITIL® 4 Foundation Certificate in ITSM",       issuer: "PeopleCert",        date: "Jul 2022" },
  ],

  // ── Honors & Awards ──────────────────────────────────────────────
  awards: [
    { name: "Customer Values Award", issuer: "Matrix42", date: "Jan 2025" },
    { name: "One Efecte Award",      issuer: "Efecte",   date: "Jan 2023" },
  ],

  // ── Experience ───────────────────────────────────────────────────
  // Fields: company, location, dateRange, role, desc
  // Optional: bullets (array), subroles (array), tech (string)
  experience: [
    {
      company:   "Matrix42 (Efecte)",
      location:  "Espoo, Finland",
      dateRange: "Oct 2019 – Present",
      role:      "Delivery Manager, Sweden and Scandinavia",
      desc:      "Responsible for Swedish and Scandinavian service delivery and leading the consulting team. Key responsibilities include resource planning and allocation, effort estimation, solution design for customer engagements and RFPs, stakeholder collaboration across Sales, Product, and R&D, partner management, project governance, financial follow-up, service development, and the training and mentoring of consultants.",
      subroles: [
        {
          title: "Practice Lead",
          date:  "Dec 2023 – Present",
          desc:  "Practice Lead for Enterprise & IT Service Management. Developing process, tools, and best practices; internal enablement of new products and service packages; collaboration with Product and Sales.",
        },
        {
          title: "Solution Consultant",
          date:  "Feb 2022 – Dec 2023",
          desc:  "Planning, designing, and implementing Service Management and ITSM solutions. Advising customers on digitalising and automating workflows and technical processes.",
        },
        {
          title: "Jr. Solution Consultant",
          date:  "Jul 2020 – Feb 2022",
          desc:  "From Service Desk tickets to delivery projects — designing and building solutions for customers end to end.",
        },
        {
          title: "PMO Trainee",
          date:  "Oct 2019 – Jul 2020",
          desc:  "Project Management Office. Exporting and processing financial data for internal ERP implementation (NetSuite).",
        },
      ],
    },
    {
      company:   "Fabri Platform",
      location:  "Helsinki, Finland",
      dateRange: "Aug 2023 – Nov 2024",
      role:      "Co-Owner & Product Manager",
      desc:      "Responsible for product strategy and development at Fabri — a curated marketplace for independent creative fashion designers and brands worldwide.",
    },
    {
      company:   "Prism Protocol",
      location:  "Phuket, Thailand",
      dateRange: "Mar 2019 – May 2019",
      role:      "Project Lead (Internship)",
      desc:      "Internship at a software startup building a preventive eHealth platform. Led vendor selection project and planned Business Intelligence reports. Also worked on market research, B2B branding, and Go-To-Market strategy.",
    },
    {
      company:   "Power Finland",
      location:  "Helsinki, Finland",
      dateRange: "Aug 2016 – Oct 2019",
      role:      "Customer Technical Support & Installation Technician",
      desc:      "After-sales marketing — RMA management, technical customer support, and overseeing the installations team.",
    },
    {
      company:   "Dell EMC",
      location:  "Helsinki, Finland",
      dateRange: "Nov 2017 – Mar 2018",
      role:      "Market Research",
      desc:      "Comprehensive market research study on Dell's new Virtual Reality (VR) glasses for the public and private sectors. School project with a 4-person team over 5 months.",
    },
  ],

  // ── Education ────────────────────────────────────────────────────
  education: [
    {
      school: "LUT University",
      date:   "2022 – 2026",
      degree: "M.Sc. (Tech) · Industrial Engineering & Management",
      detail: "Major: Global Management of Innovation and Technology\nMinor: Software Development and Digital Transformation",
    },
    {
      school: "Metropolia University of Applied Sciences",
      date:   "2017 – 2021",
      degree: "B.Eng. · Industrial Engineering & Management",
      detail: "Major: International ICT-Business",
    },
    {
      school: "Brändö Gymnasium",
      date:   "2013 – 2016",
      degree: "Matriculation Examination",
    },
  ],

};
