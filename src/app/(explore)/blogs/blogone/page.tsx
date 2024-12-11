import React from 'react';
import { Footer } from '../../components/Footer';
import blogData from '../../../../../blogs.json'; // Assuming you saved the JSON as blogData.json

const BlogDisplay: React.FC<{ blogId: string }> = ({ blogId }) => {
  const blog = blogData.blogs.find((b) => b.id === blogId);

  if (!blog) {
    return <p>Blog not found!</p>;
  }

  return (
    <>
      <div className="flex flex-col max-w-[70%] justify-center mx-auto p-6">
        {/* Main Title */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          {blog.mainTitle}
        </h1>

        {/* Hero Image */}
        <div className="flex w-full justify-center rounded-lg">
          <img
            src={blog.heroImage.src}
            alt={blog.heroImage.alt}
            className="rounded-[10px] flex w-[800px] mb-8"
          />
        </div>

        {/* Description */}
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          {blog.description}
        </p>

        {blog.sections.map((section, index) => (
          <React.Fragment key={index}>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {section.title}
            </h2>
            {section.image && (
              <div className="flex w-full justify-center rounded-lg">
                <img
                  src={section.image.src}
                  alt={section.image.alt}
                  className="rounded-[10px] flex w-[800px] mb-8"
                />
              </div>
            )}
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {section.content}
            </p>
          </React.Fragment>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default BlogDisplay;
