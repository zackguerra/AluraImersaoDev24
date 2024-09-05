let videogames = [
    {
        titulo: "Dreamcast",
        descricao: "O Dreamcast (ドリームキャスト Dorīmukyasuto?) é um console de jogos eletrônicos, desenvolvido e fabricado pela empresa Sega, lançado em 27 de novembro de 1998 no Japão, 9 de setembro de 1999 na América do Norte e 14 de outubro de 1999 na Europa. Foi o primeiro da sexta geração de consoles, precedendo, e ao mesmo tempo, concorrendo com o PlayStation 2 da Sony, o GameCube da Nintendo e o Xbox da Microsoft.",
        link: "https://pt.wikipedia.org/wiki/Dreamcast",
        lancamento: "27 de novembro de 1998 (Japão)",
        processador: "SH-4",
        graficos: "PowerVR2",
        jogos: ["Sonic Adventure", "Shenmue", "Crazy Taxi"]
    },
    {
        titulo: "Super Nintendo Entertainment System",
        descricao: "O Super Nintendo Entertainment System (SNES), conhecido no Brasil como Super Nintendo, Super NES ou simplesmente SNES, é um console de videogame de 16 bits desenvolvido e fabricado pela Nintendo. Lançado em 1990 no Japão, foi um dos consoles mais populares da década de 1990, juntamente com o Mega Drive da Sega.",
        link: "https://pt.wikipedia.org/wiki/wiki/Super_Nintendo_Entertainment_System",
        lancamento: "1990 (Japão)",
        processador: "Ricoh 5A22",
        graficos: "Sony SPC7110",
        jogos: ["Super Mario World", "The Legend of Zelda: A Link to the Past", "Super Metroid"]
    },
    {
        titulo: "Mega Drive",
        descricao: "O Mega Drive (メガドライブ Megadoraivu?), conhecido como Sega Genesis na América do Norte e Sega Mega Drive II no Japão, é um console de videogame de 16 bits desenvolvido e fabricado pela Sega. Lançado em 1988 no Japão, foi um dos consoles mais populares da década de 1990, juntamente com o Super Nintendo da Nintendo.",
        link: "https://pt.wikipedia.org/wiki/Mega_Drive",
        lancamento: "1988 (Japão)",
        processador: "Motorola 68000",
        graficos: "Yamaha YM7119",
        jogos: ["Sonic the Hedgehog", "Golden Axe", "Streets of Rage"]
    },
    {
        titulo: "PlayStation",
        descricao: "O primeiro console de videogame de 32 bits da Sony.",
        link: "https://pt.wikipedia.org/wiki/PlayStation",
        lancamento: "1994 (Japão)",
        plataformas: ["PlayStation"],
        desenvolvedor: "Sony Interactive Entertainment",
        editora: "Sony Interactive Entertainment",
        generos: ["Ação", "Aventura", "RPG"],
        jogos_populares: ["Final Fantasy VII", "Gran Turismo", "Spyro the Dragon"],
        imagem: "playstation.jpg"
    },
    {
        titulo: "Nintendo 64",
        descricao: "O primeiro console de videogame de 64 bits da Nintendo.",
        link: "https://pt.wikipedia.org/wiki/Nintendo_64",
        lancamento: "1996 (Japão)",
        plataformas: ["Nintendo 64"],
        desenvolvedor: "Nintendo EAD",
        editora: "Nintendo",
        generos: ["Aventura", "Plataforma", "Luta"],
        jogos_populares: ["Super Mario 64", "The Legend of Zelda: Ocarina of Time", "Mario Kart 64"],
        imagem: "nintendo_64.jpg"
    },    
    {
        titulo: "PlayStation 5",
        descricao: "O console mais recente da Sony, com foco em gráficos de alta resolução e carregamento rápido.",
        link: "https://pt.wikipedia.org/wiki/PlayStation_5",
        lancamento: "2020 (Mundo)",
        plataformas: ["PlayStation 5"],
        desenvolvedor: "Sony Interactive Entertainment",
        editora: "Sony Interactive Entertainment",
        generos: ["Ação", "Aventura", "RPG"],
        jogos_populares: ["Marvel's Spider-Man: Miles Morales", "Demon's Souls", "Ratchet & Clank: Rift Apart"],
        imagem: "playstation_5.jpg"
    },
    {
        titulo: "Sega Saturn",
        descricao: "O console da Sega que competiu diretamente com o PlayStation.",
        link: "https://pt.wikipedia.org/wiki/Sega_Saturn",
        lancamento: "1994 (Japão)",
        plataformas: ["Sega Saturn"],
        desenvolvedor: "Sega",
        editora: "Sega",
        generos: ["Ação", "Luta", "RPG"],
        jogos_populares: ["Virtua Fighter 2", "Panzer Dragoon", "Nights into Dreams"],
        imagem: "sega_saturn.jpg"
    },
    {
        titulo: "Nintendo DS Lite",
        descricao: "Versão mais fina e leve do Nintendo DS.",
        link: "https://pt.wikipedia.org/wiki/Nintendo_DS_Lite",
        lancamento: "2006 (Japão)",
        plataformas: ["Nintendo DS"],
        desenvolvedor: "Nintendo",
        editora: "Nintendo",
        generos: ["Plataforma", "RPG", "Simulação"],
        jogos_populares: ["New Super Mario Bros. DS", "The Legend of Zelda: Phantom Hourglass", "Animal Crossing: Wild World"],
        imagem: "nintendo_ds_lite.jpg"
    },
    {
        titulo: "PlayStation Portable (PSP Go)",
        descricao: "Versão sem UMD do PSP, focada em downloads digitais.",
        link: "https://pt.wikipedia.org/wiki/PlayStation_Portable_Go",
        lancamento: "2009 (Japão)",
        plataformas: ["PlayStation Portable"],
        desenvolvedor: "Sony Computer Entertainment",
        editora: "Sony Computer Entertainment",
        generos: ["Ação", "RPG", "Simulação"],
        jogos_populares: ["Monster Hunter Portable 3rd", "God of War: Chains of Olympus", "Persona 3 Portable"],
        imagem: "psp_go.jpg"
    },
    {
        titulo: "Wii U",
        descricao: "Sucessor do Wii, com um tablet como controle principal.",
        link: "https://pt.wikipedia.org/wiki/Wii_U",
        lancamento: "2012 (América do Norte)",
        plataformas: ["Wii U"],
        desenvolvedor: "Nintendo EPD",
        editora: "Nintendo",
        generos: ["Aventura", "Plataforma", "Party"],
        jogos_populares: ["Super Mario 3D World", "The Legend of Zelda: Breath of the Wild", "Mario Kart 8 Deluxe"],
        imagem: "wii_u.jpg"
    },
    {
        titulo: "Xbox One X",
        descricao: "Versão mais poderosa do Xbox One, focada em jogos em 4K.",
        link: "https://pt.wikipedia.org/wiki/Xbox_One_X",
        lancamento: "2017 (Mundo)",
        plataformas: ["Xbox One"],
        desenvolvedor: "Microsoft",
        editora: "Microsoft",
        generos: ["Ação", "RPG", "Esporte"],
        jogos_populares: ["Forza Horizon 4", "Red Dead Redemption 2", "Gears of War 4"],
        imagem: "xbox_one_x.jpg"
    }
]