import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
}

export default function ServiceCard({ title, subtitle, description }: ServiceCardProps) {
  return (
    <div className="service-card">
      <h3 className="font-serif" style={{ fontSize: '2.2rem', fontWeight: 400, color: 'var(--foreground)', marginBottom: '8px', lineHeight: 1.1 }}>
        {title}
      </h3>
      <p style={{ fontSize: '1rem', fontStyle: 'italic', color: 'var(--foreground)', opacity: 0.8, marginBottom: '16px' }}>
        {subtitle}
      </p>
      <p style={{ fontSize: '0.95rem', color: 'var(--foreground)', opacity: 0.6, lineHeight: 1.6, marginBottom: 'auto' }}>
        {description}
      </p>
      <button className="service-btn" style={{ width: '100%' }}>
        Read more
      </button>
    </div>
  );
}
