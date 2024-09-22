<script setup lang="ts">
import { Api } from '@/infrastructure/api'
import DocumentListControls from './document-list-controls.vue'
import DocumentList from './document-list.vue'
import { onBeforeMount, reactive, ref } from 'vue'
import { StudentDocument } from '@/infrastructure/classes/student-document'
import AppLoader from '../common/app-loader.vue'
import { sortArrayByFieldName } from '@/utils/sort-array-by-field-name'
import AppModal from '../common/app-modal.vue'
import DocumentForm from './document-form.vue'
import type { IDocument } from '@/infrastructure/interfaces/domains/i-student-document'

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
let saving = ref<boolean>(false)
const modal = ref<InstanceType<typeof AppModal>>()

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

const handleCreate = () => {
  if (modal.value) {
    modal.value.open()
  }
}
const handleClose = () => {
  if (modal.value) {
    modal.value.close()
  }
}
const handleSave = async (doc: IDocument) => {
  saving.value = true
  await api
    .createDocument(studentId, doc)
    .then((res) => {
      handleClose()
      docs.push(new StudentDocument(res))
    })
    .finally(() => {
      saving.value = false
    })
}

onBeforeMount(async () => {
  await loadStudentDocs()
})
</script>

<template>
  <AppLoader :loading="loading">
    <DocumentListControls class="controls" @sort="sortItems" @create="handleCreate" />
    <DocumentList :items="docs" />
  </AppLoader>
  <AppModal ref="modal">
    <DocumentForm @close="() => modal!.close()" @submit="handleSave" :loading="saving" />
  </AppModal>
</template>

<style scoped lang="scss">
.controls {
  margin: 0 0 30px 0;
}
</style>
