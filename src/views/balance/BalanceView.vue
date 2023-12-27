<script setup>
import { ref, onMounted, computed } from "vue";
import InfoIcon from "../../core/components/icons/info/InfoIcon.vue";
import RefreshIcon from "../../core/components/icons/refresh/RefreshIcon.vue";
import HeartIcon from "../../core/components/icons/heart/HeartIcon.vue";
import WifiIcon from "../../core/components/icons/wifi/WifiIcon.vue";
import BulbIcon from "../../core/components/icons/bulb/BulbIcon.vue";
import CalendarIcon from "../../core/components/icons/calendar/CalendarIcon.vue";
import Skeleton from "../../core/components/skeleton/Skeleton.vue";
import Button from "../../core/components/button/Button.vue";
import { useBalanceStore } from "../../stores/balance";
import { useRouter } from "vue-router";

const store = useBalanceStore();
const router = useRouter();

const getBalance = computed(() => {
  return store.getBalance;
});
onMounted(() => {
  store.getActualBalance();
});
const handleClick = () => {
  router.push({ name: "recarga" });
};
</script>
<template>
  <div class="balance-view-container">
    <div class="balance-view-information">
      <div>
        <div class="balance-view-information__content" v-if="getBalance">
          <div class="balance-view-information__title">
            <p class="text-secondary">Saldo virtual</p>
            <InfoIcon customClass="sky" />
          </div>
          <div class="balance-view-information__balance">
            <h2 class="text-primary">S/ {{ getBalance }}</h2>
            <Button><RefreshIcon customClass="sky" /></Button>
          </div>
        </div>
        <div class="balance-view-information__content" v-else><Skeleton /></div>
        <Button customClass="button-generic">
          <HeartIcon /> ¿Cómo cargar mi saldo virtual?
        </Button>
        <div class="balance-view-information__code">
          <p class="text-secondary">
            Código para cargar tu saldo:
            <span class="text-tertiary">{12345678901}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="divider"></div>
    <div class="balance-view-options">
      <div class="balance-view-options__action">
        <Button @click="handleClick" customClass="button-action"
          ><WifiIcon /> Recargas</Button
        >
      </div>
      <div class="balance-view-options__action">
        <Button customClass="button-action"
          ><BulbIcon /> Pagos de servicios</Button
        >
      </div>
      <div class="balance-view-options__action">
        <Button customClass="button-action"
          ><CalendarIcon /> Historial de ganancias y operaciones</Button
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.balance-view {
  &-container {
    background-color: #fff;
    min-height: 100vh;
    width: 100%;
    color: black;
    padding: 20px;
  }
  &-information {
    &__content {
      margin-bottom: 15px;
    }
    &__title {
      display: flex;
      align-items: center;
      svg {
        height: 16px;
      }
    }
    &__balance {
      display: flex;
    }
    &__code {
      margin-top: 10px;
      p {
        font-weight: bold;
        font-size: 12px;
      }
    }
  }
  &-options {
    &__action {
      margin-bottom: 15px;
    }
  }
}
</style>
