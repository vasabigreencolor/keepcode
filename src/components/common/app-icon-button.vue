<script setup lang="ts">
import { VBtn } from 'vuetify/components/VBtn'

defineOptions({
  name: 'AppIconButton'
})

const props = defineProps<{
  icon?: VBtn['icon']
}>()

const emit = defineEmits<{
  (e: 'click'): void
}>()

const handleClick = () => {
  emit('click')
}
</script>

<template>
  <v-btn density="compact" size="large" :icon="props.icon" variant="text" @click="handleClick" />
</template>
