// Unidade de atendimento conforme a rota.
// "/" = Belo Horizonte (padrão). "/congonhas" = Congonhas-MG.
// Mesmo site, muda só endereço, mapa e cidade.

export type Unidade = {
  slug: string;
  cidade: string;
  cidadeUF: string;
  cidadeCurta: string; // forma curta, usada no rodapé e no título da aba
  endereco: string | null;
  mapsLink: string;
  mapsEmbed: string;
};

const CONGONHAS_ENDERECO =
  'Avenida Marechal Floriano Peixoto, 175, 3º andar - sala 314, Congonhas-MG';

const UNIDADES: Record<string, Unidade> = {
  bh: {
    slug: '',
    cidade: 'Belo Horizonte',
    cidadeUF: 'Belo Horizonte, MG',
    cidadeCurta: 'BH',
    endereco: null,
    mapsLink: 'https://g.page/r/CR0S-it9JdbOEAE/review',
    mapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.6105074290326!2d-43.933642899999995!3d-19.9408116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699a71d90ad5b%3A0xced6257d2bfa121d!2sDr%20Victor%20Aquino!5e0!3m2!1spt-BR!2sbr!4v1779286227057!5m2!1spt-BR!2sbr',
  },
  congonhas: {
    slug: 'congonhas',
    cidade: 'Congonhas',
    cidadeUF: 'Congonhas, MG',
    cidadeCurta: 'Congonhas',
    endereco: 'Avenida Marechal Floriano Peixoto, 175, 3º andar - sala 314',
    mapsLink: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONGONHAS_ENDERECO)}`,
    mapsEmbed: `https://www.google.com/maps?q=${encodeURIComponent(CONGONHAS_ENDERECO)}&output=embed`,
  },
};

function detectar(): Unidade {
  if (typeof window === 'undefined') return UNIDADES.bh;
  const path = window.location.pathname.replace(/\/+$/, '').toLowerCase();
  if (path === '/congonhas') return UNIDADES.congonhas;
  return UNIDADES.bh;
}

export const UNIDADE: Unidade = detectar();

// Título e metas vêm fixos do index.html com a cidade padrão (BH).
// Fora da unidade padrão, troca toda menção pela cidade da rota.
if (typeof document !== 'undefined' && UNIDADE !== UNIDADES.bh) {
  const trocar = (s: string) =>
    s
      .replace(/Belo Horizonte/g, UNIDADE.cidade)
      .replace(/\bBH\b/g, UNIDADE.cidadeCurta);
  document.title = trocar(document.title);
  document
    .querySelectorAll<HTMLMetaElement>(
      'meta[name="description"], meta[property^="og:"], meta[name^="twitter:"]',
    )
    .forEach((m) => {
      m.content = trocar(m.content);
    });
}
