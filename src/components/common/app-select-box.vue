<script setup lang="ts">
import type { ISelectBoxItem } from '@/infrastructure/interfaces/components/i-select-box'
import { ref, watch } from 'vue'

defineOptions({
  name: 'AppSelectBox'
})

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  items: {
    type: Array<ISelectBoxItem>,
    required: true
  },
  value: {
    type: Object as () => ISelectBoxItem
  }
})

const selectedItem = ref<ISelectBoxItem | undefined>(props.value)

const emit = defineEmits<{
  (e: 'change', newValue: ISelectBoxItem['value']): void
}>()

watch(selectedItem, (newValue) => {
  emit('change', newValue)
})
</script>

<template>
  <v-select
    v-model="selectedItem"
    :items="props.items"
    item-title="label"
    item-value="value"
    density="compact"
    :label="props.label"
    :flat="true"
  />
</template>

<style>
.v-input__details {
  display: none;
}
</style>
