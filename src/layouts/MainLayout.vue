<template>
    <q-layout view="lHh Lpr lFf">
        <q-header class="header">
            <q-toolbar id="toolbar">
                <q-toolbar-title class="column">
                    <h3 class="title q-ma-md" @click="Route('/')">Bear Island Bakery</h3>
                    <div>
                        <q-btn push flat no-caps class="text-white q-ma-sm q-pl-xl q-pr-xl"><h6 class="label q-ma-none" @click="Route('/')">Store</h6></q-btn>
                        <q-btn push flat no-caps class="text-white q-ma-sm q-pl-xl q-pr-xl"><h6 class="label q-ma-none" @click="Route('about')">About us</h6></q-btn>
                        <q-btn push flat no-caps class="text-white q-ma-sm q-pl-xl q-pr-xl"><h6 class="label q-ma-none" @click="Route('contact')">Contact us</h6></q-btn>
                    </div>
                </q-toolbar-title>
                <div class="row q-gutter-x-md text-white">
                  <div v-if="loggedIn">
                    <q-btn flat class="q-ma-sm" no-caps label="Sign Out" @click="signOut()"/>
                    <q-btn round flat class="q-ma-sm" icon="person" @click="Route('account')"/>
                    <q-btn round flat class="q-ma-sm" icon="shopping_cart" @click="cartStateChange()"/>
                  </div>
                  <div v-else>
                    <q-btn flat class="q-ma-sm" no-caps label="Sign Up"/>
                    <q-btn flat class="q-ma-sm" no-caps label="Sign In" @click="stateChange()"/>
                  </div>
                </div>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <router-view />
            <Login
            ref="loginComponent" 
            :loginState="loginState"
            />
            <Cart
            ref="cartComponent" 
            :cartState="cartState"
            />
        </q-page-container>

        <div class="footer column bg-primary text-white">
          <div class="quote row col-3 justify-center">
            <h3 class="q-mb-none">Nearly 100 years old recipes!</h3>
          </div>
          <div class="ratings row justify-around">
            <div class="no1 column justify-center">
              <h4 class="q-mb-none text-italic">"Too good to be true."</h4>
              <h6 class="q-mt-sm">- Cake Recipes</h6>
            </div>
            <div class="no2 column">
              <h4 class="q-mb-none text-italic">"This cannot get any better."</h4>
              <h6 class="q-mt-sm">- New York Times</h6>
            </div>
            <div class="no3 column">
              <h4 class="q-mb-none text-italic">"I wish I was born in this family."</h4>
              <h6 class="q-mt-sm">- The Guardian</h6>
            </div>
          </div>
          <div class="authorities row">
            <p class="q-ml-md q-mb-sm q-ma-none">
              © Swhartz Bear Island 1923 - 2021
            </p>
          </div>
        </div>
    </q-layout>
</template>

<script>
import { api } from 'boot/axios.js'
import Login from "../components/Login.vue"
import Cart from "../components/Cart.vue"

export default {
  components: {
    Login,
    Cart
  },
  data() {
    return {
      loginState: false,
      cartState: false
    }
  },
  methods : {
    loadData() {
      console.log("api call start")

      // Get all cakes from database
      api.get('cakes')
      .then((response) => {
        // Save cakes to store
        this.$store.commit('bakery/addCakes', response.data)
      })
      .catch(() => {
        this.$q.notify({
          color: 'negative',
          position: 'top',
          message: 'Cake loading failed',
          icon: 'report_problem'
        })
      })

      // Get all staff from database
      api.get('staff')
      .then((response) => {
        // Save stuff to store
        this.$store.commit('bakery/addStaff', response.data)
      })
      .catch(() => {
        this.$q.notify({
          color: 'negative',
          position: 'top',
          message: 'Staff loading failed',
          icon: 'report_problem'
        })
      })

      // Get all customers from database
      api.get('customers')
      .then((response) => {
        // Save customers to store
        this.$store.commit('bakery/addCustomers', response.data)
      })
      .catch(() => {
        this.$q.notify({
          color: 'negative',
          position: 'top',
          message: 'Customer loading failed',
          icon: 'report_problem'
        })
      })

      // Get all orders from database
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
    },

    Route(route) {
      this.$router.push(route)
    },
    //Runs the changeState function in the Login component which opens the login dialog
    stateChange() {
      this.$refs.loginComponent.changeState()
    },

    cartStateChange() {
      this.$refs.cartComponent.changeState()
    },

    signOut() {
      this.$store.commit("bakery/logout")
    }
  },

  computed: {
    loggedIn: function () {
      if (this.$store.state.bakery.currentUser != null) {
        return true
      } else {
        return false
      }
    }
  },

  created () {
    // Get database data on site creation
    this.loadData()
  }
}
</script>

<style>
.header {
    background-color: rgba(255, 107, 107, 1)
}

.title {
  cursor: pointer;
}
</style>
