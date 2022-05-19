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
  classes: {
    type: Array,
    default: () => [],
  },
  rotated: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: "#6c6",
  },
  activeColor: {
    type: String,
    default: "#69c",
  },
  hoverColor: {
    type: String,
    default: "#69c",
  },
  textColor: {
    type: String,
    default: "#fff",
  },
  itemClasses: {
    type: Array,
    default: () => [],
  },
});

const rows = computed(() => {
  const menuRows = [[]];
  props.items.forEach((item) => {
    const rowIndex = menuRows.length - 1;
    menuRows[rowIndex].push({
      ...item,
      ...(item.empty && { link: "", label: "" }),
      ...(item.link === route.path && { active: true }),
    });
    let rotDiff = 0;
    if (!props.rotated && menuRows.length % 2 === 0) {
      rotDiff = 1;
    }
    if (props.maxLength >= 0 && menuRows[rowIndex].length === props.maxLength - rotDiff) {
      menuRows.push([]);
    }
  });
  return menuRows;
});
</script>

<template>
  <div :class="['hex-wrapper', rotated && 'rotated', ...classes]">
    <div :class="['hex-row', r % 2 === 1 && !rotated && 'shift']" v-for="(row, r) in rows" :key="`hex-row-${r}`">
      <hex-menu-item
        v-for="(item, i) in row"
        :key="`hex-item-${i}`"
        :link="item.link"
        :label="item.label"
        :empty="item.empty"
        :active="item.active"
        :rotated="rotated"
        :color="item.color || color"
        :activeColor="item.activeColor || activeColor"
        :hoverColor="item.hoverColor || hoverColor"
        :textColor="item.textColor || textColor"
        :classes="itemClasses"
      ></hex-menu-item>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hex-wrapper {
  display: inline-block;
  --scale: 0.8;
  margin: 50px 0;
  &.rotated {
    margin: 20px 0 calc(120px * var(--tw-scale-y) * var(--scale));
  }
  .hex-row {
    &.shift {
      margin-left: calc(98px * var(--tw-scale-y) * var(--scale));
    }
  }
  @media (max-width: 1264px) {
    --scale: 0.6;
  }
  @media (max-width: 359px) {
    --scale: 0.4;
  }
}
</style>
