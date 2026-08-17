import { Hexagon, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo size={48} />
            <p className="footer-desc">
              Ingeniería de software a medida, plataformas web y soluciones digitales de alto rendimiento.
            </p>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-heading">Soluciones</h4>
            <a href="#">Desarrollo a Medida</a>
            <a href="#">Aplicaciones Web</a>
            <a href="#">Automatización</a>
            <a href="#">Consultoría Técnica</a>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Empresa</h4>
            <a href="#">Sobre Nosotros</a>
            <a href="#">Casos de Éxito</a>
            <a href="#">Stack Tecnológico</a>
            <a href="#">Blog</a>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Contacto</h4>
            <div className="contact-item">
              <Mail size={16} />
              <span>jorgesm030407@gmail.com</span>
            </div>
            <div className="contact-item">
              <Phone size={16} />
              <span>WhatsApp: +52 1 764 111 4505</span>
            </div>
            <div className="contact-item">
              <MapPin size={16} />
              <span>Puebla, México</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} TECSM. Todos los derechos reservados.</p>
          <div className="legal-links">
            <Link to="/privacidad">Privacidad</Link>
            <Link to="/privacidad#terminos">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
