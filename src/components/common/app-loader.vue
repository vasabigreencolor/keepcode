<script setup lang="ts">
import { computed } from 'vue'

defineOptions({
  name: 'AppLoader'
})

const props = defineProps({
  loading: {
    type: Boolean,
    required: true
  }
})

const loading = computed(() => props.loading)
</script>

<template>
  <div v-if="loading">
    {{ $t('labels.loading') }}
  </div>
  <slot v-else />
</template>
