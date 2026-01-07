import { HiOutlineUser, HiOutlineClock, HiCheck } from 'react-icons/hi';

const About = () => {
  const colors = {
    charcoal: 'var(--color-vidal-charcoal)',
    copper: 'var(--color-vidal-copper)',
    taupe: 'var(--color-vidal-taupe)',
    stone: '#292929', // Un tono ligeramente más claro que el charcoal para fondos secundarios
  };

  return (
    <section id="nosotros" className="relative py-24 overflow-hidden" style={{ backgroundColor: colors.charcoal }}>
      {/* Elemento decorativo de fondo (Gran letra 'M' sutil) */}
      <div
        className="absolute -top-20 -left-20 text-[20rem] font-bold leading-none opacity-[0.03] select-none pointer-events-none"
        style={{ fontFamily: 'var(--font-serif)', color: 'white' }}
      >
        M
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* COLUMNA DE CONTENIDO (Izquierda - 5 columnas) */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full pt-10">
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-8" style={{ backgroundColor: colors.copper }}></span>
              <span
                className="text-xs font-bold uppercase tracking-[0.25em] text-white opacity-80"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                La Firma
              </span>
            </div>

            {/* Titular */}
            <h2
              className="text-4xl md:text-5xl font-medium text-white mb-8 leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Más que abogados, <br />
              somos sus <span style={{ color: colors.copper, fontStyle: 'italic' }}>aliados estratégicos.</span>
            </h2>

            {/* Texto principal */}
            <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
              En <strong>Estudio Jurídico Morales</strong>, hemos redefinido la práctica legal eliminando la burocracia
              innecesaria. Entendemos que detrás de cada caso hay un patrimonio, una familia o una empresa que necesita
              certezas, no solo promesas.
            </p>

            <p className="text-gray-400 text-sm leading-relaxed mb-10">
              Nuestro enfoque combina la rigurosidad técnica de los grandes bufetes con la agilidad y el trato personal
              de una firma boutique.
            </p>

            {/* Cita de Autoridad (Nuevo elemento) */}
            <div className="border-l-2 pl-6 py-2" style={{ borderColor: colors.copper }}>
              <p className="text-white italic text-lg mb-2 font-serif">
                "La justicia no es una abstracción, es un resultado tangible que construimos día a día."
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Dr. Alejandro Morales — Socio Fundador
              </p>
            </div>
          </div>

          {/* COLUMNA DE IMAGEN Y VALORES (Derecha - 7 columnas) */}
          <div className="lg:col-span-7 relative pl-0 lg:pl-10">
            {/* Imagen Principal */}
            {/* Usamos un aspecto 4:3 o cuadrado para mayor presencia */}
            <div className="relative z-10 aspect-[4/3] w-full overflow-hidden">
              {/* Imagen: Reunión moderna / Oficina limpia */}
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                alt="Oficinas Estudio Morales"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105 opacity-90"
              />
              {/* Overlay sutil sobre la imagen */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Tarjeta flotante de Valores (Rompe la grilla) */}
            <div
              className="relative lg:absolute lg:-bottom-12 lg:-left-10 z-20 bg-[#252525] p-8 lg:p-10 shadow-2xl max-w-md w-full border-t-4"
              style={{ borderColor: colors.copper }}
            >
              <h3 className="text-white font-serif text-xl mb-6">Nuestros Pilares</h3>

              <ul className="space-y-6">
                <li className="flex items-start gap-4 group">
                  <div className="mt-1 p-1 rounded bg-white/5 group-hover:bg-[var(--color-vidal-copper)] transition-colors">
                    <HiCheck size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold uppercase tracking-wide mb-1">Ética Inquebrantable</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      Transparencia absoluta en honorarios y expectativas desde la primera consulta.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4 group">
                  <div className="mt-1 p-1 rounded bg-white/5 group-hover:bg-[var(--color-vidal-copper)] transition-colors">
                    <HiOutlineUser size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold uppercase tracking-wide mb-1">Trato Directo</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      Su caso es manejado por socios, no derivado a asistentes junior.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4 group">
                  <div className="mt-1 p-1 rounded bg-white/5 group-hover:bg-[var(--color-vidal-copper)] transition-colors">
                    <HiOutlineClock size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold uppercase tracking-wide mb-1">Agilidad Procesal</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      Tecnología aplicada para acelerar tiempos y reducir la burocracia.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Decoración geométrica detrás de la imagen */}
            <div
              className="absolute top-10 right-10 w-full h-full border border-gray-700 -z-0 hidden lg:block"
              style={{ transform: 'translate(20px, -20px)' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
