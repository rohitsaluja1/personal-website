
import React from 'react';
import { cn } from '@/lib/utils';

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  author: string;
  className?: string;
}

const BlogCard = ({ title, excerpt, date, readingTime, author, className }: BlogPostProps) => {
  return (
    <article className={cn("blog-card blog-post", className)}>
      <h2 className="blog-title">{title}</h2>
      <p className="blog-excerpt">{excerpt}</p>
      <div className="blog-meta post-metadata">
        Date: {date} | Estimated Reading Time: {readingTime} | Author: {author}
      </div>
    </article>
  );
};

export default BlogCard;
