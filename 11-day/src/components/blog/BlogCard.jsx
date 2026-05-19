import { Link } from "react-router-dom"
import { FaHeart } from "react-icons/fa"
import { motion } from "framer-motion"

const BlogCard = ({ blog }) => {
  return (

    <motion.div
      whileHover={{ y:-10 }}
      className="
      bg-slate-900
      rounded-3xl
      overflow-hidden
      border border-white/10
      "
    >

      <img
        src={blog.image}
        alt=""
        className="
        h-60 w-full
        object-cover
        hover:scale-110
        duration-500
        "
      />

      <div className="p-6">

        <h2 className="text-2xl font-bold mb-3">
          {blog.title}
        </h2>

        <p className="text-slate-400 mb-6">
          {blog.description}
        </p>

        <div className="flex justify-between items-center">

          <Link
            to={`/blog/${blog.id}`}
            className="
            bg-blue-500
            px-5 py-2
            rounded-xl
            hover:bg-blue-600
            "
          >
            Read More
          </Link>

          <div className="
          flex items-center gap-2
          text-pink-500
          ">
            <FaHeart />
            {blog.likes}
          </div>

        </div>

      </div>

    </motion.div>
  )
}

export default BlogCard