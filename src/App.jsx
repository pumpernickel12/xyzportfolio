const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'AWS',
  'Docker',
  'Git',
]

const projects = [
  {
    title: 'Nimbus Commerce',
    description:
      'A full-stack e-commerce platform with real-time inventory sync, payment flows, and a fast admin dashboard for modern online brands.',
    stack: 'React, Node.js, PostgreSQL, Stripe, Redis',
  },
  {
    title: 'Pulse Analytics',
    description:
      'A SaaS analytics dashboard that turns product and customer data into actionable insights with custom reporting and clean visualizations.',
    stack: 'React, Express, MongoDB, Charting APIs',
  },
  {
    title: 'SyncSpace',
    description:
      'A collaborative productivity app for teams featuring task management, notifications, shared workspaces, and role-based access control.',
    stack: 'React, Node.js, WebSockets, Docker',
  },
]

const experience = [
  {
    role: 'Senior Software Engineer',
    company: 'Vertex Labs',
    period: '2023 — Present',
    points: [
      'Built scalable web applications used by thousands of customers across multiple markets.',
      'Led frontend architecture decisions and improved performance, accessibility, and developer experience.',
      'Collaborated closely with design and product teams to launch polished user-facing features.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'BrightForge',
    period: '2020 — 2023',
    points: [
      'Developed full-stack features across customer portals, internal tools, and REST APIs.',
      'Introduced reusable component patterns that reduced UI development time across projects.',
      'Helped improve CI/CD workflows and deployment reliability.',
    ],
  },
]

function App() {
  return (
    <div className="page-shell">
      <div className="bg-orb orb-one" />
      <div className="bg-orb orb-two" />
      <header className="nav">
        <div className="brand">AC</div>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">Software Engineer • React • Node.js</span>
            <h1>Hi, I’m Alex Carter.</h1>
            <p className="hero-text">
              I design and build high-quality digital products with a strong focus on performance,
              elegant user experiences, and scalable engineering.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">View Projects</a>
              <a className="btn btn-secondary" href="#contact">Let’s Talk</a>
            </div>
            <div className="stats-grid">
              <div className="stat-card">
                <strong>6+</strong>
                <span>Years building products</span>
              </div>
              <div className="stat-card">
                <strong>20+</strong>
                <span>Shipped features & platforms</span>
              </div>
              <div className="stat-card">
                <strong>10</strong>
                <span>Core technologies</span>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="glass-card code-card">
              <div className="card-top">
                <span />
                <span />
                <span />
              </div>
              <pre>
                <code>{`const engineer = {
  name: 'Alex Carter',
  role: 'Software Engineer',
  strengths: ['Frontend', 'Backend', 'UI Systems'],
  passion: 'Building products users love',
}`}</code>
              </pre>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <span>About</span>
            <h2>Engineering thoughtful products end-to-end.</h2>
          </div>
          <div className="about-grid">
            <div className="glass-card about-card">
              <p>
                I’m a software engineer focused on crafting reliable, scalable, and visually polished
                applications. My work spans frontend development, backend systems, and the product
                thinking needed to turn ideas into experiences people genuinely enjoy using.
              </p>
              <p>
                I care deeply about clean architecture, maintainable code, performance, and design
                details that make software feel premium.
              </p>
            </div>
            <div className="glass-card skills-card">
              <h3>Core Skills</h3>
              <div className="skills-wrap">
                {skills.map((skill) => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <span>Projects</span>
            <h2>Selected work that blends engineering and product thinking.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="glass-card project-card">
                <div className="project-glow" />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-stack">{project.stack}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <span>Experience</span>
            <h2>Building products, systems, and teams that move fast.</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <div key={item.role} className="glass-card timeline-item">
                <div className="timeline-top">
                  <div>
                    <h3>{item.role}</h3>
                    <p className="company">{item.company}</p>
                  </div>
                  <span className="period">{item.period}</span>
                </div>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="glass-card contact-card">
            <span>Contact</span>
            <h2>Let’s build something exceptional.</h2>
            <p>
              Open to product engineering roles, freelance collaborations, and ambitious software
              projects.
            </p>
            <div className="contact-links">
              <a href="mailto:alex.carter.dev@example.com">alex.carter.dev@example.com</a>
              <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
