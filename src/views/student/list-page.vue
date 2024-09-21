<script setup lang="ts">
import AppLoader from '@/components/common/app-loader.vue'
import AppTitle from '@/components/common/app-title.vue'
import StudentList from '@/components/student/student-list.vue'
import { Api } from '@/infrastructure/api'
import { Student } from '@/infrastructure/classes/student'
import { reactive, ref, onBeforeMount } from 'vue'
const api = Api.getInstance()

const students = reactive<Array<Student>>([])
let loading = ref<boolean>(false)

onBeforeMount(async () => {
  loading.value = true
  await api
    .getStudents()
    .then((res) => {
      students.push(...res.map((el) => new Student(el)))
    })
    .finally(() => {
      loading.value = false
    })
})

defineOptions({
  name: 'StudentListPage'
})
</script>

<template>
  <div>
    <AppTitle>
      {{ $t('routes.studentList') }}
    </AppTitle>

    <AppLoader :loading="loading">
      <StudentList :items="students" class="students" />
    </AppLoader>
  </div>
</template>

<style scoped lang="scss">
.students {
  margin: 20px 0 0 0;
}
</style>
