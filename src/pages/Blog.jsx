import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import { blogPosts } from '../data/blogPosts';
import './Blog.css';

const Blog = () => {
  return (
    <>
      <SEO 
        title="وبلاگ  هوشگرام | آموزش اینستاگرام و بازاریابی محتوا"
        description="آخرین مقالات و راهنماهای تخصصی درباره مدیریت اینستاگرام، تولید محتوا و بازاریابی دیجیتال"
        keywords="وبلاگ اینستاگرام, آموزش اینستاگرام, بازاریابی محتوا, تولید محتوا"
        url="/blog"
      />

      <div className="blog-page">
        <div className="container">
          <div className="blog-header">
            <h1>وبلاگ  هوشگرام</h1>
            <p>آموزش‌ها، راهنماها و نکات تخصصی مدیریت اینستاگرام</p>
          </div>

          <div className="blog-grid">
            {blogPosts.map(post => (
              <article className="blog-card" key={post.id}>
                <Link to={`/blog/${post.slug}`}>
                  <img src={post.image} alt={post.title} />
                </Link>
                
                <div className="blog-card-content">
                  <div className="blog-meta">
                    <span className="category">{post.category}</span>
                    <span className="date">{post.date}</span>
                  </div>

                  <h2>
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p>{post.excerpt}</p>

                  <div className="blog-footer">
                    <span className="author">نویسنده: {post.author}</span>
                    <span className="read-time">⏱ {post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;