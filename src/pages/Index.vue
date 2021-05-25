<template>
<<<<<<< Updated upstream
  <div class="row q-ma-sm q-gutter-sm justify-center">
    <!-- Creates a CustomCard for every cake !-->
    <div v-for="cake in cakes" :key="cake.title">
      <CustomCard
=======
  <div class="row justify-center">
    <div class="row col-8 q-ma-sm q-mt-none q-gutter-sm justify-center">
      <div v-for="cake in cakes" :key="cake.title">
          <CakeCard
>>>>>>> Stashed changes
            :title="cake.title"
            :imageurl="cake.image"
            :description="cake.detailDescription"
            :price="cake.price"
<<<<<<< Updated upstream
      />
=======
          />
      </div>
>>>>>>> Stashed changes
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
