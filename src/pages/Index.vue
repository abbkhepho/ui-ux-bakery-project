<template>
  <div class="row q-ma-sm q-gutter-sm justify-center">
    <!-- Creates a CustomCard for every cake !-->
    <div v-for="cake in cakes" :key="cake.title">
      <CustomCard
            :title="cake.title"
            :imageurl="cake.image"
            :description="cake.detailDescription"
            :price="cake.price"
      />
    </div>
  </div>
</template>

<script>
import CustomCard from "../components/CustomCard.vue"

export default {
  name: 'PageIndex',
  components: {
    CustomCard
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
