export default { 
  name: 'foundCharacter', 
  props: ['elements'],
  data() { return { } },
  methods: {
    close() {
      this.$emit('close-found_character')
    }
  }, 

  template: `
    <div class="found_character-mask">
      <div class="found_character-wrapper">
        <div class="found_character-container">
              <header class="btn-close">
                <button onclick="location.reload()" class="showM" v-on:click="close"><i class="fas fa-times"></i></button>
              </header>
              <img class="card--img" v-bind:src="elements.image" alt="">
              <div class="card--details">
                <h5 class="card-name"> {{ elements.name }} </h5>
                <div class="status">
                  <h5 class="card-status--name"> {{ elements.status }} </h5>
                </div>
                <h5 class="card-species"> {{ elements.species }} </h5>
                <h5 class="card-origin"> {{ elements.origin }} </h5>
              </div>

        </div>
      </div>
    </div>
    `
}