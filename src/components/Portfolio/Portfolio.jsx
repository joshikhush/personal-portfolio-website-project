import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Portfolio.css';

// Links still holding a [PLACEHOLDER] are treated as missing and not rendered.
const isRealLink = (url) => Boolean(url) && !/^\[.*\]$/.test(url);

const PLACEHOLDER_IMAGE = '/images/projects/placeholder.svg';

const Portfolio = () => {
  const projects = [
    {
      title: 'Industrial Manufacturer — Corporate Website',
      type: 'client',
      description: 'Framework-free, 17-page B2B site for a transformer-radiator manufacturer.',
      bullets: [
        'Cut image payloads by up to ~95% (~11 MB → ~150 KB) with a canvas-based optimization pipeline.',
        'Removed ~700 lines of duplicated markup with a shared nav/footer component system.'
      ],
      image: '/images/projects/9c782c62-9648-4b1c-adc3-c59d8e88e9a6.png',
      live: '[CLIENT_LIVE_URL]',
      github: '[CLIENT_REPO_URL]',
      tags: ['HTML', 'CSS', 'JavaScript', 'Performance']
    },
    {
      title: 'AI Assignment Generator',
      type: 'personal',
      description: 'Queue-backed AI test-paper generator with real-time status updates.',
      bullets: [
        'Cut AI response latency by ~90% by moving generation to a BullMQ + Redis job queue.',
        'Streams job status live over WebSockets (Socket.io) instead of client polling.'
      ],
      image: '/images/projects/ai-generator.webp',
      fallbackImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
      live: '[AI_GEN_LIVE_URL]',
      github: 'https://github.com/joshikhush/Ai-Assignment-Generator-',
      tags: ['Next.js', 'BullMQ', 'Redis', 'Socket.io', 'MongoDB']
    },
    {
      title: 'Tresto — Studio Website',
      type: 'client',
      description: 'Next.js studio site with dynamic case-study pages and a reusable UI kit.',
      bullets: [
        'App Router site with a filterable work index and per-project case-study routes.',
        'Smooth 60 FPS scroll-locked animations built with requestAnimationFrame.'
      ],
      image: '/images/projects/Web%20Solutions%20Portfolio%20Mockup.png',
      live: 'https://tresto.io',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    },
    {
      title: 'Bill Manager',
      type: 'personal',
      description: 'Budgeting dashboard with spending charts and a bill recommendation engine.',
      bullets: [
        'Handles 500+ expense entries with UI updates under 100ms.',
        'Recommends which bills to pay based on the remaining budget.'
      ],
      image: '/images/projects/bill-manager.webp',
      fallbackImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
      live: '[BILL_LIVE_URL]',
      github: 'https://github.com/joshikhush/Bill-Manager-',
      tags: ['React', 'Redux Toolkit', 'Recharts']
    },
    {
      title: 'WanderVista — Travel Booking',
      type: 'personal',
      description: 'Travel booking front end with Firebase auth and scroll-gated content.',
      bullets: [
        'Email/password and Google OAuth with auth state shared via React Context.',
        'Gates content behind login: logged-out scrolling blurs the page and opens a login modal.'
      ],
      image: '/images/projects/wandervista.webp',
      fallbackImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800',
      live: '[WANDER_LIVE_URL]',
      github: 'https://github.com/joshikhush/Travel-website-page-',
      tags: ['React', 'Firebase Auth', 'Tailwind CSS']
    },
    {
      title: 'Call Analytics Dashboard',
      type: 'personal',
      note: 'Assignment',
      description: 'TypeScript dashboard built from a Figma spec, fully driven by API data.',
      bullets: [
        'All metrics load from 4 API endpoints, with no hardcoded stats.',
        'Built pixel-accurate to a supplied Figma design.'
      ],
      image: '/images/projects/Hintro%20AI%20Calls%20Dashboard%20Showcase.png',
      live: '[HINTRO_LIVE_URL]',
      github: '[HINTRO_REPO_URL]',
      tags: ['React', 'TypeScript', 'REST API']
    }
  ];

  // Swap in a stand-in once if the project's own image file isn't there yet.
  const handleImageError = (e, project) => {
    const img = e.currentTarget;
    if (img.dataset.fallback) return;
    img.dataset.fallback = 'true';
    img.src = project.fallbackImage || PLACEHOLDER_IMAGE;
  };

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
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  onError={(e) => handleImageError(e, project)}
                />
                {(isRealLink(project.live) || isRealLink(project.github)) && (
                  <div className="project-hover">
                    {isRealLink(project.live) && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="view-project-btn">
                        <ArrowUpRight size={20} />
                        Live Site
                      </a>
                    )}
                    {isRealLink(project.github) && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="view-project-btn view-project-btn-outline">
                        <ArrowUpRight size={20} />
                        View GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
              <div className="project-info">
                <span className={`project-category project-category-${project.type}`}>
                  {project.type === 'client' ? 'Client Work' : 'Personal Project'}
                  {project.note && <span className="project-note">{project.note}</span>}
                </span>
                <h3>{project.title}</h3>
                {project.description && (
                  <p className="project-desc">{project.description}</p>
                )}
                {project.bullets && (
                  <ul className="project-bullets">
                    {project.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                )}
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
