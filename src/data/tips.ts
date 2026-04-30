export interface Tip {
  id: string;
  category: 'poupança' | 'investimento' | 'mentalidade' | 'carreira';
  title: string;
  description: string;
  impact: 'alto' | 'médio' | 'baixo';
}

export const tips: Tip[] = [
  // POUPANÇA
  {
    id: 't1',
    category: 'poupança',
    title: 'A Regra dos 50/30/20',
    description: 'Destina 50% do teu rendimento para necessidades, 30% para desejos e 20% para poupança ou dívidas.',
    impact: 'alto'
  },
  {
    id: 't4',
    category: 'poupança',
    title: 'Cuidado com os Gastos Formiga',
    description: 'Aquele café diário ou subscrição que não usas podem somar centenas de euros ao final do ano.',
    impact: 'médio'
  },
  {
    id: 't7',
    category: 'poupança',
    title: 'Fundo de Emergência',
    description: 'Garante que tens guardado o equivalente a 6 a 12 meses das tuas despesas fixas para imprevistos.',
    impact: 'alto'
  },
  {
    id: 't8',
    category: 'poupança',
    title: 'Desafio das 52 Semanas',
    description: 'Começa por poupar 1€ na primeira semana, 2€ na segunda, e assim sucessivamente. Ao final do ano terás 1.378€.',
    impact: 'médio'
  },
  {
    id: 't9',
    category: 'poupança',
    title: 'Espere 24 Horas',
    description: 'Antes de fazer uma compra por impulso superior a 50€, espera 24 horas. Na maioria das vezes, vais perceber que não precisas.',
    impact: 'alto'
  },
  {
    id: 't20',
    category: 'poupança',
    title: 'Lista de Compras Sempre',
    description: 'Ir ao supermercado sem lista é o caminho mais curto para comprar o que não precisas. Compra apenas o que está no papel.',
    impact: 'médio'
  },
  {
    id: 't21',
    category: 'poupança',
    title: 'Cancele Subscrições Fantasma',
    description: 'Revê o teu extrato bancário. Há algum serviço que pagas mas não usas há mais de 3 meses? Cancela hoje.',
    impact: 'alto'
  },
  {
    id: 't22',
    category: 'poupança',
    title: 'O Poder da Marmita',
    description: 'Comer fora todos os dias úteis pode custar mais de 200€/mês. Levar comida de casa poupa-te uma fortuna.',
    impact: 'alto'
  },
  {
    id: 't23',
    category: 'poupança',
    title: 'Evite o "Eu Mereço"',
    description: 'Cuidado com a recompensa imediata após um dia difícil. O teu "eu do futuro" merece estabilidade financeira.',
    impact: 'médio'
  },
  {
    id: 't24',
    category: 'poupança',
    title: 'Compare Preços Online',
    description: 'Usa ferramentas de comparação antes de qualquer compra tecnológica. A diferença pode ser superior a 20%.',
    impact: 'médio'
  },

  // INVESTIMENTO
  {
    id: 't3',
    category: 'investimento',
    title: 'Diversificação é a única borla',
    description: 'Nunca coloques todos os ovos no mesmo cesto. Distribui o teu capital por diferentes tipos de ativos.',
    impact: 'médio'
  },
  {
    id: 't6',
    category: 'investimento',
    title: 'O Poder dos Juros Compostos',
    description: 'Começa cedo. O tempo é o fator mais importante para multiplicar o teu dinheiro, mais do que a quantia inicial.',
    impact: 'alto'
  },
  {
    id: 't10',
    category: 'investimento',
    title: 'DCA (Dollar Cost Averaging)',
    description: 'Investe um valor fixo todos os meses, independentemente do preço do mercado. Isto reduz o risco de investir no topo.',
    impact: 'alto'
  },
  {
    id: 't11',
    category: 'investimento',
    title: 'Conhece o teu Perfil de Risco',
    description: 'Não invistas em algo que não te deixa dormir à noite. Define se és conservador, moderado ou agressivo.',
    impact: 'alto'
  },
  {
    id: 't12',
    category: 'investimento',
    title: 'ETFs como Base',
    description: 'Para a maioria dos investidores, fundos de índices (ETFs) são mais eficientes e baratos do que tentar escolher ações individuais.',
    impact: 'médio'
  },
  {
    id: 't25',
    category: 'investimento',
    title: 'Reinvista os Dividendos',
    description: 'Não gastes o lucro dos teos investimentos. Reinveste-os para acelerar o efeito de bola de neve dos juros compostos.',
    impact: 'alto'
  },
  {
    id: 't26',
    category: 'investimento',
    title: 'Cuidado com Dicas Quentes',
    description: 'Se alguém te diz que um investimento é "garantido" e "rápido", foge. O mercado não dá almoços grátis.',
    impact: 'alto'
  },
  {
    id: 't27',
    category: 'investimento',
    title: 'Mantenha a Liquidez Próxima',
    description: 'Tem sempre uma parte do teu capital em ativos que possas resgatar em 24h para oportunidades ou emergências.',
    impact: 'médio'
  },
  {
    id: 't28',
    category: 'investimento',
    title: 'Entenda os Custos e Taxas',
    description: 'Taxas de manutenção ou de gestão elevadas comem o teu lucro a longo prazo. Prefira corretoras low-cost.',
    impact: 'alto'
  },
  {
    id: 't29',
    category: 'investimento',
    title: 'Paciência é uma Virtude',
    description: 'O mercado financeiro é uma ferramenta para transferir dinheiro dos impacientes para os pacientes.',
    impact: 'alto'
  },

  // MENTALIDADE
  {
    id: 't2',
    category: 'mentalidade',
    title: 'Paga-te a ti primeiro',
    description: 'Assim que receberes o salário, retira logo a tua fatia de poupança antes de começares a pagar contas.',
    impact: 'alto'
  },
  {
    id: 't13',
    category: 'mentalidade',
    title: 'Foco no Longo Prazo',
    description: 'A riqueza não se constrói da noite para o dia. Mantém a disciplina e não te deixes levar pelo pânico do mercado.',
    impact: 'alto'
  },
  {
    id: 't14',
    category: 'mentalidade',
    title: 'Dívida Boa vs Dívida Má',
    description: 'A dívida boa ajuda-te a crescer (ex: crédito habitação), a dívida má consome o teu futuro (ex: crédito ao consumo).',
    impact: 'alto'
  },
  {
    id: 't15',
    category: 'mentalidade',
    title: 'Evita a Inflação de Estilo de Vida',
    description: 'À medida que o teu salário aumenta, não aumentes as tuas despesas na mesma proporção. Mantém o teu custo de vida.',
    impact: 'alto'
  },
  {
    id: 't30',
    category: 'mentalidade',
    title: 'Dinheiro é Liberdade, não Status',
    description: 'Usa o dinheiro para comprar o teu tempo e autonomia, não para impressionar pessoas de quem nem gostas.',
    impact: 'alto'
  },
  {
    id: 't31',
    category: 'mentalidade',
    title: 'Aprenda com os Erros',
    description: 'Todos cometem erros financeiros. O segredo é não repetir o mesmo erro e aprender a lição que ele custou.',
    impact: 'médio'
  },
  {
    id: 't32',
    category: 'mentalidade',
    title: 'Pense em Horas de Trabalho',
    description: 'Antes de comprar algo, calcula quantas horas tiveste de trabalhar para pagar aquele objeto. Vale o esforço?',
    impact: 'alto'
  },
  {
    id: 't33',
    category: 'mentalidade',
    title: 'Simplicidade é Chave',
    description: 'Quanto mais simples for o teu sistema financeiro, mais fácil será mantê-lo a longo prazo.',
    impact: 'médio'
  },
  {
    id: 't34',
    category: 'mentalidade',
    title: 'Riqueza é Invisível',
    description: 'O carro de luxo é dinheiro gasto. O extrato bancário recheado é riqueza acumulada. Não confundas os dois.',
    impact: 'alto'
  },

  // CARREIRA
  {
    id: 't5',
    category: 'carreira',
    title: 'Investe em Educação',
    description: 'O melhor investimento com o maior retorno é o conhecimento. Aprende uma nova competência que o mercado valorize.',
    impact: 'alto'
  },
  {
    id: 't16',
    category: 'carreira',
    title: 'Networking Financeiro',
    description: 'Rodeia-te de pessoas que tenham os mesmos objetivos financeiros. Aprendemos por osmose com quem já lá chegou.',
    impact: 'médio'
  },
  {
    id: 't17',
    category: 'carreira',
    title: 'Negocia o teu Valor',
    description: 'Não tenhas medo de pedir um aumento se o teu trabalho está a gerar valor acima da média. O teu salário é a tua maior ferramenta.',
    impact: 'alto'
  },
  {
    id: 't35',
    category: 'carreira',
    title: 'Crie Múltiplas Fontes de Renda',
    description: 'Nunca dependas apenas de um salário. Ter um plano B ou um projeto paralelo reduz drasticamente o teu risco.',
    impact: 'alto'
  },
  {
    id: 't36',
    category: 'carreira',
    title: 'Aprenda a Vender',
    description: 'Independentemente da tua profissão, saber vender ideias, projetos ou a ti mesmo é a habilidade mais lucrativa que existe.',
    impact: 'alto'
  },
  {
    id: 't37',
    category: 'carreira',
    title: 'Seja Indispensável',
    description: 'Torna-te a pessoa que resolve problemas que mais ninguém consegue resolver. O mercado paga prémio pela raridade.',
    impact: 'médio'
  },
  {
    id: 't38',
    category: 'carreira',
    title: 'Domine o Inglês',
    description: 'Falar inglês abre portas para mercados globais e salários em moedas mais fortes. É um multiplicador de rendimento.',
    impact: 'alto'
  },

  // DITADOS FINANCEIROS
  {
    id: 'd1',
    category: 'mentalidade',
    title: 'O barato sai caro',
    description: 'Comprar pela metade do preço algo que dura um terço do tempo é perder dinheiro.',
    impact: 'médio'
  },
  {
    id: 'd2',
    category: 'mentalidade',
    title: 'Quem poupa, tem',
    description: 'Um ditado antigo mas eterno. A base da riqueza é o excedente entre o que ganhas e o que gastas.',
    impact: 'médio'
  },
  {
    id: 'd3',
    category: 'investimento',
    title: 'Mantenha o sangue frio',
    description: 'No mercado financeiro, as emoções são tuas inimigas. Age com a razão, não com o medo.',
    impact: 'alto'
  },
  {
    id: 'd4',
    category: 'poupança',
    title: 'De grão em grão...',
    description: '...a galinha enche o papo. Pequenas poupanças diárias transformam-se em grandes fortunas anuais.',
    impact: 'médio'
  },
  {
    id: 'd5',
    category: 'mentalidade',
    title: 'O tempo é dinheiro',
    description: 'Literalmente. Cada hora que perdes sem produtividade ou sem aprender é um custo de oportunidade.',
    impact: 'alto'
  },
  {
    id: 'd6',
    category: 'investimento',
    title: 'Não põe ovos em cesto só',
    description: 'A base da segurança é nunca depender de uma única fonte ou de um único ativo.',
    impact: 'médio'
  },
  {
    id: 'd7',
    category: 'carreira',
    title: 'Trabalha enquanto eles dormem',
    description: 'O esforço extra no início da carreira cria uma distância intransponível para a concorrência mais tarde.',
    impact: 'médio'
  },
  {
    id: 'd8',
    category: 'poupança',
    title: 'Vende o que não te serve',
    description: 'Se não usas há um ano, é tralha que pode ser transformada em capital para investimento.',
    impact: 'médio'
  },
  {
    id: 'd9',
    category: 'mentalidade',
    title: 'Conhecimento é poder',
    description: 'E no mundo das finanças, conhecimento é literalmente dinheiro no bolso.',
    impact: 'alto'
  },
  {
    id: 'd10',
    category: 'investimento',
    title: 'O melhor dia foi ontem',
    description: 'O segundo melhor dia para começar a investir é hoje. Não adies mais o teu futuro.',
    impact: 'alto'
  },
  {
    id: 't39',
    category: 'poupança',
    title: 'Analise o Custo por Uso',
    description: 'Se compras algo por 100€ e usas 100 vezes, custou 1€ por uso. Se usas uma vez, custou 100€. Compra qualidade no que usas muito.',
    impact: 'médio'
  },
  {
    id: 't40',
    category: 'mentalidade',
    title: 'Paciência é Lucro',
    description: 'O mercado recompensa quem sabe esperar. A ansiedade é a maior ladra de património.',
    impact: 'alto'
  },
  {
    id: 'd11',
    category: 'carreira',
    title: 'Trabalha com o que amas, mas entenda o negócio',
    description: 'Paixão sem gestão financeira é apenas um passatempo caro.',
    impact: 'médio'
  },
  {
    id: 'd12',
    category: 'investimento',
    title: 'O mercado sobe e desce, o conhecimento só sobe',
    description: 'Crises limpam o mercado, mas nunca limpam o que tu aprendeste sobre ele.',
    impact: 'alto'
  },
  {
    id: 't41',
    category: 'poupança',
    title: 'Pague em Dinheiro Vivo',
    description: 'Estudos mostram que gastamos menos quando usamos notas físicas em vez de cartão ou telemóvel, porque sentimos a "dor" do gasto.',
    impact: 'médio'
  },
  {
    id: 't42',
    category: 'investimento',
    title: 'Entenda os Impostos',
    description: 'Saber como os ativos são tributados pode salvar-te uma percentagem significativa do teu lucro líquido anual.',
    impact: 'médio'
  },
  {
    id: 't43',
    category: 'mentalidade',
    title: 'Cuidado com a Falsa Promoção',
    description: 'Não poupas 50% se comprares algo que não precisas por metade do preço. Poupa 100% ao não comprar.',
    impact: 'alto'
  },
  {
    id: 't44',
    category: 'carreira',
    title: 'Domine Ferramentas de IA',
    description: 'A inteligência artificial não vai tirar o teu emprego, mas alguém que saiba usar IA vai. Aprende a ser mais produtivo.',
    impact: 'alto'
  },
  {
    id: 'd13',
    category: 'mentalidade',
    title: 'Dinheiro não aceita desaforo',
    description: 'Se tratares mal o teu dinheiro (desperdiçando), ele tratar-te-á mal quando mais precisares dele.',
    impact: 'alto'
  },
  {
    id: 'd14',
    category: 'poupança',
    title: 'Veste-te para o teu bolso, não para os outros',
    description: 'Muitas pessoas compram coisas que não podem pagar para impressionar pessoas que não gostam.',
    impact: 'médio'
  },
  {
    id: 'd15',
    category: 'investimento',
    title: 'Em rio de piranhas, jacaré nada de costas',
    description: 'Protege o teu capital quando o mercado estiver perigoso ou irracional. Sobrevivência é a primeira regra.',
    impact: 'médio'
  },
  {
    id: 't45',
    category: 'poupança',
    title: 'Revise Seguros Anualmente',
    description: 'Podes estar a pagar por coberturas que já não precisas ou a preços de há 3 anos. Compara e renegocia.',
    impact: 'médio'
  },
  {
    id: 't46',
    category: 'investimento',
    title: 'Ações de Dividendos crescentes',
    description: 'Foca-te em empresas que não só pagam dividendos, mas que os aumentam consistentemente há anos.',
    impact: 'médio'
  },
  {
    id: 't47',
    category: 'mentalidade',
    title: 'Defina o seu "Porquê"',
    description: 'Ter um objetivo claro (ex: casa, reforma, educação dos filhos) torna a disciplina de poupar muito mais fácil.',
    impact: 'alto'
  },
  {
    id: 't48',
    category: 'carreira',
    title: 'Seja um "T-Shaped" Professional',
    description: 'Tenha um conhecimento profundo numa área e conhecimentos gerais em muitas outras relacionadas.',
    impact: 'médio'
  },
  {
    id: 'd16',
    category: 'mentalidade',
    title: 'O sol nasce para todos, a sombra para quem planta',
    description: 'Todos querem riqueza, mas poucos estão dispostos a plantar as sementes da disciplina e paciência hoje.',
    impact: 'alto'
  },
  {
    id: 'd17',
    category: 'poupança',
    title: 'Cada um sabe onde o sapato aperta',
    description: 'O teu plano financeiro deve ser adaptado à tua realidade única, não à dos outros.',
    impact: 'médio'
  },
  {
    id: 't50',
    category: 'mentalidade',
    title: 'Evite a Síndrome do Próximo Mês',
    description: '"No próximo mês eu começo a poupar." Este mês é o único que tu controlas. Começa com 5€ que seja.',
    impact: 'alto'
  },
  {
    id: 'd18',
    category: 'investimento',
    title: 'Não corra atrás do comboio',
    description: 'Se um ativo já subiu 100% num curto espaço de tempo, podes estar a entrar tarde por FOMO. Espera por correção.',
    impact: 'médio'
  }
];
