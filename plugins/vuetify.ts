import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, md } from 'vuetify/lib/iconsets/md'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
        directives,
        icons: {
          defaultSet: 'md',
          aliases,
          sets: {
            md,
          },
        }
    });

    nuxtApp.vueApp.use(vuetify);
});