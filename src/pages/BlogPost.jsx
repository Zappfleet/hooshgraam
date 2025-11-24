import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import SEO from '../components/common/SEO';
import { ArticleSchema, BreadcrumbSchema } from '../components/common/JsonLd';
import { blogPosts } from '../data/blogPosts';
import { trackBlogRead } from '../utils/analytics';
import './BlogPost.css';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    if (post) {
      trackBlogRead(post.title, post.readTime);
    }
  }, [post]);

  if (!post) {
    return (
      <div className="container section">
        <h1>مقاله یافت نشد</h1>
        <p>متأسفانه مقاله مورد نظر شما یافت نشد.</p>
      </div>
    );
  }

  const breadcrumbs = [
    { name: 'خانه', url: 'https://hooshgraam.ir/' },
    { name: 'وبلاگ', url: 'https://hooshgraam.ir/blog' },
    { name: post.title, url: `https://hooshgraam.ir/blog/${post.slug}` }
  ];

const renderContent = (content) => {
  const sections = content.split('\n\n');
  
  return sections.map((section, index) => {
    // تشخیص عنوان‌ها
    if (section.includes('بخش')) {
      return <h2 key={index}>{section}</h2>;
    }
    // تشخیص لیست‌ها
    if (section.includes('۱.') || section.includes('۲.')) {
      const items = section.split('\n').filter(line => line.trim());
      return (
        <ul key={index}>
          {items.map((item, i) => (
            <li key={i}>{item.replace(/^[۰-۹]+\./, '').trim()}</li>
          ))}
        </ul>
      );
    }
    // پاراگراف‌های عادی
    return <p key={index}>{section}</p>;
  });
};

  return (
    <>
      <SEO 
        title={`${post.title} | وبلاگ  هوشگرام`}
        description={post.excerpt}
        keywords={post.keywords}
        url={`/blog/${post.slug}`}
        type="article"
        article={true}
        publishedTime={post.date}
        author={post.author}
        image={post.image}
      />
      <ArticleSchema 
        title={post.title}
        description={post.excerpt}
        image={post.image}
        datePublished={post.date}
        author={post.author}
        url={`https://hooshgraam.ir/blog/${post.slug}`}
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <article className="blog-post">
        <div className="post-header">
          <div className="container">
            <div className="post-meta">
              <span className="category">{post.category}</span>
              <span className="date">{post.date}</span>
              <span className="read-time">⏱ {post.readTime}</span>
            </div>
           <div className="post-image">
          <img src={post.image} alt={post.title} />
            <h1 className="post-title">{post.title}</h1>
          
        </div>
            <div className="post-author">
              <span>نویسنده: {post.author}</span>
            </div>
          </div>
        </div>

       

        <div className="post-content">
          <div className="container">
            <div className="content-wrapper">
              <div className="post-body">
  {renderContent(post.content || post.excerpt)}
</div>

              <aside className="post-sidebar">
                <div className="sidebar-widget card">
                  <h3>درباره نویسنده</h3>
                  <div className="author-bio">
                    <div className="author-avatar">👤</div>
                    <h4>{post.author}</h4>
                    <p>متخصص بازاریابی دیجیتال و اینستاگرام</p>
                  </div>
                </div>

                <div className="sidebar-widget card">
                  <h3>برچسب‌ها</h3>
                  <div className="tags">
                    {post.tags.map((tag, index) => (
                      <span className="tag" key={index}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="sidebar-widget card">
                  <h3>اشتراک‌گذاری</h3>
                  <div className="share-buttons">
                    <button className="share-btn">📱 تلگرام</button>
                    <button className="share-btn">🔗 کپی لینک</button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPost;