// Import stylesheets
import './style.css';

// on importe les constantes dont on a besoin
const LANGUAGES = [
  'Commun',
  'Undercommun',
  'Nain',
  'Elfique',
  'Gnomique',
  'Halfelin',
  'Orc',
  'Abyssal',
  'Celestial',
  'Draconique',
  'Deep',
  'Infernal',
  'Primordial',
  'Sylvain',
  'Zemnien',
  'Marquesien',
  'Veldaken (Ravnica)',
  'Kraul (Ravnica)',
  "Riedran (Eberron's Old Common)",
  'Quori (Eberron)',
];

const TOPICS = ['Littérature', 'Musique', 'Danse'];

const TITLE_LEADS = [
  'Propriétés de la',
  'Etude Structuraliste de la',
  'Compendium sur la',
  '7 Thèses Ratées sur la',
  'Chemins Noirs De la',
  'Ivresses de la',
  'Métenpsychoses dissociatives de la',
];

const TITLE_ENDS = [
  'Structuraliste',
  'Postmoderne',
  'Métaphysique',
  'Expliquée aux personnes âgées',
  'Mais pas trop',
  'Autrement',
  'Libre et Heureuse',
  'Pour les Kobolds',
  'Repensée',
  'Rendue Illégale',
  'Et Ses Mystères',
];

const BOOK_APPEARANCE = [
  'un simple ouvrage relié en cuir',
  'une thèse tapée à la machine et reliée par des morceaux de scotch',
  'un tas de parchemins roulés en tube',
  'un livre dont la reliure a été arrachée',
  'une couverture souple illustrée à la main',
  'un ouvrage de collection aux pages fines comme du papier à cigarette',
  'une première édition signée par son auteur',
  'une édition papier à bas prix',
  'pas grand chose de passionnant',
  'un ouvrage dont la tranche donne de jolis reflets irisés',
  'un assemblage de plaques de pierre',
  "un parchemin en papyrus qui continue de se dérouler à l'infini",
];

const BOOK_AUTHOR = [
  'Zaphod Beeblebrox',
  'Behrtio Ealdhed',
  'Geoffrey Grewis',
  'Cyne Greyny',
  'George Piersym',
  'Aldwing Thiless',
  'Alcyon Denise',
  'Berenga Malley',
  'Tact Haelstrom',
  'Amarra Bandarrion',
  'Aryn Sparrowhawk',
  'Baldrick Buntd',
  'Donald Whent',
  'Quadina Redrook',
  'Jaq Le’quet',
  'Turnip Bellwater',
  'Fen Ulvcreen',
  'Stewart Inkpot',
  'Corina Camberline',
  'Jagod Di',
  'Bevel Left',
  'Elrik Von Sorensen',
  'Thayadora Ableten',
  'Grumm Orcheck',
  'Ademia Strom',
  'Sillari Kern',
  'Sir Drexel of Yourn',
  'Aureus Splitarrow',
  'Sils Worel',
  'Har Vin’ter',
  'Aster Balleenen',
  'Cordast Chin',
  'Breck Veldtner',
  'Lav Ichafor',
  'Milsa Tresant',
  'Mimos Allerdraak',
  'Gallaharra Troye',
  'Baelnor Vaeswan',
  'Megard Frunthwill',
  'Gorick Broadback',
  'Shenea Dronsch',
  'Rem Gunthwai',
  'Ung Dag',
  'U’legraf Gar',
  'Nanoka of Karr',
  'Oenn Whitsun',
  'Geffen Cauldry',
  'Pin Bellner',
  'Borodred Hillsson',
  'Eli Bannaran',
  'Justed Antenitor',
  'Luxara Domar',
  'Col Suttle',
  'Weylan Farce',
  'Kofgen Krevnar',
  'Tybris Strutt',
  'Gracen Hoth',
  'Sir Taryon Darrington',
];

const AUTHOR_INSERT = ['expliquée par', 'selon', 'vu par', 'de'];

// on définit les fonctions qui servent à créer le bouquin
function selectRandomItem(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}

// on définit les propriétés de l'objet Book
class Book {
  constructor() {
    this.language = selectRandomItem(LANGUAGES);
    this.topic = selectRandomItem(TOPICS);
    this.appearance = selectRandomItem(BOOK_APPEARANCE);
    this.author = selectRandomItem(BOOK_AUTHOR);
  }

  get title() {
    const seed = Math.floor(Math.random() * 4);
    if (seed == 0) {
      return `${this.topic}`;
    } else if (seed == 1) {
      return `${selectRandomItem(TITLE_LEADS)} ${this.topic}`;
    } else if (seed == 2) {
      return `${this.topic} ${selectRandomItem(TITLE_ENDS)}`;
    } else if (seed == 3) {
      return `${this.topic} ${selectRandomItem(AUTHOR_INSERT)} ${this.author} `;
    }
  }

  get nbPages() {
    return Math.floor(Math.random() * 990 + 10);
  }
}

// on génère des propriétés de base de l'objet
let book = new Book();

// on les display dans le chat

const content = `<h2> ${book.title} </h2> <p> <b> Langue: </b> ${book.language}, <br/>
    <b> Author: </b> ${book.author} <br/> 
    <b> Topic: </b> ${book.topic} <br/>
    <b> Description: </b> L'ouvrage fait ${book.nbPages} pages et ressemble à ${book.appearance}</p>`;

const appDiv = document.getElementById('app');
appDiv.innerHTML = `${content}`;
