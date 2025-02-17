import React, { useState } from "react";
import { Link } from "react-router-dom";
import TawkToChat from "../components/tawk";

const Blog = ({ posts }) => {
  const [visible, setVisible] = useState(7);
  const strapiUrl = "https://blogstrapi-001.onrender.com"; // Change this to your Strapi URL

  const onLoadMoreClick = () => {
    setVisible((v) => v + 6);
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>Blog Posts</h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          overflowX: "auto",
          padding: "10px",
        }}
      >
        {posts.data.slice(0, visible).map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                width: "300px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
                backgroundColor: "#f9f9f9",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div
                style={{
                  height: "200px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage: `url(${strapiUrl}${post.image?.url})`, // Ensure Strapi URL is prefixed
                }}
              ></div>

              <div style={{ padding: "15px" }}>
                <p style={{ fontSize: "12px", color: "#888" }}>
                  {new Date(post.publishedat).toLocaleString()}
                </p>
                <h2 style={{ fontSize: "18px", margin: "10px 0" }}>
                  {post.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <TawkToChat />
      {/* Load More Button */}
      {visible < posts.data.length && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            onClick={onLoadMoreClick}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Blog;
