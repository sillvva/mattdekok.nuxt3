<script setup>
const props = defineProps({
  link: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  empty: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: false,
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
  classes: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <nuxt-link
    :class="['hex-menu-item', empty && 'empty', active && 'active', rotated && 'rotated', ...classes]"
    :style="{
      '--item-color': color,
      '--hover-color': hoverColor,
      '--active-color': activeColor,
      '--text-color': textColor,
    }"
    :to="link"
  >
    <span class="item-label">{{ label }}</span>
    <div class="face face1"></div>
    <div class="face face2"></div>
    <div class="face face3"></div>
  </nuxt-link>
</template>

<style lang="scss" scoped>
.hex-menu-item {
  --baseYMargin: 30px;
  --baseXMargin: 4px;
  float: left;
  position: relative;
  margin: calc(var(--baseYMargin) * var(--scale)) calc(var(--baseXMargin) * var(--scale));
  margin-left: calc(2px * var(--scale));
  width: calc(190px * var(--scale));
  height: calc(110px * var(--scale));
  z-index: 1;
  text-decoration: none;
  text-align: center;
  &.active,
  &.empty {
    cursor: default;
  }
  &.empty {
    .face {
      background-color: transparent;
    }
  }
  &.active {
    .face {
      background-color: var(--active-color);
    }
  }
  &:hover:not(.empty) {
    z-index: 2;
    .face {
      background-color: var(--hover-color);
      transition: background-color 500ms ease, -webkit-transform 1s ease-in-out;
    }
  }
  .item-label {
    line-height: calc(110px * var(--scale));
    font-family: sans-serif;
    white-space: nowrap;
    font-size: calc(1.8em * var(--scale));
    font-weight: 600;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    color: var(--text-color);
    letter-spacing: 1px;
  }
  .face {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: inherit;
    background: var(--item-color);
    z-index: -1;
    backface-visibility: hidden;
  }
  .face1 {
    transform: rotate(60deg);
  }
  .face2 {
    transform: rotate(0);
  }
  .face3 {
    transform: rotate(-60deg);
  }
  &.rotated {
    --baseYMargin: 45px;
    --baseXMargin: -20px;
    &:nth-child(2n) {
      top: calc(100px * var(--scale));
    }
    .face1 {
      transform: rotate(30deg);
    }
    .face2 {
      transform: rotate(90deg);
    }
    .face3 {
      transform: rotate(-30deg);
    }
  }
}
</style>

<style lang="scss"></style>
