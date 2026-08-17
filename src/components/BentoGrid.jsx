import { motion } from 'framer-motion';
import { Target, Zap, Shield, Search } from 'lucide-react';
import { useRef } from 'react';
import { staggerContainer, fadeInUp, awwwardsEasing } from '../utils/animations';
import './BentoGrid.css';
import './GlowEffect.css';

export default function BentoGrid() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: awwwardsEasing } 
    }
  };

  const gridRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll('.glow-effect');
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  return (
    <section className="bento-section container">
      <div style={{ marginBottom: '3rem' }}>
        <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="section-title font-display">
          Impulsamos tu <span className="text-gradient">Proyecto</span>
        </motion.h2>
        <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }} className="section-subtitle">
          Trabajamos de la mano contigo para crear soluciones digitales que realmente funcionan.
        </motion.p>
      </div>

      <motion.div 
        ref={gridRef}
        className="bento-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        onMouseMove={handleMouseMove}
      >
        <motion.div className="bento-item bento-large glass-panel glow-effect" variants={itemVariants}>
          <Zap size={40} color="var(--brand-turq)" />
          <h3 className="font-display">Rendimiento Optimizado</h3>
          <p>Desarrollamos sitios web y aplicaciones rápidas y eficientes, garantizando una excelente experiencia de usuario desde el primer segundo.</p>
        </motion.div>
        
        <motion.div className="bento-item glass-panel glow-effect" variants={itemVariants}>
          <Target size={32} color="var(--brand-cobalt)" />
          <h3 className="font-display">Enfoque en el Usuario</h3>
          <p>Diseños intuitivos pensados para facilitar la navegación y conectar con tus clientes.</p>
        </motion.div>

        <motion.div className="bento-item glass-panel glow-effect" variants={itemVariants}>
          <Search size={32} color="var(--brand-indigo)" />
          <h3 className="font-display">Visibilidad Orgánica</h3>
          <p>Estructuramos tu proyecto para que los motores de búsqueda lo encuentren fácilmente.</p>
        </motion.div>

        <motion.div className="bento-item bento-wide glass-panel glow-effect" variants={itemVariants}>
          <Shield size={40} color="var(--brand-turq)" />
          <div className="bento-wide-content">
            <h3 className="font-display">Desarrollo a la Medida</h3>
            <p>Creamos soluciones únicas adaptadas a tus necesidades. Sin plantillas genéricas, asegurando que tu plataforma sea segura, flexible y lista para crecer contigo.</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
