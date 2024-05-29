<template>
<div class="container p-p-4">

  <app-header />

  <main>
    <router-view />
  </main>

  <app-footer />

</div>
</template>

<script>
import AppHeader from '@/components/layout/theHeader'
import AppFooter from '@/components/layout/theFooter'

export default {
  name: 'App',
  components: { AppHeader, AppFooter }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>