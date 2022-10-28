
export default defineNuxtPlugin((nuxtApp) => {
  // let lang = 'en'
  // if (process.server) {
  //   // Learn more about the nuxtApp interface on https://v3.nuxtjs.org/docs/usage/nuxt-app#nuxtapp-interface-advanced
  //   const nuxtApp = useNuxtApp()
  //   const reqLocale = nuxtApp.ssrContext?.event.req.headers['accept-language']?.split(',')[0].slice(0, 2)
  //   if (reqLocale) {
  //     lang = reqLocale
  //   }
  // } else if (process.client) {
  //   const navLang = navigator.language.substr(0, 2)
  //   if (navLang) {
  //     lang = navLang
  //   }
  // }
  // console.log('lang:', lang);
  // nuxtApp.$i18n.setLocale(lang)
})
