"use client";
import React, { useState } from "react";
import Layout from "@/components/Layout";
const BlogPage = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "The Future of AI in Healthcare",
      content: "AI is transforming the healthcare industry in various ways...",
      author: "John Doe",
      likes: 0, // Initial like count
      comments: [
        { id: 1, text: "Great insights!", author: "Alice" },
        { id: 2, text: "Very informative!", author: "Bob" },
      ],
    },
    {
      id: 2,
      title: "The Rise of Quantum Computing",
      content: "Quantum computing is poised to revolutionize various industries...",
      author: "Jane Smith",
      likes: 0, // Initial like count
      comments: [{ id: 1, text: "Exciting times ahead!", author: "Charlie" }],
    },
  ]);

  const [newComment, setNewComment] = useState({ text: "", author: "" });
  // Function to handle like button click
  const handleLike = (id: number) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog.id === id ? { ...blog, likes: blog.likes + 1 } : blog
      )
    );
  };

  // Function to add a comment
  const handleAddComment = (id: number) => {
    if (newComment.text.trim() === "" || newComment.author.trim() === "") return;
    
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog.id === id
          ? {
              ...blog,
              comments: [
                ...blog.comments,
                { id: Date.now(), text: newComment.text, author: newComment.author },
              ],
            }
          : blog
      )
    );

    setNewComment({ text: "", author: "" });
  };

  return (
    <Layout>
    <main className="min-h-screen p-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-extrabold text-hospitalBlue mb-12 text-center">Blog</h1>

        <section>
          <h2 className="text-3xl font-semibold text-hospitalBlue mb-6">Blog Posts</h2>
          {blogs.map((blog) => (
            <div key={blog.id} className="mb-8 bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-medium text-hospitalBlue mb-3">{blog.title}</h3>
              <p className="text-gray-700 text-lg mb-4">{blog.content}</p>
              <p className="text-gray-500 text-sm mb-4">By {blog.author}</p>

              <div className="mb-4">
                <h4 className="text-xl font-semibold text-hospitalBlue mb-2">Comments</h4>
                {blog.comments.map((comment) => (
                  <div key={comment.id} className="mb-2">
                    <p className="text-gray-700 text-lg">{comment.text}</p>
                    <p className="text-gray-500 text-sm">- {comment.author}</p>
                  </div>
                ))}
              </div>

              {/* Like Button and Count */}
              <div className="flex items-center mb-4">
                <button
                  onClick={() => handleLike(blog.id)}
                  className="bg-hospitalBlue text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 mr-2"
                >
                  Like
                </button>
                <span className="text-gray-700">{blog.likes} {blog.likes === 1 ? "Like" : "Likes"}</span>
              </div>

              {/* Comment Input Section */}
              <div className="bg-gray-100 p-4 rounded">
                <input
                  type="text"
                  placeholder="Your Comment"
                  value={newComment.text}
                  onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
                  className="w-full mb-2 p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="Your Name"
                  value={newComment.author}
                  onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
                  className="w-full mb-2 p-2 border rounded"
                />
                <button
                  onClick={() => handleAddComment(blog.id)}
                  className="bg-hospitalBlue text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700"
                >
                  Add Comment
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main></Layout>
  );
};

export default BlogPage;
