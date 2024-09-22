<script setup lang="ts">
import AppLoader from '@/components/common/app-loader.vue'
import AppTitle from '@/components/common/app-title.vue'
import DocumentListForm from '@/components/document/document-list-form.vue'
import { Api } from '@/infrastructure/api'
import { Student } from '@/infrastructure/classes/student'
import { computed, onBeforeMount, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const api = Api.getInstance()
const { t } = useI18n()
const route = useRoute()

const id = `${route.params.id}`

const student = ref<Student | undefined>(undefined)
let loading = ref<boolean>(false)

const loadStudentInfo = async () => {
  loading.value = true
  await api
    .getStudentDetail(id)
    .then((res) => {
      student.value = new Student(res)
    })
    .finally(() => {
      loading.value = false
    })
}

onBeforeMount(async () => {
  await loadStudentInfo()
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
    <DocumentListForm :student-id="id" />
  </AppLoader>
</template>
