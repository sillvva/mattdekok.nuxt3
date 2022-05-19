<script setup>
useHead({
  title: "Matt DeKok",
});

const items = [
  { link: "/about", label: "About Me" },
  { link: "/experience", label: "Experience" },
  { link: "/skills", label: "Skills" },
  { link: "/projects", label: "Projects" },
  { empty: true },
  // { link: "/blog", label: "Blog" },
  { link: "/donate", label: "Donate" },
];
</script>

<template>
  <NuxtLayout name="page">
    <template #header>
      <page-header classes="intro-header" />
    </template>
    <div class="me-bg">
      <div class="intro">
        <div class="intro--subject">
          <h2 class="intro--name">Matt DeKok</h2>
          <h4 class="intro--title">Full&nbsp;Stack Web&nbsp;Developer</h4>
        </div>
        <div class="menu-container hidden flex-row justify-end lg:flex">
          <hex-menu
            :maxLength="3"
            :items="items"
            :classes="['lg:scale-100']"
            :itemClasses="['menu-bounce']"
            color="var(--menuColor1)"
            activeColor="var(--menuColor2)"
            hoverColor="var(--menuColor2)"
            textColor="var(--menuText)"
            :rotated="items.length % 2 == 0"
          ></hex-menu>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.intro-header {
  @apply fixed bg-transparent w-full #{!important};
}

.me-bg {
  @apply h-screen grid grid-cols-12 grid-rows-6;
  background-image: url("/images/me2x.webp");
  background-image: image-set("/images/me1x.webp" 1x, "/images/me2x.webp" 2x, "/images/me3x.webp" 3x, "/images/me4x.webp" 4x);
  background-position: bottom left;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 1500px) {
    background-size: contain;
    background-image: image-set("/images/me3x.webp" 1x, "/images/me4x.webp" 2x);
  }
  @media (min-width: 1200px) {
    background-size: contain;
    background-image: image-set("/images/me2x.webp" 1x, "/images/me3x.webp" 2x, "/images/me4x.webp" 3x);
  }
  @media (max-width: 1024px) {
    background-position-x: 10%;
    &::after {
      content: "";
      position: absolute;
      z-index: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 80vh;
      background-image: linear-gradient(transparent, var(--background-transparent));
    }
  }
  @media (max-width: 768px) {
    background-position-x: 20%;
  }
}

.intro {
  @apply col-start-6 col-span-6 row-start-2 row-span-3 2xl:col-start-5;
}

.intro--subject {
  @apply mt-0 fixed bottom-12 left-0 right-0 z-10 text-center lg:relative lg:text-right lg:bottom-0;
  font-family: "Montserrat", sans-serif;
  text-shadow: 2px 2px var(--background), 1px 1px 5px var(--background);
}

.intro--name {
  @apply text-3xl sm:text-5xl lg:text-5xl font-bold tracking-widest;
}

.intro--title {
  @apply text-xl sm:text-3xl xl:text-4xl font-medium tracking-normal;
}
</style>
