import { TrendingDown, Activity, Heart, Zap, Droplets, Flame } from 'lucide-react';
import { WA_LINK, WhatsAppIcon } from '../lib/whatsapp';

const services = [
  {
    icon: TrendingDown,
    num: '01',
    title: 'Emagrecimento Avançado',
    description:
      'Protocolos individualizados focados na redução de gordura corporal, melhora metabólica e preservação de massa muscular.',
  },
  {
    icon: Activity,
    num: '02',
    title: 'Reposição Hormonal',
    description:
      'Avaliação clínica completa com foco em saúde, qualidade de vida, disposição, performance e equilíbrio hormonal seguro.',
  },
  {
    icon: Heart,
    num: '03',
    title: 'Menopausa & Climatério',
    description:
      'Protocolos individualizados para equilíbrio hormonal, melhora do sono, libido e qualidade de vida feminina.',
  },
  {
    icon: Zap,
    num: '04',
    title: 'Performance & Libido',
    description:
      'Tratamentos personalizados com foco em equilíbrio hormonal, energia, vitalidade e desempenho físico e mental.',
  },
  {
    icon: Droplets,
    num: '05',
    title: 'Lipedema',
    description:
      'Tratamento focado na redução da inflamação, melhora da circulação, controle da dor e composição corporal.',
  },
  {
    icon: Flame,
    num: '06',
    title: 'Longevidade Metabólica',
    description:
      'Abordagem integrativa que equilibra saúde hormonal, metabolismo, alimentação e performance física sustentável.',
  },
];

export default function Services() {
  return (
    <section id="especialidades" className="py-24 md:py-36 overflow-hidden relative"
      style={{ background: 'linear-gradient(160deg, #000f1a 0%, #001e35 40%, #001020 100%)' }}
    >
      {/* Decorative radial glow top-right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #1a4a72 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}
      />
      {/* Decorative radial glow bottom-left */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C4965A 0%, transparent 70%)', transform: 'translate(-40%, 40%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="flex items-center gap-3 justify-center mb-6">
            <div className="h-px w-10 bg-[#C4965A]/60" />
            <span className="text-[#C4965A] text-xs font-semibold tracking-[0.3em] uppercase">
              Especialidades
            </span>
            <div className="h-px w-10 bg-[#C4965A]/60" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Tratamentos
            <br />
            <em className="font-normal not-italic" style={{
              background: 'linear-gradient(90deg, #C4965A, #e8bf8a, #C4965A)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Individualizados
            </em>
          </h2>

          <p className="text-white/40 text-base leading-relaxed">
            Cada protocolo é construído de forma personalizada,<br className="hidden sm:block" />
            respeitando as necessidades e objetivos de cada paciente.
          </p>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <a
                key={service.title}
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col gap-5 p-7 rounded-3xl overflow-hidden transition-all duration-400"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.07)';
                  (e.currentTarget as HTMLElement).style.border = '1px solid rgba(196,150,90,0.25)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                  (e.currentTarget as HTMLElement).style.border = '1px solid rgba(255,255,255,0.07)';
                }}
              >
                {/* Number watermark */}
                <span className="absolute top-5 right-6 font-serif text-6xl font-bold select-none transition-colors duration-300"
                  style={{ color: 'rgba(196,150,90,0.06)' }}>
                  {service.num}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'linear-gradient(135deg, rgba(196,150,90,0.2) 0%, rgba(196,150,90,0.08) 100%)', border: '1px solid rgba(196,150,90,0.2)' }}
                >
                  <Icon size={21} className="text-[#C4965A]" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-base mb-3 leading-snug">{service.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/55 transition-colors duration-300">{service.description}</p>
                </div>

                {/* CTA row */}
                <div className="flex items-center gap-2 text-[#C4965A] text-xs font-semibold tracking-wide mt-1 transition-all duration-300 lg:opacity-60 lg:group-hover:opacity-100">
                  <WhatsAppIcon size={14} />
                  Agendar Consulta
                </div>

                {/* Bottom gold line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(90deg, transparent, #C4965A, transparent)' }}
                />
              </a>
            );
          })}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="text-center mt-14">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white font-semibold px-8 py-4 rounded-2xl text-sm transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #C4965A 0%, #b5884d 100%)',
              boxShadow: '0 8px 32px rgba(196,150,90,0.3)',
            }}
          >
            <WhatsAppIcon size={18} />
            Agendar Consulta
          </a>
        </div>
      </div>
    </section>
  );
}
