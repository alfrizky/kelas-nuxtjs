<script>
export default {
  data() {
    return {
      authToken: null, // Menyimpan token sementara di memori
    };
  },
  mounted() {
    // Coba baca token dari Local Storage saat komponen dimuat
    this.authToken = this.getToken();
    if (this.authToken) {
      console.log("Token ditemukan di Local Storage:", this.authToken);
    } else {
      console.log("Tidak ada token di Local Storage.");
    }
  },
  methods: {
    // Simpan token ke Local Storage
    // saveToken(token) {
    //   localStorage.setItem('authToken', token);
    //   this.authToken = token;
    //   console.log("Token berhasil disimpan:", token);
    // },
    // Ambil token dari Local Storage
    getToken() {
      return localStorage.getItem('authToken');
    },
    // // Hapus token dari Local Storage
    // removeToken() {
    //   localStorage.removeItem('authToken');
    //   this.authToken = null;
    //   console.log("Token berhasil dihapus.");
    // },
  },
};
</script>

<template>
    <div class="bg-blue-500 text-white p-6 rounded-lg shadow-lg w-96 mx-auto mt-10 text-center">
      <h1 class="text-2xl font-bold mb-4">Local Storage Token</h1>
      <p class="mb-4">
        token saat ini: 
        <span class="font-semibold">{{ authToken || 'Token tidak ada' }}</span>
      </p>
      <!-- <div class="flex justify-center space-x-4">
        <button
          class="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded"
          @click="saveToken('contoh-token')"
        >
          Simpan Token
        </button>
        <button
          class="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded"
          @click="removeToken"
        >
          Hapus Token
        </button>
      </div> -->
    </div>
  </template>
