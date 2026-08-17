import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, onClick }) {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation (-5 to 5 degrees)
    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((y / rect.height) - 0.5) * -10;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{ rotateX: rotation.x, rotateY: rotation.y }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ perspective: 1000, cursor: 'pointer', transformStyle: 'preserve-3d' }}
    >
      <div 
        className="glass-panel project-card-inner" 
        style={{ 
          padding: '2.5rem', 
          borderRadius: '24px', 
          position: 'relative', 
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          transformStyle: 'preserve-3d'
        }}
      >
        <div 
          style={{ 
            width: '100%', 
            height: '220px', 
            borderRadius: '12px', 
            background: `linear-gradient(135deg, ${project.color}, rgba(0,0,0,0))`, 
            opacity: 0.8, 
            position: 'relative', 
            overflow: 'hidden',
            marginBottom: '1.5rem',
            transform: 'translateZ(30px)' // 3D pop effect
          }}
        >
          <div style={{ position: 'absolute', width: '150%', height: '150%', top: '-25%', left: '-25%', background: 'rgba(255,255,255,0.1)', transform: 'rotate(15deg)', backdropFilter: 'blur(40px)' }}></div>
        </div>

        <div style={{ flex: 1, transform: 'translateZ(40px)' }}>
          <span style={{ display: 'inline-block', padding: '4px 10px', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, color: project.color, marginBottom: '1rem', border: `1px solid ${project.color}` }}>
            {project.category}
          </span>
          <h3 className="font-display" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{project.title}</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{project.desc}</p>
        </div>

        <div style={{ marginTop: 'auto', transform: 'translateZ(50px)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', padding: '0.75rem 1rem', background: 'var(--bg-primary)', borderRadius: '8px', border: '1px solid var(--border-glass)' }}>
            <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>{project.metrics}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
