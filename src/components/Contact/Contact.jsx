import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Mail, 
  Code, 
  User,
  Phone, 
  MapPin, 
  Send
} from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    // This is your public access key from Web3Forms.
    formData.append("access_key", "e27c88dd-e658-452f-b848-3470ac3cc531");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setShowToast(true);
        e.target.reset();
      } else {
        setSubmitStatus('error');
        setShowToast(true); // Show toast even for error
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" name="subject" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button 
                type="submit" 
                className={`btn-primary submit-btn ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send size={18} />
              </button>
              
              {submitStatus === 'success' && (
                <p className="form-success">Message sent successfully! I will get back to you soon.</p>
              )}
              {submitStatus === 'error' && (
                <p className="form-error">Something went wrong. Please try again later.</p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Success/Error Toast Notification */}
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
              className={`form-toast ${submitStatus}`}
            >
              <div className="toast-content">
                {submitStatus === 'success' ? (
                  <>
                    <div className="toast-icon success">✓</div>
                    <div className="toast-text">
                      <h4>Success!</h4>
                      <p>Your message has been sent successfully.</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="toast-icon error">✕</div>
                    <div className="toast-text">
                      <h4>Error</h4>
                      <p>Something went wrong. Please try again.</p>
                    </div>
                  </>
                )}
                <button onClick={() => setShowToast(false)} className="toast-close">×</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;
