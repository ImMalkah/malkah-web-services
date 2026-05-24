'use client';

import Image from 'next/image';
import { useState } from 'react';
import { getImageUrl } from '@/lib/supabase';
import VideoScrollSection from '@/components/VideoScrollSection';
import Navbar from '@/components/Navbar';
import PricingCard from '@/components/PricingCard';
import ProjectBrowserModal from '@/components/ProjectBrowserModal';
import pricingData from '@/data/pricing.json';

export default function Home() {
  const [selectedProjectUrl, setSelectedProjectUrl] = useState<string | null>(null);

  return (
    <main style={{ overflowX: 'clip', width: '100%', position: 'relative' }}>
      {/* Background glowing orbs */}
      <div className="glow-bg"></div>
      <div className="glow-bg-2"></div>

      <Navbar />

      <VideoScrollSection />

      <div className="container" style={{ paddingTop: '40px' }}>

        {/* Services Section */}
        <section id="services" className="section" style={{ position: 'relative' }}>
          <div className="glow-bg" style={{ top: '10%', left: '-10%' }}></div>
          <div className="glow-bg-2" style={{ bottom: '10%', right: '-10%' }}></div>
          
          <h2 className="section-title animate-fade-in">Our Packages</h2>
          <p className="section-subtitle animate-fade-in delay-1">
            Transparent pricing. Exceptional value. No hidden fees.
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '32px', 
            width: '100%', 
            maxWidth: '1200px', 
            margin: '40px auto 0' 
          }}>
            {pricingData.map((tier) => (
              <PricingCard key={tier.id} tier={tier} />
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="work" className="section" style={{ position: 'relative' }}>
          <div className="glow-bg-2" style={{ top: '20%', left: '30%', transform: 'translate(-50%, -50%)', opacity: 0.4 }}></div>

          <h2 className="section-title animate-fade-in">Featured Work</h2>
          <p className="section-subtitle animate-fade-in delay-1">
            Explore some of our recent digital transformations.
          </p>

          <div className="grid-2 animate-fade-in delay-2">
            {/* Project 1 */}
            <div 
              className="glass portfolio-card" 
              style={{ cursor: 'pointer', touchAction: 'manipulation' }} 
              onClick={(e) => {
                e.preventDefault();
                setSelectedProjectUrl('https://www.stonexcontracting.ca');
              }}
            >
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
            <div 
              className="glass portfolio-card" 
              style={{ cursor: 'pointer', touchAction: 'manipulation' }} 
              onClick={(e) => {
                e.preventDefault();
                setSelectedProjectUrl('https://www.rannoshgrill.ca');
              }}
            >
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
        <section id="contact" className="section" style={{ textAlign: 'center', position: 'relative' }}>
          <div className="glow-bg" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.5 }}></div>

          <div className="glass glass-panel animate-fade-in" style={{ padding: '80px 40px', maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
            <h2 className="section-title" style={{ marginBottom: '24px' }}>Ready to elevate your digital presence?</h2>
            <p style={{ color: '#a1a1aa', marginBottom: '40px', fontSize: '1.2rem' }}>
              Let's build something extraordinary together. Reach out to us directly.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
              <a href="tel:9055163505" className="contact-link">
                <div className="contact-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <span>(905) 516-3505</span>
              </a>
              <a href="mailto:info@malkahservices.ca" className="contact-link">
                <div className="contact-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <span>info@malkahservices.ca</span>
              </a>
              <a href="https://www.instagram.com/malkahwebservices" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="contact-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </div>
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

      {selectedProjectUrl && (
        <ProjectBrowserModal 
          url={selectedProjectUrl} 
          onClose={() => {
            setSelectedProjectUrl(null);
            // Dispatch event synchronously during the tap gesture to wake up the iOS media decoder
            window.dispatchEvent(new Event('wake-up-video'));
          }} 
        />
      )}
    </main>
  );
}
