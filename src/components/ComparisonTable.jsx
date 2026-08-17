import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';
import './ComparisonTable.css';

export default function ComparisonTable() {
  const comparisonData = [
    { feature: 'Rendimiento y Velocidad', traditional: 'Enfoque estándar', tecsm: 'Optimización avanzada (React/Next.js)' },
    { feature: 'Propiedad del Código', traditional: 'Plataformas por suscripción', tecsm: 'Código 100% tuyo y transferible' },
    { feature: 'Diseño e Identidad', traditional: 'Uso de plantillas pre-hechas', tecsm: 'Diseño a medida centrado en UI/UX' },
    { feature: 'Escalabilidad', traditional: 'Limitada por el sistema base', tecsm: 'Arquitectura lista para crecer' },
    { feature: 'Seguridad', traditional: 'Dependiente de plugins de terceros', tecsm: 'Desarrollo seguro y personalizado' }
  ];

  return (
    <section className="container" style={{ padding: '6rem 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="section-title font-display">El Valor de Elegir <span className="text-gradient">TECSM</span></h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>Compara las ventajas de trabajar con desarrollo moderno y a la medida.</p>
      </div>

      <div className="table-container glass-panel">
        <div className="table-header">
          <div className="table-cell feature-col">Característica</div>
          <div className="table-cell traditional-col">Agencia Tradicional</div>
          <div className="table-cell tecsm-col text-gradient">El Estándar TECSM</div>
        </div>
        
        {comparisonData.map((row, i) => (
          <motion.div 
            key={i} 
            className="table-row"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="table-cell feature-col font-display">{row.feature}</div>
            <div className="table-cell traditional-col">
              <XCircle size={18} color="#ef4444" style={{ flexShrink: 0 }} />
              <span>{row.traditional}</span>
            </div>
            <div className="table-cell tecsm-col">
              <CheckCircle2 size={18} color="var(--brand-turq)" style={{ flexShrink: 0 }} />
              <span style={{ fontWeight: 600 }}>{row.tecsm}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
