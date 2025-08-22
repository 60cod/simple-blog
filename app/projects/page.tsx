import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe integration for seamless online shopping experience.",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      status: "Completed",
      github: "https://github.com/example/ecommerce",
      demo: "https://ecommerce-demo.com"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      status: "In Progress",
      github: "https://github.com/example/taskmanager",
      demo: null
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current conditions, forecasts, and weather maps using multiple weather APIs.",
      tech: ["Vue.js", "Chart.js", "Weather API", "Tailwind CSS"],
      status: "Completed",
      github: "https://github.com/example/weather-dashboard",
      demo: "https://weather-dashboard-demo.com"
    },
    {
      id: 4,
      title: "AI Content Generator",
      description: "An AI-powered content generation tool that helps create blog posts, social media content, and marketing copy using OpenAI API.",
      tech: ["Python", "FastAPI", "OpenAI API", "React"],
      status: "Completed",
      github: "https://github.com/example/ai-content-gen",
      demo: "https://ai-content-demo.com"
    },
    {
      id: 5,
      title: "Cryptocurrency Tracker",
      description: "A real-time cryptocurrency tracking application with portfolio management, price alerts, and market analysis features.",
      tech: ["React Native", "Redux", "CoinGecko API", "Firebase"],
      status: "In Progress",
      github: "https://github.com/example/crypto-tracker",
      demo: null
    },
    {
      id: 6,
      title: "Code Snippet Manager",
      description: "A developer tool for organizing, searching, and sharing code snippets with syntax highlighting and tagging system.",
      tech: ["Electron", "TypeScript", "SQLite", "Monaco Editor"],
      status: "Planning",
      github: null,
      demo: null
    }
  ]

  return (
    <main>
      <Header />
      <section className="page-header">
        <div className="container">
          <h1>My Projects</h1>
          <p>A showcase of my development work and technical experiments</p>
        </div>
      </section>
      <section className="projects-section">
        <div className="container">
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className={`project-status status-${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                      GitHub →
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} className="project-link demo-link" target="_blank" rel="noopener noreferrer">
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}