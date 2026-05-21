'use client';

import dynamic from 'next/dynamic';

// Lazy load the Spline component to prevent SSR hydration errors and improve initial page load
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div style={{
      width: '100%', 
      height: '100%', 
      minHeight: '400px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      color: 'rgba(255, 255, 255, 0.5)'
    }}>
      Loading 3D Experience...
    </div>
  ),
});

interface SplineSceneProps {
  sceneUrl?: string;
}

export default function SplineScene({ 
  sceneUrl = "https://prod.spline.design/irtC8avasg3yFVay/scene.splinecode" 
}: SplineSceneProps) {
  return (
    <div className="spline-wrapper" style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100vh', 
      zIndex: 0,
      overflow: 'hidden'
    }}>
      <Spline scene={sceneUrl} />
    </div>
  );
}
