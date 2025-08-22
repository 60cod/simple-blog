export default function PostsSection() {
  const posts = [
    {
      id: 1,
      title: "Getting Started with Next.js 14",
      excerpt: "Learn the fundamentals of Next.js 14 and build modern web applications with the latest features and improvements.",
      date: "Dec 15, 2024",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Understanding React Server Components",
      excerpt: "Deep dive into React Server Components and how they revolutionize the way we build React applications.",
      date: "Dec 12, 2024",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "TypeScript Best Practices in 2024",
      excerpt: "Essential TypeScript patterns and practices every developer should know for writing maintainable code.",
      date: "Dec 10, 2024",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Building Scalable APIs with Node.js",
      excerpt: "Learn how to design and implement robust, scalable APIs using Node.js and modern development practices.",
      date: "Dec 8, 2024",
      readTime: "10 min read"
    },
    {
      id: 5,
      title: "CSS Grid vs Flexbox: When to Use What",
      excerpt: "A comprehensive guide to choosing between CSS Grid and Flexbox for your layout needs.",
      date: "Dec 5, 2024",
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "Introduction to Machine Learning with Python",
      excerpt: "Start your journey into machine learning with Python and explore fundamental concepts and libraries.",
      date: "Dec 3, 2024",
      readTime: "12 min read"
    }
  ]

  return (
    <section className="posts-section">
      <div className="container">
        <h2 className="section-title">Recent Articles</h2>
        <div className="posts-grid">
          {posts.map(post => (
            <article key={post.id} className="post-card">
              <div className="post-meta">
                {post.date} • {post.readTime}
              </div>
              <h3 className="post-title">{post.title}</h3>
              <p className="post-excerpt">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}