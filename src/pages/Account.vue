<template>
  <div class="column justify-center q-ma-sm q-mt-none q-gutter-sm">

    <div class="row justify-center">
      <div class="avatar">
        <q-img
          class="avatar-image"
          :src="this.user.avatar"
          :ratio="1/1"
        />
      </div>
    </div>
    
    <div class="text-primary row justify-center">
      <h3 class="q-ma-none">{{ this.user.name }}</h3>
    </div>

    <div class="text-primary row justify-center">
      <div v-for="order in this.orders" :key="order.id">
          <OrderCard
            :id="order.id"
            :cakes="order.cakes"
            :price="order.totalPrice"
          />
      </div>
    </div>

    </div>
  </div>
</template>

<script>
import OrderCard from "../components/OrderCard.vue"

export default {
  components: {
    OrderCard
    },
  computed: {
    user() {
      return this.$store.state.bakery.currentUser
    },
    orders() {
      var orderList = []
      console.log("fuckoo")
      orderList.splice(0,orderList.length)
      console.log(orderList)
      for (var i = 0; i < this.$store.state.bakery.orders.length; i++) {
          if (this.$store.state.bakery.orders[i].customerId == this.user.id) {
            orderList.push(this.$store.state.bakery.orders[i])
          }
        }
      return orderList
    }
  }
}
</script>

<style>

.avatar {
    width: 200px;
    height: 200px;
}

.avatar-image {
    border-radius: 50%;
}

</style>