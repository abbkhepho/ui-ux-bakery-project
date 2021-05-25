<template>
  <div class="row q-ma-sm q-gutter-sm justify-center">
    <CustomCard
      v-for="cake in cakes"
      :key="cake.title"
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
