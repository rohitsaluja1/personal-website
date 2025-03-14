
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/data/blogPosts';

const Blog = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <section className="py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Blog</h1>
          <div className="grid gap-6">
            {blogPosts.map(post => (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                readingTime={post.readingTime}
                author={post.author}
                className="h-full"
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
