<template>
  <main class="main">
    <SiteHeader />
    <Example1 />
    <Example2 />
    <Example3 />
    <Example4 />
    <SiteFooter />
  </main>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'

// Examples
import Example1 from './examples/Example1.vue';
import Example2 from './examples/Example2.vue';
import Example3 from './examples/Example3.vue';
import Example4 from './examples/Example4.vue';

export default {
  name: 'App',

  components: {
    SiteHeader,
    SiteFooter,

    Example1,
    Example2,
    Example3,
    Example4
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
</style>
