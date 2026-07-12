// Ide kell beírnod a dalod adatait és időzítéseit egyszer, és mindkét oldal ezt fogja használni!
const GITHUB_MP3_URL = "https://raw.githubusercontent.com/pintergabor/Hipochondria/main/Hipochondria.mp3";

const cardsData = [
  {
    keyword: "unwell",
    english: "I am terribly **unwell** tonight.",
    hungarian: "Szörnyen rosszul vagyok ma éjjel.",
    startTime: 43.0,
    endTime: 46.5,
    verseIndex: 1
  },
  {
    keyword: "suffer from",
    english: "I **suffer from** a secret thing.",
    hungarian: "Egy titkos dologban szenvedek.",
    startTime: 50.0,
    endTime: 53.5,
    verseIndex: 1
  },
  {
    keyword: "heart attack",
    english: "I think I have a **heart attack**.",
    hungarian: "Azt hiszem, szívrohamom van.",
    startTime: 57.0,
    endTime: 60.5,
    verseIndex: 2
  },
  {
    keyword: "unhealthy",
    english: "My lifestyle is very **unhealthy**.",
    hungarian: "Az életmódom nagyon egészségtelen.",
    startTime: 64.0,
    endTime: 67.5,
    verseIndex: 2
  },
  {
    keyword: "cancer",
    english: "This nasty **cancer** is inside.",
    hungarian: "Ez a félelmetes rák van odabent.",
    startTime: 71.0,
    endTime: 74.5,
    verseIndex: 3
  },
  {
    keyword: "flu",
    english: "I always catch a dangerous **flu**.",
    hungarian: "Mindig elkapok egy veszélyes influenzát.",
    startTime: 78.0,
    endTime: 81.5,
    verseIndex: 3
  },
  {
    keyword: "disabled",
    english: "My right leg is **disabled** now.",
    hungarian: "A jobb lábam rokkant / mozgássérült most.",
    startTime: 85.0,
    endTime: 88.5,
    verseIndex: 4
  },
  {
    keyword: "painful",
    english: "Every movement is very **painful**.",
    hungarian: "Minden mozdulat nagyon fájdalmas.",
    startTime: 92.0,
    endTime: 95.5,
    verseIndex: 4
  },
  {
    keyword: "be sick",
    english: "I will **be sick** very soon.",
    hungarian: "Hamarosan rosszul leszek / hányni fogok nagyon hamar.",
    startTime: 99.0,
    endTime: 102.5,
    verseIndex: 5
  },
  {
    keyword: "sore",
    english: "My throat is very **sore** today.",
    hungarian: "A torkom nagyon fájós / érzékeny ma.",
    startTime: 106.0,
    endTime: 109.5,
    verseIndex: 5
  },
  {
    keyword: "deaf",
    english: "I am getting completely **deaf**.",
    hungarian: "Teljesen süketté válok.",
    startTime: 113.0,
    endTime: 116.5,
    verseIndex: 6
  },
  {
    keyword: "blind",
    english: "My eyes are turning **blind**.",
    hungarian: "A szemeim vakká válnak.",
    startTime: 120.0,
    endTime: 123.5,
    verseIndex: 6
  }
];

// A teljes karaoke struktúra felépítése
const songStructureData = [
  {
    title: "1. Versszak", start: 29.0, end: 43.0,
    lines: [
      { text: "I check my body every hour.", hungarian: "Minden órában ellenőrzöm a testem.", start: 29.0, end: 32.5 },
      { text: "I feel I lose my physical power.", hungarian: "Érzem, hogy elveszítem a fizikai erőmet.", start: 32.5, end: 36.0 },
      { text: "I find a new problem every day,", hungarian: "Minden nap találok egy új problémát,", start: 36.0, end: 39.5 },
      { text: "The happy thoughts all go away.", hungarian: "A boldog gondolatok mind elszállnak.", start: 39.5, end: 43.0 }
    ]
  },
  {
    title: "2. Versszak", start: 43.0, end: 57.0,
    lines: [
      { text: "I am terribly **unwell** tonight,", hungarian: "Szörnyen rosszul vagyok ma éjjel,", start: 43.0, end: 46.5, cardIndex: 0 },
      { text: "My face is completely white.", hungarian: "Az arcom teljesen fehér.", start: 46.5, end: 50.0 },
      { text: "I **suffer from** a secret thing,", hungarian: "Egy titkos dologban szenvedek,", start: 50.0, end: 53.5, cardIndex: 1 },
      { text: "The church bells start to ring.", hungarian: "A templomharangok elkezdenek zúgni.", start: 53.5, end: 57.0 }
    ]
  },
  {
    title: "3. Versszak", start: 57.0, end: 71.0,
    lines: [
      { text: "I think I have a **heart attack**.", hungarian: "Azt hiszem, szívrohamom van.", start: 57.0, end: 60.5, cardIndex: 2 },
      { text: "There is no way of going back.", hungarian: "Már nincs visszaút.", start: 60.5, end: 64.0 },
      { text: "My lifestyle is very **unhealthy**,", hungarian: "Az életmódom nagyon egészségtelen,", start: 64.0, end: 67.5, cardIndex: 3 },
      { text: "I wish I were poor but healthy.", hungarian: "Bárcsak szegény lennék, de egészséges.", start: 67.5, end: 71.0 }
    ]
  },
  {
    title: "4. Versszak", start: 71.0, end: 85.0,
    lines: [
      { text: "This nasty **cancer** is inside,", hungarian: "Ez a félelmetes rák van odabent,", start: 71.0, end: 74.5, cardIndex: 4 },
      { text: "There is no place where I can hide.", hungarian: "Nincs hely, ahol elrejtőzhetnék.", start: 74.5, end: 78.0 },
      { text: "I always catch a dangerous **flu**,", hungarian: "Mindig elkapok egy veszélyes influenzát,", start: 78.0, end: 81.5, cardIndex: 5 },
      { text: "I don't know what I should do.", hungarian: "Nem tudom, mit kellene tennem.", start: 81.5, end: 85.0 }
    ]
  },
  {
    title: "5. Versszak", start: 85.0, end: 99.0,
    lines: [
      { text: "My right leg is **disabled** now,", hungarian: "A jobb lábam mozgássérült most,", start: 85.0, end: 88.5, cardIndex: 6 },
      { text: "I cannot even milk a cow.", hungarian: "Még egy tehenet sem tudok megfejni.", start: 88.5, end: 92.0 },
      { text: "Every movement is very **painful**,", hungarian: "Minden mozdulat nagyon fájdalmas,", start: 92.0, end: 95.5, cardIndex: 7 },
      { text: "My doctor is not very helpful.", hungarian: "Az orvosom nem túl segítőkész.", start: 95.5, end: 99.0 }
                ]
  },
  {
    title: "6. Versszak", start: 99.0, end: 113.0,
    lines: [
      { text: "I will **be sick** very soon,", hungarian: "Hamarosan nagyon rosszul leszek,", start: 99.0, end: 102.5, cardIndex: 8 },
      { text: "I stare at the shining moon.", hungarian: "A fénylő holdat bámulom.", start: 102.5, end: 106.0 },
      { text: "My throat is very **sore** today,", hungarian: "A torkom nagyon fáj ma,", start: 106.0, end: 109.5, cardIndex: 9 },
      { text: "I have nothing more to say.", hungarian: "Nincs már semmi mondanivalóm.", start: 109.5, end: 113.0 }
    ]
  },
  {
    title: "7. Versszak", start: 113.0, end: 127.0,
    lines: [
      { text: "I am getting completely **deaf**,", hungarian: "Teljesen süketté válok,", start: 113.0, end: 116.5, cardIndex: 10 },
      { text: "I should find a famous chef.", hungarian: "Keresnem kellene egy híres séfet.", start: 116.5, end: 120.0 },
      { text: "My eyes are turning **blind**,", hungarian: "A szemeim vakká válnak,", start: 120.0, end: 123.5, cardIndex: 11 },
      { text: "Peace is what I cannot find.", hungarian: "Békét az, amit nem találok.", start: 123.5, end: 127.0 }
    ]
  }
];
