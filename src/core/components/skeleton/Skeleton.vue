<template>
  <div class="skeleton-container">
    <div class="skeleton-row"></div>
  </div>
</template>
<style lang="scss" scoped>
.skeleton-container {
  width: 100%;
  gap: 15px;
  height: 25px;
}

.skeleton-row {
  height: 25px;
  background-color: #ddd;
  margin: 2px;
  border-radius: 3px;
  animation: fadeIn 1.5s ease-in-out infinite;
}

@keyframes fadeIn {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}

@keyframes wave {
  0%,
  100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(1.1);
  }
}
</style>
