import React from "react";

import BlogIndex from "./pages/BlogIndex.jsx";
import Blog from "./pages/Blog.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";

export default function App() {
  const {loading, error, data} = useFetch('https://blogstrapi-001.onrender.com/api/blog-posts?populate=*');
  if (loading) return <p>loading...</p>
  if (error) return console.log(error)


  return (
    <Router>
      <Routes>
      <Route path="/blog/:id" element={<Blog posts={data} />} />
      <Route path="/" element={<BlogIndex posts={data} />} />
      </Routes>
    </Router>
  );
}



