<script setup lang="ts">
import AppTitle from '@/components/common/app-title.vue'

defineOptions({
  name: 'HomePage'
})
</script>

<template>
  <AppTitle>
    {{ $t('labels.welcome') }}
  </AppTitle>
</template>
