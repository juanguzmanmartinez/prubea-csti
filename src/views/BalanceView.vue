<script setup>
import IconSupport from "@/components/icons/IconSupport.vue";
</script>
<template>
  <div class="balance-view-container">
    <div>
      <div>
        <p>Saldo virtual <IconSupport /></p>
        <h3>S/ 150.00 <IconSupport /></h3>
        <button><IconSupport /> ¿Cómo cargar mi saldo virtual?</button>
        <p>Código para cargar tu saldo: <span>{12345678901}</span></p>
      </div>
    </div>
    <div>
      <div>
        <button><IconSupport /> Recargas</button>
      </div>
      <div>
        <button><IconSupport /> Pagos de servicios</button>
      </div>
      <div>
        <button><IconSupport /> Historial de ganancias y operaciones</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.balance-view-container {
  background-color: whitesmoke;
  min-height: 100vh;
  width: 100%;
  color: black;
  padding: 20px;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
