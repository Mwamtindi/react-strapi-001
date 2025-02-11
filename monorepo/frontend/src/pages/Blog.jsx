import React from "react";
import { useParams } from "react-router-dom";

// Function to convert rich text to HTML
const renderRichText = (content) => {
  return content.map((block, index) => {
    switch (block.type) {
      case "paragraph":
        // Process each paragraph
        return (
          <p key={index}  style={{ textAlign: "left", marginBottom: "10px" }}>
            {block.children.map((child, childIndex) => {
              if (child.type === "text") {
                return child.text;
              }
              return null;
            })}
          </p>
        );
      // You can add more types like headings, lists, etc., if needed
      default:
        return null;
    }
  });
};

export default ({ posts }) => {
  const params = useParams();
  let post = posts.data.find((post) => post.id == params.id);

  if (!post) {
    return <p style={{ textAlign: "center" }}>Post not found</p>;
  }

  return (
    <div
      style={{
        maxWidth: "800px", // Sets a maximum width for the content box
        margin: "0 auto", // Centers the box horizontally
        padding: "20px",
        backgroundColor: "#f4f4f4",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center", // Center align heading
      }}
    >
      <h1
        style={{
          fontFamily: "Arial, sans-serif",
          color: "#333",
          fontSize: "2.5em",
        }}
      >
        {post.title}
      </h1>
      <p
        style={{
          fontFamily: "Arial, sans-serif",
          color: "#555",
          fontSize: "1.1em",
        }}
      >
        {new Date(post.publishedat).toLocaleString()}
      </p>

      {/* Render content */}
      <div
        style={{
          padding: "20px",
          backgroundColor: "white",
          border: "1px solid #ddd",
          borderRadius: "8px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.05)",
          marginTop: "30px",
          textAlign: "left", // Ensure content inside is aligned properly
        }}
      >
        {post.content && post.content.length > 0 ? (
          renderRichText(post.content)
        ) : (
          <p style={{ fontSize: "1.2em", color: "#888", textAlign: "center" }}>No content available</p>
        )}
      </div>
    </div>
  );
};

