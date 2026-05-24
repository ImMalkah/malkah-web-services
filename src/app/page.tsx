'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { getImageUrl } from '@/lib/supabase';
import VideoScrollSection from '@/components/VideoScrollSection';
import Navbar from '@/components/Navbar';
import PricingCard from '@/components/PricingCard';
import ContactForm from '@/components/ContactForm';
import ProjectBrowserModal from '@/components/ProjectBrowserModal';
import ScrollReveal from '@/components/ScrollReveal';
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
          
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="section-title">Our Packages</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="section-subtitle">
              Transparent pricing. Exceptional value. No hidden fees.
            </p>
          </ScrollReveal>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '32px', 
            width: '100%', 
            maxWidth: '1200px', 
            margin: '40px auto 0' 
          }}>
            {pricingData.map((tier, index) => (
              <ScrollReveal key={tier.id} direction="up" delay={0.2 + (index * 0.15)}>
                <PricingCard tier={tier} />
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="work" className="section" style={{ position: 'relative' }}>
          <div className="glow-bg-2" style={{ top: '20%', left: '30%', transform: 'translate(-50%, -50%)', opacity: 0.4 }}></div>

          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="section-title">Featured Work</h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="section-subtitle">
              Explore some of our recent digital transformations.
            </p>
          </ScrollReveal>

          <div className="grid-2">
            {/* Project 1 */}
            <ScrollReveal direction="up" delay={0.3}>
              <motion.div 
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
              </motion.div>
            </ScrollReveal>

            {/* Project 2 */}
            <ScrollReveal direction="up" delay={0.45}>
              <motion.div 
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
              </motion.div>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section" style={{ textAlign: 'center', position: 'relative' }}>
          <div className="glow-bg" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.5 }}></div>

          <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="section-title" style={{ marginBottom: '24px' }}>Ready to elevate your digital presence?</h2>
              <p style={{ color: '#a1a1aa', fontSize: '1.2rem' }}>
                Let's build something extraordinary together. Fill out the form below or reach out to us directly.
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.25}>
              <ContactForm />
            </ScrollReveal>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
              gap: '24px', 
              marginTop: '20px',
              width: '100%'
            }}>
              <ScrollReveal direction="up" delay={0.4}>
                <a href="tel:9055163505" className="glass pricing-card" style={{
                  padding: '24px',
                  borderRadius: '16px',
                  border: '1px solid var(--glass-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  color: 'var(--foreground)',
                  textDecoration: 'none',
                  transition: 'transform 0.2s, box-shadow 0.2s'
                }}>
                  <div style={{ padding: '12px', background: 'rgba(128,128,128,0.1)', borderRadius: '50%' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <span style={{ fontWeight: 600, fontSize: '1rem' }}>(905) 516-3505</span>
                  <span style={{ fontSize: '0.85rem', opacity: 0.7 }}>Call Us</span>
                </a>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.5}>
                <a href="mailto:info@malkahservices.ca" className="glass pricing-card" style={{
                  padding: '24px',
                  borderRadius: '16px',
                  border: '1px solid var(--glass-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  color: 'var(--foreground)',
                  textDecoration: 'none',
                  transition: 'transform 0.2s, box-shadow 0.2s'
                }}>
                  <div style={{ padding: '12px', background: 'rgba(128,128,128,0.1)', borderRadius: '50%' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <span style={{ fontWeight: 600, fontSize: '1rem' }}>info@malkahservices.ca</span>
                  <span style={{ fontSize: '0.85rem', opacity: 0.7 }}>Email Us</span>
                </a>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.6}>
                <a href="https://www.instagram.com/malkahwebservices" target="_blank" rel="noopener noreferrer" className="glass pricing-card" style={{
                  padding: '24px',
                  borderRadius: '16px',
                  border: '1px solid var(--glass-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  color: 'var(--foreground)',
                  textDecoration: 'none',
                  transition: 'transform 0.2s, box-shadow 0.2s'
                }}>
                  <div style={{ padding: '12px', background: 'rgba(128,128,128,0.1)', borderRadius: '50%' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </div>
                  <span style={{ fontWeight: 600, fontSize: '1rem' }}>@malkahwebservices</span>
                  <span style={{ fontSize: '0.85rem', opacity: 0.7 }}>Instagram</span>
                </a>
              </ScrollReveal>
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
