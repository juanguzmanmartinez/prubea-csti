<script setup>
import { onMounted } from "vue";
import RecargasService from "../api/recargas/recargas.implements";
import IconSupport from "@/components/icons/IconSupport.vue";

defineProps({
  msg: {
    type: String,
    required: true,
  },
});
const algo = new RecargasService();
onMounted(async () => {
  const alog = await algo.getProviders();
  console.log("alog", alog);
});
</script>

<template>
  <div class="providers-view-container">
    <div>
      <p>Buscar empresa</p>
      <input type="text" placeholder="ej. Culqui" />
    </div>
    <div>
      <button><IconSupport /> Todas</button>
      <button><IconSupport /> Todas</button>
      <button><IconSupport /> Todas</button>
    </div>
    <div>
        <button>
            <IconSupport /> nombre <IconSupport />
        </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.providers-view-container {
  padding: 20px;
}
</style>
