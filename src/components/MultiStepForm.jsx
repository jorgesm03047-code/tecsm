import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Send } from 'lucide-react';
import Button from './Button';

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    type: '',
    budget: '',
    name: '',
    email: '',
    company: ''
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSelect = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setTimeout(nextStep, 300); // Auto-advance on select
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  return (
    <div className="glass-panel" style={{ padding: '3rem', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
      
      {/* Progress Bar */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '3rem' }}>
        {[1, 2, 3].map(i => (
          <div key={i} style={{ height: '4px', flex: 1, background: step >= i ? 'var(--brand-turq)' : 'var(--border-glass)', borderRadius: '2px', transition: 'background 0.3s ease' }} />
        ))}
      </div>

      <div style={{ position: 'relative', minHeight: '350px' }}>
        <AnimatePresence mode="wait" custom={1}>
          
          {step === 1 && (
            <motion.div
              key="step1"
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{ position: 'absolute', width: '100%' }}
            >
              <h3 className="font-display" style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>¿Qué tipo de solución buscas?</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Software a Medida (SaaS)', 'Plataforma Web / E-Commerce', 'Automatización de Procesos'].map(option => (
                  <button
                    key={option}
                    onClick={() => handleSelect('type', option)}
                    style={{
                      padding: '1.25rem 1.5rem',
                      textAlign: 'left',
                      background: formData.type === option ? 'var(--bg-secondary)' : 'transparent',
                      border: formData.type === option ? '1px solid var(--brand-turq)' : '1px solid var(--border-glass)',
                      borderRadius: '12px',
                      color: 'var(--text-primary)',
                      fontSize: '1.1rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    {option}
                    {formData.type === option && <ArrowRight size={20} color="var(--brand-turq)" />}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{ position: 'absolute', width: '100%' }}
            >
              <h3 className="font-display" style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>¿En qué etapa se encuentra tu empresa?</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Startup Inicial (MVP)', 'Empresa en Crecimiento (Escalando)', 'Corporativo Consolidado'].map(option => (
                  <button
                    key={option}
                    onClick={() => handleSelect('budget', option)}
                    style={{
                      padding: '1.25rem 1.5rem',
                      textAlign: 'left',
                      background: formData.budget === option ? 'var(--bg-secondary)' : 'transparent',
                      border: formData.budget === option ? '1px solid var(--brand-turq)' : '1px solid var(--border-glass)',
                      borderRadius: '12px',
                      color: 'var(--text-primary)',
                      fontSize: '1.1rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    {option}
                    {formData.budget === option && <ArrowRight size={20} color="var(--brand-turq)" />}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{ position: 'absolute', width: '100%' }}
            >
              <h3 className="font-display" style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Tus datos de contacto</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <input 
                  type="text" 
                  placeholder="Tu Nombre" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  style={{ width: '100%', padding: '1rem 1.5rem', borderRadius: '12px', background: 'transparent', border: '1px solid var(--border-glass)', color: 'var(--text-primary)', fontSize: '1rem', outline: 'none' }}
                />
                <input 
                  type="email" 
                  placeholder="Correo de Negocios" 
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  style={{ width: '100%', padding: '1rem 1.5rem', borderRadius: '12px', background: 'transparent', border: '1px solid var(--border-glass)', color: 'var(--text-primary)', fontSize: '1rem', outline: 'none' }}
                />
                <input 
                  type="text" 
                  placeholder="Empresa (Opcional)" 
                  value={formData.company}
                  onChange={e => setFormData({...formData, company: e.target.value})}
                  style={{ width: '100%', padding: '1rem 1.5rem', borderRadius: '12px', background: 'transparent', border: '1px solid var(--border-glass)', color: 'var(--text-primary)', fontSize: '1rem', outline: 'none' }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem' }}>
        {step > 1 ? (
          <button onClick={prevStep} style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '1rem' }}>
            <ArrowLeft size={18} /> Atrás
          </button>
        ) : <div></div>}
        
        {step === 3 && (
          <Button 
            variant="primary" 
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            onClick={() => {
              const text = encodeURIComponent(`Hola TECSM! Me interesa la solución: ${formData.type}. Mi empresa está en etapa: ${formData.budget}. Soy ${formData.name}.`);
              window.open(`https://wa.me/5217641114505?text=${text}`, '_blank');
            }}
          >
            Enviar Solicitud <Send size={18} />
          </Button>
        )}
      </div>

    </div>
  );
}
