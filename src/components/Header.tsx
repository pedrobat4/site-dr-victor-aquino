import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

const WA_LINK = 'https://api.whatsapp.com/send/?phone=553184035991&text&type=phone_number&app_absent=0';

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleLink = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#001728]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#hero" onClick={() => handleLink('#hero')} className="flex items-center shrink-0">
            <img
              src="/logo-fundo-azul-Photoroom.png"
              alt="Dr. Victor Aquino"
              className="h-10 md:h-11 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLink(link.href)}
                className="text-sm font-medium px-4 py-2 rounded-full text-white/60 hover:text-white hover:bg-white/8 transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-[#C4965A] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#b5884d] transition-all duration-300 shadow-md shadow-[#C4965A]/20"
            >
              Agendar Consulta
            </a>
            <button
              className="lg:hidden p-2 rounded-full text-white/70 hover:text-white hover:bg-white/8"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#001728] border-t border-white/8 px-5 py-5 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLink(link.href)}
              className="text-left text-white/60 hover:text-white py-3 px-3 text-sm font-medium rounded-xl hover:bg-white/6 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 text-center bg-[#C4965A] text-white font-semibold py-3.5 rounded-2xl text-sm"
            onClick={() => setOpen(false)}
          >
            Agendar Consulta
          </a>
        </div>
      </div>
    </header>
  );
}
