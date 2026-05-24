'use client';

import React from 'react';

type PricingCardProps = {
  tier: {
    id: string;
    name: string;
    price: string;
    monthlyAddon: string;
    monthlyAddonDesc: string;
    description: string;
    inheritedFeaturesText?: string;
    features: string[];
    addonFeatures?: string[];
    isPopular: boolean;
  };
};

export default function PricingCard({ tier }: PricingCardProps) {
  return (
    <div className={`glass pricing-card ${tier.isPopular ? 'popular-tier' : ''}`} style={{
      position: 'relative',
      padding: '40px',
      borderRadius: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      height: '100%',
      border: tier.isPopular ? '1px solid var(--glow-cyan)' : '1px solid var(--glass-border)',
      boxShadow: tier.isPopular ? '0 0 40px rgba(0, 240, 255, 0.15)' : 'none',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    }}>
      {tier.isPopular && (
        <div style={{
          position: 'absolute',
          top: '-14px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'var(--foreground)',
          color: 'var(--background)',
          padding: '6px 20px',
          borderRadius: '20px',
          fontSize: '0.75rem',
          fontWeight: 800,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          border: '1px solid var(--glass-border)'
        }}>
          Most Popular
        </div>
      )}
      
      <div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '8px' }}>{tier.name}</h3>
        <p style={{ color: 'var(--foreground)', opacity: 0.7, fontSize: '0.95rem', lineHeight: 1.5 }}>
          {tier.description}
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
        <span style={{ fontSize: '3rem', fontWeight: 700, letterSpacing: '-0.02em' }}>${tier.price}</span>
      </div>

      <div style={{ 
        padding: '16px', 
        background: 'rgba(128, 128, 128, 0.05)', 
        borderRadius: '12px',
        border: '1px solid var(--glass-border)'
      }}>
        <div style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px', color: 'var(--foreground)' }}>
          Optional Add-on
        </div>
        <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--glow-cyan)' }}>
          +${tier.monthlyAddon}<span style={{ fontSize: '0.9rem', fontWeight: 400, opacity: 0.8 }}>/mo</span>
        </div>
        <div style={{ fontSize: '0.85rem', opacity: 0.7, marginTop: '4px' }}>
          {tier.monthlyAddonDesc}
        </div>
        {tier.addonFeatures && (
          <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {tier.addonFeatures.map((f, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--glow-cyan)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span style={{ opacity: 0.9 }}>{f}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '24px', flexGrow: 1 }}>
        {tier.inheritedFeaturesText && (
          <p style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '16px', color: 'var(--foreground)' }}>
            {tier.inheritedFeaturesText}
          </p>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {tier.features.map((feature, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px', opacity: 0.8 }}><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span style={{ fontSize: '0.95rem', lineHeight: 1.4, opacity: 0.9 }}>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <a href="#contact" className="pill-btn" style={{ 
        marginTop: '16px', 
        width: '100%', 
        textAlign: 'center',
        padding: '16px',
        background: tier.isPopular ? 'var(--foreground)' : 'transparent',
        color: tier.isPopular ? 'var(--background)' : 'var(--foreground)',
        border: tier.isPopular ? 'none' : '1px solid var(--glass-border)',
        fontWeight: 600,
        display: 'block'
      }}>
        Select Package
      </a>
    </div>
  );
}
