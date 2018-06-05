<template>
  <div id="app">
    <header>
      <router-link :to="{name: 'AddsList'}" class="logo">FLEA market</router-link>
      <router-link :to="{name: 'Login'}" class="login">Login</router-link>
    </header>
    <router-view/>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
