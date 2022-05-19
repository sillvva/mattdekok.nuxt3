<template>
  <div v-for="(row, r) in rows" :key="`menu-row-${r}`" class="page-menu">
    <page-menu-item
      v-for="(item, i) in row"
      :key="`menu-item-${i}`"
      :link="item.link"
      :label="item.label"
      :active="item.active"
      :color="item.color || color"
      :activeColor="item.activeColor || activeColor"
      :hoverColor="item.hoverColor || hoverColor"
      :textColor="item.textColor || textColor"
      :itemClasses="itemClasses"
    ></page-menu-item>
  </div>
</template>

<script setup>
const route = useRoute();
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  maxLength: {
    type: Number,
    default: 0,
  },
  color: {
    type: String,
    default: "var(--menuColor1)",
  },
  activeColor: {
    type: String,
    default: "var(--menuColor2)",
  },
  hoverColor: {
    type: String,
    default: "var(--menuColor2)",
  },
  textColor: {
    type: String,
    default: "var(--text)",
  },
  itemClasses: {
    type: Array,
    default: () => [],
  },
});

const rows = computed(() => {
  const rows = [[]];
  props.items.forEach((item) => {
    const rowIndex = rows.length - 1;
    rows[rowIndex].push({
      ...item,
      ...(item.link === route.path && { active: true }),
    });
    if (props.maxLength >= 0 && rows[rowIndex].length === props.maxLength) {
      rows.push([]);
    }
  });
  return rows;
});
</script>

<style scoped>
.page-menu {
  @apply hidden lg:flex justify-center gap-3 px-3;
}
</style>