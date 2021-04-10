export default {
  name: 'headerMenu',
  props: ['elements'],
  data() { return {} },
  methods: {
    showMenu () {
      this.$emit('show-menu')
    },
  },

  template: `
      <nav class="header">
        <section class="header--container">
          <h1 tabindex="0" class="header--title"> {{ elements.title }} </h1>
          <ul class="header__ul-menu">
            <li><a v-bind:class="{ menuActive: elements.isActive === 0 }" class="ul-option" href="./index.html"> {{ elements.options[0] }} </a></li>
            <li><a v-bind:class="{ menuActive: elements.isActive === 1 }" class="ul-option" href="./characters.html"> {{ elements.options[1] }} </a></li>
            <li><a  href="#about-me"> {{ elements.options[2] }} </a></li>
          </ul>
          <button v-show="!elements.showFloat" v-on:click="showMenu" class="btn--showMenu"><i class="fas fa-bars"></i></button>
          <button v-on:click="showMenu" v-show="elements.showFloat" class="btn--showMenu"><i class="fas fa-times"></i></button>
          <div v-show="elements.showFloat" class="header__float-menu">
            <ul class="float--container">
              <li><a v-bind:class="{ menuActive: elements.isActive === 0 }" class="ul-option" href="./index.html"> {{ elements.options[0] }} </a></li>
              <li><a v-bind:class="{ menuActive: elements.isActive === 1 }" class="ul-option" href="./characters.html"> {{ elements.options[1] }} </a></li>
              <li><a class="ul-option" href="#about-me"> {{ elements.options[2] }} </a></li>
            </ul>
          </div>
        </section>
      </nav>
  `
}