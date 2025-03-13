
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
          
          {/* Quote section */}
          <div className="flex gap-6 mt-8">
            <a href="mailto:contact@example.com" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground hover:text-foreground transition-colors">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground hover:text-foreground transition-colors">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground hover:text-foreground transition-colors">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" aria-label="Google">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground hover:text-foreground transition-colors">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M17.13 17.21c-.88.42-1.88.66-2.97.66-3.31 0-6-2.24-6-5.01S10.85 7.86 14.16 7.86c1.35 0 2.52.32 3.43.85"></path>
                <path d="M17.5 10H20v1h-2.5"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      {/* Quote section */}
      <div className="w-full py-12 bg-[#1a1a1a] -mx-6 mt-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="text-xl md:text-2xl font-medium text-foreground/90">
            "Any sufficiently advanced technology is indistinguishable from Magic"
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogHome;
