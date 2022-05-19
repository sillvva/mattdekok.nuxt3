<script setup lang="ts">
const props = defineProps<{
  name: string;
  rating: number;
}>();
</script>

<template>
  <div class="rating--entry">
    <div class="rating--entry-row">
      <div class="rating--entry-col">
        {{ name }}
      </div>
      <div class="rating--entry-col">
        <rating :rating="rating" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.rating--entry {
  @apply basis-full md:basis-6/12 xl:basis-4/12 p-3 grow-0;
}
.rating--entry-row {
  @apply flex -m-3;
}
.rating--entry-col {
  @apply p-3 pt-0.5 basis-0 grow;
  @nth-child (even) {
    @apply text-right max-w-max;
  }
}
</style>
