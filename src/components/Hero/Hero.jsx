import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="hero-text"
          >
            <motion.span 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="greeting"
            >
              Hi, My name is
            </motion.span>
            
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
              }}
              transition={{ duration: 0.8 }}
              className="name"
            >
              Khushboo Joshi
            </motion.h1>
            
            <motion.h2 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="role"
            >
              I'm a passionate <span>Graphic Designer.</span>
            </motion.h2>
            
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="description"
            >
              A web developer with a passion for crafting exceptional online experiences. 
              With a keen eye for design and a commitment to clean, efficient code, 
              I specialize in turning ideas into beautifully functional websites. 
              Explore my portfolio to see how I can help bring your digital vision to life.
            </motion.p>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="hero-btns"
            >
              <button className="btn-primary">Hire Me</button>
              <button className="btn-secondary">Download Resume</button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hero-visual"
          >
            <div className="blob-shape"></div>
            <div className="floating-icons">
              {/* We can add floating tech icons here later */}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Decorative Elements */}
      <div className="bg-glow"></div>
    </section>
  );
};

export default Hero;
