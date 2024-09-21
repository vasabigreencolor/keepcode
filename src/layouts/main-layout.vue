<script setup lang="ts">
import AppHeader from '@/components/layout/app-header.vue'
import AppNavigationBar from '@/components/layout/app-navigation-bar.vue'

defineOptions({
  name: 'MainLayout'
})
</script>

<template>
  <div class="main-layout">
    <AppNavigationBar />
    <div class="view">
      <AppHeader />
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-layout {
  display: flex;
  .view {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    .content {
      flex-grow: 1;
      background-color: $child_of_light;
      padding: 25px 60px;
    }
  }
}
</style>
