
import React from 'react';
import { Waves, Briefcase, GraduationCap, FileText } from 'lucide-react';

const BlogHome = () => {
  // Work experience data
  const workExperience = [
    {
      id: 1,
      title: 'Head of AI',
      company: 'RightHub',
      location: 'Stockholm, Sweden',
      description: 'Helping build the future of Intellectual Property with AI.',
    },
    {
      id: 2,
      title: 'AI Engineer',
      company: 'Silo AI',
      location: 'Helsinki, Finland',
      description: 'Silo AI is Europe\'s largest private AI lab. I led projects in Generative AI.',
    },
    {
      id: 3,
      title: 'Founding AI Engineer & Research Lead',
      company: 'Flowrite',
      location: 'Helsinki, Finland',
      description: 'Joined as Engineer/Employee #1. Worked extensively with all things related to large language models like GPT-3, from leveraging their generation capabilities to build conversational AI agents to creating custom metrics to fight against their stochasticity. Also thoroughly explored the new paradigm of prompt engineering.',
    },
    {
      id: 4,
      title: 'AI Researcher',
      company: 'Aalto University',
      location: 'Espoo, Finland',
      description: 'Wrote the python implementation for the the library of the model agnostic explainable AI (XAI) algorithm called Contextual Importance and Utility (CIU) under the supervision of Dr. Kary Främling.',
    },
    {
      id: 5,
      title: 'Machine Learning Researcher',
      company: 'Aalto University',
      location: 'Espoo, Finland',
      description: 'Explainable AI (XAI) for medical medical images derived from the wireless capsule endoscopy (WCE) procedure. The objective of the project was to build a decision making support',
    },
    {
      id: 6,
      title: 'Co-founder',
      company: 'FOODL',
      location: 'Espoo, Finland',
      description: 'Build the largest food-sharing platform at Aalto University in Finland. The platform was open-sourced and is now run by community voluteers. I\'ve moved to a more passive role.',
    },
    {
      id: 7,
      title: 'Data Scientist – Thesis Worker',
      company: 'Futurice',
      location: 'Helsinki, Finland',
      description: 'Time series forecasting and explainable AI (XAI) for mutivariate time series forecating model to extract actionable insigts for sales strategy.',
    },
    {
      id: 8,
      title: 'ML Engineer - Internship',
      company: 'Aalto University',
      location: 'Helsinki, Finland',
      description: 'Built an IT support ticket classifer POC for IT services department to help expedite the customer support service process by roughly 50%.',
    },
    {
      id: 9,
      title: 'Co-founder and ML Developer',
      company: 'NeuroGuard',
      location: 'Berkeley, California',
      description: 'An attempt at personalized diagnostics for brain tumors patients.',
    },
    {
      id: 10,
      title: 'Co-founder and CEO',
      company: 'QB Middle East',
      location: '',
      description: 'Built a queue-busting platform to help bring down waiting time for users from hours to few mins at most places.',
    },
  ];

  // Education data
  const education = [
    {
      id: 1,
      year: '2018-2020',
      institution: 'KTH Royal Institute of Technology',
      location: 'Sweden'
    },
    {
      id: 2,
      year: '2018-2020',
      institution: 'Aalto University',
      location: 'Finland'
    },
    {
      id: 3,
      year: '2013-2017',
      institution: 'Birla Institute of Technology and Science (BITS), Pilani',
      location: 'India'
    },
  ];

  // Publications data
  const publications = [
    {
      id: 1,
      title: 'Explainable Artificial Intelligence for Human Decision Support System in the Medical Domain'
    },
    {
      id: 2,
      title: 'Towards a Rigorous Evaluation of Explainability for Multivariate Time Series'
    },
    {
      id: 3,
      title: 'Any sufficiently advanced technology is indistinguishable from Magic'
    },
  ];

  return (
    <div className="pt-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
      <section className="py-12">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold flex items-center gap-3 mb-6">
            <Waves className="text-yellow-400" size={32} /> Rohit Saluja
          </h1>
          
          {/* About section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p className="text-lg text-muted-foreground">
              I've always seen technology as an instrument of change. With recent advancements in AI and the newfound 
              ability to create and scale intelligence, I firmly believe we are witnessing the biggest breakthrough ever, 
              not just in technology. I am determined to leverage AI for large-scale impacts and play a small role in 
              creating a society of abundance in the upcoming decades.
            </p>
          </div>
          
          {/* Work Experience section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Briefcase size={24} className="text-yellow-400" /> Work Experience
            </h2>
            <div className="space-y-8">
              {workExperience.map(job => (
                <div key={job.id} className="border-l-2 border-yellow-400 pl-4 py-1 animate-on-scroll opacity-0 animate-fade-up">
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground mb-2">
                    <span className="font-medium">{job.company}</span>
                    {job.location && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground inline-block"></span>
                        <span>{job.location}</span>
                      </>
                    )}
                  </div>
                  <p className="text-muted-foreground">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap size={24} className="text-yellow-400" /> Education
            </h2>
            <div className="space-y-4">
              {education.map(edu => (
                <div key={edu.id} className="animate-on-scroll opacity-0 animate-fade-up">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono bg-secondary/50 px-2 py-1 rounded">{edu.year}</span>
                    <h3 className="text-lg font-bold">{edu.institution}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground ml-14">{edu.location}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Publications section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FileText size={24} className="text-yellow-400" /> Publications
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {publications.map(pub => (
                <li key={pub.id} className="text-muted-foreground animate-on-scroll opacity-0 animate-fade-up">
                  {pub.title}
                </li>
              ))}
            </ul>
          </div>
          
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
      </section>
    </div>
  );
};

export default BlogHome;
