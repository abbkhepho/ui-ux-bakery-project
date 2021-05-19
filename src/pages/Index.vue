<template>
  <div class="column fullscreen">
    <q-parallax id="header" src="..\assets\ulysse-pointcheval-1WmlAiYgnoI-unsplash.jpg" :height="180">
      <h2 class="q-ma-md text-white" style="font-weight: 400">Bear Island Bakery</h2>
      <div id="necessary-buttons" class="row justify-between">
        <div class="q-mb-sm q-mt-sm q-gutter-x-sm">
          <q-btn 
          unelevated
          no-caps
          label="Home"
          class="q-pa-none text-white text-h6 col-1"
          >
          </q-btn>
          <q-btn 
          unelevated
          no-caps
          label="Shop"
          class="q-pa-none text-white text-h6 col-1"
          >
          </q-btn>
          <q-btn 
          unelevated
          no-caps
          label="About us"
          class="q-pa-none text-white text-h6 col-1"
          >
          </q-btn>
        </div>
        <q-btn
        unelevated
        no-caps
        label="My account"
        class="q-pa-none q-ma-sm q-ml-xl text-white text-h6"
        v-if="loggedIn"
        ></q-btn>
        <div v-else class="q-mb-sm q-mt-sm q-ml-xl q-gutter-x-sm">
          <q-btn
          unelevated
          no-caps
          label="Sign up"
          class="q-pa-none text-white text-h6"
          ></q-btn>
          <q-btn
          unelevated
          no-caps
          label="Sign in"
          class="q-pa-none text-white text-h6"
          ></q-btn>
        </div>
      </div>
    </q-parallax>
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data(){
    return {
      loggedIn: false
    }
  }
}
</script>

<style>

</style>
