// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: ["@nuxtjs/google-fonts",'nuxt-icon'],
  googleFonts: {
    families: {
      "Space+Grotesk": true,
      "Open+Sans": true,
      "Pathway+Extreme": true,
      "Josefin+Sans": true,
      "Sedgwick+Ave+Display": true,
      "Titillium+Web": true,
      Raleway: true,
      Comme: true,
      Inter: true,
      Poppins: true,
      Inconsolata: true,
      Rubik: true,
      Ysabeau: true,
      Sigmar: true,
      Kanit: true,
      Quicksand: true,
    },
    display: "swap",
  },
})
