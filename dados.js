let personagens = [
    {
      nome: "Shadow the Hedgehog",
      primeiroJogo: ["Sonic Adventure 2",  2001 ],
      jogos: ["Sonic Adventure 2", "Shadow the Hedgehog", "Sonic Heroes", "Sonic Rivals", "Sonic and the Black Knight",
              "Sonic the Hedgehog (2006)", "Sonic Rivals 2", "Mario & Sonic at the Olympic Games", "Sonic Free Riders",
              "Sonic Colors", "Sonic Generations", "Sonic Lost World", "Sonic Boom: Rise of Lyric", "Sonic Forces",
              "Sonic Mania Plus", "Team Sonic Racing"],
      descricao: "Criado como a 'forma de vida suprema', Shadow é um ouriço com habilidades sobre-humanas, conhecido por sua aparência sombria e seus poderes extraordinários.",
      habilidades: ["Chaos Control", "Chaos Spear", "Chaos Dash", "Super Speed"],
      imagem: "https://pngpix.com/images/high/shadow-the-hedgehog-pose-lnbxbases0i3c070.webp",
      maisInformacoes: "https://pt.wikipedia.org/wiki/Shadow_the_Hedgehog", 
      tags: "protagonista anti-herói poderoso misterioso"
    },
    {
      nome: "Miles 'Tails' Prower",
      primeiroJogo: ["Sonic the Hedgehog 2",  1992 ],
      jogos: ["Sonic the Hedgehog 2", "Sonic Adventure", "Sonic Heroes", "Sonic Unleashed", "Sonic Colors", "Sonic Generations", "Sonic Lost World", "Sonic Boom: Rise of Lyric", "Sonic Forces","Sonic Mania", "Sonic Mania Plus", "Team Sonic Racing", "Sonic Frontiers"],
      descricao: "Melhor amigo de Sonic, Tails é um raposa com duas caudas, gênio mecânico e piloto habilidoso.",
      habilidades: ["Mecânica Avançada", "Inteligência Superdotada", "Voo com as Caudas"],
      imagem: "https://pre00.deviantart.net/7223/th/pre/i/2012/178/3/e/tails_by_mike9711-d55129r.png",
      maisInformacoes: "https://pt.wikipedia.org/wiki/Miles_Tails_Prower",
      tags: "aliado mecânico inteligente fofo"
    },
    {
      nome: "Amy Rose",
      primeiroJogo: ["Sonic CD", 1993 ],
      jogos: ["Sonic CD", "Sonic Adventure", "Sonic Heroes", "Sonic Unleashed", "Sonic Colors", "Sonic Generations", "Sonic Lost World", "Sonic Boom: Rise of Lyric", "Sonic Forces","Sonic Mania", "Sonic Mania Plus", "Team Sonic Racing", "Sonic Frontiers"],
      descricao: "Uma ouriça rosa apaixonada e determinada, fã de Sonic e conhecida por seu martelo gigante.",
      habilidades: ["Martelo Gigante", "Ataque Spin", "Super Força"],
      imagem: "https://vignette.wikia.nocookie.net/p__/images/d/de/Team_Sonic_Racing_Amy_no_car.png/revision/latest/scale-to-width-down/338?cb=20180804024503&path-prefix=protagonist",
      maisInformacoes: "https://pt.wikipedia.org/wiki/wiki/Amy_Rose", 
      tags: "protagonista romântica determinada fofa"
    }, 
    {
      nome: "Sonic the Hedgehog",
      primeiroJogo: ["Sonic the Hedgehog", 1991],
      jogos: ["Sonic the Hedgehog", "Sonic the Hedgehog 2", "Sonic CD", "Sonic Adventure", "Sonic Heroes", "Sonic Unleashed", "Sonic Colors", "Sonic Generations", "Sonic Lost World", "Sonic Boom: Rise of Lyric", "Sonic Forces", "Sonic Mania", "Sonic Mania Plus", "Team Sonic Racing", "Sonic Frontiers"],
      descricao: "Um ouriço azul rápido como o raio, conhecido por sua velocidade e amor por aventuras.",
      habilidades: ["Super Velocidade", "Homing Attack", "Spin Dash"],
      imagem: "https://pluspng.com/img-png/sonic-hd-png-hd-sonic-clipart-2636.png",
      maisInformacoes: "https://pt.wikipedia.org/wiki/Sonic_the_Hedgehog",
      tags: "protagonista rápido aventureiro heroico"
  }, 
  {
    nome: "Knuckles the Echidna",
    primeiroJogo: ["Sonic the Hedgehog 3", 1994],
    jogos: ["Sonic the Hedgehog 3", "Sonic & Knuckles", "Sonic Adventure", "Sonic Heroes", "Sonic Unleashed", "Sonic Colors", "Sonic Generations", "Sonic Lost World", "Sonic Boom: Rise of Lyric", "Sonic Forces", "Sonic Mania", "Sonic Mania Plus", "Team Sonic Racing", "Sonic Frontiers"],
    descricao: "Um equidna vermelho forte e leal, guardião da Master Emerald e conhecido por sua força e habilidades de luta.",
    habilidades: ["Força sobre-humana", "Escalada", "Glide"],
    imagem: "https://vignette.wikia.nocookie.net/sonic-runners-reloaded/images/6/66/KnucklesHD.png/revision/latest?cb=20190420205842",
    maisInformacoes: "https://pt.wikipedia.org/wiki/Knuckles_the_Echidna",
    tags: "aliado guardião forte honrado"
  },
  {
    nome: "Rouge the Bat",
    primeiroJogo: ["Sonic Adventure 2", 2001],
    jogos: ["Sonic Adventure 2", "Sonic Heroes", "Sonic Unleashed", "Sonic Colors", "Sonic Generations", "Sonic Lost World", "Sonic Boom: Rise of Lyric", "Sonic Forces", "Sonic Mania Adventures"],
    descricao: "Uma sensual e misteriosa morcego, conhecida por sua habilidade em roubar e por sua paixão por joias.",
    habilidades: ["Acrobacia", "Voo", "Força sobre-humana"],
    imagem: "https://th.bing.com/th/id/R.a86d44863ce99dddd7894adfe60b3462?rik=Py8OTuQ8J%2bXsfg&pid=ImgRaw&r=0", 
    maisInformacoes: "https://pt.wikipedia.org/wiki/Rouge_the_Bat",
    tags: "anti-heroína ladra misteriosa charmosa"
 }, 
 {
  nome: "Dr. Ivo Robotnik (Eggman)",
  primeiroJogo: ["Sonic the Hedgehog", 1991],
  jogos: ["Sonic the Hedgehog", "Sonic the Hedgehog 2", "Sonic CD", "Sonic Adventure", "Sonic Heroes", "Sonic Unleashed", "Sonic Colors", "Sonic Generations", "Sonic Lost World", "Sonic Boom: Rise of Lyric", "Sonic Forces", "Sonic Mania", "Sonic Mania Plus", "Team Sonic Racing", "Sonic Frontiers", /* Adicione mais jogos aqui */],
  descricao: "Um cientista maluco com ambições de conquistar o mundo e dominar os animais. Conhecido por suas máquinas e robôs poderosos.",
  habilidades: ["Gênio científico", "Criação de robôs", "Planejamento estratégico"],
  imagem: "https://th.bing.com/th/id/R.f824f19d8c66831ed47db95178f59411?rik=KvA04ILYF9Ys3g&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f13%2fDoctor-Eggman-PNG-HD.png&ehk=Aa%2bkayp2p0pIY5Hpv6eKaj1C%2b5TnTzBEupgjjJd86jg%3d&risl=1&pid=ImgRaw&r=0", 
  maisInformacoes: "https://pt.wikipedia.org/wiki/Doctor_Eggman",
  tags: "vilão cientista robótica ambicioso"
} 
  ];


  

