<script setup>
import { onMounted } from "vue";
import RecargasService from '../api/recargas/recargas.implements'
defineProps({
  msg: {
    type: String,
    required: true
  }
})
const algo = new RecargasService()
onMounted(async () => {
  const alog = await algo.getActualBalance()
  console.log("alog",alog);
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <box-icon name="rocket"></box-icon>

    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>

</style>
