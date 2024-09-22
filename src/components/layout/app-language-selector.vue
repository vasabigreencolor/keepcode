<script setup lang="ts">
import { LocalStorageService } from '@/infrastructure/services/local-storage.service'
import AppButton from '../common/app-button.vue'

import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

defineOptions({
  name: 'AppLanguageSelector'
})

const changeLanguage = (langCode: 'en' | 'ru') => {
  locale.value = langCode
  LocalStorageService.setLang(langCode)
  window.location.reload()
}
</script>

<template>
  <div class="controls">
    <AppButton label="EN" @click="() => changeLanguage('en')" />
    <AppButton label="RU" @click="() => changeLanguage('ru')" />
  </div>
</template>

<style scoped lang="scss">
.controls {
  display: flex;
  gap: 20px;
}
</style>
