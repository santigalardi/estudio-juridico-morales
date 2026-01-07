import { HiArrowRight } from 'react-icons/hi';

const Hero = () => {
  return (
    <section id="inicio" className="relative flex min-h-[90vh] items-center justify-center overflow-hidden py-10">
      {/* 1. IMAGEN DE FONDO: Arquitectura Moderna / Abstracta */}
      {/* ID: photo-1486406146926-c627a92ad1ab (Edificio geométrico oscuro) */}
      <div
        className="absolute inset-0 z-0 transform scale-105 transition-transform duration-[10s] hover:scale-100"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* 2. OVERLAY SOFISTICADO: Gradiente Charcoal en lugar de negro plano */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#1e1e1e]/90 via-[#1e1e1e]/80 to-[#1e1e1e]/90" />

      {/* 3. CONTENIDO */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pt-20">
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow / Sello de marca */}
          <div
            className="mb-6 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-white opacity-80 md:text-sm"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <span className="h-[1px] w-12 bg-[var(--color-vidal-copper)]"></span>
            Estudio Jurídico Morales
            <span className="h-[1px] w-12 bg-[var(--color-vidal-copper)]"></span>
          </div>

          {/* Titular Principal Serif */}
          <h1
            className="mb-8 max-w-4xl text-5xl font-medium leading-tight text-white md:text-7xl lg:text-8xl"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Defensa <span className="italic text-[var(--color-vidal-copper)]">Estratégica</span>{' '}
            <br className="hidden md:block" />
            para el Mundo Moderno.
          </h1>

          {/* Subtítulo descriptivo */}
          <p
            className="mb-12 max-w-2xl text-lg font-light leading-relaxed text-gray-300 md:text-xl"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Fusionamos la tradición legal con una perspectiva ejecutiva. Soluciones jurídicas claras para problemas
            complejos.
          </p>

          {/* Botones de Acción */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#contacto"
              className="group relative flex items-center gap-2 overflow-hidden rounded-none bg-[var(--color-vidal-copper)] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-[var(--color-vidal-charcoal)]"
            >
              <span className="relative z-10">Agendar Consulta</span>
              <HiArrowRight className="relative z-10 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#areas"
              className="flex items-center gap-2 rounded-none border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:border-[var(--color-vidal-copper)] hover:text-[var(--color-vidal-copper)]"
            >
              Nuestras Áreas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
