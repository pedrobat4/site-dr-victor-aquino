import { MessageCircle } from 'lucide-react';

const WA_LINK = 'https://api.whatsapp.com/send/?phone=553184035991&text&type=phone_number&app_absent=0';
const YEAR = new Date().getFullYear();

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

const specialties = [
  'Emagrecimento Avançado',
  'Reposição Hormonal',
  'Menopausa & Climatério',
  'Performance & Libido',
  'Lipedema',
  'Longevidade',
];

export default function Footer() {
  return (
    <>
      {/* WhatsApp FAB */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 wa-pulse"
        aria-label="WhatsApp"
      >
        <MessageCircle size={26} className="text-white fill-white" />
      </a>

      {/* Footer */}
      <footer className="bg-[#000f1a] text-white overflow-hidden">
        {/* Gold top border */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#C4965A]/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <img
                src="/logo-fundo-azul-Photoroom.png"
                alt="Dr. Victor Aquino"
                className="h-11 w-auto object-contain mb-6"
              />
              <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-5">
                Medicina de Longevidade com abordagem moderna, individualizada e baseada em ciência. Foco em saúde, qualidade de vida e performance metabólica.
              </p>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C4965A]" />
                <span className="text-white/40 text-xs">CRM 72794/MG</span>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <div className="text-white/30 text-[10px] font-semibold tracking-[0.2em] uppercase mb-5">
                Navegação
              </div>
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-white/45 text-sm hover:text-white transition-colors duration-200 hover:pl-1"
                      style={{ transition: 'color 0.2s, padding-left 0.2s' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specialties */}
            <div>
              <div className="text-white/30 text-[10px] font-semibold tracking-[0.2em] uppercase mb-5">
                Especialidades
              </div>
              <ul className="flex flex-col gap-3">
                {specialties.map((s) => (
                  <li key={s}>
                    <a
                      href="#especialidades"
                      className="text-white/45 text-sm hover:text-white transition-colors duration-200"
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/25 text-xs">
            <span>© {YEAR} Dr. Victor Aquino · Todos os direitos reservados</span>
            <span>Belo Horizonte, MG</span>
          </div>
        </div>
      </footer>
    </>
  );
}
