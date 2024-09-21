<script setup lang="ts">
import type { IBreadcrumb } from '@/infrastructure/interfaces/components/i-breadcrumb'
import { RouterLink } from 'vue-router'

defineOptions({
  name: 'AppBreadcrumb'
})

const props = defineProps({
  items: {
    type: Array<IBreadcrumb>,
    required: true
  }
})

const { items } = props
</script>

<template>
  <ul class="breadcrumbs">
    <li v-for="(item, index) in items" :key="item.path">
      <span class="item last" v-if="items.length - 1 === index">
        {{ item.label }}
      </span>
      <RouterLink v-else class="item" :to="item.path">
        {{ item.label }}
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 10px;
  .item {
    font-size: 14px;
    font-weight: 300;
    line-height: 16.8px;

    &::after {
      content: ' / ';
    }

    &.last {
      color: rgba($color: $black, $alpha: 0.4);
      &::after {
        content: '';
      }
    }
  }
}
</style>
