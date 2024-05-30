<template>
<div class="container p-p-4">

  <app-header />

  <main>
    <router-view v-slot="{ Component }">
      <SlideFadeAnimation class="animate__faster">
        <component :is="Component" :key="$route.fullPath" />
      </SlideFadeAnimation>
    </router-view>
  </main>

  <app-footer />

</div>
</template>

<script>
import AppHeader from '@/components/layout/theHeader'
import AppFooter from '@/components/layout/theFooter'
import { mapActions } from 'vuex';
import SlideFadeAnimation from './components/layout/SlideFadeAnimation.vue';

export default {
  name: 'App',
  components: { AppHeader, AppFooter, SlideFadeAnimation },
  methods: {
    ...mapActions([
      'fetchCategories', 'fetchPhotos', 'fetchCategoryPhotos'
    ])
  },
  created() {
    this.fetchCategories()
    this.fetchPhotos()
    if (!this.category) this.fetchPhotos(1)
    else this.fetchCategoryPhotos({ category: this.category, page: 1 })
  }
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