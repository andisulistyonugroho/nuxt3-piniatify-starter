// In Setup Stores:
// ref()s become state properties
// computed()s become getters
// function()s become actions
import {useAuthStore} from './auth'
export const useMenuStore = defineStore('menu',() => {
  const {user} = useAuthStore()
  
  const menus = ref([
    {
      title: 'User',
      link: '/user',
      roles: ['superadmin']
    }
  ])

  const openmenu = computed(() => {
    const menu = menus.value
    const mm = menu.filter(obj => obj.roles.includes(user.role))
    return mm
  })
  
  return {openmenu}
})