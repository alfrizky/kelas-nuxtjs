export default defineNuxtRouteMiddleware((to, from) => {
  const token = localStorage.getItem('authToken');

  if (!token && to.path !== '/callback') {
    return navigateTo('/');
  }

  if (token && to.path === '/') {
    return navigateTo('/dashboard');
  }
});
