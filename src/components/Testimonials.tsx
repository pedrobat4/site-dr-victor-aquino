import { Star } from 'lucide-react';

const WA_LINK = 'https://api.whatsapp.com/send/?phone=553184035991&text&type=phone_number&app_absent=0';
const GOOGLE_REVIEW_LINK = 'https://g.page/r/CR0S-it9JdbOEAE/review';

const testimonials = [
  {
    name: 'Solange Dos Santos',
    initial: 'S',
    time: 'uma semana atrás',
    text: 'Excelente atendimento! A Thaís é muito atenciosa e prestativa, e o Dr. Victor transmite muita confiança e cuidado durante todo o acompanhamento. Estou tendo uma experiência muito positiva. Recomendo!',
  },
  {
    name: 'Bernardo Mattarelli',
    initial: 'B',
    time: 'uma semana atrás',
    text: 'Dr. Victor Aquino super atencioso. Tomei Hormônio durante muito tempo (10 anos) zerei meu eixo, fiz o tratamento com ele 130 dias, voltou meu eixo e os exames estão ótimos. Atendimento de excelência.',
  },
  {
    name: 'Vera Lucia Braga',
    initial: 'V',
    time: 'um mês atrás',
    text: 'Excelente médico! Esclareceu todas as minhas dúvidas com muita clareza e profissionalismo, além de definir o melhor tratamento para o meu caso. Super indico o Dr. Victor!',
  },
  {
    name: 'Italo Bitencourt',
    initial: 'I',
    time: 'um mês atrás',
    text: 'Profissional competente, honesto e super prestativo. Me honrou muito com o atendimento!',
  },
  {
    name: 'Diego Silva Ferreira',
    initial: 'D',
    time: 'um mês atrás',
    text: 'Excelente médico, muito atencioso e experiente no tratamento hormonal em idosos. Fez toda diferença no tratamento. Indico e recomendo.',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 md:py-36 bg-[#fafaf9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <div className="flex items-center gap-3 justify-center mb-5">
            <div className="h-px w-8 bg-[#C4965A]" />
            <p className="text-[#C4965A] text-xs font-semibold tracking-[0.25em] uppercase">
              Depoimentos
            </p>
            <div className="h-px w-8 bg-[#C4965A]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#001728] leading-tight mb-5">
            O que dizem os{' '}
            <span className="italic font-normal">pacientes</span>
          </h2>
          <div className="flex items-center justify-center gap-2.5 mt-4">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={16} className="fill-[#C4965A] text-[#C4965A]" />
              ))}
            </div>
            <span className="text-gray-400 text-sm font-medium">5.0 no Google</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-100 rounded-3xl p-7 hover:border-[#C4965A]/25 hover:shadow-lg transition-all duration-300 flex flex-col gap-5"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(s => (
                  <Star key={s} size={13} className="fill-[#C4965A] text-[#C4965A]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-500 text-sm leading-relaxed flex-1 italic">"{t.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                <div className="w-9 h-9 rounded-full bg-[#001728] flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.initial}
                </div>
                <div>
                  <div className="text-[#001728] font-semibold text-sm">{t.name}</div>
                  <div className="text-gray-300 text-xs mt-0.5">{t.time}</div>
                </div>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="bg-[#001728] rounded-3xl p-7 flex flex-col items-center justify-center text-center gap-5">
            <div className="flex gap-1 mb-1">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={18} className="fill-[#C4965A] text-[#C4965A]" />
              ))}
            </div>
            <div>
              <p className="font-semibold text-white text-base mb-2">Deixe sua avaliação</p>
              <p className="text-white/40 text-sm leading-relaxed">
                Já foi atendido pelo Dr. Victor? Compartilhe sua experiência no Google.
              </p>
            </div>
            <a
              href={GOOGLE_REVIEW_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C4965A] text-white text-sm font-semibold px-6 py-3 rounded-2xl hover:bg-[#b5884d] transition-all duration-200"
            >
              Avaliar no Google
            </a>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[#001728] text-[#001728] font-semibold px-9 py-4 rounded-2xl text-sm hover:bg-[#001728] hover:text-white transition-all duration-300"
          >
            Agendar Minha Consulta
          </a>
        </div>
      </div>
    </section>
  );
}
