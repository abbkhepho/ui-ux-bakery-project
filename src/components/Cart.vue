<template>
  <div>
    <q-dialog v-model="state">
      <q-card>
        <q-card-section>
          <div class="text-h6 text-primary">Shopping Cart</div>
        </q-card-section>

        <q-card-section>
          
        </q-card-section>

        <q-card-actions>
          <q-btn label="Login" @click="onLogin" color="primary"/>
          <q-btn label="Cancel" @click="onCancel" color="primary" flat class="q-ml-sm" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
          state: false,
          isPwd: true,
          email: "",
          password: ""
        }
    },
    props: {
        loginState: {
            type: Boolean,
            default: false,
            required: true
        }
    },
    methods: {
      changeState () {
        this.state = !this.state
      },
      onLogin () {
        console.log("skeet")
        this.state = false
      },
      onCancel () {
        console.log("yeet")
        this.email = ""
        this.password = ""
        this.state = false
      }
    }
}
</script>

<style>

</style>