import { motion } from 'framer-motion';
import MultiStepForm from '../components/MultiStepForm';
import { Mail, MessageSquare, Calendar } from 'lucide-react';
import { pageTransition } from '../utils/animations';

export default function ContactPage() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ paddingTop: '120px', paddingBottom: '6rem', minHeight: '100vh' }}
      className="container"
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'start' }}>
        
        {/* Left Side: Copy and Links */}
        <div>
          <h1 className="font-display" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '1rem', lineHeight: 1.1 }}>
            Hablemos de tu <span className="text-gradient">Próximo Nivel</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '3rem', maxWidth: '500px' }}>
            Ya sea que necesites escalar tu infraestructura, lanzar un nuevo producto digital o dominar tu sector, estamos listos para ser tu partner tecnológico.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <a href="mailto:jorgesm030407@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'var(--text-primary)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-turq)' }}>
                <Mail size={24} />
              </div>
              <div>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Escríbenos directamente</p>
                <p style={{ margin: 0, fontWeight: 600, fontSize: '1.1rem' }}>jorgesm030407@gmail.com</p>
              </div>
            </a>

            <a href="https://wa.me/5217641114505" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'var(--text-primary)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-cobalt)' }}>
                <MessageSquare size={24} />
              </div>
              <div>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Respuesta Inmediata</p>
                <p style={{ margin: 0, fontWeight: 600, fontSize: '1.1rem' }}>WhatsApp Comercial</p>
              </div>
            </a>

            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'var(--text-primary)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-indigo)' }}>
                <Calendar size={24} />
              </div>
              <div>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Reserva un espacio</p>
                <p style={{ margin: 0, fontWeight: 600, fontSize: '1.1rem' }}>Agendar Videollamada</p>
              </div>
            </a>
          </div>
        </div>

        {/* Right Side: Multi-Step Form */}
        <div>
          <MultiStepForm />
        </div>

      </div>
    </motion.div>
  );
}
