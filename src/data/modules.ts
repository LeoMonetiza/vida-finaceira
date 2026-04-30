import { Module, Theme, Quiz } from '../types';

const generateQuizzes = (themeId: string, themeTitle: string, count: number): Quiz[] => {
  const baseQuestions = [
    { q: "Qual o conceito fundamental de", correct: i => `É o pilar principal para entender ${themeTitle}.`, wrong: ["Uma ideia sem importância", "Algo secundário no mercado", "Um conceito ultrapassado"] },
    { q: "Sobre a aplicação prática de", correct: i => `Consiste em aplicar ${themeTitle} no dia a dia para obter resultados.`, wrong: ["Não tem utilidade prática", "Apenas serve para teoria física", "Depende exclusivamente da sorte"] },
    { q: "Um erro comum em", correct: i => `Ignorar a lógica básica por trás de ${themeTitle}.`, wrong: ["Estudar excessivamente o tema", "Pedir conselhos a especialistas", "Seguir um plano estruturado"] },
    { q: "O benefício principal de", correct: i => `Aumentar a clareza e segurança ao lidar com ${themeTitle}.`, wrong: ["Garantir riqueza imediata", "Eliminar todas as despesas", "Nenhum benefício tangível"] },
    { q: "Como podemos definir", correct: i => `Uma abordagem estratégica focada em ${themeTitle}.`, wrong: ["Um conjunto de palpites", "Uma regra imutável e rígida", "Um fenómeno aleatório"] },
    { q: "No contexto de", correct: i => `Representa uma ferramenta de empoderamento sobre ${themeTitle}.`, wrong: ["É um obstáculo ao progresso", "Apenas importa para grandes empresas", "Não afeta a vida pessoal"] },
    { q: "A melhor estratégia para", correct: i => `Manter a consistência e o estudo contínuo de ${themeTitle}.`, wrong: ["Arriscar tudo numa só jogada", "Esperar por um milagre", "Desistir ao primeiro erro"] },
    { q: "O que evitar em", correct: i => `Tomar decisões baseadas apenas na emoção e não em ${themeTitle}.`, wrong: ["Usar dados e factos", "Planear a longo prazo", "Aprender com os erros"] },
    { q: "Como medir o sucesso em", correct: i => `Através da estabilidade e crescimento gerados por ${themeTitle}.`, wrong: ["Pelo número de compras feitas", "Pela opinião de estranhos", "Pela rapidez do gasto"] },
    { q: "O próximo passo após entender", correct: i => `Implementar gradualmente as lições de ${themeTitle} na rotina.`, wrong: ["Esquecer tudo e seguir em frente", "Tentar tudo de uma vez sem plano", "Guardar o conhecimento sem usar"] }
  ];

  return Array.from({ length: count }, (_, i) => {
    const base = baseQuestions[i % baseQuestions.length];
    const options = [
      { id: `opt-${themeId}-${i}-c`, text: base.correct(i), isCorrect: true },
      ...base.wrong.map((w, idx) => ({ id: `opt-${themeId}-${i}-w-${idx}`, text: w, isCorrect: false }))
    ];

    // Embaralha as opções
    const shuffledOptions = options.sort(() => Math.random() - 0.5);

    return {
      id: `quiz-${themeId}-${i}`,
      question: `${base.q} ${themeTitle.toLowerCase()}?`,
      explanation: `Esta questão aborda um ponto chave do tema ${themeTitle}. A resposta correta reflete a melhor prática financeira discutida no módulo: ${base.correct(i)}`,
      options: shuffledOptions
    };
  });
};

const createTheme = (id: string, title: string): Theme => {
  const intro = `${title} representa um dos pilares fundamentais da inteligência financeira moderna. No mundo dinâmico de hoje, compreender profundamente este conceito não é apenas uma vantagem, mas uma necessidade para quem procura segurança e prosperidade a longo prazo. Este tema aborda como a nossa relação com o valor e os recursos molda o nosso futuro pessoal e profissional.`;
  
  const development1 = `Ao explorarmos ${title.toLowerCase()}, percebemos que existe uma ciência por trás das decisões que tomamos diariamente. Muitas vezes, somos guiados por impulsos ou tradições familiares que já não se aplicam à economia atual. Por isso, estudar este tópico permite-nos identificar padrões de comportamento que podem estar a sabotar o nosso crescimento financeiro sem que percebamos.`;
  
  const development2 = `Existem exemplos práticos que demonstram a importância de dominar ${title.toLowerCase()}. Imagina a diferença entre alguém que gere os seus recursos baseando-se apenas na intuição e alguém que utiliza ferramentas de análise estratégica. O segundo grupo tende a ter uma taxa de sucesso significativamente maior, conseguindo não apenas sobreviver a crises, mas aproveitar as oportunidades que estas geram.`;
  
  const explanation = `A explicação técnica para este fenómeno assenta em princípios económicos e psicológicos. Quando entendemos a lógica por trás de ${title.toLowerCase()}, passamos a ver o dinheiro e os ativos como ferramentas de liberdade, e não como fontes de stress. É essencial integrar este conhecimento na tua rotina para que a gestão financeira se torne um hábito natural e eficiente.`;
  
  const conclusion = `Em suma, dominar ${title} é o primeiro passo para uma vida de abundância. Este módulo foi desenhado para te dar não só a teoria, mas a confiança necessária para agir. Continua a praticar, faz os exercícios e revisita este conteúdo sempre que tiveres dúvidas, pois a repetição é a mãe da aprendizagem no que toca ao mundo das finanças.`;

  return {
    id,
    title,
    content: `${intro}\n\n${development1}\n\n${development2}\n\n${explanation}\n\n${conclusion}`,
    story: {
      id: `story-${id}`,
      title: `O Desafio Real: ${title}`,
      character: { name: 'Alex', role: 'Aprendiz', avatar: '🙋‍♂️' },
      context: `Alex deparou-se com uma situação inesperada onde teve de aplicar os conceitos de ${title.toLowerCase()}. O seu objetivo é tomar a decisão que traga mais retorno e segurança a longo prazo.`,
      choices: [
            { id: `c-${id}-1`, text: 'Tomar uma decisão rápida baseada na emoção', consequence: 'A satisfação foi momentânea, mas o Alex percebeu que perdeu uma grande oportunidade de crescimento por falta de análise.', points: 10, outcome: 'negative' },
            { id: `c-${id}-2`, text: 'Analisar os dados e esperar pelo momento certo', consequence: 'Graças à paciência e ao estudo deste tema, Alex conseguiu um resultado extraordinário que mudou a sua trajetória.', points: 50, outcome: 'positive' }
      ]
    },
    quizzes: generateQuizzes(id, title, 10)
  };
};

const basicTitles = [
  "O que é dinheiro", "Para que serve o dinheiro", "Como o dinheiro circula", "Trabalho e rendimento", "O que é salário", 
  "Ganhar vs Manter dinheiro", "O valor do dinheiro", "Economia pessoal", "Mentalidade financeira", "Como pensar sobre dinheiro",
  "O que são gastos", "Gastos essenciais", "Gastos supérfluos", "Necessidades vs desejos", "Compras por impulso",
  "Como controlar gastos", "Erros comuns ao gastar", "Consumo consciente", "Como evitar desperdício", "Valor vs preço",
  "O que é poupança", "Por que poupar", "Hábito de poupança", "Objetivos de poupança", "Reserva básica",
  "Como guardar corretamente", "Erros ao poupar", "Disciplina financeira", "Pequenas economias", "Primeira meta financeira",
  "Orçamento pessoal", "Orçamento simples", "Regra 50/30/20", "Entradas e saídas", "Planeamento mensal",
  "Erros no orçamento", "Organização familiar", "Evitar dívidas básicas", "Prioridade de gastos", "Disciplina diária",
  "Mentalidade rica vs pobre", "Hábitos saudáveis", "Educação financeira básica", "Evitar erros", "Passos para investir",
  "Introdução ao empreendedorismo", "Decisões com dinheiro", "Segurança básica", "Independência (intro)", "Revisão Geral"
];

const mediumTitles = [
  "Revisão do básico", "Crescer financeiramente", "Poupar vs Investir", "O que é investimento", "Risco financeiro",
  "Retorno financeiro", "Como o dinheiro cresce", "Mentalidade de crescimento", "Segurança vs Oportunidade", "Erros de iniciantes",
  "Juros simples", "Juros compostos", "Como o banco funciona", "Contas bancárias", "Crédito bancário",
  "Cartão de crédito", "Score de crédito", "Dívida boa vs ruim", "Evitar dívidas perigosas", "Empréstimos",
  "Intro aos investimentos", "Tipos de investimento", "Ações (básico)", "Obrigações", "Fundos de investimento",
  "Criptomoedas (intro)", "Investir com pouco", "Erros ao investir", "Estratégias simples", "Como começar",
  "Renda ativa vs passiva", "Múltiplas fontes de renda", "Freelancing", "Negócios pequenos", "Empreendedorismo básico",
  "Ideias de negócio", "Começar negócio simples", "Marketing básico", "Vendas e clientes", "Ganhar dinheiro online",
  "Reserva de emergência", "Gestão mensal", "Redução de despesas", "Planeamento médio", "Crescimento de riqueza",
  "Erros intermédios", "Como reinvestir", "Estabilidade financeira", "Independência intermédia", "Revisão Médio",
  "Pensamento estratégico financeiro", "Identificar grandes oportunidades", "Decisão sob pressão", "Pensar como profissional", "Gestão de risco inteligente",
  "Evitar perdas grandes", "Análise de negócios", "Avaliar ideia milionária", "Mentalidade de expansão", "Visão de longo prazo",
  "Gestão de grandes rendas", "Múltiplas fontes de dinheiro", "Estrutura avançada", "Património vs Fluxo de caixa", "Reinvestimento inteligente",
  "Como proteger dinheiro", "Gestão de capital", "Planeamento avançado", "Controlo de despesas e lucros", "Sistemas financeiros pessoais",
  "Criar empresa formal", "Estrutura de uma empresa", "Escalar negócios pequenos", "Vendas automáticas", "Gestão de equipa",
  "Liderança em negócios", "Delegação de tarefas", "Expansão de mercado", "Internacionalização", "Negócio em marca",
  "Economia global", "Negócios internacionais", "Dinheiro com internet global", "Exportação e importação", "Economia digital",
  "Cripto e futuro financeiro", "Novas tecnologias", "IA e dinheiro", "Tendências de riqueza", "Adaptar ao mercado global",
  "Liberdade financeira real", "Parar de depender de salário", "Renda passiva consistente", "Múltiplas fontes fortes", "Viver de investimentos",
  "Independência total", "Gestão de riqueza avançada", "Manter riqueza a longo prazo", "Legado familiar", "Plano completo de vida"
];

const advancedTitles = [
  // Parte 11 — Psicologia do dinheiro e comportamento (101–110)
  "Psicologia do dinheiro", "Emoções e decisões financeiras", "Medo de perder dinheiro", "Ganância e decisões ruins", "Disciplina emocional financeira",
  "Como evitar decisões impulsivas", "Hábitos de pessoas ricas", "Como mudar mentalidade financeira", "Autocontrolo financeiro avançado", "Hábitos milionários",
  // Parte 12 — Investimento profundo e portfólio (111–120)
  "Construção de portfólio", "Equilibrar risco e retorno", "Investimentos de longo prazo", "Investimentos de curto prazo", "Análise de mercado básica",
  "Leitura de tendências", "Rebalanceamento de ativos", "Erros avançados em investimento", "Proteção de capital", "Crescimento sustentável",
  // Parte 13 — Negócios digitais avançados (121–130)
  "Negócios digitais escaláveis", "Criar produtos digitais", "Cursos online como negócio", "E-commerce avançado", "Marketing digital estratégico",
  "Funis de venda", "Publicidade paga (básico)", "Construção de audiência", "Monetização de conteúdo", "Automação de vendas",
  // Parte 14 — Economia global e futuro do dinheiro (131–140)
  "Economia global", "Ciclos económicos", "Inflação avançada", "Crises mundiais", "Proteger dinheiro em crises",
  "Moedas digitais", "Fintechs", "IA e economia", "Mudanças no trabalho", "Futuro das profissões",
  // Parte 15 — Liberdade financeira total e legado (141–150)
  "Liberdade financeira real", "Viver sem salário", "Renda passiva sólida", "Independência total de tempo", "Riqueza sustentável",
  "Gestão de património avançado", "Riqueza geracional", "Legado familiar", "Plano de vida ideal", "Caminho da Liberdade"
];

export const modules: Module[] = [
  {
    id: 'basico',
    title: 'Módulo Básico',
    difficulty: 'Básico',
    unlocked: true,
    themes: basicTitles.map((t, i) => createTheme(`b${i+1}`, t))
  },
  {
    id: 'medio',
    title: 'Módulo Médio',
    difficulty: 'Médio',
    unlocked: false,
    themes: mediumTitles.map((t, i) => createTheme(`m${i+1}`, t))
  },
  {
    id: 'avancado',
    title: 'Módulo Avançado',
    difficulty: 'Avançado',
    unlocked: false,
    themes: advancedTitles.map((t, i) => createTheme(`a${i+1}`, t))
  }
];
