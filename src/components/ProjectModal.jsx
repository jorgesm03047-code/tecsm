import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Button from './Button';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <motion.div 
            style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="glass-panel"
            style={{ 
              position: 'relative', 
              width: '90%', 
              maxWidth: '900px', 
              maxHeight: '90vh', 
              overflowY: 'auto', 
              borderRadius: '24px', 
              padding: '3rem',
              zIndex: 10,
              background: 'var(--bg-primary)'
            }}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <button 
              onClick={onClose} 
              style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-glass)', borderRadius: '50%', padding: '0.5rem', cursor: 'pointer', color: 'var(--text-primary)' }}
            >
              <X size={24} />
            </button>
            
            <span style={{ color: project.color, fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Caso de Éxito / {project.category}
            </span>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>{project.title}</h2>
            
            <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
              <div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Impacto Clave</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>{project.metrics}</p>
              </div>
              <div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Sector</p>
                <p style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)' }}>{project.sector}</p>
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 className="font-display" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>El Reto</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{project.challenge}</p>
            </div>

            <div style={{ marginBottom: '3rem' }}>
              <h3 className="font-display" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Nuestra Solución</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{project.solution}</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
               <Button to="/contacto" variant="primary">Transformar mi negocio similar</Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
