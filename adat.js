// Ide kell beírnod a dalod adatait és időzítéseit egyszer, és mindkét oldal ezt fogja használni!
const GITHUB_MP3_URL = "https://raw.githubusercontent.com/pintergabor/Hipochondria/main/Hipochondria.mp3";

const cardsData = [
  { keyword: "unwell", english: "I am terribly **unwell** tonight.", hungarian: "Szörnyen rosszul vagyok ma éjjel.", startTime: 43.0, endTime: 46.0, verseIndex: 1 },
  { keyword: "suffer from", english: "I **suffer from** a secret thing.", hungarian: "Egy titkos dologban szenvedek.", startTime: 49.9, endTime: 53.8, verseIndex: 1 },
  { keyword: "heart attack", english: "I think I have a **heart attack**.", hungarian: "Azt hiszem, szívrohamom van.", startTime: 63.2, endTime: 66.6, verseIndex: 2 },
  { keyword: "unhealthy", english: "My lifestyle is very **unhealthy**.", hungarian: "Az életmódom nagyon egészségtelen.", startTime: 69.9, endTime: 73.4, verseIndex: 2 },
  { keyword: "cancer", english: "This scary **cancer** is inside.", hungarian: "Ez a félelmetes rák van odabent.", startTime: 77.4, endTime: 80.0, verseIndex: 3 },
  { keyword: "flu", english: "I always catch a dangerous **flu**.", hungarian: "Mindig elkapok egy veszélyes influenzát.", startTime: 84.0, endTime: 87.3, verseIndex: 3 },
  { keyword: "disabled", english: "My right leg is **disabled** now.", hungarian: "A jobb lábam rokkant most.", startTime: 121.0, endTime: 125.2, verseIndex: 4 },
  { keyword: "painful", english: "Every movement is very **painful**.", hungarian: "Minden mozdulat nagyon fájdalmas.", startTime: 128.3, endTime: 131.9, verseIndex: 4 },
  { keyword: "be sick", english: "I will be **sick** very soon.", hungarian: "Hamarosan nagyon rosszul leszek.", startTime: 136.0, endTime: 139.0, verseIndex: 5 },
  { keyword: "sore", english: "My **throat** is very **sore** today.", hungarian: "A torkom nagyon fájós ma.", startTime: 143.0, endTime: 146.1, verseIndex: 5 },
  { keyword: "deaf", english: "I am getting completely **deaf**.", hungarian: "Teljesen süketté válok.", startTime: 194.7, endTime: 197.0, verseIndex: 6 },
  { keyword: "blind", english: "My eyes are turning **blind**.", hungarian: "A szemeim vakká válnak.", startTime: 200.0, endTime: 204.5, verseIndex: 6 }
];

const songStructureData = [
  {
    title: "1. Versszak", start: 28.6, end: 57.0,
    lines: [
      { text: "I check my body every hour.", hungarian: "Minden órában ellenőrzöm a testem.", start: 28.6, end: 32.4 },
      { text: "I feel I lose my physical power.", hungarian: "Érzem, hogy elveszítem a fizikai erőmet.", start: 32.4, end: 36.0 },
      { text: "I find a new problem every day,", hungarian: "Minden nap találok egy új problémát,", start: 36.0, end: 39.3 },
      { text: "The happy thoughts all go away.", hungarian: "A boldog gondolatok mind elszállnak.", start: 39.3, end: 43.0 },
      { text: "I am terribly **unwell** tonight,", hungarian: "Szörnyen rosszul vagyok ma éjjel,", start: 43.0, end: 46.0, cardIndex: 0 },
      { text: "My face is completely white.", hungarian: "Az arcom teljesen fehér.", start: 46.0, end: 49.9 },
      { text: "I **suffer from** a secret thing,", hungarian: "Egy titkos dologban szenvedek,", start: 49.9, end: 53.8, cardIndex: 1 },
      { text: "The church bells start to ring.", hungarian: "A templomharangok elkezdenek zúgni.", start: 53.8, end: 57.0 }
    ]
  },
  {
    title: "2. Versszak", start: 63.2, end: 84.0,
    lines: [
      { text: "I think I have a **heart attack**.", hungarian: "Azt hiszem, szívrohamom van.", start: 63.2, end: 66.6, cardIndex: 2 },
      { text: "I need to lie down on my back.", hungarian: "Le kell feküdnöm a hátamra.", start: 66.6, end: 69.9 },
      { text: "My lifestyle is very **unhealthy**.", hungarian: "Az életmódom nagyon egészségtelen.", start: 69.9, end: 73.4, cardIndex: 3 },
      { text: "Only the doctors are getting wealthy.", hungarian: "Csak az orvosok gazdagodnak meg.", start: 73.4, end: 77.4 },
      { text: "This scary **cancer** is inside.", hungarian: "Ez a félelmetes rák van odabent.", start: 77.4, end: 80.0, cardIndex: 4 },
      { text: "The doctor's office is very wide.", hungarian: "Az orvosi rendelő nagyon tágas.", start: 80.0, end: 84.0 },
      { text: "I always catch a dangerous **flu**.", hungarian: "Mindig elkapok egy veszélyes influenzát.", start: 84.0, end: 87.3, cardIndex: 5 },
      { text: "I do not know what to do.", hungarian: "Nem tudom, mit tegyek.", start: 87.3, end: 90.9 }
    ]
  },
  {
    title: "3. Versszak", start: 121.0, end: 146.1,
    lines: [
      { text: "My right leg is **disabled** now.", hungarian: "A jobb lábam mozgássérült most.", start: 121.0, end: 125.2, cardIndex: 6 },
      { text: "I am groaning like a cow.", hungarian: "Úgy nyögök, mint egy tehén.", start: 125.2, end: 128.3 },
      { text: "Every movement is very **painful**.", hungarian: "Minden mozdulat nagyon fájdalmas.", start: 128.3, end: 131.9, cardIndex: 7 },
      { text: "My little dog is very faithful.", hungarian: "A kiskutyám nagyon hűséges.", start: 131.9, end: 136.0 },
      { text: "I will be **sick** very soon.", hungarian: "Hamarosan nagyon rosszul leszek.", start: 136.0, end: 139.0, cardIndex: 8 },
      { text: "I see two shadows under the moon.", hungarian: "Két árnyékot látok a hold alatt.", start: 139.0, end: 143.0 },
      { text: "My **throat** is very **sore** today.", hungarian: "A torkom nagyon fáj ma.", start: 143.0, end: 146.1, cardIndex: 9 },
      { text: "The warm summer went away.", hungarian: "A meleg nyár elszállt.", start: 146.1, end: 149.6 }
    ]
  },
  {
    title: "4. Versszak", start: 194.7, end: 204.5,
    lines: [
      { text: "I am getting completely **deaf**.", hungarian: "Teljesen süketté válok.", start: 194.7, end: 197.0, cardIndex: 10 },
      { text: "I cannot hear the famous chef.", hungarian: "Nem hallom a híres séfet.", start: 197.0, end: 200.0 },
      { text: "My eyes are turning **blind**.", hungarian: "A szemeim vakká válnak.", start: 200.0, end: 204.5, cardIndex: 11 },
      { text: "No good doctor can I find.", hungarian: "Nem találok jó orvost.", start: 204.5, end: 208.0 }
    ]
  }
];
