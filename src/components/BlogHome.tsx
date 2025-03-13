
import React from 'react';
import { Wave } from 'lucide-react';
import BlogCard from './BlogCard';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: 'Reward Hacking in Reinforcement Learning',
    excerpt: 'Reward hacking occurs when a reinforcement learning (RL) agent exploits flaws or ambiguities in the reward function to achieve high rewards, without genuinely learning or completing the intended task...',
    date: 'November 28, 2024',
    readingTime: '37 min',
    author: 'Lilian Weng',
  },
  {
    id: 2,
    title: 'Extrinsic Hallucinations in LLMs',
    excerpt: 'Hallucination in large language models usually refers to the model generating unfaithful, fabricated, inconsistent, or nonsensical content. As a term, hallucination has been somewhat generalized to case...',
    date: 'July 7, 2024',
    readingTime: '30 min',
    author: 'Lilian Weng',
  },
  {
    id: 3,
    title: 'Diffusion Models for Video Generation',
    excerpt: 'Diffusion models have demonstrated strong results on image synthesis in past years. Now the research community has started working on a harder task - using it for video generation. The task itself is a...',
    date: 'March 15, 2024',
    readingTime: '25 min',
    author: 'Lilian Weng',
  },
];

const BlogHome = () => {
  return (
    <div className="pt-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
      <section className="py-12">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold flex items-center gap-3 mb-6">
            <Wave className="text-yellow-400" size={32} /> Welcome to Lil'Log
          </h1>
          <p className="text-lg text-muted-foreground">
            Hi, this is Lilian. I'm documenting my learning notes in this blog since 2017. Based on the number of 
            grammar mistakes in my posts, you can tell how much ChatGPT is involved 😄.
          </p>
          
          <div className="flex gap-6 mt-8">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground hover:text-foreground transition-colors">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a href="#" aria-label="Link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground hover:text-foreground transition-colors">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
            </a>
            <a href="#" aria-label="RSS">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground hover:text-foreground transition-colors">
                <path d="M4 11a9 9 0 0 1 9 9"></path>
                <path d="M4 4a16 16 0 0 1 16 16"></path>
                <circle cx="5" cy="19" r="1"></circle>
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground hover:text-foreground transition-colors">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>

        <div id="posts" className="space-y-8">
          {blogPosts.map(post => (
            <BlogCard 
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readingTime={post.readingTime}
              author={post.author}
              className="animate-on-scroll opacity-0 animate-fade-up"
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogHome;
