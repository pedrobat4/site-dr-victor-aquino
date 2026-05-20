import { GraduationCap, Building2, Award, Microscope } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Formação',
    desc: 'Graduado em 2017 pela UNIFIPMOC, com pós-graduações em Saúde da Família, Geriatria e Nutrologia.',
  },
  {
    icon: Building2,
    title: 'Experiência Hospitalar',
    desc: "Atuou de 2018 a 2023 em Rede D'Or, NotreDame Intermédica e Prevent Senior.",
  },
  {
    icon: Award,
    title: 'Especialidades',
    desc: 'Longevidade, reposição hormonal, emagrecimento avançado e performance metabólica.',
  },
  {
    icon: Microscope,
    title: 'Método Clínico',
    desc: 'Avaliação completa com bioimpedância e plano individualizado baseado em ciência.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-[#f7f8fa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left: photo ── */}
          <div className="relative flex justify-center">
            {/* Main photo */}
            <div className="relative w-64 md:w-72 rounded-3xl overflow-hidden shadow-2xl flex-shrink-0" style={{ height: '420px' }}>
              <img
                src="/homem-terno-cinza-olhando-para-direita-4016x6016.webp"
                alt="Dr. Victor Aquino"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>

            {/* Experience badge — top left */}
            <div className="absolute -top-4 -left-4 md:-left-6 bg-[#001728] text-white rounded-2xl px-5 py-4 shadow-xl">
              <div className="font-serif text-2xl font-bold leading-none">+8</div>
              <div className="text-white/55 text-[11px] mt-1 leading-tight">anos de<br />experiência</div>
            </div>

            {/* Gold vertical line */}
            <div className="absolute left-0 top-16 bottom-16 w-[3px] -translate-x-5 rounded-full"
              style={{ background: 'linear-gradient(to bottom, transparent, #C4965A 30%, #C4965A 70%, transparent)' }}
            />
          </div>

          {/* ── Right: text + highlights ── */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#C4965A]" />
              <p className="text-[#C4965A] text-xs font-semibold tracking-[0.28em] uppercase">
                Sobre o Médico
              </p>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#001728] leading-tight mb-6">
              Uma trajetória<br />
              voltada para a{' '}
              <span className="italic font-normal">sua saúde</span>
            </h2>

            <p className="text-gray-500 leading-relaxed text-base md:text-lg mb-4">
              Dr. Victor Aquino é médico formado em 2017 pela UNIFIPMOC, em Montes Claros–MG, com pós-graduações em{' '}
              <strong className="text-[#001728] font-semibold">Saúde da Família, Geriatria e Nutrologia</strong>.
            </p>
            <p className="text-gray-500 leading-relaxed text-base md:text-lg mb-10">
              Atua em Belo Horizonte com foco em emagrecimento, reposição hormonal e longevidade — abordagem moderna, individualizada e baseada em ciência.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group relative flex gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:border-[#C4965A]/25 hover:shadow-md transition-all duration-300 overflow-hidden"
                  >
                    {/* Watermark number */}
                    <span className="absolute top-2 right-3 font-serif text-4xl font-bold text-gray-50 select-none">
                      {String(idx + 1).padStart(2, '0')}
                    </span>

                    {/* Icon */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                      style={{
                        background: 'linear-gradient(135deg, rgba(196,150,90,0.15), rgba(196,150,90,0.05))',
                        border: '1px solid rgba(196,150,90,0.2)',
                      }}
                    >
                      <Icon size={18} className="text-[#C4965A]" />
                    </div>

                    <div className="relative">
                      <div className="font-semibold text-[#001728] text-sm mb-1">{item.title}</div>
                      <div className="text-gray-400 text-xs leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
