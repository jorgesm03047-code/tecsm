import { motion } from 'framer-motion';
import { pageTransition } from '../utils/animations';

export default function PrivacyPage() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ paddingTop: '120px', paddingBottom: '6rem', minHeight: '100vh' }}
      className="container"
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)', lineHeight: 1.8, textAlign: 'justify' }}>
        <h1 className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '2rem', color: 'var(--text-primary)', lineHeight: 1.2 }}>
          Aviso de <span className="text-gradient">Privacidad Integral</span>
        </h1>

        <p style={{ marginBottom: '2rem' }}>
          <strong>Última actualización:</strong> 16 de agosto de 2026
        </p>

        <h3 style={{ color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>1. Identidad y Medios de Contacto del Responsable</h3>
        <p style={{ marginBottom: '1rem' }}>
          El proyecto y marca comercial <strong>TECSM</strong> (en adelante, el "Responsable"), operando como prestador de servicios de diseño, arquitectura de software, plataformas web y soluciones tecnológicas digitales en los Estados Unidos Mexicanos a través del portal web oficial <strong><a href="https://tecsm.com.mx" style={{ color: 'var(--brand-turq)', textDecoration: 'underline' }}>https://tecsm.com.mx</a></strong>, pone a disposición el presente Aviso de Privacidad Integral en cumplimiento estricto de la <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</strong>, su Reglamento, los Lineamientos del Aviso de Privacidad emitidos por el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI) y las disposiciones relativas a la privacidad digital previstas en la <strong>Norma Mexicana NMX-COE-001-SCFI-2018 (Comercio Electrónico)</strong>.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          El Responsable manifiesta que, al encontrarse en etapa de operación digital nativa, establece como canal oficial y directo de atención para cualquier asunto relativo a la protección, tratamiento y ejercicio de derechos sobre datos personales la cuenta de correo electrónico institucional: <strong><a href="mailto:privacidad@tecsm.com.mx" style={{ color: 'var(--brand-turq)', textDecoration: 'underline' }}>privacidad@tecsm.com.mx</a></strong>, así como su canal oficial de atención técnica vía WhatsApp Business enlazado a la plataforma.
        </p>

        <h3 style={{ color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>2. Datos Personales Sujetos a Tratamiento</h3>
        <p style={{ marginBottom: '1rem' }}>
          Para cumplir con los servicios informativos, de prospección y de elaboración de presupuestos solicitados a través del cotizador web y la API de WhatsApp, TECSM recabará y tratará las siguientes categorías de datos personales:
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Datos de Identificación:</strong> Nombre de pila, apellidos, nombre comercial o razón social de la empresa, proyecto u organización que representa.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Datos de Contacto:</strong> Dirección de correo electrónico, número de teléfono móvil vinculado a mensajería instantánea (WhatsApp), ciudad y país de residencia o prestación del servicio.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Datos de Prospección y Necesidades Técnicas:</strong> Tipo de proyecto digital requerido (página web, software a medida, automatización, backend, UI/UX), alcance funcional deseado, fechas límite o tiempos estimados de entrega y rango presupuestal aproximado destinado a la solución.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Metadatos y Datos de Navegación Técnica:</strong> Dirección IP anónima, tipo de navegador, sistema operativo, preferencias de visualización de interfaz (Modo Claro/Oscuro guardado en almacenamiento local) y páginas visitadas dentro de <a href="https://tecsm.com.mx" style={{ color: 'var(--brand-turq)', textDecoration: 'underline' }}>https://tecsm.com.mx</a>.</li>
        </ul>
        <p style={{ marginBottom: '1rem' }}>
          <em>Declaración sobre Datos Sensibles:</em> TECSM hace constar que <strong>no solicita ni almacena datos personales sensibles</strong> (origen étnico, estado de salud, ideología política, creencias religiosas o preferencias personales) a través de sus formularios digitales.
        </p>

        <h3 style={{ color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>3. Finalidades del Tratamiento de los Datos Personales</h3>
        <p style={{ marginBottom: '1rem' }}>
          Los datos personales que recabamos son clasificados de acuerdo a su naturaleza y necesidad:
        </p>
        <p style={{ marginBottom: '0.5rem' }}><strong>Finalidades Primarias (Estrictamente necesarias para el servicio):</strong></p>
        <ol style={{ listStyleType: 'decimal', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Identificar al solicitante y canalizar su solicitud con el área técnica correspondiente.</li>
          <li style={{ marginBottom: '0.5rem' }}>Procesar, analizar y dimensionar las cotizaciones y propuestas técnicas solicitadas a través de <a href="https://tecsm.com.mx" style={{ color: 'var(--brand-turq)', textDecoration: 'underline' }}>https://tecsm.com.mx</a> o vía WhatsApp Business API.</li>
          <li style={{ marginBottom: '0.5rem' }}>Establecer comunicación directa y personalizada para resolver dudas, coordinar reuniones de descubrimiento y presentar propuestas comerciales.</li>
          <li style={{ marginBottom: '0.5rem' }}>Gestionar el inicio de la relación precontractual y la eventual redacción y firma de contratos de prestación de servicios y acuerdos de confidencialidad (NDA).</li>
          <li style={{ marginBottom: '0.5rem' }}>Cumplir con requerimientos legales aplicables a la prestación de servicios profesionales independientes y mercantiles en México.</li>
        </ol>

        <p style={{ marginBottom: '0.5rem' }}><strong>Finalidades Secundarias (Accesorias y no indispensables para el servicio):</strong></p>
        <ol style={{ listStyleType: 'decimal', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Evaluar la calidad en la atención recibida por parte de nuestro equipo.</li>
          <li style={{ marginBottom: '0.5rem' }}>Realizar estudios de mercado internos, estadísticas de demanda de tecnologías y métricas de optimización del sitio.</li>
          <li style={{ marginBottom: '0.5rem' }}>Enviar boletines informativos, actualizaciones tecnológicas o artículos del sector (únicamente si el usuario lo autoriza expresamente).</li>
        </ol>
        <p style={{ marginBottom: '1rem' }}>
          <em>Mecanismo de Negativa para Finalidades Secundarias:</em> En caso de que no desee que sus datos personales sean tratados para finalidades secundarias, podrá manifestar su negativa en cualquier momento enviando un correo electrónico a <strong><a href="mailto:privacidad@tecsm.com.mx" style={{ color: 'var(--brand-turq)', textDecoration: 'underline' }}>privacidad@tecsm.com.mx</a></strong> con el asunto "Negativa para Tratamiento Secundario".
        </p>

        <h3 style={{ color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>4. Tratamiento de Datos vía API de WhatsApp y Servicios en la Nube</h3>
        <p style={{ marginBottom: '1rem' }}>
          El sitio web incorpora la integración de la API de comunicación de <strong>WhatsApp Business</strong>, servicio provisto por la empresa Meta Platforms, Inc. Al hacer uso voluntario de este botón o formulario:
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>El titular consiente la transferencia técnica inmediata de su número de teléfono y del mensaje preformateado hacia los servidores de dicha plataforma.</li>
          <li style={{ marginBottom: '0.5rem' }}>La transmisión, almacenamiento temporal y cifrado de los mensajes se rigen complementariamente bajo las Condiciones del Servicio y Políticas de Privacidad de WhatsApp LLC y Meta Platforms, Inc.</li>
          <li style={{ marginBottom: '0.5rem' }}>TECSM asume la responsabilidad del tratamiento de la información únicamente a partir del momento en que los datos son recibidos y gestionados internamente por nuestro personal asignado.</li>
        </ul>

        <h3 style={{ color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>5. Transferencia y Remisión de Datos Personales</h3>
        <p style={{ marginBottom: '1rem' }}>
          TECSM no venderá, cederá ni transferirá sus datos personales a terceros comerciales sin su previo consentimiento por escrito. Únicamente se realizarán remisiones y transferencias en los supuestos previstos por el <strong>Artículo 37 de la LFPDPPP</strong>:
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>A proveedores de servicios de infraestructura tecnológica, tales como servicios de alojamiento en la nube (hosting), plataformas de correo y repositorios de bases de datos que operan bajo acuerdos de confidencialidad estricta y estándares de seguridad internacional.</li>
          <li style={{ marginBottom: '0.5rem' }}>A autoridades administrativas o judiciales mexicanas competentes, siempre que exista un requerimiento legal fundado y motivado.</li>
        </ul>

        <h3 style={{ color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>6. Medidas de Seguridad y Conservación de Datos</h3>
        <p style={{ marginBottom: '1rem' }}>
          TECSM ha implementado y mantiene medidas de seguridad administrativas, técnicas y físicas para proteger sus datos personales contra daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado. Entre estas medidas se incluyen:
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Conexión cifrada mediante protocolo HTTPS con certificados SSL/TLS de 256 bits en todo el dominio <a href="https://tecsm.com.mx" style={{ color: 'var(--brand-turq)', textDecoration: 'underline' }}>https://tecsm.com.mx</a>.</li>
          <li style={{ marginBottom: '0.5rem' }}>Control estricto de acceso a las cuentas institucionales y herramientas de cotización mediante autenticación robusta de múltiples factores.</li>
          <li style={{ marginBottom: '0.5rem' }}>Políticas internas de confidencialidad suscritas por el equipo de desarrollo y colaboradores.</li>
          <li style={{ marginBottom: '0.5rem' }}>Los datos recabados con fines de prospección comercial serán conservados por un periodo máximo de <strong>12 meses</strong> posteriores al último contacto; concluido dicho plazo, se procederá a su bloqueo y posterior eliminación segura de nuestras bases de datos si no se concretó una relación contractual.</li>
        </ul>

        <h3 style={{ color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>7. Mecanismos para el Ejercicio de Derechos ARCO y Revocación del Consentimiento</h3>
        <p style={{ marginBottom: '1rem' }}>
          En todo momento, el titular o su representante legal debidamente acreditado tienen derecho a ejercer sus derechos de <strong>Acceso, Rectificación, Cancelación y Oposición (ARCO)</strong>, así como a revocar el consentimiento otorgado:
        </p>
        <p style={{ marginBottom: '0.5rem' }}><strong>Procedimiento:</strong></p>
        <ol style={{ listStyleType: 'decimal', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Enviar una solicitud expresa al correo: <strong><a href="mailto:privacidad@tecsm.com.mx" style={{ color: 'var(--brand-turq)', textDecoration: 'underline' }}>privacidad@tecsm.com.mx</a></strong>.</li>
          <li style={{ marginBottom: '0.5rem' }}>
            La solicitud debe incluir:
            <ul style={{ listStyleType: 'circle', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>Nombre completo del titular.</li>
              <li>Correo electrónico o medio para recibir la respuesta formal.</li>
              <li>Copia digital legible de identificación oficial vigente (INE o Pasaporte). En caso de representante legal, instrumento público que acredite la representación.</li>
              <li>Descripción puntual de los datos sobre los que desea ejercer el derecho (Acceso, Rectificación, Cancelación u Oposición) y el motivo de la petición.</li>
            </ul>
          </li>
        </ol>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Plazos de Respuesta:</strong> TECSM comunicará la determinación adoptada en un plazo máximo de <strong>20 (veinte) días hábiles</strong>, contados desde la fecha en que se recibió formalmente la solicitud. En caso de resultar procedente, se hará efectiva dentro de los <strong>15 (quince) días hábiles</strong> siguientes a la comunicación de la respuesta, de conformidad con lo estipulado por los Artículos 32 y 33 de la LFPDPPP.
        </p>

        <h3 style={{ color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>8. Uso de Cookies, LocalStorage y Tecnologías de Rastreo</h3>
        <p style={{ marginBottom: '1rem' }}>
          El sitio web utiliza tecnologías de almacenamiento local en el navegador (<em>LocalStorage</em>) y cookies técnicas esenciales destinadas exclusivamente a recordar las preferencias de diseño del usuario (como la persistencia del Modo Claro u Oscuro) y optimizar los tiempos de carga de la interfaz. Estas cookies técnicas no recopilan perfiles biométricos ni comerciales invasivos. El usuario puede bloquear, limpiar o deshabilitar estas cookies directamente desde el panel de preferencias de su navegador web en cualquier momento.
        </p>

        <h3 style={{ color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>9. Modificaciones al Aviso de Privacidad</h3>
        <p style={{ marginBottom: '3rem' }}>
          El presente Aviso de Privacidad puede sufrir modificaciones, adiciones o actualizaciones derivadas de reformas a la legislación mexicana, requerimientos de la autoridad reguladora, o cambios en nuestro modelo operativo y de servicios. Cualquier cambio será publicado de forma inmediata y accesible en la sección correspondiente de nuestro sitio web: <strong><a href="https://tecsm.com.mx/privacidad" style={{ color: 'var(--brand-turq)', textDecoration: 'underline' }}>https://tecsm.com.mx/privacidad</a></strong>, indicando la fecha de última actualización.
        </p>

        <div style={{ height: '1px', background: 'var(--border-glass)', margin: '4rem 0' }}></div>

        <h2 id="terminos" className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '2rem', color: 'var(--text-primary)', lineHeight: 1.2 }}>
          Términos y Condiciones de <span className="text-gradient">Uso del Sitio Web</span>
        </h2>

        <p style={{ marginBottom: '2rem' }}>
          <strong>Última actualización:</strong> 16 de agosto de 2026
        </p>

        <h3 style={{ color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>Cláusula Primera: Partes, Aceptación y Naturaleza Digital</h3>
        <p style={{ marginBottom: '1rem' }}>
          El presente documento constituye un contrato de adhesión vinculante entre cualquier persona que acceda, navegue o utilice el sitio web oficial accesible en el dominio <strong><a href="https://tecsm.com.mx" style={{ color: 'var(--brand-turq)', textDecoration: 'underline' }}>https://tecsm.com.mx</a></strong> (en adelante, el "Usuario") y el proyecto/agencia de tecnología <strong>TECSM</strong> (en adelante, "TECSM").
        </p>
        <p style={{ marginBottom: '1rem' }}>
          El acceso y utilización del sitio web atribuye la condición de Usuario e implica la aceptación plena, expresa y sin reserva de todos y cada uno de los puntos estipulados en estos Términos y Condiciones. Si el Usuario no está de acuerdo total o parcialmente con las presentes cláusulas, deberá abstenerse de utilizar el sitio, sus formularios y sus canales de mensajería integrados.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          De conformidad con el Código de Comercio de México (Artículos 89 a 95) y la <strong>Norma Mexicana NMX-COE-001-SCFI-2018 (Comercio Electrónico)</strong>, el consentimiento emitido mediante interacción digital, clics en formularios y envío de mensajes electrónicos genera validez jurídica probatoria.
        </p>

        <h3 style={{ color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>Cláusula Segunda: Objeto del Sitio Web</h3>
        <p style={{ marginBottom: '1rem' }}>
          El sitio web accesible en <a href="https://tecsm.com.mx" style={{ color: 'var(--brand-turq)', textDecoration: 'underline' }}>https://tecsm.com.mx</a> tiene por objeto exclusivo:
        </p>
        <ol style={{ listStyleType: 'decimal', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Difundir de manera informativa las capacidades, metodología de trabajo, servicios de diseño, desarrollo de software a la medida, plataformas web, automatización de sistemas e infraestructura en la nube ofrecidos por TECSM.</li>
          <li style={{ marginBottom: '0.5rem' }}>Funcionar como canal tecnológico de prospección, análisis preliminar y contacto directo entre prospectos comerciales y el equipo de TECSM.</li>
          <li style={{ marginBottom: '0.5rem' }}>Proveer herramientas interactivas y formularios de contacto para la solicitud de diagnósticos y cotizaciones de proyectos de software.</li>
        </ol>

        <h3 style={{ color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>Cláusula Tercera: Canales de Atención y Operación Digital</h3>
        <p style={{ marginBottom: '1rem' }}>
          El Usuario reconoce y acepta que TECSM opera bajo un modelo de servicios profesionales digitales. Por tanto, los canales oficiales y válidos para la atención al público, aclaraciones, recepción de requerimientos comerciales y solicitudes de soporte corresponden a:
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Página Web:</strong> <a href="https://tecsm.com.mx" style={{ color: 'var(--brand-turq)', textDecoration: 'underline' }}>https://tecsm.com.mx</a></li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Correo Electrónico Oficial:</strong> <a href="mailto:contacto@tecsm.com.mx" style={{ color: 'var(--brand-turq)', textDecoration: 'underline' }}>contacto@tecsm.com.mx</a></li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Correo de Privacidad y Legal:</strong> <a href="mailto:privacidad@tecsm.com.mx" style={{ color: 'var(--brand-turq)', textDecoration: 'underline' }}>privacidad@tecsm.com.mx</a></li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Canal Directo de Mensajería:</strong> WhatsApp Business oficial enlazado al sitio.</li>
        </ul>
        <p style={{ marginBottom: '1rem' }}>
          Cualquier notificación formal enviada a las direcciones electrónicas señaladas se considerará debidamente entregada a partir del momento en que el sistema receptor confirme su recepción.
        </p>

        <h3 style={{ color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>Cláusula Cuarta: Funcionamiento del Cotizador y API de WhatsApp</h3>
        <ol style={{ listStyleType: 'decimal', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Veracidad de la Información:</strong> Al hacer uso del cotizador o formulario de contacto, el Usuario garantiza bajo protesta de decir verdad que los datos ingresados (nombre, teléfono, correo y detalles técnicos) son legítimos, vigentes y le pertenecen legalmente o cuenta con facultades de su representada para suministrarlos.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Naturaleza No Vinculante:</strong> El Usuario reconoce expresamente que los resultados numéricos, rangos presupuestales, sugerencias técnicas o respuestas automáticas generadas por el cotizador del sitio web o vía WhatsApp <strong>tienen carácter meramente informativo y estimativo</strong>. No constituyen una oferta contractual vinculante, promesa de contrato ni aceptación definitiva de un servicio.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Formalización Contractual:</strong> Ningún proyecto de desarrollo de software, diseño o consultoría iniciará hasta que se formalice un <strong>Contrato de Prestación de Servicios de Desarrollo de Software</strong>, se elabore un documento de especificación técnica y se emita el anticipo económico pactado formalmente entre las partes.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Terceros y Costos de Operación:</strong> El uso de WhatsApp como canal de cotización implica la interacción con servicios de Meta Platforms, Inc. Los costos de conexión a Internet, datos móviles y telefonía son responsabilidad exclusiva del Usuario. TECSM no se hace responsable por fallas técnicas ajenas al sitio originadas por caídas del servicio de WhatsApp.</li>
        </ol>

        <h3 style={{ color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>Cláusula Quinta: Propiedad Intelectual, Código y Derechos de Autor</h3>
        <ol style={{ listStyleType: 'decimal', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Titularidad del Sitio:</strong> Todos los elementos que componen el sitio web <a href="https://tecsm.com.mx" style={{ color: 'var(--brand-turq)', textDecoration: 'underline' }}>https://tecsm.com.mx</a>, incluyendo el logotipo de TECSM, isotipo tridimensional, código fuente compilado o servido, arquitectura de software, hojas de estilo, animaciones, textos, marcas registradas y diseños de interfaz (UI/UX), son propiedad exclusiva de TECSM o cuentan con las debidas licencias de uso de terceros.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Protección Legal:</strong> Dichos contenidos están protegidos por la Ley Federal del Derecho de Autor, la Ley Federal de Protección a la Propiedad Industrial y los tratados internacionales de propiedad intelectual ratificados por México.</li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Límites de Uso y Protección contra Explotación No Autorizada:</strong>
            <ul style={{ listStyleType: 'circle', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>Queda estrictamente prohibida la copia no autorizada, distribución comercial, plagio de identidad gráfica, reempaquetado comercial o uso de herramientas automatizadas masivas (<em>scraping</em>) sobre los activos y contenidos protegidos del Sitio.</li>
              <li>Cualquier proceso de análisis técnico, desensamblado o ingeniería inversa sobre el software se entenderá estrictamente limitado a los supuestos de excepción previstos por el Artículo 100 de la Ley Federal del Derecho de Autor (fines de interoperabilidad técnica entre sistemas). Queda prohibido el uso de la información obtenida para desarrollar software sustancialmente similar o que infrinja los derechos de autor y secretos comerciales de TECSM.</li>
            </ul>
          </li>
        </ol>

        <h3 style={{ color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>Cláusula Sexta: Reglas de Conducta y Uso Aceptable</h3>
        <p style={{ marginBottom: '1rem' }}>
          El Usuario se obliga expresamente a utilizar el sitio web y sus canales de mensajería conforme a la ley, la moral, las buenas costumbres y el orden público. En consecuencia, queda estrictamente prohibido:
        </p>
        <ol style={{ listStyleType: 'decimal', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Proporcionar datos falsos, suplantar la identidad de terceros o enviar mensajes de carácter difamatorio, obsceno o ilícito.</li>
          <li style={{ marginBottom: '0.5rem' }}>Utilizar los formularios de cotización o los canales de WhatsApp para enviar spam, esquemas piramidales, ofertas laborales no solicitadas o publicidad masiva ajena a los servicios de TECSM.</li>
          <li style={{ marginBottom: '0.5rem' }}>Eludir deliberadamente los mecanismos de autenticación, certificados o barreras de acceso a servicios internos que no sean de carácter público.</li>
          <li style={{ marginBottom: '0.5rem' }}>Realizar inyección de código malicioso, ataques de denegación de servicio (DoS/DDoS) o cualquier acción destinada a alterar el funcionamiento o disponibilidad de <a href="https://tecsm.com.mx" style={{ color: 'var(--brand-turq)', textDecoration: 'underline' }}>https://tecsm.com.mx</a>.</li>
        </ol>
        <p style={{ marginBottom: '1rem' }}>
          El incumplimiento de estas disposiciones facultará a TECSM para bloquear el acceso del infractor y, de ser procedente, ejercer las acciones civiles y penales pertinentes ante las autoridades mexicanas.
        </p>

        <h3 style={{ color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>Cláusula Séptima: Exclusión de Garantías y Limitación de Responsabilidad</h3>
        <ol style={{ listStyleType: 'decimal', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Disponibilidad del Servicio:</strong> TECSM implementa altos estándares de disponibilidad y rendimiento; sin embargo, no garantiza que el sitio web funcione de manera ininterrumpida, libre de errores o que el servidor esté 100% libre de vulnerabilidades ajenas derivadas de proveedores de nube o redes de telecomunicaciones.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Fallas Tecnológicas:</strong> TECSM no será responsable por daños o perjuicios directos o indirectos sufridos por el Usuario derivados de la falta de disponibilidad de la plataforma, caídas de DNS, retrasos en la red de mensajería de WhatsApp o la presencia de malware transmitido por terceros ajenos a nuestro control.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Estimaciones Técnicas:</strong> Las métricas, proyecciones o estudios expuestos en el sitio sobre proyectos pasados representan logros específicos y no constituyen una garantía tácita o explícita de rendimientos idénticos para nuevos clientes, toda vez que cada software depende de variables de negocio y operativas particulares.</li>
        </ol>

        <h3 style={{ color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>Cláusula Octava: Privacidad y Protección de Datos Personales</h3>
        <p style={{ marginBottom: '1rem' }}>
          El tratamiento de los datos personales proporcionados por el Usuario a través del sitio web y de la API de WhatsApp se rige estrictamente por lo estipulado en el <strong>Aviso de Privacidad Integral de TECSM</strong>, el cual forma parte indivisible de los presentes Términos y Condiciones y se encuentra disponible de forma permanente para su consulta en: <strong><a href="https://tecsm.com.mx/privacidad" style={{ color: 'var(--brand-turq)', textDecoration: 'underline' }}>https://tecsm.com.mx/privacidad</a></strong>.
        </p>

        <h3 style={{ color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>Cláusula Novena: Modificaciones a los Términos y Condiciones</h3>
        <p style={{ marginBottom: '1rem' }}>
          TECSM se reserva el derecho de actualizar, modificar o reformar en cualquier momento las presentes cláusulas para adaptarlas a novedades legislativas, jurisprudenciales, técnicas o comerciales. Toda modificación entrará en vigor a partir de su publicación en el sitio web. El uso continuo del sitio tras la publicación de cambios implicará la aceptación expresa de las nuevas condiciones.
        </p>

        <h3 style={{ color: 'var(--text-primary)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>Cláusula Décima: Ley Aplicable, Cumplimiento Normativo y Jurisdicción</h3>
        <ol style={{ listStyleType: 'decimal', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Marco Regulatorio:</strong> Los presentes Términos y Condiciones se rigen e interpretan en estricto apego a las leyes federales de los <strong>Estados Unidos Mexicanos</strong>, especialmente el Código de Comercio, el Código Civil Federal, la Ley Federal de Protección al Consumidor y la Norma Mexicana <strong>NMX-COE-001-SCFI-2018</strong>.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Resolución Amigable y Conciliación:</strong> Para la solución de cualquier controversia, las partes procurarán resolver de buena fe y por la vía del acuerdo mutuo o mediante el procedimiento conciliatorio ante la <strong>Procuraduría Federal del Consumidor (PROFECO)</strong> en lo relativo a derechos de usuarios.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Jurisdicción:</strong> Para el caso de litigio judicial derivado de la interpretación o cumplimiento de este documento, las partes se someten voluntariamente y de común acuerdo a la jurisdicción de los <strong>Tribunales competentes con sede en el Estado de Puebla / Ciudad de México</strong>, renunciando expresamente a cualquier otro fuero que por razón de sus domicilios presentes o futuros pudiera corresponderles.</li>
        </ol>

      </div>
    </motion.div>
  );
}
