<template>
  <div class="DefaultBody">
    <Navigation/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Navigation from "~/components/Navigation.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Navigation,
    Footer
  }
};
</script>
