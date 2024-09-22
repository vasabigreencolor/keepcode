<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  name: 'AppModal'
})

const opened = ref(false)

const open = () => {
  opened.value = true
}
const close = () => {
  opened.value = false
}

defineExpose({
  open,
  close
})
</script>

<template>
  <v-dialog width="auto" v-model="opened">
    <div class="content">
      <slot />
    </div>
  </v-dialog>
</template>

<style scoped lang="scss">
.content {
  padding: 30px;
  background-color: $white;
  border-radius: 10px;
}
</style>
