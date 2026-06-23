'use client';

import React from 'react';
import { motion } from 'framer-motion';

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
  onSelectPackage?: (packageName: string) => void;
};

export default function PricingCard({ tier, onSelectPackage }: PricingCardProps) {
  const ctaStyle = {
    marginTop: 0,
    width: '100%',
    textAlign: 'center' as const,
    padding: '16px',
    background: tier.isPopular ? 'var(--foreground)' : 'transparent',
    color: tier.isPopular ? 'var(--background)' : 'var(--foreground)',
    border: tier.isPopular ? '1px solid transparent' : '1px solid var(--glass-border)',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    boxSizing: 'border-box' as const,
    cursor: 'pointer',
    fontFamily: 'inherit',
  };

  return (
    <motion.div 
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`glass pricing-card package-pricing-card ${tier.isPopular ? 'popular-tier' : ''}`} 
      style={{
        position: 'relative',
        padding: '40px',
        borderRadius: '24px',
        display: 'grid',
        gridTemplateRows: 'var(--pricing-intro-row) var(--pricing-price-row) var(--pricing-addon-row) minmax(0, 1fr) var(--pricing-cta-row)',
        rowGap: '24px',
        height: '100%',
        minHeight: '100%',
        border: tier.isPopular ? '1px solid var(--glow-cyan)' : '1px solid var(--glass-border)',
        boxShadow: tier.isPopular ? '0 0 40px rgba(0, 240, 255, 0.15)' : 'none',
      }}
    >
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
      
      <div className="package-pricing-card__intro">
        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0 0 8px', lineHeight: 1.2 }}>{tier.name}</h3>
        <p style={{ color: 'var(--foreground)', opacity: 0.7, fontSize: '0.95rem', lineHeight: 1.5, margin: 0 }}>
          {tier.description}
        </p>
      </div>

      <div className="package-pricing-card__price" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <span style={{ fontSize: '3rem', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1 }}>${tier.price}</span>
      </div>

      <div className="package-pricing-card__addon" style={{ 
        padding: '16px', 
        background: 'rgba(128, 128, 128, 0.05)', 
        borderRadius: '12px',
        border: '1px solid var(--glass-border)',
        height: '100%'
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

      <div className="package-pricing-card__features" style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '24px', flex: '1 1 auto', minHeight: 0 }}>
        {tier.inheritedFeaturesText && (
          <p style={{ fontSize: '0.9rem', fontWeight: 600, margin: '0 0 16px', color: 'var(--foreground)' }}>
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

      {onSelectPackage ? (
        <button
          type="button"
          className="pill-btn"
          style={ctaStyle}
          onClick={() => onSelectPackage(tier.name)}
        >
          Select Package
        </button>
      ) : (
        <a href="#contact" className="pill-btn" style={ctaStyle}>
          Select Package
        </a>
      )}
    </motion.div>
  );
}
