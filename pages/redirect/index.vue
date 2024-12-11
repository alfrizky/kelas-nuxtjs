<template>
  <div>
    <h1>Halaman Login</h1>
    <button @click="redirectToLogin">Login</button>
  </div>
</template>

<script>
export default {
  methods: {
    redirectToLogin() {
      // Redirect ke halaman login Alkamedia
      window.location.href = 'https://dev-akun.alkamedia.id/auth?appId=eebbc426-80bb-4dc4-a859-68662f77fb80&redirectTo=http://localhost:3000/callback&lmsId=2d05b8d2-d88c-4224-83bc-3490acfcc699';
    }
  }
}
</script>