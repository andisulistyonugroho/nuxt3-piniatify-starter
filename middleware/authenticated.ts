export default defineNuxtRouteMiddleware((to, from) => {
  const { user } = useAuthStore()
  if (!user.token) {
    return navigateTo('/')
  }
})