<script setup lang="ts">
import type { StudentDocument } from '@/infrastructure/classes/student-document'
import DocumentCard from './document-card.vue'

defineOptions({
  name: 'DocumentList'
})

const props = defineProps({
  items: {
    type: Array<StudentDocument>,
    required: true
  }
})

const { items } = props
</script>

<template>
  <ul class="list">
    <li class="item" v-for="item in items" :key="item.id">
      <DocumentCard :data="item" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
.list {
  width: 100%;
  display: flex;
  gap: 30px;
}
</style>
