<script setup>
import { onMounted } from "vue";
import RecargasService from "../../api/recargas/recargas.implements";
import SearchIcon from "../../core/components/icons/search/SearchIcon.vue";
import PhoneIcon from "../../core/components/icons/phone/PhoneIcon.vue";
import HeartIcon from "../../core/components/icons/heart/HeartIcon.vue";
import StarIcon from "../../core/components/icons/star/StarIcon.vue";
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
      <SearchIcon />
    </div>
    <div>
      <button><HeartIcon /> Todas</button>
      <button><StarIcon /> Favoritas</button>
      <button><PhoneIcon /> Todas</button>
    </div>
    <div>
      <button><IconSupport /> nombre <StarIcon /></button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.providers-view-container {
  padding: 20px;
}
</style>
