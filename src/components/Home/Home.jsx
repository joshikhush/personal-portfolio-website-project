import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="glow-bottom"></div>
      <div className="home-header">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="home-content"
          >
            <span className="welcome-badge">Full Stack Developer</span>
            <h1>Turning Ideas Into <span>Reality</span></h1>
            <div className="home-breadcrumb">
              <span>Home</span> <span className="chevron">»</span> <span className="active">Portfolio</span>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="scroll-indicator"
            >
              <div className="mouse">
                <div className="wheel"></div>
              </div>
              <span>Scroll Down</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
