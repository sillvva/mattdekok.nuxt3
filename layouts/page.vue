<script setup>
const drawer = ref(useDrawer());

const menuItems = useState("menuItems", () => [
  { link: "/", label: "Intro" },
  { link: "/about", label: "About Me" },
  { link: "/experience", label: "Experience" },
  { link: "/skills", label: "Skills" },
  { link: "/projects", label: "Projects" },
  // { link: "/blog", label: "Blog" },
]);
</script>

<template>
  <div class="min-h-screen">
    <div class="page">
      <slot name="header" />
      <slot />
    </div>
    <div :class="['drawer', drawer.drawerClasses]" @click="drawer.toggle()">
      <hex-menu
        :maxLength="3"
        :items="menuItems"
        :classes="[drawer.menuClasses, 'sm:scale-100', 'md:scale-125']"
        :itemClasses="['menu-bounce']"
        color="var(--menuColor1)"
        activeColor="var(--menuColor2)"
        hoverColor="var(--menuColor2)"
        textColor="var(--menuText)"
        :rotated="menuItems.length % 2 == 0"
      ></hex-menu>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.drawer {
  @apply bg-black/75 fixed z-30 inset-0 flex-row items-center justify-center duration-500 ease-linear;
  @media (max-width: 1024px) {
    .open {
      animation: drawer-open 500ms ease-in-out forwards;
    }
    .close {
      animation: drawer-close 500ms ease-in-out forwards;
    }
  }
}

.page-enter-from {
  opacity: 0;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
