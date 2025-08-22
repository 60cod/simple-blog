import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python",
    "PostgreSQL", "MongoDB", "Docker", "AWS", "Git", "GraphQL"
  ]

  const experience = [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies."
    },
    {
      role: "Frontend Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      description: "Built responsive web applications and collaborated with design teams to create exceptional user experiences."
    },
    {
      role: "Junior Developer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      description: "Developed features for mobile and web applications while learning modern development practices."
    }
  ]

  return (
    <main>
      <Header />
      <section className="page-header">
        <div className="container">
          <h1>About Me</h1>
          <p>Passionate developer sharing knowledge through code and writing</p>
        </div>
      </section>
      
      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Hello, I'm a Full Stack Developer</h2>
              <p>
                With over 5 years of experience in web development, I'm passionate about creating 
                efficient, scalable solutions and sharing knowledge with the developer community. 
                I specialize in modern JavaScript frameworks, cloud technologies, and building 
                user-centric applications.
              </p>
              <p>
                When I'm not coding, you'll find me writing technical articles, contributing to 
                open source projects, or exploring the latest trends in technology. I believe in 
                continuous learning and enjoy tackling complex problems with creative solutions.
              </p>
              <p>
                This blog is my way of documenting my journey, sharing insights, and helping 
                other developers navigate the ever-evolving world of technology.
              </p>
            </div>
            
            <div className="about-sidebar">
              <div className="skills-section">
                <h3>Skills & Technologies</h3>
                <div className="skills-grid">
                  {skills.map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="contact-section">
                <h3>Get In Touch</h3>
                <div className="contact-links">
                  <a href="mailto:hello@example.com" className="contact-link">Email</a>
                  <a href="https://github.com/example" className="contact-link">GitHub</a>
                  <a href="https://linkedin.com/in/example" className="contact-link">LinkedIn</a>
                  <a href="https://twitter.com/example" className="contact-link">Twitter</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="experience-section">
            <h2>Experience</h2>
            <div className="experience-timeline">
              {experience.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-header">
                    <h3>{exp.role}</h3>
                    <span className="experience-period">{exp.period}</span>
                  </div>
                  <h4 className="experience-company">{exp.company}</h4>
                  <p className="experience-description">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}