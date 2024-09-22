<script setup lang="ts">
import type { IBreadcrumb } from '@/infrastructure/interfaces/components/i-breadcrumb'
import AppBreadcrumb from '../common/app-breadcrumb.vue'
import { routes } from '@/infrastructure/consts/routes'
import { useI18n } from 'vue-i18n'
import AppLanguageSelector from './app-language-selector.vue'

const { t } = useI18n()

defineOptions({
  name: 'AppHeader'
})

const staticBreadcrumbs: IBreadcrumb[] = [
  {
    label: t('routes.home'),
    path: routes.home
  },
  {
    label: t('routes.studentList'),
    path: routes.studentList
  }
]
</script>

<template>
  <header class="header">
    <AppBreadcrumb :items="staticBreadcrumbs" />
    <AppLanguageSelector />
  </header>
</template>

<style scoped lang="scss">
.header {
  background-color: $white;
  padding: 25px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
