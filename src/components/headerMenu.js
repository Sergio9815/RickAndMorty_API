export default {
  name: 'headerMenu',
  props: ['elements'],
  data() { return {} },

  template: `
      <nav class="header">
        <div class="header--container">
          <h1 tabindex="0" class="header--title"> {{ elements.title }} </h1>
          <ul class="header__ul-menu">
            <li><a v-bind:class="{ menuActive: elements.isActive === 0 }" class="ul-option" href="./index.html"> {{ elements.options[0] }} </a></li>
            <li><a v-bind:class="{ menuActive: elements.isActive === 1 }" class="ul-option" href="./characters.html"> {{ elements.options[1] }} </a></li>
            <li><a class="ul-option" href="#about-me"> {{ elements.options[2] }} </a></li>
          </ul>
        </div>
      </nav>
  `
}