<template>
  <h1>
    <h1>SOrry</h1>
    <p>{{$store.state.site.site}}</p>
    <ul>
        <li v-for="page in pages" v-bind:key="page.slug">{{page}}</li>
    </ul>
  </h1>

</template>
<script>
export default {

  async fetch({ store }) {
    return store.dispatch("pages/get")
      .then( store.dispatch("site/get") )
  },

  created () {
      console.log(this.$store);
  },

  computed: {
    pages() {
        return  this.$store.getters['pages/getByLanguage'](this.$route.params.lang);
    },
    site() {
        return this.$store.site.site
    }
  }


};
</script>
