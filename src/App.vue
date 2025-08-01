<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavbarView from './views/layouts/NavbarView.vue'
import FooterView from './views/layouts/FooterView.vue'
</script>

<template>
  <navbar-view />
  <RouterView />
  <footer-view />
</template>