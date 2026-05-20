import { ChevronDown, Star } from 'lucide-react';

const WA_LINK = 'https://api.whatsapp.com/send/?phone=553184035991&text&type=phone_number&app_absent=0';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 80% 70% at 70% 50%, #0a3a5c 0%, #001728 55%, #000d17 100%)',
      }} />
      <div className="absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}
      />
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#C4965A]/60 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C4965A]/25 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* ── Text ── */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="animate-fade-in inline-flex items-center gap-2.5 mb-6 md:mb-8">
              <div className="h-px w-6 md:w-8 bg-[#C4965A]" />
              <span className="text-[#C4965A] text-[10px] md:text-xs font-semibold tracking-[0.22em] uppercase">
                CRM 72794/MG · Emagrecimento e Reposição Hormonal
              </span>
              <div className="h-px w-6 md:w-8 bg-[#C4965A]" />
            </div>

            {/* Heading */}
            <h1 className="animate-slide-up font-serif text-[2.8rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-4 md:mb-6">
              Dr. Victor
              <br />
              <span className="italic font-normal text-white/70">Aquino</span>
            </h1>

            {/* Subtitle */}
            <p className="animate-slide-up-delay-1 text-white/55 text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-sm mx-auto lg:mx-0 lg:max-w-md">
              Abordagem moderna e individualizada voltada para{' '}
              <span className="text-white/85 font-medium">longevidade</span>,{' '}
              <span className="text-white/85 font-medium">emagrecimento</span>,{' '}
              <span className="text-white/85 font-medium">reposição hormonal</span> e{' '}
              <span className="text-white/85 font-medium">performance metabólica</span>.
            </p>

            {/* CTAs */}
            <div className="animate-slide-up-delay-2 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10 md:mb-14">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#C4965A] text-white font-semibold px-7 py-4 rounded-2xl text-sm hover:bg-[#b5884d] transition-all duration-300 shadow-lg shadow-[#C4965A]/30 hover:-translate-y-0.5"
              >
                Agendar Consulta
              </a>
              <button
                onClick={() => document.querySelector('#especialidades')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/70 font-medium px-7 py-4 rounded-2xl text-sm hover:border-white/30 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                Ver Especialidades
              </button>
            </div>

            {/* Stats */}
            <div className="animate-slide-up-delay-3 flex flex-wrap gap-6 sm:gap-10 justify-center lg:justify-start pt-7 border-t border-white/8">
              {[
                { value: '+8', label: 'Anos de Experiência' },
                { value: '+3', label: 'Pós-Graduações' },
                { value: '5.0', label: 'Google', star: true },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                    <span className="font-serif text-2xl md:text-3xl font-bold text-white">{stat.value}</span>
                    {stat.star && <Star size={14} className="fill-[#C4965A] text-[#C4965A] mb-0.5" />}
                  </div>
                  <div className="text-white/35 text-[11px] mt-1 tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Photo Card — desktop ── */}
          <div className="hidden lg:flex justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem]"
                style={{ background: 'radial-gradient(ellipse at center, rgba(196,150,90,0.18) 0%, transparent 70%)' }}
              />
              <div className="relative w-[320px] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/50"
                style={{ border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <img
                  src="/homem-terno-azul-sentado-mesa-escritorio-3070x4162.webp"
                  alt="Dr. Victor Aquino"
                  className="w-full h-[460px] object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 h-44"
                  style={{ background: 'linear-gradient(to top, #001f38 0%, transparent 100%)' }}
                />
                <div className="absolute bottom-5 left-4 right-4">
                  <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-4 py-3 flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold text-sm">Dr. Victor Aquino</div>
                      <div className="text-white/50 text-xs mt-0.5">Medicina de Longevidade</div>
                    </div>
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} size={10} className="fill-[#C4965A] text-[#C4965A]" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-[#C4965A] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full">
                  Belo Horizonte
                </div>
              </div>
            </div>
          </div>

          {/* ── Photo Card — mobile/tablet ── */}
          <div className="lg:hidden flex justify-center animate-fade-in">
            <div className="relative w-56 sm:w-64">
              <div className="absolute -inset-4 rounded-[2rem]"
                style={{ background: 'radial-gradient(ellipse at center, rgba(196,150,90,0.15) 0%, transparent 70%)' }}
              />
              <div className="relative rounded-[1.5rem] overflow-hidden shadow-2xl shadow-black/50"
                style={{ border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <img
                  src="/homem-terno-azul-sentado-mesa-escritorio-3070x4162.webp"
                  alt="Dr. Victor Aquino"
                  className="w-full h-72 sm:h-80 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001728]/65 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-3 right-3">
                  <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-3 py-2.5 flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold text-xs">Dr. Victor Aquino</div>
                      <div className="text-white/50 text-[10px]">Medicina de Longevidade</div>
                    </div>
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} size={8} className="fill-[#C4965A] text-[#C4965A]" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-[#C4965A] text-white text-[9px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full">
                  Belo Horizonte
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/25 hover:text-white/50 transition-colors"
        aria-label="Rolar para baixo"
      >
        <span className="text-[9px] tracking-[0.2em] uppercase font-medium">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </button>
    </section>
  );
}
