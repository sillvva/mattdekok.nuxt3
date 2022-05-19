<script setup>
const title = "Skills";
useHead({
  title: `${title} - Matt DeKok`,
});

const menuItems = useState("menuItems");

const cols = ref({
  sm: 12,
  md: 6,
  xl: 4,
});
</script>

<template>
  <NuxtLayout name="page">
    <template #header>
      <page-header :title="title" :items="menuItems" />
    </template>
    <page-body>
      <page-article class="ratings">
        <rating-section name="Web Development" :columns="cols">
          <rating-item name="Angular" :rating="2.5" />
          <rating-item name="AWS Elastic Beanstalk" :rating="2" />
          <rating-item name="AWS CodePipeline" :rating="2" />
          <rating-item name="Azure DevOps" :rating="1" />
          <rating-item name="Bootstrap" :rating="4" />
          <rating-item name="CI/CD" :rating="2" />
          <rating-item name="CSS3" :rating="4.5" />
          <rating-item name="Express" :rating="3" />
          <rating-item name="Github Actions" :rating="2" />
          <rating-item name="Heroku" :rating="3.5" />
          <rating-item name="HTML5" :rating="5" />
          <rating-item name="JavaScript" :rating="5" />
          <rating-item name="jQuery" :rating="4" />
          <rating-item name="Node.Js" :rating="4" />
          <rating-item name="PHP" :rating="4" />
          <rating-item name="React" :rating="2.5" />
          <rating-item name="SCSS" :rating="4" />
          <rating-item name="TypeScript" :rating="4" />
          <rating-item name="Vue / Nuxt" :rating="4" />
        </rating-section>
        <rating-section name="Microsoft Software" :columns="cols">
          <rating-item name="Excel" :rating="4.5" />
          <rating-item name="Powerpoint" :rating="2" />
          <rating-item name="VBA" :rating="2.5" />
          <rating-item name="Visual Studio Code" :rating="4" />
          <rating-item name="Word" :rating="3.5" />
        </rating-section>
        <rating-section name="Graphic Design" :columns="cols">
          <rating-item name="Adobe Photoshop" :rating="3" />
          <rating-item name="Affinity Photo" :rating="3" />
        </rating-section>
      </page-article>
    </page-body>
  </NuxtLayout>
</template>

<style scoped>
.ratings {
  @apply w-full sm:w-9/12 md:w-10/12 lg:w-9/12;
}
</style>
