import { motion } from 'framer-motion';
import { Smartphone, Zap, Star, ArrowRight, ShieldCheck, MapPin, BarChart3 } from 'lucide-react';
import { pageTransition } from '../utils/animations';

export default function ProductsPage() {
  const products = [
    { 
      title: 'Tarjetas NFC Premium', 
      description: 'Consigue reseñas en Google al instante. Solo acerca la tarjeta al smartphone de tu cliente y la página de reseñas se abrirá automáticamente. Aumenta tu reputación online sin fricción.',
      image: `${import.meta.env.BASE_URL}nfc-card.jpg`
    },
    {
      title: 'Sistema de Punto de Venta (POS)',
      description: 'Gestión integral de ventas, inventario y facturación en la nube. Controla tu negocio desde cualquier dispositivo con una interfaz ultra rápida, diseñada para acelerar tus procesos comerciales.'
    }
  ];

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ paddingTop: '120px', paddingBottom: '6rem', minHeight: '100vh' }}
      className="container"
    >
      <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h1 className="font-display" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Productos <span className="text-gradient">TECSM</span></h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', textAlign: 'justify' }}>
          Potencia tu captación local con tecnología física conectada al mundo digital.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
        {products.map((product, i) => (
          <motion.div 
            key={i}
            className="glass-panel" 
            style={{ padding: '2rem', borderRadius: '24px', borderLeft: '4px solid var(--brand-turq)', background: 'rgba(0, 180, 216, 0.05)', display: 'flex', flexDirection: 'column' }}
            whileHover={{ scale: 1.02, y: -10 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {product.image && (
              <img 
                src={product.image} 
                alt={product.title} 
                style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', borderRadius: '16px', marginBottom: '2rem' }} 
              />
            )}
            <h3 className="font-display" style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{product.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, textAlign: 'justify', flex: 1, margin: 0 }}>{product.description}</p>
          </motion.div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="font-display section-title">¿Cómo <span className="text-gradient">Funciona?</span></h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'center' }}>
        {[
          { step: '1', title: 'Acerca', desc: 'El cliente acerca su smartphone a la tarjeta.' },
          { step: '2', title: 'Detecta', desc: 'El chip NFC lanza automáticamente tu link de Google.' },
          { step: '3', title: 'Reseña', desc: 'El cliente deja 5 estrellas sin tener que buscarte.' }
        ].map((item, i) => (
          <motion.div 
            key={i}
            className="glass-panel"
            style={{ padding: '2rem', borderRadius: '16px' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--brand-gradient)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 800, margin: '0 auto 1.5rem' }}>
              {item.step}
            </div>
            <h3 className="font-display" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{item.title}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
