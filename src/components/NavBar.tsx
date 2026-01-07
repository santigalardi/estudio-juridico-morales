import { useState } from 'react';
import { HiOutlineMenu, HiX } from 'react-icons/hi';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  // Variables CSS directas
  const colors = {
    charcoal: 'var(--color-vidal-charcoal)',
    copper: 'var(--color-vidal-copper)',
    taupe: 'var(--color-vidal-taupe)',
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white border-b border-gray-100 py-4 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* LOGO */}
        <a href="#" className="group flex items-center gap-3">
          {/* Isotipo */}
          <div
            className="h-10 w-10 flex items-center justify-center border transition-colors duration-500"
            style={{ borderColor: colors.charcoal }}
          >
            <div
              className="h-2 w-2 transition-transform duration-500 group-hover:scale-150"
              style={{ backgroundColor: colors.copper }}
            />
          </div>

          {/* Logotipo Texto */}
          <div className="flex flex-col">
            <span
              className="font-serif text-2xl font-bold leading-none tracking-tight"
              style={{ color: colors.charcoal, fontFamily: 'var(--font-serif)' }}
            >
              MORALES
            </span>
            <span
              className="text-[10px] font-bold uppercase tracking-[0.25em] mt-1"
              style={{ color: colors.taupe, fontFamily: 'var(--font-sans)' }}
            >
              Estudio Jurídico
            </span>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10">
          {['Inicio', 'Áreas de Práctica', 'Nosotros', 'Contacto'].map((item) => (
            <a
              key={item}
              href={`#${item
                .split(' ')[0] // Toma la primera palabra ("Áreas")
                .normalize('NFD') // Separa tildes
                .replace(/[\u0300-\u036f]/g, '') // Elimina tildes
                .toLowerCase()}`} // Convierte a minúsculas ("areas")
              className="relative text-sm font-medium transition-colors duration-300 hover:opacity-80 group"
              style={{ color: colors.charcoal, fontFamily: 'var(--font-sans)' }}
            >
              {item}
              {/* Underline animado */}
              <span
                className="absolute -bottom-1 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: colors.copper }}
              ></span>
            </a>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden md:flex">
          <a
            href="#contacto"
            className="px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
            style={{ backgroundColor: colors.charcoal, fontFamily: 'var(--font-sans)' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.copper)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.charcoal)}
          >
            Solicitar Consulta
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
          className="md:hidden transition-transform active:scale-95"
          style={{ color: colors.charcoal }}
        >
          <HiOutlineMenu size={30} />
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-50 transform transition-transform duration-500 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor: colors.charcoal }} // Color sólido Charcoal
      >
        <div className="flex flex-col h-full px-8 py-6">
          {/* Mobile Header */}
          <div className="flex items-center justify-between border-b border-gray-700 pb-6">
            <span className="font-serif text-xl font-bold text-white" style={{ fontFamily: 'var(--font-serif)' }}>
              MORALES
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
              className="text-white hover:rotate-90 transition-transform duration-300"
            >
              <HiX size={30} />
            </button>
          </div>

          {/* Mobile Links */}
          <nav className="flex flex-col gap-8 mt-12">
            {['Inicio', 'Áreas de Práctica', 'Nosotros', 'Contacto'].map((item) => (
              <a
                key={item}
                onClick={() => setOpen(false)}
                href={`#${item
                  .split(' ')[0]
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .toLowerCase()}`}
                className="text-2xl font-light text-white transition-colors hover:pl-4"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                <span style={{ color: colors.copper }} className="mr-2">
                  /
                </span>
                {item}
              </a>
            ))}

            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-8 block w-full py-4 text-center text-sm font-bold uppercase tracking-widest text-white transition-colors"
              style={{ backgroundColor: colors.copper, fontFamily: 'var(--font-sans)' }}
            >
              Agendar Cita
            </a>
          </nav>

          {/* Footer Mobile */}
          <div className="mt-auto pb-8">
            <p className="text-xs uppercase tracking-widest text-gray-500">Excelencia Legal &bull; Est. 2024</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
