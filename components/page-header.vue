<script setup lang="ts">
const themes = useThemes(["dark", "light"]);
const drawer = ref(useDrawer());

interface Item {
  link: string;
  label: string;
}
interface EmptyItem {
  empty: boolean;
}
interface Items {
  [index: number]: Item | EmptyItem;
}
const props = defineProps<{
  items?: Items;
  title?: string;
  classes?: string | string[];
}>();
</script>

<template>
  <header :class="['page-header', ...(typeof classes == 'string' ? [classes] : (classes ? classes : ''))]">
    <nav class="flex w-full p-3 lg:pl-14">
      <button type="button" @click="drawer.toggle()" class="fab lg:hidden">
        <i class="mdi mdi-menu"></i>
      </button>
      <div :class="['flex-1 lg:pl-3', items && items.length ? 'hidden lg:block' : '']">
        <page-menu v-if="items && items.length" :items="items" color="var(--menuColor1)" activeColor="transparent" hoverColor="var(--menuColor2)"></page-menu>
      </div>
      <h1 v-if="title" class="page-title block lg:hidden flex-1">{{ title }}</h1>
      <button type="button" @click="themes.toggle()" class="fab">
        <i class="mdi mdi-brightness-6"></i>
      </button>
    </nav>
    <h1 v-if="title" class="page-title hidden lg:block">{{ title }}</h1>
  </header>
</template>

<style lang="scss" scoped>
.page-header {
  @apply flex flex-col items-center;
  @media (max-width: 1023px) {
    @apply fixed top-0 left-0 right-0 z-10 text-center;
    background: var(--background);
    background-color: transparent !important;
  }
}

.page-title {
  font-family: "Montserrat", sans-serif;
  @apply text-3xl text-center mt-3 mb-0 lg:mt-4 lg:mb-4;
}

.fab {
  @apply w-14 h-14 rounded-full text-2xl;
  background-color: var(--background);
  &:hover {
    background-color: var(--link);
    .mdi {
      color: var(--menuText);
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
