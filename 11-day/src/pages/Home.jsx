import Navbar from "../components/navbar/Navbar"
import Hero from "../components/hero/Hero"
import BlogCard from "../components/blog/BlogCard"

import blogs from "../data/blogs"

const Home = () => {
  return (

    <div>

      <Navbar />

      <Hero />

      <section className="
      max-w-7xl mx-auto
      px-6 py-20
      ">

        <h2 className="
        text-4xl font-bold
        mb-10
        ">
          Trending Blogs
        </h2>

        <div className="
        grid md:grid-cols-2 lg:grid-cols-3
        gap-10
        ">

          {blogs.map((blog)=>(
            <BlogCard key={blog.id} blog={blog} />
          ))}

        </div>

      </section>

    </div>
  )
}

export default Home