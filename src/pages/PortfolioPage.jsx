import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { pageTransition } from '../utils/animations';

export default function PortfolioPage() {
  const [filter, setFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['Todos', 'E-Commerce', 'Web Apps', 'Institucional'];

  const projects = [
    { 
      id: 1,
      title: 'Tienda de Deportes y Redes Sociales', 
      category: 'E-Commerce', 
      sector: 'Retail Deportivo',
      metrics: '+300% Ventas Online', 
      desc: 'Desarrollo de eCommerce completo con integración de catálogo sincronizado a redes sociales.', 
      challenge: 'La tienda dependía exclusivamente de ventas físicas y no tenía infraestructura para captar clientes en plataformas digitales.',
      solution: 'Implementamos una tienda online de alta conversión conectada directamente con Instagram y Facebook Shopping para compras sin fricción.',
      color: 'var(--brand-turq)' 
    },
    { 
      id: 2,
      title: 'POS para Tienda de Pinturas', 
      category: 'Web Apps', 
      sector: 'Retail Especializado',
      metrics: 'Gestión 24/7', 
      desc: 'Sistema de Punto de Venta a medida para sucursales e inventario de fórmulas.', 
      challenge: 'Pérdidas de inventario por falta de sincronización entre sucursales físicas y procesos de cobro excesivamente lentos.',
      solution: 'Desarrollamos un POS basado en la nube que conecta todas las sucursales en tiempo real, gestionando stock y facturación instantánea.',
      color: 'var(--brand-cobalt)' 
    },
    { 
      id: 3,
      title: 'Sistema Médico Integral', 
      category: 'Institucional', 
      sector: 'Salud',
      metrics: '+240% Eficiencia', 
      desc: 'Plataforma unificada con expedientes clínicos digitales y agendamiento inteligente.', 
      challenge: 'Uso de expedientes físicos y sistemas fragmentados que provocaban largas esperas y pérdida de información de pacientes.',
      solution: 'Creamos una arquitectura unificada y segura donde los médicos acceden a expedientes encriptados y los pacientes agendan citas desde su celular.',
      color: 'var(--brand-indigo)' 
    }
  ];

  const filteredProjects = filter === 'Todos' ? projects : projects.filter(p => p.category === filter);

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
        <h1 className="font-display" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '1rem' }}>Nuestro <span className="text-gradient">Portafolio</span></h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>Casos de éxito reales centrados en resultados de negocio y experiencia de usuario.</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
        {filters.map(f => (
          <button 
            key={f} 
            onClick={() => setFilter(f)}
            style={{ 
              background: filter === f ? 'var(--text-primary)' : 'transparent',
              color: filter === f ? 'var(--bg-primary)' : 'var(--text-primary)',
              border: filter === f ? '1px solid var(--text-primary)' : '1px solid var(--border-glass)',
              padding: '8px 20px',
              borderRadius: '30px',
              cursor: 'pointer',
              fontWeight: 600,
              transition: 'all 0.3s ease'
            }}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div 
        layout
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectModal 
        isOpen={!!selectedProject} 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </motion.div>
  );
}
