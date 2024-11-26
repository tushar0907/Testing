import React from 'react';
import BlogLayout from '../layoutt/index';

const BlogDisplay: React.FC = () => {
  return (
    <div className="flex w-full justify-around flex-wrap mx-auto p-6 space-y-6">
      <BlogLayout
        title="How Ma’s Recipes Built a Leading Burmese Cuisine Brand"
        description="Discover how childhood friends Ankit Gupta and Chirag Chhajer brought Burma’s hidden treasures to India through a unique dining experience."
        imageUrl="https://zomatoblog.com/wp-content/uploads/2024/11/Burma-Burma-changes.png"
      />
      <BlogLayout
        title="Exploring the Flavors of Traditional Burmese Cuisine"
        description="A journey into the aromatic spices and unique culinary traditions that define Burmese dishes."
        imageUrl="https://zomatoblog.com/wp-content/uploads/2024/11/Burma-Burma-changes.png"
      />
      <BlogLayout
        title="From Kitchen to Fame: The Story Behind Burma’s Delights"
        description="Learn how authentic family recipes have been reimagined to create a culinary empire."
        imageUrl="https://zomatoblog.com/wp-content/uploads/2024/11/Burma-Burma-changes.png"
      />
    </div>
  );
};

export default BlogDisplay;
