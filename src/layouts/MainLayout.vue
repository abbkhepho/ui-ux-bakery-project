<template>
  <q-layout view="lHh Lpr lFf">
    <q-header flat>
      <q-toolbar id="toolbar" class="bg-primary">
        <q-toolbar-title  class="">
          <h3 class="q-ma-md">Bear Island Bakery</h3>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {

}
</script>

<style>

</style>
