import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'AI Assignment Generator',
      category: 'Full Stack',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
      link: 'https://github.com/joshikhush/Ai-Assignment-Generator-',
      tags: ['TypeScript', 'React', 'AI']
    },
    {
      title: 'Travel Booking Site',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800',
      link: 'https://github.com/joshikhush/Travel-website-page-',
      tags: ['React', 'Tailwind', 'Vite']
    },
    {
      title: 'Food Delivery App',
      category: 'Frontend',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
      link: 'https://github.com/joshikhush/food-delivery-app',
      tags: ['JavaScript', 'React', 'UI/UX']
    },
    {
      title: 'Bill Manager',
      category: 'Utility',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
      link: 'https://github.com/joshikhush/Bill-Manager-',
      tags: ['JavaScript', 'Local Storage']
    },
    {
      title: 'Spotify Clone',
      category: 'Multimedia',
      image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=800',
      link: 'https://github.com/joshikhush/spotify',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Amazon Clone',
      category: 'E-commerce',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800',
      link: 'https://github.com/joshikhush/project-3',
      tags: ['HTML', 'CSS', 'Grid']
    },
    {
      title: 'Global News App',
      category: 'Frontend',
      image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=800',
      link: 'https://github.com/joshikhush/Newsapp',
      tags: ['React', 'NewsAPI', 'Axios']
    },
    {
      title: 'Pizza Website',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
      link: 'https://github.com/joshikhush/project2',
      tags: ['HTML', 'CSS', 'Responsive']
    }
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="badge">Portfolio</span>
          <h2>My Latest <span>Projects</span></h2>
          <p>
            Explore my latest works where I combine creativity with 
            cutting-edge technology to deliver high-quality results.
          </p>
        </motion.div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-hover">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project-btn">
                    <ArrowUpRight size={20} />
                    View GitHub
                  </a>
                </div>
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="portfolio-footer"
        >
          <a href="https://github.com/joshikhush" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
