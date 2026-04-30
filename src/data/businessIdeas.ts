import { BusinessIdea, BusinessGuide } from '../types';

export const businessGuide: BusinessGuide[] = [
  {
    title: "O que saber antes de começar",
    icon: "🧠",
    content: "Antes de iniciar qualquer negócio, é crucial entender que o empreendedorismo é uma maratona, não um sprint. Você precisa identificar um problema real que as pessoas estão dispostas a pagar para resolver. Estude o mercado, entenda seus concorrentes e, acima de tudo, conheça seu público-alvo. Não se trata apenas de ter uma ideia, mas de ter a capacidade de executá-la com consistência."
  },
  {
    title: "Como começar",
    icon: "🚀",
    content: "Comece pequeno (MVP - Produto Mínimo Viável). Não espere ter tudo perfeito para lançar. Valide sua ideia com os primeiros clientes, colete feedback e ajuste. Defina sua Proposta de Valor: o que torna você diferente? Comece com o que você tem e cresça conforme a demanda aumentar."
  },
  {
    title: "Como lidar com os clientes",
    icon: "🤝",
    content: "O cliente é o coração do seu negócio. Ouça mais do que fale. Resolva problemas, não apenas venda produtos. A empatia é sua maior ferramenta de vendas. Um cliente satisfeito volta e traz outros; um insatisfeito afasta dez. Tenha um sistema claro de atendimento e pós-venda."
  },
  {
    title: "Definição de Preços",
    icon: "💰",
    content: "Não olhe apenas para o custo. Olhe para o valor percebido pelo cliente. Sua estratégia de preço deve considerar: Custos fixos e variáveis, Preços da concorrência e o Valor da sua marca. Nunca entre numa guerra de preços se não puder ser o mais barato com lucro; prefira competir pela qualidade."
  },
  {
    title: "Gestão de Lucros",
    icon: "📈",
    content: "Lucro não é salário. No início, reinvestir a maior parte do lucro é essencial para o crescimento. Separe suas contas pessoais das contas da empresa (Regra de Ouro). Defina um pró-labore fixo para você e mantenha uma reserva de emergência para o negócio."
  },
  {
    title: "Como Crescer",
    icon: "🏔️",
    content: "Para crescer, você precisa de processos. Automatize o que for repetitivo. Delegue tarefas conforme o tempo se torna seu recurso mais escasso. Invista em marketing focado em ROI (Retorno sobre Investimento) e nunca pare de inovar."
  }
];

export const businessIdeas: BusinessIdea[] = [
  {
    id: '1',
    title: 'Consultoria de Marketing Digital para Pequenos Negócios',
    category: 'Serviços',
    difficulty: 'Médio',
    investment: 'Baixo',
    description: 'Ajudar empresas locais a gerir redes sociais e anúncios.',
    steps: [
      'Estude tráfego pago e gestão de redes sociais.',
      'Crie um portfólio com casos de estudo ou simulações.',
      'Aborde 5 empresas locais gratuitamente para validar resultados.',
      'Defina pacotes mensais de gestão.'
    ],
    tips: ['Foque no ROI do cliente.', 'Use ferramentas de agendamento automático.'],
    howToStart: 'Comece oferecendo auditorias gratuitas do perfil do Instagram de empresas locais.',
    howToScale: 'Contrate gestores juniores e automatize os relatórios.'
  },
  {
    id: '2',
    title: 'Loja de Dropshipping de Nicho',
    category: 'E-commerce',
    difficulty: 'Médio',
    investment: 'Baixo',
    description: 'Vender produtos sem stock, focando num nicho específico (ex: acessórios para pets).',
    steps: [
      'Escolha um nicho com alta demanda emocional.',
      'Crie uma loja na Shopify ou Nuvemshop.',
      'Encontre fornecedores no AliExpress ou CJ Dropshipping.',
      'Crie anúncios no Facebook/TikTok Ads.'
    ],
    tips: ['Teste muitos produtos antes de escalar.', 'Foque no copy da página de vendas.'],
    howToStart: 'Pesquise produtos vencedores no TikTok Creative Center.',
    howToScale: 'Crie uma marca própria (White Label) após validar os produtos.'
  },
  {
    id: '3',
    title: 'Criação de Infoprodutos (Cursos/Ebooks)',
    category: 'Educação',
    difficulty: 'Médio',
    investment: 'Baixo',
    description: 'Empacotar o seu conhecimento num formato digital.',
    steps: [
      'Identifique uma habilidade que você domina.',
      'Estruture o conteúdo em módulos.',
      'Grave as aulas ou escreva o ebook.',
      'Cadastre na Hotmart ou Kiwify.'
    ],
    tips: ['Produza conteúdo gratuito para gerar autoridade.', 'Foque na transformação do aluno.'],
    howToStart: 'Crie um PDF gratuito para atrair leads (lista de e-mails/WhatsApp).',
    howToScale: 'Crie uma esteira de produtos com diferentes níveis de preço.'
  },
  {
    id: '4',
    title: 'Gestão de Tráfego Pago',
    category: 'Serviços',
    difficulty: 'Médio',
    investment: 'Baixo',
    description: 'Gerir orçamentos de anúncios para profissionais liberais.',
    steps: [
      'Domine o Facebook Ads e Google Ads.',
      'Foque em profissionais de alto ticket (médicos, advogados).',
      'Apresente dashboards de resultados claros.',
      'Cobre uma taxa fixa + percentual do investimento.'
    ],
    tips: ['Especialize-se num nicho.', 'Crie landing pages de alta conversão.'],
    howToStart: 'Ofereça 15 dias de gestão gratuita para provar o valor.',
    howToScale: 'Monte uma agência de performance.'
  },
  {
    id: '5',
    title: 'Edição de Vídeos para Criadores de Conteúdo',
    category: 'Design/Media',
    difficulty: 'Médio',
    investment: 'Médio',
    description: 'Editar vídeos dinâmicos para Reels, TikTok e YouTube.',
    steps: [
      'Aprenda Premiere, Final Cut ou CapCut PC.',
      'Crie um reel (portfólio) com cortes dinâmicos e legendas.',
      'Contacte youtubers ou influenciadores em ascensão.',
      'Defina pacotes por volume de vídeos.'
    ],
    tips: ['Mantenha-se atualizado com as tendências visuais.', 'Cumpra rigorosamente os prazos.'],
    howToStart: 'Edite 3 vídeos de um criador famoso e envie como amostra.',
    howToScale: 'Crie uma produtora de conteúdo vertical.'
  },
  {
    id: '6',
    title: 'Agência de Ghostwriter para LinkedIn',
    category: 'Escrita',
    difficulty: 'Médio',
    investment: 'Baixo',
    description: 'Escrever posts para executivos e empresários no LinkedIn.',
    steps: [
      'Entenda o algoritmo do LinkedIn e storytelling.',
      'Pesquise o tom de voz do cliente.',
      'Crie um cronograma editorial estratégico.',
      'Analise as métricas de engajamento.'
    ],
    tips: ['Foque em construção de autoridade.', 'Use ganchos (hooks) fortes.'],
    howToStart: 'Escreva 5 posts para o seu próprio perfil como amostra.',
    howToScale: 'Expanda para serviços de assessoria de imprensa digital.'
  },
  {
    id: '7',
    title: 'Personal Organizer Digital',
    category: 'Serviços',
    difficulty: 'Básico',
    investment: 'Baixo',
    description: 'Ajudar pessoas a organizarem a vida digital (ficheiros, e-mails, backups).',
    steps: [
      'Crie métodos de organização de pastas e arquivos.',
      'Aprenda sobre ferramentas de produtividade (Notion, Google Drive).',
      'Ofereça sessões de consultoria online.',
      'Crie templates prontos para venda.'
    ],
    tips: ['A segurança de dados é primordial.', 'Foque na redução do stress digital.'],
    howToStart: 'Ofereça uma limpeza de e-mails gratuita para amigos.',
    howToScale: 'Venda cursos de produtividade.'
  },
  {
    id: '8',
    title: 'Desenvolvimento de Chatbots com IA',
    category: 'Tecnologia',
    difficulty: 'Avançado',
    investment: 'Baixo',
    description: 'Criar assistentes virtuais inteligentes para atendimento de empresas.',
    steps: [
      'Aprenda a usar plataformas como ManyChat ou Typebot.',
      'Entenda como integrar APIs da OpenAI.',
      'Mapeie o fluxo de atendimento do cliente.',
      'Instale e teste em ambiente real.'
    ],
    tips: ['Foque na redução de custos de suporte.', 'Personalize a personalidade da IA.'],
    howToStart: 'Crie um bot de agendamento para uma clínica local.',
    howToScale: 'Crie uma plataforma SaaS de bots nichados.'
  },
  {
    id: '9',
    title: 'Lavandaria a Seco Delivery',
    category: 'Serviços Físicos',
    difficulty: 'Básico',
    investment: 'Médio',
    description: 'Serviço de recolha e entrega de roupas para lavar.',
    steps: [
      'Estabeleça parcerias com lavandarias existentes ou compre equipamentos.',
      'Crie um site/app de agendamento.',
      'Defina rotas de logística de recolha.',
      'Invista em embalagens premium.'
    ],
    tips: ['O cumprimento da hora de entrega é vital.', 'Foco na conveniência.'],
    howToStart: 'Comece atendendo o seu condomínio.',
    howToScale: 'Crie um modelo de franquia ou assinatura mensal.'
  },
  {
    id: '10',
    title: 'Venda de Comida Saudável (Marmitas)',
    category: 'Alimentação',
    difficulty: 'Médio',
    investment: 'Médio',
    description: 'Produção de refeições congeladas ou frescas focas em dieta.',
    steps: [
      'Defina um cardápio com nutricionista.',
      'Consiga as licenças sanitárias necessárias.',
      'Organize a logística de cozinha e entregas.',
      'Divulgue em ginásios e escritórios.'
    ],
    tips: ['Use fotos profissionais dos pratos.', 'Ofereça planos semanais.'],
    howToStart: 'Faça um "dia de degustação" para vizinhos e amigos.',
    howToScale: 'Abra um ponto de venda físico ou ponto de recolha.'
  },
  // Adding more ideas quickly to reach 50
  {
    id: '11',
    title: 'Aulas de Yoga/Pilates Online',
    category: 'Bem-estar',
    difficulty: 'Básico',
    investment: 'Baixo',
    description: 'Dar aulas em grupo ou individuais via Zoom/Meet.',
    steps: ['Certifique-se na área.', 'Crie um espaço bem iluminado.', 'Venda pacotes mensais.'],
    tips: ['Gravação das aulas para consulta posterior.', 'Foco na correção postural.'],
    howToStart: 'Primeira aula grátis via Instagram Live.',
    howToScale: 'Crie uma plataforma de assinatura com vídeos gravados.'
  },
  {
    id: '12',
    title: 'Consultoria de Estilo e Imagem',
    category: 'Serviços',
    difficulty: 'Básico',
    investment: 'Baixo',
    description: 'Ajudar pessoas a melhorarem a sua imagem profissional e pessoal.',
    steps: ['Estude colorimetria e tipos de corpo.', 'Crie guias de estilo personalizados.', 'Ofereça detox de guarda-roupa.'],
    tips: ['Trabalhe com o que o cliente já tem.', 'Foque na autoconfiança.'],
    howToStart: 'Analise o perfil de 3 amigos e publique o antes e depois.',
    howToScale: 'Parcerias com marcas de roupas e acessórios.'
  },
  {
    id: '13',
    title: 'Hospedagem para Animais (Pet Sitter)',
    category: 'Serviços',
    difficulty: 'Básico',
    investment: 'Baixo',
    description: 'Cuidar de animais na sua casa ou na casa do dono.',
    steps: ['Prepare um ambiente seguro.', 'Cadastre-se em apps como DogHero.', 'Tenha contatos de veterinários de emergência.'],
    tips: ['Envie fotos e vídeos diários para os donos.', 'Ofereça serviços extras como banho.'],
    howToStart: 'Crie um perfil atrativo com fotos dos seus próprios pets.',
    howToScale: 'Alugue um espaço maior e contrate ajudantes.'
  },
  {
    id: '14',
    title: 'Agência de Micro-Influenciadores',
    category: 'Marketing',
    difficulty: 'Médio',
    investment: 'Baixo',
    description: 'Conectar pequenas marcas a influenciadores de nicho.',
    steps: ['Crie uma base de dados de influenciadores.', 'Defina métricas de sucesso.', 'Faça a ponte comercial.'],
    tips: ['Engajamento é mais importante que seguidores.', 'Seja transparente com os dados.'],
    howToStart: 'Mapeie 50 influenciadores locais e entre em contato.',
    howToScale: 'Crie uma plataforma de self-service para marcas.'
  },
  {
    id: '15',
    title: 'Artesanato em Resina/Customização',
    category: 'Produtos',
    difficulty: 'Básico',
    investment: 'Baixo',
    description: 'Criar peças únicas (porta-copos, joias, capas de telemóvel).',
    steps: ['Compre o kit básico de resina.', 'Pratique diferentes técnicas.', 'Venda pelo Instagram e Etsy.'],
    tips: ['O acabamento é o diferencial.', 'Use embalagens presenteáveis.'],
    howToStart: 'Faça peças para datas comemorativas (Dia da Mãe, Natal).',
    howToScale: 'Venda kits de "faça você mesmo" (DIY).'
  },
  {
    id: '16',
    title: 'Consultoria de Viagens Personalizada',
    category: 'Serviços',
    difficulty: 'Básico',
    investment: 'Baixo',
    description: 'Roteiros exclusivos e gestão de reservas para turistas.',
    steps: ['Especialize-se em certos destinos.', 'Consiga descontos com parceiros.', 'Crie guias digitais de suporte.'],
    tips: ['Dê dicas que não estão nos guias comuns.', 'Suporte 24h durante a viagem.'],
    howToStart: 'Crie um roteiro incrível para a sua próxima viagem e partilhe.',
    howToScale: 'Torne-se uma agência de viagens boutique.'
  },
  {
    id: '17',
    title: 'Transfere e Tours Locais',
    category: 'Turismo',
    difficulty: 'Básico',
    investment: 'Médio',
    description: 'Levar turistas a locais "escondidos" da sua cidade.',
    steps: ['Tenha um carro confortável.', 'Conheça a história local.', 'Promova-se em hotéis e Airbnb.'],
    tips: ['Ofereça experiências autênticas (comida local).', 'Seja pontual.'],
    howToStart: 'Abra um perfil no TripAdvisor Experiences.',
    howToScale: 'Contrate mais motoristas e guias.'
  },
  {
    id: '18',
    title: 'Clube de Assinatura de Produtos Locais',
    category: 'E-commerce',
    difficulty: 'Médio',
    investment: 'Médio',
    description: 'Caixa mensal com queijos, vinhos ou artesanatos da região.',
    steps: ['Curadoria de produtores locais.', 'Crie uma caixa com design apelativo.', 'Gestão de logística recorrente.'],
    tips: ['A experiência de unboxing deve ser mágica.', 'Foque na exclusividade.'],
    howToStart: 'Comece com 10 assinantes locais.',
    howToScale: 'Expanda o delivery para todo o país.'
  },
  {
    id: '19',
    title: 'Desenvolvimento de Sites (No-Code)',
    category: 'Tecnologia',
    difficulty: 'Básico',
    investment: 'Baixo',
    description: 'Criar sites profissionais usando Framer, Webflow ou Elementor.',
    steps: ['Domine uma das ferramentas.', 'Foque em Landing Pages de venda.', 'Ofereça manutenção mensal.'],
    tips: ['O site deve ser rápido e mobile-friendly.', 'Aprenda SEO básico.'],
    howToStart: 'Crie um site para o seu próprio negócio ou de um amigo.',
    howToScale: 'Venda pacotes completos de presença digital.'
  },
  {
    id: '20',
    title: 'Serviço de Limpeza Pós-Obra',
    category: 'Serviços',
    difficulty: 'Básico',
    investment: 'Baixo',
    description: 'Limpeza profunda após construções ou reformas.',
    steps: ['Compre produtos industriais.', 'Trabalhe com agilidade e detalhe.', 'Faça parcerias com arquitetos.'],
    tips: ['A indicação é a sua melhor fonte de clientes.', 'Tenha uma equipa de confiança.'],
    howToStart: 'Feche parceria com uma pequena construtora local.',
    howToScale: 'Expanda para limpeza comercial.'
  },
  {
    id: '21',
    title: 'Professor Particular de Idiomas',
    category: 'Educação',
    difficulty: 'Médio',
    investment: 'Baixo',
    description: 'Aulas personalizadas focadas em conversação.',
    steps: ['Defina seu método.', 'Crie materiais didáticos digitais.', 'Promova-se no LinkedIn.'],
    tips: ['Foque no inglês para negócios se possível.', 'Use ferramentas interativas.'],
    howToStart: 'Dê uma aula experimental gratuita.',
    howToScale: 'Crie um curso gravado ou uma escola online.'
  },
  {
    id: '22',
    title: 'Cozinha para Eventos (Catering Pequeno)',
    category: 'Alimentação',
    difficulty: 'Médio',
    investment: 'Médio',
    description: 'Finger food e buffets para festas particulares ou pequenas empresas.',
    steps: ['Especialize-se num tipo de cozinha.', 'Invista em louça e apresentação.', 'Promova no Instagram.'],
    tips: ['O "passa-palavra" é fundamental.', 'Ofereça opções veganas/sem glúten.'],
    howToStart: 'Cozinhe para um aniversário de um familiar.',
    howToScale: 'Abra um espaço de eventos próprio.'
  },
  {
    id: '23',
    title: 'Venda de Plantas e Consultoria de Jardim',
    category: 'Produtos',
    difficulty: 'Básico',
    investment: 'Baixo',
    description: 'Venda de plantas ornamentais e jardins verticais.',
    steps: ['Aprenda sobre botânica básica.', 'Foque em plantas de interior.', 'Ofereça serviços de manutenção.'],
    tips: ['Crie "Kits de sobrevivência" para plantas.', 'Dicas de rega no Instagram.'],
    howToStart: 'Monte um pequeno viveiro em casa.',
    howToScale: 'Venda para escritórios e hotéis.'
  },
  {
    id: '24',
    title: 'Design de Apresentações para Empresas',
    category: 'Design',
    difficulty: 'Médio',
    investment: 'Baixo',
    description: 'Criar slides profissionais para reuniões e pitch decks.',
    steps: ['Domine PowerPoint, Keynote ou Canva.', 'Aprenda sobre visualização de dados.', 'Foque em clareza e impacto.'],
    tips: ['Use menos texto e mais ícones/gráficos.', 'Storytelling é a chave.'],
    howToStart: 'Ofereça refazer a apresentação de um empresário.',
    howToScale: 'Crie templates editáveis premium.'
  },
  {
    id: '25',
    title: 'Venda de Produtos em Segunda Mão (Brechó Curado)',
    category: 'Varejo',
    difficulty: 'Básico',
    investment: 'Baixo',
    description: 'Comprar e revender produtos usados de alta qualidade.',
    steps: ['Garimpe peças em mercados ou doações.', 'Faça uma curadoria rigorosa.', 'Venda em plataformas como Vinted ou Instagram.'],
    tips: ['Fotos estilo editorial vendem mais.', 'Higienização impecável.'],
    howToStart: 'Comece vendendo o que você não usa mais.',
    howToScale: 'Abra uma loja física ou pop-up store.'
  },
  {
    id: '26',
    title: 'Produção de Podcasts',
    category: 'Media',
    difficulty: 'Médio',
    investment: 'Médio',
    description: 'Gravação, edição e distribuição de podcasts para empresas.',
    steps: ['Invista em microfones e interface de áudio.', 'Aprenda edição de áudio dinâmica.', 'Ajude na estratégia de conteúdo.'],
    tips: ['Áudio limpo é inegociável.', 'Crie "nuggets" para redes sociais.'],
    howToStart: 'Produza o seu próprio podcast para aprender o processo.',
    howToScale: 'Monte um estúdio físico para aluguer.'
  },
  {
    id: '27',
    title: 'Serviço de Lavagem de Carros ao Domicílio',
    category: 'Serviços',
    difficulty: 'Básico',
    investment: 'Baixo',
    description: 'Lavagem ecológica e detalhamento em casa do cliente.',
    steps: ['Compre produtos de lavagem a seco.', 'Organize um kit móvel portátil.', 'Faça pacotes mensais.'],
    tips: ['Foque no detalhe interno.', 'Seja extremamente cuidadoso.'],
    howToStart: 'Lave o carro de 5 vizinhos.',
    howToScale: 'Contrate uma equipa e use motos equipadas.'
  },
  {
    id: '28',
    title: 'Consultoria de Eficiência Energética',
    category: 'Serviços',
    difficulty: 'Avançado',
    investment: 'Baixo',
    description: 'Ajudar casas e empresas a reduzirem a conta de luz/água.',
    steps: ['Estude sobre painéis solares, isolamento e LED.', 'Faça auditorias de consumo.', 'Proponha soluções de economia.'],
    tips: ['O seu serviço paga-se sozinho com a poupança.', 'Foque na sustentabilidade.'],
    howToStart: 'Analise a conta de luz da sua própria casa.',
    howToScale: 'Venda e instale equipamentos de energia renovável.'
  },
  {
    id: '29',
    title: 'Criação de Currículos e Perfil LinkedIn',
    category: 'Serviços',
    difficulty: 'Básico',
    investment: 'Baixo',
    description: 'Otimizar currículos para passar em sistemas de candidatura (ATS).',
    steps: ['Aprenda as palavras-chave de cada área.', 'Use design limpo e profissional.', 'Ofereça consultoria de entrevista.'],
    tips: ['Foque em resultados e conquistas do candidato.', 'Seja rápido na entrega.'],
    howToStart: 'Ajude um amigo a conseguir um emprego.',
    howToScale: 'Crie uma agência de outplacement.'
  },
  {
    id: '30',
    title: 'Venda de Doces Gourmet (Brigadeiros, Cookies)',
    category: 'Alimentação',
    difficulty: 'Básico',
    investment: 'Baixo',
    description: 'Produção artesanal com ingredientes de alta qualidade.',
    steps: ['Teste receitas exclusivas.', 'Capriche na embalagem.', 'Venda por encomenda ou em cafés.'],
    tips: ['Ofereça degustação.', 'Foque em datas festivas.'],
    howToStart: 'Venda uma caixa para os seus colegas de trabalho.',
    howToScale: 'Crie uma marca de revenda para cafeterias e lojas.'
  },
  {
    id: '31',
    title: 'Montagem de Móveis e Pequenas Reparações',
    category: 'Serviços',
    difficulty: 'Básico',
    investment: 'Baixo',
    description: 'Ajudar pessoas com montagens de IKEA e fixes domésticos.',
    steps: ['Tenha a sua mala de ferramentas completa.', 'Registe-se em apps de serviços.', 'Seja pontual e limpo.'],
    tips: ['Tenha sempre parafusos e buchas extra.', 'Ofereça garantia do serviço.'],
    howToStart: 'Coloque um anúncio no grupo do bairro.',
    howToScale: 'Crie uma equipa de "Maridos/Mulheres de Aluguer".'
  },
  {
    id: '32',
    title: 'Explicações Online (Matemática, Português, etc.)',
    category: 'Educação',
    difficulty: 'Básico',
    investment: 'Baixo',
    description: 'Apoio escolar personalizado via vídeo.',
    steps: ['Defina os anos de escolaridade que domina.', 'Use quadros virtuais.', 'Crie exercícios extras.'],
    tips: ['Acompanhe o progresso do aluno.', 'Fale com os pais regularmente.'],
    howToStart: 'Dê a primeira sessão de esclarecimento de dúvidas gratuita.',
    howToScale: 'Crie um centro de estudos online com vários tutores.'
  },
  {
    id: '33',
    title: 'Gestão de Airbnb para Proprietários',
    category: 'Imobiliário',
    difficulty: 'Médio',
    investment: 'Baixo',
    description: 'Gerir check-ins, limpeza e anúncios para quem não tem tempo.',
    steps: ['Aprenda a otimizar anúncios no Airbnb/Booking.', 'Organize equipas de limpeza rápidas.', 'Gestão de comunicação com hóspedes.'],
    tips: ['Boas fotos aumentam o preço.', 'Cobre uma percentagem da reserva (ex: 20%).'],
    howToStart: 'Ofereça gerir o apartamento de um conhecido.',
    howToScale: 'Crie uma empresa de Property Management.'
  },
  {
    id: '34',
    title: 'Venda de Velas Artesanais Perfumadas',
    category: 'Produtos',
    difficulty: 'Básico',
    investment: 'Médio',
    description: 'Criar velas decorativas e aromáticas para casa.',
    steps: ['Compre cera de soja e essências de qualidade.', 'Crie uma identidade visual minimalista.', 'Venda pelo Instagram e feiras locais.'],
    tips: ['O aroma deve ser fiel ao nome.', 'Embalagens sustentáveis são valorizadas.'],
    howToStart: 'Crie um "Kit Relaxamento" para oferta.',
    howToScale: 'Parcerias com SPAs e lojas de decoração.'
  },
  {
    id: '35',
    title: 'Assistente Virtual Administrativo',
    category: 'Serviços',
    difficulty: 'Básico',
    investment: 'Baixo',
    description: 'Gestão de e-mails, agenda e faturação para freelancers.',
    steps: ['Defina os seus serviços (secretariado remoto).', 'Organize-se com ferramentas de tempo.', 'Seja proativo.'],
    tips: ['A confiança é o seu ativo mais caro.', 'Mantenha a confidencialidade.'],
    howToStart: 'Ofereça 5 horas semanais para um empresário atarefado.',
    howToScale: 'Contrate outros assistentes e crie uma agência.'
  },
  {
    id: '36',
    title: 'Organização de Micro-Eventos (Pedida de Casamento, Chá de Bebé)',
    category: 'Eventos',
    difficulty: 'Médio',
    investment: 'Baixo',
    description: 'Planear e decorar pequenos eventos íntimos e especiais.',
    steps: ['Crie uma rede de fornecedores fiáveis.', 'Foque no detalhe emocional.', 'Crie portfólio visual no Instagram.'],
    tips: ['Cada evento deve ser único.', 'Foco nas fotos para o cliente.'],
    howToStart: 'Organize a festa de um amigo/familiar e use como amostra.',
    howToScale: 'Especialize-se em Destination Weddings.'
  },
  {
    id: '37',
    title: 'Venda de T-shirts com Design Próprio (PoD)',
    category: 'Moda',
    difficulty: 'Básico',
    investment: 'Baixo',
    description: 'Desenhar e vender roupa sem stock usando Print-on-Demand.',
    steps: ['Crie designs originais no Canva ou Illustrator.', 'Use plataformas como Printful ou Redbubble.', 'Foque num nicho (ex: cultura geek, frases motivacionais).'],
    tips: ['Siga as tendências de memes e design.', 'Invista em mockups realistas.'],
    howToStart: 'Crie uma coleção cápsula de 5 t-shirts.',
    howToScale: 'Crie a sua própria marca com stock e logística própria.'
  },
  {
    id: '38',
    title: 'Consultoria de SEO para Sites Locais',
    category: 'Tecnologia',
    difficulty: 'Avançado',
    investment: 'Baixo',
    description: 'Fazer as empresas locais aparecerem em primeiro lugar no Google Maps.',
    steps: ['Domine o Google Business Profile.', 'Aprenda otimização on-page.', 'Faça buscas de palavras-chave locais.'],
    tips: ['Mostre o aumento de chamadas telefónicas ao cliente.', 'Foco em reviews positivos.'],
    howToStart: 'Otimize o Google Maps de uma padaria local gratuitamente.',
    howToScale: 'Venda pacotes de manutenção mensal de conteúdo.'
  },
  {
    id: '39',
    title: 'Revenda de Dominios de Internet',
    category: 'Investimento/Digital',
    difficulty: 'Médio',
    investment: 'Baixo',
    description: 'Comprar nomes de domínios promissores e revendê-los.',
    steps: ['Pesquise tendências de novos negócios.', 'Compre domínios curtos e .com / .pt.', 'Anuncie em marketplaces de domínios.'],
    tips: ['É um jogo de paciência.', 'Evite nomes de marcas registadas (copyright).'],
    howToStart: 'Invista 50€ em 5 domínios criativos.',
    howToScale: 'Crie um portfólio de centenas de domínios premium.'
  },
  {
    id: '40',
    title: 'Criação de Filtros para Instagram/TikTok',
    category: 'Tecnologia/Design',
    difficulty: 'Avançado',
    investment: 'Baixo',
    description: 'Desenvolver filtros de AR (Realidade Aumentada) para marcas e criadores.',
    steps: ['Aprenda Spark AR (Meta) ou Effect House (TikTok).', 'Crie filtros que incentivem a interação.', 'Venda para campanhas de lançamento.'],
    tips: ['Filtros estéticos de rosto vendem muito.', 'Use gamificação.'],
    howToStart: 'Crie um filtro gratuito e veja as métricas de uso.',
    howToScale: 'Torne-se uma agência especializada em AR Marketing.'
  },
  {
    id: '41',
    title: 'Venda de Kits de Coquetéis em Casa',
    category: 'Alimentação',
    difficulty: 'Básico',
    investment: 'Médio',
    description: 'Caixas com ingredientes e receitas para fazer cocktails profissionais.',
    steps: ['Crie receitas equilibradas.', 'Pense na conservação dos ingredientes frescos.', 'Venda com instruções em vídeo QR code.'],
    tips: ['A apresentação deve ser de bar de luxo.', 'Ótimo para presentes corporativos.'],
    howToStart: 'Crie um kit para o fim de semana e venda a amigos.',
    howToScale: 'Assinatura mensal de "Experiência Mixology".'
  },
  {
    id: '42',
    title: 'Personal Shopper de Luxo',
    category: 'Serviços/Moda',
    difficulty: 'Básico',
    investment: 'Baixo',
    description: 'Comprar itens exclusivos para clientes com alto poder de compra.',
    steps: ['Construa uma rede nos bairros de luxo.', 'Conheça as coleções antes do lançamento.', 'Ofereça acesso a itens limitados.'],
    tips: ['A discrição é fundamental.', 'Crie uma base de clientes fiel.'],
    howToStart: 'Mostre o seu conhecimento de marcas num blog ou Instagram.',
    howToScale: 'Expanda para serviços de conciergerie completa.'
  },
  {
    id: '43',
    title: 'Consultoria de Branding para Novos Negócios',
    category: 'Design/Marketing',
    difficulty: 'Médio',
    investment: 'Baixo',
    description: 'Definir nome, logo e posicionamento de novas marcas.',
    steps: ['Faça um workshop de descoberta de marca.', 'Crie o guia de estilo visual.', 'Defina o tom de voz.'],
    tips: ['Branding é sobre como a marca se sente, não apenas o logo.', 'Entregue um manual de marca completo.'],
    howToStart: 'Ajude um projeto social com o branding corporativo.',
    howToScale: 'Combine com serviços de design de embalagem.'
  },
  {
    id: '44',
    title: 'Serviço de Digitalização de Documentos/Memórias',
    category: 'Serviços',
    difficulty: 'Básico',
    investment: 'Médio',
    description: 'Passar fotos antigas e documentos físicos para formato digital organizado.',
    steps: ['Compre um scanner de alta resolução.', 'Crie uma estrutura de nuvem segura.', 'Ofereça restauro digital básico.'],
    tips: ['Valor sentimental é o grande argumento de venda.', 'Organização impecável.'],
    howToStart: 'Digitalize o álbum de família dos seus pais.',
    howToScale: 'Atenda empresas com grandes arquivos mortos.'
  },
  {
    id: '45',
    title: 'Venda de Infografias e Data Viz para Blogs',
    category: 'Design',
    difficulty: 'Médio',
    investment: 'Baixo',
    description: 'Transformar dados complexos em imagens fáceis de partilhar.',
    steps: ['Use ferramentas como Canva ou Piktochart.', 'Pesquise dados estatísticos interessantes.', 'Contacte blogs do nicho correspondente.'],
    tips: ['Fomente a viralidade através do design.', 'Cite sempre as fontes.'],
    howToStart: 'Crie uma infografia sobre um tema atual e partilhe no Twitter.',
    howToScale: 'Venda pacotes de conteúdo visual para agências de SEO.'
  },
  {
    id: '46',
    title: 'Agência de Atendimento ao Cliente via WhatsApp',
    category: 'Serviços',
    difficulty: 'Básico',
    investment: 'Baixo',
    description: 'Terceirizar o suporte de pequenas lojas online portuguesas.',
    steps: ['Use sistemas multicanal (ex: Blip, Octadesk).', 'Treine respostas rápidas e cordiais.', 'Cobre por volume de tickets.'],
    tips: ['A velocidade de resposta fecha vendas.', 'Personalize as mensagens.'],
    howToStart: 'Ofereça gerir o WhatsApp de uma loja local por uma tarde.',
    howToScale: 'Crie uma central de atendimento remota.'
  },
  {
    id: '47',
    title: 'Serviço de Tradução e Localização',
    category: 'Serviços',
    difficulty: 'Médio',
    investment: 'Baixo',
    description: 'Traduzir sites e apps adaptando-os culturalmente ao mercado.',
    steps: ['Domine dois idiomas com perfeição.', 'Entenda as gírias e costumes locais.', 'Promova em marketplaces de freelancers internacionais.'],
    tips: ['Tradução literal não é localização.', 'Foque em SEO internacional.'],
    howToStart: 'Traduza o site de uma pequena app estrangeira e envie ao dono.',
    howToScale: 'Monte uma agência de tradução técnica.'
  },
  {
    id: '48',
    title: 'Criação de Newsletters Pagas',
    category: 'Educação/Escrita',
    difficulty: 'Médio',
    investment: 'Baixo',
    description: 'Enviar conteúdo exclusivo e valioso via e-mail semanalmente.',
    steps: ['Escolha uma plataforma como Substack ou Beehiiv.', 'Crie conteúdo que economize tempo ou dinheiro ao leitor.', 'Construa uma audiência orgânica.'],
    tips: ['Consistência é tudo.', 'A primeira edição deve ser bombástica.'],
    howToStart: 'Comece com uma newsletter gratuita para criar base.',
    howToScale: 'Venda patrocínios dentro da newsletter.'
  },
  {
    id: '49',
    title: 'Consultoria de RH para Startups',
    category: 'Serviços',
    difficulty: 'Avançado',
    investment: 'Baixo',
    description: 'Ajudar a recrutar e manter talentos em empresas em crescimento.',
    steps: ['Efetue triagem de currículos.', 'Realize entrevistas técnicas básicas.', 'Crie planos de carreira.'],
    tips: ['Entenda a cultura da empresa antes de contratar.', 'Use testes psicotécnicos digitais.'],
    howToStart: 'Faça um recrutamento pontual para uma startup conhecida.',
    howToScale: 'Torne-se o Head de RH fracionado de várias empresas.'
  },
  {
    id: '50',
    title: 'Agência de Criação de Vídeos com IA',
    category: 'Tecnologia/Marketing',
    difficulty: 'Médio',
    investment: 'Baixo',
    description: 'Produzir vídeos publicitários usando ferramentas como HeyGen, Runway ou Sora.',
    steps: ['Domine as ferramentas de geração de vídeo por IA.', 'Crie roteiros estratégicos.', 'Edite os clips gerados para dar fluidez.'],
    tips: ['A IA economiza 90% do tempo de produção.', 'O roteiro humano é o diferencial.'],
    howToStart: 'Crie um anúncio em vídeo para um produto local e mostre ao dono.',
    howToScale: 'Venda pacotes de anúncios para e-commerce em escala.'
  }
];
