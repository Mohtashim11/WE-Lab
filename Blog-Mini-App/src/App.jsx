import { useState } from 'react'
import { Routes, Route, Link, useParams } from 'react-router-dom'

// 1. Static Data 
const blogPosts = [
  { id: 1, title: "My First React App", content: "React is component-based!", author: "Usman" },
  { id: 2, title: "Why Vite?", content: "Vite is faster than CRA.", author: "Admin" },
  { id: 3, title: "Mastering Props", content: "Props pass data to children.", author: "Developer" }
];

// 2. Blog List Component (The "Home" page)
function BlogList() {
  return (
    <div className="post-grid">
      <h2>Latest Posts</h2>
      <div style={{ display: 'grid', gap: '20px' }}>
        {blogPosts.map(post => (
          <div key={post.id} style={{ border: '1px solid #ccc', padding: '15px' }}>
            <h3>{post.title}</h3>
            
            <Link to={`/post/${post.id}`}>Read Full Post</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// 3. Post Detail Component 
function PostDetail() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) return <h2>Post not found!</h2>;

  return (
    <div style={{ padding: '20px', border: '2px solid blue' }}>
      <h1>{post.title}</h1>
      <p><strong>By:</strong> {post.author}</p>
      <hr />
      <p>{post.content}</p>
      <Link to="/">← Back to Blog</Link>
    </div>
  );
}

// 4. Main App Component
export default function App() {
  return (
    <div className="App" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <nav>
        <h1>MINI BLOG APP</h1>
        <Link to="/">Home</Link>
      </nav>

      <hr />

      
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="*" element={<h2>404 - Page Not Found</h2>} /> 
      </Routes>
    </div>
  )
}