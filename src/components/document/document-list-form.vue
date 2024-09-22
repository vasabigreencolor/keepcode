<script setup lang="ts">
import { Api } from '@/infrastructure/api'
import DocumentListControls from './document-list-controls.vue'
import DocumentList from './document-list.vue'
import { onBeforeMount, reactive, ref } from 'vue'
import { StudentDocument } from '@/infrastructure/classes/student-document'
import AppLoader from '../common/app-loader.vue'
import { sortArrayByFieldName } from '@/utils/sort-array-by-field-name'

const api = Api.getInstance()

defineOptions({
  name: 'DocumentListForm'
})

const props = defineProps({
  studentId: {
    type: String,
    required: true
  }
})

const { studentId } = props

let docs = reactive<Array<StudentDocument>>([])
let loading = ref<boolean>(false)

const loadStudentDocs = async () => {
  loading.value = true
  await api
    .getStudentDocs(studentId)
    .then((res) => {
      docs.push(...res.map((el) => new StudentDocument(el)))
    })
    .finally(() => {
      loading.value = false
    })
}

const sortItems = (sort: 'type' | 'date') => {
  const fieldToSort = sort === 'date' ? 'createdAt' : sort === 'type' ? 'type' : 'id'
  docs = sortArrayByFieldName(docs, fieldToSort)
}

onBeforeMount(async () => {
  await loadStudentDocs()
})
</script>

<template>
  <AppLoader :loading="loading">
    <DocumentListControls class="controls" @sort="sortItems" />
    <DocumentList :items="docs" />
  </AppLoader>
</template>

<style scoped lang="scss">
.controls {
  margin: 0 0 30px 0;
}
</style>
