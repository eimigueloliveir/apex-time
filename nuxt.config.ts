// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-auth-utils"],
  plugins: [
    {
      src: "~/plugins/fontawesome.ts",
    },
  ]
});
