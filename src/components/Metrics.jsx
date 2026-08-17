import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function Counter({ from, to, suffix = '', duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;
    
    let startTime;
    let animationFrame;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      const percentage = Math.min(progress / (duration * 1000), 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      
      const currentCount = from + (to - from) * easeOut;
      setCount(currentCount);
      
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, from, to, duration]);

  // Format logic (if it has decimals, format with 1 decimal)
  const isDecimal = to % 1 !== 0;
  const formatted = isDecimal ? count.toFixed(1) : Math.round(count);

  return (
    <span ref={ref}>
      {formatted}{suffix}
    </span>
  );
}

export default function Metrics() {
  const metrics = [
    { value: 150, suffix: '%', label: 'Aumento en Retención' },
    { value: 0.9, suffix: 's', label: 'Tiempo de Carga Promedio' },
    { value: 99.9, suffix: '%', label: 'Disponibilidad Garantizada' },
    { value: 15, suffix: '+', label: 'Empresas Escaladas' },
  ];

  return (
    <section className="container" style={{ padding: '4rem 24px', margin: '4rem auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', textAlign: 'center' }}>
        {metrics.map((metric, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <h3 className="font-display" style={{ fontSize: '3.5rem', color: 'var(--brand-turq)', marginBottom: '0.5rem', fontWeight: 800 }}>
              {metric.value < 10 ? '' : '+'}<Counter from={0} to={metric.value} suffix={metric.suffix} />
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: 500 }}>
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
