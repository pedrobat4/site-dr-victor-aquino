import { MessageCircle, ClipboardList, FlaskConical, TrendingUp, ArrowRight } from 'lucide-react';

const WA_LINK = 'https://api.whatsapp.com/send/?phone=553184035991&text&type=phone_number&app_absent=0';

const steps = [
  {
    icon: MessageCircle,
    num: '01',
    title: 'Primeiro Contato',
    desc: 'Entre em contato pelo WhatsApp ou formulário. Nossa equipe responde rapidamente e agenda sua consulta no melhor horário.',
  },
  {
    icon: ClipboardList,
    num: '02',
    title: 'Consulta Inicial',
    desc: 'O Dr. Victor realiza uma avaliação clínica completa, com histórico detalhado, exames e bioimpedância corporal.',
  },
  {
    icon: FlaskConical,
    num: '03',
    title: 'Protocolo Personalizado',
    desc: 'Com base nos seus resultados, é desenvolvido um protocolo exclusivo: hormonal, metabólico ou de emagrecimento.',
  },
  {
    icon: TrendingUp,
    num: '04',
    title: 'Acompanhamento',
    desc: 'Monitoramento contínuo dos resultados com ajustes precisos para garantir evolução segura e duradoura.',
  },
];

export default function Process() {
  return (
    <section id="como-funciona" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#C4965A]" />
              <p className="text-[#C4965A] text-xs font-semibold tracking-[0.28em] uppercase">
                Como Funciona
              </p>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#001728] leading-tight">
              Do primeiro contato<br />
              <span className="italic font-normal">aos seus resultados</span>
            </h2>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-[#001728] border border-[#001728]/20 px-6 py-3 rounded-2xl hover:bg-[#001728] hover:text-white transition-all duration-300 self-end"
          >
            Começar agora
            <ArrowRight size={15} />
          </a>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(to right, transparent 6%, #e5e7eb 20%, #e5e7eb 80%, transparent 94%)' }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="group relative flex flex-col gap-5">
                  {/* Step number + icon */}
                  <div className="relative flex items-center gap-4 lg:flex-col lg:items-start">
                    {/* Icon circle — sits on the connecting line */}
                    <div className="relative w-[52px] h-[52px] rounded-2xl flex items-center justify-center bg-white border-2 border-gray-100 shadow-sm group-hover:border-[#C4965A]/40 group-hover:shadow-md transition-all duration-300 z-10 shrink-0">
                      <Icon size={22} className="text-[#001728] group-hover:text-[#C4965A] transition-colors duration-300" />
                    </div>

                    {/* Mobile: number beside icon */}
                    <span className="lg:hidden text-4xl font-serif font-bold text-gray-100 leading-none select-none">
                      {step.num}
                    </span>
                  </div>

                  {/* Text */}
                  <div>
                    {/* Desktop: number above title */}
                    <div className="hidden lg:block text-xs font-bold text-[#C4965A]/60 tracking-[0.2em] mb-2">{step.num}</div>
                    <h3 className="font-semibold text-[#001728] text-base mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>

                  {/* Gold bottom accent on hover */}
                  <div className="absolute -bottom-2 left-0 w-8 h-[2px] rounded-full bg-[#C4965A] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-12" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-16 rounded-3xl overflow-hidden relative flex flex-col md:flex-row items-center justify-between gap-6 px-8 py-8"
          style={{ background: 'linear-gradient(135deg, #001728 0%, #002a45 100%)' }}
        >
          {/* Glow */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20"
            style={{ background: 'radial-gradient(ellipse at right center, #C4965A, transparent 70%)' }}
          />

          <div className="relative">
            <p className="font-serif text-xl md:text-2xl font-bold text-white mb-1">
              Pronto para começar?
            </p>
            <p className="text-white/45 text-sm">Atendimento personalizado em Belo Horizonte.</p>
          </div>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="relative shrink-0 inline-flex items-center gap-2 bg-[#C4965A] text-white font-semibold px-7 py-3.5 rounded-2xl text-sm hover:bg-[#b5884d] transition-all duration-300 shadow-lg shadow-[#C4965A]/25 hover:-translate-y-0.5"
          >
            Agendar Consulta
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
