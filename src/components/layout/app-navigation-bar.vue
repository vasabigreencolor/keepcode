<script setup lang="ts">
import TelegramIcon from '../icons/telegram-icon.vue'
import { useI18n } from 'vue-i18n'
import { routes } from '@/infrastructure/consts/routes'
import Logo from '@/assets/logo.svg'
import { RouterLink } from 'vue-router'

const { t } = useI18n()

defineOptions({
  name: 'AppNavigationBar'
})

const paths = [
  {
    icon: TelegramIcon,
    label: t('routes.home'),
    path: routes.home
  },
  {
    icon: TelegramIcon,
    label: t('routes.studentList'),
    path: routes.studentList
  }
]
</script>

<template>
  <ul class="list">
    <img :src="Logo" alt="" />
    <li v-for="item in paths" :key="item.path">
      <RouterLink class="item" :to="item.path">
        <i> <TelegramIcon /> </i>
        {{ item.label }}
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 15px 0;
  min-height: 100vh;
  background-color: $bleuchatel_blue;
  .item {
    cursor: pointer;
    padding: 20px 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-size: 18px;
    font-weight: 400;
    line-height: 21.6px;
    text-align: center;
    color: $white;
    transition: background-color 0.3s;
    &:hover {
      background-color: rgba($color: $white, $alpha: 0.1);
    }
  }
}
</style>
