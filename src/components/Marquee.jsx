import './Marquee.css';

export default function Marquee() {
  const items = [
    "DISEÑO UI/UX AVANZADO", "E-COMMERCE DE ALTA GAMA", "AUTOMATIZACIÓN DE PROCESOS", 
    "SISTEMAS CLOUD", "RETORNO DE INVERSIÓN (ROI)", "ARQUITECTURA ESCALABLE"
  ];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {[...items, ...items, ...items].map((text, i) => (
          <div key={i} className="marquee-item">
            <span className="marquee-text font-display">{text}</span>
            <span className="marquee-separator">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
