<script setup lang="ts">
import type { Student } from '@/infrastructure/classes/student'
import { routes } from '@/infrastructure/consts/routes'
import { useRouter } from 'vue-router'

const router = useRouter()

defineOptions({
  name: 'StudentList'
})

const props = defineProps({
  items: {
    type: Array<Student>,
    required: true
  }
})

const { items } = props

const goToDetail = (id: number) => {
  router.push(routes.studentDocs(`${id}`))
}
</script>

<template>
  <ul class="list">
    <li class="item" v-for="item in items" :key="item.id" @click="() => goToDetail(item.id)">
      {{ item.name }}
    </li>
  </ul>
</template>

<style scoped lang="scss">
.list {
  width: 100%;
  .item {
    padding: 20px;
    transition: background-color 0.3s;
    cursor: pointer;
    &:hover {
      background-color: rgba($color: $black, $alpha: 0.1);
    }
  }
}
</style>
