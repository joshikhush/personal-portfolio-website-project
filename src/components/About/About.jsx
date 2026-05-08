import React from 'react';
import profileImg from '../../assets/profile.png';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const [displayText, setDisplayText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [loopNum, setLoopNum] = React.useState(0);
  const [typingSpeed, setTypingSpeed] = React.useState(150);

  const roles = ['Full Stack Developer', 'Frontend Developer'];

  React.useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setDisplayText(isDeleting
        ? fullText.substring(0, displayText.length - 1)
        : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 80 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  const contactInfo = [
    { label: 'Name', value: 'Khushboo Joshi' },
    { label: 'Phone', value: '+91 9929855957' },
    { label: 'Email', value: 'khushboojoshi992@gmail.com' },
    { label: 'GitHub', value: 'joshikhush' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-wrapper">
          {/* Left Column: Image Area */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="about-image-column"
          >
            <div className="profile-circle-wrapper">
              <div className="profile-circle">
                <img src={profileImg} alt="Khushboo Joshi" />
              </div>
              <div className="decor-circle-lg"></div>
              <div className="decor-circle-sm"></div>
            </div>
          </motion.div>

          {/* Right Column: Text & Info Area */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-text"
          >
            <span className="badge">About Me</span>
            <h2>I'm Khushboo Joshi, a <span className="typewriter-text">{displayText}<span className="cursor">|</span></span></h2>
            <p>
              I am a passionate developer dedicated to creating intuitive and high-performance web applications. With a strong foundation in both frontend and backend technologies, I turn complex problems into simple, beautiful digital solutions.
            </p>

            <div className="info-grid">
              {contactInfo.map((item, index) => (
                <div key={index} className="info-item">
                  <span className="info-label">{item.label}:</span>
                  <span className="info-value">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="about-btns">
              <a href="#contact" className="btn-primary">Contact me</a>
              <a href="/resume.pdf" download className="btn-secondary">Download Resume</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
