<script setup>
import InfoIcon from "../../core/components/icons/info/InfoIcon.vue";
import RefreshIcon from "../../core/components/icons/refresh/RefreshIcon.vue";
import HeartIcon from "../../core/components/icons/heart/HeartIcon.vue";
import WifiIcon from "../../core/components/icons/wifi/WifiIcon.vue";
import BulbIcon from "../../core/components/icons/bulb/BulbIcon.vue";
import CalendarIcon from "../../core/components/icons/calendar/CalendarIcon.vue";
</script>
<template>
  <div class="balance-view-container">
    <div class="balance-view-information">
      <div>
        <p>Saldo virtual <InfoIcon /></p>
        <h3>S/ 150.00 <RefreshIcon /></h3>
        <button><HeartIcon /> ¿Cómo cargar mi saldo virtual?</button>
        <p>Código para cargar tu saldo: <span>{12345678901}</span></p>
      </div>
    </div>
    <div class="balance-view-options">
      <div>
        <button><WifiIcon /> Recargas</button>
      </div>
      <div>
        <button><BulbIcon /> Pagos de servicios</button>
      </div>
      <div>
        <button><CalendarIcon /> Historial de ganancias y operaciones</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.balance-view {
  &-container {
    background-color: whitesmoke;
    min-height: 100vh;
    width: 100%;
    color: black;
    padding: 20px;
  }
  &-information {
  }
  &-options {
  }
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
