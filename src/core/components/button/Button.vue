<template>
  <button :class="computedClasses" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps(["customClass"]);
const emit = defineEmits();

const handleClick = () => {
  emit("click");
};

const computedClasses = computed(() => ["button " + props.customClass]);
</script>
<style lang="scss" scoped></style>
