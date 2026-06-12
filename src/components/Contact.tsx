import { MapPin, Clock, Instagram } from 'lucide-react';
import { WA_PHONE, WA_LINK, PHONE_DISPLAY, WhatsAppIcon } from '../lib/whatsapp';

const IG_LINK = 'https://www.instagram.com/drvictorraquino/';

const contactItems = [
  {
    icon: WhatsAppIcon,
    label: 'Telefone / WhatsApp',
    value: PHONE_DISPLAY,
    href: WA_LINK,
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@drvictorraquino',
    href: IG_LINK,
  },
  {
    icon: MapPin,
    label: 'Localização',
    value: 'Belo Horizonte, MG',
    href: 'https://g.page/r/CR0S-it9JdbOEAE/review',
  },
  {
    icon: Clock,
    label: 'Atendimento',
    value: 'Segunda a Sexta · Horários Disponíveis',
    href: WA_LINK,
  },
];

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
    const service = (form.elements.namedItem('service') as HTMLSelectElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    const text = encodeURIComponent(
      `Olá, Dr. Victor! Me chamo *${name}*.\n\nTelefone: ${phone}\nEspecialidade de interesse: ${service}\n\n${message}`
    );
    window.open(`https://api.whatsapp.com/send?phone=${WA_PHONE}&type=phone_number&app_absent=0&text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 md:py-36 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#C4965A]" />
              <p className="text-[#C4965A] text-xs font-semibold tracking-[0.25em] uppercase">
                Contato
              </p>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#001728] leading-tight">
              Agende sua{' '}
              <span className="italic font-normal">Consulta</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-xs md:text-right leading-relaxed">
            Entre em contato pelo formulário abaixo ou diretamente pelo WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14">

          {/* Left: Info + Map */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-[#fafaf9] rounded-2xl border border-gray-100 hover:border-[#C4965A]/30 hover:bg-[#C4965A]/4 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#001728]/6 flex items-center justify-center group-hover:bg-[#C4965A] transition-colors duration-300">
                    <Icon size={17} className="text-[#001728] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs font-medium mb-0.5">{item.label}</div>
                    <div className="text-[#001728] font-semibold text-sm">{item.value}</div>
                  </div>
                </a>
              );
            })}

            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-md flex-1 min-h-[220px] border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.6105074290326!2d-43.933642899999995!3d-19.9408116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699a71d90ad5b%3A0xced6257d2bfa121d!2sDr%20Victor%20Aquino!5e0!3m2!1spt-BR!2sbr!4v1779286227057!5m2!1spt-BR!2sbr"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Dr. Victor Aquino"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-[#fafaf9] border border-gray-100 rounded-3xl p-7 md:p-9 flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-500 tracking-wide uppercase" htmlFor="name">
                    Nome completo <span className="text-[#C4965A]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Seu nome"
                    className="px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C4965A]/20 focus:border-[#C4965A] transition-all duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-500 tracking-wide uppercase" htmlFor="phone">
                    WhatsApp <span className="text-[#C4965A]">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(31) 99999-9999"
                    className="px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C4965A]/20 focus:border-[#C4965A] transition-all duration-200"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-500 tracking-wide uppercase" htmlFor="service">
                  Especialidade de interesse
                </label>
                <select
                  id="service"
                  name="service"
                  className="px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#C4965A]/20 focus:border-[#C4965A] transition-all duration-200"
                >
                  <option value="Emagrecimento Avançado">Emagrecimento Avançado</option>
                  <option value="Reposição Hormonal">Reposição Hormonal</option>
                  <option value="Menopausa e Climatério">Menopausa e Climatério</option>
                  <option value="Performance e Libido">Performance e Libido</option>
                  <option value="Tratamento para Lipedema">Tratamento para Lipedema</option>
                  <option value="Longevidade e Saúde Metabólica">Longevidade e Saúde Metabólica</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-gray-500 tracking-wide uppercase" htmlFor="message">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Conte brevemente sobre sua situação ou dúvida..."
                  className="px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C4965A]/20 focus:border-[#C4965A] transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-[#001728] text-white font-semibold py-4 rounded-2xl text-sm hover:bg-[#002240] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 mt-1"
              >
                <WhatsAppIcon size={18} />
                Enviar pelo WhatsApp
              </button>

              <p className="text-center text-xs text-gray-300 mt-1">
                Ao enviar, você será redirecionado para o WhatsApp do Dr. Victor.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
