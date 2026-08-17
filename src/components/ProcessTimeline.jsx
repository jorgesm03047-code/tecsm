import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket } from 'lucide-react';
import './ProcessTimeline.css';

export default function ProcessTimeline() {
  const steps = [
    {
      icon: Search,
      title: '1. Diagnóstico Estratégico',
      desc: 'Analizamos a fondo tu modelo de negocio, cuellos de botella operativos y objetivos de conversión para definir una hoja de ruta tecnológica exacta.'
    },
    {
      icon: PenTool,
      title: '2. Prototipado Interactivo',
      desc: 'Diseñamos interfaces de alta fidelidad centradas en el usuario (UX/UI). Visualizarás y probarás el producto final antes de escribir una sola línea de código.'
    },
    {
      icon: Code,
      title: '3. Desarrollo y Pruebas',
      desc: 'Ingeniería ágil y robusta. Construimos arquitecturas escalables con tecnologías modernas (React, Node) sometidas a rigurosos controles de calidad (QA).'
    },
    {
      icon: Rocket,
      title: '4. Lanzamiento y Escalamiento',
      desc: 'Despliegue sin fricciones en infraestructura de alto rendimiento (Cloud). Monitoreo continuo y optimización de conversión post-lanzamiento.'
    }
  ];

  return (
    <section className="timeline-section container">
      <div className="timeline-header">
        <h2 className="section-title font-display">Nuestro <span className="text-gradient">Proceso</span></h2>
        <p className="section-subtitle">Metodología ágil diseñada para entregar valor rápido sin comprometer la calidad.</p>
      </div>

      <div className="timeline-grid">
        {steps.map((step, i) => (
          <motion.div 
            key={i} 
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <div className="timeline-icon-box">
              <step.icon size={28} />
            </div>
            <h3 className="font-display">{step.title}</h3>
            <p>{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
