import { HiArrowUp } from 'react-icons/hi';
import { FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa'; // Necesitarás react-icons/fa

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const colors = {
    charcoal: 'var(--color-vidal-charcoal)',
    copper: 'var(--color-vidal-copper)',
    taupe: 'var(--color-vidal-taupe)',
    darker: '#141414', // Un tono casi negro para el fondo
  };

  return (
    <footer className="text-white relative" style={{ backgroundColor: colors.darker }}>
      {/* Borde Superior Decorativo */}
      <div className="w-full h-1 bg-gradient-to-r from-[var(--color-vidal-charcoal)] via-[var(--color-vidal-copper)] to-[var(--color-vidal-charcoal)] opacity-50"></div>

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* 1. BRANDING & IDENTIDAD */}
          <div className="space-y-6">
            {/* Logo Reutilizado */}
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 flex items-center justify-center border border-gray-600">
                <div className="h-2 w-2 bg-[var(--color-vidal-copper)]" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight">MORALES</span>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-light">
              Redefiniendo el estándar legal con estrategias claras y resultados tangibles. Su confianza es nuestro
              mayor activo.
            </p>

            {/* Redes Sociales Minimalistas */}
            <div className="flex gap-4 pt-2">
              {[FaLinkedinIn, FaTwitter, FaInstagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-[#1f1f1f] text-gray-400 hover:bg-[var(--color-vidal-copper)] hover:text-white transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. NAVEGACIÓN */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-vidal-copper)] mb-6">
              El Estudio
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {['Inicio', 'Áreas de Práctica', 'Nosotros', 'Contacto'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item
                      .split(' ')[0] // Toma la primera palabra ("Áreas")
                      .normalize('NFD') // Separa la tilde (Á -> A + ´)
                      .replace(/[\u0300-\u036f]/g, '') // Elimina la tilde
                      .toLowerCase()}`} // Convierte a minúsculas ("areas")
                    className="hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2 group"
                  >
                    {/* Añadí 'group-hover' al span para asegurar que la flecha aparezca al pasar el mouse sobre el link entero */}
                    <span className="opacity-0 group-hover:opacity-100 text-[var(--color-vidal-copper)] text-xs transition-opacity duration-300">
                      ›
                    </span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. ÁREAS DE PRÁCTICA (SEO) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-vidal-copper)] mb-6">
              Expertise
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {[
                'Derecho Corporativo',
                'Litigios Civiles',
                'Derecho Laboral',
                'Propiedad Intelectual',
                'Sucesiones',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="opacity-0 hover:opacity-100 text-[var(--color-vidal-copper)] text-xs">›</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. INFO RÁPIDA & HORARIOS */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-vidal-copper)] mb-6">
              Atención
            </h4>
            <div className="space-y-4 text-sm text-gray-400">
              <p>
                <span className="block text-white font-serif mb-1">Horario de Oficina</span>
                Lun - Vie: 09:00 - 18:00
              </p>
              <p>
                <span className="block text-white font-serif mb-1">Ubicación</span>
                Av. Argentina 1234, Piso 5<br />
                Neuquén Capital, Q8300
              </p>
              <p>
                <span className="block text-white font-serif mb-1">Teléfono</span>
                +54 9 299 555 1234
              </p>
            </div>
          </div>
        </div>

        {/* SEPARADOR */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <span>© {new Date().getFullYear()} Estudio Jurídico Morales.</span>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Términos de Servicio
            </a>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[var(--color-vidal-copper)] hover:text-white transition-colors uppercase font-bold tracking-widest group"
          >
            Subir
            <span className="p-2 border border-gray-700 rounded-full group-hover:border-[var(--color-vidal-copper)] transition-colors">
              <HiArrowUp />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
