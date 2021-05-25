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
                <div class="q-gutter-x-md">
                    <q-btn round flat class="text-white q-ma-sm" icon="person" />
                    <q-btn round flat class="text-white q-ma-sm" icon="shopping_cart" />
                </div>
            </q-toolbar>
        </q-header>
        
        <q-page-container>
            <router-view />
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

export default {
  data() {
    return {
      visible: false
    }
  },

  methods: {
    loadData() {
      console.log("api call start")
      // Get all cakes from database

      api.get('cakes')
      .then((response) => {
        // Save data to store
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

      api.get('staff')
      .then((response) => {
        // Save data to store
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

      api.get('customers')
      .then((response) => {
        // Save data to store
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

      api.get('orders')
      .then((response) => {
        // Save data to store
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
