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
import axios from 'axios';

const toFirstUpperCase = (str) => {
  return str[0].toUpperCase() + str.substr(1);
};

export default {
  async asyncData() {
    const { data } = await axios.get('https://dog.ceo/api/breeds/list');
    return { breeds: data.message.map(toFirstUpperCase) };
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
