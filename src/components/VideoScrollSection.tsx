'use client';

import { useEffect, useRef, useState } from 'react';

export default function VideoScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // We use a small technique to preload the video so it scrubs smoothly
    if (videoRef.current) {
      videoRef.current.load();
      // Setting currentTime immediately helps mobile browsers realize they need to fetch frames
      videoRef.current.currentTime = 0.01;
    }

    let animationFrameId: number;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (!containerRef.current || !videoRef.current) return;
      
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far we've scrolled into the container
      const maxScroll = height - windowHeight;
      const scrollPosition = -top;
      
      let scrollFraction = scrollPosition / maxScroll;
      
      // Clamp between 0 and 1
      scrollFraction = Math.max(0, Math.min(1, scrollFraction));
      setProgress(scrollFraction);

      // Update video time only if it's actually loaded
      if (videoRef.current.duration) {
        videoRef.current.currentTime = scrollFraction * videoRef.current.duration;
      }
    };

    const loop = () => {
      // Only recalculate if we've actually scrolled
      if (lastScrollY !== window.scrollY) {
        handleScroll();
        lastScrollY = window.scrollY;
      }
      animationFrameId = requestAnimationFrame(loop);
    };

    // Start loop
    animationFrameId = requestAnimationFrame(loop);

    // Initial call
    handleScroll();

    // Wake up suspended video decoders on iOS when the iframe modal closes
    const handleWakeUp = () => {
      if (videoRef.current) {
        // Calling load() completely re-initializes the iOS media decoder pipeline
        videoRef.current.load();
        
        // Force the frame to render correctly based on current scroll position
        if (containerRef.current) {
          const { top, height } = containerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          let scrollFraction = -top / (height - windowHeight);
          scrollFraction = Math.max(0, Math.min(1, scrollFraction));
          if (videoRef.current.duration) {
            videoRef.current.currentTime = scrollFraction * videoRef.current.duration;
          }
        }
      }
    };
    window.addEventListener('wake-up-video', handleWakeUp);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('wake-up-video', handleWakeUp);
    };
  }, []);

  // Helper for smoother text reveals
  const getOpacity = (start: number, end: number, fadePadding = 0.05) => {
    if (progress < start - fadePadding || progress > end + fadePadding) return 0;
    if (progress >= start && progress <= end) return 1;
    if (progress < start) return (progress - (start - fadePadding)) / fadePadding;
    return 1 - ((progress - end) / fadePadding);
  };

  const getTransform = (center: number) => {
    return `translateY(${(center - progress) * 100}px)`;
  };

  return (
    <section 
      ref={containerRef} 
      className="video-scroll-container"
      style={{ 
        height: '400vh', 
        position: 'relative',
        backgroundColor: 'var(--background)',
        zIndex: 5,
        transition: 'background-color 0.3s ease'
      }}
    >
      <div 
        className="video-sticky-wrapper"
        style={{ 
          position: 'sticky', 
          top: 0, 
          height: '100vh', 
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--background)',
          transition: 'background-color 0.3s ease'
        }}
      >
        <video
          ref={videoRef}
          src="/stop-scroll-optimized.mp4"
          playsInline
          muted
          preload="auto"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: progress > 0.95 ? 1 - ((progress - 0.95) * 20) : 1
          }}
        />

        {/* Text Overlays - controlled by progress state */}
        <div 
          className="scroll-text-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none'
          }}
        >
          {/* First Text Block */}
          <div style={{
            // Start at 0 so it's fully visible on load
            opacity: getOpacity(0.00, 0.25),
            // Start it 150px lower on the screen than dead center
            transform: `translateY(${150 + (0 - progress) * 400}px) scale(${1.0 + progress * 1.2})`,
            position: 'absolute',
            textAlign: 'center',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            mixBlendMode: 'overlay',
            zIndex: 10
          }}>
            <h2 className="scroll-video-text">
              We don't just build websites,
            </h2>
          </div>

          {/* Second Text Block */}
          <div style={{
            opacity: getOpacity(0.35, 0.55),
            transform: `translateY(${(0.45 - progress) * 400}px) scale(${0.9 + (progress - 0.35) * 1.2})`,
            position: 'absolute',
            textAlign: 'center',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            mixBlendMode: 'overlay',
            zIndex: 10
          }}>
            <h2 className="scroll-video-text">
              We build experiences.
            </h2>
          </div>

          {/* Third Text Block (Flower Scene) */}
          <div style={{
            // The flower scene appears towards the end of the video
            opacity: getOpacity(0.65, 0.95),
            // Combining translateY with scale to mimic the camera moving closer
            transform: `translateY(${(0.80 - progress) * 600}px) scale(${0.9 + (progress - 0.65) * 1.5})`,
            position: 'absolute',
            textAlign: 'center',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            // mix-blend-mode makes the text color interact with the video pixels behind it,
            // making it look like it's physically in the scene receiving light
            mixBlendMode: 'overlay',
            zIndex: 10
          }}>
            <h2 className="scroll-video-text">
              Experience the Difference.
            </h2>
          </div>

        </div>
      </div>
    </section>
  );
}
