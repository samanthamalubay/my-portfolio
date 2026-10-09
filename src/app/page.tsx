import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";

const experiences = [
  {
    id: "dxc-l2",
    title: "L2 IT Infrastructure Specialist",
    company: "DXC Technology",
    period: "May 2025 – April 2026",
    description:
      "Provided enterprise technical support, resolved hardware and software issues, administered user accounts in Active Directory and Microsoft Entra ID, and documented incidents using ServiceNow.",
  },
  {
    id: "dxc-l1",
    title: "L1 IT Technical Support",
    company: "DXC Technology",
    period: "July 2023 – April 2025",
    description:
      "Provided first-line technical support, assisted users with account access and application troubleshooting, and managed incident tickets and escalations through ServiceNow.",
  },
];

const skillCategories = [
  {
    id: "identity",
    title: "Identity & Endpoint Management",
    description:
      "Account administration, access provisioning, identity support, and endpoint troubleshooting.",
    skills: [
      "Active Directory",
      "Microsoft Entra ID",
      "Okta",
      "CyberArk",
      "Microsoft Intune",
    ],
  },
  {
    id: "networking",
    title: "Networking & Infrastructure",
    description:
      "Enterprise network connectivity troubleshooting, Zscaler connection support, and hands-on configuration of Windows Server, DNS, DHCP, and Group Policy in a virtual lab environment.",
    skills: [
      "TCP/IP",
      "DNS",
      "DHCP",
      "Zscaler",
      "Windows Server 2019",
      "Group Policy",
    ],
  },
  {
    id: "support",
    title: "IT Support & Troubleshooting",
    description:
      "End-user technical assistance, diagnosing hardware and software issues, troubleshooting system problems, and resolving IT incidents.",
    skills: [
      "Windows 10/11",
      "Hardware/Software Troubleshooting",
      "Remote Desktop Support",
      "Incident Resolution",
    ],
  },
  {
    id: "service-management",
    title: "Enterprise IT Tools & Service Management",
    description:
      "Incident and ticket management, priority-based ticket handling, troubleshooting documentation, and remote support operations.",
    skills: [
      "ServiceNow",
      "BeyondTrust (Bomgar)",
      "TeamViewer",
      "RDP",
      "Ticket Management",
    ],
  },
  {
    id: "cloud",
    title: "Cloud Technologies",
    description:
      "Hands-on experience deploying and integrating AWS cloud services through a serverless web application project.",
    skills: [
      "AWS",
      "S3",
      "CloudFront",
      "Lambda",
      "DynamoDB",
      "API Gateway",
    ],
  },
];

const projects = [
  {
    id: "cloud-commerce",
    title: "Cloud Commerce Project",
    description:
      "A serverless e-commerce application built using AWS cloud services, featuring product browsing and a developing checkout workflow.",
    technologies: [
      "AWS",
      "S3",
      "CloudFront",
      "Lambda",
      "DynamoDB",
      "API Gateway",
    ],
    href: "/projects/cloud-commerce",
  },
];


export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <a
            href="#home"
            className="font-mono text-xl font-bold tracking-tight text-primary-light"
          >
            SAMANTHA MALUBAY
          </a>

          <div className="flex flex-wrap gap-5 text-sm text-muted">
            <a href="#about" className="hover:text-primary-light">
              About & Experience
            </a>
            <a href="#projects" className="hover:text-primary-light">
              Projects
            </a>
            <a href="#contact" className="hover:text-primary-light">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-6">
        {/* Hero */}
        <section
          id="home"
          className="flex min-h-[75vh] flex-col justify-center py-24"
        >
          <p className="mb-6 font-mono text-sm tracking-widest text-primary-light">
            IT / CLOUD / SOFTWARE / DATA
          </p>

          {/*<h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Building systems
            <br />
            that{" "}
            <span className="text-primary-light">
              solve problems.
            </span>
          </h1>*/}

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
            I&apos;m an IT professional with experience in enterprise
            technical support, currently pursuing graduate studies
            in Information Technology and expanding into cloud
            computing and software development.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-light hover:text-background"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-border px-6 py-3 font-medium transition-colors hover:border-primary-light hover:text-primary-light"
            >
              Get in Touch
            </a>
          </div>
        </section>

        
        {/* About & Experience */}
        <section
          id="about"
          className="scroll-mt-28 border-t border-border py-24"
        >
          <p className="mb-4 font-mono text-2xl text-primary-light">
            01 / ABOUT & EXPERIENCE
          </p>

          {/*<h2 className="mb-10 text-3xl font-bold sm:text-4xl">
            About me
          </h2>*/}

          {/* Two-column layout */}
          <div className="grid gap-8 lg:grid-cols-5">

            {/* Left column: 3/5 of available width */}
              <div className="lg:col-span-3">
                <div className="rounded-lg border border-border bg-card p-6">
                  <h3 className="mb-6 text-xl font-semibold">
                    Work Experience
                  </h3>

                  {/* Experience timeline */}
                  <div className="relative ml-2 border-l-2 border-primary/40 pl-6">
                    {experiences.map((experience) => (
                      <div
                        key={experience.id}
                        className="relative mb-6 last:mb-0"
                      >
                        {/* Timeline marker */}
                        <span className="absolute -left-7.75 top-6 h-3 w-3 rounded-full border-2 border-primary-light bg-background" />

                        <ExperienceCard
                          title={experience.title}
                          company={experience.company}
                          period={experience.period}
                          description={experience.description}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>


            {/* Right column: 2/5 of available width */}
            <div className="space-y-8 lg:col-span-2">

              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="text-xl font-semibold">
                  Education
                </h3>
                
                <div className="mt-6 space-y-6">
                  {/* Graduate studies */}
                  <div>
                    <p className="mb-2 font-mono text-xs text-primary-light">
                      IN PROGRESS
                    </p>

                    <h4 className="font-semibold text-foreground">
                      Master in Information Technology
                    </h4>

                    <p className="mt-1 text-sm text-muted">
                      Ateneo de Davao University
                    </p>

                    <p className="mt-1 text-xs text-muted">
                      Professional Track
                    </p>
                  </div>

                  <div className="border-t border-border pt-6">
                    <p className="mb-2 font-mono text-xs text-primary-light">
                      FEBRUARY 2020
                    </p>

                    <h4 className="font-semibold text-foreground">
                      BS in Electronics Engineering
                    </h4>

                    <p className="mt-1 text-sm text-muted">
                      De La Salle University – Manila
                    </p>

                    <p className="mt-2 text-xs text-muted">
                      Electronics Engineering Licensure Exam Passer
                      (October 2022)
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

          <div className="mt-8 rounded-lg border border-border bg-card p-6">
                <h3 className="text-xl font-semibold">
                  Technical Skills
                </h3>
                
                <div className="mt-6 grid gap-8 md:grid-cols-2">
                  {skillCategories.map((category, index) => (
                    <div key={category.id} className="space-y-3">
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-sm text-primary-light">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h4 className="text-base font-semibold text-foreground">
                          {category.title}
                        </h4>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-md border border-border bg-surface px-3 py-1.5 text-xs text-muted"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <p className="text-sm leading-relaxed text-muted">
                        {category.description}
                      </p>
                    </div>
                  ))}
                </div>
          </div>

        </section>


        {/* Projects */}
        <section
          id="projects"
          className="scroll-mt-28 border-t border-border py-24"
        >
          <p className="mb-4 font-mono text-2xl text-primary-light">
            02 / PROJECTS
          </p>
          {/*<h2 className="text-3xl font-bold sm:text-4xl">
            Things I&apos;ve built.
          </h2>*/}
          <p className="mt-6 max-w-2xl leading-relaxed text-muted">
            A growing collection of practical projects exploring cloud
            infrastructure, web development, and data engineering.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                href={project.href}
              />
            ))}
          </div>
        </section>

        
        {/* Contact */}
        <section
            id="contact"
            className="scroll-mt-28 border-t border-border py-24"
          >
            <h2 className="font-mono text-2xl text-primary-light">
              03 / CONTACT
            </h2>

            <div className="mt-12 max-w-2xl">
              <h3 className="text-4xl font-bold tracking-tight md:text-2xl">
                Let&apos;s connect.
              </h3>

              <p className="mt-6 leading-relaxed text-muted">
                Interested in discussing technology, projects, or
                opportunities? Feel free to reach out.
              </p>

              <a
                href="mailto:samantha.malubay@gmail.com"
                className="mt-8 inline-block text-lg font-medium text-primary-light hover:underline"
              >
                samantha.malubay@gmail.com ↗
              </a>
            </div>
        </section>


        {/* Footer */}
        <footer className="flex flex-col gap-4 border-t border-border py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            © 2026 Samantha Malubay
          </p>

          <a
            href="#top"
            className="text-sm font-medium text-primary-light hover:underline"
          >
            Back to top ↑
          </a>
        </footer>

      </main>

    </div>
  );
}
