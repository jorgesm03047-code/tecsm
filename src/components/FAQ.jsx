import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: '¿Cuánto tiempo tarda en desarrollarse una página web?',
      a: 'Depende de la complejidad. Una landing page puede estar lista en 1-2 semanas, mientras que una plataforma compleja a medida puede tomar de 1 a 3 meses. Trabajamos con sprints ágiles para entregar valor continuo.'
    },
    {
      q: '¿Ustedes proveen el hosting y dominio?',
      a: 'Sí, ofrecemos soluciones integrales. Podemos gestionar tu infraestructura en la nube (AWS, Vercel) o asesorarte para que mantengas el control total sobre tus servidores.'
    },
    {
      q: '¿Por qué elegir desarrollo a medida en lugar de Wordpress/Shopify?',
      a: 'Las plantillas tienen límites de rendimiento y escalabilidad. Nuestro desarrollo a medida (usando React/Next.js) garantiza velocidades de carga de milisegundos, seguridad impenetrable y una experiencia de usuario que se adapta 100% a las reglas de tu negocio.'
    },
    {
      q: '¿Incluyen servicios de SEO (Posicionamiento en Google)?',
      a: 'Sí, todo nuestro desarrollo incluye SEO Técnico desde el código base (Estructura semántica, velocidad extrema, etiquetas meta). Además, ofrecemos planes mensuales de SEO avanzado.'
    }
  ];

  return (
    <section className="faq-section container">
      <div className="faq-header">
        <h2 className="section-title font-display">Preguntas <span className="text-gradient">Frecuentes</span></h2>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
            <div className="faq-question">
              <h3 className="font-display">{faq.q}</h3>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={24} color="var(--brand-turq)" />
              </motion.div>
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="faq-answer-wrapper"
                >
                  <p className="faq-answer">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
