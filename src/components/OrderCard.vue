<template>
  <div class="q-ma-sm">
    <q-card>
      <q-card-section>
        <div class="text-h5 text-primary">Order: {{ id }}</div>
      </q-card-section>

      <q-card-section>
        <div v-for="cake in cakes" :key="cake.cakeId">
          <CartItem
            :cake="cake"
          />
        </div>
        <h5 class="text-primary q-mb-none">
          Total: ${{ price }}
        </h5>
      </q-card-section>

    </q-card>
  </div>
</template>

<script>
import CartItem from "../components/CartItem.vue"

export default {
    name: 'OrderCard',
    components: {
      CartItem
    },
    props: {
        id: {
          type: Number,
          default: '',
          required: true
        },
        cakes: {
          type: Array,
          default: '',
          required: true
        },
        price: {
          type: Number,
          default: '',
          required: true
        }
    }
}
</script>

<style>

</style>