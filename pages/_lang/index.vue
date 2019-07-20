<template>
  <h1>
    <h1>SOrry</h1>
    <ul>
        <li v-for="page in pages" v-bind:key="page.slug">{{page}}</li>
    </ul>
  </h1>

</template>
<script>
export default {

  async fetch({ store }) {
    await store.dispatch("pages/get");
  },
  

  created () {
      console.log(this.$store);
  },

  computed: {
    pages() {
        return  this.$store.getters['pages/getByLanguage'](this.$route.params.lang);
    },
    site() {
        return this.$store.site.object
    }
  }
  

};
</script>
