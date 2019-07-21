<template>
  <h1>
    <h1>{{page.title}}</h1>
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
    //   console.log(this.$store);
  },

  computed: {
    page() {
        return  this.$store.getters['pages/getBySlug'](this.$route.params.slug);
    },
    site() {
        return this.$store.site.site
    }
  }


};
</script>
