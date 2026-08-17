import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

export default function FeaturedWork() {
  const projects = [
    { 
      title: 'Global E-Commerce API', 
      metrics: '+300% Ventas Mensuales', 
      desc: 'Plataforma B2B headless para distribución global.',
      color: 'var(--brand-turq)'
    },
    { 
      title: 'Plataforma Médica Inteligente', 
      metrics: '-40% Costos Operativos', 
      desc: 'Gestión hospitalaria y portal de pacientes en tiempo real.',
      color: 'var(--brand-indigo)'
    }
  ];

  return (
    <section className="container" style={{ padding: '6rem 24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 className="section-title font-display" style={{ marginBottom: '0.5rem' }}>Casos de <span className="text-gradient">Éxito</span></h2>
          <p className="section-subtitle" style={{ margin: 0, textAlign: 'left' }}>Resultados tangibles para negocios que exigen lo mejor.</p>
        </div>
        <Button to="/portafolio" variant="secondary">
          Ver Todo el Portafolio <ArrowRight size={18} style={{ marginLeft: '8px' }} />
        </Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            className="glass-panel" 
            style={{ padding: '3rem 2rem', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: project.color }}></div>
            <span style={{ display: 'inline-block', padding: '6px 12px', background: 'rgba(0,0,0,0.05)', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, color: project.color, marginBottom: '1rem', border: `1px solid ${project.color}` }}>
              {project.metrics}
            </span>
            <h3 className="font-display" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{project.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
