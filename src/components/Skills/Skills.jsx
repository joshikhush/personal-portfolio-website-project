import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Layout, 
  Database, 
  Wrench 
} from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 size={24} />,
      skills: ['JavaScript (ES6+)', 'TypeScript', 'C++', 'SQL']
    },
    {
      title: 'Frontend',
      icon: <Layout size={24} />,
      skills: ['React.js', 'React Native', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux Toolkit', 'Zustand', 'Chart.js']
    },
    {
      title: 'Backend & DB',
      icon: <Database size={24} />,
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'BullMQ', 'Socket.io']
    },
    {
      title: 'Auth & Tools',
      icon: <Wrench size={24} />,
      skills: ['Firebase Auth', 'Google OAuth', 'Vercel', 'Git', 'GitHub', 'Vite', 'Postman', 'Agile / Scrum']
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="badge">Technical Stack</span>
          <h2>My <span>Skills</span></h2>
          <p>
            A comprehensive overview of the technologies I use to build scalable, 
            high-performance digital solutions.
          </p>
        </motion.div>

        <div className="skills-categories-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="skill-category-card"
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-tags">
                {category.skills.map((skill, i) => (
                  <motion.span 
                    key={i}
                    whileHover={{ scale: 1.05, backgroundColor: 'var(--accent)', color: '#fff' }}
                    className="skill-tag"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
