// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "nuxt-auth-utils", 'nuxt-vitest'],
  css: [
    "bootstrap/dist/css/bootstrap.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  plugins: [{ src: "~/plugins/fontawesome.ts" }],
});
