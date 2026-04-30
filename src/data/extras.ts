import { DictionaryEntry, Book } from '../types';

export const dictionary: DictionaryEntry[] = [
  {
    term: 'Inflação',
    explanation: 'Aumento generalizado dos preços e diminuição do poder de compra.',
    example: 'Se um café custava 0.50€ e agora custa 0.70€, houve inflação.',
    application: 'Ajuda-te a perceber por que deves investir para não perder dinheiro.'
  },
  {
    term: 'Ativo',
    explanation: 'Qualquer coisa que coloque dinheiro no teu bolso.',
    example: 'Uma casa alugada, ações que pagam dividendos ou um negócio.',
    application: 'O foco deve ser acumular ativos para alcançar a liberdade.'
  },
  {
    term: 'Passivo',
    explanation: 'Qualquer coisa que tire dinheiro do teu bolso.',
    example: 'O teu carro pessoal (manutenção, seguro) ou o crédito da casa.',
    application: 'Deves controlar os passivos para sobrar mais dinheiro para investir.'
  },
  {
    term: 'Juros Compostos',
    explanation: 'Juros sobre juros. O rendimento é calculado sobre o capital inicial mais os juros acumulados.',
    example: 'Investes 1000€ a 10% ao ano. No 2º ano, os 10% incidem sobre 1100€.',
    application: 'A maior ferramenta para enriquecer a longo prazo.'
  },
  {
    term: 'Liquidez',
    explanation: 'A facilidade e rapidez com que um ativo pode ser convertido em dinheiro.',
    example: 'Dinheiro na conta ordem tem alta liquidez; um imóvel tem baixa liquidez.',
    application: 'Importante para a tua reserva de emergência.'
  },
  {
    term: 'SELIC / Taxa Central',
    explanation: 'A taxa básica de juros da economia definida pelo Banco Central.',
    example: 'Quando a taxa sobe, o crédito fica mais caro e os investimentos em renda fixa rendem mais.',
    application: 'Influencia o retorno dos teus investimentos seguros.'
  },
  {
    term: 'Diversificação',
    explanation: 'Estratégia de distribuir os teus investimentos por diferentes classes de ativos.',
    example: 'Não colocar todo o dinheiro apenas em ações de uma única empresa.',
    application: 'Reduz o risco da tua carteira de investimentos.'
  },
  {
    term: 'Renda Fixa',
    explanation: 'Investimentos onde as regras de rendimento são definidas no momento da aplicação.',
    example: 'Certificados de Depósito Bancário (CDB) ou Títulos do Tesouro.',
    application: 'Ideal para reserva de emergência e perfis conservadores.'
  },
  {
    term: 'Renda Variável',
    explanation: 'Investimentos onde o rendimento não é garantido e o capital pode oscilar.',
    example: 'Ações de empresas, Fundos Imobiliários ou Criptomoedas.',
    application: 'Potencial de maior retorno a longo prazo, com maior risco.'
  },
  {
    term: 'Dividendos',
    explanation: 'Parte do lucro de uma empresa que é distribuída aos seus acionistas.',
    example: 'Receber 0,50€ por cada ação que possuís de uma empresa lucrativa.',
    application: 'Uma das formas mais comuns de gerar renda passiva.'
  },
  {
    term: 'EBITDA',
    explanation: 'Lucros antes de juros, impostos, depreciação e amortização.',
    example: 'Uma empresa com EBITDA positivo indica que a sua operação é lucrativa.',
    application: 'Usado para avaliar a saúde operacional de uma empresa.'
  },
  {
    term: 'ROE (Return on Equity)',
    explanation: 'Retorno sobre o património líquido. Mede o quanto uma empresa lucra com o dinheiro dos acionistas.',
    example: 'Um ROE de 20% significa que a empresa gera 0,20€ de lucro para cada 1€ investido.',
    application: 'Ajuda a identificar empresas eficientes.'
  },
  {
    term: 'IPCA',
    explanation: 'Índice Nacional de Preços ao Consumidor Amplo. A inflação oficial (Brasil).',
    example: 'Se o IPCA sobe, o custo de vida aumenta.',
    application: 'Importante para escolher investimentos que protegem contra a inflação.'
  },
  {
    term: 'Fundo Imobiliário (FII)',
    explanation: 'Comunhão de investidores que aplicam em grandes imóveis ou títulos do setor.',
    example: 'Ser dono de uma parte de um shopping center e receber rendas mensais.',
    application: 'Excelente forma de gerar renda passiva mensal.'
  },
  {
    term: 'Home Broker',
    explanation: 'Plataforma digital para comprar e vender ações na bolsa.',
    example: 'A aplicação da tua corretora onde fazes as tuas ordens de compra.',
    application: 'A tua ferramenta de trabalho no mercado financeiro.'
  },
  {
    term: 'Bears vs Bulls',
    explanation: 'Termos usados para descrever tendências de mercado. O Urso (Bear) puxa para baixo, o Touro (Bull) empurra para cima.',
    example: 'Um "Bull Market" é um período de forte subida nas ações.',
    application: 'Entender a psicologia do mercado ajuda a manter a calma.'
  }
];

export const library: Book[] = [
  {
    title: 'Pai Rico, Pai Pobre',
    author: 'Robert Kiyosaki',
    summary: 'O livro nº 1 de finanças pessoais de todos os tempos. Kiyosaki destrói o mito de que precisas de um salário alto para ser rico e explica a diferença crucial entre ativos e passivos. É uma leitura obrigatória para quem deseja mudar a sua mentalidade sobre o dinheiro e começar a construir riqueza real.',
    lessons: ['Ativos põem dinheiro no teu bolso, passivos tiram', 'Trabalha para aprender, não para ganhar', 'A tua mente é o teu maior ativo'],
  },
  {
    title: 'O Homem Mais Rico da Babilónia',
    author: 'George S. Clason',
    summary: 'Um clássico intemporal baseado em parábolas da antiga Babilónia. Este livro ensina os princípios básicos da acumulação de riqueza: poupar 10% de tudo o que ganhas, controlar os teus gastos e fazer o teu ouro multiplicar-se. É a base perfeita para quem está a começar a sua jornada.',
    lessons: ['Paga a ti mesmo primeiro', 'Cuidado com os conselhos de quem não sabe', 'Aumenta a tua capacidade de ganhar'],
  },
  {
    title: 'Os Segredos da Mente Milionária',
    author: 'T. Harv Eker',
    summary: 'Eker revela como o teu "modelo de dinheiro" determina o teu sucesso financeiro. Se o teu subconsciente não estiver programado para a riqueza, nada do que aprendas ou saibas fará grande diferença. Aprende a pensar como os ricos para te tornares um deles.',
    lessons: ['O teu rendimento cresce na medida em que tu cresces', 'Pessoas ricas admiram outros ricos', 'Foca-te no património líquido, não apenas no salário'],
  },
  {
    title: 'A Psicologia do Dinheiro',
    author: 'Morgan Housel',
    summary: 'Ter sucesso com o dinheiro não tem a ver com o quão inteligente és, mas sim com o teu comportamento. Housel partilha 19 histórias curtas que exploram as formas estranhas como as pessoas pensam sobre o dinheiro e ensina-te a ter uma melhor relação com as tuas finanças. Essencial para entender o fator humano nos investimentos.',
    lessons: ['O tempo é o segredo da riqueza', 'Saber quando tens o "suficiente"', 'A sorte e o risco são irmãos'],
  },
  {
    title: 'O Investidor Inteligente',
    author: 'Benjamin Graham',
    summary: 'Considerado por Warren Buffett como o melhor livro sobre investimentos já escrito. Graham ensina a filosofia do "investimento em valor", que protege os investidores de erros substanciais e ensina a desenvolver estratégias de longo prazo. Se queres levar os teus investimentos a sério e evitar as armadilhas emocionais do mercado, este livro é o teu guia definitivo para a rentabilidade segura.',
    lessons: ['Investir não é especular', 'Margem de segurança é fundamental', 'Controla as tuas emoções perante o mercado'],
  },
  {
    title: 'Essencialismo',
    author: 'Greg McKeown',
    summary: 'Sentes-te sobrecarregado e pouco produtivo? O Essencialismo não é sobre fazer mais, é sobre fazer as coisas certas. Greg McKeown ensina-te a eliminar o que não é essencial para que possas dar o teu contributo máximo nas áreas que realmente importam. Aplica este princípio às tuas finanças e foca o teu dinheiro apenas no que te traz valor real. Uma leitura que liberta o teu tempo e o teu capital.',
    lessons: ['Diz não ao que não é essencial', 'Foca-te no que realmente importa', 'Menos é melhor'],
  },
  {
    title: 'Hábitos Atómicos',
    author: 'James Clear',
    summary: 'Pequenas mudanças, resultados impressionantes. James Clear explica como podes transformar a tua vida através de melhorias de 1% a cada dia. Aprender a automatizar bons hábitos financeiros é o que separa quem luta com o dinheiro de quem constrói impérios. Este livro dá-te o método exato para mudares o teu comportamento permanentemente. Não esperes por uma grande mudança; começa pequeno com este guia.',
    lessons: ['Pequenas mudanças geram grandes resultados', 'Foca-te no sistema, não no objetivo', 'Torna o hábito óbvio e fácil'],
  },
  {
    title: 'O Investidor de Bom Senso',
    author: 'John C. Bogle',
    summary: 'A forma mais simples e eficiente de investir no mercado de ações.',
    lessons: ['Foca-te em fundos de índice (ETFs)', 'Mantém os custos baixos', 'O tempo é teu amigo, o impulso é teu inimigo'],
  },
  {
    title: 'Trabalho 4 Horas por Semana',
    author: 'Timothy Ferriss',
    summary: 'Como fugir do horário 9-18 e viver em qualquer lugar.',
    lessons: ['A regra 80/20 (Pareto)', 'Elimina o que não é produtivo', 'Automatiza o teu rendimento'],
  },
  {
    title: 'O Homem Mais Rico que Já Existiu',
    author: 'Steve Scott',
    summary: 'As estratégias de Salomão para a riqueza e a felicidade.',
    lessons: ['A diligência é o caminho para a autoridade', 'Evita a arrogância no sucesso', 'Procura sabedoria antes do ouro'],
  },
  {
    title: 'Os Axiomas de Zurique',
    author: 'Max Gunther',
    summary: 'As regras dos banqueiros suíços para especulação e risco.',
    lessons: ['Sobre o risco: se não estás preocupado, não estás a arriscar bastante', 'Sobre a ganância: realiza sempre o lucro cedo demais', 'Sobre a esperança: quando o barco começar a afundar, não confesses, salta'],
  },
  {
    title: 'Rápido e Devagar',
    author: 'Daniel Kahneman',
    summary: 'Como o cérebro decide e as armadilhas cognitivas no dinheiro.',
    lessons: ['Sistema 1 vs Sistema 2', 'Aversão à perda domina as nossas decisões', 'Cuidado com o excesso de confiança'],
  },
  {
    title: 'Pense e Enriqueça',
    author: 'Napoleon Hill',
    summary: 'A bíblia do sucesso que já ajudou milhões de pessoas a acumular fortunas. Napoleon Hill passou mais de 20 anos a estudar os homens mais ricos do seu tempo para descobrir a fórmula mestre do sucesso. Se queres aprender como a mente pode transformar pensamentos em riqueza física, este é o teu ponto de partida.',
    lessons: ['O desejo é o ponto de partida', 'Fé inabalável no objetivo', 'Persistência no plano'],
  },
  {
    title: 'Do Zero a Um',
    author: 'Peter Thiel',
    summary: 'Sobre startups e como construir o futuro.',
    lessons: ['Cria algo novo em vez de copiar', 'Monopólio é o objetivo', 'Equipa certa é fundamental'],
  },
  {
    title: 'A Startup Enxuta',
    author: 'Eric Ries',
    summary: 'Como os empreendedores de hoje usam a inovação contínua para criar empresas de sucesso.',
    lessons: ['Construir-Medir-Aprender', 'Produto Mínimo Viável (MVP)', 'Pivotar ou Perseverar'],
  },
  {
    title: 'Trabalho Focado',
    author: 'Cal Newport',
    summary: 'Num mundo de distrações constantes, a capacidade de focar profundamente é um superpoder. Cal Newport ensina como produzir trabalho de alta qualidade em menos tempo, permitindo-te crescer na carreira e ganhar mais dinheiro sem esgotares as tuas energias. Queres ser mais produtivo? Este livro é para ti.',
    lessons: ['Trabalho profundo vs Trabalho superficial', 'Abraça o tédio', 'Sai das redes sociais'],
  },
  {
    title: 'A Única Coisa',
    author: 'Gary Keller',
    summary: 'O foco num único objetivo para resultados extraordinários.',
    lessons: ['O efeito dominó', 'A pergunta de foco', 'Vive com prioridade'],
  },
  {
    title: 'Misbehaving',
    author: 'Richard Thaler',
    summary: 'A criação da economia comportamental.',
    lessons: ['Humanos não são "Econs"', 'Contabilidade mental', 'Nudges (empurrões)'],
  },
  {
    title: 'I Will Teach You to Be Rich',
    author: 'Ramit Sethi',
    summary: 'Um programa de 6 semanas que funciona.',
    lessons: ['Automatiza as tuas finanças', 'Gasto consciente', 'Invista cedo e com baixo custo'],
  },
  {
    title: 'Quem Pensa Enriquece',
    author: 'Napoleon Hill',
    summary: 'A filosofia da conquista.',
    lessons: ['Definição de propósito', 'Mastermind (equipa de apoio)', 'Autossugestão'],
  },
  {
    title: 'O Caminho para a Liberdade Financeira',
    author: 'Bodo Schäfer',
    summary: 'Bodo Schäfer mostra que tornares-te milionário em sete anos não é um sonho, mas uma possibilidade real baseada em disciplina e estratégia. Este livro dá-te as ferramentas práticas para mudares a tua vida financeira de uma vez por todas. Estás disposto a seguir o caminho? A tua liberdade espera por ti.',
    lessons: ['Responsabilidade total', 'Técnica de poupança agressiva', 'Criação de rendas extras'],
  },
  {
    title: 'Antifrágil',
    author: 'Nassim Taleb',
    summary: 'Coisas que beneficiam com o caos.',
    lessons: ['Beneficiar com a volatilidade', 'Estratégia Barbell', 'Via Negativa'],
  },
  {
    title: 'A Lógica do Cisne Negro',
    author: 'Nassim Taleb',
    summary: 'O impacto do altamente improvável.',
    lessons: ['Eventos raros mudam tudo', 'Não confiamos em especialistas', 'A preparação é melhor que a previsão'],
  },
  {
    title: 'Pequeno Manual de Estoicismo',
    author: 'Jonas Salzgeber',
    summary: 'Como o estoicismo pode ajudar na tua vida moderna.',
    lessons: ['Dicotomia do controlo', 'Viver de acordo com a natureza', 'Gestão emocional'],
  },
  {
    title: 'O Jeito Harvard de Ser Feliz',
    author: 'Shawn Achor',
    summary: 'Como a felicidade impulsiona o sucesso.',
    lessons: ['Felicidade é uma vantagem competitiva', 'Tetris cognitivo (focar no positivo)', 'Círculos de Zorro (pequenas vitórias)'],
  },
  {
    title: 'O Poder do Hábito',
    author: 'Charles Duhigg',
    summary: 'A chave para mudares as tuas finanças (e a tua vida) está nos teus hábitos. Duhigg explica a ciência por trás do comportamento humano e como podes reprogramar o teu cérebro para o sucesso. Substituir hábitos de gastos por hábitos de investimento é o segredo dos ricos. Começa a mudar hoje!',
    lessons: ['Deixa, Rotina, Recompensa', 'Hábitos mestres', 'Vontade de mudar'],
  },
  {
    title: 'Princípios',
    author: 'Ray Dalio',
    summary: 'Vida e Trabalho do fundador da Bridgewater.',
    lessons: ['Verdade radical e transparência radical', 'Processo de 5 passos para o sucesso', 'Dor + Reflexão = Progresso'],
  },
  {
    title: 'Dinheiro: Domine este Jogo',
    author: 'Tony Robbins',
    summary: '7 passos simples para a liberdade financeira.',
    lessons: ['Alocação de ativos é tudo', 'O poder dos juros compostos', 'Escolha de mentores'],
  },
  {
    title: 'A Meta',
    author: 'Eliyahu Goldratt',
    summary: 'Um processo de melhoria contínua.',
    lessons: ['Teoria das restrições', 'Identificação de gargalos', 'Ganho através do fluxo'],
  },
  {
    title: 'Empresas Feitas para Vencer',
    author: 'Jim Collins',
    summary: 'Por que algumas empresas dão o salto e outras não.',
    lessons: ['Liderança Nível 5', 'Conceito do Ouriço', 'Cultura de disciplina'],
  },
  {
    title: 'Comece pelo Porquê',
    author: 'Simon Sinek',
    summary: 'Como grandes líderes inspiram ação.',
    lessons: ['O Círculo Dourado', 'Propósito acima do lucro', 'Lealdade do cliente'],
  },
  {
    title: 'O Lado Difícil das Coisas Difíceis',
    author: 'Ben Horowitz',
    summary: 'Empreendedorismo na vida real.',
    lessons: ['Gestão em tempos de crise', 'Cultura empresarial', 'Decisões brutais'],
  },
  {
    title: 'Enganados pelo Acaso',
    author: 'Nassim Taleb',
    summary: 'A sorte disfarçada de habilidade.',
    lessons: ['Confusão entre sorte e competência', 'Sobrevivência do mais sortudo', 'Resiliência financeira'],
  },
  {
    title: 'Hooked (Engajado)',
    author: 'Nir Eyal',
    summary: 'Como construir produtos que viciam.',
    lessons: ['Modelo do Gancho', 'Investimento do utilizador', 'Gatilhos externos e internos'],
  },
  {
    title: 'Contágio',
    author: 'Jonah Berger',
    summary: 'Por que as coisas pegam.',
    lessons: ['Moeda social', 'Gatilhos mentais', 'Emoção e Valor prático'],
  },
  {
    title: 'Nunca Almoce Sozinho',
    author: 'Keith Ferrazzi',
    summary: 'Segredos do networking de sucesso.',
    lessons: ['Generosidade no networking', 'Manutenção de relações', 'Construção de marca pessoal'],
  },
  {
    title: 'Como Fazer Amigos e Influenciar Pessoas',
    author: 'Dale Carnegie',
    summary: 'O guia clássico das relações humanas.',
    lessons: ['Interesse genuíno nos outros', 'Saber ouvir', 'Elogio sincero'],
  },
  {
    title: 'O Almanaque de Naval Ravikant',
    author: 'Eric Jorgenson',
    summary: 'Um guia para a riqueza e felicidade.',
    lessons: ['Riqueza sem sorte', 'Juízo crítico é mais importante que esforço', 'Paz interior'],
  },
  {
    title: 'Ficar Rico por Acaso',
    author: 'Nicolas Darvas',
    summary: 'Como fiz 2 milhões na bolsa.',
    lessons: ['Sistema de caixas', 'Stop loss rigoroso', 'Ignorar o ruído do mercado'],
  },
  {
    title: 'O Investidor em Ações',
    author: 'Peter Lynch',
    summary: 'One Up on Wall Street.',
    lessons: ['Investe no que conheces', 'Deixa o lucro correr', 'Conhece os fundamentos'],
  },
  {
    title: 'Os 7 Hábitos das Pessoas Altamente Eficazes',
    author: 'Stephen Covey',
    summary: 'Transformação pessoal e profissional.',
    lessons: ['Seja proativo', 'Comece com o objetivo em mente', 'Ganhar/Ganhar'],
  },
  {
    title: 'A Arte da Guerra (para Executivos)',
    author: 'Sun Tzu',
    summary: 'Estratégia aplicada aos negócios.',
    lessons: ['Conhece o teu mercado', 'Vencer sem lutar', 'Flexibilidade'],
  },
  {
    title: 'A Bíblia de Vendas',
    author: 'Jeffrey Gitomer',
    summary: 'Recursos para vender mais.',
    lessons: ['A venda começa no "não"', 'Atitude positiva', 'Relacionamento gera venda'],
  },
  {
    title: 'Geração de Valor',
    author: 'Flavio Augusto',
    summary: 'Mentalidade fora da caixa.',
    lessons: ['Não tenha medo de empreender', 'Estude o sucesso', 'Execução supera ideias'],
  },
  {
    title: 'Me Poupe!',
    author: 'Nathalia Arcuri',
    summary: '10 passos para nunca mais faltar dinheiro.',
    lessons: ['Metas claras', 'Negociação constante', 'Investimento para iniciantes'],
  },
  {
    title: 'Casais Inteligentes Enriquecem Juntos',
    author: 'Gustavo Cerbasi',
    summary: 'Finanças para casais.',
    lessons: ['Planeamento conjunto', 'Sonhos partilhados', 'Diálogo honesto sobre dinheiro'],
  },
  {
    title: 'O Poder da Ação',
    author: 'Paulo Vieira',
    summary: 'Tem poder quem age.',
    lessons: ['Auto-responsabilidade', 'Visão de futuro', 'Foco na solução'],
  },
  {
    title: 'A Riqueza das Nações',
    author: 'Adam Smith',
    summary: 'A base da economia moderna.',
    lessons: ['A mão invisível', 'Divisão do trabalho', 'Livre mercado'],
  },
  {
    title: 'A Revolta de Atlas',
    author: 'Ayn Rand',
    summary: 'Filosofia do objetivismo e mérito.',
    lessons: ['O valor do criador', 'O perigo do coletivismo', 'A ética da realização'],
  },
  {
    title: 'O Futuro do Dinheiro',
    author: 'Rudolf Steiner',
    summary: 'Uma visão espiritual e social do capital.',
    lessons: ['Dinheiro de compra, empréstimo e doação', 'Circularidade', 'Fraternidade económica'],
  }
];
