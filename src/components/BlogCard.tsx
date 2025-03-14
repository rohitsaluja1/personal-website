
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface BlogPostProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  author: string;
  className?: string;
}

const BlogCard = ({ id, title, excerpt, date, readingTime, author, className }: BlogPostProps) => {
  return (
    <Link to={`/blog/${id}`} className="block">
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
    </Link>
  );
};

export default BlogCard;
