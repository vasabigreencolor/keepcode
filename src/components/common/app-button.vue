<script setup lang="ts">
defineOptions({
  name: 'AppButton'
})

const props = defineProps<{
  label: string
}>()

const emit = defineEmits<{
  (e: 'click'): void
}>()

const handleClick = () => {
  emit('click')
}
</script>

<template>
  <button @click="handleClick">{{ props.label }}</button>
</template>

<style scoped lang="scss">
button {
  padding: 10px 20px;
  background-color: $sunflower_valley;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  outline: none;
  &:focus {
    background-color: rgba($color: $sunflower_valley, $alpha: 0.4);
  }
  &:hover {
    background-color: rgba($color: $sunflower_valley, $alpha: 0.4);
  }
}
</style>
