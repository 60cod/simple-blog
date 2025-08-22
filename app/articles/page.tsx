'use client'

import { useState, useMemo } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'

export default function Articles() {
  const [searchQuery, setSearchQuery] = useState('')
  const articles = [
    {
      id: 1,
      title: "Getting Started with Next.js 14",
      excerpt: "Learn the fundamentals of Next.js 14 and build modern web applications with the latest features and improvements.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "Web Development"
    },
    {
      id: 2,
      title: "Understanding React Server Components",
      excerpt: "Deep dive into React Server Components and how they revolutionize the way we build React applications.",
      date: "Dec 12, 2024",
      readTime: "8 min read",
      category: "React"
    },
    {
      id: 3,
      title: "TypeScript Best Practices in 2024",
      excerpt: "Essential TypeScript patterns and practices every developer should know for writing maintainable code.",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      category: "TypeScript"
    },
    {
      id: 4,
      title: "Building Scalable APIs with Node.js",
      excerpt: "Learn how to design and implement robust, scalable APIs using Node.js and modern development practices.",
      date: "Dec 8, 2024",
      readTime: "10 min read",
      category: "Backend"
    },
    {
      id: 5,
      title: "CSS Grid vs Flexbox: When to Use What",
      excerpt: "A comprehensive guide to choosing between CSS Grid and Flexbox for your layout needs.",
      date: "Dec 5, 2024",
      readTime: "7 min read",
      category: "CSS"
    },
    {
      id: 6,
      title: "Introduction to Machine Learning with Python",
      excerpt: "Start your journey into machine learning with Python and explore fundamental concepts and libraries.",
      date: "Dec 3, 2024",
      readTime: "12 min read",
      category: "AI/ML"
    },
    {
      id: 7,
      title: "Docker Containerization for Beginners",
      excerpt: "Learn how to containerize your applications with Docker and streamline your development workflow.",
      date: "Nov 30, 2024",
      readTime: "9 min read",
      category: "DevOps"
    },
    {
      id: 8,
      title: "GraphQL vs REST: Making the Right Choice",
      excerpt: "Compare GraphQL and REST APIs to understand when to use each approach in your projects.",
      date: "Nov 28, 2024",
      readTime: "11 min read",
      category: "API Design"
    }
  ]

  const filteredArticles = useMemo(() => {
    if (!searchQuery) return articles
    
    return articles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  return (
    <main>
      <Header />
      <section className="page-header">
        <div className="container">
          <h1>All Articles</h1>
          <p>Explore our complete collection of tech articles and tutorials</p>
        </div>
      </section>
      <section className="articles-section">
        <div className="container">
          <div className="articles-controls">
            <SearchBar 
              onSearch={setSearchQuery} 
              placeholder="Search articles..."
            />
            <div className="articles-count">
              {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
            </div>
          </div>
          <div className="articles-grid">
            {filteredArticles.map(article => (
              <article key={article.id} className="article-card">
                <div className="article-category">{article.category}</div>
                <h2 className="article-title">{article.title}</h2>
                <div className="article-meta">
                  {article.date} • {article.readTime}
                </div>
                <p className="article-excerpt">{article.excerpt}</p>
                <a href={`/articles/${article.id}`} className="read-more">Read More →</a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}