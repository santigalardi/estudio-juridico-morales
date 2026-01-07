import { useState } from 'react';
import { HiOutlinePhone, HiOutlineMail, HiArrowRight, HiOutlineLocationMarker, HiCheckCircle } from 'react-icons/hi';

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const colors = {
    charcoal: 'var(--color-vidal-charcoal)',
    copper: 'var(--color-vidal-copper)',
    taupe: 'var(--color-vidal-taupe)',
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSending(true);

    // Simulamos la petición al servidor (2 segundos)
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      form.reset(); // Limpia los campos

      // Quitamos el mensaje de éxito después de 5 segundos
      setTimeout(() => setIsSent(false), 5000);
    }, 2000);
  };

  return (
    <section id="contacto" className="flex flex-col lg:flex-row min-h-screen">
      {/* 1. PANEL DE INFORMACIÓN (Izquierda - Dark Mode) */}
      <div
        className="relative w-full lg:w-2/5 flex flex-col justify-between p-10 lg:p-16 text-white"
        style={{ backgroundColor: colors.charcoal }}
      >
        {/* Decoración de fondo */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--color-vidal-copper)] to-transparent"></div>

        <div>
          <span
            className="block mb-6 text-xs font-bold uppercase tracking-[0.25em] opacity-70"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Contacto Directo
          </span>

          <h2
            className="text-4xl lg:text-5xl font-serif mb-10 leading-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Hablemos de su <br />
            <span style={{ color: colors.copper, fontStyle: 'italic' }}>Estrategia Legal.</span>
          </h2>

          <p className="text-gray-400 font-light mb-12 max-w-sm">
            Estamos listos para analizar su caso con la confidencialidad y rigor que nos caracteriza.
          </p>
        </div>

        {/* Datos de Contacto */}
        <div className="space-y-10">
          {/* Ubicación */}
          <div className="group">
            <div className="flex items-center gap-3 mb-2 text-[var(--color-vidal-copper)]">
              <HiOutlineLocationMarker size={20} />
              <span className="text-xs font-bold uppercase tracking-widest">Oficinas</span>
            </div>
            <p className="text-xl text-white font-serif">Neuquén Capital</p>
            <p className="text-sm text-gray-500">Argentina</p>
          </div>

          {/* Email */}
          <div className="group">
            <div className="flex items-center gap-3 mb-2 text-[var(--color-vidal-copper)]">
              <HiOutlineMail size={20} />
              <span className="text-xs font-bold uppercase tracking-widest">Email</span>
            </div>
            <a
              href="mailto:contacto@estudiomorales.com"
              className="text-xl text-white hover:text-gray-300 transition-colors font-serif border-b border-gray-700 pb-1"
            >
              contacto@estudiomorales.com
            </a>
          </div>

          {/* Teléfono */}
          <div className="group">
            <div className="flex items-center gap-3 mb-2 text-[var(--color-vidal-copper)]">
              <HiOutlinePhone size={20} />
              <span className="text-xs font-bold uppercase tracking-widest">Teléfono & WhatsApp</span>
            </div>
            <p className="text-2xl font-light text-white font-sans">+54 9 299 555 1234</p>
            <p className="text-xs text-gray-500 mt-1">Lunes a Viernes, 9:00 - 18:00 hs</p>
          </div>
        </div>

        <div className="mt-12 lg:mt-0 pt-10 border-t border-white/10">
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} Estudio Jurídico Morales.</p>
        </div>
      </div>

      {/* 2. PANEL DEL FORMULARIO (Derecha - Clean White) */}
      <div className="relative w-full lg:w-3/5 bg-white flex items-center justify-center p-8 lg:p-20 overflow-hidden">
        {/* === OVERLAY DE ÉXITO === */}
        {isSent && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm p-8 text-center animate-in fade-in zoom-in duration-500">
            <HiCheckCircle size={80} style={{ color: colors.copper }} className="mb-6 drop-shadow-md" />
            <h3 className="text-3xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
              Solicitud Recibida
            </h3>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              Gracias por confiar en Estudio Morales. <br />
              Analizaremos su caso y nos pondremos en contacto a la brevedad.
            </p>
          </div>
        )}

        <div className="w-full max-w-lg">
          <form
            onSubmit={handleSubmit}
            className={`space-y-8 transition-all duration-300 ${
              isSending ? 'opacity-50 pointer-events-none grayscale' : 'opacity-100'
            }`}
          >
            {/* Input: Nombre */}
            <div className="group relative">
              <input
                required
                type="text"
                id="name"
                name="name"
                className="peer block w-full border-b-2 border-gray-200 bg-transparent py-3 text-gray-900 placeholder-transparent focus:border-[var(--color-vidal-charcoal)] focus:outline-none transition-colors"
                placeholder="Nombre Completo"
              />
              <label
                htmlFor="name"
                className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-wide text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:font-bold peer-focus:text-[var(--color-vidal-charcoal)]"
              >
                Nombre Completo
              </label>
            </div>

            {/* Grid Email/Teléfono */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group relative">
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  className="peer block w-full border-b-2 border-gray-200 bg-transparent py-3 text-gray-900 placeholder-transparent focus:border-[var(--color-vidal-charcoal)] focus:outline-none transition-colors"
                  placeholder="Email Corporativo"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-wide text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:font-bold peer-focus:text-[var(--color-vidal-charcoal)]"
                >
                  Email
                </label>
              </div>

              <div className="group relative">
                <input
                  required
                  type="tel"
                  id="phone"
                  name="phone"
                  className="peer block w-full border-b-2 border-gray-200 bg-transparent py-3 text-gray-900 placeholder-transparent focus:border-[var(--color-vidal-charcoal)] focus:outline-none transition-colors"
                  placeholder="Teléfono"
                />
                <label
                  htmlFor="phone"
                  className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-wide text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:font-bold peer-focus:text-[var(--color-vidal-charcoal)]"
                >
                  Teléfono
                </label>
              </div>
            </div>

            {/* Mensaje */}
            <div className="group relative mt-8">
              <textarea
                required
                id="message"
                name="message"
                rows={4}
                className="peer block w-full border-b-2 border-gray-200 bg-transparent py-3 text-gray-900 placeholder-transparent focus:border-[var(--color-vidal-charcoal)] focus:outline-none transition-colors resize-none"
                placeholder="Detalle de su consulta"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-wide text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:font-bold peer-focus:text-[var(--color-vidal-charcoal)]"
              >
                ¿En qué podemos ayudarle?
              </label>
            </div>

            {/* Disclaimer */}
            <div className="pt-2">
              <p className="text-[10px] text-gray-400 leading-tight">
                Nota: El envío de este formulario no crea automáticamente una relación abogado-cliente. La información
                enviada es confidencial.
              </p>
            </div>

            {/* Botón con Estado de Carga */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSending}
                className="group flex w-full items-center justify-between px-8 py-4 text-white transition-all duration-300 disabled:cursor-not-allowed"
                style={{ backgroundColor: colors.charcoal }}
                // Efecto hover manual via style para mantener consistencia con variables
                onMouseEnter={(e) => !isSending && (e.currentTarget.style.backgroundColor = colors.copper)}
                onMouseLeave={(e) => !isSending && (e.currentTarget.style.backgroundColor = colors.charcoal)}
              >
                {isSending ? (
                  <div className="flex w-full items-center justify-center gap-3">
                    {/* SVG Spinner minimalista */}
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span className="font-bold uppercase tracking-widest text-sm">Procesando...</span>
                  </div>
                ) : (
                  <>
                    <span className="font-bold uppercase tracking-widest text-sm">Enviar Solicitud</span>
                    <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-2" size={20} />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
