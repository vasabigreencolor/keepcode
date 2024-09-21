<script setup lang="ts">
import AppLoader from '@/components/common/app-loader.vue'
import AppTitle from '@/components/common/app-title.vue'
import DocumentList from '@/components/document/document-list.vue'
import { Api } from '@/infrastructure/api'
import { Student } from '@/infrastructure/classes/student'
import { StudentDocument } from '@/infrastructure/classes/student-document'
import { computed, onBeforeMount, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const api = Api.getInstance()
const { t } = useI18n()
const route = useRoute()

const student = ref<Student | undefined>(undefined)
const docs = reactive<Array<StudentDocument>>([])
let loading = ref<boolean>(false)

const loadStudentInfo = async () => {
  loading.value = true
  await api
    .getStudentDetail(`${route.params.id}`)
    .then((res) => {
      student.value = new Student(res)
    })
    .finally(() => {
      loading.value = false
    })
}

const loadStudentDocs = async () => {
  loading.value = true
  await api
    .getStudentDocs(`${route.params.id}`)
    .then((res) => {
      docs.push(...res.map((el) => new StudentDocument(el)))
    })
    .finally(() => {
      loading.value = false
    })
}

onBeforeMount(async () => {
  await loadStudentInfo()
  await loadStudentDocs()
})

const title = computed(() => {
  let pageName = t('routes.docs')
  if (student.value) {
    pageName = `${pageName} - ${student.value.name}`
  }
  return pageName
})

defineOptions({
  name: 'StudentDetailPage'
})
</script>

<template>
  <AppLoader :loading="loading">
    <AppTitle>{{ title }}</AppTitle>
    <DocumentList :items="docs" />
  </AppLoader>
</template>
