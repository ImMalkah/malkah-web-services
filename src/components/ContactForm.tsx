'use client';

import React, { useState } from 'react';
import pricingData from '@/data/pricing.json';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const getDynamicSuccessMessage = () => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const hour = now.getHours(); // 0 to 23

    const isWeekday = day >= 1 && day <= 5;
    const isDaytime = hour >= 9 && hour < 17;

    if (isWeekday && isDaytime) {
      return "Message sent successfully! Someone will be in touch with you within a couple of hours.";
    } else {
      return "Message sent successfully! Someone will be in touch with you within a day.";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    
    // Custom Validation
    if (!formData.name || !formData.message || !formData.package) {
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    if (!formData.email && !formData.phone) {
      setErrorMessage('Please provide either an email address or a phone number so we can reach you.');
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setSuccessMessage(getDynamicSuccessMessage());
      setFormData({ name: '', email: '', phone: '', package: '', message: '' });
      
    } catch (err) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or contact us directly via email.');
    }
  };

  return (
    <div className="glass pricing-card" style={{
      padding: '40px',
      borderRadius: '24px',
      border: '1px solid var(--glass-border)',
      maxWidth: '600px',
      margin: '0 auto',
      width: '100%',
      textAlign: 'left'
    }}>
      <h3 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '24px' }}>Send us an inquiry</h3>
      
      {status === 'success' ? (
        <div style={{
          padding: '24px',
          background: 'rgba(0, 255, 128, 0.1)',
          border: '1px solid rgba(0, 255, 128, 0.3)',
          borderRadius: '12px',
          color: 'var(--foreground)',
          textAlign: 'center'
        }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00ff80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.5 }}>{successMessage}</p>
          <button 
            onClick={() => setStatus('idle')}
            className="pill-btn"
            style={{ marginTop: '24px', padding: '8px 24px', fontSize: '0.9rem' }}
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div>
            <label htmlFor="name" style={{ display: 'block', fontSize: '0.9rem', marginBottom: '8px', opacity: 0.8 }}>Name *</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%', padding: '12px 16px', borderRadius: '12px',
                background: 'rgba(128,128,128,0.1)', border: '1px solid var(--glass-border)',
                color: 'var(--foreground)', outline: 'none', fontSize: '1rem',
                fontFamily: 'inherit'
              }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <label htmlFor="email" style={{ display: 'block', fontSize: '0.9rem', marginBottom: '8px', opacity: 0.8 }}>Email (Optional)</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: '100%', padding: '12px 16px', borderRadius: '12px',
                  background: 'rgba(128,128,128,0.1)', border: '1px solid var(--glass-border)',
                  color: 'var(--foreground)', outline: 'none', fontSize: '1rem',
                  fontFamily: 'inherit'
                }}
              />
            </div>
            <div>
              <label htmlFor="phone" style={{ display: 'block', fontSize: '0.9rem', marginBottom: '8px', opacity: 0.8 }}>Phone (Optional)</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                style={{
                  width: '100%', padding: '12px 16px', borderRadius: '12px',
                  background: 'rgba(128,128,128,0.1)', border: '1px solid var(--glass-border)',
                  color: 'var(--foreground)', outline: 'none', fontSize: '1rem',
                  fontFamily: 'inherit'
                }}
              />
            </div>
          </div>
          
          <div style={{ fontSize: '0.8rem', color: 'var(--glow-cyan)', marginTop: '-12px', opacity: 0.8 }}>
            * Please provide at least an email or phone number.
          </div>

          <div>
            <label htmlFor="package" style={{ display: 'block', fontSize: '0.9rem', marginBottom: '8px', opacity: 0.8 }}>Interested In *</label>
            <select 
              id="package" 
              name="package" 
              value={formData.package}
              onChange={handleChange}
              required
              style={{
                width: '100%', padding: '12px 16px', borderRadius: '12px',
                background: 'rgba(128,128,128,0.1)', border: '1px solid var(--glass-border)',
                color: 'var(--foreground)', outline: 'none', fontSize: '1rem',
                fontFamily: 'inherit', appearance: 'none'
              }}
            >
              <option value="" disabled style={{ color: '#000' }}>Select a package</option>
              {pricingData.map(tier => (
                <option key={tier.id} value={tier.name} style={{ color: '#000' }}>
                  {tier.name} Package (${tier.price})
                </option>
              ))}
              <option value="Custom" style={{ color: '#000' }}>Build custom package</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" style={{ display: 'block', fontSize: '0.9rem', marginBottom: '8px', opacity: 0.8 }}>Message *</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              style={{
                width: '100%', padding: '12px 16px', borderRadius: '12px',
                background: 'rgba(128,128,128,0.1)', border: '1px solid var(--glass-border)',
                color: 'var(--foreground)', outline: 'none', fontSize: '1rem',
                fontFamily: 'inherit', resize: 'vertical'
              }}
            />
          </div>

          {errorMessage && (
            <div style={{ color: '#ff4444', fontSize: '0.9rem', background: 'rgba(255, 68, 68, 0.1)', padding: '12px', borderRadius: '8px' }}>
              {errorMessage}
            </div>
          )}

          <button 
            type="submit" 
            disabled={status === 'loading'}
            className="pill-btn"
            style={{
              width: '100%',
              padding: '16px',
              fontSize: '1rem',
              fontWeight: 600,
              background: 'var(--foreground)',
              color: 'var(--background)',
              border: 'none',
              cursor: status === 'loading' ? 'not-allowed' : 'pointer',
              opacity: status === 'loading' ? 0.7 : 1
            }}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

        </form>
      )}
    </div>
  );
}
