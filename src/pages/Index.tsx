import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Waves, Briefcase, GraduationCap, FileText } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    const addVisible = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        if (element.classList.contains('visible')) return;
        
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight * 0.85) {
          element.classList.add('visible');
        }
      });
    };
    
    addVisible();
    
    window.addEventListener('scroll', addVisible);
    
    return () => {
      window.removeEventListener('scroll', addVisible);
    };
  }, []);

  const workExperience = [
    {
      id: 1,
      title: 'Head of AI',
      company: 'RightHub',
      companyUrl: 'https://www.righthub.com',
      location: 'Stockholm, Sweden',
      description: 'Helping build the future of Intellectual Property with AI.',
    },
    {
      id: 2,
      title: 'AI Engineer',
      company: 'AMD Silo AI',
      companyUrl: 'https://www.silo.ai',
      location: 'Helsinki, Finland',
      description: 'Silo AI is Europe\'s largest private AI lab. I led projects in Generative AI.',
      nowPart: 'now part of AMD'
    },
    {
      id: 3,
      title: 'Founding AI Engineer & Research Lead',
      company: 'Flowrite',
      companyUrl: 'https://www.flowrite.com',
      location: 'Helsinki, Finland',
      description: 'Joined as Engineer/Employee #1. Worked extensively with all things related to large language models like GPT-3, from leveraging their generation capabilities to build conversational AI agents to creating custom metrics to fight against their stochasticity. Also thoroughly explored the new paradigm of prompt engineering.',
      nowPart: 'now part of MailMaestro'
    },
    {
      id: 4,
      title: 'AI Researcher',
      company: 'Aalto University',
      companyUrl: 'https://www.aalto.fi',
      location: 'Espoo, Finland',
      description: 'Wrote the python implementation for the the library of the model agnostic explainable AI (XAI) algorithm called Contextual Importance and Utility (CIU) under the supervision of Dr. Kary Främling.',
    },
    {
      id: 5,
      title: 'Machine Learning Researcher',
      company: 'Aalto University',
      companyUrl: 'https://www.aalto.fi',
      location: 'Espoo, Finland',
      description: 'Explainable AI (XAI) for medical medical images derived from the wireless capsule endoscopy (WCE) procedure. The objective of the project was to build a decision making support',
    },
    {
      id: 6,
      title: 'Co-founder',
      company: 'FOODL',
      companyUrl: '#',
      location: 'Espoo, Finland',
      description: 'Build the largest food-sharing platform at Aalto University in Finland. The platform was open-sourced and is now run by community voluteers. I\'ve moved to a more passive role.',
    },
    {
      id: 7,
      title: 'Data Scientist – Thesis Worker',
      company: 'Futurice',
      companyUrl: 'https://www.futurice.com',
      location: 'Helsinki, Finland',
      description: 'Time series forecasting and explainable AI (XAI) for mutivariate time series forecating model to extract actionable insigts for sales strategy.',
    },
    {
      id: 8,
      title: 'ML Engineer - Internship',
      company: 'Aalto University',
      companyUrl: 'https://www.aalto.fi',
      location: 'Helsinki, Finland',
      description: 'Built an IT support ticket classifer POC for IT services department to help expedite the customer support service process by roughly 50%.',
    },
    {
      id: 9,
      title: 'Co-founder and ML Developer',
      company: 'NeuroGuard',
      companyUrl: '#',
      location: 'Berkeley, California',
      description: 'An attempt at personalized diagnostics for brain tumors patients.',
    },
    {
      id: 10,
      title: 'Co-founder and CEO',
      company: 'QB Middle East',
      companyUrl: '#',
      location: '',
      description: 'Built a queue-busting platform to help bring down waiting time for users from hours to few mins at most places.',
    },
  ];

  const education = [
    {
      id: 1,
      institution: 'KTH Royal Institute of Technology',
      url: 'https://www.kth.se',
      location: 'Sweden',
      degree: 'Master of Science (M.Sc.)'
    },
    {
      id: 2,
      institution: 'Aalto University',
      url: 'https://www.aalto.fi',
      location: 'Finland',
      degree: 'Master of Science (M.Sc.)'
    },
    {
      id: 3,
      institution: 'Birla Institute of Technology and Science (BITS), Pilani',
      url: 'https://www.bits-pilani.ac.in',
      location: 'India',
      degree: 'Bachelor of Engineering (B.E.)'
    },
  ];

  const publications = [
    {
      id: 1,
      title: 'Explainable Artificial Intelligence for Human Decision Support System in the Medical Domain',
      link: 'https://www.mdpi.com/2504-4990/3/3/37'
    },
    {
      id: 2,
      title: 'Towards a Rigorous Evaluation of Explainability for Multivariate Time Series',
      link: 'https://arxiv.org/abs/2104.04075'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
        <section className="py-12">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold flex items-center gap-3 mb-6">
              <Waves className="text-yellow-400" size={32} /> Rohit Saluja
            </h1>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">About</h2>
              <p className="text-lg text-muted-foreground">
                I've always seen technology as an instrument of change. With recent advancements in AI and the newfound 
                ability to create and scale intelligence, I firmly believe we are witnessing the biggest breakthrough ever, 
                not just in technology. I am determined to leverage AI for large-scale impacts and play a small role in 
                creating a society of abundance in the upcoming decades.
              </p>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Briefcase size={24} className="text-yellow-400" /> Work Experience
              </h2>
              <div className="space-y-8">
                {workExperience.map(job => (
                  <div key={job.id} className="border-l-2 border-yellow-400 pl-4 py-1 animate-on-scroll opacity-0 animate-fade-up">
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-x-2 text-sm mb-2">
                      {job.companyUrl && job.companyUrl !== '#' ? (
                        <a 
                          href={job.companyUrl} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base font-medium hover:text-yellow-400 transition-colors underline"
                        >
                          {job.company}
                        </a>
                      ) : (
                        <span className="text-base font-medium">{job.company}</span>
                      )}
                      {job.nowPart && (
                        <span className="text-base italic text-yellow-400/90">({job.nowPart})</span>
                      )}
                      {job.location && (
                        <>
                          <span className="w-1 h-1 rounded-full bg-muted-foreground inline-block"></span>
                          <span className="text-base">{job.location}</span>
                        </>
                      )}
                    </div>
                    <p className="text-muted-foreground">{job.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap size={24} className="text-yellow-400" /> Education
              </h2>
              <div className="space-y-6">
                {education.map(edu => (
                  <div key={edu.id} className="animate-on-scroll opacity-0 animate-fade-up">
                    <div className="flex flex-wrap md:flex-nowrap items-start gap-3 mb-1">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold">
                          <a 
                            href={edu.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-yellow-400 transition-colors"
                          >
                            {edu.institution}
                          </a>
                        </h3>
                        {edu.degree && (
                          <p className="text-muted-foreground italic mt-1">
                            {edu.degree}
                          </p>
                        )}
                        <p className="text-base font-medium text-yellow-400 mt-1">
                          {edu.location}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FileText size={24} className="text-yellow-400" /> Publications
              </h2>
              <ul className="list-disc list-inside space-y-2">
                {publications.map(pub => (
                  <li key={pub.id} className="text-muted-foreground animate-on-scroll opacity-0 animate-fade-up">
                    {pub.link ? (
                      <a 
                        href={pub.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:underline hover:text-yellow-400 transition-colors"
                      >
                        {pub.title}
                      </a>
                    ) : (
                      pub.title
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
