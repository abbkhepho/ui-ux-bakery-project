<template>
  <div class="text-primary">
    {{ title }} {{ price }}
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
    }
}
</script>

<style>

</style>