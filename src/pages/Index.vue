<template>
  <div class="row justify-center">
    <div class="row col-8 q-ma-sm q-mt-none q-gutter-sm justify-center">
      <div v-for="cake in cakes" :key="cake.title">
          <CakeCard
            :id="cake.id"
            :title="cake.title"
            :imageurl="cake.image"
            :description="cake.detailDescription"
            :price="cake.price"
          />
      </div>
    </div>
  </div>
</template>

<script>
import CakeCard from "../components/CakeCard.vue"

export default {
  name: 'PageIndex',
  components: {
    CakeCard
  },
  data(){
    return {
      loggedIn: false
    }
  },
  computed: {
    cakes: function () {
      return this.$store.state.bakery.cakes
    }
  }
}
</script>

<style>

</style>
