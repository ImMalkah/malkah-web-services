import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Background glowing orbs */}
      <div className="glow-bg"></div>
      <div className="glow-bg-2"></div>

      <div className="container">
        {/* Navbar */}
        <nav className="navbar animate-fade-in">
          <div style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Malkah<span className="text-gradient">Web</span>
          </div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#work">Our Work</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="#contact" className="btn btn-glass" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
            Get in touch
          </a>
        </nav>

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
            <div className="glass portfolio-card">
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
                <Image 
                  src="/stonex.png" 
                  alt="Stonex Contracting" 
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
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
            <div className="glass portfolio-card">
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
                <Image 
                  src="/rannosh.png" 
                  alt="Rannosh Grill" 
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
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
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
              <a href="tel:9055163505" className="btn btn-glass" style={{ width: '100%', maxWidth: '300px' }}>
                📞 (905) 516-3505
              </a>
              <a href="mailto:info@malkahservices.ca" className="btn btn-glass" style={{ width: '100%', maxWidth: '300px' }}>
                ✉️ info@malkahservices.ca
              </a>
              <a href="https://www.instagram.com/malkahwebservices" target="_blank" rel="noopener noreferrer" className="btn btn-glass" style={{ width: '100%', maxWidth: '300px' }}>
                📱 @malkahwebservices
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ padding: '40px 0', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', color: '#71717a' }}>
          <p>© {new Date().getFullYear()} Malkah Web Services. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
