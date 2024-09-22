<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import AppButton from '../common/app-button.vue'
import AppSelectBox from '../common/app-select-box.vue'
import type { ISelectBoxItem } from '@/infrastructure/interfaces/components/i-select-box'

const { t } = useI18n()

defineOptions({
  name: 'DocumentListControls'
})

const sortValues: ISelectBoxItem[] = [
  {
    label: t('labels.date'),
    value: 'date'
  },
  {
    label: t('labels.type'),
    value: 'type'
  }
]

const emit = defineEmits<{
  (e: 'create'): void
  (e: 'sort', val: ISelectBoxItem['value']): void
}>()

const handleCreate = () => {
  emit('create')
}
</script>

<template>
  <div class="controls">
    <div class="filters">
      <AppSelectBox
        :label="$t('controls.sortBy')"
        :items="sortValues"
        @change="(val) => $emit('sort', val)"
      />
    </div>
    <AppButton :label="$t('controls.addDocument')" @click="handleCreate" />
  </div>
</template>

<style scoped lang="scss">
.controls {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .filters {
    width: 500px;
  }
}
</style>
