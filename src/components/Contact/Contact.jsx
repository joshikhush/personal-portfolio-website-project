import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Code, User, Globe } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission could go here (e.g., EmailJS or Formspree)
    alert("Message sent! (Simulation)");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="badge">Get in Touch</span>
          <h2>Let's <span>Talk</span></h2>
          <p>
            Have a project in mind or just want to say hi? Feel free to reach out. 
            I'm always open to new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="contact-wrapper">
          {/* Contact Info Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="contact-info-col"
          >
            <div className="info-cards">
              <div className="contact-info-card">
                <div className="icon-box"><Mail /></div>
                <div className="info-text">
                  <span>Email</span>
                  <p>khushboojoshi992@gmail.com</p>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="icon-box"><Phone /></div>
                <div className="info-text">
                  <span>Phone</span>
                  <p>+91 9929855957</p>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="icon-box"><MapPin /></div>
                <div className="info-text">
                  <span>Location</span>
                  <p>Jaipur, Rajasthan, India</p>
                </div>
              </div>
            </div>

            <div className="social-connect">
              <h4>Social Profiles</h4>
              <div className="social-links">
                <a href="https://github.com/joshikhush" target="_blank" rel="noreferrer"><Code size={20} /></a>
                <a href="#"><User size={20} /></a>
                <a href="#"><Globe size={20} /></a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="contact-form-col"
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn-primary submit-btn">
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
