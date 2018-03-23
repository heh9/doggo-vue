<template lang="html">
  <section class="section is-large">
    <div class="container has-text-centered">
      <h2 class="title">Subbreeds</h2>
      <p v-show="!subbreeds.length">Sorry there are no subbreeds listed :(</p>
      <div class="tags">
        <span
          v-for="subbreed in subbreeds"
          :key="subbreed"
          class="tag is-primary is-large">
          {{ subbreed }}
        </span>
      </div>
    </div>
  </section>
</template>

<script type="text/javascript">
import axios from 'axios';

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(`https://dog.ceo/api/breed/${params.breed}/list`);
    return { subbreeds: data.message, name: params.breed };
  }
}
</script>
