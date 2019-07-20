<template>
  <div class="DefaultBody">
    <Navigation/>
    <nuxt/>
    <div>My footer</div>
  </div>
</template>

<script>
import Navigation from "~/components/Navigation.vue";

export default {
  components: {
    Navigation
  }
};
</script>
