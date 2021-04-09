import apiRequest from './utils/fetch.js';

/* ---------- IMPORT COMPONENTS ---------- */
import headerMenu from './components/headerMenu.js'
import found_character from './components/found_character.js'
import about from './components/about.js'

/* ---------- API URL ---------- */
const API = `https://rickandmortyapi.com/api/character/?name=`;

Vue.component('main-data', {
  data() {
    return {
      value: ''
    }
  },

  methods: {
    search() {
      this.$emit('search-character', this.value)
    }
  },

  template: `
      <main class="container">

            <section class="container__section">
              <div class="container--details" style="text-align: justify;">
                <h4 tabindex="0" class="main-title">JavaScript Asynchronism</h4>
                <p tabindex="0" class="main-desc">On this site you can find information about your favorite scientist and
                  his
                  unfortunate grandson. In addition to other characters that appear in the series, as well as information
                  about them. The purpose of this project was to practice what was learned about asynchronism in JavaScript.
                  For
                  this I made use of an asynchronous function to make requests to the API, the same that you can visit in:
                  <em><b><a href="https://rickandmortyapi.com/">Rick and Morty's API.</a></b></em>
                </p>
              </div>
              <img tabindex="0" src="./assets/images/1_logo-main.png" alt="Rick and Morty">
            </section>

            <section class="container__search">
              <h3>Search Characters</h3>
              <div class="container--search">
                <div class="search__bar">
                  <input v-on:keyup.enter="search" v-model="value" class="bar--input" type="text" placeholder="Type the name or id of the character (1 to 671) . . .">
                  <button class="bar--button" v-on:click="search"><i class="fas fa-search"></i></button>
                </div>
              </div>
            </section>
      </main>
  `
})

new Vue({
  el: '#app',

  data() {
    return {
      data: {
        title: `Rick and Morty API`,
        options: ['Home', 'Characters', 'About me'],
        showFound_character: false,
        name: '',
        image: '',
        status: '',
        species: '',
        origin: '',
        isActive: 0,
        showFloat: false,
      },
      // ch_alive: true,
    }
  },

  components: {
    'headerMenu': headerMenu,
    'found_character': found_character,
    'about': about,
  },

  methods: {
    toggleMenu (){
      this.data.showFloat = !this.data.showFloat;
    },

    toggleFound_character() {
      this.data.showFound_character = !this.data.showFound_character;
    },

    transformData(data) {
      if (!isNaN(parseFloat(data)) && isFinite(data)) {
        var id = parseInt(data);
        return API.replace("?name=", `${id}`)
      }
      else {
        return API.replace("=", `=${data}`);
      }
    },

    // changeColorStatus(stat) {
    //   if (stat === 'ALIVE') {
    //     this.ch_alive = true;
    //   }
    //   else if (stat === 'DEAD') {
    //     this.ch_alive = false;
    //   }
    // },

    showData(person) {
      /* ---------- MAKE REQUEST ---------- */
      let fetch = new apiRequest();
      let url = this.transformData(person)
      fetch.request(url)
        .then(characters => {
          try {

            if (url.search('=') > 0) {
              var character = characters.results[0];

              /* ---------- INSERT DATA INTO CARDS ---------- */
              this.data.name = `Name: ${character.name}`;
              this.data.image = character.image;
              this.data.status = `Status: ${character.status}`;
              this.data.species = `Species: ${character.species}`;
              this.data.origin = `Origin: ${character.origin.name}`;
              //this.changeColorStatus(this.data.status.toUpperCase())
            }
            else {
              /* ---------- INSERT DATA INTO CARDS ---------- */
              this.data.name = `Name: ${characters.name}`;
              this.data.image = characters.image;
              this.data.status = `Status: ${characters.status}`;
              this.data.species = `Species: ${characters.species}`;
              this.data.origin = `Origin: ${characters.origin.name}`;
            }

          } catch (error) {
            console.log(error);
            this.data.name = fetch.error.name;
            this.data.image = fetch.error.image;
          }
        })
      this.toggleFound_character();
    }

  },

})