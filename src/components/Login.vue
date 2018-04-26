<template>
<<<<<<< HEAD
    <div class="login-wrap">
        <div>
            <input type="text" name="email" placeholder="Email"/>
        </div>
        <div>
            <input type="password" placeholder="Password" name="pass"/>
=======
  <div class="hello">
    <h1>Login page</h1>
    <div>{{ login }}</div>
    <div>
        <div>
            <input type="text" name="login" v-model="login">
        </div>
        <div>
            <input type="password" name="pass" v-model="pass">
>>>>>>> fe55020bdb0744024526f69eb8fd9825eccc12fe
        </div>
        <div>
            <button @click="loginAction">Login</button>
        </div>
<<<<<<< HEAD
        <div>
            <span>forgot your password?</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                // login: 'test',
                // pass: 'test'
            }
        },
        methods: {
            'loginAction': function () {
               console.log(this.email);
               console.log(this.pass);
            }
        }
    }
=======
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      login: 'test',
      pass: 'test'
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
>>>>>>> fe55020bdb0744024526f69eb8fd9825eccc12fe
</script>
