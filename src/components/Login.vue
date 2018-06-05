<template>
  <div class="hello">
    <h1>Login page</h1>
    <div>{{ login }}</div>
    <div class="login-form">
        <div>
            <input type="text" name="login" v-model="login" placeholder="Email">
        </div>
        <div>
            <input type="password" name="pass" v-model="pass" placeholder="Password">
        </div>
        <div>
            <button @click="loginAction">Login</button>
        </div>
        <a href="#" class="fb-login">
            Log in with Facebook
        </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      login: '',
      pass: ''
    }
  },
  methods: {
    loginAction: function () {
      console.log('Login: ' + this.login)
      console.log('Pass: ' + this.pass)
    }
  },
  beforeCreate: function () {
    console.log('beforeCreate')
  }
}
</script>
