import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/global.scss", "@/assets/animations.scss"],
  buildModules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { "http-equiv": "cache-control", content: "max-age=31536000" },
        {
          hid: "description",
          name: "description",
          content: "Experienced web developer with a demonstrated history of working in the wireless industry.",
        },
        {
          hid: "twitter:site",
          content: "@sillvvasensei",
        },
        { name: "twitter:card", content: "summary_large_image" },
        ...["og", "twitter"]
          .map((m) => {
            const properties = {
              title: "Matt DeKok",
              description: "Experienced web developer with a demonstrated history of working in the wireless industry.",
              image: "https://matt.dekok.app/images/preview-me2.jpg",
              url: "https://matt.dekok.app",
            };
            return Object.keys(properties).map((t) => {
              return {
                name: `${m}:${t}`,
                content: properties[t],
              };
            });
          })
          .flat(),
      ],
      link: [
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://cdn.jsdelivr.net/npm/@mdi/font@6.6.96/css/materialdesignicons.min.css",
        },
        { rel: "icon", type: "image/png", href: "/favicon-32x32.png" },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;600;700&display=swap",
        },
      ],
      bodyAttrs: {
        class: "app",
      },
    },
  },
});
