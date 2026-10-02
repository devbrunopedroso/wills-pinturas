// ============================================================
// PÁGINAS DE SERVIÇO - cada item vira uma página em /servicos/<slug>
//
// Para editar o texto de um serviço, altere aqui. "photos" usa os
// arquivos de /public/imagens/obra/ (veja a lista em src/lib/gallery.ts).
// As perguntas ("faqs") aparecem na página e no JSON-LD.
// ============================================================

const OBRA = "/imagens/obra";

export type ServicePage = {
  slug: string;
  name: string;
  // título e descrição que aparecem no Google / IA
  metaTitle: string;
  metaDescription: string;
  // resumo curto (cards e listas)
  summary: string;
  // parágrafo de abertura: responde direto "o que é" e "quem faz em Reserva"
  intro: string;
  idealFor: string[];
  benefits: string[];
  steps: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  photos: { image: string; caption: string }[];
  related: string[];
  // mostra os vídeos do barracão na página
  showVideos?: boolean;
};

export const servicePages: ServicePage[] = [
  {
    slug: "pintura-de-fachada",
    name: "Pintura de Fachada",
    metaTitle: "Pintura de Fachada em Reserva-PR",
    metaDescription:
      "Pintura de fachada de casas e comércios em Reserva-PR, Imbaú, Cândido de Abreu e Tibagi. Textura, grafiato, faixas decorativas, muros e portões. Orçamento grátis.",
    summary:
      "Fachadas de casas e comércios com textura, grafiato, faixas decorativas, muros e portões.",
    intro:
      "A MB Pinturas faz pintura de fachada de casas e comércios em Reserva-PR e região. O serviço inclui a preparação da superfície, correção de trincas e a pintura de paredes externas, muros, varandas e portões, com acabamento liso, textura, grafiato ou faixas decorativas.",
    idealFor: [
      "Casas com pintura externa desbotada, manchada ou descascando",
      "Muros, gradis e portões",
      "Fachadas comerciais que precisam chamar a atenção de quem passa",
      "Imóveis que vão ser vendidos ou alugados",
    ],
    benefits: [
      "Protege a alvenaria contra chuva, sol e umidade",
      "Valoriza o imóvel e melhora a primeira impressão",
      "Combinação de cores e faixas decorativas sob medida",
      "Muro, portão e fachada no mesmo padrão",
    ],
    steps: [
      { title: "Visita e orçamento", text: "Avaliação da fachada, das cores desejadas e do estado das paredes." },
      { title: "Preparação", text: "Limpeza, raspagem de partes soltas e correção de trincas e falhas." },
      { title: "Fundo e acabamento", text: "Aplicação de selador ou fundo e da tinta, textura ou grafiato escolhido." },
      { title: "Detalhes e limpeza", text: "Faixas, recortes, portões e limpeza da área ao final da obra." },
    ],
    faqs: [
      {
        q: "Quem faz pintura de fachada em Reserva-PR?",
        a: "A MB Pinturas, do pintor Willian da Silva, faz pintura de fachada em Reserva-PR e também em Imbaú, Cândido de Abreu e Tibagi. O orçamento é grátis pelo WhatsApp (42) 98404-5089.",
      },
      {
        q: "Dá para fazer faixas decorativas na fachada?",
        a: "Sim. Várias obras da MB Pinturas têm faixas decorativas em cor contrastante, como as fachadas azuis com faixas brancas mostradas nas fotos desta página.",
      },
      {
        q: "A pintura de fachada inclui muro e portão?",
        a: "Pode incluir. Muro, gradil e portão podem ser pintados junto com a fachada para manter o mesmo padrão de cores.",
      },
    ],
    photos: [
      { image: `${OBRA}/fachada-azul-faixas-varanda.jpg`, caption: "Fachada com textura azul e faixas brancas" },
      { image: `${OBRA}/casa-turquesa-fachada.jpg`, caption: "Fachada e muro com gradil" },
      { image: `${OBRA}/casa-verde-fachada-frente.jpg`, caption: "Casa verde com muro" },
      { image: `${OBRA}/casa-bege-fachada.jpg`, caption: "Fachada residencial bege" },
      { image: `${OBRA}/casa-verde-limao-varanda.jpg`, caption: "Fachada e varanda verde-limão" },
      { image: `${OBRA}/casa-branca-externa.jpg`, caption: "Pintura externa branca" },
    ],
    related: ["grafiato", "textura", "pintura-residencial"],
  },
  {
    slug: "grafiato",
    name: "Grafiato",
    metaTitle: "Grafiato em Reserva-PR | Aplicação em Fachadas e Muros",
    metaDescription:
      "Aplicação de grafiato em fachadas, muros e paredes em Reserva-PR e região. Acabamento texturizado resistente, em várias cores. Orçamento grátis com a MB Pinturas.",
    summary:
      "Revestimento texturizado com sulcos, resistente e decorativo, muito usado em fachadas e muros.",
    intro:
      "Grafiato é um revestimento texturizado aplicado com desempenadeira e riscado para formar sulcos, criando um efeito rústico e em relevo. A MB Pinturas aplica grafiato em fachadas, muros e paredes em Reserva-PR, Imbaú, Cândido de Abreu, Tibagi e região.",
    idealFor: [
      "Fachadas e muros",
      "Paredes externas com pequenas imperfeições",
      "Áreas de churrasqueira e varandas",
      "Paredes internas de destaque",
    ],
    benefits: [
      "Disfarça imperfeições da parede",
      "Boa resistência ao tempo em áreas externas",
      "Pode ser aplicado já colorido ou pintado depois",
      "Visual moderno e marcante",
    ],
    steps: [
      { title: "Preparação", text: "Limpeza e correção da parede, que precisa estar firme e seca." },
      { title: "Fundo", text: "Aplicação de fundo preparador para melhorar a aderência." },
      { title: "Aplicação", text: "O grafiato é espalhado com desempenadeira de aço." },
      { title: "Riscado", text: "Os sulcos são feitos no sentido escolhido antes de a massa secar." },
    ],
    faqs: [
      {
        q: "Qual a diferença entre grafiato e textura?",
        a: "O grafiato é riscado com desempenadeira e forma sulcos, com efeito rústico. A textura é mais ampla: pode ser rolada, batida ou projetada, com vários acabamentos diferentes.",
      },
      {
        q: "Grafiato pode ser usado dentro de casa?",
        a: "Pode, principalmente em paredes de destaque, como atrás do sofá ou em áreas de churrasqueira. É mais comum em áreas externas.",
      },
      {
        q: "Quem aplica grafiato em Reserva-PR?",
        a: "A MB Pinturas aplica grafiato em Reserva-PR e região. Peça orçamento pelo WhatsApp (42) 98404-5089.",
      },
    ],
    photos: [
      { image: `${OBRA}/portao-textura-grafiato.jpg`, caption: "Muro com acabamento texturizado" },
      { image: `${OBRA}/fachada-azul-faixas-lateral.jpg`, caption: "Parede externa texturizada com faixas" },
      { image: `${OBRA}/varanda-azul-faixas.jpg`, caption: "Varanda com textura azul e faixas" },
    ],
    related: ["textura", "pintura-de-fachada"],
  },
  {
    slug: "textura",
    name: "Textura",
    metaTitle: "Textura em Paredes em Reserva-PR",
    metaDescription:
      "Aplicação de textura em paredes internas e externas em Reserva-PR, Imbaú, Cândido de Abreu e Tibagi. Acabamentos decorativos com a MB Pinturas. Orçamento grátis.",
    summary:
      "Acabamentos decorativos em relevo para paredes internas e externas.",
    intro:
      "Textura é um acabamento em relevo aplicado sobre a parede para dar personalidade ao ambiente e disfarçar imperfeições. A MB Pinturas aplica textura em paredes internas e externas de casas e comércios em Reserva-PR e região.",
    idealFor: [
      "Fachadas, muros e varandas",
      "Paredes de destaque em salas e quartos",
      "Paredes com pequenas imperfeições",
      "Comércios que querem um visual diferenciado",
    ],
    benefits: [
      "Disfarça pequenas imperfeições",
      "Vários estilos de acabamento",
      "Combina com faixas e cores contrastantes",
      "Valoriza o imóvel",
    ],
    steps: [
      { title: "Escolha do acabamento", text: "Definição do tipo de textura e da cor." },
      { title: "Preparação", text: "Limpeza, correção e fundo preparador na parede." },
      { title: "Aplicação", text: "A textura é aplicada com rolo, desempenadeira ou equipamento, conforme o acabamento." },
      { title: "Acabamento", text: "Pintura final, quando necessária, e limpeza do local." },
    ],
    faqs: [
      {
        q: "Textura serve para parede interna?",
        a: "Sim. A textura pode ser usada em paredes internas e externas. Dentro de casa ela costuma ser usada em uma parede de destaque.",
      },
      {
        q: "Textura esconde defeitos da parede?",
        a: "Ajuda a disfarçar pequenas imperfeições. Trincas e partes soltas precisam ser corrigidas antes da aplicação.",
      },
      {
        q: "Quem aplica textura em Reserva-PR?",
        a: "A MB Pinturas aplica textura em Reserva-PR, Imbaú, Cândido de Abreu e Tibagi. Orçamento grátis pelo WhatsApp (42) 98404-5089.",
      },
    ],
    photos: [
      { image: `${OBRA}/fachada-azul-faixas-varanda.jpg`, caption: "Textura azul com faixas brancas" },
      { image: `${OBRA}/varanda-azul-faixas.jpg`, caption: "Varanda texturizada" },
      { image: `${OBRA}/portao-textura-grafiato.jpg`, caption: "Muro com textura" },
    ],
    related: ["grafiato", "pintura-de-fachada"],
  },
  {
    slug: "pintura-projetada",
    name: "Pintura Projetada",
    metaTitle: "Pintura Projetada em Reserva-PR | Barracões e Grandes Áreas",
    metaDescription:
      "Pintura projetada com equipamento de alta pressão em Reserva-PR e região. Ideal para barracões, galpões e grandes áreas. Rápida e uniforme. Orçamento grátis.",
    summary:
      "Pintura com equipamento de alta pressão: rápida e uniforme, ideal para grandes áreas.",
    intro:
      "Pintura projetada é feita com equipamento de alta pressão (airless), que pulveriza a tinta sobre a superfície. O resultado é uma camada uniforme aplicada com muito mais rapidez que no rolo. A MB Pinturas faz pintura projetada em Reserva-PR e região, especialmente em barracões, galpões e grandes áreas.",
    idealFor: [
      "Barracões e galpões",
      "Paredes altas e grandes áreas",
      "Forros e estruturas",
      "Obras com prazo curto",
    ],
    benefits: [
      "Execução muito mais rápida em grandes áreas",
      "Camada uniforme, sem marcas de rolo",
      "Alcança cantos, estruturas e superfícies irregulares",
      "Menos dias de obra parada",
    ],
    steps: [
      { title: "Proteção", text: "Isolamento e proteção do piso, máquinas, janelas e áreas que não serão pintadas." },
      { title: "Preparação", text: "Limpeza e correção das superfícies." },
      { title: "Projeção", text: "Aplicação da tinta com equipamento de alta pressão." },
      { title: "Revisão", text: "Conferência dos detalhes e limpeza." },
    ],
    faqs: [
      {
        q: "Pintura projetada é mais rápida?",
        a: "Sim. Em grandes áreas, como barracões e galpões, a pintura projetada é bem mais rápida que a pintura com rolo e deixa a camada mais uniforme.",
      },
      {
        q: "Dá para fazer pintura projetada em barracão com máquinas dentro?",
        a: "Sim, desde que as máquinas e equipamentos sejam protegidos antes da aplicação. O vídeo desta página mostra um barracão pintado com o maquinário no local.",
      },
      {
        q: "Quem faz pintura projetada em Reserva-PR?",
        a: "A MB Pinturas faz pintura projetada em Reserva-PR e região. Orçamento grátis pelo WhatsApp (42) 98404-5089.",
      },
    ],
    photos: [
      { image: `${OBRA}/barracao-pintura-finalizada-capa.jpg`, caption: "Barracão com paredes pintadas" },
      { image: `${OBRA}/loja-comercial-depois.jpg`, caption: "Grande área comercial pintada" },
    ],
    related: ["pintura-comercial", "pintura-lisa"],
    showVideos: true,
  },
  {
    slug: "pintura-lisa",
    name: "Pintura Lisa",
    metaTitle: "Pintura Lisa de Paredes em Reserva-PR",
    metaDescription:
      "Pintura lisa de paredes e tetos, interna e externa, em Reserva-PR e região. Acabamento limpo e uniforme com a MB Pinturas. Orçamento grátis.",
    summary:
      "Acabamento liso e uniforme para paredes e tetos, internos e externos.",
    intro:
      "Pintura lisa é o acabamento tradicional de paredes e tetos, sem relevo, com aparência limpa e uniforme. A MB Pinturas faz pintura lisa em casas, apartamentos e comércios em Reserva-PR, Imbaú, Cândido de Abreu, Tibagi e região.",
    idealFor: [
      "Salas, quartos, cozinhas e corredores",
      "Tetos e forros",
      "Lojas e escritórios",
      "Repintura de imóveis para venda ou aluguel",
    ],
    benefits: [
      "Visual limpo e atemporal",
      "Fácil de limpar e de retocar",
      "Combina com qualquer estilo de decoração",
      "Ótimo resultado sobre massa corrida",
    ],
    steps: [
      { title: "Proteção", text: "Proteção de pisos, móveis, tomadas e esquadrias." },
      { title: "Preparação", text: "Lixamento, correções e massa corrida quando necessário." },
      { title: "Fundo", text: "Selador ou fundo preparador conforme a superfície." },
      { title: "Demãos de tinta", text: "Aplicação das demãos de tinta até a cobertura uniforme." },
    ],
    faqs: [
      {
        q: "Precisa de massa corrida antes da pintura lisa?",
        a: "Para um acabamento realmente liso em paredes internas, a massa corrida é recomendada, porque nivela a superfície e esconde imperfeições.",
      },
      {
        q: "Quem faz pintura de parede em Reserva-PR?",
        a: "A MB Pinturas, do pintor Willian da Silva, faz pintura de paredes internas e externas em Reserva-PR e região. Orçamento grátis pelo WhatsApp (42) 98404-5089.",
      },
    ],
    photos: [
      { image: `${OBRA}/corredor-paredes-brancas.jpg`, caption: "Corredor com pintura branca" },
      { image: `${OBRA}/sala-paredes-brancas.jpg`, caption: "Sala com paredes brancas" },
      { image: `${OBRA}/sala-ampla-forro-branco.jpg`, caption: "Sala ampla com paredes e forro brancos" },
      { image: `${OBRA}/sala-estar-verde-agua.jpg`, caption: "Sala de estar verde-água" },
    ],
    related: ["massa-corrida", "pintura-interna"],
  },
  {
    slug: "massa-corrida",
    name: "Massa Corrida",
    metaTitle: "Massa Corrida em Reserva-PR | Preparação de Paredes",
    metaDescription:
      "Aplicação de massa corrida para nivelar paredes antes da pintura em Reserva-PR e região. Paredes lisas e sem imperfeições. Orçamento grátis com a MB Pinturas.",
    summary:
      "Nivelamento das paredes antes da pintura, para um acabamento liso e sem imperfeições.",
    intro:
      "Massa corrida é uma massa aplicada em camadas finas para nivelar a parede e corrigir imperfeições antes da pintura. Depois de lixada, deixa a superfície lisa para um acabamento uniforme. A MB Pinturas aplica massa corrida em Reserva-PR e região.",
    idealFor: [
      "Paredes internas de casas e apartamentos",
      "Paredes com ondulações, furos ou pequenas falhas",
      "Imóveis novos antes da primeira pintura",
      "Quem quer um acabamento liso de alto padrão",
    ],
    benefits: [
      "Parede lisa e nivelada",
      "Esconde pequenas imperfeições",
      "Melhora o resultado da pintura final",
      "Reduz o consumo de tinta",
    ],
    steps: [
      { title: "Fundo", text: "Aplicação de selador ou fundo preparador na parede." },
      { title: "Primeira demão", text: "Massa aplicada com desempenadeira para preencher as falhas." },
      { title: "Segunda demão", text: "Nova camada fina para nivelar por completo." },
      { title: "Lixamento", text: "Lixamento e limpeza do pó, deixando a parede pronta para pintar." },
    ],
    faqs: [
      {
        q: "Massa corrida pode ser usada em área externa?",
        a: "A massa corrida comum (PVA) é indicada para áreas internas. Em áreas externas ou úmidas usa-se massa acrílica.",
      },
      {
        q: "Para que serve a massa corrida?",
        a: "Ela nivela e corrige imperfeições da parede antes da pintura, deixando a superfície lisa para um acabamento uniforme.",
      },
    ],
    photos: [
      { image: `${OBRA}/sala-paredes-brancas.jpg`, caption: "Paredes lisas finalizadas" },
      { image: `${OBRA}/corredor-paredes-brancas.jpg`, caption: "Corredor com acabamento liso" },
      { image: `${OBRA}/sala-integrada-pintura-clara.jpg`, caption: "Sala integrada com pintura clara" },
    ],
    related: ["pintura-lisa", "pintura-interna"],
  },
  {
    slug: "pintura-interna",
    name: "Pintura Interna",
    metaTitle: "Pintura Interna de Casas e Apartamentos em Reserva-PR",
    metaDescription:
      "Pintura interna de salas, quartos, cozinhas, corredores e tetos em Reserva-PR, Imbaú, Cândido de Abreu e Tibagi. Serviço limpo e organizado. Orçamento grátis.",
    summary:
      "Pintura de salas, quartos, cozinhas, corredores e tetos, com cuidado e limpeza.",
    intro:
      "A MB Pinturas faz pintura interna de casas, apartamentos e comércios em Reserva-PR e região: paredes, tetos, forros e detalhes, com proteção dos móveis e pisos e limpeza ao final do serviço.",
    idealFor: [
      "Salas, quartos e cozinhas",
      "Corredores e banheiros",
      "Tetos e forros",
      "Imóveis novos ou reformas",
    ],
    benefits: [
      "Ambientes renovados e mais claros",
      "Proteção dos móveis e do piso",
      "Limpeza completa após o serviço",
      "Pode ser combinada com massa corrida e textura",
    ],
    steps: [
      { title: "Orçamento", text: "Visita para medir os ambientes e definir cores e acabamentos." },
      { title: "Proteção", text: "Móveis, pisos, tomadas e esquadrias protegidos." },
      { title: "Preparação e pintura", text: "Correções, massa corrida quando necessário e demãos de tinta." },
      { title: "Entrega", text: "Retoques, limpeza e ambiente pronto para uso." },
    ],
    faqs: [
      {
        q: "Quem faz pintura interna em Reserva-PR?",
        a: "A MB Pinturas faz pintura interna de casas, apartamentos e comércios em Reserva-PR e região. Orçamento grátis pelo WhatsApp (42) 98404-5089.",
      },
      {
        q: "Preciso tirar os móveis para pintar?",
        a: "Não necessariamente. Os móveis podem ser afastados das paredes e protegidos durante a pintura.",
      },
    ],
    photos: [
      { image: `${OBRA}/cozinha-teto-rebaixado.jpg`, caption: "Cozinha com teto rebaixado" },
      { image: `${OBRA}/sala-estar-verde-agua.jpg`, caption: "Sala de estar verde-água" },
      { image: `${OBRA}/corredor-paredes-brancas.jpg`, caption: "Corredor" },
      { image: `${OBRA}/area-gourmet-amarela-faixas.jpg`, caption: "Área gourmet com faixas" },
      { image: `${OBRA}/sala-integrada-pintura-clara.jpg`, caption: "Sala integrada" },
      { image: `${OBRA}/banheiro-teto-branco.jpg`, caption: "Banheiro com teto branco" },
    ],
    related: ["pintura-lisa", "massa-corrida", "pintura-residencial"],
  },
  {
    slug: "pintura-residencial",
    name: "Pintura Residencial",
    metaTitle: "Pintura Residencial em Reserva-PR | Casas e Apartamentos",
    metaDescription:
      "Pintura residencial completa, interna e externa, em Reserva-PR, Imbaú, Cândido de Abreu e Tibagi. Fachada, muro, salas e quartos. Orçamento grátis com a MB Pinturas.",
    summary:
      "Pintura completa de casas e apartamentos, por dentro e por fora.",
    intro:
      "A MB Pinturas faz pintura residencial completa em Reserva-PR e região: fachada, muro, portão, varanda e ambientes internos, do início ao fim, com um único responsável pela obra.",
    idealFor: [
      "Casas novas antes da mudança",
      "Reforma e repintura completa",
      "Casas para venda ou aluguel",
      "Edículas, varandas e áreas gourmet",
    ],
    benefits: [
      "Casa inteira com padrão de cores definido",
      "Um único profissional cuidando de tudo",
      "Interna e externa no mesmo orçamento",
      "Limpeza ao final da obra",
    ],
    steps: [
      { title: "Visita e orçamento", text: "Levantamento dos ambientes e das áreas externas." },
      { title: "Planejamento", text: "Definição de cores, acabamentos e ordem de execução." },
      { title: "Execução", text: "Preparação e pintura das áreas externas e internas." },
      { title: "Entrega", text: "Revisão dos detalhes e limpeza." },
    ],
    faqs: [
      {
        q: "Quem faz pintura de casa em Reserva-PR?",
        a: "A MB Pinturas, do pintor Willian da Silva, faz pintura completa de casas em Reserva-PR, Imbaú, Cândido de Abreu e Tibagi. Orçamento grátis pelo WhatsApp (42) 98404-5089.",
      },
    ],
    photos: [
      { image: `${OBRA}/casa-branca-lateral.jpg`, caption: "Casa com pintura externa" },
      { image: `${OBRA}/casa-verde-fachada-muro.jpg`, caption: "Casa e muro" },
      { image: `${OBRA}/varanda-forro-madeira.jpg`, caption: "Varanda" },
      { image: `${OBRA}/casa-cinza-fachada.jpg`, caption: "Fachada cinza" },
      { image: `${OBRA}/sala-ampla-forro-branco.jpg`, caption: "Sala ampla" },
      { image: `${OBRA}/casa-azul-acinzentada.jpg`, caption: "Edícula" },
    ],
    related: ["pintura-de-fachada", "pintura-interna"],
  },
  {
    slug: "pintura-comercial",
    name: "Pintura Comercial",
    metaTitle: "Pintura Comercial em Reserva-PR | Lojas, Barracões e Empresas",
    metaDescription:
      "Pintura de lojas, salas comerciais, fachadas de empresas e barracões em Reserva-PR e região. Antes e depois de obras reais. Orçamento grátis com a MB Pinturas.",
    summary:
      "Lojas, salas comerciais, fachadas de empresas e barracões.",
    intro:
      "A MB Pinturas faz pintura comercial em Reserva-PR e região: lojas, salas comerciais, fachadas de empresas, galpões e barracões, inclusive com maquinário no local. As fotos e vídeos desta página são de obras comerciais reais, com antes e depois.",
    idealFor: [
      "Lojas e salas comerciais",
      "Fachadas de empresas",
      "Barracões, galpões e indústrias",
      "Imóveis comerciais para locação",
    ],
    benefits: [
      "Ambiente renovado para clientes e funcionários",
      "Fachada que valoriza a marca",
      "Planejamento para reduzir o tempo com a loja fechada",
      "Pintura projetada para grandes áreas",
    ],
    steps: [
      { title: "Visita técnica", text: "Avaliação do espaço, do prazo e do funcionamento do negócio." },
      { title: "Proteção", text: "Proteção de pisos, vitrines, máquinas e equipamentos." },
      { title: "Execução", text: "Pintura de paredes, tetos e fachada, com rolo ou projetada." },
      { title: "Entrega", text: "Revisão, limpeza e espaço liberado para uso." },
    ],
    faqs: [
      {
        q: "Quem faz pintura de loja em Reserva-PR?",
        a: "A MB Pinturas faz pintura de lojas, salas comerciais e fachadas de empresas em Reserva-PR e região. Orçamento grátis pelo WhatsApp (42) 98404-5089.",
      },
      {
        q: "A MB Pinturas pinta barracão?",
        a: "Sim. Os vídeos desta página mostram um barracão pintado pela MB Pinturas, antes e depois, com o maquinário no local.",
      },
    ],
    photos: [
      { image: `${OBRA}/loja-comercial-antes.jpg`, caption: "Loja comercial - antes, com o piso protegido" },
      { image: `${OBRA}/loja-comercial-depois.jpg`, caption: "Loja comercial - depois" },
      { image: `${OBRA}/loja-comercial-depois-iluminada.jpg`, caption: "Loja comercial finalizada" },
      { image: `${OBRA}/comercial-fachada-grafite.jpg`, caption: "Fachada comercial grafite" },
    ],
    related: ["pintura-projetada", "pintura-de-fachada"],
    showVideos: true,
  },
];

export const getServicePage = (slug: string) =>
  servicePages.find((s) => s.slug === slug);
