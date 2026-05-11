'use client';

import Image from 'next/image';
import { useState } from 'react';
import { getImageUrl } from '@/lib/supabase';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main>
      {/* Background glowing orbs */}
      <div className="glow-bg"></div>
      <div className="glow-bg-2"></div>

      {/* Navbar */}
      <nav className="navbar animate-fade-in">
        <div className="navbar-inner">
          <div style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Malkah<span className="text-gradient">Web Services</span>
          </div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#work">Our Work</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="#contact" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>
            Free Quote
          </a>
        </div>
      </nav>

      <div className="container" style={{ paddingTop: '100px' }}>
        {/* Hero Section */}
        <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
          <div className="animate-fade-in delay-1" style={{ maxWidth: '800px' }}>
            <h1 className="hero-title">
              Crafting Digital <span className="text-gradient">Experiences</span> That Convert.
            </h1>
            <p className="hero-subtitle">
              We build premium, high-performance web applications that elevate your brand. 
              From stunning UI/UX to robust full-stack development and SEO optimization.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn btn-primary">Start a Project</a>
              <a href="#work" className="btn btn-glass">View Our Work</a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section">
          <h2 className="section-title animate-fade-in">Our Services</h2>
          <p className="section-subtitle animate-fade-in delay-1">
            Comprehensive web solutions tailored to scale your business.
          </p>
          
          <div className="grid-3 animate-fade-in delay-2">
            <div className="glass glass-panel service-card">
              <div className="service-icon">⚡</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Full-Stack Development</h3>
              <p style={{ color: '#a1a1aa' }}>
                End-to-end development of robust, scalable web applications using modern frameworks like Next.js and React.
              </p>
            </div>
            
            <div className="glass glass-panel service-card">
              <div className="service-icon">✨</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>UI/UX Design</h3>
              <p style={{ color: '#a1a1aa' }}>
                Creating sleek, intuitive, and conversion-focused interfaces that delight users and elevate your brand identity.
              </p>
            </div>
            
            <div className="glass glass-panel service-card">
              <div className="service-icon">🚀</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>SEO Optimization</h3>
              <p style={{ color: '#a1a1aa' }}>
                Technical and on-page SEO strategies to ensure your website ranks high and attracts the right audience.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="work" className="section">
          <h2 className="section-title animate-fade-in">Featured Work</h2>
          <p className="section-subtitle animate-fade-in delay-1">
            Explore some of our recent digital transformations.
          </p>

          <div className="grid-2 animate-fade-in delay-2">
            {/* Project 1 */}
            <div className="glass portfolio-card" style={{ cursor: 'pointer' }} onClick={() => setSelectedImage(getImageUrl('stonex.png'))}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
                <Image 
                  src={getImageUrl('stonex.png')} 
                  alt="Stonex Contracting" 
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                  unoptimized={true}
                />
              </div>
              <div className="portfolio-content">
                <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Stonex Contracting</h3>
                <p style={{ color: '#e4e4e7', marginBottom: '16px' }}>Corporate Website & Custom Forms</p>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <span className="glass" style={{ padding: '4px 12px', fontSize: '0.8rem', borderRadius: '20px' }}>Next.js</span>
                  <span className="glass" style={{ padding: '4px 12px', fontSize: '0.8rem', borderRadius: '20px' }}>UI/UX</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="glass portfolio-card" style={{ cursor: 'pointer' }} onClick={() => setSelectedImage(getImageUrl('rannosh.png'))}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
                <Image 
                  src={getImageUrl('rannosh.png')} 
                  alt="Rannosh Grill" 
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                  unoptimized={true}
                />
              </div>
              <div className="portfolio-content">
                <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Rannosh Grill</h3>
                <p style={{ color: '#e4e4e7', marginBottom: '16px' }}>Restaurant Platform & Menu System</p>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <span className="glass" style={{ padding: '4px 12px', fontSize: '0.8rem', borderRadius: '20px' }}>Next.js</span>
                  <span className="glass" style={{ padding: '4px 12px', fontSize: '0.8rem', borderRadius: '20px' }}>Full-Stack</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section" style={{ textAlign: 'center' }}>
          <div className="glass glass-panel animate-fade-in" style={{ padding: '60px', maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="section-title" style={{ marginBottom: '24px' }}>Ready to elevate your digital presence?</h2>
            <p style={{ color: '#a1a1aa', marginBottom: '40px', fontSize: '1.1rem' }}>
              Let's build something extraordinary together.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
              <a href="tel:9055163505" className="contact-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span>(905) 516-3505</span>
              </a>
              <a href="mailto:info@malkahservices.ca" className="contact-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span>info@malkahservices.ca</span>
              </a>
              <a href="https://www.instagram.com/malkahwebservices" target="_blank" rel="noopener noreferrer" className="contact-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                <span>@malkahwebservices</span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ padding: '40px 0', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', color: '#71717a' }}>
          <p>© {new Date().getFullYear()} Malkah Web Services. All rights reserved.</p>
        </footer>
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div 
          className="modal-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close" 
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <Image 
              src={selectedImage} 
              alt="Portfolio Full View" 
              fill
              style={{ objectFit: 'contain' }}
              unoptimized={true}
            />
          </div>
        </div>
      )}
    </main>
  );
}
