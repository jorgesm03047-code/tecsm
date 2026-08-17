import { motion } from 'framer-motion';
import { Layout, Share2, MapPin, BarChart3, Smartphone, Zap } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: Layout,
    title: 'Desarrollo Web y E-Commerce',
    description: 'Construimos páginas web corporativas y tiendas online de alto rendimiento. Código desde cero, diseño ultra-rápido y optimizado para convertir visitantes en clientes de manera constante.',
    color: 'var(--brand-turq)'
  },
  {
    icon: Share2,
    title: 'Creación y Gestión de Redes',
    description: 'Community Management profesional. Diseñamos estrategias de contenido atractivas, interactuamos con tu audiencia y construimos una comunidad leal en torno a tu marca.',
    color: 'var(--brand-cobalt)'
  },
  {
    icon: MapPin,
    title: 'Registro en Google Maps',
    description: 'Dominamos el SEO Local. Configuramos y optimizamos tu perfil de negocio en Google Maps para que los clientes cerca de ti te encuentren como su primera opción.',
    color: 'var(--brand-indigo)'
  },
  {
    icon: BarChart3,
    title: 'Meta Insights y Analítica',
    description: 'Tomamos decisiones basadas en datos puros. Analizamos las métricas de tus redes y campañas para identificar qué contenidos y segmentaciones generan más ventas reales.',
    color: 'var(--brand-turq)'
  },
  {
    icon: Zap,
    title: 'Pruebas A/B (A/B Testing)',
    description: 'No adivinamos, comprobamos. Lanzamos múltiples versiones de tus campañas o páginas web para medir científicamente cuál variante genera un mayor retorno de inversión (ROI).',
    color: 'var(--brand-cobalt)'
  },
  {
    icon: Smartphone,
    title: 'Desarrollo de Software a Medida',
    description: 'Sistemas empresariales complejos y automatización de procesos internos. Si existe un cuello de botella en tu empresa, desarrollamos el software exacto para solucionarlo.',
    color: 'var(--brand-indigo)'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Services() {
  return (
    <section id="services" className="services-section container">
      <div className="services-header">
        <motion.h2 
          className="section-title font-display"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Ingeniería de <span className="text-gradient">Precisión</span>
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          No usamos plantillas. Construimos infraestructura digital robusta adaptada a las reglas de negocio más complejas.
        </motion.p>
      </div>

      <motion.div 
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((service, index) => (
          <motion.div 
            key={service.title}
            className="service-card glass-panel"
            variants={itemVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="service-icon-wrapper" style={{ color: service.color }}>
              <service.icon size={32} strokeWidth={1.5} />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
