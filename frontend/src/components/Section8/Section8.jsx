import React from 'react';
import { FaHeart, FaUser, FaCalendarAlt } from 'react-icons/fa';

// Placeholder images for the blog posts - Ensure these paths match your actual assets!
import blog1 from '../assets/Jimg6.jpeg';  
import blog2 from '../assets/Jimg7.jpeg';
import blog3 from '../assets/Jimg8.jpeg';

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
    <section className="bg-[#f4f8fb] py-[80px]">
      <div className="max-w-[1200px] mx-auto px-[20px]">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-[20px] md:gap-[40px] mb-[60px]">
          <div className="flex-[1.2]">
            <div className="inline-flex items-center gap-[8px] bg-[#ffffff] text-[#de7223] py-[8px] px-[18px] rounded-[20px] text-[12px] font-[700] uppercase tracking-[1.5px] mb-[20px] shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
              <FaHeart className="text-[#15a083]" /> OUR BLOG
            </div>
            <h2 className="text-[32px] md:text-[42px] font-[900] leading-[1.3] m-0">
              <span className="text-[#273b47]">Read Our Recent</span> <br />
              <span className="bg-[#15a083] text-[#ffffff] px-[15px] py-[2px] inline-block mt-[5px]">Insights & Blogs</span>
            </h2>
          </div>
          <div className="flex-1 pb-[10px]">
            <p className="text-[#7a8a9e] text-[14px] leading-[1.8] m-0 font-['Segoe_UI',Tahoma,Geneva,sans-serif]">
              Fugiat at voluptatem quo. Occaecati hic nulla corporis curabitur facili quisque 
              exercitation, labore vol Repreh enderit. Parturient, id lorem unde inure.
            </p>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {blogData.map((post) => (
            
            // Card Container (Group added for image zoom hover effect)
            <div 
              className="group flex flex-col bg-[#ffffff] rounded-[20px] p-[20px] shadow-[0_10px_30px_rgba(39,59,71,0.04)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_15px_40px_rgba(39,59,71,0.08)] [-webkit-mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)] [mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)]" 
              key={post.id}
            >
              
              {/* Image with Overlapping Category Badge */}
              <div className="relative rounded-[15px] overflow-hidden h-[220px] mb-[25px]">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105" 
                />
                <div className="absolute bottom-[15px] left-[15px] bg-[#15a083] text-[#ffffff] py-[6px] px-[14px] rounded-[6px] text-[11px] font-[800] tracking-[1px] uppercase z-[2]">
                  {post.category}
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-[18px] font-[800] text-[#273b47] leading-[1.4] m-0 mb-[20px] cursor-pointer transition-colors duration-300 hover:text-[#15a083]">
                  {post.title}
                </h3>
                
                {/* Meta Information (Author & Date) */}
                <div className="flex items-center gap-[20px] mt-auto pt-[15px] border-t-[1px] border-[#eef2f6]">
                  <span className="flex items-center gap-[8px] text-[12px] font-[600] text-[#7a8a9e] uppercase">
                    <FaUser className="text-[#de7223] text-[14px]" /> By {post.author}
                  </span>
                  <span className="flex items-center gap-[8px] text-[12px] font-[600] text-[#7a8a9e] uppercase">
                    <FaCalendarAlt className="text-[#de7223] text-[14px]" /> {post.date}
                  </span>
                </div>
              </div>
              
            </div>
          ))}
        </div>

        {/* --- BOTTOM BANNER AREA --- */}
        <div className="flex justify-center mt-[50px]">
          <div className="bg-[#273b47] rounded-[40px] py-[15px] pr-[20px] pl-[20px] sm:pl-[35px] inline-flex flex-col sm:flex-row items-center gap-[15px] sm:gap-[30px] shadow-[0_10px_25px_rgba(39,59,71,0.2)]">
            <span className="text-[#ffffff] font-[600] text-[15px] text-center sm:text-left">
              Want to read more insights & news?
            </span>
            <button className="bg-transparent text-[#ffffff] border-[2px] border-[rgba(255,255,255,0.3)] py-[10px] px-[25px] rounded-[25px] font-[700] text-[13px] cursor-pointer transition-all duration-300 hover:bg-[rgba(255,255,255,0.1)] hover:border-[#ffffff] whitespace-nowrap">
              VIEW ALL BLOGS
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Section8;