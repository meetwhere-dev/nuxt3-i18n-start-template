<template>
  <div class="home">
    {{ $t('hello') }}

    <div>
      当前语言：{{ $i18n.locale }}
      <select v-model="currentLang" @change="switchLang">
        <option v-for="lang in allLang" :key="lang" :value="lang">{{ lang }}</option>
      </select>
    </div>

    <div>
      所有语言：
      {{ allLang }}
    </div>
  </div>
</template>

<script setup>
const $i18n = useI18n()
const allLang = $i18n.locales.value.map(lang => lang.code)
const currentLang = ref($i18n.locale.value)
const switchLang = () => {
  $i18n.setLocale(currentLang.value)
}
</script>

<style lang="scss" scoped>
</style>
