import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen, MapPin } from 'lucide-react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: 'B.Tech – Computer Science & Engineering',
      university: 'JECRC University, Jaipur',
      period: 'Jul 2021 – Jun 2025',
      coursework: ['DSA', 'Operating Systems', 'Computer Networks', 'OOP', 'DBMS'],
      description: 'Gaining a solid foundation in computer science principles and software engineering practices through rigorous coursework and practical projects.'
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="badge">Academic Journey</span>
          <h2>My <span>Education</span></h2>
          <p>
            Building a strong technical foundation through my Bachelor's degree and specialized coursework.
          </p>
        </motion.div>

        <div className="education-container">
          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="education-card"
            >
              <div className="edu-card-header">
                <div className="edu-icon-box">
                  <GraduationCap size={32} />
                </div>
                <div className="edu-header-text">
                  <h3>{edu.degree}</h3>
                  <div className="edu-meta">
                    <span className="uni-name">{edu.university}</span>
                    <div className="meta-row">
                      <span><Calendar size={14} /> {edu.period}</span>
                      <span><MapPin size={14} /> Jaipur, India</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="edu-content">
                <p>{edu.description}</p>
                
                <div className="coursework-section">
                  <div className="coursework-header">
                    <BookOpen size={18} />
                    <h4>Core Coursework</h4>
                  </div>
                  <div className="coursework-grid">
                    {edu.coursework.map((course, i) => (
                      <span key={i} className="course-tag">{course}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
