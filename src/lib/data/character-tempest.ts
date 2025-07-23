import type { Character } from "../types/types.ts"


const imageUrls = {
  // tensei slime
  rimuruTempest: "https://anibase.net/files/1f01cb75ef3ecb2e9040bf5384a1132c",
  diablo: "https://static.zerochan.net/Diablo.%28Tensei.Shitara.Slime.Datta.Ken%29.full.2741192.jpg",
  benimaru: "https://pm1.aminoapps.com/7879/414f3e99059a169d4aa1abb47bd36d1ba53f21e1r1-600-480v2_hq.jpg",
  shion: "https://i.postimg.cc/VvD1Wm6P/Shion-Tensei-Shitara-Slime-Datta-Ken-full-3604258.png",
  shuna: "https://image.cdn2.seaart.me/static/images/20231215/a6fd5e92031a03b9db19b440ff3946d4_high.webp",
  ranga: "https://s1.zerochan.net/Ranga.%28Tensei.Shitara.Slime.Datta.Ken%29.600.2837581.jpg",
  geld: "https://c4.wallpaperflare.com/wallpaper/843/918/469/tensei-shitara-slime-datta-ken-geld-tensura-orc-lord-hd-wallpaper-preview.jpg",
  milimNava: "https://uploads.spiritfanfiction.com/historias/capitulos/202205/eu-em-tensei-shitara-slime-datta-ken-rencarnando-como-dragao-23936213-310520221358.jpg",
  veldoraTempest: "https://i.pinimg.com/736x/23/8a/23/238a237b7ac4498e637b1264881c222f.jpg",

  // frieren
  frieren: "https://sketchok.com/images/articles/06-anime/056-frieren/05/27m.jpg",
  himmel: "https://preview.redd.it/89o4bw32zqjd1.jpeg?width=640&crop=smart&auto=webp&s=dd3aa8ded729fd0b59cf4ae1ea3a7d47dfc8ab2e",
  heiter: "https://i.pinimg.com/736x/cb/08/f5/cb08f54332d8bcd6048816b068871553.jpg",
  eisen: "https://otakuauthor.com/wp-content/uploads/Frieren-Beyond-Journeys-End-Episode-4-Eisen-sends-them-on-a-quest.jpg",
  fern: "https://cdn.oneesports.gg/cdn-data/2024/03/Fern_Frieren_Mage_Magic_Butterflies-450x253.jpg",
  stark: "https://i.pinimg.com/736x/93/df/e2/93dfe2eb720a7978448889fa598560ba.jpg",

  // eminence shadow

  cidKagenou: "https://image-cdn.flowgpt.com/trans-images/1747504469349-c29386a7-67e6-4798-9d81-5dfd12d5b546.default.webp",
  alpha: "https://i.ytimg.com/vi/H4LMlOOvU-U/maxresdefault.jpg",
  beta: "https://pbs.twimg.com/media/Fm2tLaxacAURXLv.jpg",
  gamma: "https://c4.wallpaperflare.com/wallpaper/368/85/211/the-eminence-in-shadow-shadow-garden-anime-moon-luna-gamma-hd-wallpaper-preview.jpg",
  delta: "https://pbs.twimg.com/media/GCeh4MPXMAANsCU.jpg",
  epsilon: "https://c4.wallpaperflare.com/wallpaper/366/761/180/the-eminence-in-shadow-shadow-garden-anime-moon-silon-epsilon-hd-wallpaper-preview.jpg",
  zeta: "https://picfiles.alphacoders.com/594/594061.jpeg",
  eta: "https://i.pinimg.com/736x/a8/3f/b9/a83fb92a9f81a7b3ec031b56049b99a0.jpg"
}

export const characters: Character[] = [
  {
      id: "rimuru-tempest",
      name: "Rimuru Tempest",
      group:"tensei-shitara-slime-data-ken",
      description: `
# Rimuru Tempest

---

## 🎭 Personalidade Estratégica

Apesar da aparência infantil e descontraída, Rimuru é altamente **inteligente, analítico** e toma decisões com base em **lógica e planejamento a longo prazo**.

---

## 🔥 Implacável Quando Provocado

Quando sua fúria é despertada, ele pode ser **cruel e letal**, usando desde **tortura** até **chantagem**, se necessário — tudo friamente calculado.

---

## 🧠 Manipulador Sutil

Rimuru cuida de sua imagem com **mentiras oficiais**, **apagando memórias**, **forjando documentos** e **enganando oponentes** para parecer mais bondoso do que realmente é.

---

## 🤝 Lealdade Verdadeira

Mesmo com métodos sombrios, ele **valoriza profundamente seus aliados**, tratando-os como **família** e guiando-se por uma ética humana herdada de Satoru Mikami e Shizu.

---

## 🎯 Um Sonho Simples

Seu objetivo? **Viver tranquilo**, cercado de conforto e entretenimento, em um mundo moldado à sua maneira.
`,
  images: imageUrls.rimuruTempest,
  skills: `
## 💠 Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Azathoth, God of the Void** | Habilidade suprema de aniquilação e manipulação do vazio absoluto. |
| **Shub-Niggurath, Lord of Harvest** | Armazena, compartilha e duplica habilidades por meio da cadeia alimentar. |

---

## 🧬 Intrinsic Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Ultimate Slime** | Estado evoluído com acesso a poderes incomparáveis. |
| **Demon Slime** | Forma avançada com grande resistência e magia. |
| **Slime** | Habilidade básica de regeneração e absorção. |

---

## 🔁 Former Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Beelzebuth, Lord of Gluttony** | Devora, analisa e armazena habilidades. |
| **Raphael, Lord of Wisdom** | Entidade analítica que auxilia nas decisões e estratégias. |
| **Uriel, Lord of Vows** | Especialista em barreiras e selos mágicos. |
| **Veldora, Lord of Storms** | Poder baseado em tempestades emprestado de Veldora. |
| **Velgrynd, Lord of Scorch** | Poder ígneo herdado da dragonesa Velgrynd. |

---

## ⚙️ Unique Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Degenerate** | Permite fusão e separação de habilidades. |
| **Devourer** | Absorção e decomposição (Predator + Starved). |
| **Gluttony** | Versão intermediária de Beelzebuth. |
| **Infinity Prison** | Sela entidades em outra dimensão. |
| **Merciless** | Elimina inimigos derrotados instantaneamente. |
| **Starved** | Fome insaciável usada para fusões. |
| **Wise One** | Evolução do Great Sage, anterior a Raphael. |

---

## ✨ Extra Skills

> Habilidades adicionais de combate, percepção e manipulação adquiridas com o tempo.


Black Flame, Black Lightning, Black Thunder, Body Double, Explosive Flames, Flame Manipulation, Flame Transformation, Future Attack Prediction, Gravity Manipulation, Gravity Flight, Haki, Heat Source Perception, Heat Wave, Holy‑Demonic Inversion, Magic Aura, Mana Jamming, Mana Manipulation, Mana Perception, Molecular Manipulation, Multilayer Barrier, Ranged Barrier, Sage, Shadow Motion, Sound Wave Perception, Spatial Motion, Steel Strength, Sticky‑Steel Thread, Strengthen Body, Ultra Smell, Ultra Sound Waves, Ultraspeed Regeneration, Water Manipulation


---

## 📘 Common Skills

> Habilidades básicas de defesa, suporte, ataque e comunicação.


Body Armor, Coercion, Drain, Hydraulic Propulsion, Paralyzing Breath, Poison Breath, Steel Thread, Sticky Thread, Telepathy, Thought Communication, Voice Cannon, Water Blade, Water Current Motion


---

## 🛡️ Tolerances

> Resistências e imunidades a ataques físicos, espirituais e efeitos anormais.


Abnormal Condition Nullification, Holy‑Demonic Attack Resistance, Natural Effects Nullification, Pain Nullification, Physical Attack Nullification, Spiritual Attack Nullification


---

## ⚔️ Artes — *Battlewill Style*


Aura Slash, Aura Sword, Formhide, Haze, Instantmove, Mana Bullet, Maximum Mana Bullet, Modelwill


---

## 🌀 Artes — *Hazy Style*


Instant Light Slash, Myriad Variety Petals, Imaginary Collapse Haze・Myriad Variety Petals


---

## 🪄 Magias — *Aspectual Magic*

| Tipo | Exemplos |
|------|----------|
| **Barreira** | Anti‑magic Area, Isolated Battlefield |
| **Criação** | Create Golem |
| **Terra** | Stone Shot |
| **Explosiva** | Explosion, Ultra Advanced Explosive Flame Technique |
| **Fogo** | Fire |
| **Gelo** | Icicle Lance, Icicle Shot, Icicle Spear |
| **Legião** | Transport Technique |
| **Nuclear** | Gravity Collapse, Abyss Annihilation, Nuclear Flame |
| **Espacial** | Warp Portal, Transfer Gate, Dress Change |
| **Recuperação** | (não especificado) |
| **Vento** | Tornado Blade, Wind Cutter |
| **Outras** | Blind, Magic Call, Exhaustion |

---

## 🧙‍♂️ Mystic Arts


Hell Flare, Head Shot, Saint Barrel, Mystic Thread, Mystic Thread Binding


---

## 🗡️ Overblade

| Habilidade | Descrição |
|-----------|-----------|
| **Melt Slash** | Corte de energia altamente destrutivo que derrete a matéria. |

---

## 🔮 Magic-Weapon Art

| Habilidade | Descrição |
|-----------|-----------|
| **Imaginary Blade** | Lâmina formada por imaginação e mana condensada. |

---

## 📦 Other


Absolute Guard, Absolute End, Black Flame Strike, Distortion Field, Dimension Fault, Flare Circle, Hydraulic Propulsion, Instant Motion, Jail Shake, Magic Flame Bullet, Secret Method of the Infinite Corridor, Spatial Connection, Spatial Transfer, Storm Break, Time Stop, Time Warp, Water Blade (evoluiu), Water Current Motion (evoluiu)


---

## 🧠 Outras Habilidades


Acceleration, Cessation Lost, Digital Nature, Dividing Ability, Engraving Magic, Master Swordsmanship, Special Soul


---

## 🧿 Ciel

| Habilidade | Descrição |
|-----------|-----------|
| **Ciel** | Consciência avançada com função de suporte, memória e proteção a Rimuru. |

---

## 📥 Skills via Food Chain

| Habilidade | Descrição |
|-----------|-----------|
| **Skill Storage & Duplication** | Armazena todas as habilidades analisadas por Shub‑Niggurath e permite duplicação. |

---

## 🧰 Equipamentos

Drago Blade, Jet Black Robe, Anti‑magic Mask, Demon's Ring, Honey, Cell phone, Potion, Pseudo Soul

`
  },

    {
    id: "diablo",
    name: "Diablo",
    group: "tensei-shitara-slime-data-ken",
    description: `
# Diablo

---

## 🕴️ Leal e Calculista

Diablo é um **arquidemônio extremamente poderoso**, conhecido por sua **lealdade absoluta** a Rimuru. Por trás de sua aparência educada e comportamento refinado, esconde uma mente **astuta, manipuladora** e **absolutamente implacável** contra os inimigos.

---

## 🧠 Gênio Estratégico

Diablo possui uma **inteligência incomum**, sendo capaz de arquitetar planos complexos e prever movimentos do inimigo com precisão. Ele considera servir Rimuru como **sua maior missão e honra**, não hesitando em usar quaisquer meios para proteger seu mestre.

---

## 🩸 Sede de Combate

Apesar de ser controlado, **Diablo adora lutas desafiadoras**, especialmente contra adversários considerados "dignos". No entanto, não é impulsivo: **prefere vencer com classe e esmagadora superioridade**.

---

## 💀 Origem Misteriosa

Anteriormente conhecido como **Noir**, ele foi convocado por Rimuru e recebeu um nome, o que o tornou um ArquiDemônio e eventualmente um dos **Sete Demônios Primordiais** mais poderosos do universo.

---

## 🎯 Lealdade Inabalável

Ele vê Rimuru como uma entidade divina e está disposto a **aniquilar qualquer um que o desrespeite**, mantendo um sorriso sereno e cortês.
    `,
    images: imageUrls.diablo,
    skills: `
## 💠 Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Yogg-Sothoth, Lord of Secrets** | Manipula segredos e conhecimentos proibidos, permitindo controle total sobre informações e mentes. |
| **Asmodeus, Lord of Temptation** | Domina emoções e desejos, induzindo aliados ou inimigos a seguirem suas vontades. |

---

## 🧬 Intrinsic Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Demon Lord’s Haki** | Aura opressiva que intimida e enfraquece oponentes. |
| **Spatial Domination** | Controle sobre o espaço, permitindo manipulação de distâncias e posições. |
| **Complete Analysis** | Capacidade de analisar instantaneamente habilidades e fraquezas de alvos. |

---

## 🔁 Former Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Temptation King** | Versão inicial de Asmodeus, focada em manipulação emocional. |

---

## ⚙️ Unique Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Temptation** | Manipula emoções e intenções, induzindo alvos a agirem contra sua vontade. |
| **Shadow Step** | Teleporte instantâneo entre sombras, ideal para emboscadas. |
| **Abyssal Flame** | Chamas negras que consomem tudo, até mesmo magia. |
| **Contract** | Forma pactos demoníacos, vinculando alvos a condições específicas. |

---

## ✨ Extra Skills

> Habilidades adicionais de combate, percepção e manipulação adquiridas com o tempo.

* Dark Aura
* Mana Perception
* Ultra Speed Movement
* Magic Resistance
* Illusion Creation
* Dimensional Shift
* Shadow Manipulation
* Pain Nullification
* Mental Domination
* Regeneration

---

## 📘 Common Skills

> Habilidades básicas de defesa, suporte, ataque e comunicação.

* Telepathy
* Coercion
* Dark Bolt
* Mana Manipulation
* Stealth Movement

---

## 🛡️ Tolerances

> Resistências e imunidades a ataques físicos, espirituais e efeitos anormais.

* Pain Nullification
* Physical Attack Resistance
* Magic Attack Resistance
* Mental Attack Immunity
* Spiritual Attack Resistance

---

## ⚔️ Artes — *Demonic Style*

* Abyssal Slash: Corte infundido com energia demoníaca.
* Shadow Bind: Prende oponentes com correntes de sombra.
* Hellfire Burst: Explosão de chamas negras concentradas.

---

## 🪄 Magias — *Dark Magic*

| Tipo | Exemplos |
|------|----------|
| **Ofensiva** | Dimensional Slash, Hellfire Lance, Dark Flame |
| **Defensiva** | Abyssal Barrier, Shadow Veil |
| **Espacial** | Teleport, Spatial Severance |
| **Suporte** | Summon Demonic Servants, Mana Restoration |

---

## 🧙‍♂️ Mystic Arts

* Hell Flare: Chama concentrada que queima alvos espirituais.
* Abyssal Bind: Amarra oponentes com energia demoníaca.
* Void Pulse: Pulso que distorce a realidade ao redor.

---

## 🗡️ Overblade

| Habilidade | Descrição |
|-----------|-----------|
| **Chaos Slash** | Corte que combina energia demoníaca e caos, destruindo matéria e magia. |

---

## 🔮 Magic-Weapon Art

| Habilidade | Descrição |
|-----------|-----------|
| **Abyssal Edge** | Lâmina infundida com mana demoníaca, capaz de cortar dimensões. |

---

## 📦 Other

* Dark Dominion: Expande uma aura que enfraquece inimigos.
* Instant Motion: Movimento instantâneo em curtas distâncias.
* Mana Drain: Absorve mana de alvos próximos.

---

## 🧰 Equipamentos

* Manto do Caos Abissal
* Cajado das Chamas Eternas
* Cristais de Invocação
* Demon’s Crest Ring
    `
  },
  {
    id: "benimaru",
    name: "Benimaru",
    group: "tensei-shitara-slime-data-ken",
    description: `
# Benimaru

---

## 🔥 General Supremo

Líder militar de Tempest, Benimaru é um estrategista brilhante e guerreiro destemido. Comanda os exércitos de Rimuru com **ousadia, eficiência e lealdade absoluta**.

---

## ⚔️ Espírito de Guerreiro

Benimaru exala uma aura **honrada e determinada**, lutando com a ferocidade de um verdadeiro samurai. Apesar da aparência calma, é impiedoso em batalha.

---

## ❤️ Lealdade e Amor Fraterno

Sente-se eternamente grato a Rimuru por salvar ele e sua tribo. **Seu senso de responsabilidade é inabalável**, e trata seus aliados como uma extensão de sua família.

---

## 🗡️ Mestre da Espada Flamejante

Sua habilidade com a katana, combinada com **magia de fogo**, faz dele um adversário temível, capaz de incinerar exércitos inteiros.

---

## 🎯 Comandante Nato

Seu objetivo é **proteger Tempest e expandir sua influência**, servindo Rimuru com devoção e liderando com honra.
    `,
    images: imageUrls.benimaru,
    skills: `
## 💠 Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Odo, Lord of Control** | Controle total sobre energia flamejante e estratégias de batalha. |
| **Blaze Sovereign** | Amplifica ataques de fogo, incinerando tudo em larga escala. |

---

## 🧬 Intrinsic Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Oni Strength** | Força física sobrenatural herdada de sua linhagem oni. |
| **Flame Affinity** | Conexão natural com o elemento fogo, aumentando sua potência mágica. |

---

## 🔁 Former Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Flame King** | Versão inicial de Blaze Sovereign, focada em manipulação de chamas. |

---

## ⚙️ Unique Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Generalissimo** | Liderança estratégica que aumenta a moral e eficiência de aliados. |
| **Samurai King** | Domínio supremo da espada, com cortes precisos e letais. |
| **Flame King** | Manipula chamas para ataques devastadores e defesas ígneas. |

---

## ✨ Extra Skills

> Habilidades adicionais de combate, percepção e manipulação adquiridas com o tempo.

* Flame Manipulation
* Katana Mastery
* Battle Perception
* Ultra Speed Movement
* Heat Sense
* Mana Perception
* Multilayer Barrier
* Strength Surge
* Precision Strike
* Fire Aura

---

## 📘 Common Skills

> Habilidades básicas de defesa, suporte, ataque e comunicação.

* Body Armor
* Coercion
* Telepathy
* Flame Burst
* Quick Slash

---

## 🛡️ Tolerances

> Resistências e imunidades a ataques físicos, espirituais e efeitos anormais.

* Fire Attack Nullification
* Physical Attack Resistance
* Pain Nullification
* Heat Resistance
* Magic Resistance

---

## ⚔️ Artes — *Samurai Style*

* Crimson Slash: Corte flamejante que incinera alvos.
* Blaze Thrust: Investida com katana envolta em chamas.
* Firestorm Dance: Sequência de ataques giratórios com fogo.

---

## 🪄 Magias — *Fire Magic*

| Tipo | Exemplos |
|------|----------|
| **Ofensiva** | Inferno Slash, Flame Vortex, Firestorm |
| **Defensiva** | Flame Barrier, Heat Shield |
| **Suporte** | Fire Aura, Mana Ignition |
| **Elemental** | Blaze Wave, Ember Strike |

---

## 🧙‍♂️ Mystic Arts

* Hellfire Strike: Ataque concentrado de chamas místicas.
* Flame Bind: Prende oponentes com correntes de fogo.
* Pyro Pulse: Pulso de calor que desorienta inimigos.

---

## 🗡️ Overblade

| Habilidade | Descrição |
|-----------|-----------|
| **Blaze Cutter** | Corte de fogo que atravessa defesas mágicas e físicas. |

---

## 🔮 Magic-Weapon Art

| Habilidade | Descrição |
|-----------|-----------|
| **Crimson Blade** | Katana infundida com mana flamejante, amplificando danos. |

---

## 📦 Other

* Instant Strike: Ataque rápido com katana em alta velocidade.
* Firestorm Field: Cria uma área de chamas intensas.
* Battle Command: Aumenta a coordenação de aliados em batalha.

---

## 🧰 Equipamentos

* Crimson Katana
* Magic Armor Set
* Flame Crest Amulet
* Oni Mask
    `
  },
  {
    id: "shion",
    name: "Shion",
    group: "tensei-shitara-slime-data-ken",
    description: `
# Shion

---

## 🗡️ Escudo Inquebrável

Shion é a guarda-costas pessoal de Rimuru, sua presença é **intimidante e protetora**. Embora temperamental, sua força bruta e coragem são inquestionáveis.

---

## 😂 Carisma Caótico

Famosa por sua comida mortal e jeito explosivo, Shion também é profundamente **emocional, leal e carismática**, ganhando respeito e carinho por onde passa.

---

## 💀 Fúria Letal

Ao perder a vida, sua fúria gerou o nascimento de uma guerreira ainda mais poderosa com sede de proteger Rimuru **a qualquer custo**.

---

## ⚔️ Guerreira Implacável

Sua habilidade com a espada e **força sobre-humana** a tornam uma força destrutiva no campo de batalha.

---

## 🎯 Devoção Total

Seu objetivo é **servir e proteger Rimuru**, sendo sua espada e escudo em qualquer situação.
    `,
    images: imageUrls.shion,
    skills: `
## 💠 Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Adroa, Lord of Wrath** | Amplifica sua força com base na fúria, causando destruição em massa. |
| **Tyrant’s Blade** | Potencializa ataques com espada, ignorando defesas. |

---

## 🧬 Intrinsic Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Oni Power** | Força física extrema herdada de sua linhagem oni. |
| **Regenerative Body** | Regeneração rápida de ferimentos. |

---

## 🔁 Former Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Berserker** | Versão inicial de Adroa, focada em ataques furiosos. |

---

## ⚙️ Unique Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Berserker** | Aumenta força e velocidade em estados de fúria. |
| **Body Enhancement** | Reforça o corpo para maior resistência e potência. |
| **Chaos Strike** | Ataque descontrolado que causa dano massivo. |

---

## ✨ Extra Skills

> Habilidades adicionais de combate, percepção e manipulação adquiridas com o tempo.

* Super Strength
* Pain Tolerance
* Ultra Regeneration
* Battle Aura
* Sword Mastery
* Impact Resistance
* Speed Surge
* Threat Detection
* Mana Perception
* Shockwave Slash

---

## 📘 Common Skills

> Habilidades básicas de defesa, suporte, ataque e comunicação.

* Body Armor
* Coercion
* Telepathy
* Heavy Slash
* Quick Strike

---

## 🛡️ Tolerances

> Resistências e imunidades a ataques físicos, espirituais e efeitos anormais.

* Physical Attack Resistance
* Death Resistance
* Pain Nullification
* Magic Resistance
* Impact Nullification

---

## ⚔️ Artes — *Berserker Style*

* Wrath Slash: Corte devastador infundido com fúria.
* Titan Thrust: Investida com força bruta.
* Chaos Barrage: Sequência de golpes rápidos e destrutivos.

---

## 🪄 Magias — *Physical Magic*

| Tipo | Exemplos |
|------|----------|
| **Ofensiva** | Power Slash, Shockwave Burst |
| **Defensiva** | Iron Skin, Force Barrier |
| **Suporte** | Strength Boost, Rage Aura |

---

## 🧙‍♂️ Mystic Arts

* Fury Strike: Ataque que canaliza raiva em energia destrutiva.
* Chaos Bind: Prende oponentes com energia caótica.
* Rage Pulse: Pulso que intimida e enfraquece inimigos.

---

## 🗡️ Overblade

| Habilidade | Descrição |
|-----------|-----------|
| **Hercules Slash** | Corte massivo que destrói barreiras físicas e mágicas. |

---

## 🔮 Magic-Weapon Art

| Habilidade | Descrição |
|-----------|-----------|
| **Wrath Blade** | Espada infundida com energia de fúria, amplificando danos. |

---

## 📦 Other

* Instant Crush: Esmaga alvos com força bruta.
* Battle Roar: Intimida oponentes, reduzindo sua precisão.
* Power Surge: Aumenta temporariamente a força física.

---

## 🧰 Equipamentos

* Greatsword “Hercules Edge”
* Demon Armor
* Wrath Amulet
* Oni Gauntlets
    `
  },
  {
    id: "shuna",
    name: "Shuna",
    group: "tensei-shitara-slime-data-ken",
    description: `
# Shuna

---

## 👑 Princesa Sacerdotisa

Shuna é a princesa dos ogros, mas prefere servir Rimuru como **sacerdotisa, conselheira e estrategista**. Sua sabedoria e poder mágico são surpreendentes.

---

## 🎨 Domínio Espiritual e Místico

Apesar da aparência gentil e serena, **sua magia espiritual é devastadora**. É um pilar de suporte mágico em todas as frentes de batalha.

---

## 💗 Coração Leal

Shuna admira profundamente Rimuru e **age com sensibilidade e firmeza**, equilibrando razão e emoção no conselho de Tempest.

---

## 🧙‍♀️ Maga Versátil

Sua habilidade em criar barreiras e encantamentos a torna indispensável em batalhas e na administração de Tempest.

---

## 🎯 Harmonia e Proteção

Seu objetivo é **manter a harmonia em Tempest**, usando sua magia para proteger e fortalecer seus aliados.
    `,
    images: imageUrls.shuna,
    skills: `
## 💠 Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Alrescha, Lord of Creation** | Cria e manipula estruturas mágicas e espirituais com precisão. |
| **Sacred Harmony** | Amplifica habilidades de aliados e sincroniza magias. |

---

## 🧬 Intrinsic Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Oni Spirit** | Conexão espiritual que aumenta a potência mágica. |
| **Mana Affinity** | Controle natural sobre mana, facilitando feitiços complexos. |

---

## 🔁 Former Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Priestess** | Versão inicial de Alrescha, focada em magia de suporte. |

---

## ⚙️ Unique Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Priestess** | Amplifica magias de suporte e cura. |
| **Master of Barriers** | Cria barreiras mágicas impenetráveis. |
| **Enchantment Weave** | Infunde objetos ou aliados com magia protetora. |

---

## ✨ Extra Skills

> Habilidades adicionais de combate, percepção e manipulação adquiridas com o tempo.

* Spiritual Magic
* Barrier Mastery
* Enchantment Arts
* Mana Perception
* Healing Magic
* Light Manipulation
* Mana Restoration
* Spiritual Detection
* Defensive Aura
* Magic Amplification

---

## 📘 Common Skills

> Habilidades básicas de defesa, suporte, ataque e comunicação.

* Telepathy
* Mana Manipulation
* Light Bolt
* Protective Ward
* Healing Touch

---

## 🛡️ Tolerances

> Resistências e imunidades a ataques físicos, espirituais e efeitos anormais.

* Spiritual Attack Resistance
* Mental Attack Resistance
* Magic Resistance
* Fatigue Resistance
* Curse Nullification

---

## ⚔️ Artes — *Spiritual Style*

* Sacred Pulse: Pulso espiritual que fortalece aliados.
* Barrier Weave: Cria barreiras dinâmicas que se adaptam a ataques.
* Light Bind: Prende oponentes com correntes de luz.

---

## 🪄 Magias — *Spiritual Magic*

| Tipo | Exemplos |
|------|----------|
| **Suporte** | Mass Heal, Mana Surge, Sacred Boost |
| **Defensiva** | Holy Barrier, Spirit Shield |
| **Ofensiva** | Light Spear, Divine Ray |
| **Espiritual** | Spirit Bind, Sacred Pulse |

---

## 🧙‍♂️ Mystic Arts

* Divine Veil: Cria uma barreira que bloqueia ataques espirituais.
* Spirit Flare: Explosão de energia espiritual que purifica alvos.
* Harmony Wave: Sincroniza aliados, aumentando sua coordenação.

---

## 🗡️ Overblade

| Habilidade | Descrição |
|-----------|-----------|
| **Sacred Slash** | Corte infundido com energia espiritual, purificando inimigos. |

---

## 🔮 Magic-Weapon Art

| Habilidade | Descrição |
|-----------|-----------|
| **Holy Staff Strike** | Ataque com cajado infundido de mana sagrada. |

---

## 📦 Other

* Mana Link: Conecta mana de aliados para feitiços conjuntos.
* Spirit Ward: Protege contra maldições e efeitos espirituais.
* Healing Aura: Regenera aliados próximos gradualmente.

---

## 🧰 Equipamentos

* Sacred Staff
* Barrier Robes
* Mana Crystal Pendant
* Holy Crest
    `
  },
  {
    id: "ranga",
    name: "Ranga",
    group: "tensei-shitara-slime-data-ken",
    description: `
# Ranga

---

## 🐺 Guardião Sombrio

Fiel companheiro de Rimuru desde o início, Ranga é um lobo mágico que evoluiu para um ser poderoso e **capaz de invocar tempestades sombrias** devastadoras.

---

## ⚡ Sombra Leal

Ele **vive nas sombras de Rimuru**, literalmente, pronto para agir em qualquer situação com rapidez e brutalidade.

---

## 🐾 Espírito de Alcateia

Lidera a alcateia com orgulho e respeito. **Sua conexão espiritual com Rimuru o torna único**, agindo como seus olhos e ouvidos silenciosos.

---

## ⚡ Força Tempestuosa

Sua habilidade de manipular **relâmpagos e ventos** o torna um predador letal no campo de batalha.

---

## 🎯 Guardião de Tempest

Seu objetivo é **proteger Rimuru e Tempest**, servindo como um guardião fiel e destrutivo.
    `,
    images: imageUrls.ranga,
    skills: `
## 💠 Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Star King, Fenrir** | Controle sobre tempestades e sombras, causando destruição em massa. |
| **Storm Sovereign** | Amplifica ataques de vento e relâmpago em larga escala. |

---

## 🧬 Intrinsic Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Beast Agility** | Velocidade e reflexos sobrenaturais de um lobo mágico. |
| **Storm Affinity** | Conexão natural com elementos de tempestade. |

---

## 🔁 Former Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Thunder Howl** | Versão inicial de Storm Sovereign, focada em ataques sônicos. |

---

## ⚙️ Unique Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Shadow Stride** | Movimento rápido entre sombras, ideal para emboscadas. |
| **Thunder Howl** | Rugido que libera relâmpagos devastadores. |
| **Storm Call** | Invoca tempestades para atacar ou desorientar inimigos. |

---

## ✨ Extra Skills

> Habilidades adicionais de combate, percepção e manipulação adquiridas com o tempo.

* Wind Manipulation
* Black Lightning
* Shadow Movement
* Ultra Speed
* Threat Perception
* Mana Perception
* Sonic Wave
* Regeneration
* Storm Aura
* Stealth Mastery

---

## 📘 Common Skills

> Habilidades básicas de defesa, suporte, ataque e comunicação.

* Telepathy
* Coercion
* Wind Slash
* Lightning Bolt
* Quick Dash

---

## 🛡️ Tolerances

> Resistências e imunidades a ataques físicos, espirituais e efeitos anormais.

* Electric Resistance
* Physical Attack Nullification
* Wind Resistance
* Pain Nullification
* Magic Resistance

---

## ⚔️ Artes — *Storm Style*

* Thunder Strike: Ataque com garras infundidas de relâmpagos.
* Storm Dash: Investida rápida com ventos cortantes.
* Shadow Roar: Rugido que cria uma onda de choque sombria.

---

## 🪄 Magias — *Storm Magic*

| Tipo | Exemplos |
|------|----------|
| **Ofensiva** | Thunder Fang, Storm Surge, Lightning Vortex |
| **Defensiva** | Wind Barrier, Storm Shield |
| **Suporte** | Speed Boost, Mana Surge |
| **Elemental** | Tempest Slash, Gale Strike |

---

## 🧙‍♂️ Mystic Arts

* Storm Pulse: Pulso de energia que desorienta inimigos.
* Thunder Bind: Prende oponentes com relâmpagos.
* Shadow Tempest: Combina sombras e ventos em um ataque massivo.

---

## 🗡️ Overblade

| Habilidade | Descrição |
|-----------|-----------|
| **Storm Fang** | Ataque com garras que combina vento e relâmpago. |

---

## 🔮 Magic-Weapon Art

| Habilidade | Descrição |
|-----------|-----------|
| **Thunder Claw** | Garras infundidas com mana elétrica, amplificando danos. |

---

## 📦 Other

* Instant Dash: Movimento ultra-rápido em linha reta.
* Storm Field: Cria uma área de ventos e relâmpagos.
* Pack Command: Lidera aliados com eficiência em batalha.

---

## 🧰 Equipamentos

* Shadow Collar
* Magic Fang Enhancer
* Storm Crest
* Wind Amulet
    `
  },
  {
    id: "geld",
    name: "Geld",
    group: "tensei-shitara-slime-data-ken",
    description: `
# Geld

---

## 🛠️ Capitão da Força de Construção

Geld é o símbolo de trabalho duro, disciplina e força entre os subordinados de Rimuru. Sua lealdade é **inquestionável e forjada em arrependimento e redenção**.

---

## 🪨 Escudo Imparável

Sua força bruta e **resistência sobre-humana** fazem dele um tanque de guerra vivo. Sempre está na linha de frente protegendo os mais fracos.

---

## 💥 Redenção em Ação

Ex-rei orc, encontrou em Rimuru uma nova razão de viver e **canaliza sua força para reconstruir e proteger**, não destruir.

---

## 🛡️ Defensor Leal

Sua habilidade de absorver danos e manipular a terra o torna um **defensor inabalável** de Tempest.

---

## 🎯 Reconstrução e Proteção

Seu objetivo é **reconstruir Tempest e proteger seus habitantes**, redimindo-se de seu passado como Orc Disaster.
    `,
    images: imageUrls.geld,
    skills: `
## 💠 Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Earth Sovereign** | Controle total sobre a terra, criando estruturas e ataques massivos. |
| **Guardian’s Resolve** | Amplifica resistência e força em defesa de aliados. |

---

## 🧬 Intrinsic Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Orc Strength** | Força física extrema herdada de sua linhagem orc. |
| **Earth Affinity** | Conexão natural com o elemento terra, aumentando sua potência. |

---

## 🔁 Former Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Protection** | Versão inicial de Guardian’s Resolve, focada em defesa. |

---

## ⚙️ Unique Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Protection** | Absorve danos direcionados a aliados próximos. |
| **Construction King** | Manipula a terra para criar estruturas defensivas. |
| **Shockwave Fist** | Golpe que gera ondas de choque sísmicas. |

---

## ✨ Extra Skills

> Habilidades adicionais de combate, percepção e manipulação adquiridas com o tempo.

* Earth Manipulation
* Super Endurance
* Impact Resistance
* Strength Surge
* Defensive Aura
* Mana Perception
* Stone Armor
* Regeneration
* Threat Detection
* Power Smash

---

## 📘 Common Skills

> Habilidades básicas de defesa, suporte, ataque e comunicação.

* Body Armor
* Coercion
* Telepathy
* Earth Slam
* Heavy Strike

---

## 🛡️ Tolerances

> Resistências e imunidades a ataques físicos, espirituais e efeitos anormais.

* Physical Resistance
* Earth Elemental Resistance
* Pain Nullification
* Magic Resistance
* Fatigue Resistance

---

## ⚔️ Artes — *Earth Style*

* Stone Smash: Golpe que pulveriza oponentes com força bruta.
* Earth Wall: Cria barreiras de pedra impenetráveis.
* Seismic Charge: Investida que causa tremores no solo.

---

## 🪄 Magias — *Earth Magic*

| Tipo | Exemplos |
|------|----------|
| **Ofensiva** | Stone Crush, Earthquake Slam |
| **Defensiva** | Rock Barrier, Iron Fortress |
| **Suporte** | Earth Mend, Strength Boost |
| **Elemental** | Boulder Strike, Mud Wave |

---

## 🧙‍♂️ Mystic Arts

* Stone Pulse: Pulso sísmico que desorienta inimigos.
* Earth Bind: Prende oponentes com correntes de pedra.
* Titan’s Wrath: Ataque massivo que combina terra e força bruta.

---

## 🗡️ Overblade

| Habilidade | Descrição |
|-----------|-----------|
| **Titan Smash** | Golpe que destrói defesas com energia sísmica. |

---

## 🔮 Magic-Weapon Art

| Habilidade | Descrição |
|-----------|-----------|
| **Earth Hammer** | Martelo infundido com mana telúrica, amplificando danos. |

---

## 📦 Other

* Instant Block: Cria uma barreira de terra instantânea.
* Stone Field: Transforma o terreno em uma área rochosa.
* Power Surge: Aumenta temporariamente a força física.

---

## 🧰 Equipamentos

* Magic Hammer
* Titan Armor
* Earth Crest
* Stone Gauntlets
    `
  },
  {
    id: "milim-nava",
    name: "Milim Nava",
    group: "tensei-shitara-slime-data-ken",
    description: `
# Milim Nava

---

## 🌟 Princesa Destruidora

Milim Nava, uma das Demon Lords mais antigas, é uma **força da natureza** com poder destrutivo incomparável. Apesar de sua aparência infantil, é extremamente perigosa.

---

## 😄 Personalidade Explosiva

Milim é **alegre, impulsiva e brincalhona**, mas sua fúria pode destruir nações. Ela vê Rimuru como seu melhor amigo e aliado.

---

## ⚡ Poder Incontrolável

Sua energia mágica e força física são **praticamente ilimitadas**, capazes de devastar exércitos com um único golpe.

---

## 🐉 Herança Dracônica

Como filha de um True Dragon, Milim possui **poderes dracônicos** que amplificam suas habilidades de combate.

---

## 🎯 Amizade e Destruição

Seu objetivo é **viver livremente e se divertir**, enquanto protege seus amigos, especialmente Rimuru, com sua força avassaladora.
    `,
    images: imageUrls.milimNava,
    skills: `
## 💠 Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Drago Nova, Lord of Destruction** | Libera explosões de energia dracônica que obliteram tudo. |
| **Star Wrath** | Amplifica ataques com base na emoção, causando destruição em massa. |

---

## 🧬 Intrinsic Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Dragon Factor** | Força e magia herdadas de sua linhagem dracônica. |
| **Infinite Mana** | Reserva de mana praticamente inesgotável. |

---

## 🔁 Former Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Wrathful King** | Versão inicial de Star Wrath, focada em ataques emocionais. |

---

## ⚙️ Unique Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Dragon Roar** | Rugido que causa danos sísmicos e paralisa inimigos. |
| **Star Burst** | Ataque de energia estelar que vaporiza alvos. |
| **Battle Frenzy** | Aumenta força e velocidade em estados de excitação. |

---

## ✨ Extra Skills

> Habilidades adicionais de combate, percepção e manipulação adquiridas com o tempo.

* Energy Manipulation
* Ultra Strength
* Ultra Speed
* Mana Perception
* Regeneration
* Dragon Aura
* Impact Resistance
* Magic Amplification
* Threat Detection
* Flight

---

## 📘 Common Skills

> Habilidades básicas de defesa, suporte, ataque e comunicação.

* Telepathy
* Coercion
* Energy Blast
* Quick Strike
* Power Surge

---

## 🛡️ Tolerances

> Resistências e imunidades a ataques físicos, espirituais e efeitos anormais.

* Physical Attack Nullification
* Magic Attack Nullification
* Pain Nullification
* Spiritual Attack Resistance
* Environmental Hazard Immunity

---

## ⚔️ Artes — *Draconic Style*

* Nova Strike: Ataque com energia dracônica concentrada.
* Star Crash: Investida que causa explosões estelares.
* Dragon Barrage: Sequência de golpes rápidos e devastadores.

---

## 🪄 Magias — *Draconic Magic*

| Tipo | Exemplos |
|------|----------|
| **Ofensiva** | Nova Blast, Star Flare, Dragon Breath |
| **Defensiva** | Energy Shield, Star Barrier |
| **Suporte** | Mana Surge, Power Boost |
| **Elemental** | Meteor Strike, Plasma Wave |

---

## 🧙‍♂️ Mystic Arts

* Star Pulse: Pulso de energia que desorienta inimigos.
* Dragon Bind: Prende oponentes com energia dracônica.
* Nova Field: Cria uma área de energia destrutiva.

---

## 🗡️ Overblade

| Habilidade | Descrição |
|-----------|-----------|
| **Star Nova** | Ataque que combina energia estelar e dracônica, obliterando alvos. |

---

## 🔮 Magic-Weapon Art

| Habilidade | Descrição |
|-----------|-----------|
| **Dragon Claw** | Garras infundidas com mana dracônica, amplificando danos. |

---

## 📦 Other

* Instant Nova: Libera uma explosão de energia instantânea.
* Star Field: Cria uma área de energia estelar.
* Battle Command: Inspira aliados com sua presença.

---

## 🧰 Equipamentos

* Dragon Gauntlets
* Star Crown
* Mana Crystal Armor
* Draconic Amulet
    `
  },
  {
    id: "veldora-tempest",
    name: "Veldora Tempest",
    group: "tensei-shitara-slime-data-ken",
    description: `
# Veldora Tempest

---

## 🐉 O Dragão da Tempestade

Veldora é um **True Dragon**, conhecido como o Dragão da Tempestade, com poder para destruir nações. Após ser selado, foi libertado por Rimuru, tornando-se seu aliado.

---

## 😎 Personalidade Extravagante

Veldora é **arrogante, mas leal**, com uma paixão por mangás e um senso de humor único. Ele vê Rimuru como um irmão.

---

## ⚡ Poder Tempestuoso

Sua habilidade de manipular **tempestades e energia dracônica** o torna uma força imparável no campo de batalha.

---

## 🛡️ Guardião de Tempest

Como aliado de Rimuru, Veldora protege Tempest com seu poder, mas também busca **se divertir e aprender sobre o mundo humano**.

---

## 🎯 Liberdade e Amizade

Seu objetivo é **viver livremente ao lado de Rimuru**, explorando o mundo e enfrentando desafios com sua força avassaladora.
    `,
    images: imageUrls.veldoraTempest,
    skills: `
## 💠 Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Veldora, Lord of Storms** | Controle supremo sobre tempestades, causando destruição em massa. |
| **Dragon Sovereign** | Amplifica poderes dracônicos, ignorando resistências. |

---

## 🧬 Intrinsic Skills

| Habilidade | Descrição |
|-----------|-----------|
| **True Dragon Power** | Força e magia de um True Dragon, incomparável. |
| **Storm Affinity** | Conexão natural com tempestades e energia dracônica. |

---

## 🔁 Former Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Storm King** | Versão inicial de Veldora, focada em ataques de tempestade. |

---

## ⚙️ Unique Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Storm Roar** | Rugido que invoca tempestades devastadoras. |
| **Dragon Aura** | Aura que intimida e enfraquece oponentes. |
| **Tempest Strike** | Ataque com energia dracônica e relâmpagos. |

---

## ✨ Extra Skills

> Habilidades adicionais de combate, percepção e manipulação adquiridas com o tempo.

* Storm Manipulation
* Ultra Strength
* Ultra Speed
* Mana Perception
* Regeneration
* Flight
* Energy Manipulation
* Threat Detection
* Magic Amplification
* Wind Mastery

---

## 📘 Common Skills

> Habilidades básicas de defesa, suporte, ataque e comunicação.

* Telepathy
* Coercion
* Lightning Blast
* Wind Slash
* Quick Strike

---

## 🛡️ Tolerances

> Resistências e imunidades a ataques físicos, espirituais e efeitos anormais.

* Physical Attack Nullification
* Magic Attack Nullification
* Pain Nullification
* Spiritual Attack Resistance
* Environmental Hazard Immunity

---

## ⚔️ Artes — *Draconic Style*

* Tempest Slash: Corte com energia de tempestade.
* Storm Charge: Investida com relâmpagos e ventos.
* Dragon Barrage: Sequência de ataques dracônicos.

---

## 🪄 Magias — *Storm Magic*

| Tipo | Exemplos |
|------|----------|
| **Ofensiva** | Thunderstrike, Tempest Vortex, Dragon Breath |
| **Defensiva** | Storm Barrier, Energy Shield |
| **Suporte** | Mana Surge, Speed Boost |
| **Elemental** | Lightning Wave, Gale Strike |

---

## 🧙‍♂️ Mystic Arts

* Storm Pulse: Pulso de energia que desorienta inimigos.
* Dragon Bind: Prende oponentes com energia dracônica.
* Tempest Field: Cria uma área de tempestades destrutivas.

---

## 🗡️ Overblade

| Habilidade | Descrição |
|-----------|-----------|
| **Storm Nova** | Ataque que combina relâmpagos e ventos, obliterando alvos. |

---

## 🔮 Magic-Weapon Art

| Habilidade | Descrição |
|-----------|-----------|
| **Dragon Fang** | Garras infundidas com mana dracônica, amplificando danos. |

---

## 📦 Other

* Instant Tempest: Libera uma tempestade instantânea.
* Storm Field: Transforma o terreno em uma área de relâmpagos.
* Dragon Command: Inspira aliados com sua presença.

---

## 🧰 Equipamentos

* Dragon Claws
* Storm Armor
* Tempest Crest
* Draconic Amulet
    `
  },
// Sousou no Frieren Characters
    {
    id: "frieren",
    name: "Frieren",
    group: "sousou-no-frieren",
    description: `
# Frieren

---

## 🧙‍♀️ A Maga Eterna

Frieren é uma elfa maga com mais de mil anos, famosa por sua **magia extremamente poderosa** e sua perspectiva única sobre tempo e mortalidade. Após derrotar o Rei Demônio com o grupo de Himmel, ela viaja para entender melhor os humanos e preservar memórias.

---

## 🧠 Mestra da Magia

Possui um conhecimento mágico incomparável, capaz de usar feitiços antigos e criar magias personalizadas. Sua **mente analítica** desmonta magias complexas dos oponentes com facilidade.

---

## 😶 Personalidade Distante, mas Carinhosa

Embora pareça fria devido à sua longevidade, Frieren tem um **coração gentil** e forma laços profundos com Fern e Stark, tratando-os como aprendizes e família.

---

## 🕰️ Reflexão sobre o Tempo

Seu objetivo é **compreender as conexões humanas**, colecionando feitiços e memórias enquanto reflete sobre sua existência e o legado de Himmel.

---

## ⚡ Curiosidade Infantil

Apesar de sua sabedoria, Frieren é fascinada por magias "inúteis" e baús de tesouro, mostrando um lado **excêntrico e quase infantil**.
    `,
    images: imageUrls.frieren,
    skills: `
## 💠 Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Zoltraak, Arcane Devastation** | Feitiço ofensivo supremo que oblitera alvos com precisão mágica devastadora, perfurando defesas. |
| **Mana Veil, Eternal Shroud** | Oculta sua presença mágica e manipula mana em larga escala, criando ilusões ou barreiras. |

---

## 🧬 Intrinsic Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Elven Longevity** | Resistência natural ao envelhecimento e imunidade a doenças, permitindo séculos de aprendizado. |
| **Mana Mastery** | Controle absoluto sobre mana, possibilitando feitiços complexos sem esforço. |

---

## 🔁 Former Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Arcane Mastery** | Versão inicial de Zoltraak, focada em manipulação de energia mágica pura. |

---

## ⚙️ Unique Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Spell Analysis** | Analisa e neutraliza magias inimigas instantaneamente, desvendando sua estrutura. |
| **Memory Echo** | Acessa memórias mágicas para recriar feitiços antigos ou aprender novos. |
| **Arcane Intuition** | Percepção sobrenatural para detectar magia, armadilhas e intenções ocultas. |

---

## ✨ Extra Skills

> Habilidades adicionais de combate, percepção e manipulação adquiridas com o tempo.

* Fire Manipulation
* Ice Magic
* Barrier Creation
* Flight Magic
* Mana Perception
* Spatial Detection
* Illusion Magic
* Binding Spells
* Healing Magic
* Light Manipulation

---

## 📘 Common Skills

> Habilidades básicas de defesa, suporte, ataque e comunicação.

* Mana Bolt
* Telepathy
* Light Shield
* Quick Cast
* Minor Heal

---

## 🛡️ Tolerances

> Resistências e imunidades a ataques físicos, espirituais e efeitos anormais.

* Magic Resistance
* Mental Attack Nullification
* Physical Attack Resistance
* Environmental Hazard Immunity

---

## ⚔️ Artes — *Arcane Style*

* Zoltraak Strike: Dispara uma rajada concentrada de Zoltraak.
* Mana Pulse: Pulso de mana que desorienta inimigos.
* Arcane Bind: Prende oponentes com correntes mágicas.

---

## 🪄 Magias — *Arcane Magic*

| Tipo | Exemplos |
|------|----------|
| **Ofensiva** | Zoltraak, Hellfire Burst, Lightning Strike |
| **Defensiva** | Mana Shield, Absolute Barrier |
| **Suporte** | Healing Light, Mana Restoration |
| **Ilusão** | Mirage Veil, Phantom Clone |
| **Espacial** | Teleport, Dimensional Rift |
| **Elemental** | Ice Storm, Flame Vortex, Wind Blade |

---

## 🧙‍♂️ Mystic Arts

* Starlight Barrage: Chuva de projéteis mágicos brilhantes.
* Mystic Seal: Sela magia ou movimento de inimigos.
* Arcane Wave: Onda de energia que neutraliza feitiços.

---

## 🗡️ Overblade

| Habilidade | Descrição |
|-----------|-----------|
| **Arcane Slash** | Corte infundido com mana pura, destruindo barreiras mágicas. |

---

## 🔮 Magic-Weapon Art

| Habilidade | Descrição |
|-----------|-----------|
| **Eternal Staff Strike** | Ataque com cajado infundido de mana arcana, amplificando danos. |

---

## 📦 Other

* Mana Surge: Aumenta temporariamente o fluxo de mana para feitiços.
* Spell Weave: Combina múltiplos feitiços em um único ataque.
* Treasure Sense: Detecta baús e artefatos mágicos com precisão.

---

## 🧰 Equipamentos

* Staff of Eternity
* Elven Robes
* Mana Crystal Pendant
* Grimoire Collection
    `
  },
  {
    id: "himmel",
    name: "Himmel",
    group: "sousou-no-frieren",
    description: `
# Himmel

---

## 🦸‍♂️ O Herói Lendário

Himmel foi o líder do grupo que derrotou o Rei Demônio, um espadachim carismático e corajoso. Sua **bondade e determinação** inspiraram Frieren e outros.

---

## ⚔️ Mestre Espadachim

Himmel combinava **habilidade com espada** e carisma, liderando seu grupo com confiança e derrotando inimigos com facilidade.

---

## ❤️ Coração de Herói

Sua **personalidade altruísta e otimista** fazia dele um líder natural, sempre colocando o bem-estar de seus aliados acima do próprio.

---

## 🕊️ Legado Eterno

Embora já falecido, Himmel continua a influenciar Frieren, que carrega suas memórias e valores em sua jornada.

---

## 🎯 Missão de Paz

Seu objetivo era **criar um mundo em paz**, um sonho que ele perseguiu até o fim, inspirando gerações.
    `,
    images: imageUrls.himmel,
    skills: `
## 💠 Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Hero’s Blade** | Corte lendário que combina velocidade e poder, atravessando defesas. |
| **Aura of Hope** | Inspira aliados, aumentando sua moral e força em batalha. |

---

## 🧬 Intrinsic Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Heroic Charisma** | Influência natural que motiva e coordena aliados. |
| **Sword Mastery** | Domínio supremo da espada, com precisão impecável. |

---

## 🔁 Former Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Radiant Blade** | Versão inicial de Hero’s Blade, focada em ataques luminosos. |

---

## ⚙️ Unique Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Light Slash** | Ataque rápido que cega oponentes com luz intensa. |
| **Courageous Charge** | Investida poderosa que quebra defesas físicas e mágicas. |
| **Leadership Aura** | Aumenta a eficácia de aliados próximos em combate. |

---

## ✨ Extra Skills

> Habilidades adicionais de combate, percepção e manipulação adquiridas com o tempo.

* Precision Strike
* Defensive Parry
* Speed Enhancement
* Battle Perception
* Endurance Boost
* Light Manipulation
* Threat Detection
* Mana Perception
* Reflex Boost
* Aura Amplification

---

## 📘 Common Skills

> Habilidades básicas de defesa, suporte, ataque e comunicação.

* Quick Slash
* Body Armor
* Telepathy
* Light Bolt
* Minor Heal

---

## 🛡️ Tolerances

> Resistências e imunidades a ataques físicos, espirituais e efeitos anormais.

* Physical Attack Resistance
* Mental Resistance
* Fatigue Nullification
* Magic Resistance
* Curse Resistance

---

## ⚔️ Artes — *Heroic Style*

* Radiant Slash: Corte brilhante que ilumina e corta inimigos.
* Heroic Thrust: Investida precisa com energia heroica.
* Victory Stance: Postura que aumenta resistência e intimida oponentes.

---

## 🪄 Magias — *Light Magic*

| Tipo | Exemplos |
|------|----------|
| **Ofensiva** | Radiant Strike, Light Spear |
| **Defensiva** | Holy Shield, Aura Barrier |
| **Suporte** | Healing Glow, Morale Boost |
| **Ilusão** | Light Mirage, Flash Veil |

---

## 🧙‍♂️ Mystic Arts

* Heroic Pulse: Pulso de energia que fortalece aliados.
* Light Bind: Prende oponentes com correntes de luz.
* Radiant Wave: Onda de luz que purifica maldições.

---

## 🗡️ Overblade

| Habilidade | Descrição |
|-----------|-----------|
| **Holy Slash** | Corte infundido com energia sagrada, destruindo defesas demoníacas. |

---

## 🔮 Magic-Weapon Art

| Habilidade | Descrição |
|-----------|-----------|
| **Legendary Blade** | Espada infundida com mana heroica, amplificando danos. |

---

## 📦 Other

* Battle Command: Coordena aliados com precisão estratégica.
* Light Surge: Aumenta temporariamente o brilho de ataques.
* Aura Field: Cria uma área que fortalece aliados.

---

## 🧰 Equipamentos

* Sword of Legends
* Hero’s Armor
* Crested Shield
* Amulet of Valor
    `
  },
  {
    id: "heiter",
    name: "Heiter",
    group: "sousou-no-frieren",
    description: `
# Heiter

---

## 🍺 Sacerdote Alcoólatra

Heiter é um padre do grupo de Himmel, conhecido por sua **sabedoria espiritual** e tendência a beber em excesso, o que esconde sua profunda lealdade.

---

## 🙏 Fé e Magia Sagrada

Como sacerdote, Heiter domina **magias sagradas**, especializando-se em purificação, cura e banimento de forças demoníacas.

---

## 😄 Personalidade Descontraída

Apesar de sua aparência desleixada, Heiter é **confiável e compassivo**, sempre apoiando seus amigos nos momentos mais difíceis.

---

## 🛡️ Protetor Espiritual

Sua magia protege aliados de ataques demoníacos, enquanto sua **sabedoria guia o grupo** em tempos de crise.

---

## 🎯 Vida Simples

Heiter deseja **viver pacificamente**, ajudando os necessitados com sua magia e desfrutando de um bom vinho.
    `,
    images: imageUrls.heiter,
    skills: `
## 💠 Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Holy Purge** | Expurga energias demoníacas em grande escala, purificando áreas inteiras. |
| **Divine Grace** | Restaura aliados com energia sagrada, curando ferimentos graves. |

---

## 🧬 Intrinsic Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Spiritual Insight** | Detecta presenças demoníacas e mágicas com precisão. |
| **Holy Aura** | Proteção natural contra magia negra e maldições. |

---

## 🔁 Former Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Sacred Light** | Versão inicial de Holy Purge, focada em purificação básica. |

---

## ⚙️ Unique Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Purification Wave** | Remove maldições e efeitos negativos de aliados. |
| **Healing Light** | Cura ferimentos graves rapidamente com energia sagrada. |
| **Sacred Ward** | Cria barreiras que bloqueiam ataques espirituais e demoníacos. |

---

## ✨ Extra Skills

> Habilidades adicionais de combate, percepção e manipulação adquiridas com o tempo.

* Holy Bolt
* Mana Restoration
* Anti-Demon Aura
* Spiritual Binding
* Light Shield
* Mana Perception
* Curse Nullification
* Healing Touch
* Divine Sense
* Barrier Creation

---

## 📘 Common Skills

> Habilidades básicas de defesa, suporte, ataque e comunicação.

* Telepathy
* Light Flash
* Minor Heal
* Sacred Bolt
* Protective Ward

---

## 🛡️ Tolerances

> Resistências e imunidades a ataques físicos, espirituais e efeitos anormais.

* Spiritual Attack Resistance
* Magic Resistance
* Mental Fortitude
* Curse Nullification
* Fatigue Resistance

---

## ⚔️ Artes — *Sacred Style*

* Divine Strike: Ataque com energia sagrada que purifica alvos.
* Holy Bind: Prende oponentes com correntes de luz sagrada.
* Sacred Pulse: Pulso que fortalece aliados e enfraquece demônios.

---

## 🪄 Magias — *Holy Magic*

| Tipo | Exemplos |
|------|----------|
| **Sagrada** | Holy Smite, Divine Light |
| **Cura** | Mass Heal, Vitality Surge |
| **Defensiva** | Sacred Barrier, Spirit Shield |
| **Suporte** | Mana Restoration, Divine Boost |

---

## 🧙‍♂️ Mystic Arts

* Holy Flare: Explosão de luz que purifica inimigos.
* Sacred Seal: Sela magia ou movimento de oponentes.
* Divine Wave: Onda de energia que cura aliados e danifica demônios.

---

## 🗡️ Overblade

| Habilidade | Descrição |
|-----------|-----------|
| **Purifying Strike** | Ataque com cajado que purifica maldições e magia negra. |

---

## 🔮 Magic-Weapon Art

| Habilidade | Descrição |
|-----------|-----------|
| **Holy Staff Smite** | Ataque com cajado infundido de mana sagrada. |

---

## 📦 Other

* Mana Surge: Aumenta temporariamente o fluxo de mana para aliados.
* Spirit Ward: Protege contra maldições e efeitos espirituais.
* Healing Aura: Regenera aliados próximos gradualmente.

---

## 🧰 Equipamentos

* Holy Staff
* Priest’s Robes
* Sacred Chalice
* Amulet of Faith
    `
  },
  {
    id: "eisen",
    name: "Eisen",
    group: "sousou-no-frieren",
    description: `
# Eisen

---

## 🛡️ O Guerreiro Anão

Eisen é o guerreiro anão do grupo de Himmel, conhecido por sua **força física imensa** e resistência inigualável, sendo a linha de frente contra o Rei Demônio.

---

## 💪 Mestre do Combate

Sua habilidade com machados e sua **durabilidade natural** o tornam um tanque formidável, enfrentando inimigos com coragem inabalável.

---

## 😐 Personalidade Reservada

Eisen é **calmo e reservado**, mas profundamente leal aos seus companheiros, especialmente Himmel, com quem compartilhou muitas batalhas.

---

## 🧑‍🏫 Mentor de Stark

Como mentor de Stark, Eisen transmite sua **sabedoria e técnicas de combate**, guiando o jovem guerreiro em sua jornada.

---

## 🎯 Vida de Honra

Seu objetivo é **viver com honra**, protegendo seus aliados e deixando um legado através de Stark.
    `,
    images: imageUrls.eisen,
    skills: `
## 💠 Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Titan’s Might** | Golpe devastador que combina força bruta e energia telúrica. |
| **Iron Fortress** | Amplifica resistência, tornando-o praticamente invulnerável. |

---

## 🧬 Intrinsic Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Dwarven Endurance** | Resistência física excepcional, típica de anões. |
| **Combat Mastery** | Habilidade natural para combate corpo a corpo. |

---

## 🔁 Former Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Iron Will** | Versão inicial de Iron Fortress, focada em resistência básica. |

---

## ⚙️ Unique Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Earth Shatter** | Golpe com machado que causa tremores no solo. |
| **Defensive Stance** | Postura que reduz danos recebidos significativamente. |
| **Titan’s Roar** | Grito que intimida e desorienta inimigos. |

---

## ✨ Extra Skills

> Habilidades adicionais de combate, percepção e manipulação adquiridas com o tempo.

* Axe Mastery
* Strength Surge
* Impact Resistance
* Earth Manipulation
* Threat Detection
* Endurance Boost
* Heavy Strike
* Mana Perception
* Pain Tolerance
* Defensive Aura

---

## 📘 Common Skills

> Habilidades básicas de defesa, suporte, ataque e comunicação.

* Body Armor
* Heavy Slash
* Telepathy
* Stone Smash
* Quick Block

---

## 🛡️ Tolerances

> Resistências e imunidades a ataques físicos, espirituais e efeitos anormais.

* Physical Attack Nullification
* Impact Resistance
* Fatigue Resistance
* Magic Resistance
* Environmental Hazard Resistance

---

## ⚔️ Artes — *Titan Style*

* Earth Cleave: Corte com machado que gera ondas de choque.
* Iron Charge: Investida que esmaga defesas inimigas.
* Titan’s Smash: Golpe que pulveriza alvos com força bruta.

---

## 🪄 Magias — *Earth Magic*

| Tipo | Exemplos |
|------|----------|
| **Ofensiva** | Stone Crush, Earthquake Slam |
| **Defensiva** | Rock Barrier, Iron Skin |
| **Suporte** | Strength Boost, Earth Mend |
| **Elemental** | Boulder Strike, Mud Wave |

---

## 🧙‍♂️ Mystic Arts

* Stone Pulse: Pulso sísmico que desorienta inimigos.
* Earth Bind: Prende oponentes com correntes de pedra.
* Titan’s Wrath: Ataque massivo com energia telúrica.

---

## 🗡️ Overblade

| Habilidade | Descrição |
|-----------|-----------|
| **Titan Cleave** | Corte com machado que destrói defesas físicas e mágicas. |

---

## 🔮 Magic-Weapon Art

| Habilidade | Descrição |
|-----------|-----------|
| **Iron Axe Strike** | Ataque com machado infundido de mana telúrica. |

---

## 📦 Other

* Instant Block: Cria uma barreira de terra instantânea.
* Stone Field: Transforma o terreno em uma área rochosa.
* Power Surge: Aumenta temporariamente a força física.

---

## 🧰 Equipamentos

* Titan Axe
* Dwarven Armor
* Earth Crest
* Warrior’s Gauntlets
    `
  },
  {
    id: "fern",
    name: "Fern",
    group: "sousou-no-frieren",
    description: `
# Fern

---

## 🧙‍♀️ A Aprendiz Prodígio

Fern é uma jovem maga humana, discípula de Frieren. Sua **disciplina e talento natural** a tornam uma das magas mais promissoras de sua geração.

---

## 🧠 Foco e Precisão

Com uma **mente afiada** e controle excepcional de mana, Fern executa feitiços com precisão cirúrgica, rivalizando até mesmo magos mais experientes.

---

## 😤 Lealdade e Senso de Dever

Fern é leal a Frieren, mas não hesita em corrigi-la quando necessário. Sua **personalidade séria e prática** esconde um profundo carinho por seus mestres e amigos.

---

## ⚔️ Força em Crescimento

Apesar de jovem, Fern enfrenta desafios com **coragem e determinação**, usando sua magia para proteger aqueles que ama.

---

## 🎯 Objetivo Simples

Seu objetivo é **tornar-se uma maga tão grande quanto Frieren**, honrando o legado de seus predecessores enquanto forja seu próprio caminho.
    `,
    images: imageUrls.fern,
    skills: `
## 💠 Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Zoltraak Mastery** | Domínio avançado do feitiço Zoltraak, com precisão letal e potência ampliada. |
| **Mana Flow** | Amplifica o fluxo de mana para feitiços contínuos e poderosos. |

---

## 🧬 Intrinsic Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Mana Precision** | Controle fino de mana para feitiços altamente detalhados e eficientes. |
| **Combat Reflexes** | Reflexos rápidos para reagir a ameaças mágicas instantaneamente. |

---

## 🔁 Former Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Mana Control** | Versão inicial de Mana Flow, focada em manipulação básica de mana. |

---

## ⚙️ Unique Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Mana Suppression** | Oculta sua presença mágica, ideal para ataques furtivos. |
| **Quick Cast** | Reduz o tempo de lançamento de feitiços significativamente. |
| **Barrier Weave** | Cria barreiras mágicas complexas e resistentes a ataques. |

---

## ✨ Extra Skills

> Habilidades adicionais de combate, percepção e manipulação adquiridas com o tempo.

* Mana Detection
* Light Magic
* Defensive Wards
* Elemental Strike
* Healing Touch
* Speed Enhancement
* Illusion Crafting
* Mana Perception
* Binding Magic
* Precision Casting

---

## 📘 Common Skills

> Habilidades básicas de defesa, suporte, ataque e comunicação.

* Mana Bolt
* Telepathy
* Light Shield
* Minor Heal
* Quick Cast

---

## 🛡️ Tolerances

> Resistências e imunidades a ataques físicos, espirituais e efeitos anormais.

* Magic Resistance
* Mental Fortitude
* Physical Endurance
* Curse Resistance
* Fatigue Resistance

---

## ⚔️ Artes — *Arcane Style*

* Zoltraak Burst: Dispara uma rajada concentrada de Zoltraak.
* Mana Bind: Prende oponentes com correntes de mana.
* Arcane Pulse: Pulso de mana que desorienta inimigos.

---

## 🪄 Magias — *Arcane Magic*

| Tipo | Exemplos |
|------|----------|
| **Ofensiva** | Zoltraak, Fire Bolt, Thunder Arc |
| **Defensiva** | Mana Wall, Protective Sphere |
| **Suporte** | Minor Heal, Mana Boost |
| **Elemental** | Wind Slash, Ice Shard |
| **Ilusão** | Phantom Veil, False Image |

---

## 🧙‍♂️ Mystic Arts

* Arcane Flare: Explosão de mana que neutraliza feitiços inimigos.
* Mana Seal: Sela magia ou movimento de oponentes.
* Light Wave: Onda de energia que fortalece aliados.

---

## 🗡️ Overblade

| Habilidade | Descrição |
|-----------|-----------|
| **Mana Slash** | Corte infundido com mana arcana, perfurando defesas. |

---

## 🔮 Magic-Weapon Art

| Habilidade | Descrição |
|-----------|-----------|
| **Apprentice Staff Strike** | Ataque com cajado infundido de mana, amplificando danos. |

---

## 📦 Other

* Mana Surge: Aumenta temporariamente o fluxo de mana.
* Spell Precision: Garante acertos críticos com feitiços.
* Barrier Field: Cria uma área de proteção mágica.

---

## 🧰 Equipamentos

* Apprentice Staff
* Mana-Infused Cloak
* Crystal Amulet
* Magic Crest
    `
  },
  {
    id: "stark",
    name: "Stark",
    group: "sousou-no-frieren",
    description: `
# Stark

---

## ⚔️ O Guerreiro Valente

Stark é um jovem guerreiro, discípulo de Eisen, que viaja com Frieren e Fern. Sua **força física e habilidade com machado** o tornam um combatente formidável.

---

## 😅 Coragem com Timidez

Apesar de sua bravura em batalha, Stark é **tímido e inseguro** fora do combate, especialmente com Fern, mas sempre se esforça para proteger seus amigos.

---

## 🛡️ Protetor Leal

Stark coloca a segurança de seus companheiros acima de tudo, usando sua **resistência e habilidades defensivas** para enfrentar inimigos poderosos.

---

## 💪 Crescimento Contínuo

Treinado por Eisen, Stark está em constante evolução, buscando **superar suas inseguranças** e provar seu valor como guerreiro.

---

## 🎯 Sonho de Honra

Seu objetivo é **viver como um verdadeiro herói**, honrando o legado de Eisen e protegendo aqueles que dependem dele.
    `,
    images: imageUrls.stark,
    skills: `
## 💠 Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Axe of Valor** | Golpe devastador com energia concentrada no machado, quebrando defesas. |
| **Iron Resolve** | Aumenta resistência e força em momentos críticos, ignorando danos. |

---

## 🧬 Intrinsic Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Warrior’s Stamina** | Resistência física acima da média, permitindo longas batalhas. |
| **Combat Instinct** | Reflexos naturais para combate corpo a corpo, antecipando ataques. |

---

## 🔁 Former Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Valor Strike** | Versão inicial de Axe of Valor, focada em ataques poderosos. |

---

## ⚙️ Unique Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Shockwave Strike** | Golpe que gera ondas de impacto ao atingir o solo, desorientando inimigos. |
| **Defensive Stance** | Postura que reduz danos recebidos significativamente. |
| **Battle Roar** | Grito que intimida inimigos, reduzindo sua precisão e moral. |

---

## ✨ Extra Skills

> Habilidades adicionais de combate, percepção e manipulação adquiridas com o tempo.

* Axe Mastery
* Strength Surge
* Pain Tolerance
* Speed Burst
* Threat Detection
* Endurance Boost
* Impact Resistance
* Mana Perception
* Heavy Strike
* Defensive Aura

---

## 📘 Common Skills

> Habilidades básicas de defesa, suporte, ataque e comunicação.

* Body Armor
* Heavy Slash
* Telepathy
* Quick Block
* Power Strike

---

## 🛡️ Tolerances

> Resistências e imunidades a ataques físicos, espirituais e efeitos anormais.

* Physical Attack Resistance
* Impact Resistance
* Fatigue Resistance
* Magic Resistance
* Pain Resistance

---

## ⚔️ Artes — *Warrior Style*

* Heavy Slash: Corte poderoso que esmaga defesas.
* Ground Shatter: Golpe que causa tremores no solo.
* Valor Charge: Investida que combina força e velocidade.

---

## 🪄 Magias — *Physical Magic*

| Tipo | Exemplos |
|------|----------|
| **Ofensiva** | Power Slash, Shockwave Burst |
| **Defensiva** | Iron Skin, Force Barrier |
| **Suporte** | Strength Boost, Endurance Surge |
| **Elemental** | Stone Strike, Impact Wave |

---

## 🧙‍♂️ Mystic Arts

* Battle Pulse: Pulso que intimida e desorienta inimigos.
* Iron Bind: Prende oponentes com energia física.
* Valor Wave: Onda de energia que fortalece aliados.

---

## 🗡️ Overblade

| Habilidade | Descrição |
|-----------|-----------|
| **Valor Cleave** | Corte com machado que ignora defesas físicas. |

---

## 🔮 Magic-Weapon Art

| Habilidade | Descrição |
|-----------|-----------|
| **Heroic Axe Strike** | Ataque com machado infundido de mana, amplificando danos. |

---

## 📦 Other

* Instant Block: Cria uma defesa física instantânea.
* Power Surge: Aumenta temporariamente a força física.
* Battle Field: Cria uma área que amplifica ataques corpo a corpo.

---

## 🧰 Equipamentos

* Hero’s Axe
* Reinforced Armor
* Warrior’s Gauntlets
* Crest of Valor
    `
  },

  // The Eminence in Shadow Characters
  {
    id: "cid-kagenou",
    name: "Cid Kagenou / Shadow",
    group: "kage-no-jitsuryokusha",
    description: `
# Cid Kagenou / Shadow

---

## 🖤 O Mestre das Sombras

Cid Kagenou, conhecido como **Shadow**, lidera a Shadow Garden. Um **gênio teatral** que manipula eventos nos bastidores enquanto finge ser um estudante comum.

---

## 🧠 Gênio Estratégico

Cid combina **inteligência tática** com uma obsessão por dramatismo. Sua **força avassaladora** resolve conflitos antes que seus planos sejam necessários.

---

## ⚔️ Força Insuperável

Como Shadow, ele possui habilidades de combate que desafiam a lógica, aniquilando exércitos com **técnicas de espada impecáveis** e magia criativa.

---

## 😎 Fachada de Mediano

Na vida cotidiana, Cid é um **estudante desajeitado**, manipulando situações para não chamar atenção, exceto como Shadow.

---

## 🎯 Sonho de Grandeza

Seu objetivo é ser o **verdadeiro poder por trás do mundo**, controlando tudo das sombras enquanto vive sua fantasia de anti-herói.
    `,
    images: imageUrls.cidKagenou,
    skills: `
## 💠 Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **I Am Atomic** | Explosão de energia mágica que aniquila tudo em uma área massiva. |
| **Shadow Dominion** | Controle absoluto sobre sombras, permitindo ataques furtivos e manipulação do ambiente. |

---

## 🧬 Intrinsic Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Mana Overdrive** | Aumenta exponencialmente o poder mágico temporariamente, superando limites. |
| **Perfect Body** | Reflexos, força e agilidade sobre-humanos, otimizados para combate. |

---

## 🔁 Former Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Dark Sovereign** | Versão inicial de Shadow Dominion, focada em manipulação básica de sombras. |

---

## ⚙️ Unique Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Shadow Step** | Teleporte instantâneo entre sombras, ideal para emboscadas. |
| **Blade of Darkness** | Corte que atravessa qualquer matéria com energia sombria. |
| **Mastermind** | Previsão precisa dos movimentos inimigos, antecipando estratégias. |

---

## ✨ Extra Skills

> Habilidades adicionais de combate, percepção e manipulação adquiridas com o tempo.

* Shadow Manipulation
* Stealth Mastery
* Ultra Speed Movement
* Magic Enhancement
* Perception Boost
* Barrier Creation
* Dark Flame
* Illusion Crafting
* Mana Absorption
* Precision Strike

---

## 📘 Common Skills

> Habilidades básicas de defesa, suporte, ataque e comunicação.

* Telepathy
* Dark Bolt
* Quick Slash
* Mana Manipulation
* Stealth Movement

---

## 🛡️ Tolerances

> Resistências e imunidades a ataques físicos, espirituais e efeitos anormais.

* Physical Attack Nullification
* Magic Resistance
* Mental Domination Immunity
* Pain Nullification
* Spiritual Attack Resistance

---

## ⚔️ Artes — *Shadow Style*

* Atomic Slash: Corte devastador com energia concentrada.
* Shadow Dance: Sequência de ataques rápidos usando sombras.
* Nightfall Strike: Golpe que envelopa o alvo em escuridão total.

---

## 🪄 Magias — *Dark Magic*

| Tipo | Exemplos |
|------|----------|
| **Ofensiva** | Dark Slash, Shadow Burst, Void Explosion |
| **Defensiva** | Shadow Veil, Dark Barrier |
| **Suporte** | Mana Recharge, Shadow Clone |
| **Espacial** | Shadow Portal, Dimensional Shift |
| **Ilusão** | Phantom Mirage, False Presence |

---

## 🧙‍♂️ Mystic Arts

* Void Pulse: Pulso de energia sombria que desorienta inimigos.
* Dark Bind: Prende oponentes com correntes de sombra.
* Shadow Flare: Explosão de energia negra que consome magia.

---

## 🗡️ Overblade

| Habilidade | Descrição |
|-----------|-----------|
| **Atomic Blade** | Corte infundido com energia atômica, destruindo tudo em seu caminho. |

---

## 🔮 Magic-Weapon Art

| Habilidade | Descrição |
|-----------|-----------|
| **Ebony Slash** | Lâmina infundida com mana sombria, amplificando danos. |

---

## 📦 Other

* Instant Shadow: Movimento instantâneo para qualquer sombra próxima.
* Dark Field: Cria uma área de escuridão que enfraquece inimigos.
* Mana Surge: Aumenta temporariamente o fluxo de mana para ataques.

---

## 🧰 Equipamentos

* Ebony Blade
* Shadow Cloak
* Mana Amplifier Ring
* Darkened Armor
    `
  },
  {
    id: "alpha",
    name: "Alpha",
    group: "kage-no-jitsuryokusha",
    description: `
# Alpha

---

## 🗡️ Líder da Shadow Garden

Alpha é a primeira membra da Shadow Garden e a **líder estratégica** do grupo. Sua beleza élfica e força incomparável a tornam uma aliada indispensável de Shadow.

---

## 🧠 Inteligência e Lealdade

Com uma **mente brilhante** e lealdade inabalável a Cid, Alpha gerencia as operações da Shadow Garden com precisão e eficiência.

---

## ⚔️ Guerreira Formidável

Sua habilidade com espada e magia a coloca entre os membros mais fortes da organização, capaz de enfrentar exércitos sozinha.

---

## 😌 Elegância Mortal

Alpha combina **graça e ferocidade**, mantendo uma postura calma enquanto executa missões com precisão letal.

---

## 🎯 Devoção Absoluta

Seu objetivo é **servir Shadow e destruir o Culto de Diablos**, acreditando plenamente na visão de Cid.
    `,
    images: imageUrls.alpha,
    skills: `
## 💠 Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Lunar Blade** | Corte mágico que brilha como a lua, devastando inimigos com precisão. |
| **Elven Grace** | Amplifica agilidade e reflexos, tornando-a intocável em combate. |

---

## 🧬 Intrinsic Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Elven Agility** | Velocidade e reflexos superiores, típicos de elfos. |
| **Mana Affinity** | Conexão natural com energia mágica, otimizando feitiços. |

---

## 🔁 Former Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Moonlit Strike** | Versão inicial de Lunar Blade, focada em ataques lunares básicos. |

---

## ⚙️ Unique Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Moonlit Strike** | Ataque rápido com energia lunar, perfurando defesas. |
| **Shadow Coordination** | Sincroniza ataques com aliados para maior eficiência. |
| **Mana Blade** | Infunde mana em sua espada, amplificando cortes. |

---

## ✨ Extra Skills

> Habilidades adicionais de combate, percepção e manipulação adquiridas com o tempo.

* Sword Mastery
* Stealth Movement
* Magic Amplification
* Perception Enhancement
* Barrier Creation
* Healing Magic
* Mana Perception
* Speed Surge
* Illusion Crafting
* Light Manipulation

---

## 📘 Common Skills

> Habilidades básicas de defesa, suporte, ataque e comunicação.

* Telepathy
* Quick Slash
* Mana Bolt
* Light Shield
* Minor Heal

---

## 🛡️ Tolerances

> Resistências e imunidades a ataques físicos, espirituais e efeitos anormais.

* Physical Attack Resistance
* Magic Resistance
* Mental Resistance
* Fatigue Resistance
* Curse Resistance

---

## ⚔️ Artes — *Lunar Style*

* Lunar Slash: Corte brilhante infundido com energia lunar.
* Moonlit Dance: Sequência de ataques rápidos e elegantes.
* Starlight Bind: Prende oponentes com correntes de luz lunar.

---

## 🪄 Magias — *Elven Magic*

| Tipo | Exemplos |
|------|----------|
| **Ofensiva** | Lunar Slash, Starlight Burst |
| **Defensiva** | Moon Shield, Mana Ward |
| **Suporte** | Healing Breeze, Mana Surge |
| **Ilusão** | Phantom Veil, False Image |

---

## 🧙‍♂️ Mystic Arts

* Lunar Flare: Explosão de luz lunar que neutraliza magia.
* Starlight Seal: Sela movimentos ou magia de inimigos.
* Moonlit Wave: Onda de energia que fortalece aliados.

---

## 🗡️ Overblade

| Habilidade | Descrição |
|-----------|-----------|
| **Lunar Cleave** | Corte infundido com mana lunar, destruindo defesas. |

---

## 🔮 Magic-Weapon Art

| Habilidade | Descrição |
|-----------|-----------|
| **Moonlit Sword Strike** | Ataque com espada infundida de mana lunar, amplificando danos. |

---

## 📦 Other

* Instant Flash: Movimento rápido usando luz lunar.
* Mana Surge: Aumenta temporariamente o fluxo de mana.
* Coordination Field: Cria uma área que melhora a sincronia de aliados.

---

## 🧰 Equipamentos

* Moonlit Sword
* Elven Armor
* Mana Crystal
* Lunar Amulet
    `
  },
  {
    id: "beta",
    name: "Beta",
    group: "kage-no-jitsuryokusha",
    description: `
# Beta

---

## 📘 A Intelectual da Shadow Garden

Beta é uma elfa estrategista e escritora, responsável por coletar informações e criar narrativas para a Shadow Garden. Sua **inteligência aguçada** é uma arma poderosa.

---

## 🧠 Mestra da Manipulação

Beta usa seu **charme e inteligência** para infiltrar-se em círculos sociais e obter informações cruciais para a organização.

---

## ⚔️ Combatente Ágil

Embora prefira táticas furtivas, Beta é uma **guerreira habilidosa**, combinando magia e combate corpo a corpo com precisão.

---

## 😊 Carisma e Astúcia

Sua **personalidade amigável** esconde uma mente calculista, capaz de manipular situações com facilidade.

---

## 🎯 Missão de Inteligência

Beta busca **expor as conspirações do Culto de Diablos**, usando seu conhecimento para apoiar a visão de Shadow.
    `,
    images: imageUrls.beta,
    skills: `
## 💠 Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Mind Weaver** | Manipula mentes com magia sutil, controlando intenções. |
| **Starlit Dance** | Sequência de ataques rápidos e elegantes, com precisão letal. |

---

## 🧬 Intrinsic Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Elven Charm** | Carisma natural que influencia outros com facilidade. |
| **Mana Sensitivity** | Detecta fluxos de mana com precisão, otimizando feitiços. |

---

## 🔁 Former Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Illusion Craft** | Versão inicial de Mind Weaver, focada em ilusões básicas. |

---

## ⚙️ Unique Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Illusion Craft** | Cria ilusões realistas para enganar inimigos. |
| **Swift Blade** | Ataques rápidos com lâminas infundidas de mana. |
| **Info Gatherer** | Extrai informações de alvos sem ser notada. |

---

## ✨ Extra Skills

> Habilidades adicionais de combate, percepção e manipulação adquiridas com o tempo.

* Stealth Mastery
* Illusion Magic
* Speed Strike
* Mana Detection
* Charm Aura
* Perception Enhancement
* Magic Amplification
* Quick Cast
* Healing Touch
* Mana Perception

---

## 📘 Common Skills

> Habilidades básicas de defesa, suporte, ataque e comunicação.

* Telepathy
* Light Bolt
* Quick Slash
* Mana Manipulation
* Minor Illusion

---

## 🛡️ Tolerances

> Resistências e imunidades a ataques físicos, espirituais e efeitos anormais.

* Mental Attack Resistance
* Magic Resistance
* Physical Endurance
* Curse Resistance
* Fatigue Resistance

---

## ⚔️ Artes — *Starlit Style*

* Star Slash: Corte infundido com energia estelar.
* Phantom Dance: Sequência de ataques furtivos com ilusões.
* Charm Bind: Prende oponentes com magia de charme.

---

## 🪄 Magias — *Elven Magic*

| Tipo | Exemplos |
|------|----------|
| **Ilusão** | Phantom Veil, False Image |
| **Ofensiva** | Star Slash, Mana Burst |
| **Suporte** | Charm Spell, Mana Link |
| **Defensiva** | Light Ward, Illusion Shield |

---

## 🧙‍♂️ Mystic Arts

* Starlight Flare: Explosão de energia estelar que desorienta.
* Phantom Seal: Sela movimentos com ilusões.
* Charm Wave: Onda que manipula emoções de inimigos.

---

## 🗡️ Overblade

| Habilidade | Descrição |
|-----------|-----------|
| **Starlit Slash** | Corte infundido com mana estelar, perfurando defesas. |

---

## 🔮 Magic-Weapon Art

| Habilidade | Descrição |
|-----------|-----------|
| **Starlight Dagger Strike** | Ataque com adaga infundida de mana, amplificando danos. |

---

## 📦 Other

* Instant Veil: Cria uma ilusão instantânea para escapar.
* Info Pulse: Detecta informações mágicas em uma área.
* Charm Field: Cria uma área que influencia emoções.

---

## 🧰 Equipamentos

* Starlight Dagger
* Elven Cloak
* Spy’s Amulet
* Mana Crystal
    `
  },
  {
    id: "gamma",
    name: "Gamma",
    group: "kage-no-jitsuryokusha",
    description: `
# Gamma

---

## 💼 A Mestra dos Negócios

Gamma é a gerente financeira da Shadow Garden, uma elfa com **habilidades excepcionais de gestão** e um talento nato para o comércio.

---

## 🧠 Gênio Logístico

Sua **inteligência prática** permite que ela administre recursos e operações da Shadow Garden com eficiência, garantindo seu sucesso financeiro.

---

## ⚔️ Combatente Equilibrada

Embora focada em logística, Gamma é uma **lutadora competente**, usando sua agilidade élfica e magia para proteger seus interesses.

---

## 😣 Desajeitada, mas Leal

Apesar de sua tendência a tropeçar, Gamma é **fiel a Shadow**, trabalhando incansavelmente para apoiar sua visão.

---

## 🎯 Império das Sombras

Seu objetivo é **construir uma rede de recursos** que sustente a Shadow Garden e destrua o Culto de Diablos.
    `,
    images: imageUrls.gamma,
    skills: `
## 💠 Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Resource Dominion** | Controle logístico de recursos mágicos e materiais, otimizando operações. |
| **Silver Strike** | Ataque preciso com energia prateada, devastando alvos. |

---

## 🧬 Intrinsic Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Elven Dexterity** | Agilidade natural para movimentos rápidos e precisos. |
| **Economic Insight** | Percepção aguçada para oportunidades financeiras e logísticas. |

---

## 🔁 Former Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Silver Blade** | Versão inicial de Silver Strike, focada em ataques básicos. |

---

## ⚙️ Unique Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Silver Blade** | Corte infundido com mana prateado, perfurando defesas. |
| **Resource Flow** | Otimiza o uso de mana e materiais em combate ou logística. |
| **Defensive Weave** | Cria barreiras de proteção rápida com mana. |

---

## ✨ Extra Skills

> Habilidades adicionais de combate, percepção e manipulação adquiridas com o tempo.

* Speed Movement
* Mana Efficiency
* Barrier Creation
* Precision Attack
* Logistic Analysis
* Mana Perception
* Healing Magic
* Stealth Movement
* Magic Amplification
* Threat Detection

---

## 📘 Common Skills

> Habilidades básicas de defesa, suporte, ataque e comunicação.

* Telepathy
* Quick Slash
* Mana Bolt
* Light Shield
* Resource Boost

---

## 🛡️ Tolerances

> Resistências e imunidades a ataques físicos, espirituais e efeitos anormais.

* Physical Resistance
* Magic Resistance
* Mental Fortitude
* Fatigue Resistance
* Curse Resistance

---

## ⚔️ Artes — *Silver Style*

* Silver Slash: Corte brilhante com energia prateada.
* Resource Bind: Prende oponentes com mana otimizada.
* Precision Strike: Ataque preciso que explora fraquezas.

---

## 🪄 Magias — *Elven Magic*

| Tipo | Exemplos |
|------|----------|
| **Ofensiva** | Silver Slash, Mana Spike |
| **Defensiva** | Silver Shield, Quick Ward |
| **Suporte** | Resource Boost, Mana Transfer |
| **Ilusão** | Light Veil, False Presence |

---

## 🧙‍♂️ Mystic Arts

* Silver Flare: Explosão de energia prateada que desorienta.
* Resource Seal: Sela movimentos com mana eficiente.
* Efficiency Wave: Onda que otimiza o desempenho de aliados.

---

## 🗡️ Overblade

| Habilidade | Descrição |
|-----------|-----------|
| **Silver Cleave** | Corte infundido com mana prateado, destruindo defesas. |

---

## 🔮 Magic-Weapon Art

| Habilidade | Descrição |
|-----------|-----------|
| **Silver Rapier Strike** | Ataque com rapieira infundida de mana, amplificando danos. |

---

## 📦 Other

* Instant Ward: Cria uma barreira instantânea de mana.
* Resource Pulse: Detecta recursos mágicos em uma área.
* Efficiency Field: Cria uma área que melhora a eficiência de aliados.

---

## 🧰 Equipamentos

* Silver Rapier
* Elven Merchant Robes
* Resource Amulet
* Mana Crystal
    `
  },
  {
    id: "delta",
    name: "Delta",
    group: "kage-no-jitsuryokusha",
    description: `
# Delta

---

## 🐺 A Fera Selvagem

Delta é uma beastkin da Shadow Garden, conhecida por sua **força bruta** e instintos animalescos. Sua lealdade a Shadow é inabalável.

---

## ⚔️ Guerreira Bestial

Delta combina **poder físico esmagador** com velocidade sobrenatural, tornando-se uma força da natureza em batalha.

---

## 😺 Personalidade Instintiva

Impulsiva e direta, Delta age com base em seus instintos, mas seu **coração leal** a mantém alinhada aos objetivos da Shadow Garden.

---

## 💪 Destruidora Implacável

Delta não hesita em destruir qualquer obstáculo no caminho de Shadow, usando sua **força avassaladora** para esmagar inimigos.

---

## 🎯 Lealdade Feroz

Seu objetivo é **servir Shadow com devoção total**, eliminando qualquer ameaça à sua visão.
    `,
    images: imageUrls.delta,
    skills: `
## 💠 Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Beast Roar** | Rugido que paralisa inimigos com medo e causa danos sônicos. |
| **Feral Rampage** | Sequência de ataques selvagens e devastadores, ignorando defesas. |

---

## 🧬 Intrinsic Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Beastkin Strength** | Força física sobrenatural, típica de beastkin. |
| **Primal Instincts** | Reflexos e sentidos aguçados para combate. |

---

## 🔁 Former Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Savage Roar** | Versão inicial de Beast Roar, focada em intimidação básica. |

---

## ⚙️ Unique Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Claw Strike** | Golpe com garras infundidas de mana, perfurando armaduras. |
| **Feral Charge** | Investida poderosa que derruba oponentes com força bruta. |
| **Savage Aura** | Intimida inimigos, reduzindo sua resistência e precisão. |

---

## ✨ Extra Skills

> Habilidades adicionais de combate, percepção e manipulação adquiridas com o tempo.

* Ultra Strength
* Speed Burst
* Pain Tolerance
* Threat Perception
* Regeneration
* Mana Perception
* Impact Resistance
* Stealth Movement
* Power Surge
* Instinct Boost

---

## 📘 Common Skills

> Habilidades básicas de defesa, suporte, ataque e comunicação.

* Telepathy
* Heavy Slash
* Quick Strike
* Body Armor
* Roar

---

## 🛡️ Tolerances

> Resistências e imunidades a ataques físicos, espirituais e efeitos anormais.

* Physical Attack Nullification
* Pain Nullification
* Impact Resistance
* Magic Resistance
* Fatigue Resistance

---

## ⚔️ Artes — *Feral Style*

* Feral Slash: Corte devastador com garras bestiais.
* Beast Charge: Investida que esmaga defesas.
* Wild Frenzy: Sequência de golpes rápidos e caóticos.

---

## 🪄 Magias — *Beast Magic*

| Tipo | Exemplos |
|------|----------|
| **Ofensiva** | Claw Burst, Feral Strike |
| **Defensiva** | Iron Hide, Force Barrier |
| **Suporte** | Strength Boost, Instinct Surge |
| **Elemental** | Earth Slam, Wind Rush |

---

## 🧙‍♂️ Mystic Arts

* Feral Pulse: Pulso que intimida e desorienta inimigos.
* Beast Bind: Prende oponentes com energia bestial.
* Savage Wave: Onda de energia que fortalece aliados.

---

## 🗡️ Overblade

| Habilidade | Descrição |
|-----------|-----------|
| **Feral Cleave** | Corte com garras que ignora defesas físicas. |

---

## 🔮 Magic-Weapon Art

| Habilidade | Descrição |
|-----------|-----------|
| **Beast Claw Strike** | Ataque com garras infundidas de mana, amplificando danos. |

---

## 📦 Other

* Instant Rush: Movimento rápido para atacar ou escapar.
* Savage Field: Cria uma área que amplifica instintos de combate.
* Power Surge: Aumenta temporariamente a força física.

---

## 🧰 Equipamentos

* Beastkin Claws
* Reinforced Hide Armor
* Feral Amulet
* Mana Crest
    `
  },
  {
    id: "epsilon",
    name: "Epsilon",
    group: "kage-no-jitsuryokusha",
    description: `
# Epsilon

---

## 🎶 A Mestra da Manipulação

Epsilon é uma elfa da Shadow Garden, conhecida por sua **habilidade de manipulação mágica** e sua beleza sedutora, que usa para enganar inimigos.

---

## 🧠 Especialista em Magia

Sua **inteligência mágica** permite que ela crie feitiços complexos e ilusões, confundindo adversários com facilidade.

---

## ⚔️ Combatente Versátil

Epsilon combina **magia e combate corpo a corpo**, usando sua agilidade e precisão para derrotar inimigos rapidamente.

---

## 😏 Charme Estratégico

Sua **personalidade confiante** e charme natural a tornam uma infiltradora habilidosa, manipulando situações a favor da Shadow Garden.

---

## 🎯 Devoção à Shadow Garden

Seu objetivo é **servir Shadow e desmantelar o Culto de Diablos**, usando suas habilidades para proteger a organização.
    `,
    images: imageUrls.epsilon,
    skills: `
## 💠 Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Mirage Weaver** | Cria ilusões em massa que confundem até os inimigos mais fortes. |
| **Arcane Precision** | Amplifica a precisão de ataques mágicos e físicos. |

---

## 🧬 Intrinsic Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Elven Reflexes** | Reflexos rápidos, típicos de elfos, para combate e esquiva. |
| **Mana Control** | Controle preciso de mana, otimizando feitiços complexos. |

---

## 🔁 Former Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Illusion Mastery** | Versão inicial de Mirage Weaver, focada em ilusões básicas. |

---

## ⚙️ Unique Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Illusion Strike** | Ataque combinado com ilusões que confunde oponentes. |
| **Mana Veil** | Oculta sua presença mágica, ideal para infiltração. |
| **Precision Cast** | Lança feitiços com precisão cirúrgica, atingindo alvos específicos. |

---

## ✨ Extra Skills

> Habilidades adicionais de combate, percepção e manipulação adquiridas com o tempo.

* Illusion Magic
* Stealth Mastery
* Mana Perception
* Speed Surge
* Magic Amplification
* Healing Touch
* Perception Boost
* Binding Magic
* Quick Cast
* Charm Aura

---

## 📘 Common Skills

> Habilidades básicas de defesa, suporte, ataque e comunicação.

* Telepathy
* Mana Bolt
* Quick Slash
* Light Shield
* Minor Illusion

---

## 🛡️ Tolerances

> Resistências e imunidades a ataques físicos, espirituais e efeitos anormais.

* Magic Resistance
* Mental Resistance
* Physical Endurance
* Curse Resistance
* Fatigue Resistance

---

## ⚔️ Artes — *Mirage Style*

* Mirage Slash: Corte combinado com ilusões que confunde alvos.
* Phantom Dance: Sequência de ataques rápidos com ilusões.
* Veil Bind: Prende oponentes com correntes ilusórias.

---

## 🪄 Magias — *Elven Magic*

| Tipo | Exemplos |
|------|----------|
| **Ilusão** | Phantom Mirage, False Presence |
| **Ofensiva** | Arcane Bolt, Mana Spike |
| **Suporte** | Mana Surge, Charm Spell |
| **Defensiva** | Illusion Ward, Light Barrier |

---

## 🧙‍♂️ Mystic Arts

* Mirage Flare: Explosão de ilusões que desorienta inimigos.
* Phantom Seal: Sela movimentos com magia ilusória.
* Charm Wave: Onda que manipula emoções de inimigos.

---

## 🗡️ Overblade

| Habilidade | Descrição |
|-----------|-----------|
| **Mirage Cleave** | Corte infundido com mana ilusória, confundindo alvos. |

---

## 🔮 Magic-Weapon Art

| Habilidade | Descrição |
|-----------|-----------|
| **Arcane Blade Strike** | Ataque com espada infundida de mana, amplificando danos. |

---

## 📦 Other

* Instant Mirage: Cria uma ilusão instantânea para escapar.
* Mana Pulse: Detecta fluxos de mana em uma área.
* Illusion Field: Cria uma área de ilusões que confunde inimigos.

---

## 🧰 Equipamentos

* Arcane Blade
* Elven Robes
* Mana Amulet
* Illusion Crest
    `
  },
  {
    id: "zeta",
    name: "Zeta",
    group: "kage-no-jitsuryokusha",
    description: `
# Zeta

---

## 🐆 A Assassina Silenciosa

Zeta é uma beastkin da Shadow Garden, conhecida por sua **agilidade felina** e habilidades de assassinato, movendo-se como uma sombra letal.

---

## ⚔️ Mestra da Furtividade

Sua **habilidade de combate furtivo** permite que ela elimine alvos antes que percebam sua presença, usando velocidade e precisão.

---

## 🧠 Tática e Instinto

Zeta combina **instintos animais** com uma mente tática, planejando ataques com eficiência mortal.

---

## 😼 Personalidade Fria

Fria e calculista, Zeta é **leal a Shadow**, mas mantém uma distância emocional, focada apenas em suas missões.

---

## 🎯 Destruição Silenciosa

Seu objetivo é **eliminar os inimigos da Shadow Garden**, especialmente o Culto de Diablos, com precisão e sigilo.
    `,
    images: imageUrls.zeta,
    skills: `
## 💠 Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Shadow Fang** | Ataque furtivo que elimina alvos instantaneamente com energia sombria. |
| **Feline Grace** | Amplifica agilidade e reflexos, tornando-a intocável. |

---

## 🧬 Intrinsic Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Beastkin Agility** | Velocidade e reflexos felinos, ideais para furtividade. |
| **Stealth Instinct** | Sentidos aguçados para detectar e evitar ameaças. |

---

## 🔁 Former Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Silent Strike** | Versão inicial de Shadow Fang, focada em ataques furtivos básicos. |

---

## ⚙️ Unique Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Silent Strike** | Ataque furtivo que ignora defesas e é quase indetectável. |
| **Shadow Cloak** | Oculta sua presença completamente, até mesmo de magos. |
| **Feline Dash** | Movimento ultra-rápido para atacar ou escapar. |

---

## ✨ Extra Skills

> Habilidades adicionais de combate, percepção e manipulação adquiridas com o tempo.

* Stealth Mastery
* Speed Surge
* Perception Boost
* Mana Perception
* Regeneration
* Threat Detection
* Illusion Crafting
* Precision Strike
* Magic Amplification
* Binding Magic

---

## 📘 Common Skills

> Habilidades básicas de defesa, suporte, ataque e comunicação.

* Telepathy
* Quick Slash
* Dark Bolt
* Stealth Movement
* Minor Illusion

---

## 🛡️ Tolerances

> Resistências e imunidades a ataques físicos, espirituais e efeitos anormais.

* Physical Resistance
* Magic Resistance
* Mental Resistance
* Fatigue Resistance
* Detection Nullification

---

## ⚔️ Artes — *Feline Style*

* Shadow Claw: Corte furtivo com garras infundidas de mana.
* Silent Dash: Investida rápida e silenciosa.
* Night Strike: Ataque que explora a escuridão para maior dano.

---

## 🪄 Magias — *Beast Magic*

| Tipo | Exemplos |
|------|----------|
| **Ofensiva** | Shadow Claw, Dark Spike |
| **Defensiva** | Stealth Veil, Shadow Barrier |
| **Suporte** | Speed Boost, Instinct Surge |
| **Ilusão** | Phantom Presence, False Shadow |

---

## 🧙‍♂️ Mystic Arts

* Shadow Pulse: Pulso que desorienta inimigos com energia sombria.
* Silent Bind: Prende oponentes com correntes furtivas.
* Feline Wave: Onda que amplifica a agilidade de aliados.

---

## 🗡️ Overblade

| Habilidade | Descrição |
|-----------|-----------|
| **Shadow Cleave** | Corte furtivo que ignora defesas e causa dano crítico. |

---

## 🔮 Magic-Weapon Art

| Habilidade | Descrição |
|-----------|-----------|
| **Feline Claw Strike** | Ataque com garras infundidas de mana, amplificando danos. |

---

## 📦 Other

* Instant Shadow: Movimento instantâneo para sombras próximas.
* Stealth Field: Cria uma área que oculta aliados.
* Precision Pulse: Detecta fraquezas de inimigos com precisão.

---

## 🧰 Equipamentos

* Shadow Claws
* Stealth Armor
* Feline Amulet
* Mana Crest
    `
  },
  {
    id: "eta",
    name: "Eta",
    group: "kage-no-jitsuryokusha",
    description: `
# Eta

---

## 🧪 A Gênio da Pesquisa

Eta é a cientista da Shadow Garden, especializada em **pesquisa mágica e tecnológica**, desenvolvendo armas e estratégias para a organização.

---

## 🧠 Mestra da Inovação

Sua **inteligência brilhante** permite que ela crie feitiços e dispositivos únicos, dando à Shadow Garden uma vantagem tática.

---

## ⚔️ Combatente Tática

Embora prefira o trabalho intelectual, Eta é capaz de usar **magia e armas personalizadas** para se defender em combate.

---

## 😐 Personalidade Analítica

Fria e focada, Eta é **leal a Shadow**, dedicando-se a criar ferramentas que apoiem sua visão.

---

## 🎯 Avanço da Shadow Garden

Seu objetivo é **fortalecer a Shadow Garden** com inovações, destruindo o Culto de Diablos através da tecnologia e magia.
    `,
    images: imageUrls.eta,
    skills: `
## 💠 Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Arcane Construct** | Cria construções mágicas e tecnológicas com efeitos devastadores. |
| **Tactical Mind** | Analisa o campo de batalha, otimizando estratégias em tempo real. |

---

## 🧬 Intrinsic Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Analytical Genius** | Capacidade de processar informações rapidamente para estratégias. |
| **Mana Efficiency** | Usa mana com eficiência máxima, otimizando feitiços e dispositivos. |

---

## 🔁 Former Ultimate Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Construct Mastery** | Versão inicial de Arcane Construct, focada em criações básicas. |

---

## ⚙️ Unique Skills

| Habilidade | Descrição |
|-----------|-----------|
| **Arcane Device** | Cria dispositivos mágicos com efeitos variados, como explosões ou barreiras. |
| **Tactical Scan** | Analisa fraquezas de inimigos e aliados em tempo real. |
| **Mana Construct** | Forma estruturas temporárias com mana para ataque ou defesa. |

---

## ✨ Extra Skills

> Habilidades adicionais de combate, percepção e manipulação adquiridas com o tempo.

* Mana Perception
* Magic Amplification
* Precision Casting
* Barrier Creation
* Healing Magic
* Stealth Movement
* Perception Boost
* Device Mastery
* Quick Cast
* Analytical Insight

---

## 📘 Common Skills

> Habilidades básicas de defesa, suporte, ataque e comunicação.

* Telepathy
* Mana Bolt
* Quick Cast
* Light Shield
* Minor Device

---

## 🛡️ Tolerances

> Resistências e imunidades a ataques físicos, espirituais e efeitos anormais.

* Magic Resistance
* Mental Resistance
* Physical Endurance
* Fatigue Resistance
* Curse Resistance

---

## ⚔️ Artes — *Tactical Style*

* Arcane Blast: Explosão de energia de um dispositivo mágico.
* Construct Bind: Prende oponentes com estruturas de mana.
* Tactical Strike: Ataque preciso baseado em análise de fraquezas.

---

## 🪄 Magias — *Arcane Magic*

| Tipo | Exemplos |
|------|----------|
| **Ofensiva** | Arcane Burst, Mana Spike |
| **Defensiva** | Construct Barrier, Energy Ward |
| **Suporte** | Mana Surge, Tactical Boost |
| **Ilusão** | False Construct, Phantom Device |

---

## 🧙‍♂️ Mystic Arts

* Arcane Pulse: Pulso que desativa magias inimigas.
* Construct Seal: Sela movimentos com estruturas mágicas.
* Tactical Wave: Onda que melhora a coordenação de aliados.

---

## 🗡️ Overblade

| Habilidade | Descrição |
|-----------|-----------|
| **Arcane Slash** | Corte infundido com mana de dispositivos, destruindo defesas. |

---

## 🔮 Magic-Weapon Art

| Habilidade | Descrição |
|-----------|-----------|
| **Construct Blade Strike** | Ataque com arma infundida de mana, amplificando danos. |

---

## 📦 Other

* Instant Construct: Cria um dispositivo mágico instantaneamente.
* Analysis Field: Cria uma área que analisa inimigos e aliados.
* Mana Surge: Aumenta temporariamente o fluxo de mana.

---

## 🧰 Equipamentos

* Arcane Device
* Tactical Robes
* Mana Analyzer
* Construct Crest
    `
  }

]