import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pageTransition } from '../utils/animations';
import { Ghost, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ 
        paddingTop: '120px', 
        paddingBottom: '6rem', 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}
      className="container"
    >
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, -5, 5, -5, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        style={{ marginBottom: '2rem' }}
      >
        <Ghost size={100} color="var(--brand-turq)" strokeWidth={1.5} />
      </motion.div>
      
      <h1 className="font-display" style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', margin: 0, lineHeight: 1, color: 'var(--text-primary)' }}>
        4<span className="text-gradient">0</span>4
      </h1>
      
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
        Página no encontrada
      </h2>
      
      <p style={{ maxWidth: '500px', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.6 }}>
        Parece que el enlace que seguiste está roto o la página ha sido movida a otra dimensión digital.
      </p>

      <Link 
        to="/" 
        className="primary-btn" 
        style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
      >
        <ArrowLeft size={20} /> Volver al Inicio
      </Link>
    </motion.div>
  );
}
