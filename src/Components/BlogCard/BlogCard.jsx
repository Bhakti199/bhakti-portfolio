import React from "react";
import "../ProjectCard/ProjectCard.css";
export const BlogCard = ({ blog }) => {
  return (
    <div className="project-card">
      <img src={blog.blogImg} alt="project-img" className="project-img" />
      <div className="card-content">
        <div className="margin-top-bottom-zero white-text blog-title">
          {blog.blogName}
        </div>
        <div className="white-text">{blog.blogDescription}</div>
        <a
          href={blog.blogLink}
          target="_blank"
          rel="noopener noreferrer"
          className="card-btn-container link"
        >
          <button className="card-btn white-text pointer live-btn">Read</button>
        </a>
      </div>
    </div>
  );
};
