<template>
    <q-layout view="lHh Lpr lFf">
        <q-header class="header">
            <q-toolbar id="toolbar">
                <q-toolbar-title class="column">
                    <h3 class="q-ma-md">Bear Island Bakery</h3>
                    <div>
                        <q-btn push flat no-caps class="text-white q-ma-sm q-pl-xl q-pr-xl"><h6 class="label q-ma-none">Store</h6></q-btn>
                        <q-btn push flat no-caps class="text-white q-ma-sm q-pl-xl q-pr-xl"><h6 class="label q-ma-none">About us</h6></q-btn>
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
export default {
  data(){
    return {
      cakes: ''
    }
  },
  methods : {
    loadData: function () {
      console.log("api call start")
      // Get all cakes from database
      api.get('/cakes')
      .then((response) => {
        // Parse JSON and save data to store
        this.cakes = JSON.parse(response.data)
      })
      .catch(() => {
        this.$q.notify({
          color: 'negative',
          position: 'top',
          message: 'Loading failed',
          icon: 'report_problem'
        })
      })
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
    background-color: rgba(255, 107, 107, 0.8)
}
</style>
