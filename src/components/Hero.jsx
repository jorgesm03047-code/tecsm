import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, BarChart2 } from 'lucide-react';
import Button from './Button';
import { fadeInUp } from '../utils/animations';
import './Hero.css';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="hero-section">
      <div className="hero-ambient-glow">
        <div className="glow-sphere glow-1" />
        <div className="glow-sphere glow-2" />
      </div>

      <motion.div 
        className="container hero-content"
        style={{ y, opacity }}
      >
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: '900px', width: '100%', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <h1 className="hero-title font-display">
            Impulsamos tu Crecimiento <br /> con <span className="text-gradient">Tecnología</span>
          </h1>
          <p className="hero-subtitle">
            Diseñamos y desarrollamos plataformas web, software a medida y estrategias digitales enfocadas en potenciar tus resultados y hacer crecer tu negocio.
          </p>
          
          <div className="hero-actions" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button to="/contacto" variant="primary">
              Cotizar Proyecto <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Button>
            <Button to="/servicios" variant="secondary">
              Explorar Soluciones <BarChart2 size={18} style={{ marginLeft: '8px' }} />
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
