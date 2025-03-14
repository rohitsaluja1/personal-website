
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';

const Blog = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Explainable AI: The Next Frontier",
      excerpt: "Exploring how we can make AI systems more transparent and understandable to gain user trust.",
      date: "May 15, 2023",
      readingTime: "5 min",
      author: "Rohit Saluja"
    },
    {
      id: 2,
      title: "Large Language Models: Opportunities and Challenges",
      excerpt: "An in-depth look at how LLMs are transforming industries and the ethical considerations we must address.",
      date: "April 2, 2023",
      readingTime: "8 min",
      author: "Rohit Saluja"
    },
    {
      id: 3,
      title: "The Future of Intellectual Property in the AI Era",
      excerpt: "How AI is reshaping our understanding of intellectual property and what it means for creators and businesses.",
      date: "March 10, 2023",
      readingTime: "6 min",
      author: "Rohit Saluja"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <section className="py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Blog</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map(post => (
              <BlogCard
                key={post.id}
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
