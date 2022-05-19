<template>
  <div class="article-section-items">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.article-section-items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
}
</style>