<template>
    <q-layout view="lHh Lpr lFf">
        <q-header class="header">
            <q-toolbar id="toolbar">
                <q-toolbar-title class="column">
                    <h3 class="q-ma-md">Bear Island Bakery</h3>
                    <div>
                        <q-btn push flat no-caps class="text-white q-ma-sm q-pl-xl q-pr-xl"><h6 class="label q-ma-none" @click="Route('/')">Store</h6></q-btn>
                        <q-btn push flat no-caps class="text-white q-ma-sm q-pl-xl q-pr-xl"><h6 class="label q-ma-none" @click="Route('about_us')">About us</h6></q-btn>
                        <q-btn push flat no-caps class="text-white q-ma-sm q-pl-xl q-pr-xl"><h6 class="label q-ma-none">Contact us</h6></q-btn>
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
    </q-layout>
</template>

<script>
import { api } from 'boot/axios.js'

export default {
  methods : {
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
</style>
