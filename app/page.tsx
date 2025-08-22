import Header from './components/Header'
import Hero from './components/Hero'
import StatsCounter from './components/StatsCounter'
import PostsSection from './components/PostsSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <StatsCounter />
      <PostsSection />
      <Footer />
    </main>
  )
}