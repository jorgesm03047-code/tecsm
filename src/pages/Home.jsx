import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import Marquee from '../components/Marquee';
import BentoGrid from '../components/BentoGrid';
import Metrics from '../components/Metrics';
import FeaturedWork from '../components/FeaturedWork';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { pageTransition, fadeInUp } from '../utils/animations';

export default function Home() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Hero />
      <Marquee />
      <Metrics />
      <BentoGrid />
      <FeaturedWork />
      <TechStack />
      
      <section className="container" style={{ padding: '6rem 24px', textAlign: 'center' }}>
        <motion.div 
          style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--bg-glass)', padding: '4rem', borderRadius: '32px', border: '1px solid var(--border-glass)' }}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1.5rem' }}>¿Listo para dar el <span className="text-gradient">Siguiente Paso</span>?</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Mejora tu presencia digital, atrae más clientes y optimiza tus procesos. Agenda una llamada y descubramos cómo podemos ayudarte.
          </p>
          <Button to="/contacto" variant="primary" style={{ fontSize: '1.1rem', padding: '16px 32px' }}>
            Agendar Llamada Estratégica
          </Button>
        </motion.div>
      </section>
    </motion.div>
  );
}
