<template lang="html">
  <section class="section is-large">
    <div class="container has-text-centered">
      <h1 class="title">Doggos breeds</h1>
      <p>Click on any breed to see more details</p>
      <br>
      <div class="tags">
        <span
          v-for="breed in breeds"
          :key="breed"
          class="tag is-light is-medium">
          <nuxt-link :to="`/doggos/${breed.toLowerCase()}`">{{ breed }}</nuxt-link>
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async fetch ({store}) {
    await store.dispatch('getBreeds');
  },
  computed: {
    breeds () {
      return this.$store.state.breeds;
    }
  }
}
</script>

<style lang="css">
span {
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
