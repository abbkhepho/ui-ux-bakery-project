<template>
  <div>
    <q-dialog v-model="state">
      <q-card>
        <q-card-section>
          <div class="text-h5 text-primary">Shopping Cart</div>
        </q-card-section>

        <q-card-section>
          <div v-for="cake in currentOrder.cakes" :key="cake.cakeId">
            <CartItem
              :cake="cake"
            />
          </div>
          <h5 class="text-primary q-mb-none">
            Total: ${{ currentOrder.totalPrice }}
          </h5>
        </q-card-section>

        <q-card-actions>
          <q-btn label="Place Order" @click="placeOrder" color="secondary"/>
          <q-btn label="Empty Cart" @click="onEmpty" color="secondary" flat class="q-ml-sm" />
          <q-btn label="Close" @click="onCancel" color="secondary" flat class="q-ml-sm" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { api } from 'boot/axios.js'
import CartItem from "../components/CartItem.vue"

export default {
    name: 'Cart',
    components: {
      CartItem
    },
    data() {
        return {
          state: false,
          isPwd: true,
          email: "",
          password: ""
        }
    },
    methods: {
      changeState () {
        this.state = !this.state
      },
      placeOrder () {
        console.log(new Date().toISOString())
        var id = 0;
        // Finds the highest id of all orders and makes the new id one higher
        for (var i = 0; i < this.orders.length; i++) {
          if (this.orders[i].id > id) {
            id = this.orders[i].id + 1
          }
        }

        // Constructs the new order
        var order = {
          "id": id,
          "customerId": this.currentUser.id,
          "cakes": this.currentOrder.cakes,
          "totalPrice": this.currentOrder.totalPrice,
          "timestamp": new Date().toISOString()
        }

        // Adds the new order to the database
        api.post('orders', order)
          .then(response => {
            console.log(response)
          })
          .catch(() => {
            this.$q.notify({
              color: 'negative',
              position: 'top',
              message: 'Adding Order Failed',
              icon: 'report_problem'
            })
          })

        // Loads all orders again
        api.get('orders')
          .then((response) => {
            // Save orders to store
            this.$store.commit('bakery/addOrders', response.data)
          })
          .catch(() => {
            this.$q.notify({
              color: 'negative',
              position: 'top',
              message: 'Order loading failed',
              icon: 'report_problem'
            })
          })

        this.$store.commit("bakery/removeCurrentOrder")
        this.state = false
      },
      onCancel () {
        this.state = false
      },
      onEmpty () {
        this.$store.commit("bakery/removeCurrentOrder")
      }
    },
    computed: {
      currentOrder: function () {
        return this.$store.state.bakery.currentOrder
      },
      orders: function () {
        return this.$store.state.bakery.orders
      },
      currentUser: function () {
        return this.$store.state.bakery.currentUser
      }
    }

}
</script>

<style>

</style>