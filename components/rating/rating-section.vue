<script setup lang="ts">
const props = defineProps<{
  name: string;
  columns: object | null;
}>();

const colNames = ref(Object.keys(props.columns));
</script>

<template>
  <page-article-section>
    <h2 class="rating-section--header">
      {{ name }}
    </h2>
    <div class="rating-section--columns">
      <template v-for="(col, c) in colNames" :key="`rc-${c}`">
        <div
          :class="['rating--column', c > 0 && `hidden ${col}:block`]"
        >
          <strong>Skills</strong>
        </div>
        <div
          :class="['rating--column', c > 0 && `hidden ${col}:block`]"
        >
          <strong>Rating</strong>
        </div>
      </template>
    </div>
    <div class="rating-section--body">
      <slot></slot>
    </div>
  </page-article-section>
</template>

<style lang="scss" scoped>
.rating-section--header {
  @apply text-xl mb-4 font-bold md:block lg:block xl:block 2xl:block;
}
.rating-section--columns {
  @apply flex flex-wrap -m-3 mt-4 mb-2;
}
.rating-section--body {
  @apply flex flex-wrap -m-3;
}
.rating--column {
  @apply p-3 pt-0.5 basis-0 grow;
  &:nth-child(even) {
    @apply text-right max-w-max;
  }
}
</style>