import React from 'react';
import './Section8.css';
import { FaHeart, FaUser, FaCalendarAlt } from 'react-icons/fa';

// Placeholder images for the blog posts
import blog1 from './dt1.jpeg';  // Replace with actual images
import blog2 from './dt2.jpeg';
import blog3 from './dt3.jpg';

const Section8 = () => {
  const blogData = [
    {
      id: 1,
      image: blog1,
      category: 'MEDICAL',
      title: 'Medical Care Must Truly Transforming',
      author: 'Admin',
      date: 'Oct 12, 2026',
    },
    {
      id: 2,
      image: blog2,
      category: 'HEALTH',
      title: 'Best Health Safety Guide For Family Members',
      author: 'Admin',
      date: 'Oct 15, 2026',
    },
    {
      id: 3,
      image: blog3,
      category: 'CARE',
      title: 'Best Gynecologists Surgeons In Hospital',
      author: 'Admin',
      date: 'Oct 18, 2026',
    },
  ];

  return (
    <section className="sec8-section">
      <div className="sec8-container">
        
        {/* Header Area */}
        <div className="sec8-header-area">
          <div className="sec8-header-left">
            <div className="sec8-badge">
              <FaHeart className="sec8-badge-icon" /> OUR BLOG
            </div>
            <h2 className="sec8-heavy-heading">
              <span className="sec8-text-dark">Read Our Recent</span> <br />
              <span className="sec8-highlight-box">Insights & Blogs</span>
            </h2>
          </div>
          <div className="sec8-header-right">
            <p className="sec8-description-text">
              Fugiat at voluptatem quo. Occaecati hic nulla corporis curabitur facili quisque 
              exercitation, labore vol Repreh enderit. Parturient, id lorem unde inure.
            </p>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="sec8-grid">
          {blogData.map((post) => (
            <div className="sec8-card" key={post.id}>
              
              {/* Image with Overlapping Category Badge */}
              <div className="sec8-img-wrapper">
                <img src={post.image} alt={post.title} className="sec8-blog-img" />
                <div className="sec8-category-badge">{post.category}</div>
              </div>

              {/* Text Content */}
              <div className="sec8-card-content">
                <h3 className="sec8-blog-title">{post.title}</h3>
                
                {/* Meta Information (Author & Date) */}
                <div className="sec8-blog-meta">
                  <span className="sec8-meta-item">
                    <FaUser className="sec8-meta-icon" /> By {post.author}
                  </span>
                  <span className="sec8-meta-item">
                    <FaCalendarAlt className="sec8-meta-icon" /> {post.date}
                  </span>
                </div>
              </div>
              
            </div>
          ))}
        </div>

        {/* --- ADD THIS NEW BOTTOM BANNER AREA --- */}
        <div className="sec8-bottom-banner">
          <div className="sec8-banner-content">
            <span className="sec8-banner-text">Want to read more insights & news?</span>
            <button className="sec8-banner-btn">VIEW ALL BLOGS</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Section8;