<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const isAuthenticated = ref(false);
const router = useRouter();
const route = useRoute();

// Login URL with redirect back to the application
const loginUrl = `https://dev-akun.alkamedia.id/auth?appId=eebbc426-80bb-4dc4-a859-68662f77fb80&redirectTo=http://localhost:3000&lmsId=2d05b8d2-d88c-4224-83bc-3490acfcc699`;

const login = () => {
  window.location.href = loginUrl;
};

onMounted(() => {
  const token = route.query.token;
  if (token) {
    // Simulate authentication check
    isAuthenticated.value = true;
    // Here you would typically verify the token with your backend
  }
});
</script>

<style scoped>
@import 'tailwindcss/tailwind.css';

body {
  font-family: Arial, sans-serif;
}
</style>

<template>
  <div>
    <div v-if="isAuthenticated" class="text-center">
      <h1 class="text-3xl font-bold">Hello, World!</h1>
    </div>
    <div v-else class="flex justify-center items-center h-screen">
      <div class="p-8 bg-white shadow-lg rounded-lg w-96">
        <h1 class="text-2xl font-bold text-center mb-6">Login untuk mendapatkan akses</h1>
          <button @click="login" class="bg-blue-500 text-white w-full px-4 py-2 rounded hover:bg-blue-600">
            Login
          </button>
      </div>
    </div>
  </div>
</template>