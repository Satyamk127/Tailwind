import { Link } from "react-router-dom"
import { FaPenNib } from "react-icons/fa"

const Navbar = () => {
  return (

    <nav className="
    sticky top-0 z-50
    backdrop-blur-xl
    bg-white/10
    border-b border-white/10
    ">

      <div className="
      max-w-7xl mx-auto
      px-6 py-4
      flex justify-between items-center
      ">

        <Link
          to="/"
          className="
          text-3xl font-bold
          bg-gradient-to-r
          from-blue-400
          to-cyan-400
          text-transparent
          bg-clip-text
          "
        >
          DevBlog
        </Link>

        <div className="flex items-center gap-6">

          <Link
            to="/"
            className="hover:text-blue-400"
          >
            Home
          </Link>

          <Link
            to="/create"
            className="
            flex items-center gap-2
            bg-blue-500
            px-5 py-2
            rounded-xl
            hover:bg-blue-600
            "
          >
            <FaPenNib />
            Write
          </Link>

        </div>

      </div>

    </nav>
  )
}

export default Navbar