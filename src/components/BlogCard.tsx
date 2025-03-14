
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
    <article className={cn("blog-card p-6 rounded-lg transition-all duration-300 hover:shadow-md", className)}>
      <h2 className="text-xl font-bold mb-3 blog-title">{title}</h2>
      <p className="text-muted-foreground mb-4 blog-excerpt">{excerpt}</p>
      <div className="text-sm text-muted-foreground blog-meta flex flex-wrap gap-2">
        <span>{date}</span>
        <span>•</span>
        <span>{readingTime} read</span>
        <span>•</span>
        <span>{author}</span>
      </div>
    </article>
  );
};

export default BlogCard;
