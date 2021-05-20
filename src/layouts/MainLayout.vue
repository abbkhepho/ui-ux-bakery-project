<template>
    <q-layout view="lHh Lpr lFf">
        <q-header reveal>
            <q-toolbar id="toolbar">
                <q-toolbar-title>
                    <h3 class="q-ma-md">Bear Island Bakery</h3>
                </q-toolbar-title>
            </q-toolbar>
        </q-header>
        
        <q-page-container>
            <div>
                <q-page-sticky flat expand class="bg-primary" position="top">
                    <q-toolbar id="toolbar-sticky">
                        <q-toolbar-title class="q-gutter-x-md">
                            <q-btn push flat class="text-white q-mb-sm q-pl-xl q-pr-xl">Store</q-btn>
                            <q-btn push flat class="text-white q-mb-sm q-pl-xl q-pr-xl">About us</q-btn>
                        </q-toolbar-title>
                        <div class="q-gutter-x-md">
                            <q-btn round flat class="text-white q-mb-sm" icon="person" />
                            <q-btn round flat class="text-white q-mb-sm" icon="shopping_cart" />
                        </div>
                    </q-toolbar>
                </q-page-sticky>
            </div>
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
#toolbar-sticky {
    background-color: rgba(255, 107, 107, 0.5)
}
</style>
