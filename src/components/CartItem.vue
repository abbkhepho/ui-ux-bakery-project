<template>
  <div>
    <div class="row text-accent justify-between">
      <div class="col-9" >
        <h6 class="q-ma-none text-weight-light">{{ title }} x{{ quantity }}</h6>
      </div>
      <div class="col-2">
        <h6 class="q-ma-none text-weight-light">${{ price }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CartItem',
    props: {
        cake: {
          type: Object,
          default: '',
          required: false
        }
    },
    computed: {
      cakes: function () {
        return this.$store.state.bakery.cakes
      },
      id: function () {
        for (var i = 0; i < this.cakes.length; i++) {
          if (this.cakes[i].id == this.cake.cakeId) {
            return i
          }
        }
      },
      title: function () {
        return this.cakes[this.id].title
      },
      price: function () {
        return this.cakes[this.id].price * this.cake.quantity
      },
      quantity: function () {
        return this.cake.quantity
      }
    }
}
</script>

<style>

</style>