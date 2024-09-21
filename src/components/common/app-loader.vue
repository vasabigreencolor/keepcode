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
  <div class="loader">
    <div v-if="loading">
      {{ $t('labels.loading') }}
    </div>
    <slot v-else />
  </div>
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
