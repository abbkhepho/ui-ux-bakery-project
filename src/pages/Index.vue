<template>
  <div class="row q-ma-sm q-gutter-sm justify-center">
      <div v-for="n in 10" :key="n">
        <CustomCard title="Clementine Cake" price="4"/>
      </div>
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
  }
}

console.log()
</script>

<style>

</style>
