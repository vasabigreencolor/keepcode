<script setup lang="ts">
import { StudentDocument } from '@/infrastructure/classes/student-document'
import { DocumentType } from '@/infrastructure/enums/document-type'
import PdfIcon from '../icons/pdf-icon.vue'
import JpgIcon from '../icons/jpg-icon.vue'
import DocIcon from '../icons/doc-icon.vue'
import XlsIcon from '../icons/xls-icon.vue'
import { DateFormats } from '@/infrastructure/enums/date-formats'

defineOptions({
  name: 'DocumentCard'
})

const props = defineProps({
  data: {
    type: StudentDocument,
    required: true
  }
})

const { data } = props

const icons = {
  [DocumentType.PDF]: PdfIcon,
  [DocumentType.JPG]: JpgIcon,
  [DocumentType.DOC]: DocIcon,
  [DocumentType.XLS]: XlsIcon
}

const iconComponent = icons[data.type] || null
</script>

<template>
  <div class="card">
    <div>
      <span :title="data.name" class="name"> {{ data.name }}</span>
      <span class="date"> {{ data.createdAt.format(DateFormats.FullDate) }}</span>
    </div>

    <div class="icon" v-if="iconComponent">
      <component :is="iconComponent" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  padding: 20px;
  background-color: $white;
  border-radius: 10px;
  display: flex;

  .name {
    font-size: 24px;
    font-weight: 700;
    line-height: 28.8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 150px;
    display: block;
  }
  .date {
    display: block;
    margin: 15px 0 0 0;
    font-size: 18px;
    font-weight: 400;
    line-height: 21.6px;
    color: $supreme_grey;
  }

  .icon {
    border-radius: 10px;
    padding: 30px;
    background-color: $child_of_light;
  }
}
</style>
