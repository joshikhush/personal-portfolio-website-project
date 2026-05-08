import React from 'react';
import { 
  Globe, 
  Mail, 
  Code, 
  User,
  Phone, 
  MapPin, 
  Clock,
  MessageSquare
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand */}
          <div className="footer-col">
            <div className="logo">
              <span className="logo-icon">K</span>
            </div>
            <p className="footer-desc">
              A web developer with a passion for crafting exceptional online experiences. 
              Let's build something amazing together.
            </p>
            <div className="social-links">
              <a href="https://github.com/joshikhush" target="_blank" rel="noreferrer"><Code size={20} /></a>
              <a href="#"><User size={20} /></a>
              <a href="#"><MessageSquare size={20} /></a>
              <a href="#"><Globe size={20} /></a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-col">
            <h3>Navigation</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="footer-col">
            <h3>Contact Info</h3>
            <ul className="footer-contact">
              <li><Phone size={18} /> +91 9929855957</li>
              <li><Mail size={18} /> khushboojoshi992@gmail.com</li>
              <li><MapPin size={18} /> Rajasthan, India</li>
              <li><Clock size={18} /> Mon - Fri | 9am - 6pm</li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer-col">
            <h3>Newsletter</h3>
            <p>Get the latest information and updates from me.</p>
            <div className="newsletter-box">
              <input type="email" placeholder="Your Email" />
              <button className="btn-primary">→</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Khushboo Joshi. All Rights Reserved.</p>
          <p>Designed with ❤️ for a Premium Experience.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
