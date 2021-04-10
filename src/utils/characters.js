import apiRequest from './fetch.js'

/* ---------- IMPORT COMPONENTS ---------- */
import headerMenu from '../components/headerMenu.js'
import foundCharacter from '../components/foundCharacter.js'
import about from '../components/about.js'
import cards from '../components/cards.js'

/* ---------- API URL ---------- */
const API = "https://rickandmortyapi.com/api/character/?page=";

new Vue({
  el: '#app',

  data() {
    return {
      data: {
        title: `Rick and Morty API`,
        options: ['Home', 'Characters', 'About me'],
        title_ch: `Characters of the series`,
        isActive: 1,
        showFloat: false,
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
          }
        } catch (error) {
          console.log(error);
          this.charact[11].name = fetch.error.name;
          this.charact[11].image = fetch.error.image;
        }
      })
  },

  components: {
    'headerMenu': headerMenu,
    'foundCharacter': foundCharacter,
    'about': about,
    'cards': cards,
  },

  methods: {
    toggleMenu (){
      this.data.showFloat = !this.data.showFloat;
    },
  
    /* ---------- RANDOM VALUE ---------- */
    getRandom(min, max) {
      return Math.random() * (max - min) + min;
    },
  },

})



