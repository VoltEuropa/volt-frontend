<template>
  <nuxt-link
    v-for="locale in $i18n.locales"
    v-if="locale.code !== $i18n.locale"
    :key="locale.code"
    :to="switchLocalePath(locale.code)"
  >{{ locale.name }}</nuxt-link>
</template>