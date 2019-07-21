<template>
  <h1>
    <h1>SOrry</h1>
    <p>{{$store.state.site.site}}</p>
    <ul>
        <li v-for="page in pages" v-bind:key="page.slug">{{page.title}}</li>
    </ul>
  </h1>

</template>
<script>
export default {

  async fetch({ store }) {
    return store.dispatch("pages/get")
      .then( store.dispatch("site/get") )
  },
<<<<<<< HEAD
=======

>>>>>>> 101f8a68bf72d1802bea06d06868432432334210

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
