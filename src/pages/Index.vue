<template>
  <div class="hej">
    <h1>HEJ</h1>
    <!-- <custom-card title="Lemon cheesecake" image_url="https://raw.githubusercontent.com/filippella/Dagger-Rx-Database-MVP/master/cakes/lemoncheese_cake.jpg" description="abc" price="4"/> -->
  </div>
</template>

<script>
import CustomCard from "../components/CustomCard"

export default {
  name: 'PageIndex',
  components: {
    CustomCard: "custom-card"
  },
  data(){
    return {
      loggedIn: false
    }
  }
}
</script>

<style>

</style>
