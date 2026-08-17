import React from 'react';

const Logo = ({ className = '', size = 40 }) => (
  <div style={{ display: 'flex', alignItems: 'center' }} className={className}>
    <img 
      src={`${import.meta.env.BASE_URL}logo.png`}
      alt="TECSM Logo Oficial" 
      style={{ height: size * 1.2, objectFit: 'contain' }} 
    />
  </div>
);

export default Logo;
