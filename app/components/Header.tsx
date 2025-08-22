import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">TechBlog</div>
          <div className="nav-right">
            <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/articles">Articles</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/about">About</a></li>
            </ul>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}