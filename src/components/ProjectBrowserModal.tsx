'use client';

import { useEffect } from 'react';

interface ProjectBrowserModalProps {
  url: string;
  onClose: () => void;
}

export default function ProjectBrowserModal({ url, onClose }: ProjectBrowserModalProps) {
  useEffect(() => {
    // Hide scrollbar on desktop
    document.body.style.overflow = 'hidden';
    
    // Bulletproof iOS background scroll lock
    // Prevents touch dragging on the overlay/header from scrolling the main page
    const preventBackgroundScroll = (e: TouchEvent) => {
      e.preventDefault();
    };

    // Attach to document with { passive: false } to allow preventDefault
    // This will NOT affect the iframe since it has its own document scope
    document.addEventListener('touchmove', preventBackgroundScroll, { passive: false });

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('touchmove', preventBackgroundScroll);
    };
  }, []);

  return (
    <div className="browser-modal-overlay" onClick={onClose}>
      <button 
        className="browser-modal-close" 
        onClick={onClose}
        aria-label="Close"
      >
        ✕
      </button>

      <div className="browser-window-container" onClick={(e) => e.stopPropagation()}>
        <div className="browser-window glass-panel">
          {/* Header */}
          <div className="browser-header">
            <div className="browser-actions">
              <span className="action-btn close" onClick={onClose}></span>
              <span className="action-btn minimize"></span>
              <span className="action-btn maximize"></span>
            </div>
            
            <div className="browser-url-bar">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <span>{url}</span>
            </div>
          </div>
          
          {/* Iframe Content */}
          <div className="browser-content">
            <iframe 
              src={url} 
              title="Project Live Preview"
              className="browser-iframe"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
