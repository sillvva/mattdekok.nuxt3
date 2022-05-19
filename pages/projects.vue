<script setup>
const title = "Projects";
useHead({
  title: `${title} - Matt DeKok`,
});

const menuItems = useState("menuItems");

const projects = ref([
  {
    image: "me2",
    title: "This Page",
    subtitle: "Personal Website",
    description: "Firebase, Heroku, Node.js, Nuxt 3, Vue 3, JavaScript, HTML, SCSS, Vuetify, Github Actions",
  },
  {
    image: "me",
    title: "This Page (Previous Version)",
    subtitle: "Personal Website",
    description: "Heroku, Node.js, React, TypeScript, HTML, SCSS, Bootstrap, Stripe",
    link: "https://mattdekok.herokuapp.com",
  },
  {
    image: "valley-365",
    title: "Valley 365",
    subtitle: "Valmont Industries, Inc. - Web App",
    description: "Angular, TypeScript, jQuery, HTML, SCSS",
    link: "https://www.valley365.com/",
  },
  {
    image: "rpgschedule",
    title: "RPG Schedule",
    subtitle: "Discord Bot",
    description: "Google Cloud, Node.js, Nuxt 2, Vue 2, TypeScript, discord.js, MongoDB, HTML, CSS, Web Sockets",
    link: "https://github.com/sillvva/rpg-schedule",
  },
  {
    image: "npm",
    title: "@sillvva/react-styled-flexgrid",
    subtitle: "NPM Module - React Components",
    description: "NPM, React, TypeScript, JavaScript, Styled Components",
    link: "https://www.npmjs.com/package/@sillvva/react-styled-flexgrid",
  },
  {
    image: "hex-menu",
    title: "@sillvva/vue-hex-menu",
    subtitle: "Vue UI Component",
    description: "Vue 2, HTML, SCSS, JavaScript",
    link: "https://github.com/sillvva/vue-hexagon-menu",
  },
]);
</script>

<template>
  <NuxtLayout name="page">
    <template #header>
      <page-header :title="title" :items="menuItems" />
    </template>
    <div class="flex flex-wrap mt-24 lg:mt-0 pb-4">
      <div class="p-3 basis-0 grow basis-12/12 lg:basis-10/12">
        <div class="projects">
          <div class="project" v-for="(project, i) in projects" :key="`project-${i}`">
            <gallery-item :image="project.image" :title="project.title" :subtitle="project.subtitle" :description="project.description" :link="project.link" />
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.projects {
  @apply flex flex-wrap -m-3;
}
.project {
  @apply p-3 basis-full grow md:basis-6/12 lg:basis-4/12;
}
</style>
