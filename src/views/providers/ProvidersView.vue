<script setup>
import { ref, onMounted, computed } from "vue";
import RecargasService from "../../api/recargas/recargas.implements";
import SearchIcon from "../../core/components/icons/search/SearchIcon.vue";
import PhoneIcon from "../../core/components/icons/phone/PhoneIcon.vue";
import HeartIcon from "../../core/components/icons/heart/HeartIcon.vue";
import StarIcon from "../../core/components/icons/star/StarIcon.vue";
import Button from "../../core/components/button/Button.vue";
import { useProviderStore } from "../../stores/provider";

defineProps({
  msg: {
    type: String,
    required: true,
  },
});
const store = useProviderStore();
// const router = useRouter();

const getProviders = computed(() => {
  return store.getProviders;
});
onMounted(() => {
  store.getProvidersList();
});
const handleClick = () => {
  router.push({ name: "recarga" });
};
</script>

<template>
  <div class="providers-view-container">
    <div class="providers-view-container__search">
      <p>Buscar empresa</p>
      <div>
        <input type="text" placeholder="ej. Culqui" />
        <SearchIcon />
      </div>
    </div>
    <div>
      <Button customClass="button-generic"><HeartIcon /> Todas</Button>
      <Button customClass="button-generic"><StarIcon /> Favoritas</Button>
      <Button customClass="button-generic"><PhoneIcon /> Todas</Button>
    </div>
    <div
      class="providers-view-container__providers"
      v-for="(provider, index) in getProviders"
      :key="index"
    >
      <button class="providers-view-container__providers--provider">
        <span>
          <img :src="provider.image" alt="" />
          {{ provider.company }}
        </span>
        <StarIcon />
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.providers-view-container {
  padding: 20px;
  &__providers {
    &--provider {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: none;
      background-color: #fff;
      border-bottom: 1px solid #c3c3c3;
      width: 100%;
      padding: 10px;
      img {
        height: 30px;
        width: 30px;
      }
      span {
        display: flex;
        align-items: center;
        gap: 16px;
      }
      svg {
        fill: #c3c3c3;
      }
    }
  }
}
</style>
