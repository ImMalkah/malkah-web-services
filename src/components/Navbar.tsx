'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '24px',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none', // Allow clicking through the container
        transition: 'padding 0.3s ease'
      }}>
        <nav 
          className="liquid-nav"
          style={{
            pointerEvents: 'auto', // Re-enable clicks on the nav itself
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 10px 10px 24px',
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            borderRadius: '50px',
            border: '1px solid var(--glass-border)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
            width: '100%',
            maxWidth: '900px',
            transition: 'all 0.3s ease',
            transform: isScrolled ? 'translateY(-8px)' : 'translateY(0)'
          }}
        >
          {/* Logo Area */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Image 
              src="/malkah-logo-v2-icon.png" 
              alt="Logo" 
              width={28} 
              height={28}
              className="brand-logo"
              style={{ objectFit: 'contain', borderRadius: '8px' }}
              unoptimized={true}
              priority
            />
            <div className="brand-text" style={{ fontSize: '1.1rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--foreground)' }}>
              Malkah Web Services
            </div>
          </div>

          {/* Desktop Links */}
          <div className="desktop-links" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px'
          }}>
            <a href="#services" className="nav-link">Services</a>
            <a href="#work" className="nav-link">Our Work</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          {/* Right Area: CTA & Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <ThemeToggle />
            
            <a href="#contact" className="pill-btn">
              Free Quote
            </a>
            
            {/* Hamburger Icon */}
            <button 
              className="mobile-toggle"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--foreground)',
                padding: '8px',
              }}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isMobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Drawer */}
      <div 
        className={`mobile-drawer ${isMobileOpen ? 'open' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'var(--background)',
          backdropFilter: 'blur(20px)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '40px',
          opacity: isMobileOpen ? 1 : 0,
          pointerEvents: isMobileOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease'
        }}
      >
        <a href="#services" onClick={() => setIsMobileOpen(false)} style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--foreground)' }}>Services</a>
        <a href="#work" onClick={() => setIsMobileOpen(false)} style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--foreground)' }}>Our Work</a>
        <a href="#contact" onClick={() => setIsMobileOpen(false)} style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--foreground)' }}>Contact</a>
        <a href="#contact" onClick={() => setIsMobileOpen(false)} className="pill-btn" style={{ fontSize: '1.2rem', padding: '16px 32px' }}>Free Quote</a>
      </div>
    </>
  );
}
