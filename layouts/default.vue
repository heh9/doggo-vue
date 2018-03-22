<template>
  <div>
    <navbar></navbar>
    <nuxt/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar';

export default {
  components: {
    Navbar
  }
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
</style>
