export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: ["@nuxtjs/google-fonts",'nuxt-icon','@nuxtjs/tailwindcss','@nuxt/image'],
  googleFonts: {
    families: {
      "Space+Grotesk": true,
      "Sedgwick+Ave+Display": true,
      "Pathway+Extreme": true,
      "Josefin+Sans": true,
      "Inclusive+Sans": true,
      "Titillium+Web": true,
      Raleway: true,
      Comme: true,
      Inter: true,
      Poppins: true,
      Rubik: true,
      Ysabeau: true,
      Sigmar: true,
      Kanit: true,
      Nunito: true,
      "PT+Sans": true,
      Quicksand: true,
    },
    display: "swap",
  },
})
