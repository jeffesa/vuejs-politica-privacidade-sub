const baseImage = require('../utils/baseImage')

///////////////////////////////////
// AboutUs
///////////////////////////////////
let aboutUs = {
  component: 'AboutUs',
  name: 'about-us',
  title: 'Quem somos',
  image: baseImage([
    {src: '/about_us/globe_mobile.png, /about_us/globe_mobile.png', query: '(max-width: 1023px)'},
    {src: '/about_us/globe.png, /about_us/globe.png'},
  ], '', ''), 
  column1: {
    description: 'A <strong>Submarino Viagens</strong> é uma agência de viagens online de origem brasileira. As nossas marcas registradas são o pioneirismo e a inovação. Com nossa grande experiência no mercado online, a cada dia nos consolidamos como uma das maiores agências de turismo online do Brasil. ',
  },
  column2: {
    description: 'No nosso site você encontra mais de:',
    list: [
      {
        icon: baseImage([
          {src: '/about_us/plane.svg, /about_us/plane.svg', query: '(max-width: 1023px)'},
          {src: '/about_us/plane.svg, /about_us/plane.svg'},
        ], '', ''), 
        text: '<strong>750</strong> <br> Companhias Aéreas'
      },
      {
        icon: baseImage([
          {src: '/about_us/bed.svg, /about_us/bed.svg', query: '(max-width: 1023px)'},
          {src: '/about_us/bed.svg, /about_us/bed.svg'},
        ], '', ''), 
        text: '<strong>200 mil</strong> <br> hotéis em todo o mundo'
      },
      {
        icon: baseImage([
          {src: '/about_us/globe_baggage.svg, /about_us/globe_baggage.svg', query: '(max-width: 1023px)'},
          {src: '/about_us/globe_baggage.svg, /about_us/globe_baggage.svg'},
        ], '', ''), 
        text: '<strong>150</strong> <br> destinos nacionais/ <br> internacionais'
      },
      {
        icon: baseImage([
          {src: '/about_us/ticket.svg, /about_us/ticket.svg', query: '(max-width: 1023px)'},
          {src: '/about_us/ticket.svg, /about_us/ticket.svg'},
        ], '', ''), 
        text: 'Translados e <strong>4</strong> mil atrações à <br> sua disposição'
      },
    ],
    information: 'Da escolha do destino à comparação de preços, <strong>a</strong> <span>Submarino Viagens</span> <strong>planeja sua viagem sem você sair de casa.</strong>',
  },
  submarine: {
    text: 'Nossa viagem começou em 2006, quando entramos a bordo do Submarino para desbravar os 7 mares e trazer as melhores ofertas de viagens. Desde então, não paramos de crescer!',
    description: 'Aproveite esse mar de informações e tenha uma aventura inesquecível!',
    image: baseImage([
      {src: '/about_us/submarine_mobile.png, /about_us/submarine_mobile.png', query: '(max-width: 1023px)'},
      {src: '/about_us/submarine.png, /about_us/submarine.png'},
    ], '', ''), 
  }
}
///////////////////////////////////
// DocumentPurpose
///////////////////////////////////
let documentPurpose = {
  component: 'DocumentPurpose',
  name: 'document-purpose',
  title: 'O propósito do <br>documento',
  card: '<strong>A proteção dos seus Dados Pessoais é muito importante para a Submarino Viagens.</strong> Levamos esse assunto muito a sério e temos como prioridade garantir a segurança e a proteção dos seus Dados Pessoais em qualquer contato conosco, seja por meio do nosso site ou aplicativo.',
  information: 'A <strong>Submarino Viagens</strong> pretende demonstrar por meio desse documento nosso comprometimento em tratar seus Dados Pessoais com segurança, garantindo que todas as operações realizadas tenham máxima transparência.',
  list: {
    text: 'Pensando nisso, desenvolvemos esta <strong>Política de Privacidade</strong>, que tem por objetivo informar:',
    items: [
      'quais Dados Pessoais são tratados;',
      'para quais finalidades;',
      'com quem os compartilhamos;',
      'quais são os seus direitos;',
      'como sua segurança é garantida e a sua privacidade respeitada.</strong>'
    ]
  },
  moreInformation: 'Não há previsão de turbulência por aqui! O cuidado que a <strong>Submarino Viagens</strong> tem com seus Dados Pessoais não poderia ser diferente daquele que temos com toda a realização dos seus sonhos junto conosco.',
  image: baseImage([
    {src: '/document_purpose/document_mobile.png, /document_purpose/document_mobile.png', query: '(max-width: 1023px)'},
    {src: '/document_purpose/document.png, /document_purpose/document.png'},
  ], '', ''), 
}
///////////////////////////////////
// PrivacyPolicy
///////////////////////////////////
let privacyPolicy = {
  component: 'PrivacyPolicy',
  name: 'privacy-policy',
  title: 'A quem essa Política de Privacidade se aplica?',
  image: baseImage([
    {src: '/privacy_policy/privacy_policy_mobile.png, /privacy_policy/privacy_policy_mobile.png', query: '(max-width: 1023px)'},
    {src: '/privacy_policy/privacy_policy.png, /privacy_policy/privacy_policy.png'},
  ], '', ''), 
  informations: [
    `Esta Política de Privacidade se aplica a todos que utilizam a Plataforma da <strong>Submarino Viagens</strong>, bem como aos que tenham seus Dados Pessoais tratados pela <strong>Submarino Viagens</strong>. A utilização da Plataforma pelo Usuário implica na ciência desta Política de Privacidade.
     <br><br>Assim, esta Política de Privacidade aplica-se a todos Serviços oferecidos pela CVC, inclusive quando Você:`,
    `Esta Política também será aplicável aos Dados Pessoais coletados de forma automática pela <strong>Submarino Viagens</strong> quando Você acessa nossa Plataforma (ex: seu endereço IP, data e hora), assim como aos Dados seus que recebemos de alguns terceiros.`
  ],
  list: [
    {
      icon: baseImage([
        {src: '/privacy_policy/client.svg, /privacy_policy/client.svg'},
      ], '', ''), 
      text: 'criar uma conta em nossa Plataforma;'
    },
    {
      icon: baseImage([
        {src: '/privacy_policy/money.svg, /privacy_policy/money.svg'},
      ], '', ''), 
      text: 'solicitar cotação/contratação de Serviços;'
    },
    {
      icon: baseImage([
        {src: '/privacy_policy/message.svg, /privacy_policy/message.svg'},
      ], '', ''), 
      text: 'trocar mensagens ou contatar de alguma outra forma a <strong>Submarino Viagens;</strong>'
    },
    {
      icon: baseImage([
        {src: '/privacy_policy/web.svg, /privacy_policy/web.svg'},
      ], '', ''), 
      text: 'em outras situações nas quais Você tenha contato com nossos Serviços, como ao navegar ou fazer qualquer uso de nossa Plataforma.'
    }
  ],
  card: '<strong>Atenção! Essa Política não se aplica a sites ou serviços de terceiros. Por isso, recomendamos que Você sempre leia as Políticas de Privacidade desses terceiros para compreender como seus dados serão tratados, pois não podemos nos responsabilizar ou controlar seu conteúdo.</strong>'
}
///////////////////////////////////
// DataController
///////////////////////////////////
let dataController = {
  component: 'DataController',
  name: 'data-controller',
  title: 'Quem é o controlador dos Dados Pessoais?',
  description: `<p>O controlador é aquele que determina as decisões referentes ao tratamento de dados pessoais, como a finalidade do tratamento, quais dados pessoais serão coletados, a base legal do tratamento, com quem tais dados serão compartilhados, entre outras decisões estratégicas. 
                <br><br>No contexto desta Política, são os controladores dos seus Dados Pessoais:</p>`,
  list: {
    detach: 'CVC BRASIL OPERADORA E AGÊNCIA DE VIAGENS S/A',
    items: [
      {
        title: 'CNPJ/MF:',
        text: '10.760.260/0001-19'
      },
      {
        title: 'Endereço:',
        text: 'Rua da Catequese, 227, 11 andar, sala 111 | Bairro Jardim, Santo André - SP'
      },
      {
        title: 'CEP:',
        text: '09090-401'
      },
    ]
  },
  card: 'Qualquer outra empresa do Grupo CVC Corp que, conforme aplicável, determine as finalidades e meios de Tratamento. Para maiores informações sobre as empresas que compõem o Grupo CVC Corp, acesse: <strong><a href="https://www.cvccorp.com.br">www.cvccorp.com.br</a>.</strong>',
  image: baseImage([
    {src: '/data_controller/data_controller_mobile.png, /data_controller/data_controller_mobile.png', query: '(max-width: 1023px)'},
    {src: '/data_controller/data_controller.png, /data_controller/data_controller.png'},
  ], '', ''), 
}
///////////////////////////////////
// PersonalData
///////////////////////////////////
let personalData = {
  component: 'PersonalData',
  name: 'personal-data',
  title: 'Quais Dados Pessoais tratamos?',
  storePlatform: {
    image: baseImage([
      {src: '/personal_data/personal_data_mobile.png, /personal_data/personal_data_mobile.png', query: '(max-width: 1023px)'},
      {src: '/personal_data/personal_data.png, /personal_data/personal_data.png'},
    ], '', ''), 
    grid: {
      data: {
        text: 'A Submarino Viagens poderá coletar as suas informações diretamente com',
        places: [
          {
            icon: baseImage([
              {src: '/personal_data/store.svg, /personal_data/store.svg'},
            ], '', ''),
            label: 'Você'
          },
          {
            icon: baseImage([
              {src: '/personal_data/earth.svg, /personal_data/earth.svg'},
            ], '', ''), 
            label: 'Terceiros'
          }
        ]
      },
      information: '',
      arrow: baseImage([
        {src: '/personal_data/arrow_icon.svg, /personal_data/arrow_icon.svg'},
      ], '', ''), 
    },
    details: 'Que tal alguns exemplos? Sempre que Você interage conosco, poderemos coletar e tratar seus dados pessoais para os fins descritos nesta Política, conforme abaixo descrito:',
  },
  dataProvided: {
    title: 'Dados fornecidos por você:',
    description: '',
    list: [
      {
        title: 'Informações cadastrais:',
        description: 'ao se cadastrar, entrar em contato conosco ou demonstrar interesse pelos nossos Serviços, Você nos fornecerá inicialmente alguns dados cadastrais, como nome completo, número de documento de identificação (RG e CPF) e/ou número do passaporte em caso de viagem internacional, telefone de contato, endereço de e-mail, data de nascimento, sexo e endereço.'
      },
      {
        title: 'Informações financeiras e bancárias: ',
        description: 'podemos precisar tratar seus dados financeiros, principalmente para gerenciamento de pagamentos online, financiamentos, sistemas de pontos, processar compras ou aquisição de produtos e Serviços contratados por Você. Nestes casos, podemos tratar seus dados bancários, dados de cartão de crédito, informações de pagamentos realizados e score de crédito.'
      },
      {
        title: 'Informações de preferência e comportamentais:',
        description: 'podemos solicitar informações sobre suas preferências e planos de viagem, incluindo pedidos de refeições, seleção de assentos, informações sobre seu programa de passageiro frequente/hotel/aluguel de carros e opções de classe de companhias aéreas, bagagens e passagens. Além disso, coletamos alguns de seus dados comportamentais, como dados de compras, consumo e interesses.'
      },
      {
        title: 'Informações complementares: ',
        description: 'para dar andamento à contratação de alguns Serviços, poderemos solicitar dados complementares para a análise de crédito, análise de fraude e posterior formalização do contrato. Tais dados incluem: digitalização de documento de identificação com assinatura (por exemplo, RG ou CNH), nacionalidade, profissão, cargo e filiação. Lembre-se que nestes casos, a <strong>Submarino Viagens</strong> também poderá receber informações sobre Você de prestadores de serviço que são parte do processamento de pagamento e análise de fraude, ok?'
      },
      {
        title: 'Informações de acompanhante(s) e outras pessoas:',
        description: 'caso não seja o único a se beneficiar de nossos Serviços de turismo, Você deverá fornecer as informações necessárias para que a CVC possa fornecer os Serviços também para o(s) acompanhante(s) ou para a pessoa na qual Você está contratando nossos Serviços. Neste caso, iremos tratar as “informações cadastrais” e “de preferência” para podermos garantir o fornecimento dos nossos Serviços. <br><br>Caso os acompanhantes sejam crianças ou adolescentes, a <strong>Submarino Viagens</strong> compromete-se a sempre tratar tais Dados Pessoais no melhor interesse da criança ou do adolescente, nos limites das leis aplicáveis, podendo tratar nome completo, telefone, sexo e data de nascimento.'
      },
      {
        title: 'Documentação comprobatória em caso de reembolso ou revisão de multa: ',
        description: 'caso não seja o único a se beneficiar de nossos Serviços de turismo, Você deverá fornecer as informações necessárias para que a <span>Submarino Viagens</span> possa fornecer os Serviços também para o(s) acompanhante(s) ou para a pessoa na qual Você está contratando nossos Serviços. <strong>Neste caso, iremos tratar as “informações cadastrais” e “de preferência” do(s) acompanhante(s) para podermos garantir o fornecimento dos nossos Serviços.</strong>'
      },
      {
        title: 'Serviços de autenticação: ',
        description: 'se optar por acessar a Plataforma por meio de um serviço de autenticação de terceiros, poderemos receber e armazenar informações adicionais do seu perfil ou outras informações autorizadas por Você e pelo fornecedor deste serviço; '
      },
      {
        title: 'Jogos, publicidade e promoções:',
        description: 'poderemos coletar suas informações cadastrais ou comportamentais quando participar de jogos, quiz e outras ações de marketing promovidas por nós em nossa Plataforma ou em sites de terceiros;'
      },
      {
        title: 'Atendimento:',
        description: 'caso precise entrar em contato com o SAC ou exercer seus direitos como Titular dos Dados, por meio da Plataforma, chat, chamadas telefônicas e/ou e-mails, poderemos coletar as informações pessoais, principalmente as cadastrais e referentes ao Serviço contratado, necessárias para preencher seu pedido e contatá-lo, bem como as informações sobre suas comunicações conosco.'
      },
    ]
  },
  dataPlatform: {
    title: 'Dados gerados durante a utilização da Plataforma:',
    description: ``,
    list: [
      {
        title: 'Dados relacionados ao dispositivo eletrônico:',
        description: 'quando Você visitar a nossa Plataforma, independentemente de cadastro ou contratação de Serviços, estando ou não registrado, podemos coletar automaticamente determinadas informações do seu computador ou dispositivo móvel.'
      }
    ],
    dataRelated: {
      title: 'São exemplos:',
      list: [
        {
          example: 'endereço IP'
        },
        {
          example: 'o site de <br>referência'
        },
        {
          example: 'o software do <br>navegador da Web'
        },
        {
          example: 'informações <br>de navegação'
        },
        {
          example: 'geolocalização'
        },
        {
          example: 'datas e horas das <br>suas interações com <br>a nossa Plataforma'
        },
        {
          example: 'dados sobre <br>a sessão'
        },
      ]
    },
    moreInformation: 'Caso Você se cadastre junto a nossa Plataforma, criando uma conta de acesso, além da navegação, a <strong>Submarino Viagens</strong> poderá coletar outros Dados Pessoais, conforme indicado acima.'
  },
  dataShared: {
    title: 'Dados compartilhados por terceiros:',
    description: ``,
    list: [
      {
        title: '',
        description: 'Podemos receber Dados Pessoais dos nossos parceiros que são prestadores dos Serviços. Isso ocorre quando companhia aérea, hotel, meio de pagamento, locadora de veículo, compartilham informações sobre o status da viagem, estadia e detalhes de consumo na hospedagem para fins de processamento do pagamento.'
      },
    ]
  },
  lgpd: 'Em todos os casos, a <span>Submarino Viagens</span> compromete-se a manter todos os dados em <strong>confidencialidade absoluta</strong>, tratando somente os Dados Pessoais necessários para prestação dos Serviços, cumprimento de alguma obrigação legal ou, ainda, com fundamento em outras hipóteses previstas na LGPD.'
}
///////////////////////////////////
// PersonalDataPurposes
///////////////////////////////////
let personalDataPurposes = {
  component: 'PersonalDataPurposes',
  name: 'personal-data-purposes',
  title: 'Para que finalidades utilizamos seus Dados Pessoais? ',
  PlaneListServices: [
    {
      title: 'Execução e garantia dos nossos Serviços',
      // description: 'A CVC emprega <strong>seus melhores esforços</strong> para que os seus clientes tenham uma viagem inesquecível. Trabalhamos diariamente para transformar essa experiência na melhor conquista da sua vida, através de novas tendências e de uma ampla rede de produtos e serviços turísticos. Por meio dessa forma de pensar, transformamos a CVC <strong>na maior operadora de turismo da América Latina.</strong>',
      image: baseImage([
        {src: '/personal_data_purposes/personal_data_purposes_1_mobile.png, /personal_data_purposes/personal_data_purposes_1_mobile.png', query: '(max-width: 1023px)'},
        {src: '/personal_data_purposes/personal_data_purposes_1.png, /personal_data_purposes/personal_data_purposes_1_mobile.png'},
      ], '', ''), 
      topList: [
        {
          pointImage: baseImage([
            {src: '/personal_data_purposes/p_1_1_mobile.png, /personal_data_purposes/p_1_1_mobile.png', query: '(max-width: 1023px)'},
            {src: '/personal_data_purposes/p_1_1.png, /personal_data_purposes/p_1_1.png'},
          ], '', ''), 
          list: [
            {
              text: '<span>&#9992;</span> Intermediar sua relação com os fornecedores necessários para a prestação dos Serviços, realizando o pagamento devido (ex: hotéis, companhias aéreas, locadoras, parques, dentre outros, a depender do caso concreto);'
            },
            {
              text: '<span>&#9992;</span> Intermediar sua relação com os fornecedores de valor agregado (ex: casa de câmbio ou assessoria na obtenção de visto), caso Você manifeste interesse em tais Serviços;'
            },
          ]
        },
        {
          pointImage: baseImage([
            {src: '/personal_data_purposes/p_1_2_mobile.png, /personal_data_purposes/p_1_2_mobile.png', query: '(max-width: 1023px)'},
            {src: '/personal_data_purposes/p_1_2.png, /personal_data_purposes/p_1_2.png'},
          ], '', ''), 
          list: [
            {
              text: '<span>&#9992;</span> Realizar análise de crédito e fraude;'
            },
            {
              text: '<span>&#9992;</span> Processar transações financeiras e cobrança de inadimplentes;'
            },
            {
              text: '<span>&#9992;</span> Analisar pedidos de reembolso, revisão de multa e ocorrências de não comparecimento;'
            },
            {
              text: '<span>&#9992;</span> Analisar ocorrências de fraude, chargeback e estorno no cartão de crédito;'
            },
          ]
        },
        {
          pointImage: baseImage([
            {src: '/personal_data_purposes/p_1_3_mobile.png, /personal_data_purposes/p_1_3_mobile.png', query: '(max-width: 1023px)'},
            {src: '/personal_data_purposes/p_1_3.png, /personal_data_purposes/p_1_3.png'},
          ], '', ''), 
          list: [
            {
              text: '<span>&#9992;</span> Celebrar contrato de intermediação dos Serviços;'
            },
          ]
        },
      ],
      bottomList: {
        pointImage: baseImage([
          {src: '/personal_data_purposes/p_1_4.png, /personal_data_purposes/p_1_4.png'},
        ], '', ''), 
        list: [
          [
            {
              text: '<span>&#9992;</span> Entrar em contato, caso Você demonstre interesse em contratar um Serviço;'
            },
            {
              text: '<span>&#9992;</span> Realizar seu cadastro na Plataforma;'
            },
          ],
          [
            {
              text: '<span>&#9992;</span> Tratar sobre dúvidas, reclamações ou sugestões enviadas nos canais de atendimento;'
            },
            {
              text: '<span>&#9992;</span> Apresentar um orçamento, após seu pedido;'
            },
          ],
          [
            {
              text: '<span>&#9992;</span> Realizar atendimento no pós-venda para auxiliar na compra de assentos, bagagem, alteração de datas, entre outros;'
            },
          ],
          [
            {
              text: '<span>&#9992;</span> Enviar comunicação para Você com informações sobre o andamento das solicitações, processos de logística, bem como outras informações relevantes sobre o Serviço contratado ou sobre a Plataforma;'
            },
          ]
        ]
      }
    }
  ],
  PlaneListMarketing: [
    {
      title: 'Ações de marketing e comerciais',
      description: '',
      image: baseImage([
        {src: '/personal_data_purposes/personal_data_purposes_2_mobile.png, /personal_data_purposes/personal_data_purposes_2_mobile.png', query: '(max-width: 1023px)'},
        {src: '/personal_data_purposes/personal_data_purposes_2.png, /personal_data_purposes/personal_data_purposes_2_mobile.png'},
      ], '', ''), 
      topList: [
        {
          pointImage: baseImage([
            {src: '/personal_data_purposes/p_2_1_mobile.png, /personal_data_purposes/p_2_1_mobile.png', query: '(max-width: 1023px)'},
            {src: '/personal_data_purposes/p_2_1.png, /personal_data_purposes/p_2_1.png'},
          ], '', ''), 
          list: [
            {
              text: '<span>&#9992;</span> Enviar comunicações de marketing por e-mail ou SMS e realizar as demais ações de marketing, inclusive marketing direcionado, para promover a <strong>Submarino Viagens</strong>, as demais empresas do Grupo CVC Corp ou parceiros de negócio;'
            }
          ]
        },
        {
          pointImage: baseImage([
            {src: '/personal_data_purposes/p_2_2_mobile.png, /personal_data_purposes/p_2_2_mobile.png', query: '(max-width: 1023px)'},
            {src: '/personal_data_purposes/p_2_2.png, /personal_data_purposes/p_2_2.png'},
          ], '', ''), 
          list: [
            {
              text: '<span>&#9992;</span> Controlar a performance da <strong>Submarino Viagens</strong>, aprimoramento das iniciativas comerciais e promocionais da CVC e melhoria da sua experiência ao navegar em nossa Plataforma;'
            }
          ]
        },
        {
          pointImage: baseImage([
            {src: '/personal_data_purposes/p_2_3_mobile.png, /personal_data_purposes/p_2_3_mobile.png', query: '(max-width: 1023px)'},
            {src: '/personal_data_purposes/p_2_3.png, /personal_data_purposes/p_2_3.png'},
          ], '', ''), 
          list: [
            {
              text: '<span>&#9992;</span> Analisar o seu perfil para melhoria das ofertas e direcionamento de conteúdo, anúncios e produtos personalizados que possam interessar a Você.'
            },
          ]
        },
      ]
    }
  ],
  PlaneListProcess: [
    {
      title: 'Desenvolvimento da CVC Corp e nossos processos internos',
      description: '',
      image: baseImage([
        {src: '/personal_data_purposes/personal_data_purposes_3_mobile.png, /personal_data_purposes/personal_data_purposes_3_mobile.png', query: '(max-width: 1023px)'},
        {src: '/personal_data_purposes/personal_data_purposes_3.png, /personal_data_purposes/personal_data_purposes_3_mobile.png'},
      ], '', ''), 
      topList: [
        {
          pointImage: baseImage([
            {src: '/personal_data_purposes/p_3_1_mobile.png, /personal_data_purposes/p_3_1_mobile.png', query: '(max-width: 1023px)'},
            {src: '/personal_data_purposes/p_3_1.png, /personal_data_purposes/p_3_1.png'},
          ], '', ''), 
          list: [
            {
              text: '<span>&#9992;</span> Responder dúvidas e questionamentos da Diretoria;'
            }
          ]
        },
        {
          pointImage: baseImage([
            {src: '/personal_data_purposes/p_3_2_mobile.png, /personal_data_purposes/p_3_2_mobile.png', query: '(max-width: 1023px)'},
            {src: '/personal_data_purposes/p_3_2.png, /personal_data_purposes/p_3_2.png'},
          ], '', ''), 
          list: [
            {
              text: '<span>&#9992;</span> Elaborar relatórios e análises internas, conforme necessário;'
            }
          ]
        },
        {
          pointImage: baseImage([
            {src: '/personal_data_purposes/p_3_3_mobile.png, /personal_data_purposes/p_3_3_mobile.png', query: '(max-width: 1023px)'},
            {src: '/personal_data_purposes/p_3_3.png, /personal_data_purposes/p_3_3.png'},
          ], '', ''), 
          list: [
            {
              text: '<span>&#9992;</span> Manter registros de transações comerciais e de pagamentos;'
            },
          ]
        },
        {
          pointImage: baseImage([
            {src: '/personal_data_purposes/p_3_4_mobile.png, /personal_data_purposes/p_3_4_mobile.png', query: '(max-width: 1023px)'},
            {src: '/personal_data_purposes/p_3_4.png, /personal_data_purposes/p_3_4.png'},
          ], '', ''), 
          list: [
            {
              text: '<span>&#9992;</span> Responder a consultas jurídicas internas.'
            },
          ]
        },
      ]
    }
  ],
  PlaneListLaws: [
    {
      title: 'Cumprimento de obrigações legais ou regulatórias',
      description: '',
      image: baseImage([
        {src: '/personal_data_purposes/personal_data_purposes_4_mobile.png, /personal_data_purposes/personal_data_purposes_4_mobile.png', query: '(max-width: 1023px)'},
        {src: '/personal_data_purposes/personal_data_purposes_4.png, /personal_data_purposes/personal_data_purposes_4_mobile.png'},
      ], '', ''), 
      topList: [
        {
          pointImage: '', 
          list: [
            {
              text: '<span>&#9992;</span> Assegurar o cumprimento de leis, normas, resoluções, acordos, medidas provisórias ou qualquer outra obrigação legal que a <strong>Submarino Viagens</strong> precise cumprir.'
            }
          ]
        }
      ]
    }
  ],
  PlaneListRights: [
    {
      title: 'Exercício dos nossos direitos',
      description: '',
      image: baseImage([
        {src: '/personal_data_purposes/personal_data_purposes_5_mobile.png, /personal_data_purposes/personal_data_purposes_5_mobile.png', query: '(max-width: 1023px)'},
        {src: '/personal_data_purposes/personal_data_purposes_5.png, /personal_data_purposes/personal_data_purposes_5_mobile.png'},
      ], '', ''), 
      topList: [
        {
          pointImage: baseImage([
            {src: '/personal_data_purposes/p_5_1_mobile.png, /personal_data_purposes/p_5_1_mobile.png', query: '(max-width: 1023px)'},
            {src: '/personal_data_purposes/p_5_1.png, /personal_data_purposes/p_5_1.png'},
          ], '', ''),  
          list: [
            {
              text: '<span>&#9992;</span> Permitir o exercício regular de nossos direitos e finalidades em processos administrativos, judiciais ou arbitrais.'
            }
          ]
        }
      ]
    }
  ],
}
///////////////////////////////////
// Benefits Program
///////////////////////////////////
let benefitsProgram = {
  component: 'BenefitsProgram',
  name: 'benefits-program',
  title: 'Programa de Benefícios',
  card: {
    text: 'Nosso programa de benefícios é <strong>tudo de bom!</strong> Com ele você pode <strong>acumular pontos com viagens, em compras e consumo</strong>, ou até mesmo junto a nossos parceiros comerciais, convertendo em <strong>benefícios para Você</strong>.',
    information: 'Para que isso aconteça e você consiga ter todos os benefícios, nós precisamos tratar alguns Dados Pessoais seus.  '
  },
  description: 'Os dados tratados serão utilizados para executarmos os serviços do <strong>Programa de Benefícios</strong>, incluindo:',
  image: baseImage([
    {src: '/benefits_program/benefits_program_mobile.png, /benefits_program/benefits_program_mobile.png', query: '(max-width: 1023px)'},
    {src: '/benefits_program/benefits_program.png, /benefits_program/benefits_program.png'},
  ], '', ''), 
  list: [
    'Execução de ações em virtude de relações pré-contratuais, durante a vigência de contratação (ciclo de vida do produto) ou pós-contratação (retenção, cobrança etc.);',
    'Manutenção do acúmulo de pontos do Programa de Benefícios e sua gestão;',
    'Resgate de pontos do Programa de Benefícios e transformação em produtos de viagem;',
    'Análise de perfil para concessão de crédito e gestão de riscos;',
    'Tratamento de reclamações, dúvidas e solicitações (atendimento ao Cliente);',
    'Realização de pesquisa de satisfação de produtos/serviços;',
    'Manutenção e a atualização cadastral;',
    'Atualização dos seus dados cadastrais em nossas bases de dados.'
  ]
}
///////////////////////////////////
// Personal Data Sharing
///////////////////////////////////
let personalDataSharing = {
  component: 'PersonalDataSharing',
  name: 'personal-data-sharing',
  title: 'Compartilhamento de Dados Pessoais',
  topics: [
    {
      title: 'a.	Prestação dos Serviços contratados:',
      information: 'A CVC poderá compartilhar seus dados pessoais, de acordo com o exigido ou permitido por lei e, também, para as situações abaixo descritas:',
      description: 'A <strong>Submarino Viagens</strong> realiza a intermediação de serviços entre consumidores e fornecedores de diversos ramos com quem possui parcerias. Tais fornecedores podem ser companhias aéreas, locadoras de veículos, hotéis, parques de diversão, empresas que prestam serviços de recebimento e direcionamento no local da viagem, dentre outros. <br><br>Caso seja necessário para fins da prestação dos Serviços, poderemos compartilhar suas informações pessoais com esses terceiros ou parceiros de negócio. Esse compartilhamento ocorre com os seguintes parceiros, com base nos seguintes critérios e para as <span>seguintes finalidades</span>:',
      services: [
        {
          number: 'i',
          text: 'Empresas que operacionalizam o call center e demais canais de atendimento para que os atendentes possam auxiliar Você;'
        },
        {
          number: 'ii',
          text: 'Bureaus de crédito e empresas de análise antifraude para fins de análise de crédito e verificação de fraude no momento da contratação do pacote;'
        },
        {
          number: 'iii',
          text: 'Prestadores de serviço para fins de fornecimento de software e outros sistemas de tecnologia da informação que auxiliam na prestação dos serviços e gestão de clientes;'
        },
        {
          number: 'iv',
          text: 'Fornecedores necessários para a prestação dos serviços, tais como hotéis, companhias aéreas e locadoras, a depender do pacote contratado. Caso seja necessário,  poderemos compartilhar dados sensíveis com tais fornecedores no caso de solicitação de reembolso ou revisão de multa;'
        },
        {
          number: 'v',
          text: 'Fornecedores de serviços de valor agregado que Você poderá adquirir quando celebra um contrato com a <strong>Submarino Viagens</strong> (por exemplo, seguro viagem);'
        },
        {
          number: 'vi',
          text: 'Instituições bancárias, para realização de pagamentos, reembolsos e concessão de crédito;'
        },
        {
          number: 'vii',
          text: 'Escritórios de advocacia externos, para atuação em demandas ou processos extrajudiciais, judiciais, administrativas ou arbitrais;'
        },
        {
          number: 'viii',
          text: 'Mídias sociais para fins de marketing direcionado.'
        },
      ],
      image: baseImage([
        {src: '/personal-data-sharing/personal-data-sharing_mobile.png, /personal-data-sharing/personal-data-sharing_mobile.png', query: '(max-width: 1023px)'},
        {src: '/personal-data-sharing/personal-data-sharing.png, /personal-data-sharing/personal-data-sharing.png'},
      ], '', ''), 
    },
    {
      title: '<strong>b.	Situações definidas por lei: </strong>',
      description: 'Podemos ainda compartilhar seus Dados Pessoais com órgãos governamentais, sempre que: ',
      list: [
        {
          number: 'i',
          text: 'a divulgação seja exigida por investigações, medidas judiciais, processos judiciais;'
        },
        {
          number: 'ii',
          text: 'a divulgação seja apropriada e necessária para investigar, impedir ou adotar medidas acerca de atividades ilegais, suspeita de fraude;'
        },
        {
          number: 'iii',
          text: 'a divulgação seja apropriada e necessária em situações que envolvam ameaças em potencial à segurança física de qualquer pessoa ou;'
        },
        {
          number: 'iv',
          text: 'a divulgação seja exigida de outra maneira pela legislação.'
        },
      ],
      image: baseImage([
        {src: '/personal-data-sharing/topic_b_mobile.png, /personal-data-sharing/topic_b_mobile.png', query: '(max-width: 1023px)'},
        {src: '/personal-data-sharing/topic_b.png, /personal-data-sharing/topic_b.png'},
      ], '', ''), 
    },
    {
      title: 'c.	Transferência de ativos do Controlador e empresas afiliadas:',
      description: 'Se estivermos envolvidos em uma fusão, aquisição ou venda de todos ou de parte de nossos ativos, seus Dados Pessoais poderão ser compartilhados para a empresa ou pessoa adquirente. Em circunstâncias nas quais a identidade do controlador dos Dados Pessoais se alterar como resultado de qualquer transação, Você será notificado de quaisquer escolhas que possa ter acerca de seus Dados Pessoais.',
      image: baseImage([
        {src: '/personal-data-sharing/topic_c_mobile.png, /personal-data-sharing/topic_c_mobile.png', query: '(max-width: 1023px)'},
        {src: '/personal-data-sharing/topic_c.png, /personal-data-sharing/topic_c.png'},
      ], '', ''), 
    },
    {
      title: 'd.	Prestadores de serviços e parceiros:',
      description: 'A Submarino Viagens também poderá compartilhar dados anonimizados com:',
      provider: [
        'parceiros de confiança',
        'terceiros prestadores de serviços'
      ],
      information: 'no intuito de melhor compreender quais materiais publicitários e Serviços podem interessá-los, para melhorar a qualidade e a efetividade geral dos nossos Serviços ou serviço de nossos parceiros.'
    }
  ]
}
///////////////////////////////////
// Personal DataTransfer
///////////////////////////////////
let personalDataTransfer = {
  component: 'PersonalDataTransfer',
  name: 'personal-data-transfer',
  title: 'Quando realizamos a transferência internacional de seus Dados Pessoais?',
  text: 'Quando necessário, podemos compartilhar os seus Dados Pessoais com as empresas do Grupo CVC Corp sediadas fora do Brasil para realizar as atividades especificadas na presente Política. <br><br>A <strong>Submarino Viagens</strong> ainda pode igualmente subcontratar ou compartilhar os seus Dados Pessoais com terceiros localizados em outros países, incluindo prestadores de serviços em nuvem. Caso Você, por exemplo, contrate pacotes de viagem com destino fora do país, será necessário transferir seus Dados Pessoais para que os fornecedores possam prestar tais Serviços.',
  card: '<strong>De todo modo, fique tranquilo! Adotamos as medidas apropriadas para garantir a proteção de seus dados pessoais em conformidade com os requisitos da legislação aplicável e dispositivos contratuais adequados.</strong>',
  image: baseImage([
    {src: '/personal_data_transfer/personal_data_transfer_mobile.png, /personal_data_transfer/personal_data_transfer_mobile.png', query: '(max-width: 1023px)'},
    {src: '/personal_data_transfer/personal_data_transfer.png, /personal_data_transfer/personal_data_transfer.png'},
  ], '', ''), 
}
///////////////////////////////////
// cookies Technologies
///////////////////////////////////
let cookiesTechnologies = {
  component: 'CookiesTechnologies',
  name: 'cookies-technologies',
  title: 'Como utilizamos cookies e outras tecnologias?',
  text: 'O cookie é um pequeno arquivo adicionado ao seu dispositivo para fornecer uma experiência personalizada de acesso. Assim, os cookies ajudam a analisar o tráfego de internet e nos permitem saber quando Você visitou um site específico. <strong>Mas, fique tranquilo: os cookies não dão acesso ao seu computador e celular ou revelam informações além daquelas que você escolhe compartilhar conosco.</strong> <br><br>A <strong>Submarino Viagens</strong> pode utilizar cookies para permitir a sua correta identificação, além de melhorar a qualidade de informações oferecidas a Você em nossas Plataformas.',
  card: 'Caso Você deseje, poderá desativar parte ou a totalidade dos cookies nas configurações do seu navegador. <br><br><strong>Lembrete:</strong> ao desativar cookies, pode ser que haja prejuízos na performance da navegação da Plataforma.',
  todo: {
    title: 'A Submarino Viagens pode utilizar cookies para:',
    image: baseImage([
      {src: '/cookies_technologies/cookies_technologies_mobile.png, /cookies_technologies/cookies_technologies_mobile.png', query: '(max-width: 1023px)'},
      {src: '/cookies_technologies/cookies_technologies.png, /cookies_technologies/cookies_technologies.png'},
    ], '', ''), 
    list: [
      'contar quantos visitantes recebe no website',
      'possibilitar que você navegue sem complicação e de forma ágil',
      'quais conteúdos são mais acessados',
      'qual publicidade teve mais cliques e visualizações'
    ],
    description: '<strong>Nós contabilizamos o clique identificando juntamente ao ID do usuário que clicou</strong>, no caso de usuários cadastrados. <br><br>Além dos cookies e outras tecnologias semelhantes da <span>Submarino Viagens</span>, podemos permitir que terceiros contratados utilizem seus próprios cookies ou tecnologias para prestação de serviços à <span>Submarino Viagens</span>.'
  }
}
///////////////////////////////////
// Data Stored
///////////////////////////////////
let dataStored = {
  component: 'DataStored',
  name: 'data-stored',
  title: 'Como seus dados são armazenados?',
  image: baseImage([
    {src: '/data_stored/securityMobile.png, /data_stored/securityMobile.png', query: '(max-width: 1023px)'},
    {src: '/data_stored/security.png, /data_stored/security.png'},
  ], '', ''),
  information: 'Os Dados Pessoais tratados para as finalidades descritas nesta Política serão armazenados pela <strong>Submarino Viagens</strong> apenas pelo período necessário para atingirem a finalidade para os quais foram coletados, como, por exemplo, durante o período em que o Titular de dados possuir um contrato vigente com a <strong>Submarino Viagens</strong>, ou ainda, pelo tempo necessário para: ',
  title: 'Como seus dados são armazenados?',
  icon: baseImage([
    {src: '/data_stored/baggage.svg, /data_stored/baggage.svg'},
  ], '', ''),
  list: {
    items: [
      '<span>&#9992;</span> exercício regular de direitos em processos judiciais, administrativos ou arbitrais, considerando os prazos prescricionais aplicáveis;',
      '<span>&#9992;</span> cumprimento de obrigações legais ou regulatórias; ou',
      '<span>&#9992;</span> atendimento dos interesses legítimos da Submarino Viagens ou de terceiros, respeitadas as legítimas expectativas do Titular de Dados Pessoais.'
    ]
  },
  description: 'É importante você saber que seus Dados Pessoais serão eliminados ou anonimizados, de modo que percam por completo a habilidade de identificação, nos casos em que nós já tenhamos cumprido todas as finalidades descritas nesta Política ou nas hipóteses estabelecidas por lei.',
}
///////////////////////////////////
// data Holder
///////////////////////////////////
let dataHolder = {
  component: 'DataHolder',
  name: 'data-holder',
  title: 'Como exercer seus direitos como Titular dos dados?',
  description: 'Você, enquanto Titular de Dados Pessoais, possui <strong>vários direitos a respeito de suas informações</strong>. A CVC assegura a possibilidade do Titular exercer <span>seus direitos previstos na LGPD:</span>',
  list: [
    {
      number: 'i',
      text: '<strong>a confirmação da existência do tratamento;</strong>'
    },
    {
      number: 'ii',
      text: '<strong>o acesso a seus dados;</strong>'
    },
    {
      number: 'iii',
      text: '<strong>a correção dos dados incompletos, inexatos ou desatualizados;</strong>'
    },
    {
      number: 'iv',
      text: '<strong>a anonimização, o bloqueio ou a eliminação de dados excessivos ou tratados em desconformidade com a LGPD;</strong>'
    },
    {
      number: 'v',
      text: '<strong>informações sobre as entidades públicas e privadas com as quais seus dados foram compartilhados;</strong>'
    },
    {
      number: 'vi',
      text: '<strong>a revisão e a explicação das decisões tomadas unicamente por meios automatizados;</strong>'
    },
    {
      number: 'vii',
      text: '<strong>a portabilidade de seus dados;</strong>'
    },
    {
      number: 'viii',
      text: '<strong>informação sobre a possibilidade de não fornecer o consentimento e sobre as consequências da negativa;</strong>'
    },
    {
      number: 'ix',
      text: '<strong>a revogação do consentimento quando esta for a base legal para o tratamento;</strong>'
    },
    {
      number: 'x',
      text: '<strong>a eliminação dos dados tratados com consentimento do titular.</strong>'
    },
    {
      number: 'xi',
      text: '<strong>Lembre-se:</strong> os Dados Pessoais serão eliminados após o cumprimento da finalidade, exceto nos casos de:',
      exceptions: [
        '<strong>a)</strong> cumprimento de obrigação legal ou regulatória pela CVC;',
        '<strong>b)</strong> transferência a terceiro, desde que respeitados os requisitos de Tratamento de dados dispostos na LGPD; ou',
        '<strong>c)</strong> uso exclusivo da CVC, vedado seu acesso por terceiro, e desde que os dados estejam anonimizados.'
      ]
    }
  ],
  moreInformation: {
    image: baseImage([
      {src: '/data_holder/more_information_mobile.png, /data_holder/more_information_mobile.png', query: '(max-width: 1023px)'},
      {src: '/data_holder/more_information.png, /data_holder/more_information.png'},
    ], '', ''),
    text: '<strong>Para saber melhor como exercer esses direitos, clique <a href="#">aqui</a> . <br><br>Lembre-se: antes de iniciar o processamento de sua solicitação, podemos pedir mais informações para fins de autenticação de sua identidade, garantindo, assim, que somente compartilharemos seus dados com Você ou com alguém que possua poderes para representá-lo.</strong>'
  }
}
///////////////////////////////////
// Personal Data Security
///////////////////////////////////
let personalDataSecurity = {
  component: 'PersonalDataSecurity',
  name: 'personal-data-security',
  title: 'Como mantemos a segurança dos seus <br> Dados Pessoais?',
  text: '<p>A CVC aplica seus melhores esforços e ferramentas tecnológicas para proteger os seus Dados Pessoais, utilizando medidas técnicas e organizacionais apropriadas para proteger essas informações contra o Tratamento desautorizado ou ilegal, perda acidental, destruição ou danos, atuando de maneira responsável e ética, respeitando os termos das leis aplicáveis de proteção de dados.</p><p>Adotamos, também, políticas e procedimentos rigorosos que determinam como os Dados Pessoais devem ser tratados por aqui, com o objetivo de garantir o Tratamento adequado e em conformidade com as legislações aplicáveis de Dados Pessoais.</p><p>Além disso, nossas medidas de segurança são continuamente monitoradas e revisadas de acordo com os avanços tecnológicos e recursos organizacionais.</p>',
  imagePersona: baseImage([
    {src: '/personal_data_security/persona1Mobile.png, /personal_data_security/persona1Mobile.png', query: '(max-width: 1023px)'},
    {src: '/personal_data_security/persona1.png, /personal_data_security/persona1.png'},
  ], '', ''),
}
///////////////////////////////////
// Validity
///////////////////////////////////
let validity = {
  component: 'Validity',
  name: 'validity',
  title: 'Atualizações e Vigência',
  text: "<p>A <strong>Submarino Viagens</strong> busca aperfeiçoar suas atividades cotidianamente, de modo que poderá atualizar e alterar esta Política a qualquer momento, visando, principalmente, fornecer ao Titular um nível de transparência cada vez maior sobre a forma como seus Dados Pessoais serão tratados.</p><p>Caso esta Política sofra modificações relevantes, a <strong>Submarino Viagens</strong> irá divulgar sua versão mais recente, além de dar ciência aos Titulares de dados, por meio de seus canais oficiais de comunicação, acerca das novas condições para o Tratamento de seus Dados Pessoais.</p><p><span>Esta Política de Privacidade foi atualizada e revisada em outubro de 2021.</span></p>",
}
///////////////////////////////////
// Contact
///////////////////////////////////
let contact = {
  component: 'Contact',
  name: 'contact',
  title: 'Como entrar em<br> contato com a Submarino<br> Viagens?',
  text: '<p>Ficou com dúvida? Entre em contato conosco por meio do nosso canal de atendimento oficial <a href="www.submarinoviagens.com.br">clicando aqui</a>.</p>',
  imageSun: baseImage([
    {src: '/contact/sun15Mobile.png, /contact/sun15Mobile.png', query: '(max-width: 1023px)'},
    {src: '/contact/sun15.png, /contact/sun15.png'},
  ], '', ''),
}
///////////////////////////////////
// Faq
///////////////////////////////////
let faq = {
  component: 'Faq',
  name: 'faq',
  title: 'Traduzindo o juridiquês',
  subtitle: 'Nesse tópico trazemos definições importantes para a melhor compreensão da <strong>Política de Privacidade.</strong>',
  aTitle: '<strong>“a. Submarino Viagens”, “nós”, “nosso/a”:</strong>',
  aText: 'toda vez que houver menção a esses termos estaremos nos referindo à SV VIAGENS LTDA.',
  bTitle: '<strong>b. “Usuário”, “Você”, “seu” ou “sua”:</strong>',
  bText: '“Usuário”, “Você”, “seu” ou “sua”: sempre que mencionar esse termo, estamos nos referindo aos nossos clientes, usuários de nossas Plataformas, quem adquiriu nossos Serviços, acompanhante(s) e qualquer outra pessoa que interaja com a Submarino Viagens;',
  cTitle: '<strong>c. “Plataforma”:</strong>',
  cText: 'refere-se ao site “www.submarinoviagens.com.br” ou ao aplicativo “Submarino Viagens”;',
  dTitle: '<strong>d. “LGPD":</strong>',
  dText: 'Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018);',
  eTitle: '<strong>e. “Política de Privacidade":</strong>',
  eText: 'documento pelo qual a Submarino Viagens esclarece, em detalhes, o Tratamento de Dados Pessoais de clientes que utilizam sua Plataforma, em atendimento à legislação vigente, sobretudo às disposições da LGPD;',
  fTitle: '<strong>f. “Dados Pessoais Sensíveis”:</strong>',
  fText: 'são Dados Pessoais que digam respeito a sua origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou à organização de caráter religioso, filosófico ou político, bem como dado referente à saúde ou à vida sexual, dado genético ou biométrico;',
  gTitle: '<strong>g. “Serviço(s)”:</strong>',
  gText: 'todos serviços oferecidos pela Submarino Viagens;',
  hTitle: '<strong>h. “Lojas”:</strong>',
  hText: 'lojas físicas ao redor do Brasil;',
  iTitle: '<strong>i. “Titular”:</strong>',
  iText: 'pessoa natural a quem se referem os Dados Pessoais objeto do Tratamento;',
  jTitle: '<strong>j. “Dados Pessoais”:</strong>',
  jText: 'informações relacionadas a pessoa natural que a identifiquem, ou que, em combinação com outras informações tratadas, identifiquem um indivíduo. Por exemplo, seu nome, CPF, RG, telefone, dados da sua conta bancária, dentre outros;',
  kTitle: '<strong>k. “Tratamento de Dados Pessoais”:</strong>',
  kText: 'em geral, significa qualquer operação, como a coleta, utilização, acesso, reprodução, compartilhamento, armazenamento, eliminação, realizada com Dados Pessoais.',
}

///////////////////////////////////
// Summary
///////////////////////////////////
let summary = {
  title: 'Sumário',
  menu: [
    { name: aboutUs.name, title: `1. ${aboutUs.title}`, component: aboutUs.component },
    { name: personalDataTransfer.name, title: `8. ${personalDataTransfer.title}`, component: personalDataTransfer.component },
    { name: documentPurpose.name, title: `2. ${documentPurpose.title}`, component: documentPurpose.component },
    { name: cookiesTechnologies.name, title: `9. ${cookiesTechnologies.title}`, component: cookiesTechnologies.component },
    { name: privacyPolicy.name, title: `3. ${privacyPolicy.title}`, component: privacyPolicy.component },
    { name: dataStored.name, title:`10. ${dataStored.title}`, component: dataStored.component },
    { name: dataController.name, title: `4. ${dataController.title}`, component: dataController.component },
    { name: dataHolder.name, title: `11. ${dataHolder.title}`, component: dataHolder.component },
    { name: personalData.name, title: `5. ${personalData.title}`, component: personalData.component },
    { name: personalDataSecurity.name, title: `12. ${personalDataSecurity.title}`, component: personalDataSecurity.component },
    { name: personalDataPurposes.name, title: `6. ${personalDataPurposes.title}`, component: personalDataPurposes.component },
    { name: validity.name, title: `13. ${validity.title}`, component: validity.component },
    { name: personalDataSharing.name, title: `7. ${personalDataSharing.title}`, component: personalDataSharing.component },
    { name: contact.name, title: `14. ${contact.title}`, component: contact.component },
  ]
}

///////////////////////////////////
// Header
///////////////////////////////////
let header = {
  component: 'Header',
  name: 'header',
  imageLogo: baseImage([
    {src: '/sub_logo_mobile.png, /sub_logo_mobile.png', query: '(max-width: 1023px)'},
    {src: '/sub_logo.png, /sub_logo.png'},
  ], '', ''), 
  imageLocation: baseImage([
    {src: '/bubble_header.png, /bubble_header.png', query: '(max-width: 1023px)'},
    {src: '/bubble_header.png, /bubble_header.png'},
  ], '', ''), 
  title: 'Política de Privacidade',
  subtitle: 'Tempo estimado de leitura: <strong>50 minutos</strong>'
}

///////////////////////////////////
// Footer
///////////////////////////////////
let footer = {
  component: 'Header',
  name: 'header',
  imageLogo: baseImage([
    {src: '/sub_logo_mobile.png, /sub/sub_logo_mobile.png', query: '(max-width: 1023px)'},
    {src: '/logo_footer.png, /logo_footer.png'},
  ], '', ''), 
  imageLocation: baseImage([
    {src: '/location_footer_mobile.png, /location_footer_mobile.png', query: '(max-width: 1023px)'},
    {src: '/location_footer.png, /location_footer.png'},
  ], '', ''), 
  title: 'Política de Privacidade',
  subtitle: 'Tempo estimado de leitura: 40 minutos'
}

const page = {
  header,
  footer,
  summary,
  aboutUs,
  documentPurpose,
  privacyPolicy,
  dataController,
  personalData,
  personalDataPurposes,
  // benefitsProgram,
  personalDataSharing,
  personalDataTransfer,
  cookiesTechnologies,
  dataStored,
  dataHolder,
  personalDataSecurity,
  validity,
  contact,
  faq,
}

module.exports = page