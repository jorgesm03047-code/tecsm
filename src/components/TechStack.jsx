import { motion } from 'framer-motion';
import { Database, Layout, Server, Cloud, Smartphone, Zap } from 'lucide-react';
import './TechStack.css';

const techs = [
  { name: 'React & Next.js', icons: ['react/61DAFB', 'nextdotjs/000000'] },
  { name: 'Node.js & Go', icons: ['nodedotjs/339933', 'go/00ADD8'] },
  { name: 'PostgreSQL & Redis', icons: ['postgresql/4169E1', 'redis/DC382D'] },
  { name: 'AWS & Docker', icons: ['amazonaws/232F3E', 'docker/2496ED'] },
  { name: 'React Native', icons: ['react/61DAFB'] },
  { name: 'GraphQL & tRPC', icons: ['graphql/E10098', 'trpc/2596B6'] },
];

export default function TechStack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 15 }
    }
  };

  return (
    <section id="stack" className="tech-stack-section">
      <div className="container">
        <motion.div 
          className="stack-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title font-display">Stack <span className="text-gradient">Tecnológico</span></h2>
          <p className="section-subtitle">
            Seleccionamos la herramienta adecuada para cada problema, priorizando rendimiento, seguridad y escalabilidad.
          </p>
        </motion.div>

        <motion.div 
          className="stack-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {techs.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="stack-item glass-panel"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5, boxShadow: "0 10px 30px rgba(0, 180, 216, 0.15)" }}
              whileTap={{ scale: 0.95 }}
            >
              <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
                {tech.icons.map((iconPath, i) => (
                  <img 
                    key={i}
                    src={`https://cdn.simpleicons.org/${iconPath}`} 
                    alt={tech.name} 
                    style={{ width: '28px', height: '28px', filter: document.documentElement.getAttribute('data-theme') === 'dark' && iconPath.includes('000000') ? 'invert(1)' : 'none' }} 
                  />
                ))}
              </div>
              <span className="stack-name">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
