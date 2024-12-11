<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  const query = new URLSearchParams(window.location.search);
  const token = query.get('authToken');

  if (token) {
    localStorage.setItem('authToken', token);
    router.push(`/?token=${token}`);
  } else {
    alert('Login failed or token not provided.');
    router.push('/');
  }
});
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold">Harap Tunggu, masih proses!!!</h1>
  </div>
</template>
