<template>
  <div>
    <q-dialog v-model="state" persistent>
      <q-card>
        <q-card-section>
          <div class="text-h6 text-primary">Login</div>
        </q-card-section>

        <q-card-section>
          <q-input
          v-model="email"
          type="email"
          label="Email"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please enter an email adress']"
          >
            <template v-slot:label>
              <strong class="text-primary">Email</strong>
            </template>
          </q-input>

          <q-input
          v-model="password"
          :type="isPwd ? 'password' : 'text'"
          label="Password"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please enter a password']"
          >
            <template v-slot:label>
              <strong class="text-primary">Password</strong>
            </template>

            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
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
    methods: {
      changeState () {
        this.state = !this.state
      },
      onLogin () {
        for (var i = 0; i < this.customers.length; i++) {
          if (this.customers[i].email == this.email.trim()) {
            if (this.customers[i].password == this.password.trim()) {
              this.$store.commit("bakery/login", this.customers[i].id)
            }
          }
        }
        console.log(this.$store.state.bakery.currentUser)
        this.email = ""
        this.password = ""
        this.state = false
      },
      onCancel () {
        this.email = ""
        this.password = ""
        this.state = false
      }
    },
    computed: {
      customers: function () {
        return this.$store.state.bakery.customers
      }
    }
}
</script>

<style>

</style>