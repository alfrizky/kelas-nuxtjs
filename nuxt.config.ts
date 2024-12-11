export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  runtimeConfig: {
    public: {
      authUrl: 'https://dev-akun.alkamedia.id/auth',
      redirectTo: 'http://localhost:3000',
      appId: 'eebbc426-80bb-4dc4-a859-68662f77fb80',
      lmsId: '2d05b8d2-d88c-4224-83bc-3490acfcc699',
    },
  },
});