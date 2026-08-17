import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Button.css';

export default function Button({ children, to, href, variant = 'primary', className = '', ...props }) {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.3; // Magnetic strength
    const y = (e.clientY - top - height / 2) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const content = (
    <motion.div
      ref={buttonRef}
      className={`btn btn-${variant} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      {...props}
    >
      {children}
    </motion.div>
  );

  if (to) {
    return <Link to={to} style={{ display: 'inline-block' }}>{content}</Link>;
  }
  
  if (href) {
    return <a href={href} style={{ display: 'inline-block' }}>{content}</a>;
  }

  return content;
}
