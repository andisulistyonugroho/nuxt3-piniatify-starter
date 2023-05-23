// In Setup Stores:
// ref()s become state properties
// computed()s become getters
// function()s become actions

export const useAuthStore = defineStore(
  'auth',
  () => {
    const user = reactive({
      token: null,
      userId: null,
      profile: {},
      role: ''
    })
    function setUser(value: any) {
      user.token = value.id
      user.userId = value.userId
    }
    function setProfile(value: object) {
      user.profile = value
    }
    function setRole(value: string) {
      user.role = value
    }
    async function logout() {
      user.token = null
      user.userId = null
      user.profile = {}
      user.role = ''
    }
    return {setUser, setProfile, setRole, logout, user}
  },
  {
    persist: {
      storage: persistedState.localStorage,
      key: 'n3attaaw'
    }
  }
)