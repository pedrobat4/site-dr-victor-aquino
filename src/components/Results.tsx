const WA_LINK = 'https://api.whatsapp.com/send/?phone=553184035991&text&type=phone_number&app_absent=0';

const beforeAfters = [
  {
    src: 'https://storage.lucasmendes.dev/teste/vitoraquino/antes%20e%20depois%202%20.jpeg',
    label: 'Resultado Real',
    sublabel: 'Protocolo de Emagrecimento',
  },
  {
    src: 'https://storage.lucasmendes.dev/teste/vitoraquino/antes%20e%20depois1.jpeg',
    label: 'Resultado Real',
    sublabel: 'Reposição Hormonal',
  },
];

const mediaItems = [
  {
    src: '/entrevista-homem-mulher-estudio-televisaosbt-900x1600.webp',
    label: 'Entrevista SBT',
    wide: false,
  },
  {
    src: '/homem-claquete-filmagem-estudio-gravacao-videosbt-900x1600.webp',
    label: 'Gravação SBT',
    wide: false,
  },
  {
    src: '/homem-terno-azul-bracos-cruzados-logo-sbt-900x1600.webp',
    label: 'Presença na Mídia',
    wide: false,
  },
];

export default function Results() {
  return (
    <section id="resultados" className="py-24 md:py-36 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Before/After ── */}
        <div className="mb-20 md:mb-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-[#C4965A]" />
                <p className="text-[#C4965A] text-xs font-semibold tracking-[0.25em] uppercase">
                  Resultados
                </p>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#001728] leading-tight">
                Antes &amp;{' '}
                <span className="italic font-normal">Depois</span>
              </h2>
            </div>
            <p className="text-gray-400 text-sm max-w-xs md:text-right leading-relaxed">
              Resultados reais de pacientes que passaram pelos protocolos do Dr. Victor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {beforeAfters.map((item, i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden shadow-md aspect-[4/3] bg-gray-100">
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001728]/70 via-[#001728]/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-block bg-[#C4965A] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-2">
                    {item.label}
                  </div>
                  <div className="text-white/70 text-sm">{item.sublabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SBT Media ── */}
        <div className="relative">
          {/* Section label */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gray-100" />
            <div className="text-center">
              <div className="flex items-center gap-3 justify-center mb-2">
                <div className="h-px w-6 bg-[#C4965A]" />
                <p className="text-[#C4965A] text-xs font-semibold tracking-[0.25em] uppercase">Na Mídia</p>
                <div className="h-px w-6 bg-[#C4965A]" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#001728]">Presença no SBT</h3>
            </div>
            <div className="h-px flex-1 bg-gray-100" />
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-5">
            {mediaItems.map((item, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden shadow-md aspect-[3/4] bg-gray-100">
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001728]/70 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-white text-xs font-medium">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#001728] text-white font-semibold px-9 py-4 rounded-2xl text-sm hover:bg-[#002240] transition-all duration-300 shadow-lg hover:-translate-y-0.5"
          >
            Quero Meus Resultados
          </a>
        </div>
      </div>
    </section>
  );
}
