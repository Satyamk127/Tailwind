import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import CreateBlog from "../pages/CreateBlog"
import BlogPage from "../pages/BlogPage"
import NotFound from "../pages/NotFound"

const AppRoutes = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/create" element={<CreateBlog />} />

        <Route path="/blog/:id" element={<BlogPage />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  )
}

export default AppRoutes