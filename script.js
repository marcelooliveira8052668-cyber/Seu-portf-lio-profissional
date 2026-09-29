const projects = [
  {
    name: "Materiais de Construção",
    repo: "materiais-constru-o",
    cat: "comercial",
    icon: "🧱",
    tag: "Loja / Comercial",
    desc: "Modelo de loja para materiais de construção com catálogo, carrinho, checkout, estoque e estrutura de entrega.",
  },
  {
    name: "Hamburgueria",
    repo: "hamburgueria",
    cat: "comercial",
    icon: "🍔",
    tag: "Site / Delivery",
    desc: "Site comercial para hamburgueria com cardápio, bebidas, pedidos e integração com canais de atendimento.",
  },
  {
    name: "Salão de Beleza",
    repo: "Salao-de-beleza",
    cat: "comercial",
    icon: "💇",
    tag: "Site / Serviços",
    desc: "Apresentação profissional para salão com serviços, galeria, contato, mapa e WhatsApp.",
  },
  {
    name: "Comandas",
    repo: "comandas",
    cat: "sistemas",
    icon: "📋",
    tag: "Sistema",
    desc: "Projeto de sistema de comandas pensado para organizar pedidos e atendimento.",
  },
  {
    name: "Tutor IA",
    repo: "tutor-IA",
    cat: "sistemas",
    icon: "🤖",
    tag: "JavaScript / IA",
    desc: "Aplicação de apoio ao aprendizado com interação e recursos de tutor.",
  },
  {
    name: "Gerador de Portfólio",
    repo: "gerador-portfolio",
    cat: "sistemas",
    icon: "⚡",
    tag: "Gerador",
    desc: "Gerador de portfólio em que o usuário preenche informações e obtém uma estrutura pronta.",
  },
  {
    name: "Checkout Cyber Metal",
    repo: "checkout-cyber-metal",
    cat: "sistemas",
    icon: "💳",
    tag: "Checkout",
    desc: "Projeto de interface e fluxo de checkout para experiência de compra.",
  },
  {
    name: "MundoClima Global Pro",
    repo: "MundoClima-Global-Pro",
    cat: "sistemas",
    icon: "🌎",
    tag: "Aplicação Web",
    desc: "Aplicação web voltada para informações climáticas e experiência interativa.",
  },
  {
    name: "História em Foco",
    repo: "historia-em-foco",
    cat: "educacao",
    icon: "📚",
    tag: "Educação",
    desc: "Projeto digital dedicado a conteúdos e experiências de aprendizagem em História.",
  },
  {
    name: "Livro Digital de História",
    repo: "livro-digital-historia",
    cat: "educacao",
    icon: "📖",
    tag: "Educação",
    desc: "Livro digital interativo para apresentação de conteúdos históricos.",
  },
  {
    name: "Inglês para Iniciantes",
    repo: "ingl-s-iniciantes",
    cat: "educacao",
    icon: "🇬🇧",
    tag: "Educação",
    desc: "Projeto educacional voltado ao aprendizado de inglês para iniciantes.",
  },
  {
    name: "English Platform",
    repo: "english-platform",
    cat: "educacao",
    icon: "🗣️",
    tag: "Educação",
    desc: "Plataforma digital para prática e aprendizagem de inglês.",
  },
  {
    name: "SOLID — Arquitetura e Design Patterns",
    repo: "SOLID-Arquitetura-e-Design-Patterns",
    cat: "estudos",
    icon: "🏗️",
    tag: "Arquitetura",
    desc: "Projeto de estudo e aplicação de princípios SOLID e padrões de projeto.",
  },
  {
    name: "DRY",
    repo: "DRY",
    cat: "estudos",
    icon: "♻️",
    tag: "Boas práticas",
    desc: "Projeto dedicado ao princípio DRY e organização de código.",
  },
  {
    name: "Programador Front-end",
    repo: "Programador-front-end",
    cat: "estudos",
    icon: "💻",
    tag: "Front-end",
    desc: "Projeto relacionado à prática e apresentação de desenvolvimento front-end.",
  },
  {
    name: "Jogo da Velha",
    repo: "jogo-velha",
    cat: "estudos",
    icon: "🎮",
    tag: "JavaScript",
    desc: "Aplicação interativa com lógica de jogo e manipulação da interface.",
  },
  {
    name: "Jogo de Filme",
    repo: "jogo-filme",
    cat: "estudos",
    icon: "🎬",
    tag: "Interativo",
    desc: "Projeto de entretenimento com interação e lógica desenvolvida para web.",
  },
  {
    name: "Mapa-Múndi",
    repo: "mapa-mundi",
    cat: "educacao",
    icon: "🗺️",
    tag: "Geografia / Web",
    desc: "Experiência digital com mapa-múndi e exploração de conteúdo.",
  },
  {
    name: "MSO.history",
    repo: "MSO.history",
    cat: "educacao",
    icon: "🏛️",
    tag: "História",
    desc: "Projeto digital voltado à apresentação de conteúdos históricos.",
  },
  {
    name: "STF",
    repo: "stf",
    cat: "estudos",
    icon: "⚖️",
    tag: "Web",
    desc: "Projeto de interface e organização de informações para web.",
  },
  {
    name: "Inglês — Estudos",
    repo: "english-platform",
    cat: "educacao",
    icon: "🔤",
    tag: "JavaScript",
    desc: "Experimentos e recursos para aprendizagem de inglês.",
  },
  {
    name: "Portfólio Profissional",
    repo: "portifolio-profissional-2027",
    cat: "estudos",
    icon: "🧑‍💻",
    tag: "Portfólio",
    desc: "Projeto de portfólio para apresentação profissional na web.",
  },
  {
    name: "Meu Primeiro Site",
    repo: "meu-primeiro-site",
    cat: "estudos",
    icon: "🚀",
    tag: "HTML",
    desc: "Um dos projetos iniciais da jornada de desenvolvimento web.",
  },
  {
    name: "Nossas Lembranças",
    repo: "nossas-lembran-as",
    cat: "estudos",
    icon: "❤️",
    tag: "Web",
    desc: "Projeto web com foco em apresentação visual e memória.",
  },
  {
    name: "Os 4 Grandes de SP",
    repo: "os-4-grandes-de--sp",
    cat: "estudos",
    icon: "⚽",
    tag: "Web",
    desc: "Projeto temático com apresentação de conteúdo esportivo.",
  },
  {
    name: "Inglês para Iniciantes",
    repo: "ingl-s-iniciantes",
    cat: "educacao",
    icon: "📘",
    tag: "JavaScript",
    desc: "Experiência educacional voltada ao público iniciante.",
  },
  {
    name: "Convite Show",
    repo: "convite-show",
    cat: "estudos",
    icon: "🎟️",
    tag: "Landing Page",
    desc: "Página digital de convite com apresentação visual.",
  },
  {
    name: "Convite de Aniversário",
    repo: "convite-de-aniversario",
    cat: "estudos",
    icon: "🎂",
    tag: "Landing Page",
    desc: "Convite digital personalizado para evento.",
  },
  {
    name: "Estudos Científicos",
    repo: "estudos-cientificos",
    cat: "educacao",
    icon: "🔬",
    tag: "Educação",
    desc: "Projeto para organização e apresentação de conteúdos científicos.",
  },
  {
    name: "Portfólio Profissional",
    repo: "Portifolio-profissional-",
    cat: "estudos",
    icon: "✨",
    tag: "Portfólio",
    desc: "Outra versão de apresentação profissional desenvolvida para web.",
  },
  {
    name: "T-Instalação",
    repo: "t-instalacao",
    cat: "estudos",
    icon: "🔧",
    tag: "Web",
    desc: "Projeto web voltado a uma apresentação temática e funcional.",
  },
];
const base = "https://github.com/marcelooliveira8052668-cyber/";
const grid = document.querySelector("#projectGrid");
function render(filter = "all") {
  grid.innerHTML = projects
    .filter((p) => filter === "all" || p.cat === filter)
    .map(
      (p) =>
        `<article class="project"><div class="project-top"><div class="project-icon">${p.icon}</div><span class="tag">${p.tag}</span></div><h3>${p.name}</h3><p>${p.desc}</p><div class="project-bottom"><a href="${base + p.repo}" target="_blank" rel="noopener">Ver projeto ↗</a><a href="${base + p.repo}" target="_blank" rel="noopener">GitHub</a></div></article>`,
    )
    .join("");
}
document.querySelectorAll(".filters button").forEach((b) =>
  b.addEventListener("click", () => {
    document
      .querySelectorAll(".filters button")
      .forEach((x) => x.classList.remove("active"));
    b.classList.add("active");
    render(b.dataset.filter);
  }),
);
document
  .querySelector(".menu")
  .addEventListener("click", () =>
    document.querySelector("#nav").classList.toggle("open"),
  );
document
  .querySelectorAll("#nav a")
  .forEach((a) =>
    a.addEventListener("click", () =>
      document.querySelector("#nav").classList.remove("open"),
    ),
  );
render();
