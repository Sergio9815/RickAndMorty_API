export default {
  name: 'cards',
  props: ['charact'],
  data() { return { } },
  template: `
        <section class="character__grid" id="character--container">
            <div  v-for="(item, i) in charact" class="character--card">
              <img class="card--img" v-bind:src="item.image" alt="">
              <div class="card--details">
                <h5 class="card-name"> {{ item.name }} </h5>
                <div class="status">
                  <h5 class="card-status--name"> {{ item.status }} </h5>
                </div>
                <h5 class="card-species"> {{ item.species }} </h5>
                <h5 class="card-origin"> {{ item.origin }} </h5>
              </div>
            </div>
        </section>
    `
}