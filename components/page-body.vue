<template>
  <main class="page-body">
    <slot />
  </main>
</template>

<style scoped>
.page-body {
  @apply flex justify-center relative px-4 mt-24 lg:mt-0 pb-4;
}
</style>
