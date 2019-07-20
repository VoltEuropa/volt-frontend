<template>
  <div class="DefaultBody">
    <Navigation/>
    <nuxt/>
    <div>My footer</div>
  </div>
</template>

<script>
import Navigation from '~/components/navigation.vue'

export default {
  components: {
    Navigation
  }
}
</script>
