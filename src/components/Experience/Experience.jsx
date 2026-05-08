import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Full Stack Developer Intern',
      company: 'Solinix Software Solutions',
      location: 'Bangalore (Remote)',
      period: 'Nov 2024 – Mar 2025',
      description: [
        'Delivered Notifications Screen, Pending Tenant Dashboard & paginated list views for a production React Native property management app — improving owner visibility and reducing tenant follow-up time.',
        'Built and consumed 10+ RESTful APIs (Node.js / Express.js) — converting static screens into fully dynamic CRUD interfaces across mobile and Next.js admin panel.',
        'Implemented Firebase Authentication & role-based authorization across full stack — securing both mobile and admin interfaces.',
        'Resolved 10–15 UI/functional defects via manual testing; documented API endpoints and component architecture.'
      ],
      tech: ['Node.js', 'Express.js', 'React Native', 'Next.js', 'PostgreSQL', 'Firebase']
    },
    {
      role: 'Frontend Developer Intern',
      company: 'Sedani Digital Pvt. Ltd.',
      location: 'Ahmed Ahmedabad (Remote)',
      period: 'Jul – Sep 2024',
      description: [
        'Completed structured training in DSA (arrays, linked lists, graphs, DP, recursion) and React.js — skills directly applied in production internship at Solinix.'
      ],
      tech: ['JavaScript (ES6+)', 'React.js', 'DSA']
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="badge">Resume</span>
          <h2>Work <span>Experience</span></h2>
          <p>
            My journey through internships where I've built real-world products and refined my technical skills.
          </p>
        </motion.div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          <div className="experience-list">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="experience-item"
              >
                <div className="timeline-dot"></div>
                <div className="experience-card">
                  <div className="experience-header">
                    <div className="role-title">
                      <Briefcase size={20} className="exp-icon" />
                      <h3>{exp.role}</h3>
                    </div>
                    <div className="experience-meta">
                      <span className="company-name">{exp.company}</span>
                      <div className="meta-info">
                        <span><Calendar size={14} /> {exp.period}</span>
                        <span><MapPin size={14} /> {exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="experience-desc">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  <div className="experience-tech">
                    {exp.tech.map((skill, i) => (
                      <span key={i} className="tech-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
