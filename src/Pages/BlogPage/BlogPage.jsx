import React from "react";
import { BlogCard } from "../../Components/BlogCard/BlogCard";
import { blogs } from "./BlogData";
import "./BlogPage.css";
export const BlogPage = () => {
  return (
    <div className="blog-page">
      {blogs.map((blog) => (
        <div key={blog.id}>
          <BlogCard blog={blog} />
        </div>
      ))}
    </div>
  );
};
