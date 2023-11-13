// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  ui: {
    global: true,
    icons: ['mdi', 'simple-icons']
  },
  plugins: [
    { src: '~/plugins/fontawesome.ts' }
  ],

})
module.exports = {
  css: [
    'bootstrap/dist/css/bootstrap.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ]
}