import React from "react";
import { useParams } from "react-router-dom";
import { Text } from "react-dom";


// Function to convert rich text to HTML
const renderRichText = (content) => {
  return content.map((block, index) => {
    switch (block.type) {
      case "paragraph":
        // Process each paragraph
        return (
          <p key={index}>
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
    return <p>Post not found</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{new Date(post.publishedat).toLocaleString()}</p>

      {/* Render content */}
      <div>
        <h2>Content</h2>
        {post.content && post.content.length > 0 ? (
          renderRichText(post.content)
        ) : (
          <p>No content available</p>
        )}
      </div>
    </div>
  );
};
