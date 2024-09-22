<template>
  <v-app>
    <component :is="layout">
      <router-view></router-view>
    </component>
  </v-app>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from './layouts/main-layout.vue'
import EmptyLayout from './layouts/empty-layout.vue'

const route = useRoute()

const layout = computed(() => {
  if (route.meta.layout === 'MainLayout') {
    return MainLayout
  }
  return EmptyLayout
})
</script>
