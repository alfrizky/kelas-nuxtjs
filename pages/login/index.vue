<script setup>
import { ref, onMounted } from 'vue';

const config = useRuntimeConfig();
const token = ref('');
const displayToken = ref(false);
const isLoggedIn = ref(false);

function redirectToLogin() {
  const { authUrl, redirectTo, appId, lmsId } = config.public;
  const loginUrl = `${authUrl}?appId=${appId}&redirectTo=${redirectTo}&lmsId=${lmsId}`;
  window.location.href = loginUrl;
}

function toggleToken() {
  displayToken.value = !displayToken.value;
  if (displayToken.value) {
    token.value = localStorage.getItem('authToken') || 'No token found';
  }
}

onMounted(() => {
  const storedToken = localStorage.getItem('authToken');
  isLoggedIn.value = !!storedToken;
  if (isLoggedIn.value) {
    token.value = storedToken;
  }
});
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="p-8 bg-white shadow-lg rounded-lg w-96">
      <button
        class="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        @click="redirectToLogin"
      >
        Login
      </button>
    </div>
  </div>
</template>
