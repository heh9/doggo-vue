<template lang="html">
  <section class="section is-large">
    <div class="container has-text-centered">
      <h1 class="title">Doggos breeds</h1>
      <p>Tip: Click on any breed to see more details</p>
      <br>
      <a
        v-for="breed in breeds"
        :key="breed"
        class="button">
        {{ breed }}
      </a>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  async asyncData() {
    const { data } = await axios.get('https://dog.ceo/api/breeds/list');
    return { breeds: data.message };
  }
}
</script>

<style lang="css">
a {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
