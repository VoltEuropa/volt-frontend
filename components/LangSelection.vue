<template>
  <div>
    <span>Language Selection</span>
    <nuxt-link :to="switchLocalePath('nl')">{{ $t('Dutch') }}</nuxt-link>
    <nuxt-link :to="switchLocalePath('en')">{{ $t('English') }}</nuxt-link>
  </div>
</template>