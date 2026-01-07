import {
  HiOutlineBriefcase,
  HiOutlineDocumentText,
  HiOutlineUserGroup,
  HiOutlineTruck,
  HiArrowNarrowRight,
} from 'react-icons/hi';

const areas = [
  {
    title: 'Derecho Laboral',
    description: 'Estrategias para despidos, negociaciones complejas y resolución de conflictos gremiales.',
    icon: HiOutlineBriefcase,
  },
  {
    title: 'Derecho Civil',
    description: 'Gestión patrimonial, contratos de alto nivel, responsabilidad civil y obligaciones.',
    icon: HiOutlineDocumentText,
  },
  {
    title: 'Derecho de Familia',
    description: 'Acuerdos de confidencialidad, divorcios, regímenes patrimoniales y sucesiones.',
    icon: HiOutlineUserGroup,
  },
  {
    title: 'Accidentes de Tránsito',
    description: 'Representación legal ante aseguradoras y litigios por daños y perjuicios.',
    icon: HiOutlineTruck,
  },
];

const PracticeAreas = () => {
  // Variables para facilitar uso inline si Tailwind no las pilla
  const colors = {
    charcoal: 'var(--color-vidal-charcoal)',
    copper: 'var(--color-vidal-copper)',
    taupe: 'var(--color-vidal-taupe)',
  };

  return (
    <section id="areas" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER DE SECCIÓN: Minimalista y Centrado */}
        <div className="mb-20 text-center">
          <span
            className="mb-3 block text-xs font-bold uppercase tracking-[0.2em]"
            style={{ color: colors.copper, fontFamily: 'var(--font-sans)' }}
          >
            Nuestra Expertise
          </span>
          <h2
            className="mb-6 text-4xl font-medium text-gray-900 md:text-5xl"
            style={{ fontFamily: 'var(--font-serif)', color: colors.charcoal }}
          >
            Áreas de Práctica
          </h2>
          <div className="mx-auto h-[1px] w-24 bg-gray-200" />
        </div>

        {/* GRID DE SERVICIOS */}
        <div className="grid gap-px bg-gray-200 sm:grid-cols-2 lg:grid-cols-4 border border-gray-200">
          {areas.map(({ title, description, icon: Icon }) => (
            <div key={title} className="group relative bg-white p-10 transition-all hover:z-10">
              {/* Hover Effect: Top Line Accent */}
              <div
                className="absolute inset-x-0 top-0 h-1 w-full scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                style={{ backgroundColor: colors.copper }}
              />

              {/* Icono */}
              <div className="mb-6 transition-colors duration-300" style={{ color: colors.charcoal }}>
                {/* El icono cambia a Cobre en hover mediante la clase group-hover en el padre */}
                <Icon
                  size={40}
                  strokeWidth={1.5}
                  className="transition-colors duration-300 group-hover:text-[var(--color-vidal-copper)]"
                />
              </div>

              {/* Título */}
              <h3
                className="mb-4 text-xl font-bold"
                style={{ fontFamily: 'var(--font-serif)', color: colors.charcoal }}
              >
                {title}
              </h3>

              {/* Descripción */}
              <p className="mb-8 text-sm leading-relaxed text-gray-500" style={{ fontFamily: 'var(--font-sans)' }}>
                {description}
              </p>

              {/* Botón 'Fake' de Leer Más */}
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider opacity-0 transition-all duration-300 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                <span style={{ color: colors.copper }}>Más detalles</span>
                <HiArrowNarrowRight style={{ color: colors.copper }} />
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer o Nota al pie de sección */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-400 italic font-serif">
            ¿No encuentra lo que busca?{' '}
            <a
              href="#contacto"
              style={{ color: colors.copper }}
              className="underline decoration-1 underline-offset-4 hover:text-black transition-colors"
            >
              Contáctenos
            </a>{' '}
            para una evaluación personalizada.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
