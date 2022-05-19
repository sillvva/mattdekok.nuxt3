<script setup lang="ts">
defineProps<{
  name: string;
  value: string | number;
}>();
</script>

<template>
  <div class="me-details--name">
    {{ name }}:
  </div>
  <div class="me-details--value">
    {{ value }}
  </div>
</template>

<style scoped>
.me-details--name {
  @apply w-6/12 sm:w-3/12 md:w-6/12 2xl:w-3/12 text-right md:text-right py-1 px-1.5 font-semibold;
}
.me-details--value {
  @apply w-6/12 sm:w-3/12 md:w-6/12 2xl:w-3/12 text-left md:text-left py-1 px-1.5;
}
</style>