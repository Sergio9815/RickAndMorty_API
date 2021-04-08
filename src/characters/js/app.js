import apiRequest from '../../utils/fetch.js'

/* ---------- IMPORT COMPONENTS ---------- */
import headerMenu from '../../components/headerMenu.js'
import found_character from '../../components/found_character.js'
import about from '../../components/about.js'

/* ---------- API URL ---------- */
const API = "https://rickandmortyapi.com/api/character/?page=";

new Vue({
  el: '#app',

  data() {
    return {
      data: {
        title: `Rick and Morty API`,
        options: ['Home', 'Characters', 'About'],
        title_ch: `Characters of the series`,
        isActive: 1,
      },
      ch_alive: false,
      charact: [
        { name: '', image: '', status: '', species: '', origin: '', },
        { name: '', image: '', status: '', species: '', origin: '', },
        { name: '', image: '', status: '', species: '', origin: '', },
        { name: '', image: '', status: '', species: '', origin: '', },
        { name: '', image: '', status: '', species: '', origin: '', },
        { name: '', image: '', status: '', species: '', origin: '', },
        { name: '', image: '', status: '', species: '', origin: '', },
        { name: '', image: '', status: '', species: '', origin: '', },
        { name: '', image: '', status: '', species: '', origin: '', },
        { name: '', image: '', status: '', species: '', origin: '', },
        { name: '', image: '', status: '', species: '', origin: '', },
        { name: '', image: '', status: '', species: '', origin: '', },
      ],
    }
  },

  created: function () {
    let number = Math.round(this.getRandom(0, 34));
    let url = API.replace("=", `=${number}`);

    /* ---------- MAKE REQUEST ---------- */
    let fetch = new apiRequest();
    fetch.request(url)
      .then(characters => {
        try {
          for (let i = 0; i <= 11; i++) {
            var character = characters.results[i];

            /* ---------- INSERT DATA INTO CARDS ---------- */
            this.charact[i].name = `Name: ${character.name}`;
            this.charact[i].image = character.image;
            this.charact[i].status = `Status: ${character.status}`;
            this.charact[i].species = `Species: ${character.species}`;
            this.charact[i].origin = `Origin: ${character.origin.name}`;

            //this.changeColorStatus(this.charact[i].status.toUpperCase())
          }
        } catch (error) {
          console.log(error);
          this.charact[11].name = `  ツ 𝚆𝚎 𝚊𝚛𝚎 𝚜𝚘𝚛𝚛𝚢, 𝙲𝚑𝚊𝚛𝚊𝚌𝚝𝚎𝚛 𝚗𝚘𝚝 𝚏𝚘𝚞𝚗𝚍!`
          this.charact[11].image = `https://i.imgur.com/dSYutnI.jpg`;
        }
      })
  },

  components: {
    'headerMenu': headerMenu,
    'found_character': found_character,
    'about': about,
  },

  methods: {
    /* ---------- RANDOM VALUE ---------- */
    getRandom(min, max) {
      return Math.random() * (max - min) + min;
    },

    // changeColorStatus(stat) {
    //   if (stat  === 'ALIVE') {
    //     this.ch_alive = true;
    //   } 
    //   else if (stat  === 'DEAD'){
    //     this.ch_alive = false;
    //   }
    // },

  },

})



