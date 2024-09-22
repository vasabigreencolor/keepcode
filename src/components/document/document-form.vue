<script setup lang="ts">
import type { IDocument } from '@/infrastructure/interfaces/domains/i-student-document'
import { stringRules } from '@/infrastructure/vuetify/rules/string-rules'
import { ref } from 'vue'

defineOptions({
  name: 'DocumentForm'
})

const props = defineProps({
  loading: {
    type: Boolean,
    default: () => false
  }
})

const isValid = ref(false)
const doc = ref<IDocument>({
  title: '',
  body: ''
})

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'submit', data: IDocument): void
}>()

const handleClose = () => {
  emit('close')
}

const handleSubmit = () => {
  if (isValid.value) {
    emit('submit', doc.value)
  }
}
</script>

// здесь уже поленился прокидывать компоненты и просто сделал форму
<template>
  <v-form :disabled="props.loading" v-model="isValid" class="form" @submit.prevent="handleSubmit">
    <v-text-field
      v-model="doc.title"
      :counter="10"
      :rules="stringRules('')"
      :label="$t('labels.name')"
      hide-details
      required
    />

    <v-textarea
      v-model="doc.body"
      :counter="10"
      :rules="stringRules('')"
      :label="$t('labels.body')"
      hide-details
      required
    />

    <div class="controls">
      <v-btn :disabled="props.loading" type="submit"> {{ $t('controls.save') }} </v-btn>
      <v-btn :disabled="props.loading" @click="handleClose"> {{ $t('controls.cancel') }} </v-btn>
    </div>
  </v-form>
</template>

<style scoped lang="scss">
.form {
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
}
</style>
